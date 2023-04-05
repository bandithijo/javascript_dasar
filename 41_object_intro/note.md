# 41 object intro

object pada JavaScript merupakan topik yang penting, karena di dalam JavaScript, hampir semua elementnya terbuat dari object.

contohnya seperti array. Tidak ada tipe data yang namanya array, melainkan object.

array:
"kumpulan nilai yang memiliki index" [1]

[1] https://en.wikipedia.org/wiki/Array_data_type

object (secara umum):
"kumpulan nilai, yang memiliki nama" [1]

[1] https://www.w3schools.com/js/js_object_definition.asp

object (sandhika galih):
"object adalah array, yang lebih sakti"

"In JavaScript, Object are King. If you understand Object, you understand JavaScript."

## object pada bahasa pemrograman lain

1. PHP: Associative Array
2. Python: Dictionaries
3. C: Hash Tables
4. Java: Hash Maps
5. Ruby & Perl: Hashes

## kenapa mesti menggunakan 0bject?

```javascript
var mahasiswa = {
  nama: 'Rizqi Nur Assyaufi',
  lulus: true,
  IPSemester: [2.90, 3.10, 3.25, 2.83, 3.04],
  IPKumulatif = function() {
    var total = 0;
    var ips = this.IPSemester;
    for(var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total/ips.length;
  }
}
```

## anatomi dari object

properti: variable yang ada di dalam object
method: function yang ada di dalam object

```javascript
var orang = {
  nama: 'Rizqi Nur Assyaufi',
  umur: 31,
  pekerjaan: 'Bapak Rumah Tangga',
  sapa: function() {
    return `Hi, nama saya ${this.nama}, usia saya ${this.umur} tahun, dan saya adalah seorang${this.pekerjaan}.`
  }
}
```
