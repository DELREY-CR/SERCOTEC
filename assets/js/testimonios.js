// Carrusel de testimonios mostrando 3 de 10, con navegación

document.addEventListener('DOMContentLoaded', function () {
  fetch('data/testimonios.json')
    .then(res => res.json())
    .then(testimonios => {
      let actual = 0;
      const mostrar = 3;
      const total = testimonios.length;
      const contenedor = document.getElementById('testimonios-carrusel');
      const prevBtn = document.getElementById('testimonios-prev');
      const nextBtn = document.getElementById('testimonios-next');

      function render() {
        contenedor.innerHTML = testimonios.slice(actual, actual + mostrar).map(t => `
          <div class="testimonio-tarjeta">
            <div class="testimonio-tarjeta__img">
              <img src="${t.imagen}" alt="${t.nombre}">
            </div>
            <div class="testimonio-tarjeta__comentario">“${t.comentario}”</div>
            <div class="testimonio-tarjeta__usuario">
              <span class="testimonio-tarjeta__nombre">${t.nombre}</span>
              <span class="testimonio-tarjeta__red">${t.usuario} (${t.red})</span>
            </div>
          </div>
        `).join('');
      }

      function prev() {
        actual = (actual - 1 + total) % total;
        if (actual > total - mostrar) actual = total - mostrar;
        if (actual < 0) actual = 0;
        render();
      }
      function next() {
        actual = (actual + 1) % total;
        if (actual > total - mostrar) actual = 0;
        render();
      }
      prevBtn.addEventListener('click', prev);
      nextBtn.addEventListener('click', next);
      render();
    });
});
