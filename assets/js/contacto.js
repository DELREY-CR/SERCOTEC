// Validación de formulario de contacto

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contacto');
  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const telefono = document.getElementById('telefono');
  const servicio = document.getElementById('servicio');
  const errorNombre = document.getElementById('error-nombre');
  const errorCorreo = document.getElementById('error-correo');
  const errorTelefono = document.getElementById('error-telefono');
  const errorServicio = document.getElementById('error-servicio');
  const mensajeExito = document.getElementById('mensaje-exito');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    // Validar nombre
    if (nombre.value.trim().length < 3) {
      errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
      valido = false;
    } else {
      errorNombre.textContent = '';
    }

    // Validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value.trim())) {
      errorCorreo.textContent = 'Ingresa un correo válido.';
      valido = false;
    } else {
      errorCorreo.textContent = '';
    }

    // Validar teléfono
    const regexTel = /^[0-9]{9,15}$/;
    if (!regexTel.test(telefono.value.trim())) {
      errorTelefono.textContent = 'Ingresa un teléfono válido (solo números, 9 a 15 dígitos).';
      valido = false;
    } else {
      errorTelefono.textContent = '';
    }

    // Validar servicio
    if (!servicio.value) {
      errorServicio.textContent = 'Selecciona un servicio.';
      valido = false;
    } else {
      errorServicio.textContent = '';
    }

    if (valido) {
      mensajeExito.style.display = 'block';
      form.reset();
      setTimeout(() => {
        mensajeExito.style.display = 'none';
      }, 3500);
    }
  });
});
