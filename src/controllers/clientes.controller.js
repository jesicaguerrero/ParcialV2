import getConnection from "../db/database.js";

const createCliente = async (req, res) => {
    try {
        // Extraer datos del body
        const { Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono } = req.body;

        // Crear conexión con la base de datos
        const connection = await getConnection();

        // Ejecutar consulta para insertar datos en todas las columnas relevantes
        const query = `INSERT INTO clientes (Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono) 
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result = await connection.query(query, [Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono]);

        // Responder con éxito
        res.status(201).json({
            message: "Cliente registrado exitosamente",
            clienteId: result.insertId,
        });
    } catch (error) {
        console.error("Error al registrar cliente:", error);
        res.status(500).json({ message: "Error del servidor", error });
    }
};

export const methodHTTP = {
    createCliente
};
