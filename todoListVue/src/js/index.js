const app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
    editingTodo: {},
    editingContent: '',
  },
  methods: {
    addTodo() {
      const todo = this.newTodo.trim();
      if (todo) {
        this.todos.push({
          id: Math.floor(Date.now()),
          content: todo,
          completed: false,
        });
      }
      this.newTodo = '';
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter((todo) => todo.id !== deleteTodo.id);
    },
    editTodo(todo) {
      this.editingTodo = todo;
      this.editingContent = todo.content;
    },
    clearTodo() {
      this.todos = [];
    },
    finishEdit(todo) {
      todo.content = this.editingContent;
      this.editingTodo = {};
      this.editingContent = '';
    },
    cancelEdit(todo) {
      todo.content = this.editingContent;
      this.editingTodo = {};
      this.editingContent = '';
    },
  },
  computed: {
    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
});
