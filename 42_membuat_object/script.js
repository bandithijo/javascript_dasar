// membuat object

// 1. object literal
var mhs1 = {
    nama: 'Rizqi Nur Assyaufi',
    nrp: '201501157',
    email: 'rizqinur@stikombpn.ac.id',
    jurusan: 'Teknik Informatika'
}

// 2. function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs2 = buatObjectMahasiswa('Bambang Pamungkas', '201501158', 'bambangpamungkas@persija.pssi', 'Sepak Bola');

// 3. constructor (adalah function yang khusus untuk membuat object)
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
// cara memanggil Constructor haru menggunakan keyword new
var mhs3 = new Mahasiswa('Budi Sudarsono', '201501159', 'budisudarsono@persija.pssi', 'Sepak Bola');
