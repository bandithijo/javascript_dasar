var youWin = 'Kamu MENANG!',
    youLose = 'Kamu KALAH!',
    tryAgain = true,
    playerScore = 0,
    compScore = 0,
    hasil = '';

function resulting(comp, hero) {
    return comp == hero ? youWin : youLose;
}

function scoring(hasil) {
    if (hasil == youWin) {
        playerScore += 1;
    } else if (hasil == youLose) {
        compScore += 1;
    } else {
        playerScore += 0;
        compScore += 0;
    }
}

while(tryAgain) {
    // menangkap pilihan player (pilihan: gajah, semut, orang)
    var player = prompt('Silahkan pilih jagoan kamu (gajah, semut, orang): ');

    // menangkap pilihan computer (mengenerate bilangan random)
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    // menentukan rules
    if (player == comp) {
        hasil = 'SERI!';
        scoring(hasil)
    } else if (player == 'gajah') {
        hasil = resulting(comp, 'orang');
        scoring(hasil)
    } else if (player == 'semut') {
        hasil = resulting(comp, 'gajah');
        scoring(hasil)
    } else if (player == 'orang'){
        hasil = resulting(comp, 'semut');
        scoring(hasil)
    } else {
        hasil = 'Jagoanmu tidak terdaftar'
    }

    // tampilkan hasilnya
    alert(`player: ${player}\ncomp  : ${comp}\nhasil : ${hasil}\n\nscore : player ${playerScore} vs comp ${compScore}`);

    tryAgain = confirm('Apakah mau main lagi?');
}

alert(`Final Score: player ${playerScore} vs comp ${compScore}\nTerima kasih`);
