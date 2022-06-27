const Pool = require('pg').Pool
const pool = new Pool({
  user: 'bxxemwuyoqnowg',
  host: 'ec2-52-71-23-11.compute-1.amazonaws.com',
  database: 'davooggpn1042d',
  password: '531ef2c6cd91a14869b53bd435ca6e36747c665e515afb79012629d9950e2754',
  port: 5432,
})

module.exports = pool

/*
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
*/