const mysql = require('mysql');

console.log('🔌 Iniciando conexão com o banco de dados...');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'websiteInfo',
});

connection.connect(err => {
  if (err) {
    console.error('❌ Erro ao se conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('✅ Conectado ao banco de dados!');
});

module.exports = connection;
