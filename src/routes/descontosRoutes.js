import { Router } from 'express';
import * as descontosController from '../controllers/descontosController.js';

const router = Router();

router.get("/", descontosController.listarTodos);
router.get("/:id", descontosController.buscarPorId);
router.post("/", descontosController.criar);
router.delete("/:id", descontosController.deletar);

export default router;