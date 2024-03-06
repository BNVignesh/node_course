const fs=require('fs');

const first=fs.readFileSync('./content/first.txt','utf-8')
const second=fs.readFileSync('./content/second.txt','utf-8');
console.log(first,second);

fs.writeFileSync('./content/third.txt',`info in first and second is ${first} ${second}`,{flag:'a'});
//{flag:'a'} means to append ,if this arguement is not given then it overrides everything