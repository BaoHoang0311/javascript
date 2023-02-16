//! bài tập active modal
const divBody = document.body;
// //! LEVEL 1
// const template =
//     `
// <div class="modal">
//     <div class="modal-content">
//         <i class="fa fa-times modal-close"></i>
//         <div class="modal-desc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam corrupti dicta et quis facere molestiae iusto ab architecto nulla deserunt in aspernatur iste eius consectetur quos, veritatis, perspiciatis recusandae!
//         </div>
//         <div class="modal-action">
//             <button class= "modal-submit">Confirm</button>
//             <button class="modal-cancel">Cancel</button>
//         </div>
//     </div>
// </div>`


// divBody.insertAdjacentHTML("afterbegin",template);
// const z1 = document.querySelector(".modal");
// if (z1) {
//     const activemodal = setInterval(() => {
//         z1.classList.toggle("is-show")
//     }, 5000);
// }

//! LEVEL 2
const modal  = document.createElement("div");
modal.setAttribute("class", "modal");
const modalContent = document.createElement("div");
modalContent.setAttribute("class", "modal-content");
modal.appendChild(modalContent);

const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);

const modalDesc = document.createElement("div");
modalDesc.className = "modal-desc";
modalContent.appendChild(modalDesc);
modalDesc.textContent = " lorem dasdasd  dasdasd " ;

const modalAction = document.createElement("div");
modalAction.className= "modal-action";
modalContent.appendChild(modalAction);

const modalSubmit = document.createElement("button");
modalSubmit.className= "modal-submit";
modalSubmit.textContent = "Submit";

const modalCancel = document.createElement("button");
modalCancel.className= "modal-cancel";
modalCancel.textContent = "Cancel";

modalAction.appendChild(modalSubmit);
modalAction.appendChild(modalCancel);
modalContent.appendChild(modalAction);

divBody.appendChild(modal);

const z1 = document.querySelector(".modal");
if (z1) {
    const activemodal = setInterval(() => {
        z1.classList.toggle("is-show")
    }, 5000);
}