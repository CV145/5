class SaveSystem {
    constructor(gameEngine) {
        this.gameEngine = gameEngine;
        this.saveKey = 'dustAndRedemption_save';
        this.autoSaveInterval = null;
    }

    save(gameState) {
        try {
            const saveData = {
                ...gameState,
                timestamp: new Date().toISOString(),
                version: '1.0'
            };
            localStorage.setItem(this.saveKey, JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error('Failed to save game:', error);
            return false;
        }
    }

    load() {
        try {
            const saveData = localStorage.getItem(this.saveKey);
            if (saveData) {
                return JSON.parse(saveData);
            }
            return null;
        } catch (error) {
            console.error('Failed to load save game:', error);
            return null;
        }
    }

    deleteSave() {
        localStorage.removeItem(this.saveKey);
    }

    enableAutoSave(intervalMinutes = 5) {
        this.autoSaveInterval = setInterval(() => {
            this.save(this.gameEngine.gameState);
            this.gameEngine.showNotification('Auto-saved');
        }, intervalMinutes * 60 * 1000);
    }

    disableAutoSave() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
            this.autoSaveInterval = null;
        }
    }
}