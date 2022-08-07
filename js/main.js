const elModalOpenBtn = document.querySelector(".ask-question-btn");
const elModal = document.querySelector(".modal");
const elModalCloseBtn = document.querySelector(".modal__close");

elModalOpenBtn.addEventListener("click", function () {
  elModal.classList.add("modal-open");
});

elModalCloseBtn.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

elModal.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

console.log(elModalOpenBtn);
