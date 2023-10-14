const pool = require('../db');
const queries = require('../queries');

const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(queries.addTodo, [description]);
    res.json({ message: 'todo added successfully', data: newTodo.rows });
  } catch (error) {
    console.log('error', error);
  }
};

const getTodos = async (req, res) => {
  try {
    const allTodos = await pool.query(queries.getTodo);
    res.send({ message: 'success', data: allTodos.rows });
  } catch (error) {
    console.log('error', error.message);
  }
};

const getTodosByID = async (req, res) => {
  const id = req.params.id;
  try {
    const oneTodo = await pool.query(queries.getTodoByID, [id]);
    res.json({ message: 'user fetched successfully', data: oneTodo.rows });
  } catch (error) {
    console.log('error', error);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  try {
    const updatedTodo = await pool.query(queries.updateTodo, [description, id]);
    res.json({ message: 'todo was updated', data: updatedTodo.rows[0] });
  } catch (error) {
    console.log('error', error);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query(queries.deleteTodo, [id]);
    res.json({ message: 'Todo deleted', data: deleteTodo.rows });
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = {
  addTodo,
  getTodos,
  getTodosByID,
  updateTodo,
  deleteTodo,
};
