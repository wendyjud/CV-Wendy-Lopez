document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.image-container img');
    
    setTimeout(() => {
      image.style.transform = 'translateY(0)';
    }, 800); // Ajusta el tiempo de espera según tus necesidades
  });

  $(document).ready(function() {
    // Recarga la página al hacer clic en una burbuja
    $('.bubble').click(function() {
      location.reload();
    });
  
    // Inicia la animación cuando la página se carga por primera vez
    animateBubbles();
  });
  
  function animateBubbles() {
    $('.bubble').each(function(index) {
      let delay = index * 50; // Ajusta el retardo para cada burbuja
      $(this).css('animation-delay', delay + 's');
    });
  }
  
  