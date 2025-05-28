storyData.chapter2 = {
    name: "Chapter 2", 
    title: "Ghosts of Yesterday",
    scenes: {
        start: {
            text: "Morning comes reluctantly to Perdition, casting long shadows that seem to hide secrets in every corner. The four strangers awaken to find themselves forever changed by yesterday's violence.",
            next: "morning_reflections"
        },
        
        morning_reflections: {
            text: "The memory of the bandit attack lingers like smoke. How it ended has shaped how the townspeople look at the newcomers—and how they look at each other.",
            choices: [
                {
                    text: "Check on how Jacob is handling things",
                    next: "jacob_morning",
                    requires: {
                        flags: { jacob_saved_elijah: true }
                    }
                },
                {
                    text: "Find Maria to discuss the threats",
                    next: "maria_morning"
                },
                {
                    text: "Seek out Thomas at the saloon",
                    next: "thomas_morning"
                }
            ]
        },
        
        jacob_morning: {
            speaker: "Jacob Rivers",
            text: "\"Preacher? I... I've been thinking about yesterday. About what I did. My hands won't stop shaking.\"",
            text: "The boy who saved your life now struggles with the weight of taking another's. His innocence is cracking like old leather.",
            choices: [
                {
                    text: "\"You saved my life. That matters.\"",
                    next: "jacob_comfort",
                    effects: {
                        relationships: { jacob_elijah_trust: 10 }
                    }
                },
                {
                    text: "\"Killing changes a man. Don't let it define you.\"",
                    next: "jacob_wisdom"
                }
            ]
        },
        
        maria_morning: {
            speaker: "Narrator",
            text: "The bandit leader's threat echoes in your mind as you find Maria checking her weapons with mechanical precision.",
            next: "maria_morning_speaks"
        },
        
        maria_morning_speaks: {
            speaker: "Maria Vasquez",
            text: "\"Those men will be back. The question is when, and with how many friends.\" She looks up. \"We need to decide—do we run, or do we make a stand?\"",
            choices: [
                {
                    text: "\"We stand. These people need protection.\"",
                    next: "decide_protect",
                    effects: {
                        flags: { protecting_town: true }
                    }
                },
                {
                    text: "\"Maybe it's time to move on.\"",
                    next: "decide_leave"
                },
                {
                    text: "\"Yesterday showed we work well together.\"",
                    next: "team_reflection",
                    requires: {
                        flags: { prepared_for_violence: true }
                    }
                },
                {
                    text: "\"I should have acted faster yesterday.\"",
                    next: "regret_hesitation",
                    requires: {
                        flags: { maria_forced_to_lead: true }
                    }
                }
            ]
        },
        
        thomas_morning: {
            speaker: "Thomas Whitmore",
            speaker: "Narrator",
            text: "You find Thomas in the saloon, but for once, his bottle sits untouched. His hands are steady as he cleans a small wound on a local's arm.",
            next: "thomas_reflects"
        },
        
        thomas_reflects: {
            speaker: "Thomas Whitmore",
            text: "\"Funny thing,\" he says without looking up. \"Yesterday reminded me why I became a doctor. Maybe these old hands still have some healing left in them.\"",
            next: "thomas_sober"
        },
        
        thomas_sober: {
            speaker: "Narrator",
            text: "The choice to trust each other during the fight seems to have sobered him—at least for now.",
            next: "common_ground"
        },
        
        jacob_comfort: {
            speaker: "Jacob Rivers",
            text: "\"I... thank you. I keep thinking about my brothers. They always said killing would make me feel powerful. But this just feels... hollow.\"",
            next: "common_ground"
        },
        
        jacob_wisdom: {
            speaker: "Elijah Cross",
            text: "\"I've carried the weight of blood for years, son. The secret isn't forgetting—it's learning to carry it without letting it crush you.\"",
            next: "common_ground"
        },
        
        decide_protect: {
            speaker: "Maria Vasquez",
            text: "\"Good. I was hoping you'd say that. These people don't deserve to suffer for our sins.\" Her eyes harden. \"But if we're doing this, we do it right. No half measures.\"",
            next: "common_ground"
        },
        
        decide_leave: {
            speaker: "Maria Vasquez",
            text: "\"Part of me agrees. But running doesn't solve anything—just puts the problem on someone else.\" She holsters her gun. \"Besides, I'm tired of running.\"",
            next: "common_ground"
        },
        
        team_reflection: {
            speaker: "Maria Vasquez",
            text: "\"True. When you decided to prepare for a fight yesterday, it made all the difference. We were ready, coordinated.\" She nods approvingly. \"That kind of tactical thinking could keep us all alive.\"",
            next: "maria_respects"
        },
        
        maria_respects: {
            speaker: "Narrator",
            text: "Your willingness to accept the reality of violence has earned Maria's respect. She sees you as someone who understands the harsh truths of this land.",
            next: "common_ground",
            effects: {
                relationships: { maria_elijah_trust: 15 }
            }
        },
        
        regret_hesitation: {
            speaker: "Maria Vasquez",
            text: "\"Yeah, you should have.\" Her voice is sharp. \"I had to take the lead because you froze up. Nearly got us all killed.\"",
            next: "maria_sighs"
        },
        
        maria_sighs: {
            speaker: "Narrator",
            text: "She pauses, then sighs.",
            next: "maria_continues"
        },
        
        maria_continues: {
            speaker: "Maria Vasquez",
            text: "\"But you're acknowledging it. That's something, I suppose. Just... don't freeze up again when lives are on the line.\"",
            next: "common_ground",
            effects: {
                relationships: { maria_elijah_tension: -10, maria_elijah_trust: 5 }
            }
        },
        
        common_ground: {
            speaker: "Narrator",
            text: "As the morning progresses, the four find themselves drawn together despite their differences. The shared danger has forged something between them—not quite friendship, not yet trust, but a recognition that they need each other.",
            next: "town_stretches"
        },
        
        town_stretches: {
            speaker: "Narrator",
            text: "The town of Perdition stretches before them, full of secrets and shadows. And somewhere out there, the bandits plan their revenge.",
            next: "chapter2_conclusion"
        },
        
        chapter2_conclusion: {
            text: "Your choices yesterday continue to echo in small ways—the way Maria looks at you, how Jacob seeks your guidance, whether Thomas trusts your judgment.",
            choices: [
                {
                    text: "Reflect on the path of violence",
                    next: "violence_reflection",
                    requires: {
                        flags: { elijah_accepts_violence: true }
                    }
                },
                {
                    text: "Consider the cost of hesitation", 
                    next: "passivity_reflection",
                    requires: {
                        flags: { chose_passivity: true }
                    }
                },
                {
                    text: "Think about leadership and responsibility",
                    next: "leadership_reflection"
                }
            ]
        },
        
        violence_reflection: {
            text: "You accepted that violence was necessary yesterday, and it shaped how the group sees you. Maria respects your pragmatism, but you wonder what it costs your soul.",
            speaker: "Elijah Cross",
            text: "\"Lord, forgive me for the choices I make in this hard land. Help me find the line between righteousness and brutality.\"",
            next: "chapter2_end"
        },
        
        passivity_reflection: {
            text: "Your attempt to avoid conflict yesterday nearly cost everyone dearly. The bandits grew more dangerous because of your hesitation, and you feel the weight of that choice.",
            speaker: "Elijah Cross", 
            text: "\"Sometimes inaction is its own sin. Help me find the courage to act when lives depend on it.\"",
            next: "chapter2_end"
        },
        
        leadership_reflection: {
            text: "Whether through action or hesitation, you've become a focal point for this group. They look to you for guidance, and that responsibility weighs heavily.",
            speaker: "Elijah Cross",
            text: "\"I never asked to lead, but these souls seem to need direction. Grant me wisdom to guide them well.\"",
            next: "chapter2_end"
        },
        
        chapter2_end: {
            speaker: "Narrator",
            text: "Chapter 2 complete! The story continues to develop based on your choices. The relationships and decisions from Chapter 1 are already shaping how Chapter 2 unfolds.",
            next: "debug_reminder"
        },
        
        debug_reminder: {
            speaker: "Narrator",
            text: "Use the debug mode (Ctrl+Shift+D) to see how your choices are being tracked and will influence future chapters.",
            choices: [
                {
                    text: "Continue to Chapter 3",
                    next: null,
                    nextChapter: "chapter3"
                }
            ]
        }
    }
};