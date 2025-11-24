import * as descontosModel from "../models/descontosModel.js";

export const listarTodos = async (req, res) => {
    try {
        const descontos = await descontosModel.listarTodos();

        return res.status(200).json({
            status: 200,
            success: true,
            message: "Descontos encontrados com sucesso!",
            data: descontos
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Erro ao listar descontos",
            error: error.message
        })
    }
}