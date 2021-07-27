module.exports = class PetiscoDao {
    constructor(db){
        this.db = db
    }

    getAllPetiscos(){
        return new Promise((resolve, reject) => {
            this.db.all(`select * from PETISCOS`, (err, rows) => {
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            })
        })
    }
    
    getIdPetisco(id){
        return new Promise((resolve, reject) => {
            this.db.get(`select * from PETISCOS where id = ?`, id, (err, rows) => {
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            })
        })
    }

    postPetisco(petisco){
        return new Promise((resolve, reject) => {
            this.db.run(`insert into PETISCOS(nome, descricao_prato, preco) values(?, ?, ?)`, Object.values(petisco), err => {
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            })
        })
    }

    deletePetisco(id){
        return new Promise((resolve, reject) => {
            this.db.run(`delete from PETISCOS where id = ?`, id, err => {
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            })
        })
    }

    putPetisco(id, nome, descricao_prato, preco){
        if(nome || descricao_prato || preco){

            let virgula = false;
            let newArray = [];
            let sql = `update PETISCOS set `;

            if(nome){
                sql = sql + `nome = ?`
                virgula = true
                newArray.push(nome)
            }

            if(descricao_prato){
                if(virgula){
                    sql = sql + `, descricao_prato = ?`
                }
                else{
                    sql = sql + `descricao_prato = ?`
                    virgula = true
                }
                newArray.push(descricao_prato)
            }

            if(preco){
                if(virgula){
                    sql = sql + `, preco = ?`
                }
                else{
                    sql = sql + `preco = ?`
                    virgula = true
                }
                newArray.push(preco)
            }

            sql = sql + `where id = ?`
            newArray.push(id)
            return new Promise((resolve, reject) => {
                this.db.run(sql, newArray, err => {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve()
                    }
                })
            })
        }
        else{
            throw new Error("Nenhum atributo enviado.")
        }
    }
}