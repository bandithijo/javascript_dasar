# 29 function parameter dan argument

parameter:
adalah vairable yang ditulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil.

argument;
adalah nilai yang dikirimkan ke parameter pada saat function dipanggil.

Case:
Bagaimana jika parameter dan argument-nya tidak sesuai?

1. jika parameter lebih sedikit dari argument, maka kelebihannya akan diabaikan
```javascript
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(10, 20, 30);

// 30, argument 30 akan diabaikan
```

2. jika parameter lebih banyak dari argument, maka akan diisi dengan undefined
```javascript
function tambah(a, b, c) {
  return a + b + c;
}

var hasil = tambah(10, 20);
```

di dalam JavaScript, ada sebuah variable khusus yang disebut "arguments".
adalah, array yang berisi nilai yang dikirimkan saat fungsi dipanggil.
