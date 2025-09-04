function playSound(e) {
  let keyCode;

  if (e.type === "keydown") {
    keyCode = e.keyCode;
  } else {
    keyCode = Number(this.getAttribute("data-key"));
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`button[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => button.addEventListener("click", playSound));
buttons.forEach((button) => button.addEventListener("transitionend", removeTransition)
);
