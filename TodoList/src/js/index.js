let todos = [];
let id = 0;

function setData() {
  window.localStorage.setItem('todoApp', JSON.stringify(todos));
}

function showTodo() {
  const todoData = window.localStorage.getItem('todoApp');
  if (todoData) {
    todos = JSON.parse(todoData);
    $('.list').empty();
    todos.forEach((todo) => {
      $('.list').append(
        `<div class="list-item ${(todo.isCompleted) ? 'isCompleted' : ''}" data-id=${todo.id}>
          <span class="list-item__state">${(todo.isCompleted) ? 'O' : 'X'}</span>
          <pre class="list-item__content">${todo.text}</pre>
          <button class="list-item__action  list-item__button button">${(todo.isCompleted) ? '標示成未完成' : '標示成已完成'}</button>
          <button class="list-item__deleted list-item__button button">刪除</button>
        </div>`,
      );
    });
    id = (!todos.length) ? 0 : Number(todos[todos.length - 1].id) + 1;
  }
  console.log(todos);
}

$(document).ready(() => {
  // localStorage.clear();
  // show todo
  showTodo();
  // add list
  $('.send').click(() => {
    const text = $('.input[name=todo]').val();
    todos.push(
      {
        text,
        isCompleted: false,
        id,
      },
    );
    $('.input[name=todo]').val('');
    setData();
    showTodo();
  });
  // toggle completed
  $('.list').on('click', '.list-item__action', (e) => {
    const $item = $(e.target);
    const itemID = Number($item.parent().attr('data-id'));
    todos = todos.map((todo) => {
      if (todo.id !== itemID) {
        return todo;
      }
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      };
    });
    setData();
    showTodo();
  });
  // deleted item
  $('.list').on('click', '.list-item__deleted', (e) => {
    const $item = $(e.target);
    const itemId = $item.parent().attr('data-id');
    todos = todos.filter((todo) => todo.id !== Number(itemId));
    setData();
    showTodo();
  });
  // filter isCompleted or uncompleted
  $('.filter__all').click(() => {
    $('.list-item').show();
  });
  $('.filter__isCompleted').click(() => {
    $('.list-item').hide();
    $('.list-item.isCompleted').show();
  });
  $('.filter__uncompleted').click(() => {
    $('.list-item').hide();
    $('.list-item:not(.isCompleted)').show();
  });
});
