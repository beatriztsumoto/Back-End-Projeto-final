import { Router } from "express";
import * as lojasController from "../controllers/lojasController.js";

const router = Router();

router.get("/", lojasController.listarTodos);

export default router;