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