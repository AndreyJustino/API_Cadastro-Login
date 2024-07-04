import db from '../repository/connection.js' // arquivo com a conexão do banco

async function Login(email, senha){ // função para fazer login
    const sql = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha = ?' // query pra ve se os dados estão no banco
    const dados = [email,senha] // dados a ve

    const conn = await db.connect() //fazendo a conexão com o banco

    const [rows] = await conn.query(sql, dados) // combinando query e os dados

    conn.end() //fechando conexão

    return rows
}

export default {Login}