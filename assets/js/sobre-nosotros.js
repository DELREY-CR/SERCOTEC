// Carrusel moderno misión/visión/valores sección Sobre Nosotros
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.sobre-nosotros__item');
  const prevBtn = document.querySelector('.sobre-nosotros__prev');
  const nextBtn = document.querySelector('.sobre-nosotros__next');
  let actual = 0;
  let intervalo = null;

  function mostrarItem(idx) {
    items.forEach((item, i) => {
      item.classList.toggle('activo', i === idx);
    });
  }

  function siguiente() {
    actual = (actual + 1) % items.length;
    mostrarItem(actual);
  }

  function anterior() {
    actual = (actual - 1 + items.length) % items.length;
    mostrarItem(actual);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      siguiente();
      reiniciarIntervalo();
    });
    prevBtn.addEventListener('click', () => {
      anterior();
      reiniciarIntervalo();
    });
  }

  function reiniciarIntervalo() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(siguiente, 5000);
  }

  mostrarItem(actual);
  reiniciarIntervalo();
});
