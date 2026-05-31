// Renderizado dinámico de tarjetas de servicios desde JSON

document.addEventListener('DOMContentLoaded', function () {
  fetch('data/servicios.json')
    .then(res => res.json())
    .then(servicios => {
      const contenedor = document.getElementById('servicios-tarjetas');
      if (!contenedor) return;
      contenedor.innerHTML = servicios.map(servicio => `
        <div class="servicio-tarjeta">
          <div class="servicio-tarjeta__icono">${servicio.icono}</div>
          <h3 class="servicio-tarjeta__titulo">${servicio.titulo}</h3>
          <p class="servicio-tarjeta__descripcion">${servicio.descripcion}</p>
        </div>
      `).join('');
    });
});
