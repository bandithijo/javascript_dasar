// soal: angkot 1-6 beroperasi dengan baik
//       angkot 7-10 sedang tidak beroperasi

var jmlAngkot = 10,
    angkotBeroperasi = 6,
    noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
}
