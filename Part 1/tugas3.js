// Mengatur Masukan
var printSegitiga = "5";

// Menerapkan validasi untuk angka minus
if (printSegitiga <= 0) {
  console.log("Masukan bilangan bulat positif > 0\n");
  printSegitiga = Math.abs(printSegitiga);
}
// Membuat algoritma Piramid Angka
let hasil = "";
for (let i = 1; i <= printSegitiga; i++) {
  for (let j = printSegitiga; j >= i; j--) {
    hasil += `${Math.abs(j - (printSegitiga + 1))} `;
  }
  hasil += "\n";
}
// Menerapkan validasi input harus tipe data number
if (typeof printSegitiga == "number") {
  console.log(hasil);
} else {
  console.log("Masukan nilai harus berupa angka");
}
