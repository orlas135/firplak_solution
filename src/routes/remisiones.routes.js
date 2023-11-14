import { Router } from "express";
import {getRemisiones} from '../controllers/remisiones.controller';

const router = Router();
router.get ('/remisiones', getRemisiones);
export default router;