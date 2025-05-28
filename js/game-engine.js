class GameEngine {
    constructor() {
        this.currentScene = null;
        this.currentChapter = 0;
        this.gameState = {
            chapter: 0,
            scene: 'start',
            relationships: JSON.parse(JSON.stringify(relationships)),
            flags: {},
            history: [],
            choices: {},
            choiceHistory: []
        };
        this.sceneManager = null;
        this.saveSystem = null;
        this.debugMode = false;
    }

    init() {
        this.sceneManager = new SceneManager(this);
        this.saveSystem = new SaveSystem(this);
        this.bindEvents();
        this.showMainMenu();
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.toggleMenu();
            }
            
            // Debug mode toggle
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                e.preventDefault();
                this.toggleDebugMode();
            }
        });
    }

    showMainMenu() {
        this.hideAllScreens();
        document.getElementById('main-menu').classList.add('active');
    }

    startNewGame() {
        this.resetGameState();
        this.hideAllScreens();
        document.getElementById('game-screen').classList.add('active');
        this.sceneManager.loadScene('prologue', 'start');
    }

    loadGame() {
        const loadedState = this.saveSystem.load();
        if (loadedState) {
            this.gameState = loadedState;
            
            // Ensure all required properties exist (for backward compatibility)
            if (!this.gameState.choiceHistory) {
                this.gameState.choiceHistory = [];
            }
            
            this.hideAllScreens();
            document.getElementById('game-screen').classList.add('active');
            this.sceneManager.loadScene(this.gameState.chapter, this.gameState.scene);
        } else {
            alert('No save game found!');
        }
    }

    quickSave() {
        this.saveSystem.save(this.gameState);
        this.showNotification('Game saved!');
    }

    showCredits() {
        alert('Dust and Redemption\n\nA Western Interactive Novel\n\nCreated with JavaScript, HTML, and CSS\n\n© 2025');
    }

    toggleMenu() {
        // Implement pause menu
    }

    toggleHistory() {
        // Show dialogue history
    }

    resetGameState() {
        this.gameState = {
            chapter: 0,
            scene: 'start',
            relationships: JSON.parse(JSON.stringify(relationships)),
            flags: {},
            history: [],
            choices: {},
            choiceHistory: []
        };
    }

    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }

    updateUI(scene) {
        // Update chapter info
        if (scene.chapter !== undefined) {
            document.getElementById('chapter-number').textContent = scene.chapterName || `Chapter ${scene.chapter}`;
            document.getElementById('chapter-title').textContent = scene.chapterTitle || '';
        }

        // Update speaker and text
        const speakerElement = document.getElementById('speaker-name');
        const textElement = document.getElementById('story-text');
        
        if (scene.speaker) {
            speakerElement.textContent = scene.speaker;
            speakerElement.style.display = 'block';
            this.highlightSpeaker(scene.speaker);
        } else {
            speakerElement.style.display = 'none';
            this.clearSpeakerHighlights();
        }

        // Animate text
        textElement.style.opacity = '0';
        setTimeout(() => {
            textElement.innerHTML = scene.text;
            textElement.style.opacity = '1';
        }, 200);

        // Update choices
        this.updateChoices(scene.choices);

        // Add to history
        this.gameState.history.push({
            speaker: scene.speaker || 'Narrator',
            text: scene.text
        });
    }

    updateChoices(choices) {
        const container = document.getElementById('choices-container');
        container.innerHTML = '';

        if (!choices || choices.length === 0) {
            // Add continue button if no choices
            const continueBtn = document.createElement('button');
            continueBtn.className = 'choice-button';
            continueBtn.textContent = 'Continue';
            continueBtn.onclick = () => this.sceneManager.nextScene();
            container.appendChild(continueBtn);
        } else {
            choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.className = 'choice-button';
                button.textContent = choice.text;
                
                // Check if choice has requirements
                if (choice.requires && !this.checkRequirements(choice.requires)) {
                    button.disabled = true;
                    button.style.opacity = '0.5';
                    button.style.cursor = 'not-allowed';
                }
                
                button.onclick = () => this.makeChoice(choice, index);
                container.appendChild(button);
            });
        }
    }

    makeChoice(choice, index) {
        // Record choice
        const currentScene = `${this.gameState.chapter}_${this.gameState.scene}`;
        this.gameState.choices[currentScene] = index;
        
        // Ensure choiceHistory exists (for backward compatibility with old saves)
        if (!this.gameState.choiceHistory) {
            this.gameState.choiceHistory = [];
        }
        
        // Record detailed choice history for future reference
        this.gameState.choiceHistory.push({
            chapter: this.gameState.chapter,
            scene: this.gameState.scene,
            choiceIndex: index,
            choiceText: choice.text,
            effects: choice.effects || {},
            timestamp: Date.now()
        });

        // Apply effects
        if (choice.effects) {
            this.applyEffects(choice.effects);
        }

        // Go to next scene
        if (choice.next) {
            this.sceneManager.loadScene(this.gameState.chapter, choice.next);
        } else {
            this.sceneManager.nextScene();
        }
    }

    applyEffects(effects) {
        if (effects.relationships) {
            for (const [key, value] of Object.entries(effects.relationships)) {
                const [char1, char2, type] = key.split('_');
                updateRelationship(char1, char2, type, value);
            }
        }

        if (effects.flags) {
            Object.assign(this.gameState.flags, effects.flags);
        }
    }

    checkRequirements(requires) {
        if (requires.flags) {
            for (const [flag, value] of Object.entries(requires.flags)) {
                if (this.gameState.flags[flag] !== value) {
                    return false;
                }
            }
        }

        if (requires.relationships) {
            for (const [key, minValue] of Object.entries(requires.relationships)) {
                const [char1, char2, type] = key.split('_');
                if (getRelationship(char1, char2, type) < minValue) {
                    return false;
                }
            }
        }

        return true;
    }

    highlightSpeaker(speakerName) {
        // Clear all highlights
        document.querySelectorAll('.portrait').forEach(p => p.classList.remove('speaking'));

        // Skip if narrator
        if (speakerName === 'Narrator') return;

        // Find and highlight the speaking character
        const character = Object.values(characters).find(char => 
            char.name === speakerName || 
            char.name.includes(speakerName) || 
            speakerName.includes(char.name.split(' ')[0]) // Match first name
        );

        if (character) {
            const charKey = Object.keys(characters).find(key => characters[key] === character);
            const portraitIndex = ['elijah', 'maria', 'thomas', 'jacob'].indexOf(charKey);
            if (portraitIndex !== -1) {
                document.getElementById(`portrait-${portraitIndex + 1}`).classList.add('speaking');
            }
        }
    }

    clearSpeakerHighlights() {
        document.querySelectorAll('.portrait').forEach(p => p.classList.remove('speaking'));
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(139, 69, 19, 0.9);
            color: #F5DEB3;
            padding: 1rem 2rem;
            border-radius: 5px;
            border: 2px solid #DEB887;
            z-index: 1000;
            animation: fadeIn 0.3s ease-in;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Debug Mode Functions
    toggleDebugMode() {
        this.debugMode = !this.debugMode;
        
        if (this.debugMode) {
            this.showDebugPanel();
            this.showNotification('Debug mode enabled');
        } else {
            this.hideDebugPanel();
            this.showNotification('Debug mode disabled');
        }
    }

    showDebugPanel() {
        // Remove existing debug panel
        const existingPanel = document.getElementById('debug-panel');
        if (existingPanel) {
            existingPanel.remove();
        }

        const debugPanel = document.createElement('div');
        debugPanel.id = 'debug-panel';
        debugPanel.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.9);
            color: #00ff00;
            padding: 20px;
            border: 2px solid #00ff00;
            border-radius: 5px;
            font-family: 'Courier Prime', monospace;
            font-size: 12px;
            z-index: 10000;
            max-width: 400px;
            max-height: 80vh;
            overflow-y: auto;
        `;

        debugPanel.innerHTML = `
            <h3 style="margin: 0 0 15px 0; color: #00ff00;">DEBUG PANEL</h3>
            
            <div style="margin-bottom: 15px;">
                <strong>Chapter Navigation:</strong><br>
                <button id="debug-prologue" style="margin: 2px;">Prologue</button>
                <button id="debug-chapter1" style="margin: 2px;">Chapter 1</button>
                <button id="debug-chapter2" style="margin: 2px;">Chapter 2</button>
                <button id="debug-chapter3" style="margin: 2px;">Chapter 3</button>
                <button id="debug-chapter4" style="margin: 2px;">Chapter 4</button>
                <button id="debug-chapter5" style="margin: 2px;">Chapter 5</button>
                <button id="debug-chapter6" style="margin: 2px;">Chapter 6</button>
                <button id="debug-chapter7" style="margin: 2px;">Chapter 7</button>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>Current State:</strong><br>
                Chapter: ${this.gameState.chapter}<br>
                Scene: ${this.gameState.scene}
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>Relationships:</strong><br>
                ${this.getRelationshipDebugInfo()}
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>Flags:</strong><br>
                ${JSON.stringify(this.gameState.flags, null, 2)}
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>Choice History:</strong><br>
                ${this.getChoiceHistoryDebugInfo()}
            </div>
            
            <div>
                <button id="debug-close" style="background: #ff0000; color: white; padding: 5px 10px;">Close Debug</button>
                <button id="debug-export" style="background: #0066cc; color: white; padding: 5px 10px; margin-left: 5px;">Export State</button>
            </div>
        `;

        document.body.appendChild(debugPanel);

        // Add event listeners for all buttons after they're in the DOM
        document.getElementById('debug-prologue').onclick = () => this.debugJumpTo('prologue', 'start');
        document.getElementById('debug-chapter1').onclick = () => this.debugJumpTo('chapter1', 'start');
        document.getElementById('debug-chapter2').onclick = () => this.debugJumpTo('chapter2', 'start');
        document.getElementById('debug-chapter3').onclick = () => this.debugJumpTo('chapter3', 'start');
        document.getElementById('debug-chapter4').onclick = () => this.debugJumpTo('chapter4', 'start');
        document.getElementById('debug-chapter5').onclick = () => this.debugJumpTo('chapter5', 'ritual_trap');
        document.getElementById('debug-chapter6').onclick = () => this.debugJumpTo('chapter6', 'start');
        document.getElementById('debug-chapter7').onclick = () => this.debugJumpTo('chapter7', 'start');
        document.getElementById('debug-close').onclick = () => this.hideDebugPanel();
        document.getElementById('debug-export').onclick = () => this.exportGameState();
    }

    hideDebugPanel() {
        const debugPanel = document.getElementById('debug-panel');
        if (debugPanel) {
            debugPanel.remove();
        }
    }

    debugJumpTo(chapter, scene) {
        // Ensure game screen is active
        this.hideAllScreens();
        document.getElementById('game-screen').classList.add('active');
        
        this.sceneManager.loadScene(chapter, scene);
        this.showNotification(`Jumped to ${chapter} - ${scene}`);
        // Refresh debug panel after a short delay to ensure game state is updated
        setTimeout(() => {
            if (this.debugMode) {
                this.showDebugPanel();
            }
        }, 100);
    }

    getRelationshipDebugInfo() {
        let info = '';
        for (const [key, value] of Object.entries(this.gameState.relationships.trust)) {
            info += `${key}: Trust ${value}, Tension ${this.gameState.relationships.tension[key] || 0}<br>`;
        }
        return info;
    }

    getChoiceHistoryDebugInfo() {
        if (!this.gameState.choiceHistory || this.gameState.choiceHistory.length === 0) {
            return 'No choices made yet';
        }
        
        return this.gameState.choiceHistory.slice(-5).map(choice => 
            `${choice.chapter}/${choice.scene}: "${choice.choiceText}"`
        ).join('<br>');
    }

    exportGameState() {
        const dataStr = JSON.stringify(this.gameState, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'dust_and_redemption_save.json';
        link.click();
        
        this.showNotification('Game state exported');
    }

    // Helper method to check if player made specific choice
    hasPlayerMadeChoice(chapter, scene, choiceText) {
        if (!this.gameState.choiceHistory) return false;
        
        return this.gameState.choiceHistory.some(choice => 
            choice.chapter === chapter && 
            choice.scene === scene && 
            choice.choiceText.includes(choiceText)
        );
    }

    // Helper method to get choice from specific scene
    getPlayerChoice(chapter, scene) {
        if (!this.gameState.choiceHistory) return null;
        
        return this.gameState.choiceHistory.find(choice => 
            choice.chapter === chapter && choice.scene === scene
        );
    }
}