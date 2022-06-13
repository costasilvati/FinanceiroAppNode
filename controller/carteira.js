const { json } = require('body-parser')
const Carteira = require('../model/carteira')

module.exports = app => {
   app.get('/carteira', (req, res) => {
      // retorna os dados??
      Carteira.lista(res)
   })
   app.get('/carteira/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Carteira.buscaPorId(id, res)
   })
   app.post('/carteira', (req, res) => {
      console.log(req.body)
      Carteira.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/carteira/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Carteira.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "nome=Visa&descricao=Crédito&saldo=-100&limite=1500&id_login_fk=1" http://localhost:3000/carteira