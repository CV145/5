// Chapter 4: Blood Ties
storyData.chapter4 = {
    name: "Chapter 4",
    title: "Blood Ties",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "The undertaker's parlor feels suddenly cramped with the weight of Silas Cross's revelation. Your brother—alive, orchestrating, manipulating. The air tastes of old secrets and fresh betrayal.",
            next: "initial_shock"
        },
        
        initial_shock: {
            speaker: "Narrator",
            text: "Maria's hand hovers near her gun, Thomas grips his medical bag like a shield, and young Jacob looks between the two brothers with dawning horror.",
            choices: [
                {
                    text: "\"You died. I saw you die.\"",
                    next: "denial_response",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.denied_silas_c4', true);
                    }
                },
                {
                    text: "\"What have you done, Silas?\"",
                    next: "demand_answers",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.questioned_silas_c4', true);
                    }
                },
                {
                    text: "Attack him",
                    next: "attack_silas",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.attacked_silas_c4', true);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') - 5); // Maria might disapprove of rash action
                    }
                }
            ]
        },
        
        denial_response: {
            speaker: "Silas Cross",
            text: "\"Did you now? You saw what I wanted you to see, brother. A burning church, screaming congregation, your failure complete. But I walked out the back while you ran out the front.\"",
            next: "silas_explanation"
        },
        
        demand_answers: {
            speaker: "Silas Cross",
            text: "\"What haven't I done?\" His smile widens. \"I sent the letters that brought each of you here. I whispered in the right ears about a preacher, a gunslinger, a doctor, and a boy. I even arranged for those bandits.\"",
            next: "silas_explanation"
        },
        
        attack_silas: {
            speaker: "Narrator",
            text: "You lunge at your brother, but he sidesteps with practiced ease. In one fluid motion, he draws and fires—not at you, but at the ceiling. Plaster rains down as everyone freezes.",
            next: "attack_aftermath"
        },
        
        attack_aftermath: {
            speaker: "Silas Cross",
            text: "\"Still the same hot-headed fool. Calm yourself, Elijah. You'll need that rage later.\" He holsters his weapon. \"Besides, I'm the only one who can save you from what's coming.\"",
            next: "silas_explanation"
        },
        
        silas_explanation: {
            speaker: "Thomas Whitmore",
            text: "\"You orchestrated all of this? The sheriff's death, the threats?\" The doctor's analytical mind is working. \"Why?\"",
            next: "silas_motive"
        },
        
        silas_motive: {
            speaker: "Silas Cross",
            text: "\"The sheriff was unfortunate collateral. As for why...\" He looks at each of you in turn. \"Have any of you wondered why your paths crossed so perfectly? Why four strangers with dark pasts ended up on the same stagecoach?\"",
            next: "divine_plan"
        },
        
        divine_plan: {
            speaker: "Silas Cross",
            text: "\"Our father used to speak of prophecy. Four souls marked by tragedy, brought together in the dying days of the old world. Sound familiar, Elijah? You never did pay attention during his sermons.\"",
            choices: [
                {
                    text: "\"Father's prophecies were madness.\"",
                    next: "reject_prophecy",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.rejected_prophecy_c4', true);
                    }
                },
                {
                    text: "\"The four figures in the church mural...\"",
                    next: "remember_mural",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.connected_prophecy_c4', true);
                    },
                    requires: {
                        flags: { 'chapter3_flags.investigated_church_c3': true }
                    }
                },
                {
                    text: "\"You're insane, just like he was.\"",
                    next: "insult_silas",
                    onChoose: function() {
                        // Assuming Silas has a tension stat with Elijah or a general disposition
                        // For now, let's imagine a 'silas_player_rapport' variable: -100 (hates) to 100 (likes)
                        // updateStoryVariable('storyVariables.npcs.silas.rapport', getStoryVariable('storyVariables.npcs.silas.rapport') - 20);
                        // Or more simply, if tension is tracked directly with player (Elijah)
                        // updateStoryVariable('relationships.elijah.silas.tension', getStoryVariable('relationships.elijah.silas.tension') + 20);
                        // For now, this specific relationship isn't in storyVariables, so I'll skip direct update
                        // but note it for future: relationships: { silas_tension: 20 }
                    }
                }
            ]
        },
        
        reject_prophecy: {
            speaker: "Silas Cross",
            text: "\"Madness that came true. Look around you, brother. A preacher who lost faith, a shooter who lost family, a healer who lost hope, and a boy who lost innocence. The four pillars of redemption.\"",
            next: "maria_interrupts"
        },
        
        remember_mural: {
            speaker: "Elijah Cross",
            text: "\"Four figures standing against a great darkness. I saw it this morning. But that's just an old painting...\"",
            speaker: "Silas Cross",
            text: "\"Is it? That mural was painted by our great-grandfather, who had the Sight. He saw this day coming, saw what would rise from the desert.\"",
            next: "maria_interrupts"
        },
        
        insult_silas: {
            speaker: "Silas Cross",
            text: "\"Insane?\" His eyes flash dangerously. \"I spent ten years preparing for this moment while you wallowed in guilt. But fine, dismiss me. You'll beg for my help soon enough.\"",
            next: "maria_interrupts"
        },
        
        maria_interrupts: {
            speaker: "Maria Vasquez",
            text: "\"Enough riddles and prophecies.\" Her patience has snapped. \"We have real threats—the Valdez cartel, the Rivers gang. What's your angle in all this?\"",
            next: "silas_reveals_threat"
        },
        
        silas_reveals_threat: {
            speaker: "Silas Cross",
            text: "\"The cartel and the gang are puppets. They dance to older music. Something stirs beneath Perdition, something that feeds on blood and souls. The sheriff was its first taste.\"",
            next: "ancient_evil"
        },
        
        ancient_evil: {
            speaker: "Narrator",
            text: "As if summoned by his words, the ground trembles slightly. Dust falls from the rafters, and somewhere in the distance, a dog howls mournfully.",
            next: "jacob_speaks"
        },
        
        jacob_speaks: {
            speaker: "Jacob Rivers",
            text: "\"This is crazy. Ancient evils, prophecies...\" But his voice wavers. \"Although... my grandmother used to tell stories. About things sleeping in the desert. Things best left undisturbed.\"",
            next: "thomas_skeptical"
        },
        
        thomas_skeptical: {
            speaker: "Thomas Whitmore",
            text: "\"I'm a man of science. I don't believe in prophecies or ancient evils.\" He pauses. \"But I've seen enough impossible things to know when to keep an open mind.\"",
            choices: [
                {
                    text: "\"If this is true, how do we stop it?\"",
                    next: "ask_for_help",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.willing_to_believe_silas_c4', true);
                    }
                },
                {
                    text: "\"You're trying to manipulate us.\"",
                    next: "remain_suspicious",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.suspicious_of_silas_c4', true);
                    }
                },
                {
                    text: "\"Prove it. Show us this 'ancient evil.'\"",
                    next: "demand_proof",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.demanded_proof_from_silas_c4', true);
                    }
                }
            ]
        },
        
        ask_for_help: {
            speaker: "Silas Cross",
            text: "\"Finally, some wisdom. The ritual requires four souls bound by tragedy, standing at the cardinal points of Perdition at sunset. But first, we must survive the cartel and the gang.\"",
            next: "immediate_danger"
        },
        
        remain_suspicious: {
            speaker: "Silas Cross",
            text: "\"Manipulate? Brother, I've already succeeded. You're here, aren't you? But believe what you will. The truth will reveal itself soon enough.\"",
            next: "immediate_danger"
        },
        
        demand_proof: {
            speaker: "Silas Cross",
            text: "\"Proof?\" He laughs coldly. \"Very well. Look outside.\"",
            next: "the_proof"
        },
        
        the_proof: {
            speaker: "Narrator",
            text: "You move to the window. The midday sun should be blazing, but instead, the sky has taken on a sickly yellow hue. In the distance, a dust storm approaches—but it moves against the wind.",
            next: "unnatural_storm"
        },
        
        unnatural_storm: {
            speaker: "Maria Vasquez",
            text: "\"That's... that's not possible.\" Even her steady voice cracks. \"Dust doesn't move like that.\"",
            speaker: "Silas Cross",
            text: "\"It does when something beneath the earth calls it. We have perhaps two hours before the first wave arrives.\"",
            next: "immediate_danger"
        },
        
        immediate_danger: {
            speaker: "Narrator",
            text: "Suddenly, gunshots echo from the main street. Shouts follow—some in Spanish, others with the familiar drawl of the Rivers gang.",
            next: "under_attack"
        },
        
        under_attack: {
            speaker: "Maria Vasquez",
            text: "\"They're here. Both of them.\" She checks her weapons with grim efficiency. \"Guess our three sunsets just became three hours.\"",
            choices: [
                {
                    text: "\"We fight together.\"",
                    next: "unite_for_battle",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.united_front_c4', true);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 10);
                        updateStoryVariable('relationships.elijah.thomas.trust', getStoryVariable('relationships.elijah.thomas.trust') + 10);
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 10);
                    }
                },
                {
                    text: "\"Silas, what's your play here?\"",
                    next: "question_silas_plan",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.sought_silas_strategy_c4', true);
                    }
                },
                {
                    text: "\"We need to evacuate the townspeople first.\"",
                    next: "protect_innocents",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.prioritized_civilians_c4', true);
                    },
                    requires: {
                        flags: { 'chapter3_flags.prioritize_innocents_c3': true }
                    }
                }
            ]
        },
        
        unite_for_battle: {
            speaker: "Jacob Rivers",
            text: "\"Together then.\" The boy—no, the young man—stands straighter. \"I recognize my brother's voice out there. This ends today.\"",
            next: "battle_preparation"
        },
        
        question_silas_plan: {
            speaker: "Silas Cross",
            text: "\"Simple. We let them thin each other out, then deal with the survivors. But the real fight comes at sunset. That's when the veil is thinnest.\"",
            next: "battle_preparation"
        },
        
        protect_innocents: {
            speaker: "Elijah Cross",
            text: "\"The people need protection. That's our first priority.\"",
            speaker: "Thomas Whitmore",
            text: "\"The old mine. If we can get them there, they'll be safe from both the gangs and... whatever else is coming.\"",
            next: "battle_preparation"
        },
        
        battle_preparation: {
            speaker: "Narrator",
            text: "The gunfire intensifies. Through the window, you see members of the Valdez cartel exchanging fire with the Rivers gang. Caught in the middle, Perdition's few remaining citizens run for cover.",
            next: "choose_position"
        },
        
        choose_position: {
            speaker: "Maria Vasquez",
            text: "\"We need to take positions. Where do you want to make our stand?\"",
            choices: [
                {
                    text: "\"The saloon—defensible and central.\"",
                    next: "saloon_defense",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.chose_saloon_defense_c4', true);
                    }
                },
                {
                    text: "\"The church—high ground and symbolic.\"",
                    next: "church_defense",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.chose_church_defense_c4', true);
                    }
                },
                {
                    text: "\"Split up—divide their attention.\"",
                    next: "split_defense",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.chose_split_defense_c4', true);
                    }
                }
            ]
        },
        
        saloon_defense: {
            speaker: "Narrator",
            text: "You rush to the saloon, barricading doors and overturning tables. The stone walls will provide good cover, and the windows offer clear sightlines to the street.",
            next: "first_wave"
        },
        
        church_defense: {
            speaker: "Narrator",
            text: "The abandoned church sits on a hill, offering tactical advantage. As you take positions, you can't help but notice how the faded murals seem to glow in the strange yellow light.",
            next: "first_wave"
        },
        
        split_defense: {
            speaker: "Narrator",
            text: "\"Thomas and Jacob, take the hotel. Maria, you're with me at the saloon. Silas...\"",
            speaker: "Silas Cross",
            text: "\"I'll be where I'm needed.\" He vanishes into the shadows with unsettling ease.",
            next: "first_wave"
        },
        
        first_wave: {
            speaker: "Narrator",
            text: "The cartel strikes first. Men in dark clothing advance down Main Street, laying down suppressing fire. Behind them, you spot a familiar figure—Carlos Valdez himself, the man Maria helped convict.",
            next: "valdez_appears"
        },
        
        valdez_appears: {
            speaker: "Carlos Valdez",
            text: "\"Maria Vasquez!\" His voice carries over the gunfire. \"You killed my brothers with your testimony. Now I return the favor!\"",
            choices: [
                {
                    text: "Return fire immediately",
                    next: "open_fire",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.aggressive_combat_valdez_c4', true);
                    }
                },
                {
                    text: "Try to negotiate",
                    next: "negotiate_valdez",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.attempted_negotiation_valdez_c4', true);
                    }
                },
                {
                    text: "Wait for the right moment",
                    next: "tactical_patience",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.tactical_approach_valdez_c4', true);
                    }
                }
            ]
        },
        
        open_fire: {
            speaker: "Narrator",
            text: "Your shots spark off the ground near Valdez, forcing him to cover. Maria joins in, her aim deadly accurate. Two cartel members fall before the others scramble for cover.",
            next: "rivers_arrive"
        },
        
        negotiate_valdez: {
            speaker: "Elijah Cross",
            text: "\"Valdez! This doesn't have to end in blood! There are forces at work here bigger than your vendetta!\"",
            speaker: "Carlos Valdez",
            text: "\"Save your sermons, priest! Today, justice comes from the barrel of a gun!\"",
            next: "rivers_arrive"
        },
        
        tactical_patience: {
            speaker: "Narrator",
            text: "You hold fire, waiting. Maria glances at you, understanding. When three cartel members bunch up near a water trough, you both fire simultaneously. The tactical advantage pays off.",
            next: "rivers_arrive"
        },
        
        rivers_arrive: {
            speaker: "Narrator",
            text: "Chaos erupts as the Rivers gang attacks from the opposite direction. Led by three men who share Jacob's features but none of his humanity, they catch the cartel in a crossfire.",
            next: "jacob_confrontation"
        },
        
        jacob_confrontation: {
            speaker: "Samuel Rivers",
            text: "\"Little brother!\" The eldest Rivers son spots Jacob. \"Time to come home, boy. Or die a traitor!\"",
            speaker: "Jacob Rivers",
            text: "\"I'm not that scared kid anymore, Sam.\" His voice steady despite his fear. \"I choose my own path now.\"",
            next: "three_way_battle"
        },
        
        three_way_battle: {
            speaker: "Narrator",
            text: "The street becomes a war zone. Cartel, gang, and your small group exchange fire in a deadly triangle. Bodies fall, dust swirls, and through it all, that unnatural storm creeps closer.",
            next: "the_storm_arrives"
        },
        
        the_storm_arrives: {
            speaker: "Narrator",
            text: "The yellow sky darkens to amber. The approaching dust storm suddenly accelerates, and with it comes a sound—like whispers in a dead language, growing louder.",
            next: "supernatural_turn"
        },
        
        supernatural_turn: {
            speaker: "Thomas Whitmore",
            text: "\"What in God's name...\" The doctor's scientific skepticism crumbles as the storm wall reveals shapes moving within it. Not dust devils—something else. Something hungry.",
            speaker: "Silas Cross",
            text: "\"It begins!\" He appears beside you. \"The old hunger wakes. We need to reach the cardinal points NOW!\"",
            choices: [
                {
                    text: "\"Everyone, follow Silas!\"",
                    next: "trust_silas",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.trusted_silas_ritual_c4', true);
                    }
                },
                {
                    text: "\"We finish the fight first!\"",
                    next: "continue_fighting",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.ignored_ritual_c4', true);
                    }
                },
                {
                    text: "\"What are those things?\"",
                    next: "demand_explanation",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.sought_understanding_ritual_c4', true);
                    }
                }
            ]
        },
        
        trust_silas: {
            speaker: "Narrator",
            text: "Your group breaks from cover, running through the gunfire. Strangely, both the cartel and gang seem frozen, staring at the approaching storm in horror.",
            next: "ritual_positions"
        },
        
        continue_fighting: {
            speaker: "Narrator",
            text: "You keep firing, but the guns of your enemies fall silent one by one. They're all staring at the storm wall, at the shapes writhing within it.",
            speaker: "Maria Vasquez",
            text: "\"Elijah... I think we have bigger problems than bullets.\"",
            next: "forced_retreat"
        },
        
        demand_explanation: {
            speaker: "Silas Cross",
            text: "\"The Hungry Dark. It's fed on this land since before men walked upright. The town's founders bound it, but bindings weaken. Now it rises!\"",
            next: "forced_retreat"
        },
        
        forced_retreat: {
            speaker: "Narrator",
            text: "The storm hits the edge of town. Where it touches, buildings age decades in seconds. A cartel member caught at the edge screams once before crumbling to ancient dust.",
            next: "ritual_positions"
        },
        
        ritual_positions: {
            speaker: "Silas Cross",
            text: "\"North, South, East, West! One at each point!\" He hands out strange medallions that burn cold against skin. \"These will protect you—briefly. Take your positions!\"",
            next: "cardinal_points"
        },
        
        cardinal_points: {
            speaker: "Narrator",
            text: "The four of you run to your positions: Elijah north at the church, Maria east at the schoolhouse, Thomas south at the doctor's office, Jacob west at the jail. The storm swirls around Perdition's center.",
            choices: [
                {
                    text: "Begin the ritual prayer",
                    next: "start_ritual",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.led_ritual_c4', true);
                    }
                },
                {
                    text: "Wait for Silas's signal",
                    next: "wait_for_signal",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.followed_silas_ritual_c4', true);
                    }
                },
                {
                    text: "Improvise your own words",
                    next: "improvise_ritual",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter4_flags.improvised_ritual_c4', true);
                    }
                }
            ]
        },
        
        start_ritual: {
            speaker: "Elijah Cross",
            text: "\"By the four winds and the four sorrows, by the bonds of guilt and the hope of redemption, we stand against the dark!\"",
            speaker: "Narrator",
            text: "Your words resonate with power you didn't know you possessed. The medallions blaze with light.",
            next: "ritual_climax"
        },
        
        wait_for_signal: {
            speaker: "Silas Cross",
            text: "\"Now! Speak the words written in your hearts! Let your pain be your power!\"",
            speaker: "Narrator",
            text: "Following his lead, you all cry out—confessions, regrets, hopes. The medallions respond to authentic emotion.",
            next: "ritual_climax"
        },
        
        improvise_ritual: {
            speaker: "Elijah Cross",
            text: "\"I've run from God, from truth, from myself. But here I stand. Here WE stand. And we say—enough!\"",
            speaker: "Narrator",
            text: "Your raw honesty triggers something. The medallions sing in harmony, creating a barrier of light.",
            next: "ritual_climax"
        },
        
        ritual_climax: {
            speaker: "Narrator",
            text: "Light erupts from the four points, forming a cross over Perdition. The storm entities shriek and recoil. For a moment, it seems you might win...",
            next: "the_twist"
        },
        
        the_twist: {
            speaker: "Narrator",
            text: "Then Silas laughs. Standing at the town's center, he produces a fifth medallion—black as midnight. \"Did you think I brought you here to STOP it? No, brothers and sisters. You're here to FEED it!\"",
            next: "betrayal_revealed"
        },
        
        betrayal_revealed: {
            speaker: "Silas Cross",
            text: "\"Four souls marked by tragedy, standing at the cardinal points. You're not the shield—you're the key! And your pain will give it form!\"",
            speaker: "Narrator",
            text: "The light from your medallions suddenly reverses, pulling at something deep within each of you. Your darkest moments, your deepest regrets—they're being drawn out, given shape.",
            next: "chapter4_cliffhanger"
        },
        
        chapter4_cliffhanger: {
            speaker: "Narrator",
            text: "As Chapter 4 ends, the four of you remain frozen at your points, power flowing from you into the center where Silas stands triumphant. The Hungry Dark takes form, fed by your suffering.",
            speaker: "Silas Cross",
            text: "\"Welcome to the new world, brother. One where gods walk again—and I am their herald!\"",
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