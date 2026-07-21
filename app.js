// TRIVIA FUTBOLERA CARTOPEL - Lógica Principal de la Aplicación

// --- GESTOR DE AUDIO (Web Audio API Synthesizer + Fallback CDN) ---
const AudioManager = {
  ctx: null,
  musicAudio: null,
  isMuted: false,

  init() {
    // Inicializar Web Audio Context al primer clic
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
    }
    
    // Configurar música de fondo (energetic sports beat CDN)
    this.musicAudio = new Audio();
    this.musicAudio.src = "fondo.mp3";
    this.musicAudio.loop = true;
    this.musicAudio.volume = 0.15; // Volumen moderado de fondo
    
    // Intentar reanudar audio context cuando el usuario interactúe
    document.addEventListener('click', () => {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }, { once: true });
  },

  playMusic() {
    if (this.isMuted) return;
    this.musicAudio.play().catch(e => console.log("Autoplay bloqueado hasta interacción:", e));
  },

  stopMusic() {
    this.musicAudio.pause();
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.musicAudio.muted = this.isMuted;
    
    const muteBtn = document.getElementById('btn-mute');
    if (muteBtn) {
      muteBtn.innerHTML = this.isMuted ? '🔇' : '🔊';
      muteBtn.setAttribute('title', this.isMuted ? 'Activar sonido' : 'Silenciar');
    }
    return this.isMuted;
  },

  // Sintetizador Web Audio API para efectos de sonido retro e instantáneos (offline-ready)
  playSfx(type) {
    if (this.isMuted || !this.ctx) return;
    
    // Asegurar que el contexto esté activo
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    
    switch (type) {
      case 'click': {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
        break;
      }
      case 'correct': {
        // Acorde mayor ascendente (Brillante / Gol)
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0.08, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.35);
        });
        break;
      }
      case 'incorrect': {
        // Silbato/Zumbido disonante descencente (Árbitro / Error)
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
        break;
      }
      case 'win_jingle': {
        // Melodía triunfal
        const melody = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
        const times = [0.1, 0.1, 0.1, 0.2, 0.1, 0.4];
        let currentStart = now;
        melody.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, currentStart);
          gain.gain.setValueAtTime(0.1, currentStart);
          gain.gain.exponentialRampToValueAtTime(0.001, currentStart + times[idx]);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(currentStart);
          osc.stop(currentStart + times[idx]);
          currentStart += times[idx] * 0.8;
        });
        break;
      }
      case 'lose_jingle': {
        // Melodía triste / caída
        const melody = [392.00, 349.23, 311.13, 261.63]; // G4, F4, D#4, C4
        const times = [0.15, 0.15, 0.15, 0.4];
        let currentStart = now;
        melody.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, currentStart);
          gain.gain.setValueAtTime(0.1, currentStart);
          gain.gain.exponentialRampToValueAtTime(0.001, currentStart + times[idx]);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(currentStart);
          osc.stop(currentStart + times[idx]);
          currentStart += times[idx] * 0.9;
        });
        break;
      }
    }
  }
};

// --- GESTOR DE ESTADÍSTICAS DEL STAND (LocalStorage) ---
const StatsManager = {
  getStats() {
    //const defaultStats = { plays: 0, wins: 0, loses: 0, scores: [] };
    const defaultStats = { plays: 0, wins: 0, loses: 0, scores: [],participants: []};
    const saved = localStorage.getItem('cartopel_trivia_stats');
    return saved ? JSON.parse(saved) : defaultStats;
  },

  saveStats(stats) {
    localStorage.setItem('cartopel_trivia_stats', JSON.stringify(stats));
  },

 // recordGame(score, won) {
  recordGame(name, score, won) {
    const stats = this.getStats();
    stats.plays += 1;
    if (won) {
      stats.wins += 1;
    } else {
      stats.loses += 1;
    }
    stats.scores.push(score);
    stats.participants.push({
     name: name,
     score: score,
     date: new Date().toLocaleString()
    });
    this.saveStats(stats);
  },
  resetStats() {
    localStorage.removeItem('cartopel_trivia_stats');
  }
};

// --- MOTOR DE TRIVIA ---
const Game = {
  currentScreen: 'intro',
  playerName: '',
  selectedQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  hasAnswered: false,
  timerInterval: null,
  timeLeft: 20, // 20 segundos por pregunta

  init() {
    AudioManager.init();
    this.setupEventListeners();
    this.setupSecretAdminTrigger();
    this.showScreen('intro');
  },

  showScreen(screenId) {
    this.currentScreen = screenId;
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    const activeScreen = document.getElementById(`screen-${screenId}`);
    if (activeScreen) {
      activeScreen.classList.add('active');
    }

    // Acciones especiales al cambiar de pantalla
    if (screenId === 'results') {
      const isWinner = this.score >= 8;
      if (isWinner) {
        document.getElementById('result-cup').textContent = '🏆';
        const winTitle = document.getElementById('result-title');
        winTitle.textContent = '¡ERES UN CAMPEÓN DE CARTOPEL!';
        winTitle.className = 'result-title win';
        document.getElementById('result-message').innerHTML = 
          `¡Espectacular partido, <strong>${this.playerName || 'Jugador'}</strong>!<br>Respondiste correctamente <strong>${this.score} de 10</strong> preguntas.<br><span style="color:var(--color-accent); font-weight:700;">¡Reclama tu premio en el stand mostrando esta pantalla!</span>`;
        
        // Iniciar fuegos artificiales
        window.FireworksEngine.start('fireworks-canvas');
        AudioManager.playSfx('win_jingle');
      } else {
        document.getElementById('result-cup').textContent = '⚽';
        const loseTitle = document.getElementById('result-title');
        loseTitle.textContent = '¡Casi lo logras, crack!';
        loseTitle.className = 'result-title lose';
        document.getElementById('result-message').innerHTML = 
          `¡Buen intento, <strong>${this.playerName || 'Jugador'}</strong>!<br>Lograste <strong>${this.score} de 10</strong> aciertos. Necesitas un mínimo de <strong>8</strong> para ganar el premio.<br>¿Te animas a jugar otra revancha?`;
        
        window.FireworksEngine.stop();
        AudioManager.playSfx('lose_jingle');
      }
      
      // Mostrar puntaje final
      document.getElementById('result-val').textContent = `${this.score}/10`;
      
      // Registrar estadísticas
      //StatsManager.recordGame(this.score, isWinner);
      StatsManager.recordGame(this.playerName,this.score,isWinner);
    } else {
      // Detener fuegos artificiales si no estamos en resultados
      window.FireworksEngine.stop();
    }
  },

  startGame() {
    const nameInput = document.getElementById('player-name-input');
    this.playerName = nameInput.value.trim() || 'Participante';
    
    // Seleccionar 10 preguntas aleatorias del banco de 50
    this.selectedQuestions = this.getRandomQuestions(questionsBank, 10);
    this.currentQuestionIndex = 0;
    this.score = 0;
    
    AudioManager.playMusic();
    this.showScreen('game');
    this.loadQuestion();
  },

  getRandomQuestions(bank, count) {
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },

  loadQuestion() {
    this.hasAnswered = false;
    const q = this.selectedQuestions[this.currentQuestionIndex];
    
    // Ocultar tarjeta de dato curioso
    document.getElementById('feedback-container').style.display = 'none';
    
    // Actualizar barra de progreso
    const currentNum = this.currentQuestionIndex + 1;
    document.getElementById('progress-text-val').textContent = `Pregunta ${currentNum} de 10`;
    document.getElementById('progress-bar-fill').style.width = `${currentNum * 10}%`;
    document.getElementById('score-val').textContent = `Aciertos: ${this.score}`;
    
    // Datos de pregunta
    document.getElementById('q-category').textContent = q.category;
    document.getElementById('q-text').textContent = q.question;
    document.getElementById('q-image').src = q.image;
    
    // Renderizar opciones
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const letterKeys = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('data-index', index);
      btn.innerHTML = `
        <span class="option-key">${letterKeys[index]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.addEventListener('click', () => this.handleAnswer(index));
      optionsContainer.appendChild(btn);
    });

    // Iniciar temporizador sutil (20 segundos)
    this.startTimer();
  },

  startTimer() {
    clearInterval(this.timerInterval);
    this.timeLeft = 20;
    const timerText = document.getElementById('progress-timer-val');
    timerText.textContent = `⏱️ ${this.timeLeft}s`;
    
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      timerText.textContent = `⏱️ ${this.timeLeft}s`;
      
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.handleAnswer(-1); // Tiempo agotado
      }
    }, 1000);
  },

  handleAnswer(selectedIndex) {
    if (this.hasAnswered) return;
    this.hasAnswered = true;
    clearInterval(this.timerInterval);
    
    const q = this.selectedQuestions[this.currentQuestionIndex];
    const correctIndex = q.correct;
    
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
      btn.disabled = true;
      const idx = parseInt(btn.getAttribute('data-index'));
      
      if (idx === correctIndex) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) {
      this.score++;
      document.getElementById('score-val').textContent = `Aciertos: ${this.score}`;
      AudioManager.playSfx('correct');
    } else {
      AudioManager.playSfx('incorrect');
    }

    // Cargar retroalimentación (Dato Curioso)
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackText = document.getElementById('feedback-text');
    
    if (isCorrect) {
      feedbackTitle.innerHTML = '🟢 ¡RESPUESTA CORRECTA!';
      feedbackTitle.className = 'feedback-status correct';
    } else {
      feedbackTitle.innerHTML = selectedIndex === -1 ? '🔴 ¡TIEMPO AGOTADO!' : '🔴 ¡RESPUESTA INCORRECTA!';
      feedbackTitle.className = 'feedback-status incorrect';
    }
    
    feedbackText.innerHTML = `<strong>Respuesta correcta:</strong> ${q.options[correctIndex]}<br><br>${q.trivia}`;
    
    // Mostrar retroalimentación con scroll automático
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.style.display = 'block';
    feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Cambiar texto de botón siguiente si es la última pregunta
    const btnNext = document.getElementById('btn-next-question');
    if (this.currentQuestionIndex === 9) {
      btnNext.innerHTML = 'Finalizar Desafío 🏆';
    } else {
      btnNext.innerHTML = 'Siguiente Pregunta ➜';
    }
  },

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < 10) {
      this.loadQuestion();
    } else {
      this.showScreen('results');
    }
  },

  restartGame() {
    this.showScreen('intro');
    const nameInput = document.getElementById('player-name-input');
    nameInput.value = '';
    nameInput.focus();
  },

  // --- CONTROLES DE TECLADO ---
  setupEventListeners() {
    // Tecla Mute
    document.getElementById('btn-mute').addEventListener('click', () => {
      AudioManager.toggleMute();
    });

    // Botón Iniciar Juego
    document.getElementById('btn-start-game').addEventListener('click', () => {
      AudioManager.playSfx('click');
      this.startGame();
    });

    // Botón Siguiente Pregunta
    document.getElementById('btn-next-question').addEventListener('click', () => {
      AudioManager.playSfx('click');
      this.nextQuestion();
    });

    // Botón Volver a Jugar (Pantalla Resultados)
    document.getElementById('btn-restart').addEventListener('click', () => {
      AudioManager.playSfx('click');
      this.restartGame();
    });

    // Botón mostrar participantes
    document.getElementById('btn-show-participants').addEventListener('click', () => {
  AudioManager.playSfx('click');
  this.showParticipants();
    });

    // Canvas click detonar explosiones manuales en victoria
    document.getElementById('fireworks-canvas').addEventListener('click', (e) => {
      if (this.currentScreen === 'results' && this.score >= 8) {
        window.FireworksEngine.triggerManualExplosion(e.clientX, e.clientY);
      }
    });

    // Escuchador global de teclado
    document.addEventListener('keydown', (e) => {
      const key = e.key.toUpperCase();
      
      // Control de volumen rápido (tecla 'M')
      if (key === 'M') {
        AudioManager.toggleMute();
        return;
      }

      switch (this.currentScreen) {
        case 'intro':
          // Presionar Enter o Espacio para empezar
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.getElementById('btn-start-game').click();
          }
          break;
          
        case 'game':
          if (!this.hasAnswered) {
            // Teclas 1, 2, 3, 4 o A, B, C, D para responder
            if (['1', '2', '3', '4'].includes(key)) {
              e.preventDefault();
              const optIndex = parseInt(key) - 1;
              this.selectOptionByKey(optIndex);
            } else if (['A', 'B', 'C', 'D'].includes(key)) {
              e.preventDefault();
              const letterMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
              this.selectOptionByKey(letterMap[key]);
            }
          } else {
            // Si ya respondió, Enter o Espacio avanza a la siguiente
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              document.getElementById('btn-next-question').click();
            }
          }
          break;
          
        case 'results':
          // Presionar Enter o Espacio para reiniciar
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.getElementById('btn-restart').click();
          }
          break;
      }
    });
  },

  selectOptionByKey(index) {
    const options = document.querySelectorAll('.option-btn');
    if (options && options[index]) {
      options[index].focus();
      // Pequeña animación visual antes de registrar la respuesta
      options[index].style.transform = 'scale(0.97)';
      setTimeout(() => {
        options[index].style.transform = '';
        this.handleAnswer(index);
      }, 100);
    }
  },

  // --- TRIVIA ADMIN PANEL (Easter Egg) ---
  setupSecretAdminTrigger() {
    let typed = '';
    const secretWord = 'CARTOPEL';
    
    // 1. Escuchar por teclado la palabra secreta
    document.addEventListener('keypress', (e) => {
      typed += String.fromCharCode(e.which).toUpperCase();
      if (typed.length > secretWord.length) {
        typed = typed.substring(typed.length - secretWord.length);
      }
      if (typed === secretWord) {
        this.showAdminPanel();
        typed = '';
      }
    });

    // 2. Escuchar por clic largo en el logo de Cartopel en el Header
    const logo = document.getElementById('logo-trigger');
    let logoTimer;
    
    logo.addEventListener('mousedown', () => {
      logoTimer = setTimeout(() => {
        this.showAdminPanel();
      }, 3000); // 3 segundos presionado
    });
    
    logo.addEventListener('mouseup', () => clearTimeout(logoTimer));
    logo.addEventListener('mouseleave', () => clearTimeout(logoTimer));
    logo.addEventListener('touchstart', () => {
      logoTimer = setTimeout(() => {
        this.showAdminPanel();
      }, 3000);
    });
    logo.addEventListener('touchend', () => clearTimeout(logoTimer));

    // Botones de cierre y reinicio del Admin
    document.getElementById('btn-close-admin').addEventListener('click', () => {
      document.getElementById('admin-modal').classList.remove('active');
    });

    document.getElementById('btn-close-participants').addEventListener('click', () => {
      document.getElementById('participants-modal').classList.remove('active');
    });

    document.getElementById('btn-reset-stats').addEventListener('click', () => {
      if (confirm('¿Está seguro de reiniciar todas las estadísticas del stand?')) {
        StatsManager.resetStats();
        this.updateAdminDashboard();
        alert('Estadísticas reiniciadas.');
      }
    });
  },

  showAdminPanel() {
    this.updateAdminDashboard();
    document.getElementById('admin-modal').classList.add('active');
  },

  updateAdminDashboard() {
    const stats = StatsManager.getStats();
    document.getElementById('stat-plays').textContent = stats.plays;
    document.getElementById('stat-wins').textContent = stats.wins;
    document.getElementById('stat-loses').textContent = stats.loses;
    
    // Tasa de éxito
    const rate = stats.plays > 0 ? Math.round((stats.wins / stats.plays) * 100) : 0;
    document.getElementById('stat-rate').textContent = `${rate}%`;
  },

  showParticipants() {

    const stats = StatsManager.getStats();
    const tbody = document.getElementById('participants-list');
    tbody.innerHTML = '';
    if (!stats.participants || stats.participants.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align:center;">
                    No existen participantes registrados
                </td>
            </tr>
        `;

    } else {
        stats.participants.forEach(player => {

            tbody.innerHTML += `
                <tr>
                    <td>${player.name}</td>
                    <td>${player.score}/10</td>
                    <td>${player.date}</td>
                </tr>
            `;
        });

    }
    document
      .getElementById('participants-modal')
      .classList.add('active');

  }
};

// Iniciar aplicación al cargar
window.addEventListener('DOMContentLoaded', () => {
  Game.init();
});
