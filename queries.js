const addTodo = 'INSERT INTO todo (description) VALUES($1) RETURNING *';

const getTodo = 'SELECT * FROM todo ';

const getTodoByID = 'SELECT * FROM todo WHERE todo_id = $1';

const updateTodo =
  'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *';

const deleteTodo = 'DELETE FROM todo WHERE todo_id = $1';

module.exports = {
  addTodo,
  getTodo,
  getTodoByID,
  updateTodo,
  deleteTodo,
};
