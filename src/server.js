// Importando o arquvivo app.js e guardando a porta usada em uma variável 
const app = require('./app')
const port = 3050

// Implementando "escutador" para o servidor
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor rodando: http://localhost:${process.env.PORT || port}`);
})