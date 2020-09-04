var view = {
  displayTodos: function () {
    debugger;

    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    app.state.todos.forEach(function (todo, position) {
      var todoLi = document.createElement('li');
     // todoLi.style.listStyleType = 'none';

      todoLi.id = position;
      todoLi.innerHTML = "<input class= 'checkbox' type = 'checkbox' onclick = 'handlers.toggleCompleted()'>" + todo.text + "</input>";

      todoLi.appendChild(this.createDeleteButton());

      if (todo.completed) {
        let checkBoxEl = todoLi.children[0];
        checkBoxEl.setAttribute('checked', true);
        if (todo.completed === true) {
          todoLi.className = 'checkbox';

        }
      }



      todosUl.appendChild(todoLi);
    }, this);

  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    deleteButton.className = 'destroy';
    return deleteButton;


  },
  setUpEventListeners: function () {
    debugger;
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function (event) {
      var clicked = event.target;
      if (clicked.className === 'destroy') {
        handlers.deleteTodo(parseInt(clicked.parentNode.id));

      }

    });
  }

};

view.setUpEventListeners();



