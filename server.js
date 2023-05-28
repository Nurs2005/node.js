const http = require('http');
const server = http.createServer((req,res)=> {
    res.writeHead(200);
    res.end('ABC');
});
server.listen(3000,() =>{
    console.log('Server starting on',3000,'port');
});