const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const html = fs.readFileSync('test.html', 'utf-8');
    const img = fs.readFileSync('./1.jpg');
    if (req.url === '/') {
        // 默认已经设置好'text/html'
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Connection': 'close'
        })
        res.end(html);
    } else {
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Connection': 'close'
        });
        res.end(img);
    }
}).listen(8888);

console.log('server1 is listening...');