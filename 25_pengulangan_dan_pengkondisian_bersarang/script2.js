var s = '';
// for (var i = 0; i < 5; i++) {
//     for (var j = i; j < 5; j++) {
for (var i = 5; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

// *****
// ****
// ***
// **
// *
