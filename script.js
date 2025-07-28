//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}