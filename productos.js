function productosHtml (array){
    const contenedor = document.querySelector(".container");
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class = "container-img">
                <img src =${array[i].img} alt=${array[i].producto}
            </div>
            <h2>
                ${array[i].producto}
            </h2>
            <h3>
                $${array[i].precio}
            </h3>
        ` 
        contenedor.appendChild(card)
    }
}

productosHtml(productos)

// Modo oscuro

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
}