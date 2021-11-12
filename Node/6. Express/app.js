import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// require('express-async-errors'); // CommonJS module
import {} from 'express-async-errors';
// 비동기적인 코드도 최종적으로 에러를 포착할수 있게 해주는 라이브러리
// Express 버전 5부터는 라이브러리를 설치하지 않아도 가능하다

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.status(404).send('File not found');
  }
});

app.get('/file2', (req, res) => {
  // 미들웨어안에서 promise를 사용한다면 리턴을 해줘야 감지한다
  return fsAsync.readFile('/file2.txt');
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file2.txt');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
