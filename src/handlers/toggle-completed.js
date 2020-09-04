var handlers = {
  addTodos: function (e) {
    debugger;
    e = e || window.event;
    e.preventDefault();
    var add = document.getElementById("add").value;
    if (add === "") {
      alert("Please write a Todo!");
      return;
    }
    app.addTodo(add);
    view.displayTodos();

    logger.push({
      action: "Add Todo",
      state: app.state,
    });
    document.getElementById("add").value = "";
  },
  /*changeTodo: function () {
       var position = document.getElementById('position');
       var text = document.getElementById('text');
       app.changeTodo(position.valueAsNumber, text.value);
       position.value = '';
       text.value = '';
       view.displayTodos();
     },*/
  deleteTodo: function (position) {
    debugger;
    app.deleteTodo(position);
    view.displayTodos();

    logger.push({
      action: "Delete Todo ",
      state: app.state,
    });
  },
  toggleCompleted: function () {
    debugger;
    var address = document.querySelector("ul");
    var toggleCompletedPo = address.childNodes;
    toggleCompletedPo.forEach(function (child) {
      if (child.childNodes[0].checked === true) {
        var input = child.id;
        app.toggleCompleted(Number(input));
        child.className = "checkbox";
      }
      if (child.childNodes[0].checked === false) {
        child.className = "";
        child.setAttribute("checked", false);
      }
    });
    logger.push({
      action: "toggle completed",
      state: app.state,
    });
  },
  toggleAll: function () {
    app.toggleAll();
    view.displayTodos();

    logger.push({
      action: "toggle All",
      state: app.state,
    });
  },
  
};
  