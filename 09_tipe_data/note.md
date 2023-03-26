# 09 tipe data

## angka (number)

"numbers is JavaScript are double-precision floating point 64-bit format IEEE 754 values"
di dalam JavaScript tidak ada integer, yang ada hanya floating point.
ukuran angka yang bisa ditampung oleh JavaScript adalah 64-bit.
2^64 = 18 x 10^18 = 18 x 1000.000.000.000.000.000 = 18 x 1 miliar miliar = 18446744073709551616.
tapi angka tersebut tidak dapat dipakai semua.

kita dapat menyimpan:
1. angka tanpa desimal:
   10, 1500, 123456
   akurat sampai 15 digit
2. angka dengan desimal:
   3.14, 0.5, 100.00
   hati2 menjumlahkan pecahan, karena hasilnya tidak terlalu akurat
   0.2 + 0.1 = 0.30000000000000004
3. exponen
   123e5 = 12300000
   123e-5 = 0.00123
4. bilangan negatif
   -25, -50

jangan pernah mengawali angka di JavaScript dengan 0
misal 022 => 18
karena dengan mengawali angka 0, 022 akan dianggap sebagai bilangan oktal (basis 8), bukan bilangan desimal.

sama seperti apabila kita mengawali dengan 0x
0xff => 255
akan dianggap sebagai bilangan hexadesimal (basis 16).

5. angka spesial
   2/0 = infinity
   -2/0 = -infinity
   0/0 = NaN (Not a Number)
   100/"apel" = NaN

   hati2 membagi bilangan string yang bernilai angka
   50/"2" = 25
