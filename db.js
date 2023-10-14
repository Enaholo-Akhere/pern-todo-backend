const Pool = require('pg').Pool;

const pool_dev = new Pool({
  user: 'postgres',
  password: 'asdf',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

const pool_prod = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

const pool = process.env.NODE_ENV === 'production' ? pool_prod : pool_dev;
module.exports = pool;
