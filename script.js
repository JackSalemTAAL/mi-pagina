// Fecha objetivo: suma 107 días desde el momento actual
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 107);

// Actualizar el conteo cada segundo
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "¡Ha llegado el día!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Inicia el intervalo de actualización
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamar inmediatamente para inicializar
