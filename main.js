let input = document.querySelector("#nama")
let text = document.querySelector("#text")
let btn = document.querySelector("form button")

btn.addEventListener("click", () => {
  input.value = ""
  text.value = ""
})