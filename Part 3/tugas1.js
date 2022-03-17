const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("minggu")
  .then((hasil) => {
    console.log(`Hari ${hasil} adalah Hari kerja `);
    // Didalam then berisi perintah apabila kondisi pada fungsi cekhariKerja sesuai/bekerja
  })
  .catch((error) => {
    console.log(error);
    // Didalam catch akan berisi hasil tangkapan error apabila dihasilkan, dan dapat di cetak pada console
  })
  .finally(() => {
    console.log("Pengecekan Selesai");
    console.log("---------------------------------\n\n");
    // Didalam finally berisi perintah-perintah yang akan tetap dijalankan apabila semua perintah then/catch selesai
  });

async function pengecekan() {
  try {
    const hari = "senin";
    await cekHariKerja(hari);
    console.log(`Hari ${hari} adalah Hari Kerja`);
    // Didalam try berisi perintah/kumpulan perintah yang dapat dijalankan dan memiliki potensial error
  } catch (error) {
    console.log(error);
    // Didalam catch berisi error yang ditangkap ada perintah/fungsi yang ada pada try, dan kemudian dapat diolah/dicetak
  } finally {
    console.log("Pengecekan Selesai");
    console.log("---------------------------------\n\n");
    // Didalam finally berisi perintah-perintah yang akan tetap dijalankan apabila semua perintah try/catch selesai
  }
}
pengecekan();
