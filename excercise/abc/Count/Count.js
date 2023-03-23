

const des = document.querySelector('.counter-descrease');
const asc = document.querySelector('.counter-increase');
const number =document.querySelector('.counter-number');
let count = parseInt(number.textContent);
des.addEventListener('click',()=>{
    number.textContent = count <= 0 ? 0 : --count;
});
asc.addEventListener('click', ()=> {
    number.textContent = ++count;
});