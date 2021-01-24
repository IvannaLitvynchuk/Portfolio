const buttonInfo = document.querySelector(".open-window");
const modalWindow = document.querySelector(".window");
const buttonClose = document.querySelector(".close-window");
const navMenu = document.querySelector(".hamburger");
const navBarLinks = document.querySelector(".nav-links");


buttonInfo.addEventListener('click', function () {
    modalWindow.classList.add("window-active");
});
buttonClose.addEventListener('click', function () {
   modalWindow.classList.remove("window-active");
});
navMenu.addEventListener('click', function () {
    navBarLinks.classList.toggle("active");
});
navMenu.addEventListener('click', function () {
    navMenu.classList.toggle("active");
});
