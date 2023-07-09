let arr = [1, 2, 3];
let ans = arr.splice(1, 1);
console.log(ans);
console.log(arr);

localStorage.setItem("test", JSON.stringify(arr));
localStorage.setItem("test", JSON.stringify(ans));

class Model {
  constructor() {

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

  displaytodo(todos) {
    if (todos.length > 0) {
      todos.forEach((todoText) => {
        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa fa-trash todo-remove";
        icon.setAttribute('data-value',todoText);

        todoItem.append(span, icon);
        this.todoList.append(todoItem);
      })
    }
  }

  viewAddtoDo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this._todovalue) {
        return;
      }
      else {
        handler(this._todovalue);
        this._resetvalue();
      }
      const todoValue = this.elements['todo'].value;
      datalist.push(todoValue);
      localStorage.setItem("todolist", JSON.stringify(datalist));
      todo_list.insertAdjacentHTML("afterbegin", additem(todoValue));
    });
  }

  viewRemovetoDo(handler) {
    this.todoList.addEventListener("click", (e)=> {
      if(e.target.matches('.todo-remove')){
        const value = e.target.getAttribute("data-value");
        // const value = e.target.dataset.value;
        handler(value);
      }
    });
  }
}

class Controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
  }
}

const app = new Controller(new Model(), new View());

