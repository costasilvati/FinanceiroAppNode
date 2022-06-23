const postgre = require('postgres')

const conexao = postgre.createConnection({
    host: "localhost", //"ec2-52-71-23-11.compute-1.amazonaws.com",
    user: "postgres",//"bxxemwuyoqnowg",
    password: "sql12345",//"531ef2c6cd91a14869b53bd435ca6e36747c665e515afb79012629d9950e2754",
    port:5432,
    database:"aulanode"//"davooggpn1042d"
})

module.exports = conexao
