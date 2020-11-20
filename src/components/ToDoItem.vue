<template>
    <li>
        <span v-bind:class="{done: todo.done}">
            <input 
                type="checkbox" 
                v-on:change="$emit('change-todo-status', todo.id, !todo.done)" 
                :checked="todo.done">
            <span class="todo-title">{{todo.todo_title}}</span>
        </span>
    </li>
</template>

<script>
export default {
    props: ['todo']
}
</script>

<style scoped>
    li {
        list-style-type: none;
        padding: 3px 0;
    }
    .done {
        text-decoration: line-through;
    }
    .todo-title {
        padding-left: 20px;
        font-size: 17px;
    }
</style>