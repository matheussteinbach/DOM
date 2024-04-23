
function mostrarApenasHome() {
    document.getElementById('divHome').style.display = "block"
    document.getElementById('login-body').style.display = "none"
    document.getElementById('nova-conta').style.display = "none"
    clearInterval(window.intervaloLogin)
}

function mostrarApenasLogin() {
    document.getElementById('divHome').style.display = "none"
    document.getElementById('login-body').style.display = "block"
    document.getElementById('nova-conta').style.display = "none"
    limpaInput("input-login")
    window.intervaloLogin = setInterval(verificaBotaoLogin, 1000)
}

function mostrarApenasConta() {
    document.getElementById('divHome').style.display = "none"
    document.getElementById('login-body').style.display = "none"
    document.getElementById('nova-conta').style.display = "block"
    limpaInput("input-conta")
    clearInterval(window.intervaloLogin)
}

function limpaInput(classe){
    let inputs = document.getElementsByClassName(classe)
    for (i = 0; i < inputs.length; i++){
        inputs[i].value = ""
    }
}

function verificaBotaoLogin (){
    let inputLogin = document.getElementsByClassName("input-login")
    if (inputLogin[0].value == "" || inputLogin[1].value == ""){
        botaoLogin.style.display = "none"
    }
    else {
        botaoLogin.style.display = "flex"
    }
}

function verificaEmail (){
    let inputEmail = document.getElementById("input-email")
    if (inputEmail.value.includes("@")){
        mostrarApenasHome()
    } else {
        window.alert("Email inválido!")
    }
}

let botaoLogin = document.getElementById("botaoLogin")
mostrarApenasHome()
verificaBotaoLogin()
