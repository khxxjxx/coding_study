export {};

// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};
// person = {
//   isEmployee: true,
// };

let people: Person[]; // 객체 배열

// Type inference

let course = 'React - The Complete Guide';
// 불필요하게 유형을 지정하지 않아도 된다 유형 추론때문에 유형을 확인하고 그 유형을 확인하기 때문
// course = 12345  => 유형 추론때문에 오류 발생

let course2: string | number = 'React - The Complete Guide';
course2 = 12345;

// Function & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
