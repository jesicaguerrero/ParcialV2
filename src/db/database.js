
import mysql from "promise-mysql";
import config from "./../config.js";

const createConnection = async () => {
    return await mysql.createConnection({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password
    });
}

const connection = createConnection();

const getConnection = () => {
    return connection;
}

export default getConnection;
