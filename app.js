// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    if (!nombre) {
        alert('Por favor, ingrese un nombre');
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    listaDeAmigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    inputAmigo.value = '';
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (listaDeAmigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    resultado.innerHTML = `<li>¡${listaDeAmigos[indiceAleatorio]} ha sido seleccionado!</li>`;
}

function limpiarLista() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

// Agregar evento para la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});