/* Função para o menu responsivo */
function menuShow() {
  var menuMobile = document.querySelector(".mobile-menu")
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open")
    document.querySelector(".icon").name = "menu-outline"
  } else {
    menuMobile.classList.add("open")
    document.querySelector(".icon").name = "close-outline"
  }
}

/* Função para realizar o scroll down da página */
function scrollDown() {
  window.scrollTo({ top: 1000, behavior: "smooth" })
}

/* Função para realiza o scroll up da página */
document.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    document.getElementById("scroll-up").style.display = "block"
  } else {
    document.getElementById("scroll-up").style.display = "none"
  }
})

document.getElementById("scroll-up").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

/* Função para ativar o link do nav menu*/
const activeLink = document.querySelectorAll(".nav-link")

activeLink.forEach((link) => {
  link.addEventListener("click", () => {
    activeLink.forEach((link) => link.classList.remove("active"))
    link.classList.add("active")
  })
})
