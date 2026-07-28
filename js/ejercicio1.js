const formulario = document.getElementById("formUsuario");

const tbody = document.querySelector("#tablaUsuarios tbody");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let editado = false;
let idEditar = null;
mostrarUsuarios();
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = {
    id: Date.now(),
    nombre: document.getElementById("nombre").value.trim(),
    apellido: document.getElementById("apellido").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    edad: document.getElementById("edad").value,
    genero: document.getElementById("genero").value,
    direccion: document.getElementById("direccion").value.trim(),
  };

  if (
    usuario.nombre === "" ||
    usuario.apellido === "" ||
    usuario.correo === ""
  ) {
    alert("Completa el formulario con los campos obligatorios");
    return;
  }

  if (editado) {
    const indice = usuarios.findIndex((u) => u.id === idEditar);
    usuarios[indice] = usuario;

    editado = false;
    idEditar = null;
  } else {
    const existe = usuarios.some(
      (u) => u.correo.toLowerCase() === usuario.correo.toLowerCase(),
    );

    if (existe) {
      alert("Ese correo ya existe");
      return;
    }

    usuarios.push(usuario);

    formulario.reset();
  }
  guardarLocalStorage();

  mostrarUsuarios();
});

function guardarLocalStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function mostrarUsuarios() {
  tbody.innerHTML = "";

  usuarios.forEach((usuario) => {
    tbody.innerHTML += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.genero}</td>
            <td>${usuario.direccion}</td>
            <td>
            <button>Editar</button>
            <button>Eliminar</button>
            </td>
        </tr>
    `;
  });
}