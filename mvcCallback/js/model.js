(function() {
    function Model() {
        this._dbName = 'todos';
        this.todos = JSON.parse(localStorage.getItem(this._dbName));
    }
    
    Model.prototype.create = function(title, callback) {
        var todo = {
            id: this.todos.length,
            title: title,
            isComplete: false
        }

        this.todos.push(todo);
        localStorage.setItem(this._dbName, JSON.stringify(this.todos));

        callback(this.todos);
    }

    Model.prototype.changeState = function(id, isComplete, callback) {
        for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id == id) {
				this.todos[i].isComplete = isComplete;
				break;
			}
        }
        localStorage.setItem(this._dbName, JSON.stringify(this.todos));
        callback(this.todos);
    }

    Model.prototype.delete = function(id, callback) {
        for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id == id) {
				this.todos.splice(i, 1);
				break;
			}
        }
        localStorage.setItem(this._dbName, JSON.stringify(this.todos));
        callback(this.todos);
    }

    Model.prototype.read = function (stateFilter, callback) {
        var res = [];
		if(!stateFilter){
            res = this.todos;
        } else if(stateFilter === 'active'){
            res = this.todos.filter(todo => !todo.isComplete);
        } else if(stateFilter === 'completed'){
            res = this.todos.filter(todo => todo.isComplete);
        }
        callback(res);
	};

    window.app = window.app || {};
    window.app.Model = Model;
})();

