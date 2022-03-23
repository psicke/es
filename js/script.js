/* --- Responsive menu ---*/
const menu = document.querySelector(".menu")
const menuBar = document.querySelector(".menu-bars")

menuBar.addEventListener("click", () => {
    menu.classList.toggle("show-menu")
})