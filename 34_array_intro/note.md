# 34 array intro

array ditiap-tiap bahasa pemrograman itu berbeda2 konsepnya.
ada yang menjadikan array sebagai tipe data,
ada yang mnejadikan array sebagai struktur data.

## definisi array

### secara umum


"susunan sistematis dari objek-objek yang serupa." [1]

[1] https://en.wikipedia.org/wiki/Array

### secara programming langguage

"tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau
variabel), yang tiap-tiap elemennya memiliki index." [1]

[1] https://en.wikipedia.org/wiki/Array_data_type

## menurut sandhika galih

"array adalah variabel yang lebih sakti. karena array bisa menampung lebih dari satu nilai."

## kenapa array?

1. mempermudah pengelolaan nilai/value/data
   - penelusuran dan pencarian
2. efektivitas manajemen memori

## karakteristik dari array

1. vairabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
2. kumpulan pasangna key dan nilai (key and value pair)
   - key adalah index yang tipenya integer dan dimulai dari 0
3. Array pada JavaScript bertipe object
4. Array pada JavaScript memiliki built-in function seperti:
   - .length() untuk menghitung jumlah elemen di dalamnya
5. elemen dalam array, boleh memiliki tipe data yang berbeda

### karakter: key and value pair (membuat array)

```javascript
var binatang = ['kucing', 'kelinci', 'moneyt', 'panda', 'koala', 'sapi'];
```

### karakter: array bertipe object

tidak ada type Array, yang ada adalah object.

```javascript
var binatang = [];
binatang = ['kucing', 'keinci', 'monyet', 'panda', 'koala', 'sapi'];
console.log(typeof(binatang));
```

### karakter: memiliki built-in function .length()

karena array itu object, maka object pasti memiliki function di dalamnya.
pada JavaScript, function yang ada di dalam object disebut dengan method.

```javascript
var binatang = [];
binatang = ['kucing', 'keinci', 'monyet', 'panda', 'koala', 'sapi'];
console.log(binatang.length;
```

### karakter: elemen pada array boleh beda-beda tipe data

```javascript
var myFunction = function (a) {
  return a;
}
var myArr = ['string', 23, false, myFunction, [4, 5, 6]];
```
