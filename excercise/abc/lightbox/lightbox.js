function temp(str) {
    const template = `
    <div class="lightbox">
        <i class="fa fa-angle-left"></i>
        <div class="lightbox-content">
            <img src="${str}" alt="" class="lightbox-image">
        </div>
        <i class="fa fa-angle-right"></i>
    </div>
    `
    return template;
}



const img = document.querySelectorAll('img');
[...img].forEach(x => x.addEventListener('click', handlefunction));

function handlefunction(e) {
    // tránh nổi bọt vì thằng này nằm trong thằng body
    e.stopPropagation();
    document.body.insertAdjacentHTML('beforeend', temp(e.target.getAttribute('src')));
}

document.body.addEventListener('click', function (e) {
    // 2 sự kiện giống nhau cùng lắng nghe dung e.stopImmediatePropagation()
    e.stopImmediatePropagation();
    const Image = document.querySelector('.lightbox-image');
    if (Image == null) return;

    const srcImage = Image.getAttribute('src');
    let idx = [...img].findIndex(x =>  x.getAttribute('src') === srcImage);
    const lightbox = document.querySelector('.lightbox');

    if (e.target.classList.contains('lightbox')) {
        lightbox.parentElement.removeChild(lightbox);
    }
    
    if (e.target.classList.contains('fa')) {
        lightbox.parentElement.removeChild(lightbox);
        if (e.target.classList.contains('fa-angle-right')) {
            document.body.insertAdjacentHTML('beforeend', temp(img[idx == img.length - 1 ? 0 : ++idx].getAttribute('src')));
        }
        else {
            document.body.insertAdjacentHTML('beforeend', temp(img[idx = idx == 0 ? 0 : --idx].getAttribute('src')));
        }
    }
})
