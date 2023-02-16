function A(title) {
    const template =
        `
    <div class="noti">
        <img src="https://source.unsplash.com/random" alt="" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo tempora similique nobis aut recusandae totam facilis, voluptatem excepturi perspiciatis enim unde ipsa saepe rerum vel, natus sint nesciunt. Voluptate!
            </p>
        </div>
    </div>
    `
    document.body.insertAdjacentHTML("beforeend", template); // THÊM LIÊN TỤC PHẢI CHẶN TH NÓ THÊM HOÀI
}
const randomString = [
    "Welcome to js course!",
    "welcome this tutorial!",
    "Welcome backend developer",
]
const set = setInterval(() => {
    const item = document.querySelector(".noti");
    if (item) {
        // item.parentElement.removeChild(item);// như nhau
        item.parentNode.removeChild(item);
    }
    let title = randomString[Math.floor(Math.random() * randomString.length)];
    let lasttitle ="";
    if(lasttitle !== title) A(title);
    lasttitle = title;
}, 2000);
