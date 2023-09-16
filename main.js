document.querySelector(".btn-reset").addEventListener("click", () => {
  run()
})

function run(){
  setTimeout(() => {
    document.querySelector("#appVersion").value = navigator.appVersion
  }, 500)
}

let appVersion = document.querySelector("#appVersion").value = navigator.appVersion

