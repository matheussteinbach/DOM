var callback = function() {
    console.log('Estou dentro da função callback')
}
console.log("Iniciei")
setTimeout(callback, 5000)
console.log("Estou após o Timeout")
