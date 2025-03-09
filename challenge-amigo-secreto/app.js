
let amigos = []; //Se declara variable de tipo array
console.log (amigos.length);

//Añadir la función
function agregarAmigo (){
    //Capturar el valor del campo de entrada usando .getElementById
    let nombreAmigo = document.getElementById ('amigo').value;
    console.log(nombreAmigo);
    console.log(typeof(nombreAmigo));
    //Validar entrada con una condicional asegurando que no este el campo en blanco
    if (nombreAmigo.trim() === "") {
            alert("Por favor, inserte un nombre.");
        } else {
            amigos.push(nombreAmigo); // Agregaras el nombre al array amigos
            actualizarLista(); //Se llama a la función 
            console.log("Amigo agregado: " + nombreAmigo);
            console.log(amigos);
            document.getElementById('amigo').value = ""; //
        }
}

function actualizarLista(){ //Se declara función para la lista 
    const listaElement = document.getElementById ('listaAmigos'); //Obtener el elemento de la lista 
    listaElement.innerHTML = ""; //Limpiar lista existente

    for (let i = 0; i < amigos.length; i++){ //Iterar sobre el arreglo
        const li = document.createElement('li');//variable que no se puede reasignar y crea elemento en la lista 
        li.textContent = amigos[i]; // Establece el texto del elemento con el nombre del amigo
        listaElement.appendChild(li); // Agrega el elemento a la lista
        console.log(amigos);
    
    }

}
