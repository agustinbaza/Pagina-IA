let comentario = document.getElementById("comentarios");
let boton = document.getElementById("boton");
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");

function guardarComentario() {
  let guardar = formulario.value;
  let nombre2 = nombre.value;
  let alerta1 = document.getElementById("ingreseNombre");
  let alerta2 = document.getElementById("ingreseComentario");

  if (nombre2.trim() === "") {
    alerta1.innerHTML = "POR FAVOR INGRESE NOMBRE Y APELLIDO";
  } else {
    alerta1.innerHTML = "";
  }

  if (guardar.trim() === "") {
    alerta2.innerHTML = "POR FAVOR INGRESE COMENTARIO";
  } else {
    alerta2.innerHTML = "";
  }

  if (nombre2.trim() !== "" && guardar.trim() !== "") {
    comentario.innerHTML += `   
      <h3 class=" mt-3 p-1"> <i class="bi bi-person-circle p-1"></i> <b> ${nombre2} </b> </h3>
      <hr class="hrForm">
      <p class="fs-3 mb-1 p-2"> ${guardar} </p>
    `;
  }
}

boton.addEventListener("click", guardarComentario);



