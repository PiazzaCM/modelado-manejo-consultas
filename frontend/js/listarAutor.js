const body = document.getElementById("autores-container");

let autores = [];

const obtenerAutores = async() =>{
    const peticion = await fetch('http://localhost:5000/autores');
    
    const resp = await peticion.json();

    autores = resp;
    renderAutores(resp);
}

const renderAutores = (data) => {
    
    let html = '';

    data.forEach(autor => {
        html += `
        <tr>
        <td>${autor.nombre}</td>
        <td>${autor.apellido}</td>
        <td>${autor.biografia}</td>
      </tr>
        `
    })

    body.innerHTML = html;

}
obtenerAutores();