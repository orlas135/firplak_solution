import { getConnection } from "../database/connection";

export const getEnvios = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Envios")
    console.log(result);
    res.json(result.recordset);
};