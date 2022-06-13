const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sql12345",
    port:3306,
    database:"aulanode2"
})

module.exports = conexao
