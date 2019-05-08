/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Controller(view, model) {
    this.model = model;
    this.view = view;
    // слушаем уведомления от view
    this.view.addTodoEvent.register(this.addTodo.bind(this));
}

Controller.prototype.addTodo = function(sender, todo) {
    console.log('controller addTodo');
    this.model.create(todo, self.updateView);
}

Controller.prototype.updateView = function(todo) {
    this.view.renderTodo(todo);
}