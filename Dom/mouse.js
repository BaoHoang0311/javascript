//! Sự kiện di chuyển chuột
//! mouseover, mousemove, mouseenter, mouseleave
const button = document.querySelector("button");

//! movemove: Di chuyển trên phần tử đó
// button.addEventListener("mousemove", function () {
//     console.log('movemove');
// });
//! mouseover:  nhảy khi đụng nó và con của phần tử đó
//! mouseenter:  dù đụng nó hay con của nó thì cũng đếm là 1
//! mouseleave : khi chuột rời đi

//! pageX, pageY, clientX, clientY
document.addEventListener('mousemove', function (event){
    console.log(`pageX: `,event.pageX);
    console.log(`clientX: `,event.clientX); //! màn hình trong cái phần đó

    console.log(`pageY: `,event.pageY);
    console.log(`clientY: `,event.clientY); //! Viewport
    //! page sẽ lấy tọa độ của document
})



//! keydown : khi nhấn xuống, có preventDefault
const input = document.querySelector('.input');
input.addEventListener('keydown',function(event) {
    console.log(event.key); // key nhập vào

})
//! keyup : khi nhấn nút thả ra

//! keypress: khi nhấn xuống, có preventDefault,
//! ko nhận mấy nút tào lao như enter delete mũi tên page up 
//! esc, page down
//! keydown -> keypress-> keyup

