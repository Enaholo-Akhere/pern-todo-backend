const todoServices = require('../services/todo_services');
const express = require('express');
const router = express.Router();

const neon_url =
  'postgres://Enaholo-Akhere:FIuoW19hDtSU@ep-steep-leaf-20820975-pooler.us-east-2.aws.neon.tech/neondb';

router.post(`/todos`, todoServices.addTodo);

router.get(`/todos`, todoServices.getTodos);

router.get(`/todos/:id`, todoServices.getTodosByID);

router.put(`/todos/:id`, todoServices.updateTodo);

router.delete(`/todos/:id`, todoServices.deleteTodo);

module.exports = router;
