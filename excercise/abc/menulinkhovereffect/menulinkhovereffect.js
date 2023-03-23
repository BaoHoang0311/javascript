const links = document.querySelectorAll('.menu-link');


window.addEventListener('load', function () {
    [...links].forEach(x => x.addEventListener('mouseenter', handleoverlink));
    function handleoverlink(event){
        console.log(event.target);
    }
})
