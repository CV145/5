// Chapter 10: The Laudanum Dreams
storyData.chapter10 = {
    name: "Chapter 10",
    title: "The Laudanum Dreams",
    scenes: {
        // --- Part 1: Doc Whitmore's Descent ---
        start: {
            speaker: "Narrator",
            text: "The grim discovery in Pike's hidden mine tunnels weighed heavily on Elijah and Maria. Meanwhile, Doc Whitmore sank deeper into his laudanum haze, the town's suffering becoming a fertile ground for his avarice.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 10');
            },
            next: "doc_treating_poisoned_children_intro"
        },

        doc_treating_poisoned_children_intro: {
            speaker: "Narrator",
            text: "More children, pale and trembling from the effects of Pike's mercury-laced silver mine, were brought to Doc's clinic by desperate parents. Each visit was a transaction for Doc, not a mission of mercy.",
            next: "parent_begs_for_help"
        },

        parent_begs_for_help: {
            speaker: "Desperate Mother",
            text: "'Please, Doctor, my little Thomas... he can barely keep food down. He shakes so. Is there nothing more you can do? We'll pay anything!'",
            next: "doc_cold_comfort_and_fees"
        },

        doc_cold_comfort_and_fees: {
            speaker: "Doc Whitmore",
            text: "'The mountain fever is aggressive this season, madam.' Doc's voice was smooth, laced with a false sympathy that didn't reach his laudanum-dulled eyes. 'My special tincture can manage the symptoms. The fee is... five dollars per bottle. He'll need several.'",
            next: "doc_diluting_medicine_internal"
        },

        doc_diluting_medicine_internal: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'And each bottle is mostly river water and bitters now. Makes the laudanum stretch. Keeps them coming back. Profit margins, after all, are a remedy of their own.'",
            choices: [
                {
                    text: "Recall the Harrington child from Boston.",
                    next: "doc_fleeting_boston_memory"
                },
                {
                    text: "Consider the parents' desperation as a tool.",
                    next: "doc_sees_desperation_as_tool"
                }
            ]
        },

        doc_fleeting_boston_memory: { // Optional
            speaker: "Narrator",
            text: "A fleeting image of young Master Harrington, lifeless on his operating table, flickered through Doc's mind. He dismissed it with a practiced mental shrug. Sentiment was a luxury he couldn't afford.",
            next: "doc_sees_desperation_as_tool" // Ensure convergence
        },

        doc_sees_desperation_as_tool: { // Optional, or converges here
            speaker: "Doc Whitmore",
            text: "(Internal) 'Their desperation is my leverage. They'll pay. They always pay when it's their children.'",
            next: "jacob_visits_doc_arm_check"
        },

        // Scene 8: Jacob Visits Doc
        jacob_visits_doc_arm_check: {
            speaker: "Narrator",
            text: "Jacob Rivers, his arm still in a sling from the mining 'accident', came to Doc's clinic for a check-up. He found the doctor in a particularly hazy state, a half-empty laudanum bottle on his desk.",
            next: "jacob_concern_for_doc"
        },

        jacob_concern_for_doc: {
            speaker: "Jacob Rivers",
            text: "'Doc? You alright? You seem... more tired than usual.' Jacob, despite his own turmoil over the impending Rivers Gang attack, felt a flicker of concern for the physician.",
            next: "doc_rambling_confession_intro"
        },

        // Scene 10: Doc's Laudanum-Fueled Confession
        doc_rambling_confession_intro: {
            speaker: "Doc Whitmore",
            text: "'Tired, boy? Oh, I'm beyond tired.' Doc chuckled, a hollow sound. 'I'm floating. Like a god. You know, in Boston... I was a god. Held lives in my hands... just like now.'",
            next: "doc_confesses_boston_murders1"
        },

        doc_confesses_boston_murders1: {
            speaker: "Doc Whitmore",
            text: "'Little Harrington whelp... slipped, they said. Tragic. But his father... ah, his father KNEW.' Doc's eyes focused on Jacob with unsettling clarity. 'He knew I was drunk. Came at me, screaming. So I... quieted him. Permanently.'",
            next: "jacob_shocked_by_confession"
        },

        jacob_shocked_by_confession: {
            speaker: "Jacob Rivers",
            text: "'Doc... you... you killed them? Two people?' Jacob felt the blood drain from his face. He'd heard Doc's previous confession about the robbery, but this was different. Colder.",
            choices: [
                {
                    text: "Ask Doc if he feels any remorse.",
                    next: "jacob_asks_about_remorse"
                },
                {
                    text: "Stay silent, trying to process the horror.",
                    next: "jacob_silent_horror"
                }
            ]
        },

        jacob_asks_about_remorse: { // Optional
            speaker: "Jacob Rivers",
            text: "'Don't you... don't you feel anything? For what you did?'",
            next: "doc_no_remorse"
        },

        jacob_silent_horror: { // Optional
            speaker: "Narrator",
            text: "Jacob stared, words failing him. The doctor he'd confided in, the man who'd set his arm, was a cold-blooded killer.",
            next: "doc_no_remorse"
        },

        doc_no_remorse: {
            speaker: "Doc Whitmore",
            text: "'Remorse?' Doc laughed again, louder this time. 'My only regret is the inconvenience of having to flee that damnable city. Lost a rather fine collection of surgical tools. And the laudanum there was of a much higher quality.'",
            next: "doc_reveals_diluting_medicine"
        },

        doc_reveals_diluting_medicine: {
            speaker: "Doc Whitmore",
            text: "'Speaking of quality... these Perdition mothers, so grateful for any little drop.' He picked up a medicine bottle. 'They don't even notice it's half water. Makes the good stuff last. Keeps the profits flowing. Clever, eh?' He winked at a horrified Jacob.",
            next: "jacob_leaves_disgusted_fearful"
        },

        jacob_leaves_disgusted_fearful: {
            speaker: "Narrator",
            text: "Jacob mumbled an excuse about his arm and quickly left the clinic, Doc's chilling laughter following him. He now carried two terrible secrets: his family's impending raid, and the doctor's murderous past and present cruelty.",
            next: "transition_to_maria_arrest_story"
        },

        // --- Part 2: Maria's Arrest & Escape ---
        transition_to_maria_arrest_story: {
            speaker: "Narrator",
            text: "While Jacob wrestled with Doc's confessions, Sheriff Tom Garrett was closing in on Maria Vasquez. His suspicions, first aroused by her heavy luggage, had grown with her discreet inquiries around town.",
            next: "garrett_investigates_maria_quietly"
        },

        garrett_investigates_maria_quietly: {
            speaker: "Narrator",
            text: "Garrett, though appearing to be a simple frontier lawman, was more cunning than most gave him credit for. He'd had an informant watch the schoolteacher's cottage.",
            next: "informant_reports_to_garrett"
        },

        informant_reports_to_garrett: {
            speaker: "Informant (to Garrett, earlier)",
            text: "'Sheriff, that teacher... she ain't just reading books at night. Saw her cleaning guns. Two big Colts and a rifle. And practicing her draw when she thought no one was looking.'",
            next: "garrett_decides_to_act"
        },

        garrett_decides_to_act: {
            speaker: "Sheriff Tom Garrett",
            text: "(Internal) 'Gunslinger posing as a schoolmarm. In Pike's town. This stinks worse than a week-old corpse.' He decided it was time to pay Miss Vasquez an official visit.",
            next: "garrett_confronts_maria_at_school"
        },

        garrett_confronts_maria_at_school: {
            speaker: "Narrator",
            text: "Sheriff Garrett, accompanied by his paunchy, nervous deputy, Miller, arrived at the schoolhouse as Maria was dismissing her few remaining students.",
            next: "garrett_official_tone_maria"
        },

        garrett_official_tone_maria: {
            speaker: "Sheriff Tom Garrett",
            text: "'Miss Vasquez, a word, if you please. We have a warrant to search these premises. Been some... unsettling reports.'",
            next: "maria_feigns_surprise"
        },

        maria_feigns_surprise: {
            speaker: "Maria Vasquez",
            text: "'A warrant, Sheriff? For a schoolhouse? I can't imagine what unsettling reports could possibly concern me.' Her composure was flawless.",
            choices: [
                {
                    text: "Cooperate, feigning innocence.",
                    next: "maria_cooperates_with_search"
                },
                {
                    text: "Question the legality of the search.",
                    next: "maria_questions_search_legality"
                }
            ]
        },

        maria_cooperates_with_search: { // Optional
            speaker: "Maria Vasquez",
            text: "'By all means, Sheriff. Search wherever you like. Though I fear you'll only find primers and chalk dust.'",
            next: "deputy_finds_guns"
        },

        maria_questions_search_legality: { // Optional
            speaker: "Maria Vasquez",
            text: "'On what grounds, Sheriff? Are you accusing me of something? This is highly irregular.'",
            next: "garrett_produces_warrant"
        },

        garrett_produces_warrant: { // If legality questioned
            speaker: "Sheriff Tom Garrett",
            text: "'Judge Davies signed it himself this morning, Miss Vasquez. Based on reliable information. Now, if you'll step aside...'",
            next: "deputy_finds_guns"
        },

        deputy_finds_guns: {
            speaker: "Deputy Miller",
            text: "'Sheriff! Looky here!' Deputy Miller, rummaging through Maria's living quarters, pulled out one of her Colts from beneath a loose floorboard she hadn't had time to secure perfectly.",
            next: "garrett_arrests_maria"
        },

        garrett_arrests_maria: {
            speaker: "Sheriff Tom Garrett",
            text: "'Maria Vasquez, I'm arresting you on suspicion of weapons smuggling and intent to incite violence. You have the right to remain silent.' He gestured with his own gun. 'Don't make this difficult.'",
            next: "maria_arrested_calmly"
        },

        maria_arrested_calmly: {
            speaker: "Narrator",
            text: "Maria offered no resistance. Her mind was already racing, calculating. This was a setback, but not an insurmountable one. She allowed herself to be led to Perdition's flimsy jail.",
            next: "word_of_maria_arrest_reaches_elijah"
        },

        // Scene 31: Word Reaches Elijah
        word_of_maria_arrest_reaches_elijah: {
            speaker: "Narrator",
            text: "News of the schoolteacher's arrest spread through Perdition like wildfire. Elijah heard it from a frightened Samuel Crane, who wrung his hands in despair.",
            next: "crane_tells_elijah_about_maria"
        },

        crane_tells_elijah_about_maria: {
            speaker: "Samuel Crane",
            text: "'They took her, Preacher! Sheriff Garrett! Found guns in her cottage! Said she was dangerous! Oh, this town is cursed, I tell you!'",
            next: "elijah_conflict_about_maria"
        },

        elijah_conflict_about_maria: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Maria... arrested. She is dangerous, no doubt. But she's also seen Pike's evil. And she was... an ally against it. Garrett... is he Pike's man too?'",
            next: "elijah_decides_to_help_maria"
        },

        elijah_decides_to_help_maria: {
            speaker: "Elijah Cross",
            text: "(Internal) 'I cannot let her rot in that jail, not if Garrett is in Pike's pocket. She knows too much. And perhaps... perhaps there's more to her than just violence.' He made a swift, dangerous decision.",
            choices: [
                {
                    text: "His decision is driven by a sense of justice.",
                    next: "elijah_justice_motivation"
                },
                {
                    text: "His decision is driven by pragmatic need.",
                    next: "elijah_pragmatic_motivation"
                }
            ]
        },

        elijah_justice_motivation: { // Optional
            speaker: "Narrator",
            text: "A town where the sheriff might be corrupt and the only person actively investigating Pike is jailed? Elijah's sense of justice, however battered, wouldn't allow it.",
            next: "elijah_plans_jailbreak"
        },

        elijah_pragmatic_motivation: { // Optional
            speaker: "Narrator",
            text: "Elijah knew Maria was ruthless, but she was also a capable fighter and investigator. With Pike's evil becoming clearer, he needed allies, however unlikely.",
            next: "elijah_plans_jailbreak"
        },
        
        // Scene 37: The Jailbreak Plan
        elijah_plans_jailbreak: {
            speaker: "Narrator",
            text: "Elijah waited for the dead of night. Perdition's jail was a flimsy structure, more for holding drunks than hardened criminals. Deputy Miller was the sole guard on duty.",
            next: "elijah_approaches_jail"
        },

        elijah_approaches_jail: {
            speaker: "Narrator",
            text: "He moved through the shadows, his heart pounding. This was madness. A preacher, breaking someone out of jail. But the thought of the children in Pike's mine spurred him on.",
            next: "confronting_deputy_miller"
        },

        confronting_deputy_miller: {
            speaker: "Elijah Cross",
            text: "'Deputy Miller. I need to speak with the prisoner, Miss Vasquez. Urgent spiritual matters.' Elijah tried to sound authoritative.",
            next: "deputy_miller_refuses"
        },

        deputy_miller_refuses: {
            speaker: "Deputy Miller",
            text: "'No can do, Preacher. Sheriff's orders. Nobody sees her till morning.' Miller was nervous but trying to sound firm.",
            next: "the_struggle_begins"
        },
        
        // Scene 41: The Struggle
        the_struggle_begins: {
            speaker: "Narrator",
            text: "Elijah didn't wait. He pushed past Miller, heading for Maria's cell. The deputy, startled, grabbed for him. A clumsy struggle ensued in the cramped office.",
            next: "maria_joins_the_fray"
        },

        maria_joins_the_fray: {
            speaker: "Narrator",
            text: "Maria, hearing the commotion, had already worked at the rusty lock of her cell with a hairpin she'd concealed. The door creaked open just as Miller and Elijah grappled.",
            next: "deputy_miller_killed"
        },

        // Scene 43: Maria Kills the Deputy
        deputy_miller_killed: {
            speaker: "Narrator",
            text: "In the dim lantern light, Maria moved with viper-like speed. She snatched the deputy's own knife from his belt. There was a sickening sound, a gurgle. Deputy Miller slumped to the floor, eyes wide with shock, the knife buried in his throat.",
            next: "elijah_horrified_at_killing"
        },

        elijah_horrified_at_killing: {
            speaker: "Elijah Cross",
            text: "'Maria! No! What have you... what have *we* done?' Elijah stared at the dead deputy, his hands bloodied from the struggle, his mind reeling.",
            next: "maria_manipulates_elijah"
        },

        // Scene 45: Maria's Manipulation
        maria_manipulates_elijah: {
            speaker: "Maria Vasquez",
            text: "'We had no choice, Preacher!' Her voice was urgent, intense. 'He went for his gun during our struggle! You lunged, he fell on his own knife... it was self-defense! An accident! But they'll call it murder if we're caught.'",
            next: "elijah_confused_guilty"
        },

        elijah_confused_guilty: {
            speaker: "Narrator",
            text: "Elijah looked at his bloody hands, then at the deputy, then at Maria. It had happened so fast. Could she be right? Had he, in his desperate attempt to free her, caused this man's death? The familiar weight of guilt crushed him.",
            next: "escape_from_perdition_jail"
        },

        // Scene 47: Escape
        escape_from_perdition_jail: {
            speaker: "Maria Vasquez",
            text: "'No time to think, Preacher! We have to go! Now! Before Garrett finds out!' She grabbed his arm, pulling him towards the back door.",
            next: "fleeing_into_the_night_ch10"
        },

        // Scene 48: Fleeing into the Night
        fleeing_into_the_night_ch10: {
            speaker: "Narrator",
            text: "They slipped out into the darkness, leaving behind a dead lawman and a web of lies. Elijah was now a fugitive, complicit in a killing he wasn't even sure he'd committed. Maria had ensured his silence, binding him to her with a chain of shared, bloody guilt.",
            next: "new_burden_for_elijah"
        },

        // Scene 49: New Burden for Elijah
        new_burden_for_elijah: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Another death on my hands... dear God, what have I become? Am I doomed to bring destruction wherever I go?' Josiah's forgiveness felt like a distant, cruel joke.",
            next: "chapter_end_scene_ch10"
        },

        // Scene 50: Chapter End - A Darker Alliance
        chapter_end_scene_ch10: {
            speaker: "Narrator",
            text: "Huddled in a deserted shack on the edge of town, Elijah and Maria faced their new reality. He was a man manipulated by his own conscience and a ruthless woman. She had her freedom and a pawn bound by false guilt. Their uneasy alliance had just taken a much darker, bloodier turn.",
            choices: [
                {
                    text: "Continue to Chapter 11",
                    next: null,
                    nextChapter: "chapter11"
                }
            ]
        }
    }
};