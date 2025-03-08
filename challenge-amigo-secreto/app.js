
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
        }  

        console.log("Amigo agregado: " + nombreAmigo);
        console.log(amigos);
        document.getElementById('amigo').value = "";

}
