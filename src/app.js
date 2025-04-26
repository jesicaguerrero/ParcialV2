

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoriasRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from './routes/productos.routes.js';

dotenv.config();

const app = express();
// Configuración del puerto
app.set("port", process.env.PORT || 5000);

// Middleware
app.use(express.json()); // Parsear JSON en solicitudes
app.use(cors()); // Habilitar CORS

// Rutas
app.use("/api/categorias", categoriasRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use('/api/productos', productosRoutes);

app.set("port", process.env.PORT || 5000);

export default app;
