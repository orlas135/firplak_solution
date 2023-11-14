import { Router } from "express";
import {getSucursales} from '../controllers/sucursales.controller';

const router = Router();
router.get ('/sucursales', getSucursales);
export default router;