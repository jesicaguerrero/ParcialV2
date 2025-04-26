import { Router } from 'express';
import { methodHTTP as empleadoController } from '../controllers/empleado.controller.js';

const router = Router();

// Define un endpoint GET para obtener todos los empleados
router.get('/', empleadoController.getEmpleados);

export default router;
