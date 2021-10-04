const process = require('process');

console.log(process.execPath); // 현재 실행되고 있는 node의 위치
console.log(process.version); // node의 버전
console.log(process.pid); // process id
console.log(process.ppid); // process부모의 id
console.log(process.platform); // 플랫폼에 대한 정보
console.log(process.env); // 현재 컴퓨터에 저장된 환경변수에 대한 모든 정보
console.log(process.uptime()); // 얼마나 실행되고 있었는지
console.log(process.cwd()); // 현재 실행하고 있는 node의 경로
console.log(process.cpuUsage()); // cpu 사용량

setTimeout(() => {
  console.log('setTimeout');
}, 0);

// Task Queue에 이미 다른 콜백함수가 있어도 그 순서를 무시하고 젤 첫번째로 수행하라는 뜻 (우선수위가 가장 높다)
// 따라서 setTimeout보다 먼저 실행된다
process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}
