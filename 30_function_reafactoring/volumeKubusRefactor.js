function volumeKubus(s) {
    return s * s * s;
}

function jumlahVolumeDuaKubus(a, b) {
    return volumeKubus(a) + volumeKubus(b);
}

console.log(`total: ${jumlahVolumeDuaKubus(8, 3)}`)
