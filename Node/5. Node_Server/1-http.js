const { setServers } = require('dns');
const http = require('http');
// const http2 = require('http2'); // https

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  res.write('Welcome');
  res.end();
});

server.listen(8080); // localhost:8080 접속하면 확인가능
