// Menenentukan nilai masing-masing mata pelajaran
const matematika = "100";
const bahasaIndonesia = 85;
const bahasaInggris = 95;
const ipa = 90;

// Mengolah data rata-rata
const rata2 = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4;

// Mengolah data grade
if (rata2 >= 0 && rata2 < 60) {
  var grade = "Grade = E";
} else if (rata2 >= 60 && rata2 < 70) {
  var grade = "Grade = D";
} else if (rata2 >= 70 && rata2 < 80) {
  var grade = "Grade = C";
} else if (rata2 >= 80 && rata2 < 90) {
  var grade = "Grade = B";
} else if (rata2 >= 90 && rata2 <= 100) {
  var grade = "Grade = A";
} else if (rata2 < 0 || rata2 > 100) {
  var grade = "Grade tidak dapat dideteksi";
}

// Melalukan validasi masing-masing mata pelajaran
function cekNilai(mapel) {
  if (mapel < 0 || mapel > 100) {
    return false;
  } else {
    return true;
  }
}

if (cekNilai(matematika) && cekNilai(bahasaIndonesia) && cekNilai(bahasaInggris) && cekNilai(ipa)) {
  var nilairata2 = `Rata -rata = ${rata2}`;
} else {
  var nilairata2 = `Nilai yang anda masukan tidak sesuai (Masukan nilai 1 - 100)`;
  var grade = "Grade tidak dapat dideteksi";
}
// Melakukan validasi untuk nilai kosong, nol dan beda tipe data
if (typeof matematika !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number") {
  console.log("Data yang dimasukan haru berupa Angka");
} else {
  if (matematika && bahasaIndonesia && bahasaInggris && ipa) {
    console.log(`Hasil Ujian Nasional yaitu \n ${nilairata2} \n ${grade}`);
  } else {
    console.log("nilai yang dimasukan belum lengkap");
  }
}
