//string

"hello world"; // double quote
'hello'; // single quote
`I am backend nodejs developer`; // backtick (template literals)
//  "\" escaped string sau thằng này thì thành string hết 
// khỏi suy nghĩ
const name = "nguyen le hoang bao";
const job = "BE nodejs";
console.log("ten: "+ name);
console.log(typeof(name));
const newStr = "My name is "+ name + " I am backend nodejs developer";
const newStr2 = `My name is ${name},
 I am ${job}
 @2312 \n $\{name}${name}
 zzz`;
console.log(newStr);
console.log(newStr2);

const day = 'zz';
const values = {
    "monday": 0,
    "tuseday":1,
    "wednesday":2,
};
let a1;
const b=5;
a = b ?? -1 ;  // if (a1==null){a=-1;}
console.log(a);


