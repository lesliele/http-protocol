const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        const html = fs.readFileSync('index.html', 'utf-8');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(html);
    } 
    if (req.url === '/script.js') {
        const etag = req.headers['if-none-match'];
        if (etag === 'cheung') {
            res.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=200000, no-store',
                'Last-Modified': 'leslie',
                'Etag': 'cheung'
            })
            res.end('');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=200000, no-store',
                'Last-Modified': 'leslie',
                'Etag': 'cheung'
            })
            res.end('console.log("Load scripts")');
        }
    }
}).listen(8888);

console.log('server3 is listening...');