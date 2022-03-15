function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // validasi input
  if (typeof (nilaiAwal + nilaiAkhir) !== "number") {
    return console.log("Output : Data yang dimasukan harus angka");
  } else if (!dataArray.every((data) => typeof data == "number")) {
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

  // mencetak output
  console.log(`Output : ${seleksi}`);
  console.log(seleksi);
  if (seleksi) {
    return console.log("Output :  Nilai tidak ditemukan");
  }
}

// Pengujian 1
// SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// Pengujian 2
// SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
// Pengujian 3
// SeleksiNilai(4, 17, [2, 25, 4]);
// Pengujian 4
// SeleksiNilai(5, 17, [2, 25, 4, 14, 17, 30, 8]);
