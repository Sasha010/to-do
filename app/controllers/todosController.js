const todosManager = require('../managers/todosManager')

const getTodos = async (ctx) => {
    const todos = await todosManager.getTodos()
    ctx.body = todos
}

const createTodo = async (ctx) => {
    const [id] = await todosManager.createTodo(ctx.request.body)
    ctx.status = 201
    ctx.body = id
}

const changeTodoStatus = async (ctx) => {
    try {
        const { id, status } = ctx.request.body
        await todosManager.changeTodoStatus(id, status)
        ctx.status = 201
        ctx.body = id
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = { getTodos, createTodo, changeTodoStatus }
