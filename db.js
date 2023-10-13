const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   password: 'asdf',
//   // host: 'localhost',
//   host: 'ep-steep-leaf-20820975.us-east-2.aws.neon.tech',
//   port: 5432,
//   database: 'neondb',
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

module.exports = pool;
