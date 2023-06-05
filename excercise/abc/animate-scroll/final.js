document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".container img");
    window.addEventListener('scroll', function () {
        const windowScroll = window.scrollY;
        [...images].forEach(x => {
            if (windowScroll >= x.offsetTop -x.height/2) {
                x.classList.add('active');
            }
        })
    })
});