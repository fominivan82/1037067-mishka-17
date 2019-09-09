var btnMenu = document.querySelector(".main-nav__button");
var menuTop = document.querySelector(".site-list--top");
var menuMiddle = document.querySelector(".site-list--middle");
var order = document.querySelector(".ware__link");
var popup = document.querySelector(".cart-modal");
var close = document.querySelector(".order__overlay");

btnMenu.classList.remove("main-nav--nojs");
menuTop.classList.remove("main-nav--nojs");
menuMiddle.classList.remove("main-nav--nojs");

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

order.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("cart-modal--show");
});
