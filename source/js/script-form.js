var btnmenu = document.querySelector(".main-nav__button");
var menu = document.querySelector(".main-nav__list");


btnmenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__list--show");
  btnmenu.classList.toggle("main-nav__button--close");
  btnmenu.focus();
});
