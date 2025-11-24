import { Router } from 'express';
import * as cuponsController from '../controllers/cuponsController.js';

const router = Router();

router.get("/", cuponsController.listarTodos);

export default router;