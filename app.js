const http = require('http');
const colors = require('colors');

const app = http.createServer((req, res) => {
res.write('hello world');
console.log('hello world'.red);
res.end();
});

app.listen(3900);
