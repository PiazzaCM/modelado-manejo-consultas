const body = document.getElementById('libros-container');
const contador = document.getElementById('contador');

let libros = [];

const obtenerLibros = async() =>{
    const peticion = await fetch('http://localhost:5000/libros');
    
    const resp = await peticion.json();

    libros = resp;
    renderLibros(resp);
    contador.innerHTML = `${resp.length} resultados`;
}


const renderLibros = (data) => {
    
    let html = '';

    data.forEach(libro => {
        html += `
        <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=".${libro.portada}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${libro.titulo}</h5>
                <p class="card-text">Genero: ${libro.genero}</p>
                <p class="card-text">Publicado: ${libro.publicacion}</p>
                <p class="card-text"><small class="text-body-secondary">${libro.autor.nombre} ${libro.autor.apellido}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    })

    body.innerHTML = html;

}

obtenerLibros();

const filter = ()=>{
    const genero = document.getElementById('filter').value;

    const filtrado = genero ? libros.filter(libro => libro.genero === genero) : libros
    contador.innerHTML = `${filtrado.length} resultados`;
    
    
    renderLibros(filtrado);
}



