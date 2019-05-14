export default class View{
    constructor(template){
        this.template = template;
        this.$createBtn = document.getElementById('create-btn');
        this.$newTodoInput = document.getElementById('new-todo-input');
        this.$list = document.getElementById('list');
    }

    bindAddTodo(handler){
        var self = this;
        self.$createBtn.addEventListener('click', function(){
            handler(self.$newTodoInput.value);
        });
    }

    bindCheckTodo(handler){
        var self = this;
        self.$list.addEventListener('change', function(event){
            var allCheckboxs = document.querySelectorAll('.todo__checkbox');
            var isCheckbox = Array.prototype.indexOf.call(allCheckboxs, event.target) >= 0;
            if(isCheckbox){
                handler(event.target.parentNode.id, event.target.checked);
            }
        });
    }

    bindDeleteTodo(handler){
        var self = this;
        self.$list.addEventListener('click', function(event){
            var allDeleteBtns = document.querySelectorAll('.todo__delete');
            var isBtn = Array.prototype.indexOf.call(allDeleteBtns, event.target) >= 0;
            if(isBtn){
                handler(event.target.parentNode.id);
            }
        });
    }

    render(todos){
        this.$list.innerHTML = this.template.show(todos);
    }

    clearNewTodo(){
        this.$newTodoInput.value = '';
    }
}