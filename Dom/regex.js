const re1 = /hello/;
const re2 = new RegExp("hello");


//! Anchor ^ &
//! ^ bắt đầu với từ nào đó
//! $ string kết thúc tới từ nào đó

/hi/.test("hello hi"); //true
/hi$/.test("hello hi"); //true
console.log(/^hi/.test("hi hello"));

//! [0-9] tồn tại value trong khoảng này
//! /[a-z0-9A-Z]/.test("") yêu cầu phải có

//!  4. Meta charactor
//! 5. Quantifiers {n} , {n,m} : trong khoảng {4,6} 4 tới 6 ký tự
const str12 =  "Welcome to 2021 32323";
console.log(str12.match(/\d\d\d\d/));
console.log(str12.match(/\d{4}/)); // [ '2021',index: 11, input: 'Welcome to 2021 32323',groups: undefined ]
console.log("/\d{5}/",str12.match(/\d{5}/));    // [
                                                //     '32323',
                                                //     index: 16,
                                                //     input: 'Welcome to 2021 32323',
                                                //     groups: undefined
                                                //   ]
console.log("/\d{6}/",str12.match(/\d{6}/));    // null
console.log(str12.match(/\d+/)[0]); //2021
console.log(str12.match(/\d+/g)); // [ '2021', '32323' ]

const str13 = "Colour or Color"
console.log(str13.match(/Colou?r/g)); // [ 'Colour', 'Color' ]

//flag 
// *: không hoặc nhiều
// +: 1 hoặc nhiều
const str3 =  "123 45";
console.log(str3.match(/\d+/g)); // ['123','45']
console.log(str3.match(/\d*/g)); // [ '123', '', '45', '' ]
console.log(str3.match(/\d?/g)); //['1','2','3','','4','5']

const str4 = "";
console.log(str4.match(/\d*/g)); //['']

const rerrrr1= /hello/;
const rerrr2r = new RegExp("hello");

array = [1, 2, 3, "hello world", 4.12, true];
array.splice(3,2);  
console.log(array) // thay đổi mảng gốc arr = [1,2,3,true]
