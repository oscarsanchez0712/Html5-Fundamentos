// ---- formulario ----
document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const correo = this.correo.value;
  document.getElementById('formOut').innerHTML =
    '<strong>✓ válido</strong> — el navegador confirmó el formato de "' + correo + '" sin ninguna librería.';
});

// ---- canvas (con soporte para tamaño responsivo) ----
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#161D19';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let dibujando = false;
let colorActual = '#7FFFB0';

function pos(e) {
  const r = canvas.getBoundingClientRect();
  const t = e.touches ? e.touches[0] : e;
  // escala las coordenadas del cursor a la resolución interna del canvas,
  // que puede ser distinta al tamaño visual en pantallas pequeñas
  const escalaX = canvas.width / r.width;
  const escalaY = canvas.height / r.height;
  return {
    x: (t.clientX - r.left) * escalaX,
    y: (t.clientY - r.top) * escalaY
  };
}
function iniciar(e) { dibujando = true; trazar(e); }
function terminar() { dibujando = false; ctx.beginPath(); }
function trazar(e) {
  if (!dibujando) return;
  e.preventDefault();
  const p = pos(e);
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = colorActual;
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
}
canvas.addEventListener('mousedown', iniciar);
canvas.addEventListener('mouseup', terminar);
canvas.addEventListener('mouseleave', terminar);
canvas.addEventListener('mousemove', trazar);
canvas.addEventListener('touchstart', iniciar);
canvas.addEventListener('touchend', terminar);
canvas.addEventListener('touchmove', trazar);

document.querySelectorAll('.swatch').forEach(function (s) {
  s.addEventListener('click', function () {
    document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
    this.classList.add('active');
    colorActual = this.dataset.color;
  });
});
document.getElementById('limpiar').addEventListener('click', function () {
  ctx.fillStyle = '#161D19';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// ---- localStorage ----
const CLAVE = 'html5_demo_contador';
const contadorEl = document.getElementById('contador');
let n = parseInt(localStorage.getItem(CLAVE)) || 0;
contadorEl.textContent = n;
function guardar() {
  localStorage.setItem(CLAVE, n);
  contadorEl.textContent = n;
}
document.getElementById('mas').addEventListener('click', function () { n++; guardar(); });
document.getElementById('menos').addEventListener('click', function () { n--; guardar(); });
document.getElementById('reset').addEventListener('click', function () { n = 0; guardar(); });
