export default class Controller{
    constructor(view, model){
        /*3 ways to keep context
        1. save context to closure: var self = this;
        2. bind context: bind(this)
        3. use arrow functuons: (todo) => this.addTodo(todo) */
        var self = this;
		this.model = model;
		this.view = view;
        this.view.bindAddTodo(todo => this.addTodo(todo));
        this.view.bindDeleteTodo(function(id){this.deleteTodo(id)}.bind(this));
        this.view.bindCheckTodo(function(id, isChecked){self.changeTodoState(id, isChecked)});
    }

    addTodo(title){
        console.log('controller addTodo');
        this.model.create(title, (todos) => this.updateView(todos));
    }

    changeTodoState(id, isChecked){
        var self = this;
        self.model.changeState(id, isChecked, function(todos) {self.updateView(todos)});
    }

    deleteTodo(id){
        this.model.delete(id, function(todos) {this.updateView(todos)}.bind(this));
    }

    updateView(todos){
        this.view.clearNewTodo();
        this.view.render(todos);
    }

    setView(locationHash){
        var route = locationHash.split('/')[1];
		var page = route || '';
        
        this.model.read(page, (todos) => this.view.render(todos));
    }
}