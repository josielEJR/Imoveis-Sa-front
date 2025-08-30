const mysql = require('mysql2');

require('dotenv').config();

console.log("🔧 Config DB:", {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD ? "****" : null,
  database: process.env.MYSQLDATABASE
});

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
});

connection.connect(err => {
  if (err) {
    console.error('❌ Erro ao se conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('✅ Conectado ao banco de dados!');
});

module.exports = connection;
