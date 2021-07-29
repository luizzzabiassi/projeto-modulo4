const request = require('supertest')
const app = require('../app')

describe('Testando rotas de petiscos...', () => {

    it('GET: /petiscos', async () => {
        const response = await request(app).get('/petiscos')
        expect(response.body).toHaveProperty('result')
    })

    it('GET: /petiscos/id', async () => {
        const response = await request(app).get('/petiscos/1')
        expect(response.body).toHaveProperty('result')
    })

    it('POST: /petiscos', async () => {
        const response = await request(app).post('/petiscos').send({
            nome: '',
            descricao_prato: '',
            preco: ''
        })
        expect(response.body).toHaveProperty('message')
    })

    it('PUT: /petiscos/id', async () => {
        const response = await request(app).put('/petiscos/5').send({
            nome: '',
            descricao_prato: '',
            preco: ''
        })
        expect(response.body).toHaveProperty('message')
    })

    it('DELETE: /petiscos/id', async () => {
        const response = await request(app).delete('/petiscos/5')
        expect(response.body).toHaveProperty('message')
    })
})