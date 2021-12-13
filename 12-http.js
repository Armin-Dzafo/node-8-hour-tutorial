const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === '/about') {
        res.end('Our history...');
        return;
    }
    //res.end('nothing here');
    res.end(`
        <h1>Ooops!</h1>
        <p>You shouldn't be able to get here!</p>
        <a href='/'>Get back home</a>
    `);
    });

server.listen(5000);