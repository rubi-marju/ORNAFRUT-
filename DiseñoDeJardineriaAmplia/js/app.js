document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal-galeria");
    const modalImagen = document.getElementById("modal-imagen");
    const closeModalBtn = document.querySelector(".btn-close");
  
    // Agregar evento a cada imagen para abrir el modal con la imagen correspondiente
    document.querySelectorAll(".container-imagen a").forEach((enlace) => {
      enlace.addEventListener("click", function (event) {
        event.preventDefault();  // Evita que el enlace recargue la página
        const imgSrc = enlace.dataset.img;
        modalImagen.src = imgSrc;  // Asigna la imagen seleccionada al modal
        new bootstrap.Modal(modal).show();  // Muestra el modal
      });
    });
  
    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModalBtn.addEventListener("click", () => {
      modalImagen.src = "";  // Limpia la imagen del modal al cerrarlo
    });
  });
  