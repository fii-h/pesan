document.querySelector(".btn-reset").addEventListener("click", () => {
  run()
})

function run() {
  setTimeout(() => {
    document.querySelector("#appVersion").value = navigator.appVersion
  }, 500)
}

/*
let kirim = document.querySelector(".kirim")

kirim.addEventListener("click", () => {
  kirim.parentElement.querySelector("input").innerHTML = ""
    kirim.parentElement.querySelector("input").innerHTML = ""
})
*/

let appVersion = document.querySelector("#appVersion").value = navigator.appVersion

fetch('https://script.google.com/macros/s/AKfycbzheao91uG250fTXCC5P9Ke3cyEk7Mz6bIXiRcsipZ1c6G0QsXhPgENq9j4sL3LtK2IPw/exec')
  .then(response => response.json())
  .then(data => {

    let str = `<h3>${data.length} Pesan 📥</h3> <div class="input-group mb-3">
      <input type="text" class="form-control inputCari" placeholder="Cari..." onkeyup="cari(this)" value='' aria-label="Username" aria-describedby="basic-addon1">
    </div>`
    for (let dt of data.reverse()) {
      str += `
      <div class="card mt-2">
        <div class="card-header">
          @${dt[1]}
        </div>
        <div class="card-body">
          <p class="card-text">${dt[2]}</p>
        <footer class="mt-3 blockquote-footer">Tanggal: <cite title="Source Title">${ubahTanggal(dt[0])}</cite></footer>
        </div>
      </div>
      `
    }


    document.querySelector(".boxs").innerHTML = str

  })
  .catch(error => console.error(error));


function hapus() {
  alert("huh... np?")
}

function ubahTanggal(iso8601) {
  const date = new Date(iso8601);

  // Mendapatkan komponen tanggal
  const tahun = date.getFullYear();
  const bulan = date.getMonth() + 1; // Perlu ditambahkan 1 karena bulan dimulai dari 0 (Januari).
  const hari = date.getDate();

  // Mendapatkan komponen waktu
  const jam = date.getUTCHours();
  const menit = date.getUTCMinutes();
  const detik = date.getUTCSeconds();

  // Membuat format tanggal dan waktu
  const formatted = `${tahun}-${bulan}-${hari} [ ${jam}:${menit} ]`;

  return formatted
}

/*
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/

// funsi cari
function cari(teks) {

  let cards = document.querySelectorAll(".card")

  for (let card of cards) {
    if (card.textContent.toLowerCase().includes(teks.value.toLowerCase())) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  }
}