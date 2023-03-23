

//! C1
window.addEventListener('load', function () {
    const text = document.querySelector('.text');
    const div = document.querySelector('.tooltip');
    text.addEventListener('mouseenter', function (e) {
        console.log(e.target.dataset.haha);
        const title =e.target.dataset.haha;
        const tootipDiv = document.createElement('div');
        tootipDiv.className ='tooltip-text';
        div.appendChild(tootipDiv);
        tootipDiv.textContent = title;
        const cords = e.target.getBoundingClientRect();
        console.log(cords);
    })
    text.addEventListener('mouseleave', function(e){
        div.removeChild(document.querySelector('.tooltip-text'));
    })
});

