// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creo un array
let amigos = [];

function agregarAmigo(){
    //capturo el nombre del amigo desde el input
    
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        //en caso de que sea verdadero
        alert('Por favor, inserte un nombre.');
    } else {
        //En caso de que no sea verdadero
        //insertamos en la lista
        //limpiamos la caja
        //limpiamos la leyenda si ganamos
        amigos.push(amigo);
        limpiarCaja();
        visualizarLista();
        document.getElementById('resultado').innerHTML='';
    }
    
}

//Creo una funcion que me ayuda a mostrar los valores en una lista
function visualizarLista(){
    //Genero una variable para darle las propiedades de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpio el valor para no obtener duplicados indeseados
    lista.innerHTML = "";
    //Genero un for para recorrer la lista de amigos y mostrarlo
    for (let i = 0; i < amigos.length; i++) {
        //utilizando el innerhtml inserto un codigo html a la lista
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
//creamos una funcion para realizar el sorteo
function sortearAmigo(){
    //creamos el elemento indice que tendra los datos random
    let indice = Math.floor(Math.random()*amigos.length);
    //creamos un if para poner la condicion si esta vacio
    if (amigos.length == 0) {
        //En caso de que si este mostramos un alert
        alert('No hay amigos cargados!');
    }else{
        //En caso de que no comenzamos a mostrar el ganador
        let ganador = document.getElementById('resultado');
       //Agregamos el ganador como una lista!
        ganador.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[indice]}</li>`;
    }
}

//utilizo esta funcion para poder limpiar el campo
function limpiarCaja() {
    document.getElementById('amigo').value='';
}