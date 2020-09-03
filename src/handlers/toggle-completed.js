var handlers = {
    addTodos: function (e) {
debugger;
 e = e || window.event;
 e.preventDefault();
      var add = document.getElementById('add').value;
      if (add === '') {
        alert('Please write a Todo!');
        return;
      }
      app.addTodo(add);
      view.displayTodos();
    
    logger.push({
      action: 'Add Todo',
      state: app.state
    })
  document.getElementById('add').value = '';
  },
    
  }
  