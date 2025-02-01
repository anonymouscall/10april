// Audio Controls
const audio = document.getElementById('background-audio');
const audioControl = document.getElementById('audio-control');

audioControl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioControl.textContent = '🎵 Pause';
  } else {
    audio.pause();
    audioControl.textContent = '🎵 Play';
  }
});