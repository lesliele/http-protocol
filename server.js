const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const html = fs.readFileSync('index.html', 'utf-8');
    // 默认已经设置好'text/html'
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end(html);
}).listen(8888);

console.log('server1 is listening...');