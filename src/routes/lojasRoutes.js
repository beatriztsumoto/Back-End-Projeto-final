import { Router } from "express";
import * as lojasController from "../controllers/lojasController.js";

const router = Router();

router.get("/", lojasController.listarTodos);
router.get("/:id", lojasController.buscarPorId);
router.post("/", lojasController.criar)

export default router;