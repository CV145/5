// Chapter 2: The Healer's Poison
storyData.chapter2 = {
    name: "Chapter 2",
    title: "The Healer's Poison",
    scenes: {
        // Scene 1: Stagecoach Arrival - Doc's Perspective
        start: {
            speaker: "Narrator",
            text: "The stagecoach rattled into Perdition, each jolt a fresh wave of agony for Thomas 'Doc' Whitmore. His hands trembled, not from the rough ride, but from the gnawing hunger of laudanum withdrawal. Sweat slicked his brow despite the dry desert air. He needed a dose, badly.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 2');
            },
            next: "doc_initial_observation"
        },

        // Scene 2: Doc's Initial Observation of Perdition
        doc_initial_observation: {
            speaker: "Narrator",
            text: "Through bleary eyes, Doc surveyed the desolate town. It was a festering sore on the face of the territory, but even sores had their uses. And often, their own peculiar sources of profit.",
            choices: [
                {
                    text: "Focus on the faces of the few visible townsfolk.",
                    next: "observe_townsfolk_faces"
                },
                {
                    text: "Assess the structural decay of the buildings.",
                    next: "assess_structural_decay"
                },
                {
                    text: "Concentrate on fighting the withdrawal symptoms.",
                    next: "doc_withdrawal_fight"
                }
            ]
        },

        // Scene 3: Observe Townsfolk Faces (Optional Insight)
        observe_townsfolk_faces: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Fearful. Beaten down. But also... watchful. This town has secrets. And secrets often have gatekeepers who can be... persuaded.'",
            next: "doc_withdrawal_fight"
        },

        // Scene 4: Assess Structural Decay (Optional Insight)
        assess_structural_decay: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Rotten timbers, crumbling adobe. A place falling apart. Perfect for someone who knows how to pick through the debris for valuables. Or someone who can offer a quick fix to delay the inevitable.'",
            next: "doc_withdrawal_fight"
        },

        // Scene 5: Doc Fights Withdrawal
        doc_withdrawal_fight: {
            speaker: "Narrator",
            text: "He clenched his fists, nails digging into his palms. The familiar tremors were escalating. He needed to find a local apothecary, or a doctor he could... influence. Soon.",
            next: "stagecoach_stops_doc"
        },

        // Scene 6: Stagecoach Stops
        stagecoach_stops_doc: {
            speaker: "Narrator",
            text: "The stage pulled up near a dilapidated building claiming to be a hotel. As Doc stepped down, his legs nearly buckled. The driver eyed him with a mixture of pity and contempt.",
            next: "flashback_trigger_boston"
        },
        
        // Scene 7: Flashback Trigger - A Child's Cry (Imagined or real from nearby)
        flashback_trigger_boston: {
            speaker: "Narrator",
            text: "A distant sound, perhaps a child's sharp cry or just the wind, pierced through Doc's laudanum haze. Suddenly, he wasn't in Perdition. He was back in Boston, in the sterile confines of his once-prestigious operating theater.",
            next: "flashback_boston_intro"
        },

        // --- FLASHBACK SEQUENCE START (BOSTON) ---
        flashback_boston_intro: {
            speaker: "Narrator",
            text: "Boston. Years ago. The air thick with the scent of antiseptic and his own expensive cologne. He'd been at the height of his career, lauded, respected. And drunk. So very drunk.",
            next: "flashback_operating_room"
        },

        flashback_operating_room: {
            speaker: "Narrator",
            text: "The child on the table, young Master Harrington, heir to a shipping fortune. A routine appendectomy. But Doc's hands, usually so steady, had betrayed him, slick with whiskey sweat.",
            next: "flashback_fatal_slip"
        },

        flashback_fatal_slip: {
            speaker: "Narrator",
            text: "A slip of the scalpel. A severed artery. He remembered the gush of crimson, the panicked nurses, the sudden, terrible silence as the small heart gave out.",
            next: "flashback_harrington_sr_arrival"
        },
        
        flashback_harrington_sr_arrival: {
            speaker: "Narrator",
            text: "Later, in his private study, the elder Harrington had confronted him. A titan of industry, his face contorted with grief and a dawning, terrible understanding as he smelled the liquor on Doc's breath.",
            next: "flashback_confrontation"
        },

        flashback_confrontation: {
            speaker: "Mr. Harrington (Flashback)",
            text: "'You were drunk! You killed my son, you drunken butcher!' Harrington's voice, usually booming with authority, was choked with tears and rage.",
            choices: [
                {
                    text: "Recall Doc's immediate reaction to the accusation.",
                    next: "flashback_doc_denial"
                },
                {
                    text: "Remember Harrington's threat.",
                    next: "flashback_harrington_threat"
                }
            ]
        },

        flashback_doc_denial: { // Optional
            speaker: "Doc Whitmore (Flashback)",
            text: "'Complications can arise in any surgery, Mr. Harrington. I assure you, I did everything...' The lies tasted like ash, even then.",
            next: "flashback_harrington_threat"
        },
        
        flashback_harrington_threat: {
            speaker: "Mr. Harrington (Flashback)",
            text: "'I'll see you ruined! Stripped of your license! Jailed! You'll pay for this!' Harrington had lunged, not with fists, but with the promise of utter destruction.",
            next: "flashback_the_second_murder"
        },

        flashback_the_second_murder: {
            speaker: "Narrator",
            text: "Fear, cold and absolute, had gripped Doc. Not fear of jail, but fear of losing his access, his supply. In a moment of brutal clarity, he'd grabbed the heavy glass decanter from his desk. One blow. Harrington had fallen like a stone.",
            next: "flashback_the_escape"
        },
        
        flashback_the_escape: {
            speaker: "Narrator",
            text: "He hadn't waited for the authorities. He'd packed his laudanum, his cash, and fled west, leaving behind two bodies and a life in ruins. No remorse. Only the cold calculation of survival.",
            next: "flashback_boston_end"
        },
        // --- FLASHBACK SEQUENCE END ---

        flashback_boston_end: {
            speaker: "Narrator",
            text: "The tremors brought Doc back to Perdition. The past was a ghost, but the present was a pressing need. He clutched his medical bag, its contents more precious than gold.",
            next: "doc_finds_apothecary_sign"
        },
        
        // Scene 18: Doc Seeks a Solution
        doc_finds_apothecary_sign: {
            speaker: "Doc Whitmore",
            text: "(To himself, voice raspy) 'First things first. Find the local sawbones. Or an apothecary. Someone with a stock of... necessary compounds.'",
            next: "inquiring_about_doctor"
        },

        // Scene 19: Inquiring About a Local Doctor
        inquiring_about_doctor: {
            speaker: "Narrator",
            text: "He stumbled towards what passed for a main street, stopping a passing, wary-looking woman.",
            next: "doc_asks_woman"
        },
        
        doc_asks_woman: {
            speaker: "Doc Whitmore",
            text: "'Excuse me, madam. Could you direct me to the town's physician or apothecary?'",
            next: "woman_points_to_holstead"
        },

        // Scene 21: Woman Points to Holstead's
        woman_points_to_holstead: {
            speaker: "Townswoman",
            text: "'Doctor Holstead's place is just yonder.' She pointed a trembling finger towards a slightly less dilapidated building. 'But... he ain't seen many patients lately. Not since... well, folks 'round here got their own remedies.'",
            next: "doc_senses_opportunity"
        },

        // Scene 22: Doc Senses Opportunity
        doc_senses_opportunity: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Not seeing patients? Interesting. Either incompetent, or hiding something. Both are exploitable.' A predatory gleam entered his eyes.",
            next: "approaching_holsteads_practice"
        },

        // Scene 23: Approaching Holstead's Practice
        approaching_holsteads_practice: {
            speaker: "Narrator",
            text: "The sign above the door read 'Dr. Alistair Holstead - Physician & Surgeon'. The windows were grimy, the paint peeling. Doc pushed the door open.",
            next: "inside_holsteads_office"
        },

        // Scene 24: Inside Holstead's Office
        inside_holsteads_office: {
            speaker: "Narrator",
            text: "The interior was dusty and smelled of stale herbs and fear. An older man, Dr. Holstead, looked up from a ledger, his eyes watery and his hands shaking even more than Doc's.",
            next: "holstead_nervous_greeting"
        },
        
        // Scene 25: Holstead's Nervous Greeting
        holstead_nervous_greeting: {
            speaker: "Dr. Holstead",
            text: "'Can I... can I help you, sir? I wasn't expecting... patients.'",
            next: "doc_introduces_himself"
        },

        // Scene 26: Doc Introduces Himself
        doc_introduces_himself: {
            speaker: "Doc Whitmore",
            text: "'Dr. Thomas Whitmore, formerly of Boston General.' Doc offered a charming, utterly false smile. 'Passing through. Thought I'd pay my respects to a fellow practitioner. Perhaps... compare notes on local ailments?'",
            next: "doc_observes_holstead_closely"
        },
        
        // Scene 27: Doc Observes Holstead
        doc_observes_holstead_closely: {
            speaker: "Narrator",
            text: "Doc's keen eyes took in Holstead's disarray: the poorly hidden laudanum bottle, the fresh track marks on his arm, the ledgers that seemed to list more payments received than services rendered.",
            choices: [
                {
                    text: "Inquire about Holstead's 'research'.",
                    next: "inquire_holstead_research"
                },
                {
                    text: "Comment on the town's 'health'.",
                    next: "comment_town_health"
                }
            ]
        },
        
        // Scene 28: Inquire Holstead's Research (Optional)
        inquire_holstead_research: {
            speaker: "Doc Whitmore",
            text: "'Fascinating setup you have here, Doctor. Engaged in any particular... local research?' Doc's tone was silk over steel.",
            next: "holstead_stammers"
        },

        // Scene 29: Comment on Town Health (Optional)
        comment_town_health: {
            speaker: "Doc Whitmore",
            text: "'Perdition seems... a rather unhealthy place, wouldn't you say, Doctor? I imagine a man with your access to medicinals is kept quite busy.'",
            next: "holstead_stammers"
        },

        // Scene 30: Holstead Stammers
        holstead_stammers: {
            speaker: "Dr. Holstead",
            text: "'Research? N-no, nothing of the sort. Just... just a simple frontier doctor. The townsfolk... they prefer their own ways.' He avoided Doc's gaze.",
            next: "doc_finds_pike_connection"
        },

        // Scene 31: Doc Finds the Pike Connection
        doc_finds_pike_connection: {
            speaker: "Narrator",
            text: "Doc's eyes landed on a half-hidden shipping manifest on Holstead's desk. 'Pike Mining Concern' was printed clearly at the top, alongside a list of chemicals that had little to do with common medicine.",
            next: "doc_the_blackmail_begins"
        },

        // Scene 32: The Blackmail Begins
        doc_the_blackmail_begins: {
            speaker: "Doc Whitmore",
            text: "'Pike Mining Concern.' Doc tapped the manifest. 'Interesting suppliers for a simple frontier doctor. Tell me, Dr. Holstead, what sort of ailments require such... industrial-grade compounds? Or is Mr. Pike perhaps your most lucrative patient?'",
            next: "holstead_panics"
        },

        // Scene 33: Holstead Panics
        holstead_panics: {
            speaker: "Dr. Holstead",
            text: "'I... I don't know what you mean! That's... for sterilizing equipment! Pike is a benefactor to this town!' Sweat beaded on Holstead's forehead.",
            next: "doc_presses_advantage"
        },

        // Scene 34: Doc Presses His Advantage
        doc_presses_advantage: {
            speaker: "Doc Whitmore",
            text: "'Benefactor? Or puppet master? And you, his loyal string-puller?' Doc leaned in. 'I think you and I are going to come to an arrangement, Dr. Holstead. You see, I'm in need of a practice. And a reliable... supply. And you look like a man ready for retirement.'",
            next: "holstead_relents"
        },
        
        // Scene 35: Holstead Relents
        holstead_relents: {
            speaker: "Narrator",
            text: "Holstead crumpled. The fight went out of him, replaced by weary resignation. 'Take it. Take it all. The practice, the damned supplies, Pike's cursed attention. Just... let me leave this town alive.'",
            next: "doc_takes_over"
        },

        // Scene 36: Doc Takes Over
        doc_takes_over: {
            speaker: "Doc Whitmore",
            text: "'An excellent decision.' Doc helped himself to Holstead's laudanum, the first dose in what felt like an eternity washing over him in a warm, blissful wave. 'I'll ensure Mr. Pike knows his... investments are in new, capable hands.'",
            next: "new_practice_day_one"
        },
        
        // Scene 37: New Practice, Day One
        new_practice_day_one: {
            speaker: "Narrator",
            text: "By nightfall, Holstead was gone, and 'Dr. T. Whitmore' was painted crudely over the old sign. Doc, finally sated with laudanum, surveyed his new domain. This town was ripe for the picking.",
            next: "call_for_the_doctor"
        },

        // Scene 38: A Call for the Doctor
        call_for_the_doctor: {
            speaker: "Narrator",
            text: "A knock came at the door. A grimy, desperate-looking man stood there. 'Doctor? You gotta come quick. It's Jed. Collapsed in the mine. He's... he's sayin' strange things.'",
            next: "doc_sees_profit"
        },
        
        // Scene 39: Doc Sees Profit, Not Patients
        doc_sees_profit: {
            speaker: "Doc Whitmore",
            text: "'Mining accident, you say?' Doc's mind, sharpened by the drug, immediately went to Pike. 'Compensation can be... complicated in such matters. My fee for a mine visit is considerable. Payable in advance, of course.'",
            next: "at_the_miner_shack"
        },

        // Scene 40: At the Miner's Shack
        at_the_miner_shack: {
            speaker: "Narrator",
            text: "The 'miner's shack' was a hovel. Jed lay on a dirty cot, his breathing shallow, his skin tinged grey. He was clearly dying. Mercury poisoning, Doc diagnosed instantly, but kept it to himself.",
            next: "jed_dying_words1"
        },

        // Scene 41: Jed's Dying Words
        jed_dying_words1: {
            speaker: "Jed (Miner)",
            text: "(Gasping) 'The silver... it sings, Doc... but it's cursed. Pike... he knows. The children...'",
            next: "jed_dying_words2"
        },

        // Scene 42: Jed's Cryptic Warning
        jed_dying_words2: {
            speaker: "Jed (Miner)",
            text: "'Children in the mountain... they cry silver tears... Pike puts them there... makes 'em dig... Don't let him... don't...'",
            next: "jed_expires"
        },
        
        // Scene 43: Jed Expires
        jed_expires: {
            speaker: "Narrator",
            text: "Jed's eyes rolled back. A final, shuddering breath, and he was still. Doc felt for a pulse he knew wasn't there.",
            next: "doc_collects_fee"
        },

        // Scene 44: Doc Collects His Fee
        doc_collects_fee: {
            speaker: "Doc Whitmore",
            text: "'A tragic loss.' Doc pocketed the coins the other miner offered. 'Sometimes, despite our best efforts... Nothing more I could do.' He made sure to look suitably somber.",
            next: "information_is_valuable"
        },

        // Scene 45: Information is Valuable
        information_is_valuable: {
            speaker: "Narrator",
            text: "But Jed's words resonated. 'Children in the mountain.' Mercury poisoning. Pike. This wasn't just a dying town; it was a web of secrets. And Doc Whitmore held a new, potentially very profitable thread.",
            choices: [
                {
                    text: "Consider the moral implications (briefly).",
                    next: "doc_moral_flicker"
                },
                {
                    text: "Immediately focus on leveraging the information.",
                    next: "doc_scheming"
                }
            ]
        },

        // Scene 46: Doc's Moral Flicker (Optional)
        doc_moral_flicker: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Children... Exploited. Poisoned. A monstrous crime.' A fleeting image of the Harrington child. He pushed it down. Sentiment was a weakness. Information, however, was power.",
            next: "doc_scheming"
        },

        // Scene 47: Doc Begins Scheming
        doc_scheming: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Pike is clearly a man of influence and dark dealings. This information about 'children in the mountain'... it could be a useful bargaining chip. Or a way to ensure my own... security and prosperity in this charming hamlet.'",
            next: "planning_the_approach"
        },

        // Scene 48: Planning His Approach
        planning_the_approach: {
            speaker: "Narrator",
            text: "Back in his newly acquired practice, surrounded by Holstead's dusty implements and his own fresh supply of laudanum, Doc began to plan. He needed to confirm Jed's story, gather more details, and then decide who would pay most dearly for his silence, or his assistance.",
            next: "a_toast_to_perdition"
        },
        
        // Scene 49: A Toast to Perdition
        a_toast_to_perdition: {
            speaker: "Doc Whitmore",
            text: "He poured a generous measure of laudanum. 'To Perdition,' he toasted the empty room. 'May your corruption be as deep as your despair, and may my profits rise from both.'",
            next: "chapter_end_scene_doc"
        },

        // Scene 50: Chapter End
        chapter_end_scene_doc: {
            speaker: "Narrator",
            text: "Doc Whitmore, the healer with poison in his veins and murder in his past, had found his new hunting ground. Perdition, with its suffering and secrets, was an open wound, and he was uniquely equipped to feast upon its misery.",
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