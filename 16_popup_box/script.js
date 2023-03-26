alert('Hello, JavaScript!\nKita akan bermain game "JAWAB DENGAN KEYAKINAN"!');

var lagi = true;

while (lagi) {
  var nama = prompt('Masukkan nama:');
  alert('Selamat datang, ' + nama + '!');

  var a = 2,
      b = 5,
      total = prompt('Berapakah value dari ' + a + ' + ' + b + ' ?'),
      kunci = confirm('kamu yakin?');

  if (total === '7' && kunci === true) {
    alert(nama + ', jawaban kamu, BENAR & YAKIN! 👍')
  } else if (total === '7' && kunci === false) {
    alert(nama + ', jawaban kamu, BENAR, namun kamu TIDAK YAKIN! 👎');
  } else if (total !== '7' && kunci === false) {
    alert(nama + ', jawaban kamu, SALAH & TIDAK YAKIN! 🤭');
  } else {
    alert(nama + ', jawaban kamu, SALAH, namun kamu SANGAT YAKIN! 🤪');
  }

  lagi = confirm(nama + ', apakah kamu ingin bermain lagi?');
}

if (lagi == false) {
  alert('Terima kasih, ' + nama);
}
