

import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import categoriasRoutes from 
'./routes/categorias.routes.js';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 5000);
//Middleware//
app.use(express.json());
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.use('/api/categorias', categoriasRoutes);

export default app;
