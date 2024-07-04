import db from '../repository/connection.js' // arquivo onde faço a conexão com o banco de dados

async function Cadastrar(nome_usuario, email, senha) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha) VALUES(?, ?, ?)'; // query sql q vai cadastrar
    
    const dados = [nome_usuario, email, senha]; // os dados que vão ser usados para fazer o cadastro

    const conn = await db.connect(); // extansiando a conexão
    
    conn.query(sql, dados); // juntando a query com os dados
    conn.end(); // fechando a conexão
}

async function Duplicato(email){ // verificar se o email ja não foi cadastrado
    const sql = 'SELECT * FROM tbl_usuario WHERE email = ?'

    const conn = await db.connect()

    const [rows] = await conn.query(sql, email)

    conn.end()

    return rows
}

export default {Cadastrar, Duplicato}