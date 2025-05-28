class SceneManager {
    constructor(gameEngine) {
        this.gameEngine = gameEngine;
        this.currentScene = null;
    }

    loadScene(chapter, sceneId) {
        // Get scene data from story
        const chapterData = storyData[chapter];
        if (!chapterData) {
            console.error(`Chapter ${chapter} not found!`);
            return;
        }

        const scene = chapterData.scenes[sceneId];
        if (!scene) {
            console.error(`Scene ${sceneId} not found in chapter ${chapter}!`);
            return;
        }

        // Update game state
        this.gameEngine.gameState.chapter = chapter;
        this.gameEngine.gameState.scene = sceneId;
        this.currentScene = scene;

        // Apply scene transition
        this.applyTransition(() => {
            // Update UI with scene data
            const sceneData = {
                ...scene,
                chapter: chapter,
                chapterName: chapterData.name,
                chapterTitle: chapterData.title
            };
            this.gameEngine.updateUI(sceneData);

            // Apply scene effects
            if (scene.onEnter) {
                this.executeSceneEffects(scene.onEnter);
            }

            // Check for automatic progression
            if (scene.autoNext) {
                setTimeout(() => {
                    this.loadScene(chapter, scene.autoNext);
                }, scene.delay || 3000);
            }
        });
    }

    nextScene() {
        if (this.currentScene && this.currentScene.next) {
            this.loadScene(this.gameEngine.gameState.chapter, this.currentScene.next);
        } else if (this.currentScene && this.currentScene.nextChapter) {
            // Go to specific next chapter
            this.loadScene(this.currentScene.nextChapter, 'start');
        } else {
            // Try to go to next chapter
            const nextChapter = this.getNextChapter();
            if (nextChapter) {
                this.loadScene(nextChapter, 'start');
            } else {
                // Game end
                this.showGameEnd();
            }
        }
    }

    getNextChapter() {
        const chapters = ['prologue', 'chapter1', 'chapter2', 'chapter3', 'chapter4']; // Add more as we create them
        const currentIndex = chapters.indexOf(this.gameEngine.gameState.chapter);
        if (currentIndex !== -1 && currentIndex < chapters.length - 1) {
            return chapters[currentIndex + 1];
        }
        return null;
    }

    applyTransition(callback) {
        const textBox = document.querySelector('.text-box');
        const choicesContainer = document.getElementById('choices-container');
        
        // Fade out
        textBox.style.opacity = '0';
        choicesContainer.style.opacity = '0';
        
        setTimeout(() => {
            callback();
            // Fade in
            textBox.style.opacity = '1';
            choicesContainer.style.opacity = '1';
        }, 300);
    }

    executeSceneEffects(effects) {
        if (effects.setBackground) {
            this.setBackground(effects.setBackground);
        }
        
        if (effects.playSound) {
            // this.playSound(effects.playSound);
        }
        
        if (effects.showCharacters) {
            this.showCharacters(effects.showCharacters);
        }
        
        if (effects.weather) {
            this.setWeatherEffect(effects.weather);
        }
    }

    setBackground(backgroundType) {
        const backgroundLayer = document.querySelector('.background-layer');
        const backgrounds = {
            desert: 'linear-gradient(to bottom, #87CEEB 0%, #DEB887 60%, #CD853F 100%)',
            night: 'linear-gradient(to bottom, #191970 0%, #000080 50%, #000033 100%)',
            sunset: 'linear-gradient(to bottom, #FF6347 0%, #FF8C00 50%, #8B4513 100%)',
            town: 'linear-gradient(to bottom, #87CEEB 0%, #B0C4DE 50%, #8B7355 100%)',
            saloon: 'linear-gradient(to bottom, #8B4513 0%, #654321 50%, #3E2723 100%)',
            campfire: 'radial-gradient(circle at 50% 100%, #FF6347 0%, #8B0000 40%, #000000 100%)'
        };
        
        if (backgrounds[backgroundType]) {
            backgroundLayer.style.background = backgrounds[backgroundType];
        }
    }

    showCharacters(characterList) {
        const portraits = document.querySelectorAll('.portrait');
        
        // Hide all portraits first
        portraits.forEach(p => {
            p.style.display = 'none';
            p.classList.remove('character-enter');
        });
        
        // Show specified characters
        characterList.forEach((charName, index) => {
            if (index < portraits.length && characters[charName]) {
                const portrait = portraits[index];
                portrait.style.display = 'block';
                portrait.style.backgroundColor = characters[charName].color;
                
                // Add entrance animation
                setTimeout(() => {
                    portrait.classList.add('character-enter');
                }, index * 100);
            }
        });
    }

    setWeatherEffect(weather) {
        // Remove existing weather effects
        document.querySelectorAll('.weather-effect').forEach(el => el.remove());
        
        switch(weather) {
            case 'dust':
                this.createDustEffect();
                break;
            case 'rain':
                this.createRainEffect();
                break;
            case 'storm':
                this.createStormEffect();
                break;
        }
    }

    createDustEffect() {
        const container = document.getElementById('game-screen');
        for (let i = 0; i < 10; i++) {
            const dust = document.createElement('div');
            dust.className = 'dust-particle weather-effect';
            dust.style.left = Math.random() * 100 + '%';
            dust.style.animationDelay = Math.random() * 15 + 's';
            dust.style.animationDuration = (15 + Math.random() * 10) + 's';
            container.appendChild(dust);
        }
    }

    createRainEffect() {
        // Implement rain effect
    }

    createStormEffect() {
        const container = document.getElementById('game-screen');
        
        // Lightning flashes
        const flash = () => {
            const lightning = document.createElement('div');
            lightning.className = 'lightning-flash weather-effect';
            container.appendChild(lightning);
            setTimeout(() => lightning.remove(), 200);
            
            // Random next flash
            setTimeout(flash, Math.random() * 5000 + 2000);
        };
        
        setTimeout(flash, 1000);
    }

    showGameEnd() {
        const endScreen = document.createElement('div');
        endScreen.className = 'screen active';
        endScreen.innerHTML = `
            <div class="end-screen-content" style="text-align: center; padding-top: 20vh;">
                <h1 style="color: #DEB887; font-size: 3rem; margin-bottom: 2rem;">The End</h1>
                <p style="color: #F5DEB3; font-size: 1.5rem; margin-bottom: 3rem;">Thank you for playing Dust and Redemption</p>
                <button class="menu-button" onclick="location.reload()">Return to Main Menu</button>
            </div>
        `;
        document.getElementById('game-container').appendChild(endScreen);
    }
}