// Chapter 4: Running from Blood
storyData.chapter4 = {
    name: "Chapter 4",
    title: "Running from Blood",
    scenes: {
        // --- Flashback: Texas Bank Robbery ---
        start: {
            speaker: "Narrator",
            text: "Texas, three weeks prior. Gunsmoke choked the air in the First National Bank of Redemption. Jacob Rivers, barely nineteen, stared at the terrified bank teller, his father's cold command echoing in his ears: 'Finish it, boy. No witnesses.'",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 4');
            },
            next: "flashback_robbery_chaos"
        },

        flashback_robbery_chaos: {
            speaker: "Narrator",
            text: "The robbery had gone sour fast. Pinkertons, alerted by a silent alarm, had surrounded the bank. Two of Jacob's brothers lay dead. His father, Silas Rivers, a man carved from granite and cruelty, was fighting like a cornered wolf.",
            next: "flashback_silas_order"
        },

        flashback_silas_order: {
            speaker: "Silas Rivers (Flashback)",
            text: "'The teller saw our faces, Jacob! He dies, or you ain't no son of mine!' Silas bellowed over the gunfire, shoving a pistol into Jacob's trembling hand.",
            next: "flashback_jacob_refusal"
        },

        flashback_jacob_refusal: {
            speaker: "Narrator",
            text: "Jacob looked at the cowering teller, a boy not much older than himself, tears streaming down his face. He couldn't do it. This wasn't him. He dropped the gun.",
            next: "flashback_silas_fury"
        },

        flashback_silas_fury: {
            speaker: "Silas Rivers (Flashback)",
            text: "'Traitor! Coward!' Silas roared, his face contorted with rage. He fired his own gun, not at the teller, but at the Pinkertons providing covering fire for Jacob's escape. 'You run, you run from your own blood! You're dead to me!'",
            next: "flashback_escape"
        },

        flashback_escape: {
            speaker: "Narrator",
            text: "Jacob fled, shots ringing behind him. He didn't know if the teller lived or died. He just knew he couldn't be a killer, couldn't be a Rivers. He rode for days, putting as much distance as possible between himself and Texas.",
            choices: [
                {
                    text: "Recall the one thing he managed to take with him.",
                    next: "flashback_taken_item"
                },
                {
                    text: "Focus on the guilt of leaving his family.",
                    next: "flashback_guilt_leaving"
                }
            ]
        },

        flashback_taken_item: { // Optional
            speaker: "Narrator",
            text: "Clutched in his saddlebag was his mother's locket, the only gentle thing he owned from a life of violence. It was a reminder of a different path, a path he now desperately sought.",
            next: "flashback_guilt_leaving"
        },

        flashback_guilt_leaving: { // Optional
            speaker: "Narrator",
            text: "Even as he ran, a part of him ached for the twisted loyalty of the gang. His brothers were dead, his father had disowned him. He was utterly alone.",
            next: "end_flashback_perdition_arrival_jacob"
        },
        // --- End Flashback ---

        // Scene 9: Arrival in Perdition
        end_flashback_perdition_arrival_jacob: {
            speaker: "Narrator",
            text: "Now, weeks later, Jacob Rivers stumbled into Perdition, a ghost of his former self, his horse long gone, his resolve worn thin by hunger and dust. He carried only the clothes on his back and a desperate hope for honest work.",
            next: "jacob_observes_perdition_ch4"
        },

        // Scene 10: Jacob's View of Perdition
        jacob_observes_perdition_ch4: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'This place ain't much better than Redemption, Texas. But maybe... maybe here a man can start over. Leave the blood behind.'",
            next: "jacob_seeking_work_intro"
        },

        // Scene 11: Seeking Honest Work
        jacob_seeking_work_intro: {
            speaker: "Narrator",
            text: "He was tired of running, tired of violence. All he wanted was a simple job, a chance to earn his keep without a gun in his hand.",
            next: "jacob_approaches_store_for_work"
        },
        
        // Scene 12: First Attempt - General Store
        jacob_approaches_store_for_work: {
            speaker: "Narrator",
            text: "He tried the general store first. The proprietor, a wary man named Colt, just shook his head.",
            next: "colt_no_work"
        },

        colt_no_work: {
            speaker: "Jeremiah Colt",
            text: "'No work here, son. Barely enough trade to keep myself afloat. Try the saloon, maybe. Or Pike's mine, if you're desperate.'",
            next: "jacob_saloon_attempt"
        },

        // Scene 14: Second Attempt - Saloon
        jacob_saloon_attempt: {
            speaker: "Narrator",
            text: "The saloon was dark and smelled of stale beer and desperation. The bartender, a burly man with dead eyes, just laughed.",
            next: "bartender_no_work"
        },

        bartender_no_work: {
            speaker: "Saloon Bartender",
            text: "'Work? Kid, the only job here is drinking yourself to death, and you can't afford the whiskey.'",
            next: "jacob_heads_to_mine_office"
        },

        // Scene 16: Last Resort - Pike's Mine
        jacob_heads_to_mine_office: {
            speaker: "Narrator",
            text: "Pike's silver mine. The name sent a shiver down Jacob's spine, too close to the life he'd fled. But hunger gnawed at his belly. He found the mine office, a rough-hewn shack near the gaping maw of the mine entrance.",
            next: "meeting_hank_morrison_intro"
        },

        // Scene 17: Meeting Hank Morrison
        meeting_hank_morrison_intro: {
            speaker: "Narrator",
            text: "Inside, a heavy-set man with a perpetual scowl looked up from a ledger. This was Hank Morrison, the mine supervisor.",
            next: "hank_morrison_greeting_jacob"
        },

        hank_morrison_greeting_jacob: {
            speaker: "Hank Morrison",
            text: "'Whaddya want? Can't you see I'm busy?'",
            next: "jacob_asks_for_job_at_mine"
        },

        // Scene 19: Jacob Asks for a Job
        jacob_asks_for_job_at_mine: {
            speaker: "Jacob Rivers",
            text: "'Name's Jacob. Looking for work, Mr. Morrison. Any kind. I'm strong, and I learn fast.'",
            next: "morrison_skeptical_assessment"
        },

        // Scene 20: Morrison's Skeptical Assessment
        morrison_skeptical_assessment: {
            speaker: "Hank Morrison",
            text: "'Strong, eh? You look half-starved. Ever worked a mine before, boy?' He spat tobacco juice near Jacob's boots.",
            choices: [
                {
                    text: "Admit his inexperience honestly.",
                    next: "jacob_admits_inexperience"
                },
                {
                    text: "Try to bluff about past work.",
                    next: "jacob_tries_to_bluff"
                }
            ]
        },

        // Scene 21: Jacob Admits Inexperience (Optional Path)
        jacob_admits_inexperience: {
            speaker: "Jacob Rivers",
            text: "'No, sir. But I'm not afraid of hard work. Just need a chance.'",
            next: "morrison_considers_jacob"
        },

        // Scene 22: Jacob Tries to Bluff (Optional Path)
        jacob_tries_to_bluff: {
            speaker: "Jacob Rivers",
            text: "'Worked some claims up in Colorado. Nothing this big, but I know my way around a pick and shovel.' The lie felt clumsy on his tongue.",
            next: "morrison_sees_through_bluff"
        },

        // Scene 23: Morrison Sees Through Bluff
        morrison_sees_through_bluff: {
            speaker: "Hank Morrison",
            text: "'Colorado, huh? Your hands are softer than a San Francisco whore's. Don't lie to me, boy. Wastes my time.' Despite the rebuke, there was a hint of something else in his tone.",
            next: "morrison_considers_jacob"
        },

        // Scene 24: Morrison Hires Jacob
        morrison_considers_jacob: {
            speaker: "Hank Morrison",
            text: "'Alright, fine. We're short-handed. Muckers mostly. Pay's a dollar a day, less for food and board at the company barracks. You break your back, you might last. You slack, you're out. Or worse.'",
            next: "jacob_accepts_mine_job"
        },

        jacob_accepts_mine_job: {
            speaker: "Jacob Rivers",
            text: "'I'll take it. Thank you, Mr. Morrison.' Relief warred with a sense of unease.",
            next: "first_day_underground_intro"
        },

        // Scene 26: First Day Underground
        first_day_underground_intro: {
            speaker: "Narrator",
            text: "The next day, Jacob descended into the oppressive darkness of Pike's silver mine. The air was thick with dust and the clang of steel on rock. It was brutal, back-breaking work, but it was honest. Or so he hoped.",
            next: "mine_conditions_described"
        },

        // Scene 27: Mine Conditions
        mine_conditions_described: {
            speaker: "Narrator",
            text: "Men coughed, their lungs filling with rock dust. Safety was an afterthought. Cave-ins were common, injuries frequent. But the silver kept coming out, and Pike kept profiting.",
            next: "jacob_works_hard"
        },

        // Scene 28: Jacob Works Hard
        jacob_works_hard: {
            speaker: "Narrator",
            text: "Jacob threw himself into the work, determined to prove himself. He hauled ore, swung a pickaxe, learned the rhythms of the mine. He was strong, and quickly earned a grudging respect from some of the older miners.",
            next: "whispers_among_miners"
        },

        // Scene 29: Whispers Among Miners
        whispers_among_miners: {
            speaker: "Narrator",
            text: "He heard whispers, though. Talk of sections of the mine that were off-limits, of strange sounds, of men who went into certain tunnels and never came out.",
            next: "jacob_dismisses_rumors_initially"
        },

        // Scene 30: Jacob Dismisses Rumors
        jacob_dismisses_rumors_initially: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'Superstition. Miners are always spooked by the dark. Just focus on the work. Stay out of trouble.'",
            next: "weeks_pass_in_mine"
        },

        // Scene 31: Weeks Pass
        weeks_pass_in_mine: {
            speaker: "Narrator",
            text: "Weeks passed. Jacob grew leaner, harder. The mine became his world. But the whispers persisted, and a gnawing curiosity began to take root.",
            next: "assigned_to_new_section"
        },
        
        // Scene 32: Assigned to a New Section
        assigned_to_new_section: {
            speaker: "Narrator",
            text: "One day, Morrison assigned Jacob to clear rubble near an older, less stable part of the mine – Section Gamma, a place most miners avoided.",
            next: "morrison_instructions_gamma"
        },

        morrison_instructions_gamma: {
            speaker: "Hank Morrison",
            text: "'Clear this passage, Rivers. Pike wants to see if there's still good ore further in. Don't wander off. And don't go poking your nose where it ain't wanted.'",
            next: "jacob_working_in_gamma_section"
        },

        // Scene 34: Working in Section Gamma
        jacob_working_in_gamma_section: {
            speaker: "Narrator",
            text: "The air in Section Gamma was colder, the silence deeper, broken only by the drip of water and the scuttling of unseen things. The main passage was shored up with rotting timbers.",
            next: "discovering_sealed_tunnel_intro"
        },

        // Scene 35: Discovering a Sealed-Off Tunnel
        discovering_sealed_tunnel_intro: {
            speaker: "Narrator",
            text: "As Jacob cleared away a rockfall, he uncovered a smaller, older tunnel branching off the main one. It was crudely sealed with newer-looking planks and beams, as if someone had recently tried to hide its existence.",
            choices: [
                {
                    text: "Examine the sealed tunnel more closely.",
                    next: "examine_sealed_tunnel_detail"
                },
                {
                    text: "Ignore it and continue his assigned work.",
                    next: "ignore_sealed_tunnel_continue_work"
                }
            ]
        },

        // Scene 36: Examine Sealed Tunnel (Optional Path)
        examine_sealed_tunnel_detail: {
            speaker: "Narrator",
            text: "The planks were haphazardly nailed, and a faint, unusual smell – metallic and faintly sweet – seemed to emanate from the darkness beyond. The work was shoddy, unlike the rest of the mine's construction.",
            next: "hearing_the_sounds_intro"
        },

        // Scene 37: Ignore Sealed Tunnel (Optional Path)
        ignore_sealed_tunnel_continue_work: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'Morrison said not to poke around. Best to just do my job.' He tried to ignore the strange tunnel, but it preyed on his mind.",
            next: "hearing_the_sounds_intro"
        },

        // Scene 38: Hearing the Sounds
        hearing_the_sounds_intro: {
            speaker: "Narrator",
            text: "Then he heard it. Faintly, at first, almost lost in the dripping water. A sound that didn't belong in a mine.",
            next: "the_crying_sound"
        },

        the_crying_sound: {
            speaker: "Narrator",
            text: "It was crying. Soft, desolate, unmistakably the sound of children weeping. It seemed to come from beyond the sealed tunnel.",
            next: "jacob_disbelief_and_fear"
        },

        // Scene 40: Jacob's Disbelief and Fear
        jacob_disbelief_and_fear: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'Children? Down here? It can't be. The mind plays tricks in the dark...' But the sounds were too real, too filled with sorrow.",
            next: "jacob_investigates_further"
        },

        // Scene 41: Jacob Investigates Further
        jacob_investigates_further: {
            speaker: "Narrator",
            text: "Driven by a horrifying suspicion, Jacob pried at one of the loose planks sealing the tunnel. It came away with a groan of tortured wood. He peered into the oppressive blackness beyond.",
            next: "glimpse_into_darkness"
        },
        
        // Scene 42: Glimpse into Darkness
        glimpse_into_darkness: {
            speaker: "Narrator",
            text: "His lamp cast feeble light into the tunnel. He couldn't see much, but the crying was louder now, accompanied by a rhythmic clinking, like tiny hammers on rock. The metallic, sweet smell was stronger too.",
            next: "morrison_catches_jacob"
        },

        // Scene 43: Hank Morrison Catches Him
        morrison_catches_jacob: {
            speaker: "Hank Morrison",
            text: "'What in the blue blazes do you think you're doing, Rivers?!' Hank Morrison's voice boomed from behind him, making Jacob jump.",
            next: "jacob_tries_to_explain"
        },

        // Scene 44: Jacob Tries to Explain
        jacob_tries_to_explain: {
            speaker: "Jacob Rivers",
            text: "'Mr. Morrison, I... I heard something. Crying. From in there. Sounded like... like children.'",
            next: "morrison_cold_stare"
        },
        
        // Scene 45: Morrison's Cold Stare
        morrison_cold_stare: {
            speaker: "Narrator",
            text: "Morrison's face was a mask of cold fury. He glanced at the pried-open plank, then back at Jacob. His eyes held no surprise, only a chilling menace.",
            next: "morrison_threatens_jacob"
        },

        // Scene 46: Morrison's Threat
        morrison_threatens_jacob: {
            speaker: "Hank Morrison",
            text: "'You heard the wind, boy. Or rats. Some tunnels in this mine are best left alone. For your health.' He took a step closer, his bulk intimidating.",
            next: "morrison_specific_warning"
        },

        morrison_specific_warning: {
            speaker: "Hank Morrison",
            text: "'You forget what you think you heard. You forget about this tunnel. You do your job, keep your mouth shut, and maybe you live to see another payday. You breathe a word of this to anyone, and you'll disappear down a shaft so deep, no one will ever find your bones. Am I clear?'",
            choices: [
                {
                    text: "Nod dumbly, terrified.",
                    next: "jacob_terrified_nod"
                },
                {
                    text: "Try to protest (futilely).",
                    next: "jacob_futile_protest"
                }
            ]
        },
        
        // Scene 48: Jacob's Terrified Nod (Leads to same outcome)
        jacob_terrified_nod: {
            speaker: "Narrator",
            text: "Jacob, his blood running cold, could only nod. The implication was terrifyingly clear.",
            next: "morrison_final_look_jacob"
        },

        // Scene 49: Jacob's Futile Protest (Leads to same outcome)
        jacob_futile_protest: {
            speaker: "Jacob Rivers",
            text: "'But... children...' The words died in his throat as Morrison's glare intensified.",
            next: "morrison_final_look_jacob"
        },
        
        // Scene 50: Morrison's Final Look, Chapter End
        morrison_final_look_jacob: {
            speaker: "Narrator",
            text: "Morrison gave him one last, hard look, then gestured back to the main passage. 'Get back to work, Rivers. And remember what I said.' Jacob, shaken to his core, knew he had stumbled upon a secret far more dangerous than any outlaw gang. The sounds of crying, muffled but persistent, would haunt his waking hours.",
            choices: [
                {
                    text: "Continue to Chapter 5",
                    next: null,
                    nextChapter: "chapter5"
                }
            ]
        }
    }
};