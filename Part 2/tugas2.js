// Data nama
const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
// Pembuatan main function
function SearchName(cari, batas, callback) {
  var hasilTarget = "";
  name.map((namaTarget) => {
    namaTarget = namaTarget.toLowerCase();
    if (namaTarget.includes(cari)) {
      hasilTarget += `${namaTarget} `;
    }
  });
  hasilTarget = hasilTarget.trim().split(" ");
  callback(batas, hasilTarget);
}

// function callback
function callback(batas, hasilTarget) {
  hasilTarget = hasilTarget.slice(0, batas);

  console.log("Hasil Pencarian");
  console.log(hasilTarget);
}

// Pengujian
SearchName("an", 3, callback);
