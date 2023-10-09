
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/autores')
      .then(res => res.json())
      .then(data => {
        let html = ''
        data.forEach(autor => {
          html += `
            <option value="${autor._id}">${autor.nombre} ${autor.apellido}</option>
          `
        });
  
        document.getElementById('autor').innerHTML = html;
      });
  
    const enviarLibro = document.getElementById('enviarLibro');
  
    enviarLibro.addEventListener('click', async () => {
      const data = new FormData(document.getElementById('form'));
  
      const peticion = await fetch('http://localhost:5000/libros', {
        method: 'POST',
        body: data
      });
  
      const res = await peticion.json();
  
      alert(res.res);
  
      window.location.href = './index.html';
    });
  });
  