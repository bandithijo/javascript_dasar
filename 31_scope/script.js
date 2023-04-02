// global scope / window scope

var a = 1;

function test() {
    a = 2;
}

test();
console.log(a);
