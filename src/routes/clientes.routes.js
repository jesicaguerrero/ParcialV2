import { Router } from 'express';
import { methodHTTP as clientesController } from '../controllers/clientes.controller.js';

const router = Router();

// Endpoint para registrar un cliente
router.post('/', clientesController.createCliente);

export default router;
