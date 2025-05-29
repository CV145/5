// Chapter 11: The Rivers Run Red
storyData.chapter11 = {
    name: "Chapter 11",
    title: "The Rivers Run Red",
    scenes: {
        // Scene 1: Perdition on Edge
        start: {
            speaker: "Narrator",
            text: "A week after Jacob's confession to Doc Whitmore, the air in Perdition was thick with unspoken anticipation. Pike's silver shipment, heavily guarded, was due to leave at dawn. Jacob, his arm mending but his soul in torment, knew his family was close.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 11');
            },
            next: "pike_overseeing_shipment_prep"
        },

        // Scene 2: Pike Oversees Preparations
        pike_overseeing_shipment_prep: {
            speaker: "Narrator",
            text: "Cornelius Pike, flanked by Jim Dalton and a dozen extra guards, personally oversaw the loading of the silver onto a reinforced wagon. He was taking no chances. This shipment was vital.",
            next: "jacob_assigned_to_guard_duty"
        },

        // Scene 3: Jacob Assigned to Guard Duty
        jacob_assigned_to_guard_duty: {
            speaker: "Hank Morrison",
            text: "'Rivers! Pike wants every able body on guard duty for the shipment. Your arm good enough to hold a rifle?' Morrison's tone was laced with suspicion since Jacob's discovery in the mine.",
            next: "jacob_reluctant_acceptance_ch11"
        },

        // Scene 4: Jacob's Reluctant Acceptance
        jacob_reluctant_acceptance_ch11: {
            speaker: "Jacob Rivers",
            text: "'It'll do, Mr. Morrison.' (Internal) 'Guard duty. Against my own family. What have I gotten myself into?'",
            next: "elijah_maria_doc_observe_town_tension"
        },

        // Scene 5: Other Protagonists Observe
        elijah_maria_doc_observe_town_tension: {
            speaker: "Narrator",
            text: "Elijah, Maria, and Doc also felt the town's tension. Elijah prayed for peace, Maria sharpened her knives under her schoolteacher skirts, and Doc ensured his laudanum supply was plentiful, anticipating a surge in 'patients' needing pain relief – or a profitable chaos.",
            next: "pre_dawn_departure_of_shipment"
        },

        // Scene 6: Pre-Dawn Departure
        pre_dawn_departure_of_shipment: {
            speaker: "Narrator",
            text: "In the grey light before dawn, the silver shipment rumbled out of Perdition. Jacob, rifle in hand, rode alongside the wagon, his gut churning. He scanned the rocky bluffs overlooking the trail.",
            next: "the_waiting_game_first_hour"
        },

        // Scene 7-9: The Waiting Game (Montage)
        the_waiting_game_first_hour: {
            speaker: "Narrator",
            text: "The first hour passed uneventfully. The only sounds were the creak of wagon wheels and the jingle of harnesses. Jacob's eyes ached from straining to see any sign of his father's gang.",
            next: "tension_mounts_on_trail"
        },
        tension_mounts_on_trail: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'Maybe Samuel got through to him. Maybe Pa changed his mind.' But he knew his father. Silas Rivers never changed his mind once blood or money was involved.",
            next: "ambush_signal_explosion"
        },
        ambush_signal_explosion: {
            speaker: "Narrator",
            text: "Then, an explosion ripped through the quiet morning. Rocks and debris rained down, blocking the trail ahead. The ambush had begun.",
            next: "rivers_gang_attacks_from_bluffs"
        },

        // Scene 10: The Rivers Gang Attacks
        rivers_gang_attacks_from_bluffs: {
            speaker: "Narrator",
            text: "Figures rose from the bluffs, rifles blazing. The distinctive roar of Silas Rivers' customized Colt Dragoon echoed through the canyon. 'Take the silver! Kill Pike's dogs!'",
            next: "pike_guards_return_fire_chaos"
        },

        // Scene 11: Chaos Erupts
        pike_guards_return_fire_chaos: {
            speaker: "Narrator",
            text: "Pike's guards, though surprised, were veterans. They returned fire, turning the narrow canyon into a deathtrap of ricocheting bullets and panicked horses.",
            next: "jacob_caught_in_the_crossfire"
        },

        // Scene 12: Jacob Caught in the Middle
        jacob_caught_in_the_crossfire: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'God help me, what do I do?' He raised his rifle, firing into the air, aiming at no one, his loyalties tearing him apart.",
            choices: [
                {
                    text: "Focus on protecting the shipment (Pike's side).",
                    next: "jacob_defends_shipment_nominally"
                },
                {
                    text: "Look for an opportunity to help his family.",
                    next: "jacob_looks_for_family_opportunity"
                },
                {
                    text: "Try to find his brother Samuel.",
                    next: "jacob_searches_for_samuel"
                }
            ]
        },

        // Scene 13: Jacob "Defends" Shipment (Optional Path)
        jacob_defends_shipment_nominally: {
            speaker: "Narrator",
            text: "Jacob fired towards the bluffs, his shots deliberately wide. He had to look like he was fighting, or Pike's men would turn on him.",
            next: "jacob_searches_for_samuel" // Converge
        },

        // Scene 14: Jacob Looks for Family Opportunity (Optional Path)
        jacob_looks_for_family_opportunity: {
            speaker: "Narrator",
            text: "His eyes scanned the attackers, looking for a familiar face, a chance to subtly aid their attack without being seen. The thought made him sick, but blood called to blood.",
            next: "jacob_searches_for_samuel" // Converge
        },
        
        // Scene 15: Jacob Searches for Samuel
        jacob_searches_for_samuel: {
            speaker: "Narrator",
            text: "Amidst the gunfire, Jacob frantically searched for his younger brother, Samuel. He'd warned him, begged him not to come.",
            next: "jacob_spots_samuel_pinned_down"
        },

        // Scene 16: Samuel Pinned Down
        jacob_spots_samuel_pinned_down: {
            speaker: "Narrator",
            text: "He saw Samuel, pinned down behind a small outcrop, two of Pike's guards taking aim at his position. Samuel was trapped.",
            next: "jacob_creates_diversion_for_samuel"
        },

        // Scene 17: Jacob Creates a Diversion
        jacob_creates_diversion_for_samuel: {
            speaker: "Jacob Rivers",
            text: "'Hey! Over here, you yellowhammer bastards!' Jacob fired his rifle near the guards মনোযোগ Samuel, drawing their attention. It was a desperate gamble.",
            next: "guards_turn_on_jacob"
        },
        
        // Scene 18: Guards Turn on Jacob
        guards_turn_on_jacob: {
            speaker: "Pike's Guard",
            text: "'It's that new kid, Rivers! Get him!' Bullets whizzed past Jacob's head.",
            next: "samuel_uses_opening_to_escape"
        },

        // Scene 19: Samuel Escapes
        samuel_uses_opening_to_escape: {
            speaker: "Narrator",
            text: "The diversion worked. Samuel scrambled away, disappearing over the ridge. Jacob felt a surge of relief, quickly followed by fear for his own skin.",
            next: "battle_rages_on_losses_both_sides"
        },

        // Scene 20: Battle Rages
        battle_rages_on_losses_both_sides: {
            speaker: "Narrator",
            text: "The fight was brutal. Men fell on both sides. Pike, surprisingly, fought with cold fury, his rifle spitting death. Jim Dalton was a whirlwind of violence at his side.",
            next: "silas_rivers_leads_charge"
        },
        
        // Scene 21-23: Silas Rivers Leads a Charge (Montage)
        silas_rivers_leads_charge: {
            speaker: "Narrator",
            text: "Silas Rivers, seeing his chance dwindling, led a desperate charge down the slope towards the wagon. He was a force of nature, his twin Dragoons roaring.",
            next: "jacob_avoids_confronting_father"
        },
        jacob_avoids_confronting_father: {
            speaker: "Narrator",
            text: "Jacob found himself face to face with one of his father's oldest cronies. He managed to disarm the man rather than shoot him, a small act of mercy in the carnage.",
            next: "pike_men_gain_upper_hand"
        },
        pike_men_gain_upper_hand: {
            speaker: "Narrator",
            text: "But Pike's men were better armed, better positioned. The Rivers Gang's attack faltered, then broke.",
            next: "silas_rivers_surrounded_captured"
        },

        // Scene 24: Silas Rivers Captured
        silas_rivers_surrounded_captured: {
            speaker: "Narrator",
            text: "Silas Rivers, out of ammunition and wounded, was surrounded. He fought like a trapped bear but was eventually clubbed into submission. The great outlaw was captured.",
            next: "aftermath_of_the_battle_ch11"
        },

        // Scene 25: Aftermath of the Battle
        aftermath_of_the_battle_ch11: {
            speaker: "Narrator",
            text: "The canyon fell silent, littered with bodies and spent cartridges. Pike's men rounded up the surviving Rivers Gang members. The silver shipment was secure.",
            next: "pike_approaches_jacob_ch11"
        },

        // Scene 26: Pike Approaches Jacob
        pike_approaches_jacob_ch11: {
            speaker: "Pike",
            text: "'Rivers!' Pike's voice was cold. He strode over to Jacob, who stood numbly amidst the carnage. 'You fought well, boy. For a greenhorn.'",
            next: "pike_drags_silas_before_jacob"
        },

        // Scene 27: Pike Drags Silas Forward
        pike_drags_silas_before_jacob: {
            speaker: "Narrator",
            text: "Pike had Silas dragged before Jacob. The old outlaw was bloodied and defiant, but his eyes, when they met Jacob's, held a flicker of something unreadable.",
            next: "pike_offers_jacob_a_test"
        },

        // Scene 28: Pike's Cruel Test
        pike_offers_jacob_a_test: {
            speaker: "Pike",
            text: "'This traitorous cur is your father, is he not?' Pike pressed a pistol into Jacob's hand. 'Prove your loyalty to me, boy. End his miserable life. Show me you're truly done with his kind.'",
            next: "jacob_stares_at_father_and_gun"
        },

        // Scene 29: Jacob's Torment
        jacob_stares_at_father_and_gun: {
            speaker: "Narrator",
            text: "Jacob stared at the gun, then at his father. Silas Rivers, the tyrant who had branded him a traitor, the man whose shadow he'd tried to escape. But still... his father.",
            choices: [
                {
                    text: "Recall his father's cruelty.",
                    next: "jacob_recalls_father_cruelty"
                },
                {
                    text: "Remember Samuel's plea to run.",
                    next: "jacob_remembers_samuel_plea_ch11"
                },
                {
                    text: "Flashback to his refusal to kill the bank teller.",
                    next: "jacob_flashback_bank_teller_ch11"
                }
            ]
        },

        // Scene 30: Recall Father's Cruelty (Optional)
        jacob_recalls_father_cruelty: {
            speaker: "Narrator",
            text: "He remembered every beating, every harsh word, every crime committed in the family name. A lifetime of fear and resentment welled up.",
            next: "silas_rivers_defiant_glare"
        },

        // Scene 31: Remember Samuel's Plea (Optional)
        jacob_remembers_samuel_plea_ch11: {
            speaker: "Narrator",
            text: "Samuel's face flashed in his mind. 'Run, brother.' He had saved Samuel. Could he now condemn his father, no matter what he'd done?",
            next: "silas_rivers_defiant_glare"
        },
        
        // Scene 32: Flashback to Bank Teller (Optional)
        jacob_flashback_bank_teller_ch11: {
            speaker: "Narrator",
            text: "The terrified face of the bank teller in Texas. He hadn't been able to pull the trigger then. Could he now, even with his own father?",
            next: "silas_rivers_defiant_glare"
        },

        // Scene 33: Silas's Defiant Glare
        silas_rivers_defiant_glare: {
            speaker: "Silas Rivers",
            text: "(Coughing blood) 'Well, boy? Gonna do it? Gonna shoot your own Pa? Show this snake what a true Rivers is made of?' His eyes, though pained, were filled with dark challenge.",
            next: "jacob_refuses_to_kill_father"
        },

        // Scene 34: Jacob Refuses
        jacob_refuses_to_kill_father: {
            speaker: "Jacob Rivers",
            text: "'No.' Jacob lowered the pistol. 'I won't. I'm not a killer. Not for you, not for him.'",
            next: "pike_reaction_to_jacob_refusal"
        },

        // Scene 35: Pike's Cold Fury
        pike_reaction_to_jacob_refusal: {
            speaker: "Pike",
            text: "'Sentimentality. A fatal flaw.' Pike's voice was laced with contempt. 'Perhaps your loyalties are... confused, boy. Perhaps you still harbor sympathies for these animals.'",
            next: "pike_reveals_knowledge_of_mine_discovery"
        },

        // Scene 36: Pike Reveals His Knowledge
        pike_reveals_knowledge_of_mine_discovery: {
            speaker: "Pike",
            text: "'Or perhaps your curiosity has gotten the better of you. Hank Morrison tells me you were poking around Section Gamma. Asking questions about things that don't concern you. Things buried deep.' Pike smiled, a chilling, knowing smile.",
            next: "jacob_realizes_he_is_trapped_ch11"
        },

        // Scene 37: Jacob Realizes He's Trapped
        jacob_realizes_he_is_trapped_ch11: {
            speaker: "Narrator",
            text: "Jacob's heart sank. Pike knew. He knew about the sealed tunnels, the crying he'd heard. His refusal to kill his father had just signed his own death warrant.",
            next: "pike_orders_jacob_death"
        },

        // Scene 38: Pike Orders Jacob's Death
        pike_orders_jacob_death: {
            speaker: "Pike",
            text: "'A pity. You showed promise.' Pike gestured to Jim Dalton. 'Kill him. Slowly. Make an example. Loose ends are untidy.'",
            next: "dalton_approaches_jacob_gleefully"
        },

        // Scene 39: Dalton Approaches Gleefully
        dalton_approaches_jacob_gleefully: {
            speaker: "Jim Dalton",
            text: "'My pleasure, boss.' Dalton drew his infamous knife, the one with the bird feather on the handle. 'Always did want to teach this pup a lesson.'",
            next: "sudden_diversion_maria_acts"
        },

        // Scene 40: The Diversion - Maria Acts
        sudden_diversion_maria_acts: {
            speaker: "Narrator",
            text: "Suddenly, a series of sharp cracks echoed from further down the canyon – dynamite? Followed by disciplined gunfire not from the battle. Heads turned. Pike's men looked confused.",
            next: "maria_appears_guns_blazing"
        },

        // Scene 41: Maria Appears, Guns Blazing
        maria_appears_guns_blazing: {
            speaker: "Narrator",
            text: "From a concealed position on the canyon rim, where she must have been observing the entire battle, Maria Vasquez opened fire. Not wildly, but with deadly precision. Two of Pike's guards closest to Jacob cried out and fell, clutching new wounds.",
            next: "maria_gunslinger_reveal"
        },

        // Scene 42: Maria the Gunslinger Revealed
        maria_gunslinger_reveal: {
            speaker: "Maria Vasquez",
            text: "'Having a party without me, gentlemen?' Her voice, no longer the gentle schoolteacher's, was cold and hard as steel. In her hands, twin Colts barked, spitting fire.",
            next: "chaos_reignited_by_maria_attack"
        },

        // Scene 43: Chaos Reignited
        chaos_reignited_by_maria_attack: {
            speaker: "Narrator",
            text: "Pike's men, caught off guard, scrambled for cover. Dalton, momentarily distracted from Jacob, roared in fury and fired towards Maria's position.",
            choices: [
                {
                    text: "Maria's internal thought: 'This complicates Dalton, but saves a useful piece.'",
                    next: "maria_internal_thought_saving_jacob"
                },
                {
                    text: "Jacob's shock and dawning realization about Maria.",
                    next: "jacob_shock_at_maria_reveal"
                }
            ]
        },

        // Scene 44: Maria's Calculation (Optional)
        maria_internal_thought_saving_jacob: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'The boy might be useful. And this chaos... it will expose Pike further. Dalton will have to wait, for now.'",
            next: "jacob_shock_at_maria_reveal"
        },

        // Scene 45: Jacob's Shock (Optional or Converging)
        jacob_shock_at_maria_reveal: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'Miss Vasquez...? The schoolteacher? With... guns?' His mind struggled to reconcile the image of the kind teacher with the deadly gunslinger now creating havoc.",
            next: "maria_shouts_to_jacob_run"
        },

        // Scene 46: Maria Shouts to Jacob
        maria_shouts_to_jacob_run: {
            speaker: "Maria Vasquez",
            text: "'Rivers! Don't just stand there gawking, you fool! Move!' She laid down covering fire.",
            next: "jacob_seizes_the_moment_escapes_with_maria_cover"
        },

        // Scene 47: Jacob Escapes Under Maria's Cover
        jacob_seizes_the_moment_escapes_with_maria_cover: {
            speaker: "Narrator",
            text: "Snapping out of his shock, Jacob scrambled away from Dalton and Pike, using the renewed chaos and Maria's covering fire to make his escape into the rocks.",
            next: "pike_furious_at_turn_of_events"
        },

        // Scene 48: Pike Furious
        pike_furious_at_turn_of_events: {
            speaker: "Pike",
            text: "'After them! Don't let them escape! Who is that woman?!' Pike was incandescent with rage, his carefully laid plans unraveling.",
            next: "maria_disappears_into_canyon"
        },

        // Scene 49: Maria Disappears
        maria_disappears_into_canyon: {
            speaker: "Narrator",
            text: "But Maria, having achieved her aim of creating a diversion and saving Jacob, melted back into the canyon's rocks and shadows as effectively as she had appeared. Her schoolteacher cover was blown, but Jacob Rivers was alive, and Pike was enraged and exposed.",
            next: "chapter_end_scene_ch11"
        },

        // Scene 50: Chapter End - New Alliances, Broken Covers
        chapter_end_scene_ch11: {
            speaker: "Narrator",
            text: "The dust began to settle on a scene of carnage and confusion. Silas Rivers was Pike's prisoner. Jacob Rivers was a fugitive, saved by the enigmatic schoolteacher who was clearly much more. And Maria Vasquez had just played a very dangerous hand, revealing her true nature to all of Perdition.",
            choices: [
                {
                    text: "Continue to Chapter 12",
                    next: null,
                    nextChapter: "chapter12"
                }
            ]
        }
    }
};