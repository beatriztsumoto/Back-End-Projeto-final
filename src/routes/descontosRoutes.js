import { Router } from 'express';
import * as descontosController from '../controllers/descontosController.js';

const router = Router();

router.get("/", descontosController.listarTodos);

export default router;