function startExperience() {
  document.getElementById("intro-screen").style.display = "none";

  const music = document.getElementById("bg-music");
  music.play();

  startTyping();
  startConfetti();
  startFireworks();
}

// Typing effect
function startTyping() {
  const text = "Wishing you endless joy, success, love, and unforgettable memories. May your days be as beautiful as your heart 💖✨";
  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  type();
}