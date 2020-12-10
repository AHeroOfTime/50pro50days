const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopSounds() {
  sounds.forEach((sound) => {
    const sounds = document.getElementById(sound);

    sounds.pause();
    sounds.currentTime = 0;
  });
}

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();

    document.getElementById(sound).play();
  });

  document.querySelector('#buttons').appendChild(btn);
});
