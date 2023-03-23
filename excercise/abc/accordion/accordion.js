const accordionheader = document.querySelectorAll(".accordion-header");
accordionheader.forEach(item => console.log());

console.log(accordionheader[1].children);

[...accordionheader].forEach(item => item.addEventListener('click', function (e) {
    const next = item.nextElementSibling;
    const content = e.target.nextElementSibling;
    console.log('content', content);
    // scrollheight : bao gồm padding
    content.style.height = `${content.scrollHeight}px`;
    if (e.target.nextElementSibling.classList.contains('is-active')) content.style.height = `0px`;
    next.classList.toggle('is-active');
    item.querySelector(".icon").classList.toggle('fa-angle-down');
    item.querySelector(".icon").classList.toggle('fa-angle-up');
}));