// Data nama
const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
// Pembuatan main function
function SearchName(cari, batas, callback) {
  var hasilTarget = "";
  name.map((namaTarget) => {
    // Mensetarakan case dan validasi tipe data parameter "cari"
    namaTarget = namaTarget.toLowerCase();
    cari = cari.toString().toLowerCase();
    // Proses searching
    if (namaTarget.includes(cari)) {
      // Mengkapitalkan huruf awal
      let hurufAwal = namaTarget.slice(0, 1).toUpperCase();
      let hurufLain = namaTarget.slice(1);
      namaTarget = hurufAwal.concat(hurufLain);
      // Masukan ke wadah hasil
      hasilTarget += `${namaTarget} `;
    }
  });
  // Mendapatkan wadah penuh berisi nama hasil searching
  hasilTarget = hasilTarget.trim().split(" ");
  // Menerapkan fungsi callback
  callback(batas, hasilTarget);
}

// function callback
function callback(batas, hasilTarget) {
  hasilTarget = hasilTarget.slice(0, batas);
  if (hasilTarget[0] == "") {
    return console.log("Data pencarian tidak ditemukan");
  }
  console.log("Hasil Pencarian");
  console.log(hasilTarget);
}

// Pengujian
SearchName("q", 3, callback);
