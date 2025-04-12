import getConnection from "../db/database.js"
const getCategorias = async (req, res)=>{

    try{

        const conecction = await getConnection();
        const result = await conecction.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
    
        res.json(result);
    /*res.json({"categoria":"Electrodomesticos"}) */
    }
    catch(error){
     console.error("ERROR 50", error);
    }
}   

export const methodHTTP = {
      getCategorias 
}

