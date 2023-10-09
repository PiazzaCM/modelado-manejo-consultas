
    const enviarAutor = document.getElementById('enviarAutor');
  
    enviarAutor.addEventListener('click', async () => {
      const data = new FormData(document.getElementById('form'));
  
      const peticion = await fetch('http://localhost:5000/autores', {
        method: 'POST',
        body: data
      });
  
      const res = await peticion.json();
  
      alert(res.res);
  
      window.location.href = './index.html';
    });

  