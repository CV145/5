// Prologue: Where the Wind Dies (Linear Version)
storyData.prologue = {
    name: "Prologue",
    title: "Where the Wind Dies",
    scenes: {
        // Scene 1: Introduction to Perdition and the journey
        start: {
            speaker: "Narrator",
            text: "The town of Perdition sits at the edge of nowhere, where the desert swallows hope and spits out ghosts. In the summer of 1899, as the century prepares to turn its back on the old ways, four souls converge on this forgotten place, each running from something, each searching for something else.",
            onEnter: function() {
                // Set background and weather effects if the engine supports them
                // e.g., game.sceneManager.setBackground("desert");
                // game.sceneManager.setWeather("dust");
                // For now, we assume these are handled by the scene manager based on scene properties
            },
            next: "dust_storm"
        },

        // Scene 2: The Dust Storm
        dust_storm: {
            speaker: "Narrator",
            text: "A dust storm rolls across the horizon, painting the sky the color of dried blood. The stagecoach rocks violently as it pushes through the wind, its passengers silent in their shared misery. The air inside grows thick with fine grit.",
            // autoNext and delay can still be used for pacing if desired
            autoNext: "elijah_intro_text", // Automatically proceed after a delay
            delay: 4000 // 4 seconds
        },

        // Scene 3: Elijah's Introduction Text
        elijah_intro_text: {
            speaker: "Narrator",
            text: "Among them is Elijah Cross, a man whose worn preacher's collar seems out of place against the grim set of his jaw. He clutches a leather-bound bible, its pages yellowed, his knuckles white.",
            onEnter: function() {
                // Show Elijah's portrait if the engine supports it
                // e.g., game.sceneManager.showCharacters(["elijah"]);
            },
            next: "elijah_dialogue_choice"
        },

        // Scene 4: Elijah's Dialogue Choice (Optional)
        elijah_dialogue_choice: {
            speaker: "Elijah Cross",
            text: "(Muttering to himself, barely audible above the rattling coach) \"Lord knows I've tried to forget. But some sins, they follow you like shadows at noon. No matter how far west you run.\"",
            choices: [
                {
                    text: "Observe him more closely.",
                    next: "observe_elijah_detail"
                },
                {
                    text: "Look out the window instead.",
                    next: "window_view_detail"
                },
                {
                    text: "Remain lost in your own thoughts.",
                    next: "maria_intro_text" // Directly proceed to next character
                }
            ]
        },

        // Scene 5: Detail from Observing Elijah
        observe_elijah_detail: {
            speaker: "Narrator",
            text: "His hands, though gripping the bible tightly, tremble almost imperceptibly. A deep weariness is etched around his eyes, the look of a man who hasn't known true rest in a long time. The dust seems to settle more heavily on his dark attire.",
            next: "maria_intro_text" // Continue to next character
        },

        // Scene 6: Detail from Looking out the Window
        window_view_detail: {
            speaker: "Narrator",
            text: "Through the dust-caked window, the landscape is a blur of desolate browns and grays. The occasional skeleton of a long-dead saguaro stands as a monument to the harshness of this land. It offers no comfort, only a reflection of the desolation many feel within.",
            next: "maria_intro_text" // Continue to next character
        },

        // Scene 7: Maria's Introduction Text
        maria_intro_text: {
            speaker: "Narrator",
            text: "Across from the preacher sits Maria Vasquez. Her eyes, sharp and constantly moving, scan the interior of the coach, the other passengers, the fleeting glimpses of the world outside. Her hand rests casually near her hip, where the worn leather of a holster is partly visible beneath her duster.",
            onEnter: function() {
                // e.g., game.sceneManager.showCharacters(["elijah", "maria"]);
            },
            next: "maria_dialogue_choice"
        },

        // Scene 8: Maria's Dialogue Choice (Optional)
        maria_dialogue_choice: {
            speaker: "Maria Vasquez",
            text: "(Addressing Elijah, her voice low and steady) \"You're staring, Preacher. In my experience, men who stare too long often end up seeing things they wish they hadn't.\"",
            choices: [
                {
                    text: "(Elijah) \"Apologies. Just lost in thought. This land is... unforgiving.\"",
                    next: "maria_response_elijah_apology"
                },
                {
                    text: "(Elijah) \"A keen observation. Perhaps you've seen your share of such things?\"",
                    next: "maria_response_elijah_probe"
                },
                {
                    text: "(Elijah) Say nothing, just nod curtly.",
                    next: "thomas_intro_text" // Directly proceed
                }
            ]
        },

        // Scene 9: Maria's Response to Elijah's Apology
        maria_response_elijah_apology: {
            speaker: "Maria Vasquez",
            text: "\"Unforgiving is its nature.\" She offers a slight, unreadable smile. \"Best to be prepared for it.\"",
            next: "thomas_intro_text"
        },

        // Scene 10: Maria's Response to Elijah's Probe
        maria_response_elijah_probe: {
            speaker: "Maria Vasquez",
            text: "Her eyes narrow almost imperceptibly. \"Enough to know that what a person carries on the inside is often heavier than any bag they haul. And sometimes, more dangerous.\" She turns her gaze to the window.",
            next: "thomas_intro_text"
        },

        // Scene 11: Thomas's Introduction Text
        thomas_intro_text: {
            speaker: "Narrator",
            text: "A sudden lurch of the coach sends a near-empty whiskey bottle skittering across the floor. It stops at the feet of Thomas Whitmore, a man whose fine but stained attire hints at a more prosperous past. The scent of cheap spirits and something medicinal clings to him.",
            onEnter: function() {
                // e.g., game.sceneManager.showCharacters(["elijah", "maria", "thomas"]);
            },
            next: "thomas_dialogue_choice"
        },

        // Scene 12: Thomas's Dialogue Choice (Optional)
        thomas_dialogue_choice: {
            speaker: "Thomas Whitmore",
            text: "(He retrieves the bottle with a sigh, not bothering to look up) \"Apologies for the... turbulence. This journey is proving rather trying on the nerves. And the liver.\"",
            choices: [
                {
                    text: "(Elijah) \"Indeed. Are you unwell, sir?\"",
                    next: "thomas_response_elijah_concern"
                },
                {
                    text: "(Maria) \"Some find solace in the bottle. Others in a well-oiled gun.\"",
                    next: "thomas_response_maria_observation"
                },
                {
                    text: "Say nothing, observe his demeanor.",
                    next: "jacob_intro_text" // Directly proceed
                }
            ]
        },

        // Scene 13: Thomas's Response to Elijah's Concern
        thomas_response_elijah_concern: {
            speaker: "Thomas Whitmore",
            text: "\"Unwell? Perhaps a touch travel-sick, Preacher. Or soul-sick. It's often hard to tell the difference these days.\" He offers a wan smile.",
            next: "jacob_intro_text"
        },

        // Scene 14: Thomas's Response to Maria's Observation
        thomas_response_maria_observation: {
            speaker: "Thomas Whitmore",
            text: "He looks up at Maria, a flicker of something unreadable in his eyes. \"An astute observation, madam. Each to their own chosen poison, I suppose. Or salvation.\"",
            next: "jacob_intro_text"
        },

        // Scene 15: Jacob's Introduction Text
        jacob_intro_text: {
            speaker: "Narrator",
            text: "Huddled in the corner, trying to make himself as small as possible, is Jacob Rivers. He's barely a man, his clothes too new for this rugged trail, his eyes wide with a mixture of apprehension and a desperate sort of hope. He clutches a worn satchel to his chest.",
            onEnter: function() {
                // e.g., game.sceneManager.showCharacters(["elijah", "maria", "thomas", "jacob"]);
            },
            next: "jacob_dialogue_choice"
        },

        // Scene 16: Jacob's Dialogue Choice (Optional)
        jacob_dialogue_choice: {
            speaker: "Jacob Rivers",
            text: "(His voice cracks slightly as he addresses no one in particular) \"How... how much further to Perdition, do you reckon? Seems like we've been riding for an age.\"",
            choices: [
                {
                    text: "(Elijah) \"Not much further now, son. We'll be there before nightfall.\"",
                    next: "jacob_response_elijah_reassurance"
                },
                {
                    text: "(Thomas) \"Perdition? Some say you never truly arrive. You just... end up there.\"",
                    next: "jacob_response_thomas_cynicism"
                },
                {
                    text: "(Maria) \"Close enough. Don't be so eager.\"",
                    next: "jacob_response_maria_bluntness"
                }
            ]
        },

        // Scene 17: Jacob's Response to Elijah's Reassurance
        jacob_response_elijah_reassurance: {
            speaker: "Jacob Rivers",
            text: "He nods, seeming to draw a small comfort from Elijah's calm tone. \"Good. Thank you, sir.\"",
            next: "coach_stops_abruptly"
        },

        // Scene 18: Jacob's Response to Thomas's Cynicism
        jacob_response_thomas_cynicism: {
            speaker: "Jacob Rivers",
            text: "Jacob looks a little unsettled by Thomas's words, glancing nervously out the window. \"Oh. Right.\"",
            next: "coach_stops_abruptly"
        },

        // Scene 19: Jacob's Response to Maria's Bluntness
        jacob_response_maria_bluntness: {
            speaker: "Jacob Rivers",
            text: "He shrinks back a little at Maria's sharp tone. \"No, ma'am. Just... wondering.\"",
            next: "coach_stops_abruptly"
        },

        // Scene 20: Coach Stops Abruptly
        coach_stops_abruptly: {
            speaker: "Narrator",
            text: "The stagecoach, which had been battling the relentless wind and rough terrain, lurches to a sudden, violent stop. The passengers are thrown forward, and the air is filled with the nervous whinnying of horses.",
            next: "driver_shouts_warning"
        },

        // Scene 21: Driver Shouts a Warning
        driver_shouts_warning: {
            speaker: "Stagecoach Driver",
            text: "(Voice strained and urgent from outside) \"Riders! Six of 'em, comin' up fast! Armed to the teeth! Looks like trouble!\"",
            next: "final_exchange_before_chapter_end"
        },

        // Scene 22: Final Exchange Before Chapter End
        final_exchange_before_chapter_end: {
            speaker: "Maria Vasquez",
            text: "Maria's hand is already on her pistol, her eyes narrowed as she peers through a slit in the coach's canvas. \"Well, Preacher,\" she says, a grim set to her mouth, \"looks like Perdition's welcoming committee found us before we found it. Hope you said your prayers.\"",
            onEnter: function() {
                // e.g., game.sceneManager.setBackground("sunset"); // Dramatic lighting change
                // game.sceneManager.setWeather("clear"); // Dust storm might have passed or is less relevant now
            },
            next: "prologue_final_moment"
        },
        
        // Scene 23: Prologue Final Moment
        prologue_final_moment: {
            speaker: "Narrator",
            text: "Elijah meets Maria's gaze, then glances at the apprehensive faces of Thomas and Jacob. The fragile peace of their shared journey is shattered. Outside, the sound of hoofbeats grows rapidly closer, a drumbeat heralding the violence to come.",
            next: "elijah_inner_turmoil"
        },

        // Scene 24: Elijah's Inner Turmoil
        elijah_inner_turmoil: {
            speaker: "Narrator",
            text: "Elijah's mind races. The driver's warning, Maria's readiness – it all brings back memories he fought to bury. The weight of his past feels heavier than the bible in his lap.",
            next: "maria_scans_horizon"
        },
        
        // Scene 25: Maria Scans the Horizon
        maria_scans_horizon: {
            speaker: "Narrator",
            text: "Maria, with practiced ease, finds the smallest gap in the dusty canvas to peer outside. Her expression is unreadable, her focus absolute. She's assessing the threat, calculating odds.",
            next: "thomas_braces_himself"
        },
        
        // Scene 26: Thomas Braces Himself
        thomas_braces_himself: {
            speaker: "Narrator",
            text: "Thomas closes his eyes for a brief moment, perhaps a silent prayer, perhaps just steadying his nerves. He discreetly checks the small derringer he keeps hidden in his medical bag.",
            next: "jacob_frozen_fear"
        },
        
        // Scene 27: Jacob Frozen in Fear
        jacob_frozen_fear: {
            speaker: "Narrator",
            text: "Young Jacob seems frozen, his knuckles white on his satchel. The raw fear in his eyes is a stark reminder of his youth and inexperience in the face of such blatant danger.",
            next: "sound_of_approaching_horses"
        },
        
        // Scene 28: The Sound of Approaching Horses
        sound_of_approaching_horses: {
            speaker: "Narrator",
            text: "The rhythmic thudding of hooves grows louder, closer. It's a sound that speaks of intent, of pursuit. There's no mistaking it for casual travelers.",
            next: "coach_driver_curses"
        },
        
        // Scene 29: Coach Driver Curses
        coach_driver_curses: {
            speaker: "Stagecoach Driver",
            text: "(Muffled from outside) 'Damn coyotes! They always know when a coach is vulnerable! Hold tight in there!'",
            next: "elijah_glance_at_bible"
        },
        
        // Scene 30: Elijah's Glance at his Bible
        elijah_glance_at_bible: {
            speaker: "Narrator",
            text: "Elijah's gaze drops to the worn bible in his hands. Is it a shield? A weapon? Or just a reminder of a faith he's no longer sure he possesses?",
            next: "maria_checks_her_weapon"
        },
        
        // Scene 31: Maria Checks Her Weapon
        maria_checks_her_weapon: {
            speaker: "Narrator",
            text: "Subtly, Maria's fingers brush against the handle of her revolver, ensuring it's loose in the holster. It's a familiar, comforting gesture for her.",
            next: "thomas_takes_a_swig"
        },

        // Scene 32: Thomas Takes a Swig
        thomas_takes_a_swig: {
            speaker: "Narrator",
            text: "Thomas fumbles for his whiskey bottle, managing a quick, fortifying gulp. The liquid courage does little to calm the tremor in his hands, but it's a ritual.",
            next: "jacob_clutches_satchel"
        },
        
        // Scene 33: Jacob Clutches His Satchel
        jacob_clutches_satchel: {
            speaker: "Narrator",
            text: "Jacob's grip on his worn satchel tightens. Whatever possessions he carries feel suddenly more precious, more vulnerable to loss.",
            next: "dust_settles_momentarily"
        },
        
        // Scene 34: Dust Settles Momentarily
        dust_settles_momentarily: {
            speaker: "Narrator",
            text: "For a brief moment, the swirling dust outside seems to settle, as if the very elements are holding their breath for what's to come.",
            next: "elijah_recalls_scripture"
        },
        
        // Scene 35: Elijah Recalls Scripture
        elijah_recalls_scripture: {
            speaker: "Narrator",
            text: "Unbidden, a verse comes to Elijah's mind: 'Yea, though I walk through the valley of the shadow of death...' He wonders if his faith will prove stronger than his fear.",
            next: "maria_calculates_odds"
        },
        
        // Scene 36: Maria Calculates Odds
        maria_calculates_odds: {
            speaker: "Narrator",
            text: "Maria's experienced eyes assess their situation. Four passengers, one driver, six riders. The math isn't encouraging, but she's faced worse odds.",
            next: "thomas_medical_instincts"
        },
        
        // Scene 37: Thomas's Medical Instincts
        thomas_medical_instincts: {
            speaker: "Narrator",
            text: "Despite his condition, Thomas's medical training surfaces. He mentally catalogs potential injuries, what supplies he has. Old habits die hard.",
            next: "jacob_thinks_of_home"
        },
        
        // Scene 38: Jacob Thinks of Home
        jacob_thinks_of_home: {
            speaker: "Narrator",
            text: "Jacob's mind flashes to the farm he left behind, his family. He wonders if he'll ever see them again, if this journey west was a terrible mistake.",
            next: "coach_timbers_creak"
        },
        
        // Scene 39: Coach Timbers Creak
        coach_timbers_creak: {
            speaker: "Narrator",
            text: "The old stagecoach settles with a series of creaks and groans, like an old man lowering himself into a chair. Even the vehicle seems to sense the danger.",
            next: "first_bandit_voice"
        },
        
        // Scene 40: First Bandit Voice
        first_bandit_voice: {
            speaker: "Bandit",
            text: "(From outside, getting closer) 'Easy now, driver! Nobody needs to get hurt if you're sensible about this!'",
            next: "driver_nervous_response"
        },
        
        // Scene 41: Driver's Nervous Response
        driver_nervous_response: {
            speaker: "Stagecoach Driver",
            text: "(Voice shaking) 'We ain't looking for trouble! Just passengers trying to get to Perdition!'",
            next: "bandit_leader_chuckles"
        },
        
        // Scene 42: Bandit Leader Chuckles
        bandit_leader_chuckles: {
            speaker: "Bandit Leader",
            text: "(A harsh laugh) 'Perdition, eh? Well, you might be closer to it than you think. Now, step down nice and slow.'",
            next: "passengers_exchange_glances"
        },
        
        // Scene 43: Passengers Exchange Glances
        passengers_exchange_glances: {
            speaker: "Narrator",
            text: "The four passengers exchange meaningful looks. Each weighs their options, their chances, their willingness to fight or flee.",
            next: "elijah_decision_moment"
        },
        
        // Scene 44: Elijah's Decision Moment
        elijah_decision_moment: {
            speaker: "Narrator",
            text: "Elijah's hand moves toward his coat. Beneath the preacher's garb lies an old Army Colt, a reminder of a more violent past he's tried to leave behind.",
            choices: [
                {
                    text: "Learn more about Elijah's military past",
                    next: "elijah_military_flashback"
                },
                {
                    text: "Focus on Maria's preparation",
                    next: "maria_preparation_detail"
                },
                {
                    text: "Continue to the confrontation",
                    next: "coach_door_opens"
                }
            ]
        },
        
        // Scene 45: Elijah's Military Flashback
        elijah_military_flashback: {
            speaker: "Narrator",
            text: "For a moment, Elijah is back in the Civil War, feeling the familiar weight of steel in his hand. He'd sworn never to take another life, but survival might demand breaking that oath.",
            next: "maria_preparation_detail"
        },
        
        // Scene 46: Maria's Preparation Detail
        maria_preparation_detail: {
            speaker: "Narrator",
            text: "Maria's movements are economical, practiced. She checks her weapon's load by feel alone, her eyes never leaving the coach door. She's done this dance before.",
            next: "thomas_inner_conflict"
        },
        
        // Scene 47: Thomas's Inner Conflict
        thomas_inner_conflict: {
            speaker: "Narrator",
            text: "Thomas wrestles with himself. His Hippocratic Oath wars with the need for self-preservation. 'First, do no harm' seems a luxury in this harsh land.",
            next: "jacob_finds_courage"
        },
        
        // Scene 48: Jacob Finds Courage
        jacob_finds_courage: {
            speaker: "Narrator",
            text: "Something shifts in Jacob's expression. The boy who left home is gone; in his place sits someone harder, more determined. The West is already changing him.",
            next: "coach_door_opens"
        },
        
        // Scene 49: Coach Door Opens
        coach_door_opens: {
            speaker: "Narrator",
            text: "The coach door swings open with a bang. Harsh sunlight streams in, silhouetting a figure in a wide-brimmed hat. The barrel of a rifle gleams in the dusty air.",
            next: "bandit_demands"
        },
        
        // Scene 50: Bandit's Demands (Final Scene)
        bandit_demands: {
            speaker: "Bandit Leader",
            text: "'Well, well. What have we here? A preacher, a lady with iron, a drunk, and a boy.' His scarred face splits into a cruel grin. 'This might be more interesting than usual. Step out, nice and easy. Let's see what you're worth.'",
            choices: [
                {
                    text: "Continue to Chapter 1",
                    next: null,
                    nextChapter: "chapter1"
                }
            ]
        }
    }
};