document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del carrusel
    var carousel = document.querySelector(".carousel");
    var images = carousel.querySelectorAll("img");
    var prevBtn = carousel.querySelector(".prev");
    var nextBtn = carousel.querySelector(".next");
  
    var index = 0; // Índice de la imagen actual
  
    // Función para mostrar la imagen actual
    function showImage() {
      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }
      images[index].classList.add("active");
    }
  
    // Función para avanzar al siguiente imagen
    function nextImage() {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      showImage();
    }
  
    // Función para retroceder a la imagen anterior
    function prevImage() {
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage();
    }
  
    // Evento clic en flecha siguiente
    nextBtn.addEventListener("click", function() {
      nextImage();
    });
  
    // Evento clic en flecha anterior
    prevBtn.addEventListener("click", function() {
      prevImage();
    });
  
    // Mostrar la imagen inicial
    showImage();
  });
// Obtener referencias a los elementos HTML que vamos a utilizar
const toggleMenuButton = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

// Agregar un event listener al botón para mostrar/ocultar el menú
toggleMenuButton.addEventListener("click", function() {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
