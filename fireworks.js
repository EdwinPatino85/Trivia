// Motor de Fuegos Artificiales en Canvas HTML5
// Optimizado para rendimiento y colores vivos (verde, dorado, crema, naranja)

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    // Velocidad inicial aleatoria en coordenadas polares
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    
    this.gravity = 0.08;
    this.friction = 0.96; // Resistencia del aire
    this.alpha = 1.0;
    this.decay = Math.random() * 0.015 + 0.01; // Velocidad de desvanecimiento
    this.color = color;
    
    // Tamaño aleatorio de la partícula
    this.radius = Math.random() * 2 + 1;
  }

  update() {
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    // Efecto de brillo
    ctx.shadowBlur = 6;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.restore();
  }
}

class Firework {
  constructor(startX, startY, targetX, targetY, color) {
    this.x = startX;
    this.y = startY;
    this.startX = startX;
    this.startY = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.color = color;
    
    // Calcular distancia y pasos
    const dx = targetX - startX;
    const dy = targetY - startY;
    this.distance = Math.sqrt(dx * dx + dy * dy);
    this.distanceTraveled = 0;
    
    // Velocidad del cohete
    const speed = 10;
    const angle = Math.atan2(dy, dx);
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    
    this.exploded = false;
    
    // Historial para efecto estela
    this.trail = [];
    this.trailLength = 5;
  }

  update() {
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.trailLength) {
      this.trail.shift();
    }
    
    this.x += this.vx;
    this.y += this.vy;
    
    const dx = this.x - this.startX;
    const dy = this.y - this.startY;
    this.distanceTraveled = Math.sqrt(dx * dx + dy * dy);
    
    if (this.distanceTraveled >= this.distance) {
      this.exploded = true;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    if (this.trail.length > 0) {
      ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (let i = 1; i < this.trail.length; i++) {
        ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
    } else {
      ctx.moveTo(this.x - this.vx, this.y - this.vy);
      ctx.lineTo(this.x, this.y);
    }
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

let canvas = null;
let ctx = null;
let fireworks = [];
let particles = [];
let animationId = null;
let isRunning = false;

// Paleta de colores para la victoria (Verdes, Dorados, Crema, Naranjas)
const fireworkColors = [
  '#52b788', // Verde menta
  '#74c69d', // Verde claro
  '#d4af37', // Dorado clásico
  '#f9c74f', // Amarillo brillante
  '#f9844a', // Naranja
  '#eae2b7', // Beige crema
  '#ffffff'  // Blanco destello
];

function resizeCanvas() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnExplosion(x, y, color) {
  const particleCount = randomRange(50, 80);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function loop() {
  if (!isRunning) return;
  
  // Limpieza gradual con estela
  ctx.fillStyle = 'rgba(27, 67, 50, 0.15)'; // Limpia con un verde bosque oscuro translúcido para mantener estelas
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 1. Lanzar cohetes aleatoriamente
  if (Math.random() < 0.05 && fireworks.length < 5) {
    const startX = canvas.width / 2 + randomRange(-canvas.width / 3, canvas.width / 3);
    const startY = canvas.height;
    const targetX = randomRange(100, canvas.width - 100);
    const targetY = randomRange(50, canvas.height * 0.6);
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    fireworks.push(new Firework(startX, startY, targetX, targetY, color));
  }
  
  // 2. Actualizar y dibujar cohetes
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const f = fireworks[i];
    f.update();
    f.draw(ctx);
    
    if (f.exploded) {
      spawnExplosion(f.targetX, f.targetY, f.color);
      fireworks.splice(i, 1);
    }
  }
  
  // 3. Actualizar y dibujar partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw(ctx);
    
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
  
  animationId = requestAnimationFrame(loop);
}

// APIs globales expuestas
window.FireworksEngine = {
  start: function (canvasElementId) {
    canvas = document.getElementById(canvasElementId);
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    isRunning = true;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Limpieza inicial
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks = [];
    particles = [];
    
    loop();
  },
  
  stop: function () {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    window.removeEventListener('resize', resizeCanvas);
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  },
  
  // Detonar una explosión manual en la posición del clic
  triggerManualExplosion: function (x, y) {
    if (!isRunning || !ctx) return;
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    spawnExplosion(x, y, color);
  }
};
