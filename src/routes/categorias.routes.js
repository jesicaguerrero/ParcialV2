import { Router } from 'express';
import { methodHTTP as categoriasController } from '../controllers/categoria.controller.js';

const router = Router();

/* Crear una respuesta desde server metodo http get */
router.get("/", categoriasController.getCategorias);
router.post("/", categoriasController.postCategorias);

// Ruta para obtener una categoría por ID
router.get("/:id", categoriasController.getCategory);

// Ruta para eliminar una categoría por ID
router.delete("/:id'", categoriasController.deleteCategory );

// Ruta para actualizar una categoría por ID
router.put("/:id", categoriasController.updateCategorias);
export default router;
