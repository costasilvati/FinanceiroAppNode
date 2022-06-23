const conexao = require('../infra/postgreconnection')

class Login{

    adiciona(login, res){
        const sql = {
            name: 'fetch-user',
            text: 'INSERT INTO login values (default,$1, $2) RETURNING *',
            values: [login.nome, login.senha],
          }
        conexao.query(sql,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro.rows)
            }else{
                res.status(200).json(resultado.rows)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM login'
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
            text: 'SELECT * FROM login WHERE id_login_pk = $1',
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
    
    altera(id, valores, res){
        const query = {
            // give the query a unique name
            name: 'fetch-user',
            text: 'UPDATE login SET email= $1, senha= $2 WHERE id_login_pk = $3',
            values: [valores.email,valores.senha, id],
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

module.exports = new Login