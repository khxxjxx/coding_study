console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.log('setTimeout 0');
  console.timeEnd('timeout 0');
  // 0초 뒤에 실행하라고 되어있지만 Call Stack이 비어야만 실행되기 때문에 시간이 더 걸릴 수 있다
}, 0);

console.log('code2');
setImmediate(() => {
  console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick');
});
