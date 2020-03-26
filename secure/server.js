const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(req.headers.host);
    const html = fs.readFileSync('index.html', 'utf-8');
    // 默认已经设置好'text/html'
    res.writeHead(200, {
        'Content-Type': 'text/html',
        // 限制引用只能通过以下的方式引用,inline方式的脚本是不允许的
        'Content-security-Policy': 'default-src http: https:'
    })
    res.end(html);
}).listen(8888);

console.log('server1 is listening...');