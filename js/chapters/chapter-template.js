// Chapter X: [Title]
// This is a template for creating new chapters
// Copy this file and rename it to chapterX.js where X is the chapter number

storyData.chapterX = {
    name: "Chapter X",
    title: "[Chapter Title]",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "[Opening narration]",
            next: "scene_name"
        },
        
        scene_name: {
            speaker: "[Character Name or Narrator]",
            text: "[Scene text]",
            choices: [
                {
                    text: "[Choice 1 text]",
                    next: "next_scene_1",
                    effects: {
                        flags: { flag_name: true },
                        relationships: { character1_character2_trust: 10 }
                    }
                },
                {
                    text: "[Choice 2 text]",
                    next: "next_scene_2",
                    effects: {
                        flags: { flag_name: true }
                    }
                },
                {
                    text: "[Choice 3 text - requires flag]",
                    next: "next_scene_3",
                    requires: {
                        flags: { some_previous_flag: true }
                    }
                }
            ]
        },
        
        // Add more scenes here
        
        chapter_end: {
            speaker: "Narrator",
            text: "[Chapter ending text]",
            choices: [
                {
                    text: "Continue to Chapter X+1",
                    next: null,
                    nextChapter: "chapterX+1"
                }
            ]
        }
    }
};

// Remember to:
// 1. Update the chapter number in storyData.chapterX
// 2. Add meaningful scene names
// 3. Include speaker names (character or "Narrator")
// 4. Add effects for choices that matter
// 5. Use requires for choices that depend on previous decisions
// 6. Update index.html to include this file
// 7. Update scene-manager.js getNextChapter() array
// 8. Update debug panel in game-engine.js