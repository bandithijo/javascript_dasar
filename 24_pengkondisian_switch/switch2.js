var item = prompt('masukkan nama makanan / minuman: \n (contoh: nasi, daging, susu, burger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'burger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('anda memasukkan nama makanan / minuman yang salah');
        break;
}
