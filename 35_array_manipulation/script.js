// manipulasi array

// 1. menambah isi array, dengan index
var arr1 = [];
arr1[0] = 'Rizqi';
arr1[1] = 'Nur';
arr1[2] = 'Assyaufi';
console.log(arr1);

// 2. menghapus isi array, dengan index
var arr2 = ['Rizqi', 'Nur', 'Assyaufi'];
arr2[1] = undefined;
console.log(arr2);

// 3. menampilkan isi array
var arr3 = ['Rizqi', 'Nur', 'Assyaufi'];
for(var i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// method pada array

// join
var arr4 = ['Rizqi', 'Nur', 'Assyaufi'];
console.log(arr4.join(' '));

// push
var arr5 = ['Rizqi', 'Nur', 'Assyaufi'];
arr5.push('S.Kom');
console.log(arr5.join(' '));

// pop
var arr6 = ['Rizqi', 'Nur', 'Assyaufi'];
arr6.pop();
console.log(arr6.join(' '));

// unshift
var arr7 = ['Rizqi', 'Nur', 'Assyaufi'];
arr7.unshift('dr.');
console.log(arr7.join(' '));

// shift
var arr8 = ['Rizqi', 'Nur', 'Assyaufi'];
arr8.shift();
console.log(arr8.join(' '));

// splice
// rumus:
// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, elementBaruN)
var arr9 = ['Rizqi', 'Nur', 'Assyaufi'];
arr9.splice(3, 0, 'Devika', 'Marina');
console.log(arr9.join(' '));
arr9.splice(3, 2, 'Marina', 'Devika');
console.log(arr9.join(' '));

// slice
// rumus:
// slice(indexAwal, indexAkhir)
// indexAwal, akan terbawa di array yang baru
// indexAkhir, tidak terbawa di array yang baru
var arr10 = ['Rizqi', 'Nur', 'Assyaufi', 'Devika', 'Marina'];
var arr11 = arr10.slice(2, 4);
console.log(arr10.join(' '));
console.log(arr11.join(' '));

// foreach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
angka.forEach(function(e) {
    console.log(e);
})
var nama = ['Rizqi', 'Nur', 'Assyaufi'];
nama.forEach(function(e, i) {
    console.log(`Mahasiswa ke-${i + 1} adalah ${e}`)
})

// map
var angka1 = [1, 2, 3, 4, 5, 6, 7, 8];
var angka2 = angka1.map(function(e) {
    return e * 2
})
console.log(angka1);
console.log(angka2);

// sort
var angka1 = [1, 3, 2, 6, 4, 5, 8, 7];
console.log(angka1.join(' '));
angka1.sort();
console.log(angka1.join(' '));

var angka1 = [1, 10, 3, 2, 20, 6, 4, 5, 8, 7];
angka1.sort();
console.log(angka1.join(' '));
angka1.sort(function(a, b) {
    return a - b;
})
console.log(angka1.join(' '));

// filter
var angka1 = [1, 10, 3, 2, 20, 6, 4, 5, 8, 7];
var angka2 = angka1.filter(function(x) {
    return x >= 5;
})
console.log(angka2.sort(function(a, b) { return a - b; }));

// find
var angka1 = [1, 10, 3, 2, 20, 6, 4, 5, 8, 7];
var angka2 = angka1.sort(function(a, b) { return a - b; }).find(function(x) {
    return x >= 5;
})
console.log(angka2);
