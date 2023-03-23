const tab = document.querySelectorAll(".tab-item");
const tablist = document.querySelector(".tab-list");
const tabcontent = document.querySelectorAll(".tab-content");
tab[0].classList.add("active");

[...tab].forEach(item => item.addEventListener("click", handlefunction));
function handlefunction(e) {
    tab.forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");

    console.log(e.target.getAttribute("data-tab"));
    [...tabcontent].forEach(item => {
        if (e.target.getAttribute("data-tab") !== item.getAttribute("data-tab")) item.classList.remove("active");
        else item.classList.add("active");
    });
}
// 1 2 3   4
// B C B C B C  B C B C B C  