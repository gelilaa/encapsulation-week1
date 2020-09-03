var handlers = {
    addTodos: function (e) {
debugger;
 e = e || window.event;
 e.preventDefault();
      var add = document.getElementById('add').value;
      app.addTodo(add);
      view.displayTodos();
    
    logger.push({
      action: 'Add Todo',
      state: app.state
    })
  },

  }
  