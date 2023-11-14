import { getConnection } from "../database/connection";

export const getPedidos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Pedidos")
    console.log(result);
    res.json(result.recordset);
};