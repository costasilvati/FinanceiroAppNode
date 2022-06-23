//const res = require('express')
const conexao = require('../infra/postgreconnection')

class Categoria{

    adiciona(categoria, res){
        const sql = {
            name: 'fetch-user',
            text: 'INSERT INTO categoria values (default,$1, $2) RETURNING *',
            values: [categoria.nome, categoria.descricao],
          }
        conexao.query(sql, (erro, resultado)=> {
            if(erro){
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM categoria'
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    buscaPorId(id, res){
        const sql = {
            name: 'fetch-user',
            text: 'SELECT * FROM categoria WHERE id_categoria_pk= $1',
            values: [id],
          }
        conexao.query(sql,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    altera(id, valores, res){
        const sql = {
            name: 'fetch-user',
            text: 'UPDATE categoria SET nome=$1,descricao=$2 WHERE id_categoria_pk=$3',
            values: [valores.nome,valores.descricao,id],
          }
        conexao.query(sql,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

}
module.exports = new Categoria