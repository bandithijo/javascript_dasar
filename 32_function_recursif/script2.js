// recursion yang akan berhenti apabila base case terpenuhi
function tampilAngka(n) {
    // base case
    if (n === 0) {
        return;
    }

    console.log(n);

    return tampilAngka(n-1);
}

tampilAngka(10);
