// recursion yang tidak akan berhenti
function tampilAngka(n) {
    console.log(n);

    return tampilAngka(n-1);
}

tampilAngka(10);
