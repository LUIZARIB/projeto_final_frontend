var btn_responsivo = document.getElementById('btn-responsivo');
var filtro = document.querySelector('.filtro-responsivo');
btn_responsivo.addEventListener('click', function() {
    
    if(filtro.style.display === 'block') {
      
        filtro.style.display = 'none';
    } else {
        filtro.style.display = 'block';
    }
  });