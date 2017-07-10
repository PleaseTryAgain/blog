'use strict'
module.exports = function(app) {
	var todoList = require("../controllers/todoListController")

	app.route('/tasks')
		app.get(todoList.list_all_tasks)
		app.post(todoList.create_a_task);

	app.route('/task/:taskId')
		app.get(todoList.read_a_task)
		app.put(todoList.update_a_task)
		app.delete(todoList.delete_a_task);
};
