import { getConnection } from "../database/connection";

export const getTransportadoras = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Transportadoras")
    console.log(result);
    res.json(result.recordset);
};