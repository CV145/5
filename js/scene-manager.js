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
                if (typeof scene.onEnter === 'function') {
                    scene.onEnter();
                } else {
                    this.executeSceneEffects(scene.onEnter);
                }
            }
            
            // Apply new effects structure
            if (scene.effects) {
                this.applySceneEffects(scene.effects);
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
            const startingScene = this.getStartingScene(this.currentScene.nextChapter);
            this.loadScene(this.currentScene.nextChapter, startingScene);
        } else {
            // Try to go to next chapter
            const nextChapter = this.getNextChapter();
            if (nextChapter) {
                const startingScene = this.getStartingScene(nextChapter);
                this.loadScene(nextChapter, startingScene);
            } else {
                // Game end
                this.showGameEnd();
            }
        }
    }

    getNextChapter() {
        const chapters = ['prologue', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7', 'chapter8', 'chapter9', 'chapter10', 'chapter11', 'chapter12', 'chapter13', 'chapter14', 'chapter15', 'chapter16', 'chapter17', 'chapter18', 'chapter19', 'chapter20'];
        const currentIndex = chapters.indexOf(this.gameEngine.gameState.chapter);
        if (currentIndex !== -1 && currentIndex < chapters.length - 1) {
            return chapters[currentIndex + 1];
        }
        return null;
    }

    getStartingScene(chapter) {
        // Define the starting scene for each chapter
        const startingScenes = {
            'prologue': 'start',
            'chapter1': 'start', 
            'chapter2': 'start',
            'chapter3': 'start',
            'chapter4': 'start',
            'chapter5': 'start',
            'chapter6': 'start',
            'chapter7': 'start',
            'chapter8': 'start',
            'chapter9': 'start',
            'chapter10': 'start',
            'chapter11': 'start',
            'chapter12': 'start',
            'chapter13': 'start',
            'chapter14': 'start',
            'chapter15': 'start',
            'chapter16': 'start',
            'chapter17': 'start',
            'chapter18': 'start',
            'chapter19': 'start',
            'chapter20': 'start'
        };
        return startingScenes[chapter] || 'start';
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
    
    applySceneEffects(effects) {
        // Text animations
        if (effects.textAnimation) {
            this.applyTextAnimation(effects.textAnimation);
        }
        
        // Background image
        if (effects.backgroundImage) {
            this.setBackgroundImage(effects.backgroundImage);
        }
        
        // Sound effects
        if (effects.soundEffect) {
            // this.playSoundEffect(effects.soundEffect);
        }
        
        if (effects.ambientSound) {
            // this.playAmbientSound(effects.ambientSound);
        }
        
        // Screen effects
        if (effects.screenEffect) {
            this.applyScreenEffect(effects.screenEffect);
        }
        
        // Character effects
        if (effects.characterSpotlight) {
            this.spotlightCharacter(effects.characterSpotlight);
        }
        
        if (effects.characterAnimation) {
            this.animateCharacter(effects.characterAnimation);
        }
        
        // Lighting
        if (effects.lighting) {
            this.setLighting(effects.lighting);
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
    
    applyTextAnimation(animationType) {
        const textElement = document.getElementById('story-text');
        textElement.className = 'story-text ' + animationType;
    }
    
    setBackgroundImage(imageName) {
        const backgroundLayer = document.querySelector('.background-layer');
        // For now, use placeholder gradients
        const images = {
            'desert-horizon.jpg': 'linear-gradient(to bottom, #87CEEB 0%, #DEB887 60%, #CD853F 100%)'
        };
        if (images[imageName]) {
            backgroundLayer.style.background = images[imageName];
        }
    }
    
    applyScreenEffect(effectType) {
        const gameScreen = document.getElementById('game-screen');
        gameScreen.className = 'screen active ' + effectType;
        
        // Remove effect after duration
        if (effectType.includes('flash') || effectType.includes('shake')) {
            setTimeout(() => {
                gameScreen.className = 'screen active';
            }, 1000);
        }
    }
    
    spotlightCharacter(characterName) {
        const portraits = document.querySelectorAll('.portrait');
        portraits.forEach(p => {
            if (p.dataset.character === characterName) {
                p.classList.add('spotlight');
            } else {
                p.classList.add('dimmed');
            }
        });
    }
    
    animateCharacter(animation) {
        // Implement character animations
    }
    
    setLighting(lightingType) {
        const gameScreen = document.getElementById('game-screen');
        gameScreen.dataset.lighting = lightingType;
    }
}