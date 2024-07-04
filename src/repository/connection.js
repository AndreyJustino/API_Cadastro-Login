import mysql2 from 'mysql2/promise'; // mysql2 me permiti conectar com o mysql

async function connect() { // credencias para me conectar com o banco
  const connection = await mysql2.createConnection({ 
    user : 'root',
    host : 'localhost',
    port : 3306,
    password : '',
    database : 'banco_api'
  })
  
  return connection;
};

export default {connect};