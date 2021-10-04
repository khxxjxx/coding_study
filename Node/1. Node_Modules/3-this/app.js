function hello() {
  console.log(this);
  console.log(this === global); // true
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('----- class -----');
    console.log(this); // class 자기자신을 가르킨다
    console.log(this === global); // false
  }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports); // true
