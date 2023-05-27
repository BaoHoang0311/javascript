window.addEventListener('load', function () {
    const text = document.querySelector('.text');
    const div = document.querySelector('.tooltip');
    text.addEventListener('mouseenter', function (e) {
        const title =e.target.dataset.haha;
        const tootipDiv = document.createElement('div');
        tootipDiv.className ='tooltip-text';
        div.appendChild(tootipDiv);
        tootipDiv.textContent = title;
    })
    text.addEventListener('mouseleave', function(e){
        div.removeChild(document.querySelector('.tooltip-text'));
    })
});

