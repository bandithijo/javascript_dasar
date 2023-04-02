# 32 function recursif

rekursif:
sebuah fungsi yang memanggil dirinya sendiri.
hati-hati karena bisa saja fungsinya tidak berhenti dipanggil (tidak berakhir).
tambahkan kondisi agar fungsinya dapat berakhir dan menghasilkan nilai.

```javascript
function test() {
  return test();
}

test();
```

Kondisi terminasi disebut dengan "Base Case".

Base Case:
kondisi akhir dari rekursif yang menghasilkan nilai.

contoh lain adalah Faktorial.
5! = 5 x 4 x 3 x 2 1

```javascript
function factorial(n) {
    // base case
    if (n === 0) { return 1; }

    // recursive
    return n * factorial(n - 1);
}
```

factorial(5)

5 * factorial (4);
5 * (4 * factorial(3));
5 * (4 * (3 * factorial(2)));
5 * (4 * (3 * (2 * factorial(1))));
5 * (4 * (3 * (2 * 1)));
5 * (4 * (3 * 2));
5 * (4 * 6);
5 * 24;
120;


Semua looping dapat dibuatkan rekursif nya, tapi tidak sebaliknya.

mencetak angka dengan looping
```javascript
function cetakAngka(n) {
  for(var i = n; i >= 1; i--) {
    console.log(i)
  }
}
```

mencetak angka dengan recursive
```javascript
function cetakAngka(n) {
  if (n === 0) { return };
  console.log(n);
  return cetakAngka(n-1);
}
```

factorial dengan looping
```javascript
function factorial(n) {
  var hasil = 1;
  for (var i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}
```

factorial dengan recursive
```javascript
function factorial(n) {
  if (n === 0) { return 1};
  return n * factorial(n - 1);
}
```

## implementasi recursive

1. menggantikan looping
2. fibonaci
3. factorial
4. pencarian dan penelusuran pada struktur data list atau tree
5. bahasa pemrograman yang tidak memiliki konsep pengulangan
  - Haskel, Erlang, Prolog, dll.
6. dll.
