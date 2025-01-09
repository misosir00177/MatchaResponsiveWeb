const burger = document.querySelector(".Burger-Menu")
const nav = document.querySelector(".header-Nav")
const navLinks = document.querySelectorAll(".header-Nav a")

console.log(navLinks);

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-Active");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`
        }
        
    });
    burger.classList.toggle("toggle");
});