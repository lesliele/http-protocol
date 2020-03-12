const http = require('http');

http.createServer((req, res) => {
    console.log('url: ' + req.url);
    // 事实上，浏览器刚开始是不知道服务器的情况，只有发送请求后，服务器做出响应，从返回的数据中得知不允许跨域请求,浏览器发出提醒
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        // 如何允许多个自定义头部信息呢
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        // 默认允许的: get,post,head
        'Access-Control-Allow-Methods': 'PUT',
        // 1000s内直接发生正式请求，不需要预请求
        'Access-Control-Max-Age': '1000'
    })
    res.end('1231');
}).listen(8889);

console.log('server2 is listening...');