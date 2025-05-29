// Chapter 14: The Doctor's Cure
storyData.chapter14 = {
    name: "Chapter 14",
    title: "The Doctor's Cure",
    scenes: {
        // Scene 1: Doc's Continued Research
        start: {
            speaker: "Narrator",
            text: "In the weeks following Josiah Truth's harrowing confession, Doc Whitmore immersed himself in research. Josiah, though recovering slowly under Doc's grudging care, had provided a map to Pike's depravity. The key, Doc suspected, lay in the unique silver being mined by the children.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 14');
            },
            next: "doc_analyzing_ore_samples"
        },

        // Scene 2: Analyzing Ore Samples
        doc_analyzing_ore_samples: {
            speaker: "Narrator",
            text: "He'd managed to acquire samples of the ore from Jacob, who still worked in Pike's mine, his guilt a palpable shadow. Doc's makeshift lab in his clinic buzzed with grim purpose.",
            next: "doc_discovery_amalgam"
        },

        // Scene 3: The Amalgam Discovery
        doc_discovery_amalgam: {
            speaker: "Doc Whitmore",
            text: "(Muttering to his notes) 'Extraordinary... Not just silver. It's a natural amalgam. Mercury content is off the charts. Highly toxic to extract, but the refined product... its conductivity, its density...'",
            next: "doc_connects_to_weapons_research"
        },

        // Scene 4: Connection to Weapons Research
        doc_connects_to_weapons_research: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Josiah mentioned General Morrison... government contracts... weapons. This amalgam would be perfect for... certain kinds of electrical detonators or guidance systems. Pike isn't just mining silver; he's supplying a war machine with poison.'",
            next: "source_of_poisoning_confirmed"
        },

        // Scene 5: Source of Poisoning Confirmed
        source_of_poisoning_confirmed: {
            speaker: "Narrator",
            text: "This confirmed it. The children weren't just suffering from proximity to mercury; the very ore they were forced to handle, to breathe, was the source of their slow, agonizing deaths. It was a deliberate, calculated sacrifice for profit and power.",
            next: "doc_motivation_for_antidote"
        },

        // Scene 6: Doc's Motivation for an Antidote
        doc_motivation_for_antidote: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'A specific type of heavy metal poisoning. Complex, but not impossible to counteract. An antidote... yes. If I can synthesize an effective chelating agent...'",
            choices: [
                {
                    text: "His primary thought: 'This could make me indispensable.'",
                    next: "doc_thinks_indispensable"
                },
                {
                    text: "A fleeting thought: 'I could actually save them.'",
                    next: "doc_thinks_save_them"
                }
            ]
        },

        // Scene 7: Indispensable (Optional)
        doc_thinks_indispensable: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'An antidote that only I can provide... Pike would pay. The families would pay. The government, if they knew... Control. That's what a unique cure offers.'",
            next: "doc_begins_synthesis"
        },

        // Scene 8: Save Them (Optional)
        doc_thinks_save_them: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'These children... like the Harrington boy... No. Different. This is an opportunity, not a repeat of past failures. But the science... the challenge of it...' He pushed aside any nascent altruism.",
            next: "doc_begins_synthesis"
        },

        // Scene 9-12: Synthesizing the Antidote (Montage)
        doc_begins_synthesis: {
            speaker: "Narrator",
            text: "Days and nights blurred. Doc, fueled by laudanum and an almost manic intellectual fervor, worked tirelessly. He requisitioned chemicals from Pike's own supplies, claiming they were for 'improving worker vitality'.",
            next: "doc_experiments_and_refines"
        },
        doc_experiments_and_refines: {
            speaker: "Narrator",
            text: "He experimented, refined, tested on contaminated water samples, then on small, sickly animals he 'acquired'. The town barely saw him. His addiction gnawed, but the intellectual chase was its own potent drug.",
            next: "doc_breakthrough_antidote_created"
        },
        doc_breakthrough_antidote_created: {
            speaker: "Doc Whitmore",
            text: "(Triumphantly, holding up a vial of clear liquid) 'Eureka! Stable. Effective. The perfect counter to Pike's poison.'",
            next: "doc_realizes_power_of_antidote"
        },
        
        // Scene 13: The Power of the Antidote
        doc_realizes_power_of_antidote: {
            speaker: "Narrator",
            text: "But with the triumph came a cold, clear realization. He held life and death in that vial. He could save the children. Or... he could control Perdition. The town, Pike, the desperate families – all would depend on him.",
            next: "doc_first_test_on_sick_child"
        },

        // Scene 14: First "Test" - A Sick Child
        doc_first_test_on_sick_child: {
            speaker: "Narrator",
            text: "A miner's child, little Sarah (no relation to Crane's Sarah Crow Feather), was brought to him, her tremors severe, her breathing shallow. Her parents watched with hollow eyes.",
            next: "doc_administers_diluted_dose"
        },

        // Scene 15: Administering a Diluted Dose
        doc_administers_diluted_dose: {
            speaker: "Doc Whitmore",
            text: "'This new formulation... it's potent, but requires careful administration over time.' He administered a carefully diluted dose – enough to show improvement, not enough for a full cure.",
            next: "parents_desperate_hope"
        },

        // Scene 16: Parents' Desperate Hope
        parents_desperate_hope: {
            speaker: "Sarah's Father",
            text: "'Will she... will she be alright, Doctor? We'll give you anything!'",
            next: "doc_sets_his_price_families"
        },

        // Scene 17: Doc Sets His Price
        doc_sets_his_price_families: {
            speaker: "Doc Whitmore",
            text: "'The ingredients are... exceptionally rare. And the process, delicate. Each course of treatment will be ten dollars. Payable in advance. For her life, a small price, wouldn't you agree?'",
            next: "doc_exploits_families_misery"
        },

        // Scene 18-20: Exploiting Families (Montage)
        doc_exploits_families_misery: {
            speaker: "Narrator",
            text: "News of Doc's 'cure' spread. Families scraped together their last pennies, sold heirlooms, went into debt to Pike's company store, all for a few more drops of Doc's diluted hope.",
            next: "doc_keeps_them_dependent"
        },
        doc_keeps_them_dependent: {
            speaker: "Narrator",
            text: "He kept them dependent, their children showing just enough improvement to keep their hope alive, their payments flowing. His laudanum supply was now limitless, his pockets heavy with their desperation.",
            next: "doc_approaches_pike_with_deal"
        },
        
        // Scene 21: Doc's Deal with Pike
        doc_approaches_pike_with_deal: {
            speaker: "Narrator",
            text: "Next, Doc approached Pike, not with an accusation, but with a business proposition.",
            next: "doc_to_pike_worker_functionality"
        },

        doc_to_pike_worker_functionality: {
            speaker: "Doc Whitmore",
            text: "'Mr. Pike, your workforce... it suffers. This mountain fever, it saps their strength. Productivity must be plummeting. I have a tonic. It keeps them functional. Not a cure, mind you, but it keeps them on their feet, digging your silver.'",
            next: "pike_skeptical_but_interested"
        },

        pike_skeptical_but_interested: {
            speaker: "Pike",
            text: "'A tonic, Doctor? You're suddenly a miracle worker?' Pike was skeptical, but the loss of child laborers and the sickness spreading even to some adult miners was impacting his yield.",
            next: "doc_proposes_percentage_to_pike"
        },

        doc_proposes_percentage_to_pike: {
            speaker: "Doc Whitmore",
            text: "'Miracles have their price. A small percentage of the mine's profits, say ten percent, ensures your workers remain... operational. And my silence about the... unfortunate side effects of this region's unique geology.'",
            next: "pike_agrees_to_docs_terms"
        },

        // Scene 25: Pike Agrees
        pike_agrees_to_docs_terms: {
            speaker: "Narrator",
            text: "Pike, seeing the cold calculation in Doc's eyes and needing his workforce, agreed. Doc Whitmore was now profiting from both the victims and the perpetrator of Perdition's poisoning.",
            next: "elijah_jacob_notice_doc_change"
        },

        // Scene 26: Elijah and Jacob Notice
        elijah_jacob_notice_doc_change: {
            speaker: "Narrator",
            text: "Elijah and Jacob couldn't help but notice the change in Doc. His clothes were finer, his laudanum use more blatant, yet he seemed more energetic, more... powerful. They also saw the continued suffering of the children.",
            next: "jacob_questions_doc_about_cure"
        },

        jacob_questions_doc_about_cure: {
            speaker: "Jacob Rivers",
            text: "'Doc, these kids... they get a little better with your medicine, then they just seem to... stay sick. And the fees you're charging... their families have nothing left.'",
            next: "elijah_adds_moral_concern"
        },

        elijah_adds_moral_concern: {
            speaker: "Elijah Cross",
            text: "'Is this cure genuine, Doctor? Or are you merely peddling false hope for coin? This feels... unconscionable.'",
            next: "doc_evasive_answers_initially"
        },

        doc_evasive_answers_initially: {
            speaker: "Doc Whitmore",
            text: "'Healing is a complex art, gentlemen. These are stubborn afflictions. I do what I can, with the resources available.' But his eyes shifted, a hint of his old self-deception now a confident mask.",
            next: "elijah_jacob_investigate_doc_secretly"
        },
        
        // Scene 30: Elijah and Jacob Investigate
        elijah_jacob_investigate_doc_secretly: {
            speaker: "Narrator",
            text: "Suspicious, Elijah and Jacob watched Doc more closely. One night, while Doc was in a laudanum stupor, Jacob slipped into his clinic.",
            next: "jacob_finds_docs_notes_antidote"
        },

        // Scene 31: Jacob Finds Doc's Notes
        jacob_finds_docs_notes_antidote: {
            speaker: "Narrator",
            text: "He found Doc's hidden ledger: detailed notes on the amalgam, the true antidote's formula, records of diluted doses, and a chilling accounting of profits from families and Pike.",
            next: "jacob_shows_elijah_evidence"
        },
        
        // Scene 32: Jacob Shows Elijah
        jacob_shows_elijah_evidence: {
            speaker: "Jacob Rivers",
            text: "'Elijah... look at this. He has a real cure. He's been... he's been letting them suffer. For money.' Jacob's voice shook with disbelief and anger.",
            next: "elijah_confronts_doc_with_jacob"
        },

        // Scene 33: Confrontation
        elijah_confronts_doc_with_jacob: {
            speaker: "Elijah Cross",
            text: "'Explain this, Doctor!' Elijah slammed the ledger on Doc's desk the next morning. 'You have the means to save these children, truly save them, and you choose to exploit their misery?'",
            choices: [
                {
                    text: "Doc tries to deny it.",
                    next: "doc_denial_attempt_ch14"
                },
                {
                    text: "Doc coldly admits the truth.",
                    next: "doc_admits_truth_coldly_ch14"
                }
            ]
        },

        // Scene 34: Doc's Denial (Optional)
        doc_denial_attempt_ch14: {
            speaker: "Doc Whitmore",
            text: "'My research is complex! You wouldn't understand the nuances of treatment protocols! I am doing my best in a difficult situation!'",
            next: "jacob_counters_denial_with_evidence"
        },

        // Scene 35: Jacob Counters Denial (If Doc denies)
        jacob_counters_denial_with_evidence: {
            speaker: "Jacob Rivers",
            text: "'We understand profits, Doc. And diluted medicine. It's all here, in your own hand!'",
            next: "doc_admits_truth_coldly_ch14"
        },
        
        // Scene 36: Doc Admits the Truth Coldly
        doc_admits_truth_coldly_ch14: {
            speaker: "Doc Whitmore",
            text: "'Alright, yes!' Doc snapped, his composure cracking. 'So I control the supply. So I ensure my own... compensation. What of it? Before me, these children had NO hope. I offer them a measure of relief. Is a slow cure, managed by a skilled hand, not better than a swift death?'",
            next: "doc_manipulative_argument"
        },

        // Scene 37: Doc's Manipulative Argument
        doc_manipulative_argument: {
            speaker: "Doc Whitmore",
            text: "'Think, Elijah! If I released the full antidote, how long before Pike or his government cronies seize it? Weaponize it further? Or silence me and let the children die anyway? My 'controlled distribution,' as you call it, keeps me alive, keeps them alive, and keeps Pike from knowing its true potential.'",
            next: "elijah_jacob_moral_quandary"
        },
        
        // Scene 38: Elijah and Jacob's Moral Quandary
        elijah_jacob_moral_quandary: {
            speaker: "Narrator",
            text: "Elijah and Jacob were stunned. Doc's logic was twisted, self-serving, yet held a perverse grain of truth. In a town run by Pike, was Doc's cynical control a shield, however tainted?",
            next: "elijah_reluctant_concession"
        },

        // Scene 39: Elijah's Reluctant Concession
        elijah_reluctant_concession: {
            speaker: "Elijah Cross",
            text: "'It's monstrous, Doctor. But... perhaps you're right. A flawed cure is better than no cure. For now. But this cannot be the final answer. We need to stop Pike, for good.'",
            next: "doc_proposes_a_new_idea"
        },

        // Scene 40: Doc Proposes a New Idea
        doc_proposes_a_new_idea: {
            speaker: "Doc Whitmore",
            text: "'Stopping Pike requires resources, gentlemen. Power. Pike has a personal safe in his office at the mine. Reputedly filled with coin, and perhaps... more interesting items. Records. Documents.'",
            next: "maria_joins_discussion_heist_plan"
        },
        
        // Scene 41: Maria Joins the Discussion
        maria_joins_discussion_heist_plan: {
            speaker: "Narrator",
            text: "Maria, who had entered quietly during the argument, listened intently. A heist. This, she understood.",
            next: "maria_interest_in_documents"
        },

        // Scene 42: Maria's Interest
        maria_interest_in_documents: {
            speaker: "Maria Vasquez",
            text: "'Documents, you say, Doctor? Pike's correspondence? Contracts? Names of his associates, perhaps? That kind of paper can be more valuable than gold... for blackmailing powerful people.'",
            next: "doc_confirms_maria_assessment"
        },

        // Scene 43: Doc Confirms
        doc_confirms_maria_assessment: {
            speaker: "Doc Whitmore",
            text: "'Precisely, Miss Vasquez. Something for everyone, it seems. I want the money, to fund my... research and ensure a stable supply of my... tonics.'",
            next: "elijah_jacob_motive_for_heist"
        },

        // Scene 44: Elijah and Jacob's Motive
        elijah_jacob_motive_for_heist: {
            speaker: "Elijah Cross",
            text: "'And we,' Elijah looked at Jacob, 'want to save those children. If that safe contains evidence to expose Pike, or funds to get those children away from here...' ",
            next: "jacob_agrees_for_children"
        },

        jacob_agrees_for_children: {
            speaker: "Jacob Rivers",
            text: "'For the children... I'm in. Whatever it takes.'",
            next: "the_heist_alliance_formed"
        },

        // Scene 46: The Heist Alliance Forms
        the_heist_alliance_formed: {
            speaker: "Narrator",
            text: "And so, an unlikely, desperate alliance was forged. Four protagonists, each with their own agenda, their own darkness, now united by a common, dangerous goal: to rob Cornelius Pike.",
            next: "heist_planning_begins_ch14"
        },
        
        // Scene 47-49: Heist Planning (Montage)
        heist_planning_begins_ch14: {
            speaker: "Narrator",
            text: "They began to plan. Jacob's knowledge of the mine layout was crucial. Maria's skills in stealth and combat would handle security. Doc's understanding of Pike's routines and his medical bag (for 'emergencies') would be vital.",
            next: "elijah_role_in_heist_planning"
        },
        elijah_role_in_heist_planning: {
            speaker: "Narrator",
            text: "Elijah, the moral compass, found himself planning a crime, justifying it by the greater good. His role would be to manage any unexpected 'human elements', to talk their way out of tight spots if alarms were raised.",
            next: "different_motives_same_target"
        },
        different_motives_same_target: {
            speaker: "Narrator",
            text: "Their motives were a tangle of greed, revenge, desperation, and a sliver of genuine altruism. But their target was the same: Pike's safe, and the secrets and spoils within.",
            next: "chapter_end_scene_ch14"
        },

        // Scene 50: Chapter End - The Plan is Set
        chapter_end_scene_ch14: {
            speaker: "Narrator",
            text: "As Chapter 14 closes, the plan for the heist is set. Doc Whitmore's 'cure' continues to be a tool of control, but now it has also inadvertently united the four in a high-stakes gamble that could save Perdition's children or doom them all.",
            choices: [
                {
                    text: "Continue to Chapter 15",
                    next: null,
                    nextChapter: "chapter15"
                }
            ]
        }
    }
};