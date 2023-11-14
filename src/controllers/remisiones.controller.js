import { getConnection } from "../database/connection";

export const getRemisiones = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Remisiones")
    console.log(result);
    res.json(result.recordset);
};