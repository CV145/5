// Chapter 1: The Preacher's Burden
storyData.chapter1 = {
    name: "Chapter 1",
    title: "The Preacher's Burden",
    scenes: {
        // Scene 1: Elijah's Arrival - On Foot
        start: {
            speaker: "Narrator",
            text: "The sun beat down on Elijah Cross with merciless intensity. His horse, loyal companion through countless desolate miles, had collapsed and died hours ago. Now, he walked, dust caking his worn boots and the hem of his preacher's coat. Perdition shimmered in the distance, a hazy silhouette against the scorched earth.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 1');
            },
            next: "elijah_exhaustion"
        },

        // Scene 2: Exhaustion and First Glimpse
        elijah_exhaustion: {
            speaker: "Narrator",
            text: "Each step was an effort. His throat was parched, his body weary. The town sign, 'PERDITION - POPULATION ?', seemed to mock him. It was a name that resonated with his own soul's damnation.",
            next: "entering_perdition_edge"
        },

        // Scene 3: Entering Perdition's Edge
        entering_perdition_edge: {
            speaker: "Narrator",
            text: "He reached the edge of town. Buildings sagged, windows stared like empty eye sockets. A dog barked mournfully in the distance, the only sign of life. It felt like a place where hope came to die.",
            choices: [
                {
                    text: "Observe the town's desolation more closely.",
                    next: "observe_desolation_detail"
                },
                {
                    text: "Focus on finding water and shelter immediately.",
                    next: "seek_immediate_needs"
                }
            ]
        },

        // Scene 4: Observing Desolation (Optional Detail)
        observe_desolation_detail: {
            speaker: "Narrator",
            text: "The wind whispered through broken fences and skeletal structures. Tumbleweeds skittered across the main street, which was little more than a wide, dusty track. The few occupied buildings seemed to huddle together, as if for protection against an unseen dread.",
            next: "seek_immediate_needs"
        },

        // Scene 5: Seeking Immediate Needs
        seek_immediate_needs: {
            speaker: "Elijah Cross",
            text: "(To himself) 'Water first. Then perhaps... work. A man has to earn his keep, even in a place like this.'",
            next: "undertakers_sign"
        },

        // Scene 6: The Undertaker's Sign
        undertakers_sign: {
            speaker: "Narrator",
            text: "His gaze fell upon a weathered sign: 'S. CRANE - UNDERTAKER & FUNERAL SERVICES'. It was one of the few establishments that looked maintained, albeit grimly. Death, it seemed, was still a business in Perdition.",
            next: "approaching_undertakers"
        },

        // Scene 7: Approaching the Undertaker's
        approaching_undertakers: {
            speaker: "Narrator",
            text: "As Elijah approached, the door creaked open. A man emerged, older now, his face a roadmap of sorrows, his shoulders stooped. It was Samuel Crane, the undertaker from the prologue, now in his fifties.",
            next: "crane_sees_elijah"
        },

        // Scene 8: Crane Sees Elijah
        crane_sees_elijah: {
            speaker: "Samuel Crane",
            text: "(Muttering, eyes wide with a flicker of fearful recognition) 'It's him... one of them. Just as I saw...'",
            next: "crane_composure"
        },

        // Scene 9: Crane Regains Composure
        crane_composure: {
            speaker: "Narrator",
            text: "Crane quickly masked his shock, his professional demeanor settling like a shroud. He squinted at Elijah, who was now close enough for his dusty, travel-worn state to be apparent.",
            next: "crane_greeting_elijah"
        },

        // Scene 10: Crane Greets Elijah
        crane_greeting_elijah: {
            speaker: "Samuel Crane",
            text: "'You look like you've wrestled with the devil himself, Preacher. Or just the desert. What brings you to Perdition on foot?' His voice was raspy, colored with a nervousness Elijah couldn't quite place.",
            next: "elijah_explains_arrival"
        },

        // Scene 11: Elijah Explains His Arrival
        elijah_explains_arrival: {
            speaker: "Elijah Cross",
            text: "'My horse gave out a ways back. Name's Elijah Cross. Just looking for a place to rest my head and perhaps find some honest work.'",
            choices: [
                {
                    text: "Ask Crane about the state of the town.",
                    next: "ask_crane_about_town"
                },
                {
                    text: "Directly ask if there's work for him.",
                    next: "ask_crane_for_work"
                }
            ]
        },

        // Scene 12: Ask Crane About Town (Optional Insight)
        ask_crane_about_town: {
            speaker: "Elijah Cross",
            text: "'This town... it feels heavy. Seen better days, I take it?'",
            next: "crane_town_response"
        },

        // Scene 13: Crane's Response About Town
        crane_town_response: {
            speaker: "Samuel Crane",
            text: "'Better days are a distant memory, Preacher. Perdition... well, it lives up to its name for many. But there's always work for a man like me. And perhaps,' he eyed Elijah, 'for a man like you.'",
            next: "ask_crane_for_work"
        },

        // Scene 14: Ask Crane for Work
        ask_crane_for_work: {
            speaker: "Elijah Cross",
            text: "'Work, Mr. Crane? I'm not afraid of hard labor. What did you have in mind?'",
            next: "crane_offers_gravedigging"
        },

        // Scene 15: Crane Offers Gravedigging Work
        crane_offers_gravedigging: {
            speaker: "Samuel Crane",
            text: "'The ground here is hard, and my back ain't what it used to be. Always need an extra hand for digging. It's not glorious work, but it's steady. Folk in Perdition die as often as anywhere else, maybe more.' He forced a grim smile.",
            next: "elijah_considers_offer"
        },

        // Scene 16: Elijah Considers the Offer
        elijah_considers_offer: {
            speaker: "Narrator",
            text: "Gravedigging. There was a grim poetry to it, Elijah thought. He, who felt like a walking tomb of guilt, consigned to interring the dead. Perhaps it was fitting.",
            next: "elijah_accepts_work"
        },

        // Scene 17: Elijah Accepts the Work
        elijah_accepts_work: {
            speaker: "Elijah Cross",
            text: "'I'll take it, Mr. Crane. When do I start?'",
            next: "crane_relief_and_unease"
        },

        // Scene 18: Crane's Relief and Unease
        crane_relief_and_unease: {
            speaker: "Samuel Crane",
            text: "'Good. Good. There's a fresh one needs seeing to out at the cemetery now. Man died in his sleep last night. Come, I'll show you the way.' Crane seemed relieved, yet an undercurrent of profound unease still clung to him.",
            next: "walk_to_cemetery"
        },

        // Scene 19: Walk to the Cemetery
        walk_to_cemetery: {
            speaker: "Narrator",
            text: "They walked in silence towards the town cemetery, a desolate patch of ground dotted with weathered wooden markers. The place felt as forgotten as the town itself.",
            next: "flashback_trigger_perception"
        },

        // Scene 20: Flashback Trigger - A Distant Smell of Smoke or a Ruined Structure
        flashback_trigger_perception: {
            speaker: "Narrator",
            text: "As they passed a collapsed, fire-blackened ruin that might once have been a small chapel or meeting house on the edge of town, a faint, almost imagined scent of old smoke seemed to drift on the wind. For Elijah, it was a potent trigger.",
            next: "flashback_intro"
        },

        // --- FLASHBACK SEQUENCE START ---
        flashback_intro: {
            speaker: "Narrator",
            text: "The scent, the sight of ruins... it hurled Elijah back years, to a night of fire and screams in a small Kansas parish. His church. His congregation.",
            next: "flashback_scene1_fire"
        },

        flashback_scene1_fire: {
            speaker: "Narrator",
            text: "Flames devoured the wooden church, his church, painting the night sky orange and black. He remembered the heat, the crackling roar, the smell of burning pine and something else... something sickeningly sweet.",
            next: "flashback_scene2_attempted_rescue"
        },

        flashback_scene2_attempted_rescue: {
            speaker: "Narrator",
            text: "He'd tried to get them out. He'd rushed in, again and again, but the smoke was too thick, the heat too intense. An overturned oil lamp, a dropped hymnal, a gust of wind through a broken window – it had all happened so fast.",
            next: "flashback_scene3_parishioners_trapped"
        },

        flashback_scene3_parishioners_trapped: {
            speaker: "Narrator",
            text: "He could still hear their cries, muffled by the inferno. Seven of them. Good people. People who had trusted him. He remembered seeing young Abigail, her face streaked with soot, her eyes wide with terror, just before a beam collapsed.",
            choices: [
                {
                    text: "Remember Abigail's face.",
                    next: "flashback_abigail_detail"
                },
                {
                    text: "Focus on the guilt of his mistake.",
                    next: "flashback_guilt_detail"
                }
            ]
        },

        // Optional Detail Scene for Flashback
        flashback_abigail_detail: {
            speaker: "Narrator",
            text: "Abigail, only eight years old. She'd given him a drawing of a smiling sun that morning. He'd promised her mother he'd look after the children during the evening service. The memory was a searing brand on his soul.",
            next: "flashback_guilt_detail"
        },

        flashback_guilt_detail: {
            speaker: "Narrator",
            text: "It was his fault. He'd been arguing with Deacon Price about church finances, distracted, angry. He'd gestured too widely, knocked the lamp himself. He'd never admitted it. He'd let them call it a tragic accident.",
            next: "flashback_scene4_aftermath"
        },

        flashback_scene4_aftermath: {
            speaker: "Narrator",
            text: "The aftermath was a landscape of ash and whispers. They'd called him a hero for trying to save them, but he knew the truth. He was a murderer, a coward who fled the ashes of his failure.",
            next: "flashback_end"
        },
        // --- FLASHBACK SEQUENCE END ---

        flashback_end: {
            speaker: "Samuel Crane",
            text: "'Preacher? You alright? You look like you've seen a ghost.' Crane's voice pulled Elijah sharply back to the present, to the desolate Perdition cemetery.",
            next: "elijah_recovers"
        },

        // Scene 27 (was 21 before flashback): Elijah Recovers
        elijah_recovers: {
            speaker: "Elijah Cross",
            text: "'Just... the heat, Mr. Crane. Lost in thought.' He wiped a hand across his brow, though it wasn't sweat he was trying to erase.",
            next: "crane_points_to_grave"
        },

        // Scene 28: Crane Points to the Grave Site
        crane_points_to_grave: {
            speaker: "Samuel Crane",
            text: "'Right here. Six feet under. Standard size.' Crane handed him a sturdy shovel. 'Soil's rocky once you get a foot down. Take your time. I'll be back with the... client... in a few hours.'",
            next: "elijah_begins_digging1"
        },

        // Scene 29: Elijah Begins Digging - The Physical Labor
        elijah_begins_digging1: {
            speaker: "Narrator",
            text: "Elijah set to work. The rhythmic thrust of the shovel, the scrape of metal on earth, the sun beating on his back – it was mindless, grueling labor, a welcome distraction from the turmoil within.",
            next: "elijah_begins_digging2"
        },
        
        // Scene 30: Elijah Begins Digging - Deeper Thoughts
        elijah_begins_digging2: {
            speaker: "Narrator",
            text: "He dug, each shovelful a penance. He thought of the graves he'd filled in Kansas, the small coffins. This felt no different. He was still burying the dead, still surrounded by the consequences of sin.",
            next: "shovel_hits_something1"
        },

        // Scene 31: Shovel Hits Something - An Obstruction
        shovel_hits_something1: {
            speaker: "Narrator",
            text: "He was about four feet down when the shovel struck something that wasn't rock. It was softer, yielding. A muffled thud.",
            next: "shovel_hits_something2"
        },

        // Scene 32: Shovel Hits Something - Curiosity
        shovel_hits_something2: {
            speaker: "Elijah Cross",
            text: "(Muttering) 'What in the...?' He knelt, pushing aside loose soil with his hands.",
            next: "unearthing_the_past1"
        },

        // Scene 33: Unearthing the Past - A Glimmer
        unearthing_the_past1: {
            speaker: "Narrator",
            text: "His fingers brushed against something small and smooth. He pulled it free. It was a fragment of bone, unmistakably human, and far too small to belong to an adult.",
            next: "unearthing_the_past2"
        },
        
        // Scene 34: Unearthing the Past - More Bones
        unearthing_the_past2: {
            speaker: "Narrator",
            text: "Carefully, he dug around the area. More bones. Tiny ribs. A delicate skull. Then another. And another. He had stumbled upon a cluster of shallowly buried remains.",
            next: "mass_grave_realization"
        },

        // Scene 35: The Mass Grave Realization
        mass_grave_realization: {
            speaker: "Elijah Cross",
            text: "(Whispering in horror) 'Children... So many children... This isn't a forgotten potter's field. This is a slaughterhouse.'",
            next: "crane_returns_early"
        },

        // Scene 36: Crane Returns Early
        crane_returns_early: {
            speaker: "Narrator",
            text: "A shadow fell over him. Samuel Crane stood at the edge of the fresh grave, his face pale, his eyes darting nervously from Elijah to the unearthed bones.",
            next: "crane_feigned_ignorance"
        },

        // Scene 37: Crane's Feigned Ignorance
        crane_feigned_ignorance: {
            speaker: "Samuel Crane",
            text: "'Something wrong, Preacher? Found some old... animal bones, have you? This ground's full of 'em.' But his voice trembled.",
            next: "elijah_confronts_crane1"
        },

        // Scene 38: Elijah Confronts Crane
        elijah_confronts_crane1: {
            speaker: "Elijah Cross",
            text: "'These are not animal bones, Mr. Crane.' Elijah's voice was low, dangerous. He held up the small skull. 'These are children. Many of them. Buried in haste. Unmarked. Why?'",
            choices: [
                {
                    text: "Observe Crane's reaction closely.",
                    next: "observe_crane_guilt"
                },
                {
                    text: "Demand an immediate answer.",
                    next: "demand_crane_answer"
                }
            ]
        },

        // Optional Scene: Observe Crane's Guilt
        observe_crane_guilt: {
            speaker: "Narrator",
            text: "Crane flinched as if struck. His eyes darted towards his pocket, where his hand seemed to instinctively clutch something hidden. He licked his dry lips, unable to meet Elijah's gaze. Guilt radiated from him like a fever.",
            next: "crane_warning"
        },

        // Scene after choice or if demanding answer
        demand_crane_answer: {
            speaker: "Elijah Cross",
            text: "'Tell me, Crane. What abomination happened here?'",
            next: "crane_warning"
        },

        // Scene 40 (was 39): Crane's Warning
        crane_warning: {
            speaker: "Samuel Crane",
            text: "'Some things are best left buried, Preacher. For your own good. For the good of... of everyone left in this town. Forget what you saw. Fill the grave. Do your job.' His hand went to his pocket, briefly touching something. Elijah saw the faint outline of a necklace chain.",
            next: "elijah_senses_more"
        },

        // Scene 41: Elijah Senses More
        elijah_senses_more: {
            speaker: "Narrator",
            text: "Crane's fear was palpable, his warning too desperate. Elijah knew there was a story here, a dark secret that Perdition was trying to keep buried. And Crane was at the heart of it, or at least knew who was.",
            next: "crane_hurried_departure"
        },

        // Scene 42: Crane's Hurried Departure
        crane_hurried_departure: {
            speaker: "Samuel Crane",
            text: "'I... I have to prepare the deceased. Finish the grave, Preacher. And speak of this to no one.' He turned and practically fled, leaving Elijah alone with the dead children and unanswered questions.",
            next: "elijah_alone_with_discovery"
        },

        // Scene 43: Elijah Alone with the Discovery
        elijah_alone_with_discovery: {
            speaker: "Narrator",
            text: "Elijah looked down at the small bones, then in the direction Crane had gone. The undertaker was hiding something, terrified of something. Sarah Crow Feather's necklace, Crane's vision of four strangers... a curse.",
            next: "elijah_makes_a_vow"
        },
        
        // Scene 44: Elijah Makes a Silent Vow
        elijah_makes_a_vow: {
            speaker: "Elijah Cross",
            text: "(To the unearthed remains) 'I don't know who you were, little ones. But I will find out. Your story will not remain buried.'",
            next: "finishing_the_grave"
        },

        // Scene 45: Finishing the Grave with Heavy Heart
        finishing_the_grave: {
            speaker: "Narrator",
            text: "With a heavy heart, Elijah carefully reinterred the small bones, then continued digging the new grave beside them. He would honor Crane's request for now, but he would not forget.",
            next: "elijah_returns_to_town"
        },
        
        // Scene 46: Elijah Returns to Town at Dusk
        elijah_returns_to_town: {
            speaker: "Narrator",
            text: "As dusk settled, Elijah finished his work and walked back towards Crane's establishment. The town seemed even more menacing in the fading light, its secrets held tight.",
            next: "crane_avoidance"
        },
        
        // Scene 47: Crane's Avoidance
        crane_avoidance: {
            speaker: "Narrator",
            text: "Crane paid him for the day's work with averted eyes and mumbled words, clearly eager for Elijah to leave. The undertaker was a man tormented.",
            next: "crane_journal_scene_intro"
        },

        // Scene 48: Crane's Journal - Intro
        crane_journal_scene_intro: {
            speaker: "Narrator",
            text: "Later that night, in his dim, cluttered back room, Samuel Crane unlocked a small, worn ledger. His hidden journal. Dipping his pen in ink, his hand trembled as he began to write.",
            next: "crane_journal_entry"
        },

        // Scene 49: Crane's Journal Entry
        crane_journal_entry: {
            speaker: "Samuel Crane (voice-over, or text on screen)",
            text: "'October 17th, 1899. The first has come. The preacher, Cross. He found them. The children. He carries death in his wake, just as she foretold. Sarah's curse... it's beginning. They are all here now, or soon will be. May God have mercy on Perdition, for the spirits of the innocent will not.'",
            next: "chapter_end_scene"
        },

        // Scene 50: Chapter End
        chapter_end_scene: {
            speaker: "Narrator",
            text: "Elijah, meanwhile, found a quiet corner in the dilapidated town saloon, the weight of his own past and Perdition's freshly unearthed horrors settling upon him. He knew, with a chilling certainty, that his arrival was no mere chance. Crane's fear, the children's bones, the very name of this forsaken town – it was all connected, and he was now a part of it.",
            choices: [
                {
                    text: "Continue to Chapter 2",
                    next: null,
                    nextChapter: "chapter2"
                }
            ]
        }
    }
};