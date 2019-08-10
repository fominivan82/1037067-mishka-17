var BtnMenu = document.querySelector(".main-nav__button");
var Menu = document.querySelector(".main-nav__list");


BtnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  Menu.classList.toggle("main-nav__list--show");
  BtnMenu.classList.toggle("main-nav__button--close");
  BtnMenu.focus();
});
