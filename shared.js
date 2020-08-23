var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var aniButton = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

aniButton.addEventListener("animationstart", function (event) {
  console.log("animation-Started", event);
});
aniButton.addEventListener("animationiteration", function (event) {
  console.log("animation-Iteration", event);
});
aniButton.addEventListener("animationend", function (event) {
  console.log("animation-end", event);
});
