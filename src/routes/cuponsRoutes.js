import { Router } from 'express';
import * as cuponsController from '../controllers/cuponsController.js';

const router = Router();

router.get("/", cuponsController.listarTodos);
router.get("/:id", cuponsController.buscarPorId);
router.delete("/:id", cuponsController.deletarPorId);

export default router;