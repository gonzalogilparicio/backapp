const radioServidor = document.querySelector("#btnradio1");
const radioTerminal = document.querySelector("#btnradio2");
const modoElegido = document.querySelector("#modoElegido");
const inputsServidor = document.querySelector("#configServidor");
const inputsTerminal = document.querySelector("#configTerminal");

radioServidor.onclick = (e) => {
    e.preventDefault();
    console.log(radioServidor);
    modoElegido.innerHTML = '<p>Modo elegido: Servidor</p>'
}

radioTerminal.onclick = (e) => {
    e.preventDefault();
    console.log(radioTerminal);
}


