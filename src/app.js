
import express from "express";
import categoriaRoutes from "./routes/categorias.rautes.js"
const app = express();

app.set("port",5000)

app.use(categoriaRoutes)

export default app; 