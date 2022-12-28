const formLogin = document.querySelector("#login")
const inputEmail = document.querySelector("#input-email")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".iniciar")
const logout = document.querySelector("#logout")

const datosUsuario = {
    email: "ema@gmail.com",
    password: "1234"
}
const subirAlLs = ( clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) =>{
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if (inputEmail.value === datosUsuario.email && inputPass.value === datosUsuario.password){
        subirAlLs("login", true)
        contenedorForm.style.display = "none"
        logout.style.display = "block"
    } else {
        loginIncorrecto.style.display = "block"
        inputEmail.style.border ="1px solid red"
        inputPass.style.border ="1px solid red"
    }
}

function validarLogin (clave){
    if (clave !== true){
        contenedorForm.style.display = "flex"
        logout.style.display = "none"
    } else{
        contenedorForm.style.display = "none"
        logout.style.display = "block"
    }
}

validarLogin (obtenerDelLs("login"))

logout.onclick = () => {
    localStorage.removeItem( "login" )
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}

// Modo oscuro

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
}