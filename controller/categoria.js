const { json } = require('body-parser')
const Categoria = require('../model/categoria')
const rota = '/categoria'

module.exports = app => {
   app.get(rota, (req, res) => {
      // retorna os dados??
      Categoria.lista(res)
   })
   app.get((rota+'/:id'),(req, res) => {
      let id = parseInt(req.params.id)
      Categoria.buscaPorId(id, res)
   })
   app.post(rota, (req, res) => {
      console.log(req.body)
      Categoria.adiciona(req.body, res)
   })
   //PUT??
   app.patch((rota+'/:id'),(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Categoria.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "nome=Visa&descricao=Crédito" http://localhost:3000/categoria