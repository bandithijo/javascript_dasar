var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang[i] == undefined) {
                // tambah penumpang di kursi kosong
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang) {
                // tampilkan pesan validasinya
                console.log(`${namaPenumpang} tidak bisa naik, karena sudah ada nama tersebut di Angkot.`);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if(i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tampilkan pesan kesalahannya
        console.log('Angkot masih kosong.');
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++) {
            // jika ada penumpang yang namanya sesuai, hapus dan berikan nilai undefined
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }
            // jika tidak ada penumpang yang namanya sesuai
            else if(i == penumpang.length - 1) {
                console.log(`Tidak ada nama ${namaPenumpang} di dalam Angkot.`);
                return penumpang;
            }
        }
    }
}
