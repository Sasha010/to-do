<template>
    <div class="todo-list">
        <ul>
            <TodoItem
                v-for="todo of todos"
                v-bind:todo="todo"
                v-bind:key="todo.id"
                v-on:change-todo-status="changeTodoStatus"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from './ToDoItem'
export default {
    props: ['todos'],
    components: {
        TodoItem,
    },
    methods: {
        changeTodoStatus(id, status) {
            this.$emit('onChangeTodoStatus', id, status)
        }
    }
}
</script>

<style scoped>
    .todo-list {
        margin-top: 30px;
        padding: 5px;
        overflow-y: auto;
    }
    ul {
        margin-left: 0;
        padding-left: 0;
    }
</style>