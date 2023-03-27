# 17 control flow (alur kendali)

normal flow:
"apabila program kita memiliki lebih dari satu statement, maka statement tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke nanan."

kita dapat mengatur flow tersebut, disebut control flow

control flow:
1. pengulangan
2. pengkondisian

## pengulangan (loop)

for, while, do while

```javascript
alert('Mulai');
for(var i = 0; i < 5; i++) {
  alert('Hello, JavaScript! (' + i + ')');
}
alert('Selesai');
```

## pengkondisian (percabangan)

if, if...else, if...else if...else, switch

```javascript
var angka = prompt('Masukan ankga :');
if(angka % 2 === 0) {
  alert(angka + ' adalah bilangan GENAP');
} else {
  alert(angka + ' adalah bilangan GANJIL');
}
```
