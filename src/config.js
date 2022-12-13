//dom

const radioServidor = document.querySelector("#btnradio1");
const radioTerminal = document.querySelector("#btnradio2");
const modoElegido = document.querySelector("#modoElegido");
const inputsServidor = document.querySelector("#configServidor");
const inputsTerminal = document.querySelector("#configTerminal");
const mostrarServidor = document.querySelector(".mostrarServidor");
const mostrarTerminal = document.querySelector(".mostrarTerminal");
const inputNumSuc = document.querySelector("#main__configuration__form__servidor__numsuc");
const inputPathVbox = document.querySelector("#main__configuration__form__servidor__pathvbox");
const inputPathDestino = document.querySelector("#main__configuration__form__servidor__pathdestino");
const inputPathArchivoApagar = document.querySelector("#main__configuration__form__terminal__path");

//objeto config

let configDB = {
    "numSuc": 0,
    "pathBackup": '',
    "pathDest": '',
    "pathApagar": ''
}

configDB.numSuc.value = inputNumSuc;
console.log(configDB);

let modo;

radioServidor.onclick = (e) => {
    e.preventDefault();
    modo = "servidor";
    modoElegido.innerHTML = '<span class="main__configuration__modoelegido__span">Modo: Servidor</span>';
    mostrarServidor.setAttribute('class', 'form-group mostrarServidor');
    mostrarTerminal.setAttribute('class', 'form-group d-none mostrarTerminal');
    inputNumSuc.value = 0;
    inputPathVbox.value = 'C:/Users/cuspide/VirtualBox VMs';
    inputPathDestino.value = 'C:/Users/public/backup';
    inputsServidor.onsubmit = (e) => {
        e.preventDefault();        
        configDB.numSuc = inputNumSuc.value;
        configDB.pathBackup = inputPathVbox.value;
        configDB.pathDest = inputPathDestino.value;
        console.log(configDB);
    }
}

radioTerminal.onclick = (e) => {
    e.preventDefault();
    modo = "terminal";
    modoElegido.innerHTML = '<span class="main__configuration__modoelegido__span">Modo: Terminal</span>';
    mostrarServidor.setAttribute('class', 'form-group d-none mostrarServidor');
    mostrarTerminal.setAttribute('class', 'form-group mostrarTerminal');
    inputPathArchivoApagar.value = 'C:/Users/public/backup';
    inputsTerminal.onsubmit = (e) => {
        e.preventDefault();
        configDB.pathApagar = inputPathArchivoApagar.value;
        console.log(configDB);
    }
}