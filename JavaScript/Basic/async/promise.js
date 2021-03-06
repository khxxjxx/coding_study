'use strict';

// Promise is a JavaScript object for asynchronous operation
// state: pending -> fulfilled or rejected
//Ptiducer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (net work, read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('hxxjxx');
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('π'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => π₯`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => π³`), 1000);
  });

getHen() // νκ°μ§λ§ λ°μμ μΈμνλ κ²½μ°μλ μλ΅μ΄ κ°λ₯νλ€
  .then(hen => getEgg(hen)) // .then(getEgg)
  .catch(error => 'π₯')
  .then(egg => cook(egg)) // .then(cook)
  .then(meal => console.log(meal)) // .then(console.log);
  .catch(console.log);
