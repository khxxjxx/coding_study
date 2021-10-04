// Browser => window, Node => global
// 생력가능하다
const fs = require('fs');

console.log(global);

global.hello = () => {
  global.console.log('hello');
};

global.hello();
hello();
