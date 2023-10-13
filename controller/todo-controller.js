const todoServices = require('../services/todo_services');
const express = require('express');
const router = express.Router();

router.post('/todos', todoServices.addTodo);

router.get('/todos', todoServices.getTodos);

router.get('/todos/:id', todoServices.getTodosByID);

router.put('/todos/:id', todoServices.updateTodo);

router.delete('/todos/:id', todoServices.deleteTodo);

module.exports = router;
