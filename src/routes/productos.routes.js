import { Router } from 'express';
import { methodHTTP as productosController } from '../controllers/productos.controller.js';

const router = Router();

// Ruta para actualizar el nombre y el precio de un producto por ID
router.put('/:ProductoID', productosController.updateProducto);

export default router;
