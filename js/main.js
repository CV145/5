// Initialize the game when the page loads
let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new GameEngine();
    window.game = game; // Make game globally accessible
    game.init();
    
    // Add some visual polish
    addDustParticles();
    initializePortraits();
    
    // Enable auto-save
    if (game.saveSystem) {
        game.saveSystem.enableAutoSave(3); // Auto-save every 3 minutes
    }
});

// Add atmospheric dust particles
function addDustParticles() {
    const gameScreen = document.getElementById('game-screen');
    for (let i = 0; i < 5; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.animationDelay = Math.random() * 15 + 's';
        dust.style.animationDuration = (15 + Math.random() * 10) + 's';
        gameScreen.appendChild(dust);
    }
}

// Initialize character portraits with initials
function initializePortraits() {
    const portraitData = [
        { id: 'portrait-1', initial: 'E', color: '#8B4513' },
        { id: 'portrait-2', initial: 'M', color: '#CD853F' },
        { id: 'portrait-3', initial: 'T', color: '#2F4F4F' },
        { id: 'portrait-4', initial: 'J', color: '#4682B4' }
    ];
    
    portraitData.forEach(data => {
        const portrait = document.getElementById(data.id);
        if (portrait) {
            portrait.innerHTML = `<span class="portrait-initial">${data.initial}</span>`;
            portrait.style.backgroundColor = data.color;
        }
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (!game) return;
    
    // Quick save
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        game.quickSave();
    }
    
    // Quick load
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        game.loadGame();
    }
    
    // Debug mode (handled in game engine)
    // Ctrl+Shift+D is handled in game-engine.js
    
    // Number keys for choices
    if (e.key >= '1' && e.key <= '9') {
        const choiceIndex = parseInt(e.key) - 1;
        const choices = document.querySelectorAll('.choice-button');
        if (choices[choiceIndex] && !choices[choiceIndex].disabled) {
            choices[choiceIndex].click();
        }
    }
    
    // Space or Enter to continue
    if (e.key === ' ' || e.key === 'Enter') {
        const choices = document.querySelectorAll('.choice-button');
        if (choices.length === 1 && choices[0].textContent === 'Continue') {
            e.preventDefault();
            choices[0].click();
        }
    }
});

// Add some CSS animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});