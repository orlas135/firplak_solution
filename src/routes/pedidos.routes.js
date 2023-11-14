import { Router } from "express";
import {getPedidos} from '../controllers/pedidos.controller';

const router = Router();
router.get ('/pedidos', getPedidos);
export default router;