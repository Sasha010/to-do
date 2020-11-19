const fs = require('fs');
const indexFile = fs.readFileSync(`${__dirname}/../../dist/index.html`);

module.exports = (ctx) => {
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.body = indexFile
};