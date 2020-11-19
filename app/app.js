const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const bodyParser = require('koa-body');
const router = require('./routes');
const cors = require('koa2-cors')

const app = new Koa();

app.use(bodyParser());
app.use(cors())
app
    .use(router.routes())
    .use(router.allowedMethods());

// app.use(mount('/public', serve(`${__dirname}/../public`)));
app.use(mount('/', serve(`${__dirname}/../dist/`)));
// app.use(mount('/css', serve(`${__dirname}/../dist/css`)));

app.listen(process.env.PORT || 3000);