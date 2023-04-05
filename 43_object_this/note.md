# 43 object this

this adalah sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function.
setiap membuat function/object, menggunakan cara apapun, otomatis ada keyword this yang di definisikan.

kalau kita bikin di scope global, this == window

```javascript
console.log(window === this);

var a = 10;
console.log(window.a === this.a);
```

## this pada function declaration

this pada function declaration, mengembalikan object global

```javascript
function halo() {
  console.log(this);
  console.log('halo');
}
halo();
window.halo();
this.halo();
```

## this pada object literal

this pada object literal, mengembalikan object yang bersangkutan

```javascript
var obj = { a: 10, nama: 'Rizqi' };
obj.halo = function() {
  console.log(this);
  console.log('halo');
}
obj.halo();
```

## this pada constructor

this pada constructor, mengembalikan object yang baru dibuat

```javascript
function Halo() {
  console.log(this);
  console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
```
