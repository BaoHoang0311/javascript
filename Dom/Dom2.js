//! OFFSET OFFSETHEIGHT 
const boxed = document.querySelector(".boxed");

//! Clientwidth , clientHeight
//@ boxed.clientWidth; // độ rộng của phần tử trừ đi border
//@ boxed.clientHeight; // chiều cao của phần tử trừ đi border
//@ boxed.clientLeft; // vị trí của nó so với bên trái border
//@ boxed.clientTop; // vị trí của nó so với phía trên border

//! thuộc tính liên quan tới 
console.log(window.innerHeight); // khoảng trắng chiều cao index html blank
console.log(window.outerHeight); // có tính phần tab , bookmark ở trên
console.log(window.innerWidth);

//! selector.getBoundingClientRect() lấy ra tọa độ kích thước của phần tử
console.log(boxed.getBoundingClientRect());