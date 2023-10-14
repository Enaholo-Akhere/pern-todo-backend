const express = require('express');
const cors = require('cors');
const todo_router = require('./controller/todo-controller');
const dotenv = require('dotenv');
const Pool = require('pg').Pool;

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());

app.use('/', todo_router);

//ROUTES

app.listen(PORT, () => {
  console.log(`Server has started on Port ${PORT}`);
});
