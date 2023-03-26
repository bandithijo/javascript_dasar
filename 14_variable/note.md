# 14 variable

"sebuah 'tempat/wadah' yang memiliki nama, yang digunakan untuk menyimpan nilai"

+-----------+     +-------------+     +------------+
| deklarasi | --> | inisialiasi | --> | assignment |
+-----------+     +-------------+     +------------+

deklarasi, tahap untuk mendaftarkan variable ke dalam lingkup yang sesuai

inisialiasi, proses untuk pemesanan atau penyediaan memory yang nantinya digunakan untuk variable

assignment, proses untuk menetapkan nilai untuk variable itu sendiri.

```javascript
var x; // deklarasi & inisialiasi variable bernama x
x = 20; // assignment nilai 10 ke dalam variable x
```

deklarasi variable keywords:
1. var
2. let
3. const

aturan variable di JavaScript:
1. var tidak boleh menggunakan Spasi;
2. var boleh1;
3. var 1gakboleh;
4. var ini_juga_boleh;
5. var boleh$;
6. var $_$;
7. var iniBolehBanget; // recommended (camelCase)

## keyword & reserved word
break, case, catch, class, const, continue, debugger, default, delete, do,
else, enum, export, extends, false, finally, for, function, if, implements,
import, in, instanceof, interface, let, new, null, package, private, protected,
public, return, static, super, switch, this, throw, true, try, typeof, var,
void, while, with, yield

## shorthand

syntax untuk menyingkat penulisan variable

```javascript
// sebelum
var nama;
var umur;
var lulus;

nama = "Rizqi Nur Assyaufi";
umur = 34;
lulus = true;

// sesudah
var nama = "Rizqi Nur Assyaufi",
    umur = 34,
    lulus = true;
```

## variable scope (lingkup variable)

NOTE: akan dipelajari setelah function dan object
