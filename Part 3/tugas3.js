// Program 1 (Pengecekan Stock Barang)
const cekStock = (barang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataItem = [
        { nama: "kaos", jumlah: 6 },
        { nama: "celana", jumlah: 10 },
        { nama: "jaket", jumlah: 5 },
        { nama: "kemeja", jumlah: 9 },
        { nama: "topi", jumlah: 13 },
        { nama: "jas", jumlah: 1 },
        { nama: "sepatu", jumlah: 21 },
        { nama: "kacamata", jumlah: 4 },
      ];
      let hasilCek = false;
      dataItem.forEach((namaStock) => {
        cekNama = namaStock.nama;
        cekJumlah = namaStock.jumlah;
        if (cekNama == barang) {
          namaBarang = cekNama;
          jumlahBarang = cekJumlah;
          hasilCek = true;
          return hasilCek;
        }
      });

      if (hasilCek) {
        resolve(console.log(`Barang ${namaBarang} masih memiliki stock sejumlah : ${jumlahBarang}`));
      } else {
        reject(new Error("Barang kosong atau tidak ada stock"));
      }
    }, 3000);
  });
};
async function cekBarang() {
  try {
    // cek : kaos, celana, jaket, kemeja, topi, jas,sepatu, kacamata
    const item = "kaos";
    await cekStock(item);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("---------------------------------\n");
    console.log("Pengecekan Barang Selesai");
    console.log("---------------------------------\n");
  }
}
cekBarang();
// Program 2 (Pengumuman Kelulusan Siswa)
const statusSiswa = (namaSiswa) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataSiswaLulus = [
        "siti",
        "anis",
        "resti",
        "hofi",
        "rian",
        "agus",
        "anggy",
        "akbar",
        "ikhsan",
        "adi",
        "yusuf",
        "regio",
        "muhammad",
        "lain",
        "angela",
        "change",
        "hylos",
        "batrix",
        "eudora",
        "fanny",
        "karina",
        "carmila",
        "cecilia",
        "febri",
        "dhea",
        "juki",
        "cinta",
        "elga",
        "selpi",
        "shopi",
        "ridwan",
      ];
      let statusLulus = dataSiswaLulus.find((nama) => {
        return nama === namaSiswa;
      });
      if (statusLulus) {
        resolve(statusLulus);
      } else {
        reject(new Error(`Siswa atas nama ${namaSiswa} dinyatakan TIDAK LULUS`));
      }
    }, 3000);
  });
};
statusSiswa("anis")
  .then((nama) => {
    console.log(`Selamat, ${nama} dinyatakan LULUS`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("---------------------------------\n");
    console.log("Pengecekan Selesai");
    console.log("---------------------------------\n\n");
  });
