var retry = true;

function stat(status) {
    if (status == false) {
        return 'KALAH!'
    } else if (status == true) {
        return 'MENANG!'
    }
}

while(retry) {

    var live = 1,
        chance = 3,
        guestBucket = [],
        targetNumber = Math.floor(Math.random() * 10);

    alert(`Tebak Angka 0-10\nKamu hanya punya ${chance} kesempatan.`);

    while(live <= chance) {
        var guestNumber = parseInt(prompt(`Masukkan angka tebakan (${live}/${chance})`));

        if (guestNumber < targetNumber) {
            alert('terlalu RENDAH!');
            finalStatus = stat(false);
            live++;
        } else if (guestNumber > targetNumber) {
            alert('terlalu TINGGI');
            finalStatus = stat(false);
            live++;
        } else {
            alert('TEPAT!');
            finalStatus = stat(true);
            live = chance + 1;
        }

        guestBucket.push(guestNumber);
    }

    alert(`guest numbers: ${guestBucket}\nfinal status : ${finalStatus}\nhidden number: ${targetNumber}`)

    retry = confirm('apakah ingin bermain lagi?');
}

alert('terima kasih');
