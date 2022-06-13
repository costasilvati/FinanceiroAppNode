const { json } = require('body-parser')
const Despesa = require('../model/despesa')
const rota = '/despesa'
const date = require('date-and-time');
date.locale

module.exports = app => {
   app.get(rota, (req, res) => {
      // retorna os dados??
      Despesa.lista(res)
   })
   app.get((rota+'/:id'),(req, res) => {
      let id = parseInt(req.params.id)
      Despesa.buscaPorId(id, res)
   })
   app.post(rota, (req, res) => {
      console.log(req.body)
      let formatada = date.format(new Date(), 'YYYY-MM-DD');
      console.log('Data: ' + new Date() + '- '+formatada)
      Despesa.adiciona(req.body, res)
   })
   //PUT??
   app.patch((rota+'/:id'),(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Despesa.altera(id, valores, res)
   })

   app.get((rota+'/categoria/:id_categoria'),(req, res) =>{
      let id_categoria = parseInt(req.params.id_categoria)
      Despesa.buscarPorCategoria(id_categoria, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "valor=20.0&descricao=Compras&tipo=D&data=2022-05-06&id_categoria_fk=2&id_carteira_fk=1" http://localhost:3000/despesa