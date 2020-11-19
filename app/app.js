const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const bodyParser = require('koa-body');
const router = require('./routes');

const app = new Koa();

app.use(bodyParser());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(mount('/public', serve(`${__dirname}/../public`)));
app.use(mount('/js', serve(`${__dirname}/../dist/js`)));

app.listen(process.env.PORT || 3000);