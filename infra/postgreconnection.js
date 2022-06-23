const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aulanode',
  password: 'sql12345',
  port: 5432,
})

module.exports = pool

/*
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
*/