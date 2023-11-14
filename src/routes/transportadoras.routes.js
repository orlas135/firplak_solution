import { Router } from "express";
import {getTransportadoras} from '../controllers/transportadoras.controller';

const router = Router();
router.get ('/transportadoras', getTransportadoras);
export default router;