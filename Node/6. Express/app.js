import express from 'express';
const app = express();

app.get('/sky/:id', (req, res, next) => {
  // console.log(req.path);
  // console.log(req.headers);

  // localhost:8080/sky/hxxjxx/?keyword=heejin
  console.log(req.params);
  console.log(req.params.id); // hxxjxx
  console.log(req.query);
  console.log(req.query.keyword); // heejin

  res.send('hi');
});

app.listen(8080);
