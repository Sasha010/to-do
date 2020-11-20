const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const bodyParser = require('koa-body');
const router = require('./routes');
const inputValodator = require('node-input-validator')

const app = new Koa();

app.use(bodyParser());
app.use(inputValodator.koa())
app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(mount('/', serve(`${__dirname}/../dist/`)));

app.listen(process.env.PORT || 3000);