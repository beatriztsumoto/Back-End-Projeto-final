import { categoriasPermitidas } from "./lojasController.js";

export const listarCategorias = (req, res) => {
    return res.status(200).json(categoriasPermitidas);
};