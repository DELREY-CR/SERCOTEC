// Renderizado dinámico de preguntas frecuentes tipo acordeón

document.addEventListener('DOMContentLoaded', function () {
  fetch('data/faq.json')
    .then(res => res.json())
    .then(faqs => {
      const contenedor = document.getElementById('faq-lista');
      if (!contenedor) return;
      contenedor.innerHTML = faqs.map((faq, i) => `
        <div class="faq-item">
          <button class="faq-pregunta" aria-expanded="false" aria-controls="faq-resp-${i}" id="faq-btn-${i}">
            ${faq.pregunta}
            <span class="faq-icono">+</span>
          </button>
          <div class="faq-respuesta" id="faq-resp-${i}" hidden>
            ${faq.respuesta}
          </div>
        </div>
      `).join('');
      // Lógica acordeón
      contenedor.querySelectorAll('.faq-pregunta').forEach((btn, idx) => {
        btn.addEventListener('click', function() {
          const resp = document.getElementById(`faq-resp-${idx}`);
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', !expanded);
          resp.hidden = expanded;
          btn.querySelector('.faq-icono').textContent = expanded ? '+' : '−';
        });
      });
    });
});
