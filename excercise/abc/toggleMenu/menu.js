// const target = document.querySelectorAll(".menu-link").forEach(x => x.setAttribute('target', 'blank'));

const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");

document.addEventListener("click", function (e) {

    // == false  bấm bên ngoài
    if ( e.target.matches('.menu-toggle')) {
        menu.classList.toggle("is-show");
        menuToggle.classList.toggle("fa-bars");
        menuToggle.classList.toggle("fa-times");
    }
    else{
        menu.classList.remove("is-show");
        menuToggle.classList.remove("fa-times");
        menuToggle.classList.add("fa-bars");
    }
});
