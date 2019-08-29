var btnMenu = document.querySelector(".main-nav__button");
var menu = document.querySelector(".main-nav__list");


btnMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__list--show");
  btnMenu.classList.toggle("main-nav__button--close");
  btnMenu.focus();
});
