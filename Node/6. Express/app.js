import express from 'express';
const app = express();

app.all('/api', (req, res, next) => {
  // url의 경로의 한해서만 수행 (ex. /api)
  // url 뒤에 *을 사용할 경우 use와 같은 역할을 한다 (ex. /api/*)
  console.log('all');
  next();
});

app.use('/sky', (req, res, next) => {
  // url의 경로를 포함한 뒤에 어떤 경로가 와도 상관없다 (ex. /sky, /sky/doc ...)
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');

    // next()
    // next('route'); // first2를 건너띄고 바로 second로 감
    // next(new Error('error'));

    if (true) {
      // 똑같은 경로에 여러가지 미들웨어가 설정되어 있다면 send를하거나 next를 해줘서
      // 미들웨어가 잘 동작할 수 있도록 해줘야 한다
      return res.send('Hello');
    }
    res.send('Hello2');
    // 하나의 콜백에서 두개의 response를 보내게 되면 에러가 발생하므로 return을 해준다
  },
  (req, res, next) => {
    console.log('first2');
    next();
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  // 처리할 수 없는 경로일 경우
  res.status(404).send('Not available!');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
});

app.listen(8080);
