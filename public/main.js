

// Referencias a los elementos de la interfaz.
const formulario = document.querySelector("#formulario-mision");
const campoTitulo = document.querySelector("#titulo");
const campoDescripcion = document.querySelector("#descripcion");
const campoDificultad = document.querySelector("#dificultad");
const campoRecompensa = document.querySelector("#recompensa");
const lista = document.querySelector("#lista-misiones");
const listaVacia = document.querySelector("#lista-vacia");
const mensaje = document.querySelector("#mensaje");
const botonBorrar = document.querySelector("#borrar-todo");
const botonSubir = document.querySelector("#subir-servidor");
const botonBajar = document.querySelector("#bajar-servidor");
let misiones = [];




formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que el formulario recargue la página.
  agregarMision();
});

botonBorrar.addEventListener("click", borrarTodo);

function agregarMision() {
  // TODO
  // crear objeto misión, incluir los valores de los campos y un id único
  const titulo = document.getElementById("titulo").value;
  
  const desc = document.getElementById("descripcion").value;
  

  const dificultad = document.getElementById("dificultad").value;
  

  const recompensa = document.getElementById("recompensa").value;
 
  const mision = {
    id: crypto.randomUUID(),
    titulo: titulo,
    descripcion: desc,
    dificultad: dificultad,
    recompensa: recompensa
  };
   const misionesGuardadas =
    JSON.parse(localStorage.getItem("misiones")) || [];

  // 4. Añadir la nueva misión al array
  misionesGuardadas.push(mision);

  // 5. Guardar el array actualizado
  localStorage.setItem("misiones", JSON.stringify(misionesGuardadas));

  // 6. Mostrar la nueva misión en la página
  mostrarMision(mision);
  
}

function mostrarMisiones() {
  lista.innerHTML = "";
  if (misiones.length === 0) {
    listaVacia.textContent = "Todavía no hay misiones.";
  } else {
    listaVacia.textContent = "";
  }

  // TODO: Recorre el array misiones y llama a mostrarMision(mision)
  // para cada misión.
}

function mostrarMision(mision) {
  const elemento = document.createElement("li");

  const titulo = document.createElement("h3");
  titulo.textContent = mision.titulo;

  const descripcion = document.createElement("p");
  descripcion.textContent = mision.descripcion;

  const dificultad = document.createElement("p");
  dificultad.className = "datos-mision";
  dificultad.textContent = "Dificultad: " + mision.dificultad;

  const recompensa = document.createElement("p");
  recompensa.className = "datos-mision";
  recompensa.textContent = "Recompensa: " + mision.recompensa;

  elemento.appendChild(titulo);
  elemento.appendChild(descripcion);
  elemento.appendChild(dificultad);
  elemento.appendChild(recompensa);

  lista.appendChild(elemento);
}

function guardarMisiones() {
}

function cargarMisiones() {
}

function borrarTodo() {
  const botonBorrar = document.getElementById("borrar-todo");
  botonBorrar.addEventListener('click', borrar);


  function borrar(){
    const misionesGuardadas =
    JSON.parse(localStorage.getItem("misiones")) || [];
    misionesGuardadas.forEach(m => {
      misionesGuardadas.pop(m);
    });
    mostrarMisiones();
  
  
    localStorage.clear('clear');
  }

}

function bajarServidor(){
  const baj = document.getElementById("bajar-servidor");
  baj.addEventListener('click', bajar)

  function bajar(){
    fetch('https://damp-cadaver-76ggrpj4x42p5v5-5500.app.github.dev/public/').then (r => r.JSON).catch(err => console.error(err))
  }
}

function subirServidor(){
  const sub = document.getElementById("subir-servidor");
  sub.addEventListener('click', subir)

  function subir(){
    fetch('https://damp-cadaver-76ggrpj4x42p5v5-5500.app.github.dev/public/', {
method:'POST',
headers: {'Content-Type': 'application/json',},
body: JSON.stringify(JSON)
}).then ()
  }
}

cargarMisiones();
mostrarMisiones();
