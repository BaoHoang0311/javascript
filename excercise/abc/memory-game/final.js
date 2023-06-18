let cardsArray = [
    {
        name: "fire",
        img: "img/fire.png",
    },
    {
        name: "youtube",
        img: "img/youtube.png",
    },
    {
        name: "flash",
        img: "img/flash.png",
    },
    {
        name: "gift",
        img: "img/gift.png",
    },
    {
        name: "tron",
        img: "img/tron.png",
    },
    {
        name: "ufo",
        img: "img/ufo.png",
    },
    {
        name: "plant",
        img: "img/plant.png",
    },
    {
        name: "burger",
        img: "img/burger.png",
    },
];

cardsArray = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());

// let cardsArray = [
//     {
//         name: "fire",
//         img: "img/fire.png",
//     },
//     {
//         name: "youtube",
//         img: "img/youtube.png",
//     },
//     {
//         name: "fire",
//         img: "img/fire.png",
//     },
//     {
//         name: "youtube",
//         img: "img/youtube.png",
//     },
// ];
const grid = document.querySelector(".grid");

function init() {
    grid.innerHTML = '';
    cardsArray.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardfront = card.appendChild(document.createElement("div"));
        cardfront.classList.add('front');

        const cardback = card.appendChild(document.createElement("div"));
        cardback.classList.add('back');
        cardback.style.backgroundImage = `url(${item.img})`
        cardback.setAttribute('data-name', item.name);
        grid.append(card);
    });
}
init();

function matched() {
    const selected = document.querySelectorAll('.selected');
    [...selected].forEach(x =>{
        x.querySelector('.front').classList.add('matched');
    });

}

let z = [];

function resetSelected() {
    let card = document.querySelectorAll('.card');
    [...card].forEach(x => x.classList.remove("selected"));
    z = [];
}
// [...front dính chưởng liền] vì mới xóa hết dưới mà
grid.addEventListener('click', function (e) {

    let c = e.target.querySelector('.front');
    if (c != null && c.classList.contains('matched')) {
        return;
    }

    let nodeName = e.target.nodeName;

    if (nodeName === 'SECTION') return;
    if (z.length == 2) {
        z = [];
        resetSelected();
    }

    if (e.target.classList.contains('selected')) return;
    e.target.parentElement.classList.add('selected');

    if (z[0] == undefined) {
        z.push(e.target.parentElement.querySelector('.back').getAttribute('data-name'));
    }
    else {
        z.push(e.target.parentElement.querySelector('.back').getAttribute('data-name'));
    }
    if (z[0] == z[1] && z[0] != undefined && z[1] != undefined) {
        matched();
        setTimeout( resetSelected, 2000);
        console.log('trung nhau');
    }
    else if (z.length == 2) {
        console.log('ko trung nhau');
        setTimeout(resetSelected, 2000);
    }
    const matched1 = document.querySelectorAll('.matched');
    if (cardsArray.length == matched1.length) {
        setTimeout(init, 1000);
    }
})

setInterval(resetSelected, 20000);
