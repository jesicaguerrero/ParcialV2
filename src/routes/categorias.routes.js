import {Router} from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.send("categorias de la Db inventarios")
})

app.use(categoriaRoutes)

export default router;

