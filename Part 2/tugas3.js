function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // validasi input
  if (typeof (nilaiAwal + nilaiAkhir) !== "number") {
    return console.log("Output : Data yang dimasukan harus angka");
  }
  if (!dataArray.every((data) => typeof data == "number")) {
    return console.log("Output : Data array harus berupa angka");
  }

  // validasi nilai
  if (nilaiAwal > nilaiAkhir) {
    return console.log("Output : Nilai akhir harus lebih besar dari nilai awal");
  }

  // validasi dataArray
  if (dataArray.length <= 5) {
    return console.log("Output : Jumlah angka dalam dataArray harus lebih dari 5");
  }

  // algoritma utama
  let seleksi = dataArray.filter((nilai) => nilai >= nilaiAwal && nilai <= nilaiAkhir);

  // mengurutkan hasil
  seleksi = seleksi.sort(function (a, b) {
    return a - b;
  });

  // validasi jika tidak ada nilai di antara nilaiAwal dan nilai Akhir
  if (!seleksi.length) {
    return console.log("Output :  Nilai tidak ditemukan");
  }
  // mencetak output
  console.log(`Output : ${seleksi}`);
  console.log(seleksi);
}

// Pengujian 1
// SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// Pengujian 2
// SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
// Pengujian 3
// SeleksiNilai(4, 17, [2, 25, 4]);
// Pengujian 4
// SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
// Pengujian tambahan
// SeleksiNilai(-1, 1, [0, 2, 3, 4, 5, 6, 7]);
