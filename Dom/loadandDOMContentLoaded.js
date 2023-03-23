// document.addEventListener("DOMContentLoaded") là chỉ cần tới HTML là trụng luôn
// HTML -> CSS -> JS
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
});

// window.addEventListener("load")
// fully loaded load xong hết trơn thì chạy chức năng này
window.addEventListener("load", function () {
    console.log("your web loaded");
});