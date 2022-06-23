const res = require('express')
const conexao = require('../infra/postgreconnection')

class Carteira{

    adiciona(carteira, res){
        const sql = {
            name: 'fetch-user',
            text: 'INSERT INTO carteira VALUES (default,$1,$2,$3,$4,$5) RETURNING *',
            values: [carteira.nome, carteira.descricao,carteira.saldo,carteira.limite,carteira.id_login_fk],
          }
        conexao.query(sql,(erro, resultado)=> {
            if(erro){
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM carteira'
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    buscaPorId(id, res){
        const query = {
            // give the query a unique name
            name: 'fetch-user',
            text: 'SELECT * FROM carteira WHERE id_carteira_pk=$1',
            values: [id],
          }

        conexao.query(query,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    buscaPorLogin(login_id, res){
        const query = {
            // give the query a unique name
            name: 'fetch-user',
            text: 'SELECT * FROM carteira WHERE id_login_fk=$1',
            values: [login_id],
          }
        conexao.query(query,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    altera(id, carteira, res){
        //let sql = 'UPDATE carteira SET nome=$1,descricao=$2,saldo=$3,limite=$4,id_login_fk=$5 WHERE id_carteira_pk=$6'
        const query = {
            // give the query a unique name
            name: 'fetch-user',
            text: 'UPDATE carteira SET nome=$1,descricao=$2,saldo=$3,limite=$4,id_login_fk=$5 WHERE id_carteira_pk=$6',
            values: [carteira.nome,carteira.descricao,carteira.saldo,carteira.limite,carteira.id_login_fk,id],
          }
        conexao.query(query,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

}
module.exports = new Carteira