import db from '../repository/connection.js'

async function Cadastrar(nome_usuario, email, senha) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha) VALUES(?, ?, ?)'; 
    
    const dados = [nome_usuario, email, senha];

    const conn = await db.connect();
    
    conn.query(sql, dados);
    conn.end();
}

async function Duplicato(email){
    const sql = 'SELECT * FROM tbl_usuario WHERE email = ?'

    const conn = await db.connect()

    const [rows] = await conn.query(sql, email)

    conn.end()

    return rows
}

export default {Cadastrar, Duplicato}