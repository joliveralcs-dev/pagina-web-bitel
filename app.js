// Toggle del menú lateral en móviles
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.querySelector('.sidebar');
if (menuBtn) {
  menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
}

// Resaltar enlace activo por hash
const links = document.querySelectorAll('.nav__link');
function setActive() {
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === location.hash || (location.hash === "" && a.getAttribute('href') === "#home")));
}
window.addEventListener('hashchange', setActive);
setActive();

// Marcar enlace activo por página (index o productos)
(function markActiveByPath() {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav__link');
  links.forEach(a => {
    const href = a.getAttribute('href');
    // Activo si estoy en productos.html o si estoy en index.html (hash home/servicios/contacto)
    const isProductos = path.includes('productos.html') && href.includes('productos.html');
    const isIndex = path.includes('index.html') && href.includes('index.html');
    if (isProductos || isIndex) a.classList.add('active'); else a.classList.remove('active');
  });
})();

// Demo: acciones de búsqueda y formulario promo
const btnBuscar = document.getElementById('btnBuscar');
if (btnBuscar) btnBuscar.addEventListener('click', () => alert('Búsqueda de ejemplo 🔎'));

const promoForm = document.getElementById('promoForm');
if (promoForm) promoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias! Te enviaremos nuestras promociones ✉️');
  promoForm.reset();
});
