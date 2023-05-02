//! blur: từ trong ra ngoài DOM
//! capture: từ ngoài vào trong DOM 

//! event click
const button = document.querySelector('.click');

//! click(): chạy trước 1 lần khi start

//@ blur
const span = document.querySelector('.click span');
const p = document.querySelector('p');

button.addEventListener('click', click2);
function click2() { console.log(`click button`); }

// p.addEventListener('click',function(e){
//     e.stopImmediatePropagation();
//     console.log('click p ko co propagation');
// });

span.addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log('click span ko co propagation');
});

// span.addEventListener('click', function (e) {
//     // click vào cái nào hiện ra cái đó không bị nổi bọt
//     console.log('click span');
// });

document.body.addEventListener('click', function () {
    console.log(`click body`)
});

//! kết quả : click span 
//!           click button

//! capturing default : capture false

// const span = document.querySelector('.click span');
// button.addEventListener('click',click2,{capture:true});

// span.addEventListener('click',function(e){
//     console.log('click span ko co propagation');
// },{capture:true});

// document.body.addEventListener('click',function(){
//     console.log(`click body`)
// });

//! taget và current target
// button.addEventListener('click', function (e) {
//     // event target chọn chinh xac element mà ta pick tới
//     // kq : <span></span>
//     console.log(`target`, e.target);
//     // event target chọn phần tử mà ta pick tới ~ button .
//     // kq : <button><span></span></button>
//     console.log(`current target`, e.currentTarget);
// })

//! event.preventDefault()
const link = document.querySelector('a');
link.addEventListener('click', function (e) {
    e.preventDefault();// ngăn chặn hành vi mặc định
    console.log(`click me`);
})

//! bài tập background changing
const randomColor = ["#ffa400", "#098066", "#5e8009"]
const Color = () => {
    return randomColor[Math.floor(Math.random() * randomColor.length)];
}
const button1 = document.querySelector(".changing-color");
button1.addEventListener("click", function (e) {
    // document.body.setAttribute("style",`background-color: ${Color()}`);
    document.body.style.backgroundColor = Color();
});

