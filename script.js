const sounds = ['sound1', 'sound2', 'sound3'];

// Select the container that holds the buttons
const container = document.querySelector(".buttons");

// Dynamically create buttons and add event listeners
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound;
  btn.classList.add("btn");

  btn.addEventListener("click", function () {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  container.appendChild(btn);
});

// Optional: Stop button logic (stops all sounds by pausing them)
const stopBtn = document.querySelector(".stop");

if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    // This won't stop already created Audio unless you keep track of them
    // Here's a better approach using a global variable
    if (window.currentAudio) {
      window.currentAudio.pause();
      window.currentAudio.currentTime = 0;
    }
  });
}
