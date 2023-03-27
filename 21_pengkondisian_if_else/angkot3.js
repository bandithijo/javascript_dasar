var jmlAngkot = Number(prompt('Masukkan total angkot milik juragan:')),
    angkotBeroperasi = Number(prompt('Masukkan jumlah angkot yang beroperasi hari ini:')),
    noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
    }
}
