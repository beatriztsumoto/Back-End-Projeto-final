import * as cuponsModel from "../models/cuponsModels.js";

export const listarTodos = async (req, res) => {
  try {
    const { nome_loja, endereco_loja, codigo } = req.query;

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

    // filtro por código de cupom
    if (codigo) {
      filtros.CODIGO = {
        contains: codigo,
        mode: "insensitive",
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
            "Nenhum cupom de loja com endereço " + endereco_loja + " foi encontrado",
        })
      }
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
        error: "O valor inserido não é um número válido",
        suggestion: "Verifique o ID e tente novamente",
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
        error: "O valor inserido não é um número válido",
        suggestion: "Verifique o ID e tente novamente",
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
      cupom: cupomExiste,
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
      "VALIDADE",
      "ID_LOJA"
    ];
    const faltandoCampo = camposObrigatorios.filter(campo => !dado[campo]);
  
    // Tratamento de erro para validação de campos obrigatórios
    if (faltandoCampo.length > 0) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Criação mal executada, verifique os campos",
        error: "VALIDATION_ERROR",
        details: "Os campos " + faltandoCampo + " é obrigatório"
      })
    }

    const codigoExiste = await cuponsModel.buscarPorCodigo(dado.CODIGOinicia );

    if (codigoExiste) {
      return res.status(409).json({
        status: 409,
        success: false,
        error: "DUPLICATE_LOJA",
        message: "Não é possível registrar mais de um cupom com o mesmo código",
        suggestion: "Insira um código diferente"
      })
    }

    // Cria o novo cupom
    const novoCupom = await cuponsModel.criarCupom(dado);

    return res.status(200).json({
      status: 201,
      success: true,
      message: "Cupom criado com sucesso!",
      cupom: novoCupom
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      error: "Erro interno do servidor",
      details: error.message,
    })
  }
}