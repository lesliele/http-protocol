const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const html = fs.readFileSync('index.html', 'utf-8');
    // 默认已经设置好'text/html'
    const host = req.headers.host;
    console.log(host)
    if (host == 'test.com:8888') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['firstname=leslie; max-age=2', 'lastname=cheung; HttpOnly; domain=test.com']
        })   
    }
    res.end(html);
}).listen(8888);

console.log('server1 is listening...');