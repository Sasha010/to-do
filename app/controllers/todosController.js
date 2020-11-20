const todosManager = require('../managers/todosManager')

const getTodos = async (ctx) => {
    const todos = await todosManager.getTodos()
    ctx.body = todos
}

const createTodo = async (ctx) => {
    await ctx.validate({
        todo_title: 'required',
        done: 'required|boolean'
    }, ctx.request.body);
    
    const [id] = await todosManager.createTodo(ctx.request.body)
    ctx.status = 201
    ctx.body = id
}

const changeTodoStatus = async (ctx) => {
    await ctx.validate({
        id: 'required|integer',
        status: 'required|boolean'
    }, ctx.request.body);

    const { id, status } = ctx.request.body
    await todosManager.changeTodoStatus(id, status)
    ctx.status = 201
    ctx.body = id
}

module.exports = { getTodos, createTodo, changeTodoStatus }
