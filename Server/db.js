const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'restableceR1961',
  post: 5432
})

const getInsults = (request, response) => {
  const {q} = request.query || '';
  pool.query(`SELECT * FROM trump WHERE insult LIKE '${q}%' ORDER BY id LIMIT 10;`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getInsults
}