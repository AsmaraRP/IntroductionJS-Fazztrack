// call function
FazzFood(75000, "FAZZFOOD50", 5, true);
function FazzFood(harga, voucer, jarak, pajak) {
  //proses PROMO
  let potongan = 0;
  if (voucer == "FAZZFOOD50" && harga >= 50000) {
    potongan = harga * 0.5;
    if (potongan >= 50000) {
      potongan = 50000;
    }
  } else if (voucer == "DITRAKTIR60" && harga >= 25000) {
    potongan = harga * 0.6;
    if (potongan >= 30000) {
      potongan = 30000;
    }
  }
  console.log(`Harga : ${harga}`);
  console.log(`Potongan : ${potongan}`);
  // proses BIAYA ANTAR
  let tarifAntar = 5000;
  while (jarak > 2) {
    tarifAntar += 3000;
    jarak -= 1;
  }
  console.log(`Biaya Antar : ${tarifAntar}`);
  // proses PAJAK
  if (pajak) {
    tarifPajak = harga * 0.05;
  } else {
    tarifPajak = 0;
  }
  console.log(`Pajak : ${tarifPajak}`);
  // proses PERHITUNGAN TOTAL
  subTotal = harga - potongan + tarifAntar + tarifPajak;
  console.log(`SubTotal : ${subTotal}`);
}
