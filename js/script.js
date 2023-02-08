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
  window.scrollTo( {
    top: 1080,
    behavior: "smooth"
  })
}

/* Função para realiza o scroll up da página */
const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 540) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
