// 원하는곳, 확인하고 싶은 곳에 브레이크포인트를 걸고 F5키를 눌러 node.js로 디버깅을 시작할 수 있다
// Edit break point를 이용해서 내가 원하는 조건일때만 브레이크 포인트를 활성화되도록 조건을 지정할 수 있다
// 디버깅중에 코드에 새롭게 무언갈 추가하게 되면 디버깅을 중지하고 다시 시작해야한다
// launch.json파일을 생성하고 {"runtimeExecutable": "nodemon", "restart": true} 코드를 추가하여 디버깅을 자동 재시작 할 수 있다

function sayHello() {
  console.log('hello');
}

function calculate(x, y) {
  console.log('calculating..');
  const result = x + y;
  console.log('result:', result);
  sayHello();
  return result;
}

calculate(1, 2);

const stop = 4;
console.log('.... loopings ....');
for (let i = 0; i < 10; i++) {
  console.log('count', i);
  if (i === stop) {
    break;
  }
}
