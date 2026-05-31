// Lógica de menú hamburguesa y navegación responsive en español

document.addEventListener('DOMContentLoaded', function () {

  const boton = document.querySelector('.hamburger');
  const menu = document.querySelector('.barra-navegacion__menu');

  if (boton && menu) {
    boton.addEventListener('click', function () {
      const expandido = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', !expandido);
      menu.classList.toggle('activo');
      boton.classList.toggle('is-active'); // animación hamburguesa
    });
  }

  // Cerrar menú al hacer click en un enlace (en móvil)
  document.querySelectorAll('.barra-navegacion__menu a').forEach(enlace => {
    enlace.addEventListener('click', () => {
      if (window.innerWidth <= 768 && menu.classList.contains('activo')) {
        menu.classList.remove('activo');
        boton.setAttribute('aria-expanded', 'false');
        boton.classList.remove('is-active');
      }
    });
  });

  // Scroll suave para navegación
  document.querySelectorAll('a[href^="#"]').forEach(ancla => {
    ancla.addEventListener('click', function (e) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
