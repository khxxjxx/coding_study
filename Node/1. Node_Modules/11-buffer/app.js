// Fixed-size chunk of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf); // 48 69 => 유니코드로 출력
console.log(buf.length);
console.log(buf[0]); // 72
console.log(buf[1]); // 105 => 아스키코드로 출력
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 메모리에서 사용가능한 메모리덩어리를 찾아서 초기화시킨다
const buf3 = Buffer.allocUnsafe(2); // fast 메모리를 찾긴하지만 초기화시키지 않는다 => 데이터가 들어있을 수도 있으므로 초기화하는게 좋다
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
