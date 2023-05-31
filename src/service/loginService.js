import db from '../repository/connection.js'

async function Login(email, senha){
    const sql = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha = ?'
    const dados = [email,senha]

    const conn = await db.connect()

    const [rows] = await conn.query(sql, dados)

    conn.end()

    return rows
}

export default {Login}