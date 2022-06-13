// npm install express   
// npm --save-dev install nodemon
// npm install consign
// npm install body-parser
// npm install mysql
// npm install cors
// npm install express-form-data
// Comando para iniciar a aplicação: npm start
const customExpress = require('./config/customExpress')
const conexao = require('./infra/connection')
const Tabelas = require('./infra/tabelas')
const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Concetado ao banco de dados!')

        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3000,() => console.log('servidor rodando na porta 3000'))
    }
})


