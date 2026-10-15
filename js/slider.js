// CAMBIAR EL BOTÓN ACTIVO DEL MENÚ AL DESPLAZARSE
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navBtns = document.querySelectorAll('.nav-btn');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.getAttribute('id');
      }
    });

    navBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('href').includes(currentSection)) {
        btn.classList.add('active');
      }
    });
  });

  // CONFIRMACIÓN DE ENVÍO DEL FORMULARIO DE CONTACTO
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por comunicarte con OC Tech Solutions! Tu mensaje ha sido enviado correctamente.');
      form.reset();
    });
  }
});document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetTimer();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetTimer();
    });
  }

  function startTimer() {
    slideInterval = setInterval(nextSlide, 4000); // Cambia de imagen cada 4 segundos
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  startTimer();
});
// CONEXIÓN DEL FORMULARIO WEB CON GOOGLE DRIVE (OCTECHSolution)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactHomeForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // PEGA AQUÍ LA URL DE GOOGLE APPS SCRIPT QUE COPIASTE
      const scriptURL = 'PEGA_AQUI_TU_URL_DE_APPS_SCRIPT';

      const formData = {
        nombre: document.getElementById('homeNombre').value,
        email: document.getElementById('homeEmail').value,
        telefono: document.getElementById('homeTelefono').value,
        mensaje: document.getElementById('homeMensaje').value
      };

      const btnSubmit = form.querySelector('.btn-submit-page');
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(() => {
        alert('¡Gracias! Tu mensaje ha sido enviado y registrado correctamente.');
        form.reset();
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
      });
    });
  }
});