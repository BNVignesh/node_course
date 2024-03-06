const path=require('path');

console.log(path.sep);
const link=path.join('content','subcontent','text.txt');
console.log(link);

console.log(path.basename(link));

const absoulute=path.resolve(__dirname,'content','subcontent','text.txt');
console.log(absoulute);