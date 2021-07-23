// Importando SQLite3 e criando um banco dados pelo arquivo 'db-pub.db'
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./db-pub.db');

// Variável com script para criar a tabela de Petiscos
const create_petiscos = `
    CREATE TABLE IF NOT EXISTS "PETISCOS"(
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "NOME" VARCHAR(70),
        "DESCRICAO_PRATO" VARCHAR(120),
        "PRECO" FLOAT
    );`

// Variável com script para inserir dados na tabela de Petiscos
const insert_petiscos = `
    INSERT INTO PETISCOS(NOME, DESCRICAO_PRATO, PRECO)
    VALUES
        ('Bolinho de Bacalhau', '15 bolinhos empanados e fritos de bacalhau acompanhados de um molho tártaro.', 15.99),
        ('Coxinha', '12 coxinhas de frango com catupiry acompanhadas por um molho rosé.', 12.99),
        ('Camarão frito', '16 camarões fritos ao alho com limão ao lado para acompanhar.', 20.99),
        ('Batata Frita', 'Porção grande de batata frita com calabresa e duas opções de molhos (cheddar ou barbecue) para escolher.', 18.99)
    `

// Função para rodar o script de criação de tabela no banco de dados
function createTable(){
    db.run(create_petiscos, err => {
        if(err) console.log("Erro ao criar a tabela.");
    })
}

// Função para rodar o script de inserção de dados na tabela
function insertTable(){
    db.run(insert_petiscos, err => {
        if(err) console.log("Erro ao inserir dados na tabela.");
    })
}

// Método para executar as querys e executa na ordem que foi declarada
db.serialize(() => {
    createTable();
    insertTable();
})