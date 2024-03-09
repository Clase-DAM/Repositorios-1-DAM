// Obtener la referencia al elemento BMO
const bmoElement = document.getElementById('bmo');
const alfa = 215;
const rojo = 246;
const verde = 208;
const azul = 208;

const colorARGB = `rgba(${rojo}, ${verde}, ${azul}, ${alfa / 255})`;

// Aplicar el color al fondo de un elemento, por ejemplo
document.getElementById('miElemento').style.backgroundColor = colorARGB;
// Actualizar la animación en función de la batería o temperatura (simulado)
function updateAnimation(batteryLevel, temperature) {
  // Lógica para cambiar la cara o el color según la batería o la temperatura
  if (batteryLevel < 30) {
    bmoElement.style.backgroundImage = "url('ruta-de-tu-imagen-de-BMO-triste.png')";
  } else {
    bmoElement.style.backgroundImage = "url('ruta-de-tu-imagen-de-BMO-feliz.png')";
  }

  if (temperature > 30) {
    bmoElement.style.backgroundColor = `rgba(${rojo}, ${verde}, ${azul}, ${alfa / 255})`; // Cambiar a un color más cálido
  } else {
    bmoElement.style.backgroundColor = '#0000ff'; // Cambiar a un color más fresco
  }
}

//// Simular la obtención de datos de la batería y la temperatura
setInterval(() => {
  const batteryLevel = Math.random() * 100;
  const temperature = Math.random() * 50;
  updateAnimation(batteryLevel, temperature);
}, 5000); // Actualizar cada 5 segundos (ajusta según tus necesidades)
