const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

function toggleLights() {
  if (redLight.classList.contains('active')) {
    redLight.classList.remove('active');
    yellowLight.classList.add('active');
  } else if (yellowLight.classList.contains('active')) {
    yellowLight.classList.remove('active');
    greenLight.classList.add('active');
  } else if (greenLight.classList.contains('active')) {
    greenLight.classList.remove('active');
    redLight.classList.add('active');
  } else {
    redLight.classList.add('active');
  }
}

redLight.addEventListener('click', toggleLights);
yellowLight.addEventListener('click', toggleLights);
greenLight.addEventListener('click', toggleLights);
