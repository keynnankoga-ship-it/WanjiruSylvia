const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparks = [];

function Spark(x, y) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 3 + 1;
  this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  this.velocityX = (Math.random() - 0.5) * 6;
  this.velocityY = (Math.random() - 0.5) * 6;
  this.alpha = 1;
}

Spark.prototype.update = function () {
  this.x += this.velocityX;
  this.y += this.velocityY;
  this.alpha -= 0.02;
};

Spark.prototype.draw = function () {
  ctx.globalAlpha = this.alpha;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.globalAlpha = 1;
};

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;

  for (let i = 0; i < 40; i++) {
    sparks.push(new Spark(x, y));
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sparks.forEach((s, i) => {
    s.update();
    s.draw();
    if (s.alpha <= 0) {
      sparks.splice(i, 1);
    }
  });

  requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  setInterval(createFirework, 1200);
  animateFireworks();
}