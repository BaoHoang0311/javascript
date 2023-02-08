
// const myStr= "Backend developer";

// console.log(myStr.split(""));
// console.log(myStr.split("/"));
// console.log(myStr.toUpperCase());
// var c  = myStr.slice(0,5);

// console.log(c);
// function timer() {
//     var k = i;
//     setTimeout(function () {
//         console.log(k);
//     }, 1000)
// };
// // khi function dc chạy tạo ra unique scope tồn tại trong function thôi
// for (var i = 1; i < 6; i++) {
//     timer();
// }
let z =5;

for (var i = 1; i < 6; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
console.log("var: ", i);
// for (var i = 1; i < 6; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }  
// console.log("var: ", i);

// var global scope, ghi đè lên , còn let unique scope tạo ra 1 cái