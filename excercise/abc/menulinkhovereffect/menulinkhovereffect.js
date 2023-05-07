
window.addEventListener('load', function () {
    const links = document.querySelectorAll('.menu-link');
    const line = document.querySelector(".line-effect");
    [...links].forEach(x => x.addEventListener('mouseenter', handleoverlink));
    function handleoverlink(event) {
        line.classList.remove('active');
        line.classList.add('active');
        const {left, top, width,height} = event.target.getBoundingClientRect();
        line.style.left = `${left}px`;
        line.style.width = `${width}px`;
        line.style.top = `${top+height}px`;
    }
    const menu = document.querySelector(".menu");
    menu.addEventListener('mouseleave', handleoverlink1);
    function handleoverlink1(event) {
        console.log(event.target);
        line.style.width = `0px`;
    }
})
