import { Router } from "express";
import {getEnvios} from '../controllers/envios.controller';

const router = Router();
router.get ('/envios', getEnvios);
export default router;