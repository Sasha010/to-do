const Router = require('@koa/router');
const indexController = require('../controllers/indexController')
const todosController = require('../controllers/todosController')

const router = new Router();

router.get('/', indexController);
router.get('/api/todos/getTodos', todosController.getTodos)
router.post('/api/todos/createTodo', todosController.createTodo)
router.post('/api/todos/changeTodoStatus', todosController.changeTodoStatus)

module.exports = router
