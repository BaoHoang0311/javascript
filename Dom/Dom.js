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

let link1 = document.querySelector("#spinner").getAttribute("style");
console.log('link1', link1);

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
console.log(document.querySelector("#thuxem").textContent);
document.querySelector("#thuxem").textContent = 'This text is different!';


//! 4.1 innerText
//! khác với textContent 
//! loại bỏ hết khoảng trắng, 
//! không lấy được nội dung trong html đã bị ẩn đi
console.log(document.querySelector("#container").innerText);

//! 4.2 innerHTML : muốn có html vào innerHTML 
console.log(document.querySelector("#container").innerHTML);
document.querySelector("#thuxem").innerHTML =
    '<div>Chuc mung nam moi</div>';

console.log(document.querySelector("#thuxem1"));

document.querySelector(".abc").innerHTML = '<strong>Chuc mung nam moi</strong>';
//@ <a class="abc">
//@      <strong>Chuc mung nam moi</strong>
//@ </a>

//! 5 học về class
//@ ClassList.add()
//! document.querySelector().classList.add("","");
const addClass = document.querySelector(".abc");
addClass.classList.add("is-Active", "dsd");

//@ ClassList.remove()
//! document.querySelector().classList.remove("","");
const removeClass = document.querySelector(".abc");
addClass.classList.remove("dsd");// tìm ko ra cũng chả sao

//@ ClassList.contains()
console.log(addClass.classList.contains("is-Active"));//false
console.log(!addClass.classList.contains("dsd"));//true

document.querySelectorAll("#item").forEach(x =>
    x.hasAttribute("style") ? console.log(x.getAttribute('style')) : ""
);

//@ ClassList.toggle()
//! có class thì remove có , ko có thì thôi
document.querySelector(".abc").classList.toggle("is-Active");
//! tương đương ~ toggle
if (document.querySelector(".abc").classList.contains("is-Active")) {
    document.querySelector(".abc").classList.remove("is-Active");
}
else {
    document.querySelector(".abc").classList.add("is-Active");
}

//@ ClassList.toogle()
// setInterval(() =>
//     document.querySelector(".menu").classList.toggle("is-show"), 1000
// );


//! CRUD javascript
//! tạo ra 1 element
//! 1. tạo ra Element trong javascript
const div = document.createElement("div");
//! 2. document.body -> thẻ body
const bodytest = document.body;
//! tạo 1 cái div bên trong view
bodytest.appendChild(div);
div.classList.add("container", "wrapper");
div.textContent = "Lorem ipsum dolor sit amet, consectetur";
// div.innerHTML = `<a href="https://www.google.com">google.com</a>`
div.setAttribute("data-name", "nguyen le hoang bao");

const divCreate = document.createElement("div"); // tạo
const divBody = document.querySelector("body");

divCreate.classList.add("card");

const imgCreate = document.createElement("img");
// imgCreate.classList.add("card-image"); //! tạo class name
imgCreate.setAttribute("class", "card-image h-24");
imgCreate.setAttribute("src", "https://source.unsplash.com/random");
imgCreate.setAttribute("alt", "hinhanh");
imgCreate.setAttribute("style", "height:100px");
divBody.appendChild(divCreate);

divCreate.appendChild(imgCreate); // viết, thẻ img trong div nên phải divCreate.appendchild()

//! createTextNode
//! in ra hello my name is bao
const text = document.createTextNode("hello my name is bao");
const h11 = document.createElement("h1");
bodytest.appendChild(h11);
h11.appendChild(text);

//! cloneNode
//! để true thì copy luôn nội dung bên trong
const h1Clone = h11.cloneNode(true);
divBody.appendChild(h1Clone);

//! hasChildNode 0-> true false kiểm tra có phần tử con hay không
console.log(document.querySelector('body').hasChildNodes());

//! 1.insertAdjacentText("position","text");
// beforebegin
// <h3>
//    afterbegin
//  <span></span>
//    beforeend
// </h3>
// afterend
const divH3 = document.createElement('h3');
divBody.appendChild(divH3);
divH3.insertAdjacentText('beforebegin', 'beforebegin');
divH3.insertAdjacentText('afterbegin', 'afterbegin');
divH3.insertAdjacentText('beforeend', 'beforeend');
divH3.insertAdjacentText('afterend', 'afterend');

//! 1.2 insertAdjacentElement("postion giong ben tren","node")
const divh4 = document.querySelector('h4');
const strong = document.createElement('strong');
strong.classList.add('bold');
divh4.insertAdjacentElement('beforeend', strong);

//! 1.3 insertAdjacentHTML();
divh4.insertAdjacentHTML("beforeend", `
<ul class="menu">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
`);

//! traversing DOM
//! parentNode vs parentElement
const span1 = document.querySelector(".span1");
console.log(span1.parentNode); //hầu như giống nhau chả có khác biệt gì
console.log(span1.parentElement);//hầu như giống nhau chả có khác biệt gì

//! removeChild() -> truy cap cha nó xong -> remove nó
span1.parentNode.removeChild(span1);

//! nextElementSibling: tìm tới phần tử kế tiếp và previousElementsibling: tìm tới phần tử đứng trước
const span2 = document.querySelector(".span2");
console.log(span2.nextElementSibling);
console.log(span2.previousElementSibling);

//! childNodes : trả về 1 mảng Nodelist hết node bên trong
//! children : trả về 1 mảng các thẻ bên trong ko bao gồm textNodes

console.log(span2.childNodes); // Nodelist: text <p> text (text vì sau span là nguyên khoảng trắng)
// <span class="span2">span2 ---text 
//      <p>dsdsdsd</p> ----text
// </span> 
console.log(document.querySelector(".newh4").children); // HTMLcollections: [span, a.span11,span.span22,span.span33]

console.log(document.querySelector(".newh4").children[1].childNodes); // text
// ~ element
// lấy thẻ nằm bên trong thôi
// kết quả là: HTMLCOLECTION <p></p> 

//! firstchild vs firstElemenet
//@ console.log(span2.firstChild); // "span2 "
console.log(span2.firstElementChild);

//! lastChild vs lastElementChild
const h4div = document.querySelector(".newh4");
console.log(h4div.lastChild); //#text
console.log(h4div.lastElementChild);

//! nextSibling và previousSibling
console.log(document.querySelector(".span11").nextSibling);//#text
console.log(document.querySelector(".span11").previousSibling); // #text

//! sự khác nhau HTMLCOLLECTION vs NODELIST
//! giống nhau :  mảng
//! khác : 
//!        htmlcollect ko dùng được foreach
//!        nodelist dùng được foreach

const htmlcollection = document.getElementsByTagName("li");
console.log('htmlcollection', htmlcollection)
const nodelist = document.querySelectorAll("li");
console.log('nodelist', nodelist)
nodelist.forEach(item => item.classList.add("text-sky-400"));


//! parentNode parentElement

const html = document.querySelector("html");
console.log(html.parentNode); // #document
console.log(html.parentElement);// null

//! insertBefore
const insertbefore = document.querySelector(".insert-before");
document.body.insertBefore(insertbefore, document.querySelector(".insert"));


//!  replaceChild
//! node.replaceChild(newNode, oldNode);
//! thay cái boxed = span 
const span = document.createElement("span");
span.textContent = "replaceChild";
document.body.replaceChild(span, document.querySelector(".boxed"));

//! convert HTML collection, Nodelist to Array
const li = document.getElementsByTagName("span");
[...li].forEach(item => console.log(item));


//! document.addEventListener("DOMContentLoaded") là chỉ cần tới HTML là trụng luôn
//! HTML -> CSS -> JS
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
});

//! window.addEventListener("load")
//! fully loaded load xong hết trơn thì chạy chức năng này
window.addEventListener("load", function () {
    console.log("your web loaded");
});


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

//! focus and blur

// remove element match in object
let cardsArray = [
    {
        name: "fire",
        img: "img/fire.png",
    },
    {
        name: "youtube",
        img: "img/youtube.png",
    },]
cardsArray.filter(x => x.name === 'burger').forEach(x => cardsArray.splice(cardsArray.indexOf(x), 1));

