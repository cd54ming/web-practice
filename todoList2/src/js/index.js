let id = 0;
let todos = [];

function setData() {
  window.localStorage.setItem('todoApp', JSON.stringify(todos));
}


function showTodo() {
  const todoData = localStorage.getItem('todoApp');
  if (todoData) {
    todos = JSON.parse(todoData);
    $('.todo-list').empty();
    todos.forEach((item) => {
      $('.todo-list').append(
        `<li class="todo-list__item ${item.isCompeleted ? 'isCompeleted' : ''}" data-id="${item.id}">
          <input class="todo-list__check" type="checkbox" id="item${item.id}" ${item.isCompeleted ? 'checked' : ''}>
          <label class="todo-list__text" for="item${item.id}"> ${item.todo} </label>
          <button class="todo-list__delete danger">delete</button>
        </li>`,
      );
    });
    id = (!todos.length) ? 0 : Number(todos[todos.length - 1].id) + 1;
  }
  console.log(todos);
}

function addTodo() {
  const newTodo = $('input[name=todo]').val();
  todos.push({
    id,
    isCompeleted: false,
    todo: newTodo,
  });
  $('input[name=todo]').val('');
  setData();
  showTodo();
}

$(document).ready(() => {
  // localStorage.clear();
  showTodo();

  // add todo
  $('#add').on('click', () => {
    addTodo();
  });
  // compeleted todo
  $('.todo-list').on('click', '.todo-list__check', (e) => {
    const item = $(e.target);
    const itemId = Number(item.parent().attr('data-id'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === itemId) {
        todos[i].isCompeleted = !todos[i].isCompeleted;
      }
    }
    setData();
    showTodo();
  });
  // delete todo
  $('.todo-list').on('click', '.todo-list__delete', (e) => {
    const item = $(e.target);
    const itemId = Number(item.parent().attr('data-id'));
    todos = todos.filter((todo) => todo.id !== itemId);
    setData();
    showTodo();
  });
  // filter
  $('#filter-all').on('click', function () {
    $('.filter-button.active').removeClass('active');
    $(this).addClass('active');
    $('.todo-list__item').show();
  });
  $('#filter-isCompeleted').on('click', function () {
    $('.filter-button.active').removeClass('active');
    $(this).addClass('active');
    $('.todo-list__item').hide();
    $('.todo-list__item.isCompeleted').show();
  });
  $('#filter-uncompeleted').on('click', function () {
    $('.filter-button.active').removeClass('active');
    $(this).addClass('active');
    $('.todo-list__item').hide();
    $('.todo-list__item:not(.isCompeleted)').show();
  });
  // detect enter
  $('#newTodo').on('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
  // clear all
  $('#clear-all').on('click', () => {
    todos = [];
    setData();
    showTodo();
  });

  $('#clear-isCompeleted').on('click', () => {
    todos = todos.filter((todo) => !todo.isCompeleted);
    setData();
    showTodo();
  });
});
