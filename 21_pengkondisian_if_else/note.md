# 21 pengkondisian if else

## pengkondisian if

syntax dasar:
```javascript
if(kondisi) {
  aksi;
}
```

sample:
```javascript
var angka = Number(prompt('Masukkan angka (between 0-10):'));
alert(`${angka} termasuk di dalam class ${typeof(angka)}`)

if(angka > 3 && angka < 8) {
  console.log(`${angka} adalah angka diantara 3 & 8.`);
}
```

## pengkondisian if...else

syntax dasar:
```javascript
if(kondisi) {
  aksi;
} else {
  aksi;
}
```

sample:
```javascript
var angka = Number(prompt('Masukkan angka:'))
alert(`${angka} termasuk di dalam class ${typeof(angka)}`)

if(angka % 2 == 0) {
  console.log(`${angka} adalah bilangan GENAP`);
} else {
  console.log(`${angka} adalah bilangan GANJIL`);
}
```
