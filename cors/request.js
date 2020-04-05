const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/apis') {
        res.end('收到了');
    }
}).listen(8889);

console.log('request is listening...');