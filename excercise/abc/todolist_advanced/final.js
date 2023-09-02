// let arr = [1, 2, 3];
// let ans = arr.splice(1, 1);
// localStorage.setItem("test", JSON.stringify(arr));
// localStorage.setItem("test", JSON.stringify(ans));

class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todoList"));
    if (this.todos == null || this.todos.length == 0) {
      localStorage.setItem("todoList", JSON.stringify(["a", "b"]))
      this.todos = ["a", "b"];
    }
  }

  addTodo(todoText) {
    if (this._checkduplicate(todoText) == true) {
      return;
    }
    if (todoText.length > 0) {
      this.todos.push(todoText);
      this._resetValue(this.todos);
    }
  }

  // như nhau
  zzz(handler) {
    this.displayafterRemoveorAdd = handler;
  }

  removeTodo(todoText) {
    const index = this.todos.findIndex((item) => item == todoText);
    this.todos.splice(index, 1);
    this._resetValue(this.todos);
  }

  _resetValue(todos) {
    localStorage.setItem("todoList", JSON.stringify(todos));
    this.displayafterRemoveorAdd(todos);
  }

  _checkduplicate(todoText) {
    let check = this.todos.includes(todoText);
    if (check == true) return true;
    return false;
  }
}

class View {
  constructor() {
    this.app = this.getElement("body");
    this.todoWrapper = this.createElement("div", "todo");

    this.form = this.createElement("form", "todo-form");
    this.form.autocomplete = "off";

    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "to do";

    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.innerText = "Add";

    this.form.append(this.input, this.submit);

    this.todoList = this.createElement("div", "todo-list");

    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector, all = false) {
    if (all == true) {
      return document.querySelectorAll(selector);
    }
    else {
      return document.querySelector(selector);
    }
  }
  // _ private
  get _todovalue() {
    return this.input.value;
  }

  _resetvalue() {
    this.input.value = "";
  }

  // C1
  // additem(str) {
  //   const todo_item = `
  //       <div class="todo-item">
  //           <span class="todo-text">${str}</span>
  //           <i class="fa fa-trash todo-remove" data-value="${str}"></i>
  //       </div>`
  //   return todo_item;
  // }

  displaytodo(todos) {

    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length > 0) {
      todos.forEach((todoText) => {

        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa fa-trash todo-remove";
        icon.setAttribute('data-value', todoText);
        todoItem.append(span, icon);
        this.todoList.append(todoItem);

        // C1 
        // this.todoList.insertAdjacentHTML("afterbegin", this.additem(todoText));
      })
    }
  }

  viewAddtoDo(handlerviewAddtoDo) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this._todovalue) {
        return;
      }
      else {
        handlerviewAddtoDo(this._todovalue);
        // C1
        // this.todoList.insertAdjacentHTML("afterbegin", this.additem(this._todovalue));
        this._resetvalue();
      }
    });
  }

  viewRemovetoDo(handlerviewRemovetoDo) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.matches('.todo-remove')) {
        const value = e.target.getAttribute("data-value"); // const value = e.target.dataset.value;
        handlerviewRemovetoDo(value);

        // C1
        // let todos = JSON.parse(localStorage.getItem("todoList"));
        // this.todoList.replaceChildren();
        // this.displaytodo(todos);
      }
    });
  }
}

class Controller {
  constructor(Model, View) {

    this.Model = Model;
    this.View = View;

    this.View.viewAddtoDo(this.handlerviewAddtoDo);
    this.View.viewRemovetoDo(this.handlerviewRemovetoDo);

    this.View.displaytodo(this.Model.todos);

    this.Model.zzz(this.handlerviewtoDo);

  }

  // // ??? viết vậy thằng this sẽ lấy =  chỗ nó gọi , Model
  // handlerviewtoDo(todos) {
  //   console.log(this)
  //   this.View.displaytodo(todos);
  // }

  handlerviewtoDo = (todos)=>{
    this.View.displaytodo(todos);
  }

  handlerviewAddtoDo = (todoText) => {
    this.Model.addTodo(todoText)
  }

  handlerviewRemovetoDo = (todoText) => {
    this.Model.removeTodo(todoText)
  }

}

const app = new Controller(new Model(), new View());