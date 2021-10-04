const os = require('os');

console.log(os.EOL === '\n'); // mac
console.log(os.EOL === '\r\n'); // window

console.log(os.totalmem()); // 최종메모리
console.log(os.freemem()); // 최종메모리중 사용가능한 메모리
console.log(os.type()); // 운영체제 타입
console.log(os.userInfo()); // 사용자 정보
console.log(os.cpus()); // cpu 정보
console.log(os.homedir());
console.log(os.hostname());
