// Chapter 12: Truth and Consequences
storyData.chapter12 = {
    name: "Chapter 12",
    title: "Truth and Consequences",
    scenes: {
        // Scene 1: Aftermath of Chapter 11
        start: {
            speaker: "Narrator",
            text: "In the chaotic aftermath of the Rivers Gang attack and Maria's explosive reveal, Perdition was a town holding its breath. Pike was furious, his authority challenged. Jacob was a fugitive, sheltered uneasily by Maria and a stunned Elijah. Silas Rivers was Pike's prisoner. And Josiah Truth, the one-armed preacher, watched all with an unnervingly calm gaze.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 12');
            },
            next: "josiah_approaches_elijah_again_ch12"
        },

        // Scene 2: Josiah Seeks Elijah
        josiah_approaches_elijah_again_ch12: {
            speaker: "Narrator",
            text: "Josiah Truth found Elijah in the ruins of Perdition's original church, where Elijah had taken to spending his troubled nights. The one-armed preacher's expression was sympathetic, but something in his eyes seemed... off.",
            next: "josiah_offers_counsel_to_elijah"
        },

        // Scene 3: Josiah Offers "Counsel"
        josiah_offers_counsel_to_elijah: {
            speaker: "Josiah Truth",
            text: "'You carry a heavy burden, Elijah. The violence of your past, the violence of this town... and now this young man, Jacob, under your protection. It is a great test of faith.'",
            next: "elijah_suspicious_of_josiah_calm"
        },

        // Scene 4: Elijah's Suspicion
        elijah_suspicious_of_josiah_calm: {
            speaker: "Elijah Cross",
            text: "'You seem to know a great deal about my burdens, Josiah. And you take Pike's reign of terror in this town rather calmly. Most men of God would be railing against such injustice.'",
            choices: [
                {
                    text: "Probe Josiah about his connection to Pike.",
                    next: "elijah_probes_josiah_pike_connection"
                },
                {
                    text: "Observe Josiah's reaction to his comment.",
                    next: "observe_josiah_reaction_subtly"
                }
            ]
        },

        // Scene 5: Elijah Probes Josiah (Optional)
        elijah_probes_josiah_pike_connection: {
            speaker: "Elijah Cross",
            text: "'Some say Pike owns every soul in Perdition. Does he own yours too, Josiah? Is that why you offer forgiveness so freely, to lull the lambs for his slaughter?'",
            next: "josiah_smooth_denial"
        },

        // Scene 6: Observe Josiah's Reaction (Optional)
        observe_josiah_reaction_subtly: {
            speaker: "Narrator",
            text: "A flicker, almost imperceptible, in Josiah's good eye. A tightening of his lips before the serene mask resettled. Elijah's unease grew.",
            next: "josiah_smooth_denial"
        },

        // Scene 7: Josiah's Smooth Denial
        josiah_smooth_denial: {
            speaker: "Josiah Truth",
            text: "'Pike is a lost soul, like many. My mission is to save, not to judge worldly power. As for you, Elijah, your guilt over Kansas makes you vulnerable. Pike knows this. He could use it. Allow me to guide you, to help you bear this cross.'",
            next: "maria_interrupts_with_discovery"
        },

        // Scene 8: Maria Interrupts
        maria_interrupts_with_discovery: {
            speaker: "Narrator",
            text: "Before Elijah could respond, Maria Vasquez appeared, her face grim. 'Preacher, a word. Now.' She ignored Josiah, her focus entirely on Elijah.",
            next: "maria_reveals_josiah_pike_link"
        },

        // Scene 9: Maria's Revelation
        maria_reveals_josiah_pike_link: {
            speaker: "Maria Vasquez",
            text: "'Our one-armed friend here isn't just a wandering preacher.' Her voice was ice. 'I followed him last night after he left you. He met with Pike. And Pike gave him a list. A list of children, Preacher. Children to be... 'relocated' to St. Catherine's for 'special schooling'.'",
            next: "josiah_facade_cracks"
        },

        // Scene 10: Josiah's Facade Cracks
        josiah_facade_cracks: {
            speaker: "Narrator",
            text: "Josiah's calm finally broke. A snarl twisted his features. 'You meddling bitch! You don't understand the importance of Pike's work!'",
            next: "elijah_confronts_josiah_truth"
        },

        // Scene 11: Elijah Confronts Josiah
        elijah_confronts_josiah_truth: {
            speaker: "Elijah Cross",
            text: "'Children? You, a man who lost his own daughter, Abigail, to tragedy... you're helping Pike traffic children? Your forgiveness... was it all a lie? A manipulation?' The betrayal was a physical blow.",
            next: "josiah_admits_manipulation"
        },

        // Scene 12: Josiah Admits His Deception
        josiah_admits_manipulation: {
            speaker: "Josiah Truth",
            text: "'Abigail is in a better place!' Josiah spat. 'Pike offers these savage children discipline, purpose! Your guilt, Preacher, yes, it made you pliable. Easier to guide. Pike recognized your weakness. I merely... exploited it for a greater good.'",
            next: "elijah_faith_shatters_rage_builds"
        },

        // Scene 13: Elijah's Faith Shatters, Rage Builds
        elijah_faith_shatters_rage_builds: {
            speaker: "Narrator",
            text: "Something within Elijah, something he had fought to keep pure, to protect from the cynicism of the world, shattered. The man who had offered him forgiveness for his deepest sin was a monster, a hypocrite of the highest order. A white-hot rage, an emotion he hadn't felt since the war, consumed him.",
            next: "elijah_attacks_josiah"
        },

        // Scene 14: Elijah Attacks Josiah
        elijah_attacks_josiah: {
            speaker: "Elijah Cross",
            text: "'YOU PROFANE HER MEMORY! YOU PROFANE GOD HIMSELF!' With a roar, Elijah launched himself at Josiah Truth.",
            next: "brutal_beating_of_josiah"
        },

        // Scene 15-17: The Beating (Montage)
        brutal_beating_of_josiah: {
            speaker: "Narrator",
            text: "It was not a fight. It was a brutal, desperate beating. Elijah, all his pent-up guilt, grief, and righteous fury, rained blows down on Josiah. The one-armed preacher, caught by surprise, offered little resistance.",
            next: "maria_observes_elijah_violence"
        },
        maria_observes_elijah_violence: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'So, the Preacher has a devil in him after all. Good. Perhaps he's not so different from the rest of us.' She watched, making no move to intervene yet.",
            next: "jacob_witnesses_elijah_rage"
        },
        jacob_witnesses_elijah_rage: {
            speaker: "Narrator",
            text: "Jacob, drawn by the shouts, arrived to see Elijah, the man he'd begun to look up to, pummeling Josiah into a bloody mess. He stood frozen in shock.",
            next: "elijah_stops_josiah_near_death"
        },

        // Scene 18: Elijah Stops, Horrified
        elijah_stops_josiah_near_death: {
            speaker: "Narrator",
            text: "Finally, Elijah staggered back, panting, his knuckles raw and bloody. Josiah lay broken and unconscious at his feet, near death. The rage drained from Elijah, replaced by a vast, empty horror at what he had done.",
            next: "elijah_realization_of_his_action"
        },
        
        // Scene 19: Elijah's Realization
        elijah_realization_of_his_action: {
            speaker: "Elijah Cross",
            text: "'What... what have I done?' He looked at his hands, the hands that had once held a Bible, now instruments of near-fatal violence. 'I'm no better than them...'",
            next: "maria_pragmatic_assessment"
        },

        // Scene 20: Maria's Pragmatic Assessment
        maria_pragmatic_assessment: {
            speaker: "Maria Vasquez",
            text: "'He's still breathing. Barely. If he dies, Pike will hunt us all down. If he lives, he might talk. We need a doctor.' Her gaze fell on Elijah. 'And you, Preacher, need to pull yourself together.'",
            next: "decision_to_get_doc_whitmore"
        },
        
        // Scene 21: Decision to Get Doc
        decision_to_get_doc_whitmore: {
            speaker: "Jacob Rivers",
            text: "'Doc Whitmore... he can help. But... after what he told me... can we trust him?' Jacob was pale but resolute.",
            next: "maria_insists_on_doc"
        },

        maria_insists_on_doc: {
            speaker: "Maria Vasquez",
            text: "'Trust has nothing to do with it. Doc is a transaction. He'll want payment. And right now, Josiah alive is more valuable than Josiah dead. Go get him, Jacob. Quickly.'",
            next: "jacob_fetches_doc_whitmore"
        },

        // Scene 23: Jacob Fetches Doc
        jacob_fetches_doc_whitmore: {
            speaker: "Narrator",
            text: "Jacob ran, finding Doc Whitmore in his clinic, in the throes of a particularly vicious laudanum withdrawal, his hands shaking uncontrollably.",
            next: "doc_in_withdrawal_state"
        },

        // Scene 24: Doc in Withdrawal
        doc_in_withdrawal_state: {
            speaker: "Doc Whitmore",
            text: "(Muttering, trembling) 'Can't... focus... Need... just a little... to steady the nerves...'",
            next: "jacob_explains_emergency_to_doc"
        },

        // Scene 25: Jacob Explains Urgency
        jacob_explains_emergency_to_doc: {
            speaker: "Jacob Rivers",
            text: "'Doc, it's Josiah Truth! He's hurt bad! Elijah... he nearly killed him! You have to come!'",
            next: "doc_refuses_in_withdrawal"
        },
        
        // Scene 26: Doc Refuses
        doc_refuses_in_withdrawal: {
            speaker: "Doc Whitmore",
            text: "'Can't... help anyone... like this...' He slumped over his desk. 'My hands... useless...'",
            next: "maria_arrives_forces_doc_issue"
        },

        // Scene 27: Maria Arrives
        maria_arrives_forces_doc_issue: {
            speaker: "Narrator",
            text: "Maria, impatient, strode into Doc's clinic. She took one look at his state, then at the nearly dead Josiah who Elijah and Jacob had dragged in.",
            next: "maria_forces_doc_to_sober_up"
        },

        // Scene 28: Maria Forces the Issue
        maria_forces_doc_to_sober_up: {
            speaker: "Maria Vasquez",
            text: "'No laudanum for you, Doctor, until he's stable.' She swept his vial off the table. 'Josiah lives, you get your fix. He dies, Pike kills us all, and you die slow and sober. Your choice.'",
            choices: [
                {
                    text: "Doc tries to argue, desperate for laudanum.",
                    next: "doc_argues_for_laudanum"
                },
                {
                    text: "Doc, seeing no other option, begins to fight withdrawal.",
                    next: "doc_fights_withdrawal"
                }
            ]
        },
        
        // Scene 29: Doc Argues (Optional)
        doc_argues_for_laudanum: {
            speaker: "Doc Whitmore",
            text: "'You don't understand... I need it to function! My hands... I can't operate like this!' Panic flared in his eyes.",
            next: "maria_unmoved_by_doc_pleas"
        },

        // Scene 30: Maria Unmoved (If Doc argues)
        maria_unmoved_by_doc_pleas: {
            speaker: "Maria Vasquez",
            text: "'Find a way, Doctor. Or find out how creative Pike can be with his displeasure.' Her gaze was like chipped flint.",
            next: "doc_fights_withdrawal"
        },

        // Scene 31: Doc Fights Withdrawal
        doc_fights_withdrawal: {
            speaker: "Narrator",
            text: "Trembling violently, sweating, nausea churning his stomach, Doc Whitmore began the agonizing process of trying to focus through the fog of withdrawal. The need for laudanum was a physical torment, but Maria's threat, and the sight of Josiah's life ebbing away, provided a desperate, unwelcome clarity.",
            next: "makeshift_surgery_begins"
        },

        // Scene 32-35: Makeshift Surgery (Montage)
        makeshift_surgery_begins: {
            speaker: "Narrator",
            text: "Using the crude instruments in his bag, Doc began working on Josiah by the flickering lamplight. His hands shook, but years of medical training fought against the drug's absence.",
            next: "elijah_watches_in_horror_guilt"
        },
        elijah_watches_in_horror_guilt: {
            speaker: "Narrator",
            text: "Elijah watched, aghast at the violence he had wrought, his earlier rage replaced by sickening guilt. Maria stood guard, her expression unreadable, while Jacob assisted Doc, fetching water and bandages, his face pale.",
            next: "doc_struggles_with_precision"
        },
        doc_struggles_with_precision: {
            speaker: "Doc Whitmore",
            text: "(Muttering through clenched teeth) 'Damn these shakes... Need to stop the bleeding... Ribs cracked... possible lung puncture...'",
            next: "josiah_stirs_begins_to_mutter"
        },
        
        // Scene 36: Josiah Stirs
        josiah_stirs_begins_to_mutter: {
            speaker: "Narrator",
            text: "As Doc worked, Josiah began to stir, muttering deliriously. His words were fragmented, pain-filled, but they caught Doc's attention.",
            next: "josiah_delirious_confession_to_doc1"
        },

        // Scene 37: Josiah's Delirious Confession - Part 1
        josiah_delirious_confession_to_doc1: {
            speaker: "Josiah Truth",
            text: "(Delirious) 'Pike... the mercury... silver tears... He promised... a new beginning for the chosen... St. Catherine's was just the start... so many children...'",
            next: "doc_focuses_despite_withdrawal"
        },

        // Scene 38: Doc's Focus
        doc_focuses_despite_withdrawal: {
            speaker: "Narrator",
            text: "Doc's hands, though still trembling, moved with more purpose. The information Josiah was spilling... it was valuable. Very valuable. It was a potent distraction from his own suffering.",
            next: "josiah_delirious_confession_to_doc2"
        },

        // Scene 39: Josiah's Delirious Confession - Part 2
        josiah_delirious_confession_to_doc2: {
            speaker: "Josiah Truth",
            text: "(Delirious) 'The underground railroad... not for freedom... for the mines... fresh subjects for the General's project... Colonel Morrison then... General now... he funds it all... weapons...'",
            next: "doc_extracts_more_information"
        },
        
        // Scene 40: Doc Extracts More
        doc_extracts_more_information: {
            speaker: "Doc Whitmore",
            text: "'The General's project, Josiah? What weapons? Tell me about the mercury... the children... Pike's full operation.' Doc's voice was low, coaxing, even as he stitched a deep wound.",
            choices: [
                {
                    text: "Elijah overhears and reacts with deeper horror.",
                    next: "elijah_overhears_confession"
                },
                {
                    text: "Maria listens intently, assessing the information's value.",
                    next: "maria_assesses_josiah_confession"
                }
            ]
        },

        // Scene 41: Elijah Overhears (Optional)
        elijah_overhears_confession: {
            speaker: "Narrator",
            text: "Elijah heard fragments of Josiah's confession. General Morrison from the Prologue... St. Catherine's... a government project? The betrayal, the evil, it was deeper, more systemic than he could have imagined.",
            next: "maria_assesses_josiah_confession"
        },

        // Scene 42: Maria Assesses (Optional or Converging)
        maria_assesses_josiah_confession: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'General Morrison... Pike has government connections. This is bigger than just Perdition. This information could be very useful... if we survive Pike.'",
            next: "josiah_reveals_full_extent"
        },

        // Scene 43-45: Josiah Reveals Full Extent (Montage of confession)
        josiah_reveals_full_extent: {
            speaker: "Narrator",
            text: "In his delirium, Josiah laid bare Pike's entire empire: the network of corrupt officials, the secret government contracts for mercury-derived weapons, the routes used to traffic children from reservations and orphanages, the locations of other hidden mines.",
            next: "josiah_mentions_sarah_curse"
        },
        josiah_mentions_sarah_curse: {
            speaker: "Josiah Truth",
            text: "(Feverish) 'Sarah Crow Feather... her curse... Crane always feared it... Four strangers... a reckoning... Pike laughed... but the earth remembers...'",
            next: "doc_stabilizes_josiah"
        },
        doc_stabilizes_josiah: {
            speaker: "Narrator",
            text: "By dawn, Josiah was stabilized, though his life hung by a thread. Doc, exhausted and ravaged by withdrawal but grimly triumphant, had saved a life – and acquired a treasure trove of damning information.",
            next: "aftermath_doc_and_his_knowledge"
        },
        
        // Scene 46: Aftermath - Doc's New Power
        aftermath_doc_and_his_knowledge: {
            speaker: "Doc Whitmore",
            text: "(Internal, a sliver of laudanum finally allowed by a wary Maria) 'Pike's entire operation... in my head. This changes everything. This information isn't just leverage against Pike; it's a ticket to anywhere, anything I want.'",
            next: "elijah_grapples_with_his_violence"
        },

        // Scene 47: Elijah Grapples with His Violence
        elijah_grapples_with_his_violence: {
            speaker: "Narrator",
            text: "Elijah sat apart, staring at his bruised and bloodied hands. He had nearly killed a man, albeit a monstrous one. The rage had felt... familiar. Terrifyingly so. Was this his true nature, the preacher's collar merely a costume?",
            next: "maria_and_jacob_watch_elijah"
        },

        // Scene 48: Maria and Jacob Watch
        maria_and_jacob_watch_elijah: {
            speaker: "Narrator",
            text: "Maria observed Elijah's turmoil with a detached interest. Jacob looked from the recovering Josiah to the tormented Elijah, his young face etched with confusion and a growing understanding of the darkness within men.",
            next: "uneasy_truce_new_secrets"
        },

        // Scene 49: Uneasy Truce, New Secrets
        uneasy_truce_new_secrets: {
            speaker: "Narrator",
            text: "Josiah Truth lived, for now. Doc Whitmore held the keys to Pike's kingdom. Elijah Cross was stained by his own violence. And Maria and Jacob were witnesses to it all. The web in Perdition had grown tighter, more complex, more deadly.",
            next: "chapter_end_scene_ch12"
        },

        // Scene 50: Chapter End - Seeds of Revelation
        chapter_end_scene_ch12: {
            speaker: "Narrator",
            text: "The consequences of Josiah's unmasking were yet to fully bloom, but the seeds were sown. Pike's operation was vulnerable, Doc was armed with devastating knowledge, and Elijah's soul teetered on a precipice. Truth, when it finally came, was often caked in blood.",
            choices: [
                {
                    text: "Continue to Chapter 13",
                    next: null,
                    nextChapter: "chapter13"
                }
            ]
        }
    }
};