// Chapter 13: [Title]
storyData.chapter13 = {
    name: "Chapter 13",
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
                    text: "Continue to Chapter 14",
                    next: null,
                    nextChapter: "chapter14"
                }
            ]
        }
    }
}; 