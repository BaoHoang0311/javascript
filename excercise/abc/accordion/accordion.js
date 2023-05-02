const accordionheader = document.querySelectorAll(".accordion-header");

[...accordionheader].forEach(item => item.addEventListener('click', function (e) {
    const next = item.nextElementSibling;
    const content = e.target.nextElementSibling;
    // scrollheight : bao gồm padding
    content.style.height = `${content.scrollHeight}px`;
    if (e.target.nextElementSibling.classList.contains('is-active')) content.style.height = `0px`;
    next.classList.toggle('is-active');
    item.querySelector(".icon").classList.toggle('fa-angle-down');
    item.querySelector(".icon").classList.toggle('fa-angle-up');
}));

document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('accordion-header')) {
        const accordion_content = document.querySelectorAll('.accordion-content');
        [...accordion_content].forEach(x => {
            console.log(x);
            if (x.classList.contains('is-active')) {
                x.classList.remove('is-active');
                x.style.height = `0px`;
            }
        });
    }
});