// primitive타입과 object는 변수를 할당할 때 변수안에 들어있는 값이
// 복사되어 들어온다 하지만 primitive 타입은 데이터 자체가 변수에 담겨있어서
// 데이터 자체가 복사되어서 들어오지만 object는 object를 가르키고 있는
// 주소(reference)가 들어있기 때문에 그 주소만 복사되어서 들어온다
// number, string, boolean, null, undefined

// Primitive
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number); // 2
console.log(number2); // 3  // num2의 값만 변경

// Object
let obj = {
  name: 'hxxjxx',
  age: 20,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

// obj나 obj2가 가르키고 있는 object주소가 동일하기 때문에
// 어떤곳의 object 통해서 이름을 변경해도 둘다 변경이 된다
obj.name = 'coder';
console.log(obj.name); // coder
console.log(obj2.name); // coder

// let & const
// let으로 정의한 변수는 값의 변경이 가능하지만
// const로 정의한 변수는 값의 변경이 불가능하다
// primitive 타입의 경우 데이터 자체가 들어오기때문에 변경이 불가능하지만
// object 타입의 경우 데이터 자체가 아닌 주소가 들어오기때문에
// 주소안의 내용은 변경이 가능하다
const person = {
  name: 'hxxjxx',
  age: 25,
};
console.log(person.name); // hxxjxx
person.name = 'coder';
console.log(person.name); // coder

// Function
// 함수의 이름자체는 함수가 정의된 곳을 가르키고 있다
// 함수의 이름을 다른 변수에 할당하면 이 함수가 가르키고 있는 주소가 할당된다

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

// 반복적으로 수행되는 일을 함수로 만들어 간편하게 재사용할 수 있다
function add(a, b) {
  // 함수선언
  return a + b;
}
console.log(add(3, 4)); // 7

const doSomething = add;

const result2 = doSomething(2, 3);
console.log(result2); // 5
const result3 = add(5, 3);
console.log(result3); // 8

function surprise(operator) {
  // 함수선언
  const result = operator(3, 10); // add(3, 10)
  console.log(result);
}

surprise(add); // 13  // 함수호출

// Class

// ex
// class Counter {
//   constructor() {
//     // 생성자
//     this.counter = 0;
//   }

//   increasd() {
//     // 증가하다
//     this.counter++;
//     console.log(this.counter);
//     if (this.counter % 5 === 0) {
//       console.log('yo!');
//     }
//   }
// }

// const coolCounter = new Counter();
// coolCounter.increasd(); // 1
// coolCounter.increasd(); // 2
// coolCounter.increasd(); // 3
// coolCounter.increasd(); // 4
// coolCounter.increasd(); // 5  // yo!

//ex2
console.clear();
class Counter {
  constructor(runEveryFiveTimes) {
    // 생성자
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increasd() {
    // 증가하다
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
      // 위와 같이 if문을 간단히 나타낼 수 있다
      //   if (this.callback) {
      //     this.callback(this.counter);
      //   }
    }
  }
}

function print(num) {
  console.log(`WoW! ${num}`);
}

const coolCounter = new Counter(print);
coolCounter.increasd(); // 1
coolCounter.increasd(); // 2
coolCounter.increasd(); // 3
coolCounter.increasd(); // 4
coolCounter.increasd(); // 5  // WoW!
