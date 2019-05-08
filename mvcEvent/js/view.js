function View(model) {
    this.model = model;
    // для уведомлений
    this.addTodoEvent = new Event(this);
    // подписываемся на уведомления от модели
    this.model.addTodoEvent.register((sender, todo) => this.renderTodo(sender, todo));
    document.getElementById('btn').addEventListener('click', 
        () => this.addTodo());
}

View.prototype.addTodo = function () {
    this.addTodoEvent.notify(document.getElementById('input').value);
    document.getElementById('input').value = '';
}

View.prototype.renderTodo = function (sender, todo) {
    var li = document.createElement('li');
        li.innerHTML = todo;
        document.getElementById('list').appendChild(li);
}