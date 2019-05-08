(function(){
    function Controller(view, model) {
        var self = this;
		self.model = model;
		self.view = view;
        self.view.bindAddTodo(function(todo){self.addTodo(todo)});
        self.view.bindDeleteTodo(function(id){self.deleteTodo(id)});
        self.view.bindCheckTodo(function(id, isChecked){self.changeTodoState(id, isChecked)});
    }
    
    Controller.prototype.addTodo = function(title) {
        var self = this;
        console.log('controller addTodo');
        self.model.create(title, function(todos) {self.updateView(todos)});
    }

    Controller.prototype.changeTodoState = function(id, isChecked) {
        var self = this;
        self.model.changeState(id, isChecked, function(todos) {self.updateView(todos)});
    }

    Controller.prototype.deleteTodo = function(id) {
        var self = this;
        self.model.delete(id, function(todos) {self.updateView(todos)});
    }
    
    Controller.prototype.updateView = function(todos) {
        this.view.clearNewTodo();
        this.view.render(todos);
    }

    Controller.prototype.setView = function (locationHash) {
		var route = locationHash.split('/')[1];
		var page = route || '';
        
        this.model.read(page, (todos) => this.view.render(todos));
	};

    window.app = window.app || {};
    window.app.Controller = Controller;
})();
