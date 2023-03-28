var jmlAngkot = Number(prompt('Masukkan total angkot milik juragan:')),
    angkotBeroperasi = Number(prompt('Masukkan jumlah angkot yang beroperasi hari ini:')),
    jmlAngkotLembur = Number(prompt('Masukkan jumlah angkot yang lembur:')),
    angkotLembur = [],
    noAngkot = 1;

if(jmlAngkotLembur > jmlAngkot) {
    throw new Error(
        'Jumlah angkot lembur melebihi jumlah angkot milik juragan. Program dihentikan.'
    );
}

for(var i = 1; i <= jmlAngkotLembur; i++) {
    var noAngkotLembur = Number(prompt(`Masukkan no. angkot yang lembur (${i}/${jmlAngkotLembur}):`));
    angkotLembur.push(noAngkotLembur);

    if(noAngkotLembur > jmlAngkot) {
        throw new Error(
            `Nomor angkot lembur (${noAngkotLembur}) melebihi jumlah angkot juragan (${jmlAngkot} angkot). Program dihentikan.`
        );
    }
}

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (angkotLembur.includes(noAngkot)) {
        console.log(`Angkot No. ${noAngkot} sedang lembur.`);
    } else if(noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
    }
}
