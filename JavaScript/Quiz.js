// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  //  fruits.forEach((fruit) => console.log(fruit));

  const fruits2 = fruits.join(', '); // join안에 구분자를 넣어 설정할 수 있다
  console.log(fruits2);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  //   const array = [];
  //   for (fruit of fruits) {
  //     if (fruit === ',' || fruit === ' ') {
  //       continue;
  //     }
  //     array.push(fruit);
  //   }
  //   console.log(array);

  const fruits2 = fruits.split(','); // 콤마(,) 단위로 나눠져있기 때문에 콤마를 넣어준다
  // 구분자를 넣어주지 않으면 문자열 통채로 배열에 들어간다
  console.log(fruits2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  //   const arr = array.splice(2);
  //   console.log(arr);

  const arr = array.slice(2);
  console.log(arr);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); // 배열중 하나라도 조건이 충족되면 true
  console.log(result);

  const result2 = students.every((student) => student.score < 50); // 모든배열이 조건이 충족되야 true
  console.log(result2);

  const find = students.find((student) => student.score < 50);
  console.log(find);
}

// Q9. compute students' average score
{
  //   const result = students.map((student) => student.score);
  //   let average = 0;
  //   for (let score of result) {
  //     average += score;
  //   }
  //   console.log(average / result.length);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);

  // reduceRight 배열의 뒷부분부터 시작
  // prev : 이전에 콜백함수에서 리턴된 값이 전달
  // curr : 배열의 아이템을 순차적으로 전달
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  //   const result = students.map((student) => student.score);
  //   const string = result.join();
  //   console.log(string);

  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
