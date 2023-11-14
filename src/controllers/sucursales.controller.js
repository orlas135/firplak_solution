import { getConnection } from "../database/connection";

export const getSucursales = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Sucursales")
    console.log(result);
    res.json(result.recordset);
};