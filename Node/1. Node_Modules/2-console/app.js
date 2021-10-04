console.log('logging....');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
// true가 아닐때만 출력
console.assert(2 === 3, 'not same!'); // 출력o
console.assert(2 === 2, 'same!'); // 출력x

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
// 성능확인할때 유용
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace(); // 이 함수가 어디로부터 호출이 된건지 알려준다
}
f1();
