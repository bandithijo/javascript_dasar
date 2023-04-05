# 36 latihan function dan array

pengelolaan penumpang
1. penumpang naik, tambahPenumpang()
2. penumpang turun, hapusPenumpang()

tambahPenumpang()
1. 2 parameter:
   - namaPenumpang
   - array penumpang
2. rules:
   - jika angkot kosong, penumpang naik duduk di kursi pertama
   - penumpang berikutnya, duduk di kursi selanjutnya secara berurutan
   - jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
   - asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang
   - nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

hapusPenumpang()
1. 2 parameter:
   - namaPenumpang
   - array penumpang
2. rules:
   - jika angkot kosong, tampilkan pesan bahwa angkot kosong
   - jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
   - jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya
