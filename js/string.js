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


const b=null;
a = b ?? -1 ;  // if (a==null){a=-1;}
console.log(a);


cc  = 5 ;
console.log('cc',cc);
var cc ;

console.log('z', z);
var z = 5 ;

let myStr3 ="FrontendDeveloperD";

console.log('myStr3.substring(3,6);', myStr3.substring(3,6));//nte
console.log('myStr3.substr(3,6);', myStr3.substr(3,6)); //ntendD


console.log(5+7);
console.log(parseFloat("4.8"));

let a11 = 5.5;
console.log('a11', Math.round(a11));

console.log(`Math.random()`, (Math.random()*10).toFixed(0));

console.log(`so lon nhat: ${Math.max(1,2,3,-5)}`);


// isNaN vs Number.isNaN
console.log(Number.isNaN("37"));


console.log(isNaN("37"));
console.log(isNaN(37));

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(true)); // 1

console.log(`object`, typeof String(4.5));

let zz=null;
console.log(zz);
console.log(null+""); // "null"
console.log(null+undefined); // NaN
console.log(undefined+10); // NaN
console.log(null+10); // 0+10 =10
console.log(10>=5); // true

console.log(10 != "10");


const urAge = prompt("vui long nhap vao so tuoi cua ban","18");
let message ="";
console.log(typeof urAge);

if( Number(urAge) >= 18 ) message = "Ban co the vao rap nha";
else message="ban chua du tuoi";

console.log(message);


