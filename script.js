function mode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*  o toggle faz o que a lógica abaixo faz
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
