import { getConnection } from "../database/connection";

export const getCustomers = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Clientes")
    console.log(result);
    res.json(result.recordset);
};