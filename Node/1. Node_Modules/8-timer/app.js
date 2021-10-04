let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000); // 단위(ms)마다 반복 수행

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval);
}, 6000);
