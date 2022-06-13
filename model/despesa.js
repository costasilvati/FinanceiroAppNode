const conexao = require('../infra/connection')


class Despesa{
    adiciona(despesa, res){
        let sql = 'INSERT INTO despesa SET ?'
        conexao.query(sql,despesa,(erro, resultado)=> {
            if(erro){
                res.status(400).json(400)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM despesa'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM despesa WHERE id_despesa_pk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    altera(id, valores, res){
        let sql = 'UPDATE despesa SET ? WHERE id_despesa_pk = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
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