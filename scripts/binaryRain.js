class MatrixRain {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    // Configurações para ficar apenas no header
    this.header = document.querySelector('.header');

    this.canvas.style.position = 'absolute'; // Mudei para absolute
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.zIndex = '-1';
    this.canvas.style.pointerEvents = 'none';

    // Configurações do efeito Matrix
    this.chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.fontSize = 16;
    this.columns = 0;
    this.drops = [];
    this.animationId = null;

    // Configurações de velocidade
    this.frameCount = 0;
    this.charChangeSpeed = 4;

    // Limite de fade
    this.fadeStart = 10;
    this.fadeEnd = 150;

    // Cores em branco com diferentes intensidades
    this.colors = [
      'rgba(255, 255, 255, .5)',
      'rgba(255, 255, 255, 0.3)',
      'rgba(255, 255, 255, 0.2)',
      'rgba(255, 255, 255, 0.1)',
      'rgba(255, 255, 255, 0.01)'
    ];

    this.init();
    this.setupEventListeners();
  }

  init() {
    this.resize();
    this.animate();
  }

  resize() {
    // Usa apenas a altura do header
    const headerRect = this.header.getBoundingClientRect();
    this.canvas.width = window.innerWidth;
    this.canvas.height = headerRect.height;
    this.canvas.style.height = headerRect.height + 'px';

    this.columns = Math.floor(this.canvas.width / (this.fontSize * 1.5));

    // Inicializa as colunas com posições Y mais distribuídas
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      // Distribui as colunas em diferentes alturas para não começarem todas juntas
      const startY = -100 - (Math.random() * 500);
      const startDelay = Math.floor(Math.random() * 60);

      this.drops[i] = {
        y: startY,
        speed: 1 + Math.random() * 2,
        length: 8 + Math.floor(Math.random() * 20),
        chars: [],
        x: i * (this.fontSize * 1.5),
        lastCharChange: 0,
        active: startDelay === 0,
        startDelay: startDelay,
        currentDelay: startDelay
      };
    }
  }

  draw() {
    // FUNDO COMPLETAMENTE TRANSPARENTE
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = `bold ${this.fontSize}px 'Courier New', monospace`;
    this.ctx.textAlign = 'center';

    this.frameCount++;

    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];

      // Aplica delay inicial para distribuir o início
      if (!drop.active) {
        drop.currentDelay--;
        if (drop.currentDelay <= 0) {
          drop.active = true;
        } else {
          continue;
        }
      }

      // Muda caractere apenas a cada X frames (mais lento)
      if (this.frameCount - drop.lastCharChange >= this.charChangeSpeed) {
        const char = this.chars[Math.floor(Math.random() * this.chars.length)];

        // Adiciona o novo caractere no início do array
        drop.chars.unshift({
          char: char,
          x: drop.x,
          y: drop.y,
          brightness: 1
        });

        drop.lastCharChange = this.frameCount;
      }

      // Limita o número de caracteres por coluna
      if (drop.chars.length > drop.length) {
        drop.chars.pop();
      }

      // Desenha todos os caracteres da coluna com espaçamento vertical
      for (let j = 0; j < drop.chars.length; j++) {
        const charData = drop.chars[j];

        // Calcula o brilho baseado na posição na coluna
        const brightness = 1 - (j / drop.chars.length);

        // Escolhe a cor baseada no brilho
        let colorIndex = Math.floor((1 - brightness) * (this.colors.length - 1));
        colorIndex = Math.min(colorIndex, this.colors.length - 1);

        let opacity = this.colors[colorIndex].split(',')[3].replace(')', '');

        // Aplica fade baseado na posição Y
        if (charData.y > this.fadeStart) {
          const fadeProgress = (charData.y - this.fadeStart) / (this.fadeEnd - this.fadeStart);
          const fadeOpacity = Math.max(0, 1 - fadeProgress);
          opacity = Math.min(parseFloat(opacity), fadeOpacity);
        }

        this.ctx.fillStyle = `rgba(205, 214, 244, ${opacity})`;

        // Posição Y com espaçamento vertical
        const yPos = charData.y + (j * this.fontSize * 1.3);
        this.ctx.fillText(charData.char, charData.x + this.fontSize / 2, yPos);

        // Atualiza a posição Y apenas para o caractere principal
        if (j === 0) {
          charData.y += drop.speed;
        }
      }

      // Move a coluna principal para baixo
      drop.y += drop.speed;

      // Reinicia a coluna quando sai da tela ou desaparece completamente
      if (drop.y > this.fadeEnd || drop.y > this.canvas.height + (drop.length * this.fontSize)) {
        drop.y = -drop.length * this.fontSize;
        drop.speed = 1 + Math.random() * 2;
        drop.length = 8 + Math.floor(Math.random() * 20);
        drop.chars = [];
        drop.lastCharChange = this.frameCount;
        // Mantém um delay pequeno no reset para não reiniciar todas juntas
        drop.startDelay = Math.floor(Math.random() * 30);
        drop.currentDelay = drop.startDelay;
        drop.active = drop.startDelay === 0;
      }
    }
  }

  animate() {
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
    });

    // Observa mudanças no header (como rolagem da página)
    const observer = new ResizeObserver(() => {
      this.resize();
    });

    if (this.header) {
      observer.observe(this.header);
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Inicializa
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    new MatrixRain();
  }, 100);
});
