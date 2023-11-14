import sql from 'mssql'

const dbSettings = {
    user: 'User_app',
    password: 'U$34f0R4Pp2023*',
    server: 'localhost',
    database: 'Firplak',
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
    
}

export async function getConnection () {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error)
    }
}

export {sql};