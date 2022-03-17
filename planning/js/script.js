/*  --------------------- footer ----------------------  */
const lastUpdate = (year, updateDate) => `&copy ${year} .:|:. E. Jared Larios .:|:. Last Updated: ${updateDate}`;

document.querySelector("footer").innerHTML = lastUpdate(new Date().getFullYear(), document.lastModified);

/* ----------------------- Menu ----------------------------*/

const menubar = document.querySelector(".menu-bar")
const navbar = document.querySelector("nav")

menubar.addEventListener("click", () => {
    navbar.classList.toggle('menu-bar-show');
})