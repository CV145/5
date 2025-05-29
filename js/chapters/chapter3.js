// Chapter 3: Whispers in the Dust
storyData.chapter3 = {
    name: "Chapter 3",
    title: "Whispers in the Dust",
    scenes: {
        // Scene 1: Aftermath of Pete's Warning
        start: {
            speaker: "Narrator",
            text: "Prospector Pete's warning about Jedediah Stone hangs in the air, heavy as the midday heat. The relative calm of the morning has been shattered, replaced by a gnawing unease. Your small group looks at each other, the unspoken question clear: what now?",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 3');
                // Initialize chapter 3 flags if they don't exist
                if(typeof getStoryVariable('flags.chapter3_flags') === 'undefined'){
                    updateStoryVariable('flags.chapter3_flags', {});
                }
                
                // Redirect based on Chapter 2 choices
                let nextScene = "default_debrief"; // Fallback
                if (getStoryVariable('flags.chapter2_flags.c2_will_investigate_town')) {
                    nextScene = "investigation_debrief";
                } else if (getStoryVariable('flags.chapter2_flags.c2_focus_on_supplies')) {
                    nextScene = "supplies_debrief";
                } else if (getStoryVariable('flags.chapter2_flags.c2_build_bridges')) {
                    nextScene = "allies_debrief";
                }
                
                // Use setTimeout to redirect after the current scene loads
                setTimeout(() => {
                    if (typeof game !== 'undefined' && game.sceneManager) {
                        game.sceneManager.loadScene('chapter3', nextScene);
                    }
                }, 100);
            },
            text: "Loading Chapter 3...",
            next: "default_debrief" // Fallback if redirect fails
        },

        // Scene 2: Default Debrief (if no specific Ch2 end choice flag is dominant)
        default_debrief: {
            speaker: "Elijah",
            text: "\"This Jedediah Stone... Pete's words carry weight. We can't ignore such a direct warning. We need a plan.\"",
            next: "initial_strategy_discussion"
        },

        // Scene 3: Investigation Debrief
        investigation_debrief: {
            speaker: "Maria",
            text: "\"We agreed to learn more about this town. Pete's given us our first real lead. Jedediah Stone. Sounds like he's the shadow over Perdition.\"",
            onEnter: function() {
                updateStoryVariable('flags.chapter3_flags.c3_pursuing_jedediah_info', true);
            },
            next: "initial_strategy_discussion"
        },

        // Scene 4: Supplies Debrief
        supplies_debrief: {
            speaker: "Thomas",
            text: "\"Securing supplies is vital, but Pete's warning changes things. If Stone controls this area, even getting basic necessities could become a confrontation.\"",
            next: "initial_strategy_discussion"
        },

        // Scene 5: Allies Debrief
        allies_debrief: {
            speaker: "Jacob",
            text: "\"We wanted to see if there are trustworthy folks here. Knowing about Jedediah Stone might help us figure out who's under his thumb and who might stand against him.\"",
            next: "initial_strategy_discussion"
        },

        // Scene 6: Initial Strategy Discussion
        initial_strategy_discussion: {
            speaker: "Narrator",
            text: "The group considers their options. The threat of Jedediah Stone looms large.",
            choices: [
                {
                    text: "Suggest gathering more intelligence on Stone immediately.",
                    next: "plan_gather_intel",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_plan_intel_stone', true); }
                },
                {
                    text: "Advocate for preparing defenses, assuming a confrontation is inevitable.",
                    next: "plan_prepare_defenses",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_plan_defenses', true); }
                },
                {
                    text: "Discuss the possibility of leaving Perdition to avoid Stone.",
                    next: "plan_discuss_leaving",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_plan_discuss_leaving', true); }
                }
            ]
        },

        // --- Intel Path ---
        // Scene 7: Plan to Gather Intel
        plan_gather_intel: {
            speaker: "Elijah",
            text: "\"Knowledge is our best weapon right now. We need to understand this Jedediah Stone – his numbers, his influence, his routines. Who in this town might talk?\"",
            next: "intel_target_discussion"
        },

        // Scene 8: Intel Target Discussion
        intel_target_discussion: {
            speaker: "Maria",
            text: "\"The saloon is usually where tongues loosen. Or the general store – people always gossip there. We'll need to be subtle. These folks are scared.\"",
            choices: [
                {
                    text: "Agree to try the saloon.",
                    next: "intel_saloon_approach",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_intel_target_saloon', true); }
                },
                {
                    text: "Suggest the general store or blacksmith.",
                    next: "intel_store_approach",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_intel_target_store', true); }
                }
            ]
        },

        // Scene 9: Intel - Saloon Approach
        intel_saloon_approach: {
            speaker: "Narrator",
            text: "The saloon is dimly lit, smelling of stale beer and desperation. A few rough-looking men eye your group as you enter. The bartender, a burly man with a permanent scowl, polishes a glass.",
            next: "saloon_interaction_start"
        },

        // Scene 10: Saloon Interaction Start
        saloon_interaction_start: {
            speaker: "Elijah",
            text: "(To the bartender) \"Whiskey. And perhaps some information. We're new in town, heard talk of a man named Jedediah Stone.\"",
            onEnter: function() {
                if(getStoryVariable('flags.chapter1_flags.elijah_pacifist_in_chapter1')){
                    this.text = "(To the bartender) \"Sarsaparilla for me. We're just passing through, but we heard the name Jedediah Stone. Seems to cast a long shadow here.\"";
                }
            },
            next: "bartender_response_stone"
        },

        // Scene 11: Bartender's Response to Stone Inquiry
        bartender_response_stone: {
            speaker: "Bartender",
            text: "The bartender stops polishing. \"Stone? Best not to speak that name too loud in here, friend. Some ears are friendlier to him than others. What's your business with him?\"",
            choices: [
                {
                    text: "\"No business. Just trying to understand the lay of the land.\"",
                    next: "bartender_cautious_reply"
                },
                {
                    text: "\"We had a run-in with his men. We're assessing the situation.\"",
                    next: "bartender_direct_reply",
                    requires: function() { return !getStoryVariable('flags.chapter1_flags.bandits_retreated'); } // If a fight happened
                }
            ]
        },

        // Scene 12: Bartender's Cautious Reply
        bartender_cautious_reply: {
            speaker: "Bartender",
            text: "\"The lay of the land is this: Jedediah Stone gets what he wants. Best to stay out of his way.\" He slides your drink over. \"That's all the information I got for sale.\"",
            next: "saloon_observe_patrons"
        },

        // Scene 13: Bartender's Direct Reply (if fight occurred)
        bartender_direct_reply: {
            speaker: "Bartender",
            text: "He raises an eyebrow. \"You tangled with Stone's crew and you're still walking? You're either very good, or very foolish. Or both.\" He lowers his voice. \"Stone don't take kindly to challenges. He's got eyes everywhere. Controls the water rights outside town, too. Makes him powerful.\"",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_learned_stone_controls_water', true); },
            next: "saloon_observe_patrons"
        },

        // Scene 14: Saloon - Observe Patrons
        saloon_observe_patrons: {
            speaker: "Narrator",
            text: "While sipping your drinks, you observe the other patrons. A nervous-looking man in the corner keeps glancing your way. Two of the rougher men at a nearby table are muttering and looking towards you.",
            next: "saloon_patron_approach_choice"
        },
        
        // Scene 15: Saloon Patron Approach Choice
        saloon_patron_approach_choice: {
            speaker: "Maria",
            text: "\"That one in the corner looks like he wants to bolt. Might know something. Or he's one of Stone's informants.\"",
            choices: [
                {
                    text: "Approach the nervous man.",
                    next: "approach_nervous_man"
                },
                {
                    text: "Confront the muttering men.",
                    next: "confront_muttering_men",
                    requires: function() { return getStoryVariable('flags.chapter1_flags.showed_strength') || getStoryVariable('relationships.elijah.maria.trust') > 50; }
                },
                {
                    text: "Leave the saloon and try elsewhere.",
                    next: "intel_store_approach" // Go to store if saloon is a bust
                }
            ]
        },

        // Scene 16: Approach Nervous Man
        approach_nervous_man: {
            speaker: "Elijah",
            text: "\"Friend, you seem troubled. We're new here, just trying to avoid any... complications. Perhaps you could offer some advice?\"",
            next: "nervous_man_response"
        },

        // Scene 17: Nervous Man's Response
        nervous_man_response: {
            speaker: "Nervous Man",
            text: "He flinches. \"Advice? Leave. Leave Perdition before Stone... before he notices you properly. He ruined my farm, took everything...\" He trails off, eyes darting around. \"Can't talk here. Too dangerous.\"",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_met_stone_victim', true); },
            next: "nervous_man_flees_or_offers_more"
        },

        // Scene 18: Nervous Man Flees or Offers More
        nervous_man_flees_or_offers_more: {
            speaker: "Narrator",
            text: "The nervous man looks like he's about to say more, but then his eyes fix on something behind you. He pales and quickly gets up.",
            speaker: "Nervous Man",
            text: "\"Gotta go!\" He scurries out of the saloon.",
            next: "stone_henchman_appears_saloon"
        },
        
        // Scene 19: Stone's Henchman Appears in Saloon
        stone_henchman_appears_saloon: {
            speaker: "Narrator",
            text: "A large, scar-faced man now stands where the nervous man was looking. He grins unpleasantly at your group.",
            speaker: "Scar-faced Man",
            text: "\"Newcomers. Asking a lot of questions about Mr. Stone. He don't like folks pokin' their noses in his business.\"",
            next: "saloon_confrontation_choice"
        },

        // Scene 20: Saloon Confrontation Choice with Henchman
        saloon_confrontation_choice: {
            speaker: "Narrator",
            text: "The scar-faced man and his two companions block the exit.",
            choices: [
                {
                    text: "Attempt to de-escalate: \"We meant no offense.\"",
                    next: "deescalate_henchman",
                    requires: function() { return getStoryVariable('flags.chapter1_flags.elijah_pacifist_in_chapter1') || getStoryVariable('flags.violence_vs_peace_meter') <= 0; }
                },
                {
                    text: "Stand your ground: \"Our business is our own.\"",
                    next: "stand_ground_henchman",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_stood_up_to_henchman', true); }
                },
                {
                    text: "Maria takes the lead: \"Step aside. Now.\"",
                    next: "maria_confronts_henchman",
                    requires: function() { return getStoryVariable('relationships.elijah.maria.trust') > 55; }
                }
            ]
        },
        
        // Scene 21: De-escalate Henchman
        deescalate_henchman: {
            speaker: "Elijah",
            text: "\"We're merely travelers, friend, unfamiliar with local customs. We assure you, no offense was intended toward Mr. Stone or anyone else.\"",
            next: "henchman_response_deescalation"
        },

        // Scene 22: Henchman's Response to De-escalation
        henchman_response_deescalation: {
            speaker: "Scar-faced Man",
            text: "He sneers. \"Travelers, eh? Well, travel on then. And keep Mr. Stone's name outcha mouths.\" He and his men step aside, but their eyes follow you out.",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_avoided_saloon_fight', true); },
            next: "leave_saloon_intel_gathered"
        },

        // Scene 23: Stand Ground with Henchman
        stand_ground_henchman: {
            speaker: "Elijah",
            text: "\"We ask questions as free men. If Mr. Stone has an issue, he can address us himself.\"",
            next: "henchman_response_stand_ground"
        },

        // Scene 24: Henchman's Response to Standing Ground
        henchman_response_stand_ground: {
            speaker: "Scar-faced Man",
            text: "\"Brave words. Stupid ones, too.\" He cracks his knuckles. \"Mr. Stone likes to make examples of stupid people.\"",
            next: "saloon_brawl_imminent"
        },
        
        // Scene 25: Maria Confronts Henchman
        maria_confronts_henchman: {
            speaker: "Maria",
            text: "Maria steps forward, her hand resting near her gun. Her voice is cold steel. \"I've dealt with bigger and uglier than you. You have two choices: move, or be moved.\"",
            next: "henchman_response_maria"
        },

        // Scene 26: Henchman's Response to Maria
        henchman_response_maria: {
            speaker: "Scar-faced Man",
            text: "He sizes Maria up, a flicker of uncertainty in his eyes. He glances at his companions, then back at Maria's unwavering gaze.",
            speaker: "Scar-faced Man",
            text: "\"Feisty. Alright, have it your way... for now. But Mr. Stone will hear about this.\"",
            onChoose: function() { 
                updateStoryVariable('flags.chapter3_flags.c3_intimidated_henchman', true);
                updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 5);
            },
            next: "leave_saloon_intel_gathered"
        },

        // Scene 27: Saloon Brawl Imminent
        saloon_brawl_imminent: {
            speaker: "Narrator",
            text: "The tension snaps. The scar-faced man lunges. Time to fight or flee.",
            choices: [
                {
                    text: "Fight your way out.",
                    next: "saloon_brawl_fight",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_saloon_brawl_occurred', true); }
                },
                {
                    text: "Attempt a quick, tactical retreat.",
                    next: "saloon_brawl_retreat",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_retreated_from_brawl', true); }
                }
            ]
        },

        // Scene 28: Saloon Brawl - Fight
        saloon_brawl_fight: {
            speaker: "Narrator",
            text: "The saloon erupts into chaos. Fists fly, chairs break. Your group fights as a unit, skills honed by the bandit attack put to use again. Jacob, despite his fear, stands his ground, Thomas uses his environment cleverly, Maria is a whirlwind of precise strikes, and Elijah fights with a grim determination or surprising ferocity.",
            onEnter: function() {
                let fightText = "The saloon erupts into chaos. Fists fly, chairs break. ";
                if(getStoryVariable('flags.jacob_saved_elijah_chapter1')){
                    fightText += "Jacob, remembering his past bravery, fights with surprising confidence. ";
                } else {
                    fightText += "Jacob, despite his fear, stands his ground. ";
                }
                if(getStoryVariable('flags.knows_thomas_profession')){
                    fightText += "Thomas uses his knowledge of anatomy to land debilitating blows. ";
                } else {
                    fightText += "Thomas uses his environment cleverly. ";
                }
                fightText += "Maria is a whirlwind of precise strikes. ";
                if(getStoryVariable('flags.chapter1_flags.elijah_killed_in_chapter1')){
                    fightText += "Elijah fights with a grim, practiced efficiency that surprises even himself. ";
                    updateStoryVariable('flags.violence_vs_peace_meter', (getStoryVariable('flags.violence_vs_peace_meter') || 0) + 1);
                } else {
                    fightText += "Elijah defends himself and others with a reluctant but firm resolve. ";
                }
                this.text = fightText;
            },
            next: "saloon_brawl_outcome"
        },

        // Scene 29: Saloon Brawl Outcome
        saloon_brawl_outcome: {
            speaker: "Narrator",
            text: "After a short, brutal fight, Stone's men are groaning on the floor or have fled. The bartender is hiding behind the bar. You've made a statement, but likely more enemies.",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_won_saloon_brawl', true); },
            next: "leave_saloon_intel_gathered"
        },

        // Scene 30: Saloon Brawl - Retreat
        saloon_brawl_retreat: {
            speaker: "Narrator",
            text: "Seeing the odds, or preferring not to escalate, you create a diversion and make a swift exit. Stone's men shout threats after you, but don't immediately pursue.",
            next: "leave_saloon_intel_gathered"
        },
        
        // Scene 31: Leave Saloon, Intel Gathered
        leave_saloon_intel_gathered: {
            speaker: "Narrator",
            text: "You leave the saloon, having learned a bit more about Jedediah Stone and the fear he instills. And perhaps, having made your presence known.",
            next: "post_saloon_discussion"
        },

        // Scene 32: Intel - Store Approach (Alternative to Saloon)
        intel_store_approach: {
            speaker: "Narrator",
            text: "The general store is quiet, its shelves sparsely stocked. The storekeeper, a gaunt woman named Martha, watches you with weary eyes.",
            next: "store_interaction_start"
        },

        // Scene 33: Store Interaction Start
        store_interaction_start: {
            speaker: "Elijah",
            text: "\"Good day, ma'am. We're looking to purchase some supplies. And perhaps you could tell us a bit about the town? We've heard the name Jedediah Stone mentioned.\"",
            next: "storekeeper_response_stone"
        },

        // Scene 34: Storekeeper's Response to Stone Inquiry
        storekeeper_response_stone: {
            speaker: "Martha",
            text: "Her eyes flicker with something – fear, anger? \"Stone? He's... a businessman. Owns a lot around here. Expects his due.\" She lowers her voice. \"Best to pay it and cause no trouble. Perdition's hard enough without inviting more.\"",
            choices: [
                {
                    text: "Press gently for more information about his 'business'.",
                    next: "storekeeper_press_gently"
                },
                {
                    text: "Ask if Stone 'protects' the town.",
                    next: "storekeeper_ask_protection"
                }
            ]
        },

        // Scene 35: Storekeeper - Press Gently
        storekeeper_press_gently: {
            speaker: "Martha",
            text: "\"His business is making sure everyone else's business runs... his way.\" She sighs. \"Look, I can't say more. Bad for my health. Just... be careful who you cross here.\"",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_learned_stone_extorts', true); },
            next: "store_subtle_warning_given"
        },

        // Scene 36: Storekeeper - Ask about Protection
        storekeeper_ask_protection: {
            speaker: "Martha",
            text: "\"Protects?\" A bitter laugh escapes her. \"Oh, he protects his interests, alright. And we all pay for that 'protection', one way or another.\"",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_learned_stone_runs_protection_racket', true); },
            next: "store_subtle_warning_given"
        },
        
        // Scene 37: Store - Subtle Warning Given
        store_subtle_warning_given: {
            speaker: "Narrator",
            text: "Martha says no more on the subject of Stone, but her fear is palpable. You purchase a few meager supplies.",
            next: "post_store_discussion"
        },

        // Scene 37a: Post Store Discussion (Missing scene)
        post_store_discussion: {
            speaker: "Narrator",
            text: "You leave the general store with more questions than answers. Martha's fear was palpable, and her warnings about Stone weigh heavily on your minds.",
            next: "stone_makes_a_move_setup"
        },

        // Scene 15a: Confront Muttering Men (Missing scene)
        confront_muttering_men: {
            speaker: "Elijah",
            text: "\"You gentlemen seem to have something to say. Care to share it with the rest of us?\"",
            next: "muttering_men_response"
        },

        // Scene 15b: Muttering Men Response (Missing scene)
        muttering_men_response: {
            speaker: "Rough Man",
            text: "The larger of the two men stands up slowly, his hand resting on his gun. \"Just wonderin' what brings strangers to ask about Mr. Stone. He don't like folks pokin' around his business.\"",
            choices: [
                {
                    text: "\"We're just passing through, looking for information.\"",
                    next: "men_accept_explanation"
                },
                {
                    text: "\"Stone's business is becoming our business.\"",
                    next: "men_escalate_confrontation",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_challenged_stone_men', true); }
                }
            ]
        },

        // Scene 15c: Men Accept Explanation
        men_accept_explanation: {
            speaker: "Rough Man",
            text: "\"Passin' through, eh? Well, best keep passin'. Stone don't take kindly to lingerers.\" He sits back down, but keeps watching you.",
            next: "leave_saloon_intel_gathered"
        },

        // Scene 15d: Men Escalate Confrontation
        men_escalate_confrontation: {
            speaker: "Rough Man",
            text: "\"Is that so?\" His companion stands as well. \"Well then, maybe we should introduce you to Mr. Stone's way of doin' business.\"",
            next: "saloon_brawl_imminent"
        },

        // --- Defense Path ---
        // Scene 38: Plan to Prepare Defenses
        plan_prepare_defenses: {
            speaker: "Maria",
            text: "\"If Stone's as bad as Pete says, talking won't stop him. We need a defensible position and a plan for when his men come knocking. Which they will.\"",
            next: "defense_location_scouting"
        },

        // Scene 39: Defense Location Scouting
        defense_location_scouting: {
            speaker: "Narrator",
            text: "Your group scouts Perdition for a suitable place to make a stand. The options are grim: the dilapidated church, the sturdy but exposed saloon, or perhaps the abandoned sheriff's office.",
            choices: [
                {
                    text: "Choose the church (higher ground, but old).",
                    next: "defense_choice_church",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_defense_site_church', true); }
                },
                {
                    text: "Choose the saloon (sturdy, but central).",
                    next: "defense_choice_saloon",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_defense_site_saloon', true); }
                },
                {
                    text: "Choose the sheriff's office (symbolic, but small).",
                    next: "defense_choice_sheriff_office",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_defense_site_sheriff_office', true); }
                }
            ]
        },

        // Scene 40: Defense Choice - Church
        defense_choice_church: {
            speaker: "Elijah",
            text: "\"The church. It sits on a slight rise, offers some visibility. And perhaps... some measure of sanctity, however faded.\"",
            onEnter: function() {
                if(getStoryVariable('flags.chapter2_flags.c2_elijah_noticed_murals_early')){
                    this.text = "\"The church. I saw murals there... it feels significant. It's defensible, and perhaps offers more than just physical protection.\"";
                }
            },
            next: "fortifying_chosen_location"
        },

        // Scene 41: Defense Choice - Saloon
        defense_choice_saloon: {
            speaker: "Maria",
            text: "\"The saloon. Stone walls, limited entry points. We can control the approaches. And they have whiskey, if things get truly dire.\"",
            next: "fortifying_chosen_location"
        },

        // Scene 42: Defense Choice - Sheriff's Office
        defense_choice_sheriff_office: {
            speaker: "Jacob",
            text: "\"The sheriff's office! It's like... like we'd be the law here. Show Stone he can't just run this town!\"",
            onEnter: function() {
                if(getStoryVariable('flags.chapter2_flags.c2_advised_jacob_to_harden')){
                    this.text = "Jacob's jaw sets. \"The sheriff's office. It's a statement. We're not afraid.\"";
                }
            },
            next: "fortifying_chosen_location"
        },

        // Scene 43: Fortifying Chosen Location
        fortifying_chosen_location: {
            speaker: "Narrator",
            text: "You spend hours reinforcing your chosen location – boarding windows, creating barricades, checking sightlines. It's hard work, drawing curious and fearful glances from the few remaining townsfolk.",
            next: "encounter_during_fortification"
        },
        
        // Scene 44: Encounter During Fortification
        encounter_during_fortification: {
            speaker: "Narrator",
            text: "As you work, a young woman approaches, offering a canteen of water. \"Martha from the store sent me. She... she hopes you give Stone a black eye. For all of us too scared to.\"",
            onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_received_townsfolk_support_subtle', true); },
            next: "defense_preparation_interrupted"
        },

        // --- Leaving Path ---
        // Scene 45: Plan to Discuss Leaving
        plan_discuss_leaving: {
            speaker: "Thomas",
            text: "\"Perhaps discretion is the better part of valor. This Jedediah Stone sounds like a hornet's nest we'd be wise not to poke. Are we certain Perdition is worth fighting for? Or dying for?\"",
            onEnter: function() {
                // If Thomas is struggling with addiction and knows Elijah is aware
                if(getStoryVariable('flags.knows_thomas_profession') && getStoryVariable('relationships.elijah.thomas.tension') > 0) {
                    this.text = "Thomas avoids Elijah's gaze. \"This town offers little solace and much trouble. Jedediah Stone... he's just another complication. Perhaps we should seek our fortunes, or our peace, elsewhere.\"";
                }
            },
            next: "leaving_pros_and_cons"
        },

        // Scene 46: Leaving - Pros and Cons
        leaving_pros_and_cons: {
            speaker: "Narrator",
            text: "The group debates the merits of leaving. Escape the immediate threat of Stone, but venture into an unknown, harsh wilderness? Or stay and face a known enemy?",
            choices: [
                {
                    text: "Argue for staying: \"Running won't solve our problems.\"",
                    next: "argue_staying",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_argued_to_stay', true); }
                },
                {
                    text: "Argue for leaving: \"This isn't our fight.\"",
                    next: "argue_leaving",
                    onChoose: function() { updateStoryVariable('flags.chapter3_flags.c3_argued_to_leave', true); }
                }
            ]
        },
        
        // Scene 47: Argue for Staying
        argue_staying: {
            speaker: "Elijah",
            text: "\"We can't keep running from every shadow. If we don't make a stand somewhere, against someone, what are we? Just dust in the wind.\"",
            onEnter: function() {
                if(getStoryVariable('flags.chapter1_flags.elijah_killed_in_chapter1')){
                    this.text = "\"We fought to get here. I'm not inclined to surrender this ground without a fight. Running only delays the inevitable confrontation with men like Stone.\"";
                }
            },
            next: "decision_point_stay_leave"
        },

        // Scene 48: Argue for Leaving
        argue_leaving: {
            speaker: "Jacob",
            text: "\"But... what if Stone is too much for us? Pete said most don't survive tangling with him. Maybe finding a different town, a real fresh start, is smarter.\"",
            onEnter: function() {
                if(getStoryVariable('flags.chapter2_flags.c2_advised_jacob_to_harden') === false){
                    this.text = "Jacob looks genuinely scared. \"I ran from my brothers to avoid fights like this. I... I don't want to die in Perdition for a fight that ain't even ours.\"";
                }
            },
            next: "decision_point_stay_leave"
        },
        
        // --- Convergence & Climax Prep ---
        // Scene 49: Post Saloon/Store Discussion or Defense Interruption or Stay/Leave Decision
        // This scene acts as a convergence point based on earlier choices.
        post_saloon_discussion: { // Renamed for clarity if coming from intel path
            speaker: "Narrator",
            text: "Whether from the saloon, the store, or after deciding your initial approach to Stone, the group reconvenes. The knowledge gained, or the preparations made, weigh on your minds.",
            next: "stone_makes_a_move_setup"
        },

        defense_preparation_interrupted: { // If on defense path
             speaker: "Narrator",
             text: "Your efforts to fortify your position are underway, but the sense of impending conflict grows with every passing hour.",
             next: "stone_makes_a_move_setup"
        },

        decision_point_stay_leave: { // If on leaving discussion path
            speaker: "Narrator",
            text: "The debate about staying or leaving is intense. Before a final decision can be made, events may overtake your plans.",
            next: "stone_makes_a_move_setup"
        },

        // Scene 50: Stone Makes a Move (Chapter Climax)
        stone_makes_a_move_setup: {
            speaker: "Narrator",
            text: "As dusk begins to settle over Perdition, casting long, ominous shadows, a rider approaches. Not one of Stone's usual thugs, but someone cleaner, more official-looking, yet with an undeniable air of menace. He stops before your group or your fortified position.",
            speaker: "Stone's Emissary",
            text: "\"Jedediah Stone sends his compliments. He understands you're new to Perdition and wishes to... welcome you properly. He requests your presence at his ranch, sunset tomorrow. To discuss your future in his territory. He assures me it will be a... memorable meeting.\"",
            onEnter: function() {
                updateStoryVariable('flags.chapter3_flags.c3_stone_ultimatum_received', true);
                if(getStoryVariable('flags.chapter3_flags.c3_won_saloon_brawl') || getStoryVariable('flags.chapter3_flags.c3_intimidated_henchman')){
                    this.text = "As dusk settles, a rider approaches. He's cleaner than Stone's usual thugs. \"Jedediah Stone heard about the... misunderstanding at the saloon. He's impressed by your spirit. He invites you to his ranch, sunset tomorrow, to discuss terms. He hopes for a... productive conversation.\" The threat is veiled, but clear.";
                }
            },
            choices: [
                {
                    text: "End Chapter 3. (Prepare to accept, decline, or counter Stone's 'invitation' in Chapter 4)",
                    next: null, // End of Chapter 3
                    nextChapter: "chapter4" // Will point to a new Chapter 4
                }
            ]
        }
    }
};