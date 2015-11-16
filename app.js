var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); 
  res.end('Ola mundo!');
}).listen(81);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar.');
