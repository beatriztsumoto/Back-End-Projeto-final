import * as cuponsModel from "../models/cuponsModels.js";

export const listarTodos = async (req, res) => {
  try {
    const { nome_loja, endereco_loja, codigo, data_inicio_filtro, modo } =
      req.query;

    const filtros = {};

    // filtro por nome da loja
    if (nome_loja) {
      filtros.LOJA = {
        OR: [
          { NOME_SOCIAL: { contains: nome_loja, mode: "insensitive" } },
          { NOME_FANTASIA: { contains: nome_loja, mode: "insensitive" } },
        ],
      };
    }

    if (endereco_loja) {
      filtros.LOJA = {
        ENDERECO: { contains: endereco_loja, mode: "insensitive" },
      };
    }

    if (codigo) {
      filtros.CODIGO = {
        contains: codigo,
        mode: "insensitive",
      };
    }

    if (data_inicio_filtro) {
      const dataNormalizada = data_inicio_filtro.replace(/\//g, "-");
      const dataDeBusca = new Date(dataNormalizada);

      // Validação de data
      if (isNaN(dataDeBusca.getTime())) {
        return res.status(400).json({
          status: 400,
          success: false,
          error: "INVALID_DATE_FORMAT",
          message: "A data de início deve ser uma data válida.",
          details: "Use o formato YYYY-MM-DD ou ISO.",
        });
      }

      filtros.DATA_INICIO = {
        gte: dataDeBusca,
      };
    }

    const cupons = await cuponsModel.listarTodos(filtros);

    // Tratamento para array vazio
    if (cupons.length === 0) {
      // Tratamento para código de cupom não encontrado
      if (codigo) {
        return res.status(404).json({
          status: 404,
          success: false,
          total: 0,
          message: "Nenhum cupom com o código " + codigo + " foi encontrado",
        });
      }

      // Tratamento para nome de loja não encontrado
      if (nome_loja) {
        return res.status(404).json({
          status: 404,
          success: false,
          total: 0,
          message: "Nenhum cupom da loja " + nome_loja + " foi encontrado",
        });
      }

      if (endereco_loja) {
        return res.status(404).json({
          status: 404,
          success: false,
          total: 0,
          message:
            "Nenhum cupom de loja com endereço " +
            endereco_loja +
            " foi encontrado",
        });
      }

      if (data_inicio_filtro) {
        return res.status(404).json({
          status: 404,
          success: false,
          total: 0,
          message:
            "Nenhum cupom encontrado com início a partir da data " +
            data_inicio_filtro,
        });
      }
    }

    if (modo === "autocomplete") {
      const { busca } = req.query;

      if (!busca) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "É necessário digitar um título ou código",
        });
      }

      const filtros = {
        OR: [
          { TITULO: { contains: busca, mode: "insensitive" } },
          { CODIGO: { contains: busca, mode: "insensitive" } },
        ],
      };

      const cupons = await cuponsModel.listarTodos(filtros);

      if (!cupons || cupons.length === 0) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: "Não foi encontrado nenhum cupom com esse título ou código",
        });
      }

      return res.status(200).json(
        cupons.map((c) => ({
          ID_CUPOM: c.ID_CUPOM,
          ID_LOJA: c.ID_LOJA,
          TITULO: c.TITULO,
          CODIGO: c.CODIGO,
        }))
      );
    }

    return res.status(200).json({
      status: 200,
      success: true,
      total: cupons.length,
      message: "Lista de cupons disponíveis",
      cupons,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno de servidor",
      details: error.message,
      status: 500,
    });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "ID inválido",
      });
    }

    const cupom = await cuponsModel.buscarPorId(id);

    if (!cupom) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Cupom não encontrado",
        error: "CUPOM_NOT_FOUND",
        suggestion: "Verifique se o cupom está registrado",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Cupom encontrado com sucesso!",
      cupom,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: "Erro interno do servidor",
      details: error.message,
    });
  }
};

export const deletarPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "ID inválido",
      });
    }

    const cupomExiste = await cuponsModel.buscarPorId(id);

    if (!cupomExiste) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Cupom não encontrado",
        error: "CUPOM_NOT_FOUND",
        suggestion: "Verifique se o cupom está registrado",
      });
    }

    await cuponsModel.deletarPorId(id);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Cupom deletado com sucesso!",
      cupomDeletado: cupomExiste,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: "Erro interno do servidor",
      details: error.message,
    });
  }
};

export const criarCupom = async (req, res) => {
  try {
    const dado = req.body;

    const camposObrigatorios = [
      "TITULO",
      "DESCRICAO",
      "CODIGO",
      "DATA_INICIO",
      "VALIDADE",
      "ID_LOJA",
    ];

    const faltandoCampo = camposObrigatorios.filter((campo) => !dado[campo]);

    if (faltandoCampo.length > 0) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Criação não executada, verifique os campos",
        error: "VALIDATION_ERROR",
        details: "O campo " + faltandoCampo + " é obrigatório",
      });
    }

    // Normaliza datas com "/"
    const dataInicioStr = dado.DATA_INICIO.replace(/\//g, "-");
    const validadeStr = dado.VALIDADE.replace(/\//g, "-");

    // Converte datas
    const dataInicio = new Date(dataInicioStr);
    const validade = new Date(validadeStr);

    // Valida DATA_INICIO
    if (isNaN(dataInicio.getTime())) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "INVALID_DATE",
        message:
          "O campo DATA_INICIO deve ser uma data válida no formato DateTime.",
        details: "A data de início deve estar no formato YYYY-MM-DD ou ISO.",
      });
    }

    // Valida VALIDADE
    if (isNaN(validade.getTime())) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "INVALID_DATE",
        message:
          "O campo VALIDADE deve ser uma data válida no formato DateTime.",
        details: "A data de validade deve estar no formato YYYY-MM-DD ou ISO.",
      });
    }

    // Verifica se datas estão no passado
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataInicio < hoje) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "PAST_DATE",
        message: "A DATA_INICIO não pode ser anterior à data atual.",
        currentDate: hoje,
      });
    }

    if (validade < hoje) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "PAST_DATE",
        message: "A VALIDADE não pode ser anterior à data atual.",
        currentDate: hoje,
      });
    }

    // Verifica se validade é depois do início
    if (validade < dataInicio) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "INVALID_RANGE",
        message: "A VALIDADE não pode ser anterior à DATA_INICIO.",
      });
    }

    // Salvar datas corrigidas no objeto
    dado.DATA_INICIO = dataInicio;
    dado.VALIDADE = validade;

    const codigoExiste = await cuponsModel.buscarPorCodigo(dado.CODIGO);

    if (codigoExiste) {
      return res.status(409).json({
        status: 409,
        success: false,
        error: "DUPLICATE_CODIGO",
        message: "Não é possível registrar mais de um cupom com o mesmo código",
        suggestion: "Insira um código diferente",
      });
    }

    //Verifica se loja existe
    const lojaExiste = await cuponsModel.buscarPorId(parseInt(dado.ID_LOJA));

    if (!lojaExiste) {
      return res.status(404).json({
        status: 404,
        success: false,
        error: "LOJA_NOT_FOUND",
        message: "Não é possível atualizar um cupom de uma loja inexistente",
        suggestion:
          "Verifique se o ID_LOJA inserido pertence a uma loja cadastrada",
      });
    }

    const novoCupom = await cuponsModel.criarCupom(dado);

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Cupom criado com sucesso!",
      cupom: novoCupom,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      error: "Erro interno do servidor",
      details: error.message,
    });
  }
};

export const atualizarCupom = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dado = req.body;

    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "ID inválido",
      });
    }

    const cupomExiste = await cuponsModel.buscarPorId(id);
    if (!cupomExiste) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Cupom não encontrado",
        error: "CUPOM_NOT_FOUND",
        suggestion: "Verifique se o cupom está registrado",
      });
    }

    const camposObrigatorios = [
      "TITULO",
      "DESCRICAO",
      "CODIGO",
      "VALIDADE",
      "ID_LOJA",
    ];

    const faltandoCampo = camposObrigatorios.filter((campo) => !dado[campo]);

    if (faltandoCampo.length > 0) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Atualização não executada, verifique os campos",
        error: "VALIDATION_ERROR",
        details: "O campo " + faltandoCampo + " é obrigatório",
      });
    }

    const dataInicioStr = dado.DATA_INICIO.replace(/\//g, "-");
    const validadeStr = dado.VALIDADE.replace(/\//g, "-");

    const dataInicio = new Date(dataInicioStr);
    const validade = new Date(validadeStr);

    // Valida DATA_INICIO
    if (isNaN(dataInicio.getTime())) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "INVALID_DATE",
        message:
          "O campo DATA_INICIO deve ser uma data válida no formato DateTime.",
        details: "A data de início deve estar no formato YYYY-MM-DD ou ISO.",
      });
    }

    if (isNaN(validade.getTime())) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "INVALID_DATE",
        message:
          "O campo VALIDADE deve ser uma data válida no formato DateTime.",
        details: "A data de validade deve estar no formato YYYY-MM-DD ou ISO.",
      });
    }

    const dataAtual = new Date();

    dataAtual.setHours(0, 0, 0, 0);
    if (validade < dataAtual) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "PAST_DATE",
        message: "A data de validade não pode ser anterior à data atual.",
        details: "Insira uma data futura.",
        currentDate: dataAtual,
      });
    }

    if (validade < dataInicio) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "INVALID_RANGE",
        message: "A VALIDADE não pode ser anterior à DATA_INICIO.",
      });
    }

    // Salvar datas corrigidas no objeto
    dado.DATA_INICIO = dataInicio;
    dado.VALIDADE = validade;

    const codigoExiste = await cuponsModel.buscarPorCodigo(dado.CODIGO);

    if (codigoExiste && codigoExiste.ID_CUPOM !== id) {
      return res.status(409).json({
        status: 409,
        success: false,
        error: "DUPLICATE_CODIGO",
        message: "Não é possível registrar mais de um cupom com o mesmo código",
        suggestion: "Insira um código diferente",
      });
    }

    //Verifica se loja existe
    const lojaExiste = await cuponsModel.buscarPorId(parseInt(dado.ID_LOJA));

    if (dado.ID_LOJA !== cupomExiste.ID_LOJA) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: "CANNOT_CHANGE_STORE",
        message: "Não é permitido alterar a loja proprietária do cupom",
        suggestion: "Mantenha o mesmo ID_LOJA do cupom original",
      });
    }

    if (!lojaExiste) {
      return res.status(404).json({
        status: 404,
        success: false,
        error: "LOJA_NOT_FOUND",
        message: "Não é possível atualizar um cupom de uma loja inexistente",
        suggestion:
          "Verifique se o ID_LOJA inserido pertence a uma loja cadastrada",
      });
    }

    const cupomAtualizado = await cuponsModel.atualizarCupom(id, dado);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Cupom atualizado com sucesso!",
      cupom: cupomAtualizado,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      error: "Erro interno do servidor",
      details: error.message,
    });
  }
};
