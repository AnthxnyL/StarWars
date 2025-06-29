(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const sound = document.getElementById('sound');
    const btn = document.getElementById('sound-toggle');
    const icon = document.getElementById('megaphone-icon');

    if (!sound || !btn || !icon) return;

    // Démarre le son au premier clic utilisateur (si pas déjà lancé)
    document.addEventListener('click', function initAudio() {
      if (sound.paused) {
        sound.muted = false;
        sound.play();
      }
    }, { once: true });

    function updateIcon() {
      icon.innerHTML = sound.muted
        ? `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffe81f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 11v2a1 1 0 0 0 1 1h2l5 5V5L6 11H4a1 1 0 0 0-1 1z"/>
            <path d="M16 8a5 5 0 0 1 0 8"/>
            <line x1="2" y1="2" x2="22" y2="22" stroke="#ffe81f"/>
          </svg>`
        : `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffe81f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 11v2a1 1 0 0 0 1 1h2l5 5V5L6 11H4a1 1 0 0 0-1 1z"/>
            <path d="M16 8a5 5 0 0 1 0 8"/>
          </svg>`;
    }

    updateIcon();

    btn.addEventListener('click', () => {
      sound.muted = !sound.muted;
      updateIcon();
    });
  });
})();