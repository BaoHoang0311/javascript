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
//! 5. Quantifiers
const str12 =  "Welcome to 2021";
console.log(str12.match(/\d\d\d\d/));