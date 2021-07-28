const Petisco = require('../models/petisco-model')
const PetiscoDao = require('../dao/PetiscoDao')

module.exports = (app, db) => {
    let petiscoBanco = new PetiscoDao(db)

    app.get('/petiscos', async (req, res) => {
        try{
            let results = await petiscoBanco.getAllPetiscos()
            res.status(200).json({
                result: results,
                count: results.length
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message,
                error: true
            })
        }
    })

    app.get('/petiscos/:id', async (req, res) => {
        const { id } = req.params
        try{
            if(parseInt(id)){
                let results = await petiscoBanco.getIdPetisco(id)
                if(results){
                    res.status(200).json({
                        result: results,
                        count: results.length
                    })
                }
                else{
                    throw new Error("Nenhum petisco encontrado.")
                }
            }
            else{
                throw new Error("É esperado um ID do tipo INT.")
            }
        }
        catch(err){
            res.status(500).json({
                message: err.message,
                error: true
            })
        }
    })

    app.post('/petiscos', async (req, res) => {
        const { nome, descricao_prato, preco } = req.body
        let newPetisco = new Petisco(nome, descricao_prato, preco)
        try{
            await petiscoBanco.postPetisco(newPetisco)
            res.status(201).json({
                message: "Petisco inserido com sucesso",
                error: false
            })
        }
        catch{
            res.status(500).json({
                message: "Erro ao inserir petisco.",
                serverLog: err.message,
                error: true
            })
        }
    })

    app.put('/petiscos/:id', async (req, res) => {
        const { nome, descricao_prato, preco } = req.body
        const { id } = req.params
        try{
            await petiscoBanco.putPetisco(id, nome, descricao_prato, preco)
            res.status(200).json({
                message: `Petisco com id: ${id}, foi atualizado.`,
                error: false
            })
        }
        catch(err){
            res.status(500).json({
                message: "Erro ao atualizar o petisco, verifique se os campos passados são válidos.",
                serverLog: err.message,
                error: true
            })
        }
    })

    app.delete('/petiscos/:id', async (req, res) => {
        const { id } = req.params
        try{
            await petiscoBanco.deletePetisco(id)
            res.status(200).json({
                message: `Petisco com id: ${id}, foi deletado.`,
                error: false
            })
        }
        catch(err){
            res.status(500).json({
                message: "Erro ao deletar petisco.",
                serverLog: err.message,
                error: true
            })
        }
    })
}