var btnMenu = document.querySelector(".main-nav__button");
var menuTop = document.querySelector(".site-list--top");
var menuMiddle = document.querySelector(".site-list--middle");

btnMenu.classList.remove("main-nav__button--nojs");
menuTop.classList.remove("site-list--top-nojs");
menuMiddle.classList.remove("site-list--middle-nojs");


btnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuTop.classList.toggle("main-nav__list--show");
  btnMenu.classList.toggle("main-nav__button--close");
  btnMenu.focus();
});

btnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuMiddle.classList.toggle("main-nav__list--show");
  btnMenu.focus();
});
