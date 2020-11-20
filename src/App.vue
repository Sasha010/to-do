<template>
  <div id="app" class="wrapper">
    <div class="container">
      <h1 class="title">To Do</h1>
      <AddTodo @add-todo="addTodo" v-bind:loading="loading"/>
      <Loader v-if="loading" />
      <TodoList v-else-if="todos.length" v-bind:todos="todos" @onChangeTodoStatus="onChangeTodoStatus" />
      <span v-else class="no-todos">No todos!</span>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Loader from "./components/Loader";
import { getTodos, createTodo, changeTodoStatus } from "./api/todosApi";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  methods: {
    async addTodo(todo) {
      try {
        const id = await createTodo(todo)
        this.todos.push({ id, ...todo })
      } catch (error) {
        console.error(error)
      }
    },
    async onChangeTodoStatus(id, status) {
      try {
        await changeTodoStatus(id, status)
        const changedTodos = this.todos.map((todo) => {
          return todo.id === id ? { ...todo, done: status } : todo;
        });
        this.todos = changedTodos;
      } catch (error) {
        console.error(error)
      }
    },
  },
  async mounted() {
    try {
      const data = await getTodos();
      this.todos = data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg,#020024,#090979 35%,#196a94);
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  padding: 25px;
  background-color: aliceblue;
  border-radius: 15px;
  box-shadow: 0 0 30px rgb(101 101 101 / 51%);
}

.title {
  text-align: center;
  font-size: 50px;
  padding: 15px 0;
}

.no-todos {
  text-align: center;
  padding: 30px 0;
}
</style>
