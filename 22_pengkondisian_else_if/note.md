# pengkondisian else if

syntax dasar:
```javascript
if(kondisi 1) {
  aksi 1;
} else if(kondisi 2) {
  aksi 2;
} else {
  aksi 3;
}
```


sample:
```javascript
var angka = prompt('Masukkan angka:')

if(Number(angka) % 2 === 0) {
  alert(`${angka} adalah bilangan GENAP`);
} else if(Number(angka) % 2 === 1){
  alert(`${angka} adalah bilangan GANJIL`);
} else {
  alert(`${angka} bukan angka`);
}
```
