//--------------------------------------------------------------------------------------------------------
// 10 Method pada Javascript
//--------------------------------------------------------------------------------------------------------

// 1. chartAt()
// Tujuan : Menyalin/ mengambil sebuah character pada tipe data string untuk index tertentu.
// Contoh case : reverse huruf pada sebuah kata
const kata = "Programming";
// let hasilKata = "";
// for (let i = kata.length - 1; i >= 0; i--) {
//   hasilKata += kata.charAt(i);
// }
// console.log(hasilKata);

//-------------------------------------------------------------------------------------------------------
// 2. includes()
// Tujuan : Memeriksa sebuah string apakah berada pada string lainnya dengan nilai hasil berupa boolean.
// Contoh case : Mendeteksi nama pada sebuah teks kumpulan nama
// const kumpulanNama = "Siti Adit Jaya Kurnia Basuki Tamara Joko Dea Suci Tita Cinta Raya Darma Laila Anis Puji Santo";
// const namaTarget = "Luna";
// let hasilCek = kumpulanNama.includes(namaTarget);
// if (hasilCek) {
//   console.log(`Nama ${namaTarget} masuk dalam list`);
// } else {
//   console.log(`Nama ${namaTarget} belum terdaftar`);
// }

//-------------------------------------------------------------------------------------------------------
// 3. split()
// Tujuan : Memecah tipe data string menjadi sebuah tipe data array dengan parameter berupa separator untuk string pemisahnya.
// Contoh case : menghitung jumlah huruf pada sebuah kata/kalimat
// const kalimat = "aku bahagia selalu";
// const hurufPendeteksi = "a";
// let kalimatNew = kalimat.split(hurufPendeteksi);
// let a = kalimatNew.length - 1;
// console.log(`Jumlah huruf ${hurufPendeteksi} pada kata/kalimat ${kalimat} adalah = ${a}`);

//-------------------------------------------------------------------------------------------------------
// 4. filter()
// Tujuan : Membuat sebuah array baru yang berisi hasil filter atau seleksi pada sebuah array dengan kondisi tertentu.
// Contoh case : pengelompokan ganjil genap pada sebuah data
// const data = [1, 3, 4, 6, 7, 8, 9, 12, 14, 16, 18, 19, 20, 22, 24, 27, 29, 31];
// const hasilFilter = data.filter((angka) => angka % 2 === 0);
// const jumlahGenap = hasilFilter.length;
// const jumlahGanjil = data.length - jumlahGenap;
// console.log(`Data tersebut memiliki ${jumlahGenap} angka genap dan ${jumlahGanjil} angka ganjil`);

//-------------------------------------------------------------------------------------------------------
// 5. forEach()
// Tujuan : Mengolah masing-masing elemen yang ada pada array dengan/terhadap fungsi tertentu.
// Contoh case : membuat sebuah broadcast undangan reuni
// const namaAlumni = ["Siti", "Adit", "Jaya", "Kurnia", "Basuki", "Tamara", "Joko", "Dea", "Suci", "Tita", "Cinta", "Raya", "Darma", "Laila", "Anis", "Puji", "Santo"];
// namaAlumni.forEach((nama) => {
//   console.log(`Undangan Reuni, diberikan kepada YTH ${nama}, di Tempat`);
// });

//-------------------------------------------------------------------------------------------------------
// 6. sort()
// Tujuan : Mengurutkan elemen-elemen array berdasarkan abjad maupun ketentuan yang lain
// Contoh case : membuat daftar nama tidak beraturan menjadi absensi
// const namaAlumni = ["Siti", "Adit", "Jaya", "Kurnia", "Basuki", "Tamara", "Joko", "Dea", "Suci", "Tita", "Cinta", "Raya", "Darma", "Laila", "Anis", "Puji", "Santo"];
// urutanNama = namaAlumni.sort();
// for (i = 0; i <= urutanNama.length - 1; i++) {
//   console.log(`${i + 1}. ${urutanNama[i]}`);
// }

//-------------------------------------------------------------------------------------------------------
// 7. every()
// Tujuan : Melakukan pengecekan untuk masing-masing elemen array apakah memenuhi sebuah kondisi atau fungsi tertentu.
// Contoh case : melakukan/menyederhanakan validasi masing-masing nilai
// const namaAlumni = ["Siti", "Adit", "Jaya", "Kurnia", "Basuki", "Tamara", "Joko", "Dea", "Suci", "Tita", "Cinta", "Raya", "Darma", "Laila", "Anis", "Puji", "Santo"];
// const ujiTipe = namaAlumni.every((nama) => typeof nama == "string");
// if (ujiTipe) {
//   console.log("Semua data sudah berupa string");
// } else {
//   console.log("Masih terdapat data yang bukan string");
// }

//-------------------------------------------------------------------------------------------------------
// 8. reduce()
// Tujuan : Melakukan reduksi data menjadi satu nilai yang merepresentasikan jumlah masing-masing elemen array dari kiri ke kanan
// Contoh case : menghitung rata-rata data tak beraturan
// const dataAcak = [12, 23, 24, 36, 35, 23, 53, 23, 64, 76, 43, 76, 24, 78, 98, 54, 62, 52, 43, 53, 23, 54, 13, 54, 11, 38, 91, 84, 83, 51, 8, 42, 23, 53, 17, 42, 13, 57, 42, 13, 64];
// const hasilJumlah = dataAcak.reduce((total, nilai) => (total = total + nilai), 0);
// const rataRata = hasilJumlah / dataAcak.length;
// console.log(`Jumlah yang didapat adalah ${hasilJumlah} dan Nilai rata-ratanya ${rataRata}`);

//-------------------------------------------------------------------------------------------------------
// 9. reverse()
// Tujuan : Melakukan pengembalian index dari elemen-elemen pada sebuah array
// Contoh case : membalik langkah-langkah memasak air
// const langkah = ["Menyalakan kompor", "Meletakan panci di atas kompor", "Meletakan air ke dalam panci", "Menunggu hingga mendidih", "Mematikan kompor", "Menuangkan air ke gelas"];
// const balikLangkah = langkah.reverse();
// console.log(`Langkah-langkah memasak air versi terbalik \n \n ${balikLangkah.join("\n")}`);

//-------------------------------------------------------------------------------------------------------
// 10. findIndex()
// Tujuan : Mencari sebuah index pada array yang dimiliki oleh sebuah elemen dengan spesifikasi atau kondisi tertentu
// Contoh Case : menentukan hari tabungan memenuhi target
// const dataTabungan = [36, 38, 42, 42, 42, 43, 43, 51, 52, 53, 53, 53, 54, 54, 54, 57, 62, 64, 64, 76, 76, 78, 8, 83, 84, 91, 98];
// const indeksi = dataTabungan.findIndex((data) => data > 60);
// const dataSeleksi = dataTabungan.slice(indeksi);
// console.log(`Tabungan terkumpul pada hari ke ${indeksi + 1} , dengan perolehan ${dataTabungan[indeksi]} juta`);
