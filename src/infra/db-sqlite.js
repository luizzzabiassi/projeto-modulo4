const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('./src/infra/db-pub.db')

// Fechando o banco de dados
process.on('SIGINT', () => db.close(() => {
    console.log('Banco de Dados encerrado.');
    process.exit(0);
}))

module.exports = db