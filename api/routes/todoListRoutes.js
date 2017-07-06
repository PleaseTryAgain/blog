'use strict'
module.exports = function(app) {
	var todoList = require("../controllers/todoListController")

	// app.router('/tasks')
		app.get('/tasks', todoList.list_all_tasks)
		app.post('/tasks', todoList.create_a_task);

	// app.router('/task/:taskId')
		app.get('/task/:taskId', todoList.read_a_task)
		app.put('/task/:taskId', todoList.update_a_task)
		app.delete('/task/:taskId', todoList.delete_a_task);
};