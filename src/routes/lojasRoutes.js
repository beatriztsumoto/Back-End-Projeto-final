import { Router } from "express";
import * as lojasController from "../controllers/lojasController.js";

const router = Router();

router.get("/", lojasController.listarTodos);
router.get("/:id", lojasController.buscarPorId);
router.post("/", lojasController.criar);
router.delete("/:id", lojasController.deletar);
router.put("/:id", lojasController.atualizar);

export default router;