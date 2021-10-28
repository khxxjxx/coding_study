const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // https

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }

  // piping이 되고 있는 중간에 res.end를 호출하게 되면 파이핑이 멈추게 된다
  // pipe이 끝나면 자동으로 end() 처리가 되므로, 수동적으로 호출해줄 필요없다
  // res.end();
});

server.listen(8080); // localhost:8080 접속하면 확인가능
