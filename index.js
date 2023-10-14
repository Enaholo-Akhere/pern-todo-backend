const express = require('express');
const cors = require('cors');
const todo_router = require('./controller/todo-controller');
const dotenv = require('dotenv');
const postgres = require('postgres');
const Pool = require('pg').Pool;

dotenv.config();

const app = express();

const PORT = process.env.PORT;
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  try {
    const result = await sql`select version()`;
    console.log(result);
  } catch (error) {
    console.log('error from NEON', error.message);
  }
}
getPgVersion();

//middleware
app.use(cors());
app.use(express.json());

app.use('/', todo_router);

//ROUTES

app.listen(PORT, () => {
  console.log(`Server has started on Port ${PORT}`);
});
