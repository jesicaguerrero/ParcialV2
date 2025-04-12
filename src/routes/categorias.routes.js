import { Router } from 'express';
import { methodHTTP as getCategoriaController } from '../controllers/categoria.controller.js';

const router = Router();

/* Crear una respuesta desde server metodo http get */
router.get('/', getCategoriaController.getCategorias );

/* Hacemos disponible a router en toda la app */
export default router;