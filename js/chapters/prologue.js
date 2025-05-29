// Prologue: The Undertaker's Secret
storyData.prologue = {
    name: "Prologue",
    title: "The Undertaker's Secret",
    scenes: {
        // Scene 1: Perdition, 1882 - St. Catherine's Residential School Basement
        start: {
            speaker: "Narrator",
            text: "Perdition, 1882. Seventeen years before the turn of the century. In the damp, cold basement of St. Catherine's Residential School, young Samuel Crane, an undertaker's apprentice, feels his stomach churn. Rows of small, still bodies lay shrouded on the stone floor. Cornelius Pike, a man whose ambition was as vast as the territories he exploited, inspects them with a grim satisfaction. Beside him, Colonel Morrison, a government man with cold eyes and a starched collar, makes notes in a ledger.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Prologue');
                // Optional: set a flag for the year or specific event
                // updateStoryVariable('flags.prologue.year_1882_established', true);
            },
            next: "pike_inspection"
        },

        // Scene 2: The Inspection and Cause of Death
        pike_inspection: {
            speaker: "Cornelius Pike",
            text: "'A pity, this fever. Took so many of them so quickly.' Pike's voice is devoid of emotion. 'But their contribution to... progress... will be remembered.'",
            next: "crane_knowledge"
        },

        crane_knowledge: {
            speaker: "Narrator",
            text: "Samuel Crane knows it wasn't fever. He'd seen the tremors, the vacant stares before these Native American children were brought here. He'd heard the whispers from the older townsfolk about Pike's illegal mining operation upriver, the one the children were forced to work in. Mercury. That's what killed them. Slow, agonizing poisoning.",
            next: "pike_order"
        },

        // Scene 3: Pike's Order
        pike_order: {
            speaker: "Cornelius Pike",
            text: "'Crane.' Pike turns his gaze, sharp and dangerous, to the young apprentice. 'You'll see these... unfortunate souls are properly disposed of. A mass grave, out by the old cottonwoods. No markers. No questions. Understand?'",
            next: "pike_threat"
        },

        // Scene 4: The Threat
        pike_threat: {
            speaker: "Cornelius Pike",
            text: "'Your family runs a respectable business here in Perdition, Samuel. It would be a shame if something unfortunate were to happen to them because of loose talk or... hesitation.' The threat is clear, wrapped in a thin veneer of civility.",
            next: "crane_loading_bodies"
        },

        // Scene 5: Loading the Bodies & Sarah Crow Feather
        crane_loading_bodies: {
            speaker: "Narrator",
            text: "Fear, cold and sharp, pierces through Samuel's revulsion. He nods, unable to speak. As he begins the grim task of loading the small, lifeless forms onto a cart, one shroud stirs. A girl, no older than ten, gasps for air. Her eyes, dark pools of pain and defiance, lock onto his.",
            next: "sarah_curse"
        },

        // Scene 6: Sarah's Curse and Pike's Cruelty
        sarah_curse: {
            speaker: "Sarah Crow Feather",
            text: "(Whispering weakly in her native tongue) 'The spirits of the stolen children will not rest. The earth will remember this blood. A reckoning will come for those who profit from our tears...'",
            next: "pike_silences_sarah"
        },

        pike_silences_sarah: {
            speaker: "Narrator",
            text: "Before Samuel can react, Pike is upon them. With a snarl, he shoves Samuel aside and presses his large hands over the girl's small face. Her struggles are brief. When Pike steps back, Sarah Crow Feather is still. The only sound is Samuel's ragged breathing.",
            next: "contract_and_gold"
        },

        // Scene 7: The Contract and Gold
        contract_and_gold: {
            speaker: "Colonel Morrison",
            text: "'Unfortunate, but necessary.' Colonel Morrison produces a document. 'Here is the revised contract for the... medical research subjects, Mr. Pike. And your payment.' He hands Pike a heavy bag of gold.",
            next: "pike_final_warning"
        },
        
        pike_final_warning: {
             speaker: "Cornelius Pike",
             text: "'See to your work, Crane. And remember our conversation.' Pike's eyes bore into Samuel, a final, chilling warning.",
             next: "crane_burial"
        },

        // Scene 8: The Burial and Secret Kept
        crane_burial: {
            speaker: "Narrator",
            text: "Under a moonless sky, Samuel Crane buries the children. His hands are numb, his heart a stone. But before he covers Sarah Crow Feather's body, he gently removes a small, beaded necklace from around her neck. That night, he begins a hidden journal, documenting everything he witnessed, every name he knew, every detail of Pike's monstrous crime. It is a secret he guards for seventeen long years.",
            choices: [
                {
                    text: "Continue to Chapter 1",
                    next: null, // This indicates the end of the current chapter's scenes
                    nextChapter: "chapter1" // Specifies the next chapter to load
                }
            ]
        }
    }
};