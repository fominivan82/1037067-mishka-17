var btnMenu = document.querySelector(".main-nav__button");
var menu = document.querySelector(".main-nav__list");
var order = document.querySelector(".ware__link");
var popup = document.querySelector(".cart-modal");
var close = document.querySelector(".order__overlay");

btnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__list--show");
  btnMenu.classList.toggle("main-nav__button--close");
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
