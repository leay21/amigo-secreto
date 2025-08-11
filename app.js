// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let nombre;

function agregarAmigo() {
    nombre = document.getElementById("amigo").value;
    if(nombre != "") {
        nombres.push(nombre);
        document.getElementById("listaAmigos").innerHTML += `<li>${nombre}</li>`;
    } else {
        alert("Por favor, ingrese un nombre");
    }
    document.getElementById("amigo").value = "";
}

