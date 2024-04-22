
function mostrarSenha() {
    loginpassword.type = 'text';
    olho.src="https://cdn3.iconfinder.com/data/icons/web-and-seo-31/16/invisible-eye-256.png"
}

function ocultarSenha() {
    loginpassword.type = 'password';
    olho.src= "https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png"
}
    
function verificaTipo() {
    olho.addEventListener('click', () => {
        if (loginpassword.type === "password"){
            mostrarSenha();
            return;
        }
        ocultarSenha();
    });
}

let loginpassword = document.getElementById('login-password')
let olho = document.getElementById("olho")
verificaTipo()
