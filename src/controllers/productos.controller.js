import getConnection from "../db/database.js";

const updateProducto = async (req, res) => {
  try {
    const connection = await getConnection();
    const { ProductoID } = req.params; // Captura el ID del producto desde la URL
    const { ProductoNombre, PrecioUnitario } = req.body; // Captura los datos enviados en el cuerpo de la solicitud

    // Validación de los datos recibidos
    if (!ProductoNombre || PrecioUnitario == null) {
      return res.status(400).json({ message: "Faltan datos en la solicitud (ProductoNombre o PrecioUnitario)" });
    }

    // Consulta SQL para actualizar los datos del producto
    const query = "UPDATE productos SET ProductoNombre = ?, PrecioUnitario = ? WHERE ProductoID = ?";
    const result = await connection.query(query, [ProductoNombre, PrecioUnitario, ProductoID]);

    // Validar si la actualización fue exitosa
    if (result.affectedRows > 0) {
      res.json({ message: "Producto actualizado correctamente" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("ERROR 500:", error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};

export const methodHTTP = {
  updateProducto,
};
