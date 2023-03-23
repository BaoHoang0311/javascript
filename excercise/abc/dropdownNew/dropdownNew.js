

const dropdown__select = document.querySelector('.dropdown__select');

dropdown__select.addEventListener('click', handlefunction);

function handlefunction(e) {
    if (e.target.classList.contains('dropdown__select')) {
        e.target.nextElementSibling.classList.toggle('show');
        e.target.querySelector('.dropdown__caret').classList.toggle('fa-caret-down');
        e.target.querySelector('.dropdown__caret').classList.toggle('fa-caret-up');
    }
}
const dropdown__item = document.querySelectorAll('.dropdown__item');
console.log(dropdown__item);

[...dropdown__item].forEach(x => x.addEventListener('click', handlefunction1));

function handlefunction1(e) {
    const dropdown__selected = document.querySelector('.dropdown__selected');
    const dropdown__caret = document.querySelector('.dropdown__caret');
    dropdown__selected.innerText = e.target.innerText;
    dropdown__caret.classList.toggle('fa-caret-down');
    dropdown__caret.classList.toggle('fa-caret-up');
    e.target.parentNode.classList.toggle('show');
}

document.addEventListener('click', handlefunction2);

function handlefunction2(e) {
    if(!e.target.classList.contains('dropdown__select')){
        const dropdown__list = document.querySelector('.dropdown__list');
        dropdown__list.classList.remove('show');
    }
}