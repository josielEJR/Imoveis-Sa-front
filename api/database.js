const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Erro ao se conectar ao banco de dados:', err);
    process.exit(1); // encerra a aplicação se não conseguir conectar
  }
  console.log('✅ Conectado ao banco de dados!');
  if (connection) connection.release();
});

module.exports = pool.promise(); 
