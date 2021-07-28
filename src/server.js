const app = require('./app')
const port = 3050

app.listen(process.env.PORT || port, () => {
    console.log(`Servidor rodando: http://localhost:${process.env.PORT || port}`);
})