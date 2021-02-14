const { pool } = require('./config')

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