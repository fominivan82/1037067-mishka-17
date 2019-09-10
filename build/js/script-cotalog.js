var btnMenu = document.querySelector(".main-nav__button");
var menuTop = document.querySelector(".site-list--top");
var menuMiddle = document.querySelector(".site-list--middle");
var link = document.querySelector(".card__link-icon--hare");
var linkBasket = document.querySelector(".card__link-icon--basket");
var linkBigbasket = document.querySelector(".card__link-icon--bigbasket");
var linkProduction = document.querySelector(".production__link");
var popup = document.querySelector(".cart-modal");
var close = document.querySelector(".overlay");

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
