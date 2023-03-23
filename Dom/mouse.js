//! Sự kiện di chuyển chuột
//! mouseover, mousemove, mouseenter, mouseleave
const button = document.querySelector("button");

//! movemove: Di chuyển trên phần tử đó
// button.addEventListener("mousemove", function () {
//     console.log('movemove');
// });

//! mouseover:  nhảy khi đụng nó và con của phần tử đó
// button.addEventListener("mouseover", function () {
//     console.log('mouseover');
// });


//! mouseenter:  dù đụng nó hay con của nó thì cũng đếm là 1
// button.addEventListener("mouseenter", function () {
//     console.log('mouseenter');
// });
//! mouseleave
//! pageX, pageY, clientX, clientY
document.addEventListener('mousemove', function (event){
    console.log(`pageX: `,event.pageX);
    console.log(`clientX: `,event.clientX); //! màn hình trong cái phần đó

    console.log(`pageY: `,event.pageY);
    console.log(`clientY: `,event.clientY); //! Viewport
    //! page sẽ lấy tọa độ của document
})