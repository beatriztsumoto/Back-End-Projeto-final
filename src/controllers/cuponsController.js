import * as cuponsModel from "../models/cuponsModels.js";

export const listarTodos = async (req, res) => {
  try {
    const { nome_loja, codigo } = req.query;

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
