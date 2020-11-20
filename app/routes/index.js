const Router = require('@koa/router');
const indexController = require('../controllers/indexController')
const todosController = require('../controllers/todosController')

const router = new Router();

router.use(async (ctx, next) => {
    try {
        await next(ctx)
    } catch (error) {
        if(error.body && error.body.message === 'The given data is invalid.'){
            ctx.status = 400
            ctx.body = error.body
        }else{
            ctx.status = 500
            ctx.body = error
        }
    }
})

router.get('/', indexController);
router.get('/api/todos/getTodos', todosController.getTodos)
router.post('/api/todos/createTodo', todosController.createTodo)
router.post('/api/todos/changeTodoStatus', todosController.changeTodoStatus)

module.exports = router
