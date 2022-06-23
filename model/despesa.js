const conexao = require('../infra/postgreconnection')
const dayjs = require("dayjs")
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

class Despesa{
    adiciona(despesa, res){
        // DayJS:
        // objeto DayJS construtor(dataRecebida, padrão da data)
        let dataObj = dayjs(despesa.data, 'DD/MM/YYYY') // retorna um objeto days
        let dateFormat = dataObj.format('YYYY-MM-DD');
        const sql = {
            name: 'fetch-user',
            text: 'INSERT INTO despesa (id_despesa_pk, valor, descricao, tipo, data, id_categoria_fk, id_carteira_fk) VALUES (default, $1, $2, $3, $4, $5, $6) RETURNING *',
            values: [despesa.valor, despesa.descricao, despesa.tipo, dateFormat, despesa.id_categoria_fk, despesa.id_carteira_fk],
          }
        conexao.query(sql,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = {
            name: 'fetch-user',
            text: 'SELECT * FROM despesa',
            values: [],
          }
        
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                resultado.rows.forEach(element => {
                    //2022-06-21T03:00:00.000Z
                    console.log(element.data)
                    let dataObj = dayjs(element.data, 'YYYY-MM-DD HH:mm:ss') // retorna um objeto days
                    let dateFormat = dataObj.format('YYYY-MM-DD');
                    //element.data=dateFormat
                    console.log(dataObj +' '+dateFormat)
                });
                res.status(200).json(resultado.rows)}
            })
    }

    buscaPorId(id, res){
        const sql = {
            name: 'fetch-user',
            text: 'SELECT * FROM despesa WHERE id_despesa_pk=$1',
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

    altera(id, despesa, res){
        // DayJS:
        // objeto DayJS construtor(dataRecebida, padrão da data)
        let dataObj = dayjs(despesa.data, 'DD/MM/YYYY') // retorna um objeto days
        let dateFormat = dataObj.format('YYYY-MM-DD');
        const sql = {
            name: 'fetch-user',
            text: 'UPDATE despesa SET valor=$1, descricao=$2, tipo=$3, data=$4, id_categoria_fk=$5, id_carteira_fk=$6 WHERE id_despesa_pk=$7',
            values: [despesa.valor, despesa.descricao, despesa.tipo, dateFormat, despesa.id_categoria_fk, despesa.id_carteira_fk, id],
          }
        conexao.query(sql,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    buscarPorCategoria(id, res){
        let sql = 'SELECT * FROM despesa WHERE id_categoria_fk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    

}
module.exports = new Despesa