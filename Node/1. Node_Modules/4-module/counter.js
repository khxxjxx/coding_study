let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports); // true => module을 생략해도 된다
// exports = {}; // 하지만 exports에 다른값을 넣게 되면
// console.log(module.exports === exports); // false => 서로 다른 값이 되어버린다
exports.increase = increase;
console.log(module);
