 const sound = document.getElementById('sound');

document.addEventListener('click', function initAudio() {
  sound.play();
  document.removeEventListener('click', initAudio); // Ne le fait qu'une fois
});