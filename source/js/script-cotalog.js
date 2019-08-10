var BtnMenu = document.querySelector(".main-nav__button");
var Menu = document.querySelector(".main-nav__list");
var link1 = document.querySelector(".card__order-1");
var link2 = document.querySelector(".card__order-2");
var link3 = document.querySelector(".card__order-3");
var popup = document.querySelector(".cart-modal");
var close = document.querySelector(".order__overlay");

BtnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  Menu.classList.toggle("main-nav__list--show");
  BtnMenu.classList.toggle("main-nav__button--close");
  BtnMenu.focus();
});

link1.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

link2.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

link3.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("cart-modal--show");
});
