var btnMenu = document.querySelector(".main-nav__button");
var menuTop = document.querySelector(".site-list--top");
var menuMiddle = document.querySelector(".site-list--middle");
var link = document.querySelector(".card__order--hare");
var linkBasket = document.querySelector(".card__order--basket");
var linkBigbasket = document.querySelector(".card__order--bigbasket");
var linkProduction = document.querySelector(".production__link");

btnMenu.classList.remove("main-nav--nojs");
menuTop.classList.remove("main-nav--nojs");
menuMiddle.classList.remove("main-nav--nojs");

var popup = document.querySelector(".cart-modal");
var close = document.querySelector(".order__overlay");

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

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

linkBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

linkBigbasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

linkProduction.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("cart-modal--show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("cart-modal--show");
});
