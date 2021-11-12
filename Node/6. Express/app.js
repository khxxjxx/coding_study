import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

// 비동기는 콜백함수로 전달하든 promise를 사용하든 try catch로 에러를 잡을 수 없다
// 에러가 내부적으로 발생했기 때문이다
app.get('/file1', (req, res) => {
  // 1. 비동기를 이용할 때는 해당하는 콜백함수 내에서 에러처리를 해줘야한다
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.status(404).send('File not found')
  //   }
  // });

  // 2. 동기
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.status(404).send('File not found');
  }
});

app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt') //
    .catch(error => {
      res.sendStatus(404);
    });
});

// 비동기
app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt'); // 동기
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
