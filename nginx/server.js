const http = require('http');
const fs = require('fs');

const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    })
}

http.createServer((req, res) => {
    if (req.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(html);
    }
    if (req.url === '/data') {
        res.writeHead(200, {
            'Cache-Control': 'max-age=5, s-maxage=20, private'
        });
        wait(2).then(() => {
            res.end('success');
        });
    }
}).listen(8888);

console.log('server1 is listening...');