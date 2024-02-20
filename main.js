let menuIcon = document.getElementById("menuIcon");
let menu = document.querySelector(".menu header ul");

menuIcon.onclick = function () {
    menu.classList.toggle("active");
};