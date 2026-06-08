const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let particles = [];

function ConfettiParticle() {
  this.x = Math.random() * confettiCanvas.width;
  this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
  this.size = Math.random() * 6 + 2;
  this.speed = Math.random() * 3 + 1;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

ConfettiParticle.prototype.update = function () {
  this.y += this.speed;
  if (this.y > confettiCanvas.height) {
    this.y = -10;
  }
};

ConfettiParticle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.size, this.size);
};

function initConfetti() {
  for (let i = 0; i < 150; i++) {
    particles.push(new ConfettiParticle());
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animateConfetti);
}

function startConfetti() {
  initConfetti();
  animateConfetti();
}