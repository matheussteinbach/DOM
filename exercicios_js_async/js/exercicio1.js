function calculadora(a, b, f) {
    return f(a, b)
}

function soma(a, b) {
    return a + b
}

function subtrai(a, b) {
    return a - b
}

console.log(calculadora(10, 5, soma))
console.log(calculadora(10, 5, subtrai))
