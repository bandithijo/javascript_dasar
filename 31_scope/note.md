# 31 scope (lingkup variable)

block scope vs function scope

## block scope

digunakan oleh:
C & Java

```c
int i = 2;

if(i % 2 == 0) {
  bool genap = true;
}

if(genap) {
  printf("genap!");
}
```

akan error: genap is undeclared

## function scope

jika kita buat sama persis di javascript

```javascript
var i = 2; // global scope / window scope (window.i)

if(i % 2 == 0) {
  var genap = true;
}

if(genap) {
  console.log('genap!');
}
```

pastikan untuk mendefinisikan keyword var di dalam function, agar variable yang dibuat di dalam function tidak dibuat menjadi global.

atau dapat pula menggunakan:
```javascript
"use strict";
```

parameter di dalam function, akan selalu menjadi local variable meskipun tidak ditulis var.

```javascript
function test(a) {
  // statement
}
```
