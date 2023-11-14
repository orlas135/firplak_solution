import { Router } from "express";
import {getCustomers} from '../controllers/clientes.controller'

const router = Router();
router.get ('/clientes', getCustomers)
export default router;