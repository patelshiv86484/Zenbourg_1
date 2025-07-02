const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false // Necessary if your DB requires SSL and you don't have CA certs configured
  // }
})

pool.on("connect", () => {
  console.log("Connected to the PostgreSQL database!")
})

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err)
  process.exit(-1)
})

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool, // Export pool if you need direct access for transactions etc.
}
