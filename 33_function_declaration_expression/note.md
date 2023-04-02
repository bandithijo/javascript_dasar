# 33 function: declaration vs. expression

## function declaration

rumus:
```
function identifier (parameterList opt) { FunctionBody }
```

contoh:
```javascript
function tampilPesan (nama) {
  alert(`halo ${nama}`);
}
```

## function expression

rumus:
```
function identifier opt (parameterList opt) { FunctionBody }
```

contoh:
```javascript
var tampilPesan = function (nama) {
  alert(`halo ${nama}`);
}
```

## perbedaan?

### function declaration

1. lebih fleksible (dapat ditulis dimanapun)
   kita dapat menulis deklarasi function nya, sebelum atau sesudah pemanggilan function
   - hal ini dapat terjadi karena di dalam JavaScript ini ada konsep yang namanya "Hoisting",
     dimana deklarasi sebuah function itu pasti terlebih dahulu disimpan di dalam memory.

### function expression

1. harus didefinisikan terlebih dahulu sebelum dipanggil
2. lebih powerfull
   - sebagai closure
   - sebagai argumen untuk function lain
   - IIFE (Immadiately Invoked Function Expression)
