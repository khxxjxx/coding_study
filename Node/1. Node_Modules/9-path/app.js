const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename)); // 파일 이름만
console.log(path.basename(__filename, '.js')); // 확장자 제거

// dirname
console.log(path.dirname(__filename)); // 폴더 이름만

// extension
console.log(path.extname(__filename)); // 확장자만

//parse
const parsed = path.parse(__filename);
console.log(parsed); // Obj형태로 파일정보를 출력
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder////////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
