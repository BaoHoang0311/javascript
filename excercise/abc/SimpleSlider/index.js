
window.addEventListener('load', function () {
    const img = document.querySelectorAll('img');
    const sliderprev = document.querySelector('.slider-prev');
    const slidernext = document.querySelector('.slider-next');
    const slideritem = document.querySelectorAll('.slider-item');

    const ul = document.querySelector('.slider-dots');
    const custom_style = {
        height: '100%',
        width: '100%',
        flex: '1 0 100%',
    }
    Object.assign(document.querySelector('.slider-main :nth-child(1)').style, custom_style);

    let idx = 0;

    [...img].forEach(x => {
        var li = document.createElement("li");
        li.classList.add("slider-dot-item");
        li.setAttribute("data-index", idx++);
        ul.append(li);
    });

    const sliderdotitem = this.document.querySelectorAll('.slider-dot-item');
    [...sliderdotitem].forEach(x => {
        if (x.getAttribute('data-index') == 0) {
            x.classList.add('active');
        }
    })

    let idxCount = 0;
    slidernext.addEventListener('click', function () {
        [...slideritem].forEach(x => x.removeAttribute('style'));
        Object.assign(slideritem[handleABC(prev = 'tang')].style, custom_style);
        customdot();
    })

    function handleABC(prev = 'tang') {
        if (prev == 'tang') {
            if (idxCount == img.length-1) {
                idxCount = 0;
            }
            else {
                ++idxCount;
            }
        }
        else {
            if (idxCount == 0) {
                idxCount = img.length - 1;
            }
            else {
                --idxCount;
            }
        }
        return idxCount;
    }
    function customdot() {
        [...sliderdotitem].forEach(x => x.classList.remove('active'));
        sliderdotitem[idxCount].classList.add('active');
    }
    sliderprev.addEventListener('click', function () {
        [...slideritem].forEach(x => x.removeAttribute('style'));
        Object.assign(slideritem[handleABC(prev="das")].style, custom_style);
        customdot()
    })
})
