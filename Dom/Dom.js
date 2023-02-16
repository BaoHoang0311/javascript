console.log(5);
//! selectiong node in HTML
//! 2.1 document.querySelector
const ffsdfsdz = document.querySelector('#spinner');
console.log('ffsdfsdz', ffsdfsdz); //@ <p id="spinner">dasdasdas</p>

const h1 = document.querySelectorAll('h1');
h1.forEach(x => console.log(x.innerText));


const ffsdfsdz1 = document.querySelector('#container #tse');
console.log('ffsdfsdz1', ffsdfsdz1);

//! 2.2 document.querySelectorAll trả về Nodelist 
//! giống mảng (có thể loop) nhưng
//! ko dùng các property của mảng
const ul_item = document.querySelectorAll('.item');
console.log('ul_item', ul_item)

//! 2.3 document.getElementByClassName("tenclass")
//! truyền vào class name ko cần dấu chấm

//! 2.4 document.getElementByTagName()
//! a ul li
const tagNode1 = document.getElementsByTagName('a');
console.log('tagNode1', tagNode1);

//! 2.5 document.getElementById();

console.log(document.getElementById("item"));

//! 2.6 selectorr.getAtribute() thuộc tính : href id class, src, style

let link = document.querySelector(".link").getAttribute("href");
console.log('link', link);

document.querySelectorAll("#item").forEach(x => console.log(x.getAttribute("class")));

//! 2.7 .setAttribute(), bơm thuộc tính khác thẻ html

//! chỉ có cái đầu tiên
document.querySelector(".link").setAttribute('target', '_blank');
//! cả list đều có
document.querySelectorAll(".link").forEach(x => x.setAttribute('target', '_blank'));

//! 3.1 .selector.RemoveAtribute()
document.querySelector("#spinner").removeAttribute("class");

//! 3.2 .hasAttribute("class")  (true/false)

const z = document.querySelector("#spinner").hasAttribute("class");
console.log('z', z);

//! 4* .textContent (trong vscode sao nó vậy)
console.log(document.querySelector("#tse").textContent);
document.querySelector("#tse").textContent= 'This text is different!';


//! 4.1 innerText
//! khác với textContent 
//! loại bỏ hết khoảng trắng, không lấy được 
//! nội dung trong html đã bị ẩn đi
console.log(document.querySelector("#container").innerText);