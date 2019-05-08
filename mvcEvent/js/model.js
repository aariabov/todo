function Model() {
    this.todos = [];
    // для уведомлений об изменении
    this.addTodoEvent = new Event(this);
}

Model.prototype.create = function(todo) {
    this.todos.push(todo);
    // уведомляем
    this.addTodoEvent.notify(todo);
}