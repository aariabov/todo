(function(){
    function Template(){
        this.template = `
        <li id="{{id}}">
            <input class="todo__checkbox" type="checkbox" {{checked}} />
            <label>{{title}}</label>
            <button class="todo__delete">Delete</button>
        </li>`
    }

    Template.prototype.show = function (todos) {
		var i, l;
		var view = '';

		for (i = 0, l = todos.length; i < l; i++) {
            var template = this.template;
            template = template.replace('{{id}}', todos[i].id);
            template = template.replace('{{title}}', todos[i].title);
            template = template.replace('{{checked}}', todos[i].isComplete ? 'checked' : '');
			view = view + template;
		}

		return view;
    };
    
    window.app = window.app || {};
    window.app.Template = Template;
})();