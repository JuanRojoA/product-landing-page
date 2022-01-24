const menuOption = document.getElementById("hamburger");
const menu = document.getElementById("mobile-nav-bar");
const links = document.getElementsByClassName("mobile-link");

menuOption.addEventListener("click", () => {
  menuOption.classList.toggle("active");
  menu.classList.toggle("active");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.remove("active");
    menuOption.classList.remove("active");
  });
}
