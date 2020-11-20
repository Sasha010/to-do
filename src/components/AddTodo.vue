<template>
    <div>
    <form @submit.prevent="onSubmit" class="add-todo-form">
            <input 
                type="text" 
                v-model="title"
                class="add-todo-input"
                :class="{'error': error && !title}"
                placeholder="Ender todo">
        <button type="submit" class="add-todo-btn">Add</button>
    </form>
    <span v-if="error && !title" class="error-text">{{error}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            error: '',
        }
    },
    methods: {
        onSubmit() {
            const title = this.title.trim()
            if(title){
                this.$emit('add-todo', { todo_title: title, done: false})
                this.title = ''
                this.error = ''
            }else{
                this.error = 'The field id required.'
            }
        }
    }
}
</script>

<style scoped>
    .add-todo-form {
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 100%;
        margin-top: 20px;
    }

    .error-text {
        color: red;
        font-size: 14px;
        padding-left: 2px;
    }

    .add-todo-input {
        width: 80%;
        padding: 8px;
        font-size: 16px;
        border-radius: 7px;
    }

    .add-todo-input:focus {
        border: 2px solid #033180;
    }

    .add-todo-input.error {
        border: 2px solid #d12e2e;
    }

    .add-todo-btn {
        padding: 10px 15px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        color: #fff;
        background-color: #033180;
    }
</style>