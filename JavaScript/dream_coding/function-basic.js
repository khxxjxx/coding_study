// 함수 기본편

// 함수 선언
// 선언만으로는 호출이 안되서 함수를 호출해줘야한다
function doSomething() {
  console.log('hello');
}

function add(a, b) {
  const sum = a + b;
  return sum; // return을 이용해서 값을 변수에 전달해 줘야한다
}

function somethingAdd(add) {
  // 값을 할당하지 않은 경우
  console.log(add);
}

function somethingAdd2(add) {
  // 값을 할당해 준 경우
  const result = add(5, 6);
  console.log(result);
}

// 함수 호출
doSomething();

const result = add(3, 5); // 함수가 전달한 값을 변수에 저장하고
console.log(result); // 변수를 출력하면 정의된 값이 출력된다

somethingAdd(add(1, 2)); // 함수안에 함수를 호출
// 값을 할당하지 않고 그냥 add를 출력할 경우 정의된 add함수 자체가 출력된다

somethingAdd2(add); // 힘수안에 값을 할당 한 후 출력
