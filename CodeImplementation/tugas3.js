FazzFood(75000, "FAZZFOOD50", 5, true);
function FazzFood(harga, voucer, jarak, pajak) {
  //algoritma PROMO
  let potongan = 0;
  if (voucer == "FAZZFOOD50" && harga >= 50000) {
    potongan = harga * 0.5;
    if (potongan >= 50000) {
      potongan = 50000;
    }
  }
  if (voucer == "DITRAKTIR60" && harga >= 25000) {
    potongan = harga * 0.6;
    if (potongan >= 30000) {
      potongan = 30000;
    }
  }
  // algoritma BIAYA ANTAR
  let tarif = 5000;
  while (jarak > 2) {
    tarif += 3000;
    jarak -= 1;
  }
  // algoritma PAJAK
  if (pajak) {
    tarifPajak = harga * 0.05;
  } else {
    tarifPajak = 0;
  }
  // algoritma PERHITUNGAN TOTAL
  subTotal = harga - potongan + tarif + tarifPajak;
  console.log(`Harga : ${harga}`);
  console.log(`Potongan : ${potongan}`);
  console.log(`Biaya Antar : ${tarif}`);
  console.log(`Pajak : ${tarifPajak}`);
  console.log(`SubTotal : ${subTotal}`);
}
