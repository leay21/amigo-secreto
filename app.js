// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let nombre;

function agregarAmigo() {
    nombre = document.getElementById("amigo").value;
    if(nombre != "") {
        nombres.push(nombre);
    } else {
        alert("Por favor, ingrese un nombre");
    }
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < nombres.length; i++) {
        lista.innerHTML += `<li>${nombres[i]}</li>`;
    }
}

