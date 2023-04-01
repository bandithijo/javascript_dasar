// // ketahui sisi 2 kubus
// var sisiKubusA = 8,
//     sisiKubusB = 3,
//     volumeKubusA,
//     volumeKubusB,
//     total;
//
// // hitung volume dari masing-masing kubus
// // volume kubus = sisi * sisi * sisi
// volumeKubusA = sisiKubusA * sisiKubusA * sisiKubusA;
// volumeKubusB = sisiKubusB * sisiKubusB * sisiKubusB;
//
// // menjumlahkan volume 2 buah kubus
// total = volumeKubusA + volumeKubusB;
//
// // tampilkan ke depan
// console.log(total);

function jumlahVolumeDuaKubus(a, b) {
    var total, volumeKubusA, volumeKubusB;

    volumeKubusA = a * a * a;
    volumeKubusB = b * b * b;

    total = volumeKubusA + volumeKubusB;

    return total;
}
