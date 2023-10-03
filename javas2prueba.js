// Obtener referencias a los elementos HTML que vamos a utilizar
const imagen = document.getElementById("imagen");
const enlace1 = document.getElementById("enlace1");
const enlace2 = document.getElementById("enlace2");

// Agregar event listeners a los enlaces para cambiar la imagen
enlace1.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    imagen.src = "imagen1.jpg"; // Cambiar la fuente de la imagen
});

enlace2.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    imagen.src = "imagen2.jpg"; // Cambiar la fuente de la imagen
});
