var BtnMenu = document.querySelector(".main-nav__button");
var Menu = document.querySelector(".main-nav__list");
var order = document.querySelector(".ware__link");
var popup = document.querySelector(".cart-modal");
var close = document.querySelector(".order__overlay");

BtnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  Menu.classList.toggle("main-nav__list--show");
  BtnMenu.classList.toggle("main-nav__button--close");
  BtnMenu.focus();
});

order.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("cart-modal--show");
});

