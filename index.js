const express = require('express');
const cors = require('cors');
const todo_router = require('./controller/todo-controller');

const app = express();

const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use('/', todo_router);

//ROUTES

app.listen(PORT, () => {
  console.log(`Server has started on Port ${PORT}`);
});
