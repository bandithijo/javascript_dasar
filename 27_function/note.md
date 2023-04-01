# 27 function

"function adalah kunci utama pada JavaScript yang membuat JavaScript sangat powerful." - Douglas Crockford

kalau dibahasa lain:
Method, Class, Constructor, Module
di JavaScript, semua hal itu dapat dilakukan hanya dengan function aja.

Definisi:
- sebuah sub-program/sub-routine yang dapat 'dipanggil' di bagian lain pada program.
- merupakan struktur dasar pembentuk dari JavaScript (Fundamental Building Blocks).
- disebut juga sebgai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai).
- untuk dapat menggunakannya, kita harus 'membuat' terlebih dahulu function tersebut, lalu 'memanggil' nya.
- termasuk kedalam First-Class Object

Kenapa function?
- Reusability? (DRY: Do not Repeat Yourself)
- Dekomposisi / Abstraksi
- Modularitas

Kategori function?
- Built-in Function (function yang sudah dibawa/dibuatkan oleh JavaScript)
  - tinggal memanggilnya saja
  - alert();
  - confirm();
  - prompt();
  - dan masih banyak lagi
- User-Defined Function

Built-in Function:String
- charAt(), slice(), split(), toString(), toLowerCase(), toUpperCase(), ...
- https://www.w3schools.com/jsref/jsref_obj_string.asp

```javascript
var nama = 'Rizqi Nur Assyaufi';
console.log(nama.charAt(6));
```

Built-in Function:Math
- sin(), cos(), tan(), random(), round(), floor(), ceil(), log(), ...
- https://www.w3schools.com/jsref/jsref_obj_math.asp

```javascript
var bil = Math.random();
console.log(bil);
```

User-defined Function
- function yang kita buat sendiri
- harus menggunakan keyword function
- nama function (optional)
- parameter / argument:
  - disimpan di dalam ()
  - boleh ada atau tidak, jika ada boleh lebih dari satu
  - dipisahkan oleh (,)
- function body, 'dibungkus' dengan {}
- dapat mengembalikan nilai (return value) atau tidak

Membuat user-defined function
- dengan deklarasi / function declaration
- dengna ekspresi / function expression

Function Declaration
```javascript
function jumlahDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
}
```

Function Expression
```javascript
var jumlahDuaBilangan = function(a, b) {
  var total;
  total = a + b;

  return total;
}
```
