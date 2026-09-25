const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


// Ouvrir le menu

menuBtn.addEventListener("click", function () {

    sideMenu.classList.add("open");

    overlay.classList.add("show");

});


// Fermer le menu

closeBtn.addEventListener("click", function () {

    sideMenu.classList.remove("open");

    overlay.classList.remove("show");

});


// Fermer en cliquant sur l'extérieur

overlay.addEventListener("click", function () {

    sideMenu.classList.remove("open");

    overlay.classList.remove("show");

});


// Fermer automatiquement après avoir choisi une section

const menuLinks = document.querySelectorAll(".side-menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sideMenu.classList.remove("open");

        overlay.classList.remove("show");

    });

});