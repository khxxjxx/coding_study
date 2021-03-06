// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'hxxjxx';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await โจ
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '๐';
}

async function getBanana() {
  await delay(1000);
  return '๐';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// ๋ณ๋ ฌ์ฒ๋ฆฌ
// ๋ฐ์ ์ฝ๋๋ ์ง์ ๋ถํ๋ฏ๋ก API๋ฅผ ์ฌ์ฉํด์ ๋ณ๋ ฌ์ ์ผ๋ก ์ฒ๋ฆฌํ๋ค
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs โจ

// all: ๋ณ๋ ฌ์ ์ผ๋ก ๊ฐ์ ์ ๋ฌ
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// race: ๋ฐฐ์ด์ ์ ๋ฌ๋ promise์ค์์ ๊ฐ์ฅ๋จผ์  ๊ฐ์ returnํ๋ ๊ฐ๋ง ์ ๋ฌ
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
