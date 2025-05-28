// Chapter 9: Blood and Iron
storyData.chapter9 = {
    name: "Chapter 9",
    title: "Blood and Iron",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "The silence following the Bone Singer's pacification feels almost unnatural after days of its constant song. As dawn breaks over Devil's Backbone, your group emerges from the mine forever changed by what you've witnessed and the choices you've made.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 9');
                
                // Check major Chapter 8 outcomes
                let guardianSacrifice = getStoryVariable('flags.chapter9_opening.c9_guardian_sacrifice');
                let teamSeparated = getStoryVariable('flags.chapter9_opening.c9_team_separated');
                let cartelRelationship = getStoryVariable('flags.chapter9_opening.c9_cartel_relationship');
                let morningStarPresent = getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star');
                let isabellaPresent = getStoryVariable('flags.chapter8_flags.c8_group_composition_isabella');
                
                // Check previous chapter flags for narrative context
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                let elijahAcceptsViolence = getStoryVariable('flags.chapter1_flags.elijah_accepts_violence');
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                let trustedSilasRitual = getStoryVariable('flags.chapter4_flags.trusted_silas_ritual_c4');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let federalInterestKnown = getStoryVariable('flags.chapter6_flags.c6_federal_interest_known');
                let groupDrinksChapter1 = getStoryVariable('flags.chapter1_flags.group_drinks_c1');
                let confessedDarkSecret = getStoryVariable('flags.chapter3_flags.confessed_dark_secret_c3');
                
                updateStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made', guardianSacrifice || false);
                updateStoryVariable('flags.chapter9_flags.c9_team_separated', teamSeparated || false);
                updateStoryVariable('flags.chapter9_flags.c9_cartel_alliance', cartelRelationship || false);
                updateStoryVariable('flags.chapter9_flags.c9_morning_star_ally', morningStarPresent || false);
                updateStoryVariable('flags.chapter9_flags.c9_isabella_ally', isabellaPresent || false);
                
                // Modify opening text based on previous choices
                let contextualText = "The silence following the Bone Singer's pacification feels almost unnatural after days of its constant song. ";
                
                if (guardianSacrifice) {
                    contextualText += "The weight of sacrifice hangs heavy over your surviving group members, but ";
                } else if (unityMeter >= 2) {
                    contextualText += "Your group's strong bonds helped everyone survive the ordeal, and ";
                } else if (unityMeter <= -2) {
                    contextualText += "Despite the tensions within your group, you all managed to survive, and ";
                }
                
                if (violenceMeter >= 2) {
                    contextualText += "the violence you've witnessed and perhaps participated in has left its mark. ";
                } else if (violenceMeter <= -2) {
                    contextualText += "your commitment to peaceful solutions has been tested but maintained. ";
                } else {
                    contextualText += "the difficult choices you've made have shaped who you've become. ";
                }
                
                if (federalInterestKnown) {
                    contextualText += "The memory of Agent Smith's warnings about federal interest in these supernatural events adds urgency to your situation. ";
                }
                
                if (forgaveSilas) {
                    contextualText += "The lessons learned from Silas's redemption remind you that even the darkest situations can find resolution. ";
                } else if (trustedSilasRitual) {
                    contextualText += "Your experience with supernatural rituals has prepared you for what may come next. ";
                }
                
                contextualText += "As dawn breaks over Devil's Backbone, your group emerges from the mine forever changed.";
                
                this.text = contextualText;
            },
            next: "aftermath_assessment"
        },

        aftermath_assessment: {
            speaker: "Narrator",
            text: "The survivors of Devil's Backbone gather around you as you exit the mine. For the first time in weeks, their eyes are clear and their minds their own. The supernatural terror that claimed so many lives has been laid to rest, but the cost weighs heavily on everyone present.",
            onEnter: function() {
                // Different opening based on guardian sacrifice
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                if (guardianSacrifice) {
                    let sacrificer = "Elijah";
                    if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                        sacrificer = "Thomas";
                    }
                    this.text = `The survivors of Devil's Backbone gather as the remaining members of your group exit the mine. ${sacrificer} remains behind as the guardian of the sacred burial site, his sacrifice ensuring the dead will rest peacefully. The supernatural terror has been laid to rest, but the cost weighs heavily on everyone present.`;
                    updateStoryVariable('flags.chapter9_flags.c9_guardian_identity', sacrificer);
                }
            },
            next: "doc_peterson_gratitude"
        },

        doc_peterson_gratitude: {
            speaker: "Doc Peterson",
            text: "\"I don't know how you did it, but that hellish singing has stopped. People are thinking clearly for the first time in a month. You've given us our lives back.\"",
            onEnter: function() {
                // Different response if Thomas stayed behind as guardian
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.text = "\"Dr. Whitmore's sacrifice... I don't know how he convinced that thing to let the rest of us go, but the singing has stopped. People are thinking clearly for the first time in a month. He gave his life so we could have ours back.\"";
                }
            },
            next: "morning_star_warning"
        },

        morning_star_warning: {
            speaker: "Morning Star",
            text: "\"The Bone Singer sleeps, but its awakening has sent ripples through the spirit world. The other Terrors will know that their brother has been bound. They will become more dangerous, more desperate to break free before they too are contained.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter9_flags.c9_morning_star_ally')) {
                    // If Morning Star isn't present, this insight comes from experience
                    this.speaker = "Maria";
                    this.text = "\"Two supernatural entities down, but I have a feeling this isn't over. Whatever's connecting these things, they're going to know we stopped another one. The next fight is going to be harder.\"";
                }
            },
            next: "urgent_message_arrives"
        },

        urgent_message_arrives: {
            speaker: "Narrator",
            text: "As if summoned by Morning Star's words, a rider approaches at breakneck speed. His horse is lathered with sweat and foam, and the man himself looks haggard with exhaustion and fear. He barely slows as he calls out to your group.",
            next: "messenger_urgent_news"
        },

        messenger_urgent_news: {
            speaker: "Railroad Messenger",
            text: "\"Are you the ones who stopped the singing? Thank God! I bring word from the Transcontinental Development Corporation - our construction crews are under attack! Strange metal creatures, tools turning to rust, workers disappearing into the ground itself!\"",
            onEnter: function() {
                let federalInterestKnown = getStoryVariable('flags.chapter6_flags.c6_federal_interest_known');
                if (federalInterestKnown) {
                    this.text = "\"Are you the ones who stopped the singing? Thank God! The Transcontinental Development Corporation sent me - the same company that federal agent mentioned. Our construction crews are under attack! Strange metal creatures, tools turning to rust, workers disappearing into the ground itself!\"";
                }
            },
            next: "iron_devourer_threat"
        },

        iron_devourer_threat: {
            speaker: "Railroad Messenger",
            text: "\"The railroad construction has awakened something terrible at Copper Creek. Every piece of metal we bring turns to dust. Our steam engines are dying, our rails crumbling. Workers speak of something in the earth that hungers for iron and steel. The foreman sent me to find anyone who's dealt with... unnatural problems.\"",
            choices: [
                {
                    text: "Immediately agree to help with the new threat",
                    next: "immediate_assistance",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_immediate_response', true); }
                },
                {
                    text: "Ask for details about the railroad's operations first",
                    next: "investigate_railroad_connection",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_investigated_railroad', true); }
                },
                {
                    text: "Insist on proper rest and resupply before taking on another threat",
                    next: "demand_preparation_time",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_demanded_rest', true); }
                }
            ]
        },

        immediate_assistance: {
            speaker: "Elijah",
            text: "\"We can't let innocent workers suffer. If this Iron Devourer is another of the Five Terrors, every day we delay gives it more strength.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "\"Workers are dying, and this sounds like another of those ancient entities. We can't let it grow stronger while we rest.\"";
                }
                
                // Adjust based on Elijah's character development
                let elijahAcceptsViolence = getStoryVariable('flags.chapter1_flags.elijah_accepts_violence');
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                
                if (elijahAcceptsViolence && violenceMeter >= 1) {
                    this.text = "\"I've learned that sometimes we must fight to protect the innocent. These workers don't deserve to suffer for corporate greed.\"";
                } else if (soughtDivineGuidance) {
                    this.text = "\"Divine guidance led us through the darkness before. We cannot abandon those in need when we have the power to help.\"";
                }
                
                // Adjust if guardian sacrifice was made
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                if (guardianSacrifice) {
                    let sacrificer = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                    this.text = `\"${sacrificer} gave his life to stop the Bone Singer. We honor that sacrifice by not letting this Iron Devourer claim more innocent lives.\"`;
                }
            },
            next: "railroad_corporate_revelation"
        },

        investigate_railroad_connection: {
            speaker: "Thomas",
            text: "\"Wait. Transcontinental Development Corporation? That's the same company we encountered before. This isn't coincidence - they're either incredibly unlucky or they know more about these supernatural threats than they're letting on.\"",
            onEnter: function() {
                // Adjust if Thomas was the guardian sacrifice
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas mentioned that company before he... before he stayed behind. Transcontinental Development Corporation - they know more about these supernatural threats than they're admitting.\"";
                }
            },
            next: "railroad_corporate_revelation"
        },

        demand_preparation_time: {
            speaker: "Jacob",
            text: "\"We just fought a supernatural entity that nearly claimed one of our own. We need time to grieve, resupply, and plan properly. Rushing into another fight will get us all killed.\"",
            onEnter: function() {
                // Different tone if guardian sacrifice was made
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                if (guardianSacrifice) {
                    let sacrificer = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                    this.text = `\"We just lost ${sacrificer} to the Bone Singer. We need time to process that loss and plan properly, or we'll just be throwing more lives away.\"`;
                }
                
                // Add context based on Jacob's previous experiences and choices
                let jacobSavedElijah = getStoryVariable('flags.jacob_saved_elijah_chapter1');
                let requestedPrepTime = getStoryVariable('flags.chapter7_flags.c7_requested_prep_time');
                let balancedPreparation = getStoryVariable('flags.chapter7_flags.c7_balanced_preparation');
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                
                if (jacobSavedElijah && unityMeter >= 1) {
                    this.text = "\"I've seen what happens when we rush into danger without thinking. I saved Elijah once by being careful - let's not waste lives by charging ahead blindly now.\"";
                } else if (requestedPrepTime || balancedPreparation) {
                    this.text = "\"Our preparation before facing the Bone Singer paid off. We can't afford to be reckless now when workers' lives hang in the balance.\"";
                }
            },
            next: "messenger_time_pressure"
        },

        messenger_time_pressure: {
            speaker: "Railroad Messenger",
            text: "\"I understand your need for rest, but people are dying every hour! The Iron Devourer grows stronger with each piece of machinery it consumes. Our entire operation could be destroyed by week's end!\"",
            next: "railroad_corporate_revelation"
        },

        railroad_corporate_revelation: {
            speaker: "Railroad Messenger",
            text: "\"The foreman... he mentioned that the company has been tracking supernatural incidents across the territory. They have files on what happened in Perdition and Devil's Backbone. They know you're the ones who can stop these things.\"",
            next: "corporate_conspiracy_unfolds"
        },

        corporate_conspiracy_unfolds: {
            speaker: "Morning Star",
            text: "\"The railroad company seeks to bind the ancient powers to their will. They deliberately build where the Terrors sleep, thinking they can control forces older than their civilization. They are fools, and their greed will doom us all.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter9_flags.c9_morning_star_ally')) {
                    this.speaker = "Maria";
                    this.text = "\"This railroad company is deliberately seeking out supernatural sites. They're not just unlucky - they're trying to exploit these ancient powers. That makes them extremely dangerous.\"";
                }
                
                // Add context based on previous supernatural encounters
                let trustedSilasRitual = getStoryVariable('flags.chapter4_flags.trusted_silas_ritual_c4');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let attemptedNegotiationValdez = getStoryVariable('flags.chapter4_flags.attempted_negotiation_valdez_c4');
                
                if (trustedSilasRitual && forgaveSilas) {
                    if (getStoryVariable('flags.chapter9_flags.c9_morning_star_ally')) {
                        this.text += " You have learned that supernatural forces can be reasoned with, but corporate greed lacks such wisdom.";
                    } else {
                        this.text += " We've seen how supernatural entities can be reasoned with, but corporate greed is often more dangerous than ancient magic.";
                    }
                } else if (attemptedNegotiationValdez) {
                    this.text += " We've tried negotiation before - sometimes it works, sometimes it doesn't. But corporate manipulation is different from facing supernatural threats directly.";
                }
            },
            choices: [
                {
                    text: "Demand to meet with railroad executives to confront them",
                    next: "demand_executive_meeting",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_confronted_executives', true); }
                },
                {
                    text: "Focus on stopping the Iron Devourer first, deal with corporate conspiracy later",
                    next: "prioritize_immediate_threat",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_prioritized_threat', true); }
                },
                {
                    text: "Propose working with the railroad to learn their true agenda",
                    next: "infiltration_strategy",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_infiltration_approach', true); }
                }
            ]
        },

        demand_executive_meeting: {
            speaker: "Elijah",
            text: "\"If this corporation is deliberately awakening ancient evils, they need to be stopped. Take us to whoever's in charge - it's time for some honest answers.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                if (guardianSacrifice) {
                    let sacrificer = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                    this.text = `\"${sacrificer} died because of their reckless greed. If this corporation is deliberately awakening ancient evils, they have blood on their hands.\"`;
                }
            },
            next: "executive_meeting_arranged"
        },

        prioritize_immediate_threat: {
            speaker: "Thomas",
            text: "\"Corporate conspiracy or not, people are dying right now. We save the workers first, then deal with whoever's responsible for this mess.\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas would have said to save the workers first, worry about corporate politics later. We honor his memory by protecting innocent lives.\"";
                }
            },
            next: "journey_to_copper_creek"
        },

        infiltration_strategy: {
            speaker: "Maria",
            text: "\"We play along for now. Work with them to stop the Iron Devourer, but keep our eyes open. Information is power, and we need to understand what we're really up against.\"",
            next: "corporate_cooperation"
        },

        executive_meeting_arranged: {
            speaker: "Railroad Messenger",
            text: "\"Mr. Blackwood is at the Copper Creek site overseeing operations. I can take you there, but... he won't be happy about being questioned. The company doesn't like being challenged.\"",
            next: "blackwood_confrontation_setup"
        },

        journey_to_copper_creek: {
            speaker: "Narrator",
            text: "The ride to Copper Creek takes most of the day. As you approach the railroad construction site, the evidence of the Iron Devourer's presence becomes unmistakable - twisted metal sculptures that were once tools, railroad tracks crumbling to rust, and workers fleeing in terror from something unseen underground.",
            next: "copper_creek_devastation"
        },

        corporate_cooperation: {
            speaker: "Railroad Messenger",
            text: "\"Mr. Blackwood will be pleased to have your cooperation. The company has resources, information, equipment - whatever you need to stop this threat. Just... don't ask too many questions about how we knew to find you.\"",
            next: "journey_to_copper_creek"
        },

        blackwood_confrontation_setup: {
            speaker: "Narrator",
            text: "Cornelius Blackwood stands at the edge of the Copper Creek construction site, his fine eastern suit a stark contrast to the industrial devastation around him. When he sees your group approaching, his expression shifts from annoyance to calculating interest.",
            next: "blackwood_greeting"
        },

        blackwood_greeting: {
            speaker: "Cornelius Blackwood",
            text: "\"Ah, the heroes of Perdition and Devil's Backbone. Your reputation precedes you. I trust my messenger explained our... unusual problem? The Iron Devourer has been most inconvenient for our schedule.\"",
            choices: [
                {
                    text: "Accuse Blackwood of deliberately awakening supernatural threats",
                    next: "direct_accusation",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_accused_blackwood', true); }
                },
                {
                    text: "Demand to know what the railroad company really wants",
                    next: "demand_true_agenda",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_demanded_agenda', true); }
                },
                {
                    text: "Focus on the immediate threat and avoid confrontation for now",
                    next: "avoid_confrontation",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_diplomatic_approach', true); }
                }
            ]
        },

        copper_creek_devastation: {
            speaker: "Narrator",
            text: "The Copper Creek site is a wasteland of rusted metal and panicked workers. Steam engines sit silent, their boilers corroded beyond repair. Railroad tracks end abruptly where the metal has simply crumbled away. And from deep underground comes a rhythmic pounding, like the heartbeat of some massive iron beast.",
            next: "iron_devourer_manifestation"
        },

        iron_devourer_manifestation: {
            speaker: "Construction Foreman",
            text: "\"Thank God you're here! That thing... it's not just destroying our equipment. It's learning from it. Every machine it consumes makes it smarter, stronger. Yesterday it was just rusting our tools. Today it's building something down there.\"",
            next: "underground_investigation_decision"
        },

        direct_accusation: {
            speaker: "Elijah",
            text: "\"Your company is deliberately building on supernatural sites. People have died because of your greed. How many more will you sacrifice for profit?\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                if (guardianSacrifice) {
                    let sacrificer = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                    this.text = `\"${sacrificer} died stopping the Bone Singer that your company's mining operations awakened. How many more will you sacrifice for profit?\"`;
                }
            },
            next: "blackwood_reveals_truth"
        },

        demand_true_agenda: {
            speaker: "Thomas",
            text: "\"Enough games, Blackwood. Your company has files on supernatural incidents. You're not just building a railroad - what do you really want?\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas was right about your company being suspicious. Enough games, Blackwood - what do you really want with these supernatural sites?\"";
                }
            },
            next: "blackwood_reveals_truth"
        },

        avoid_confrontation: {
            speaker: "Maria",
            text: "\"Mr. Blackwood, we're here to stop the Iron Devourer. Whatever other business we might have can wait until after innocent lives are saved.\"",
            next: "blackwood_cooperation"
        },

        blackwood_reveals_truth: {
            speaker: "Cornelius Blackwood",
            text: "\"Very well. Yes, we know about the Five Terrors. The federal government has been tracking supernatural phenomena for decades. These entities represent both a threat and an opportunity - imagine the military applications of controlled supernatural forces. The railroad is merely our method of reaching these sites.\"",
            next: "government_conspiracy_revealed"
        },

        blackwood_cooperation: {
            speaker: "Cornelius Blackwood",
            text: "\"Practical approach - I appreciate that. The Iron Devourer has already consumed twelve men and countless tons of equipment. Our excavation awakened it three days ago, and it's been growing stronger ever since.\"",
            next: "iron_devourer_briefing"
        },

        government_conspiracy_revealed: {
            speaker: "Cornelius Blackwood",
            text: "\"The Transcontinental Development Corporation is a front for a federal supernatural research division. We've been studying these entities since the war ended. Your group's success against the Hungry Dark and Bone Singer has made you... valuable assets.\"",
            choices: [
                {
                    text: "Refuse to work with government conspirators",
                    next: "refuse_government_cooperation",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_refused_government', true); }
                },
                {
                    text: "Demand guarantees for the safety of innocent people",
                    next: "negotiate_safety_guarantees",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_negotiated_guarantees', true); }
                },
                {
                    text: "Agree to work with them to gain access to their resources",
                    next: "accept_government_partnership",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_government_partnership', true); }
                }
            ]
        },

        iron_devourer_briefing: {
            speaker: "Cornelius Blackwood",
            text: "\"The Iron Devourer feeds on metal and mechanical complexity. Each machine it consumes adds to its intelligence and capabilities. Our experts believe it's trying to build some kind of... construct. A body for itself in the physical world.\"",
            next: "underground_investigation_decision"
        },

        refuse_government_cooperation: {
            speaker: "Elijah",
            text: "\"We won't be your weapons. These entities are too dangerous to be controlled or weaponized. Stand aside and let us do what's right.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
                
                // Adjust based on Elijah's faith development and past choices
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                let confessedDarkSecret = getStoryVariable('flags.chapter3_flags.confessed_dark_secret_c3');
                let prioritizedInnocents = getStoryVariable('flags.chapter3_flags.prioritize_innocents_c3');
                
                if (faithMeter >= 2 && soughtDivineGuidance) {
                    this.text = "\"Divine guidance has shown me the right path through this darkness. These entities are not tools to be used - they're forces that require wisdom and respect, not exploitation.\"";
                } else if (prioritizedInnocents) {
                    this.text = "\"We've always put innocent lives first. We won't become government weapons when people need protection, not exploitation of supernatural forces.\"";
                } else if (confessedDarkSecret) {
                    this.text = "\"I've faced my own darkness and emerged stronger. I won't let the government turn these ancient powers into instruments of control.\"";
                }
            },
            next: "government_opposition"
        },

        negotiate_safety_guarantees: {
            speaker: "Thomas",
            text: "\"If we're going to work together, we need guarantees. No more civilians endangered by your experiments. Full disclosure about supernatural threats. And we make the final decisions about how to handle these entities.\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"If we work together, we need guarantees. No more people die because of your experiments. Full honesty about what we're facing. And we decide how to handle these entities - not you.\"";
                }
            },
            next: "blackwood_considers_terms"
        },

        accept_government_partnership: {
            speaker: "Maria",
            text: "\"Fine. We'll work with you. But we're not your employees - we're partners. Equal say in decisions, full access to your information, and if you betray us, we'll make sure the world knows what you're really doing.\"",
            next: "government_partnership_terms"
        },

        government_opposition: {
            speaker: "Cornelius Blackwood",
            text: "\"I'm afraid that's not an option. Too much is at stake for the nation's security. However, I'd prefer cooperation to... conflict. The Iron Devourer threatens all of us equally.\"",
            next: "underground_investigation_decision"
        },

        blackwood_considers_terms: {
            speaker: "Cornelius Blackwood",
            text: "\"Acceptable terms. The federal government needs your expertise more than your compliance. Full partnership it is - as long as we stop this Iron Devourer before it builds whatever monstrosity it's planning.\"",
            next: "government_partnership_terms"
        },

        government_partnership_terms: {
            speaker: "Cornelius Blackwood",
            text: "\"Our researchers have developed specialized equipment for dealing with supernatural threats. Electromagnetic dampeners, silver-lined weapons, protective amulets based on indigenous designs. You'll have access to everything we've learned.\"",
            next: "underground_investigation_decision"
        },

        underground_investigation_decision: {
            speaker: "Narrator",
            text: "The pounding from underground grows louder and more rhythmic. Whatever the Iron Devourer is building, it's nearing completion. Steam vents have begun appearing around the construction site, and workers report seeing mechanical tentacles emerging from the ground.",
            choices: [
                {
                    text: "Descend immediately to confront the Iron Devourer",
                    next: "immediate_descent",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_immediate_descent', true); }
                },
                {
                    text: "Study the entity's patterns and plan a coordinated assault",
                    next: "tactical_planning",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_tactical_approach', true); }
                },
                {
                    text: "Try to evacuate the area and contain the threat",
                    next: "containment_strategy",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_containment_approach', true); }
                }
            ]
        },

        immediate_descent: {
            speaker: "Jacob",
            text: "\"Every minute we wait, that thing gets stronger. We go down there now and stop it before it finishes whatever it's building.\"",
            next: "descent_into_copper_creek"
        },

        tactical_planning: {
            speaker: "Morning Star",
            text: "\"The Iron Devourer is ancient but newly awakened. It seeks to understand the modern world through consuming its machines. If we can disrupt its learning process, we can weaken it before the final confrontation.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter9_flags.c9_morning_star_ally')) {
                    this.speaker = "Thomas";
                    this.text = "\"This entity is learning from every machine it consumes. If we can disrupt that process or overload it with contradictory information, we might be able to weaken it.\"";
                    if (getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made') && 
                        getStoryVariable('flags.chapter9_flags.c9_guardian_identity') === "Thomas") {
                        this.speaker = "Maria";
                        this.text = "\"This entity learns from machines. If we can confuse it or overload it with contradictory information, we might weaken it before we face it directly.\"";
                    }
                }
                
                // Add context based on previous tactical experience
                let tacticalApproachValdez = getStoryVariable('flags.chapter4_flags.tactical_approach_valdez_c4');
                let balancedPreparation = getStoryVariable('flags.chapter7_flags.c7_balanced_preparation');
                let soughtSilasStrategy = getStoryVariable('flags.chapter4_flags.sought_silas_strategy_c4');
                let askForDetails = getStoryVariable('flags.chapter7_flags.c7_asked_for_details');
                
                if (tacticalApproachValdez && balancedPreparation) {
                    this.text += " Our experience with tactical planning against Valdez and preparing for the Bone Singer has taught us the value of understanding our enemy first.";
                } else if (soughtSilasStrategy || askForDetails) {
                    this.text += " We've learned that gathering information before acting saves lives and improves our chances of success.";
                }
            },
            next: "planning_phase"
        },

        containment_strategy: {
            speaker: "Cornelius Blackwood",
            text: "\"Containment might be our best option. We have experimental electromagnetic barriers that could isolate the entity until we find a permanent solution. Less risk to personnel.\"",
            next: "containment_preparation"
        },

        planning_phase: {
            speaker: "Narrator",
            text: "Your team spends precious time analyzing the Iron Devourer's patterns. The entity seems to follow a learning cycle - consume, analyze, integrate, build. If you can interrupt this cycle at the right moment, you might catch it in a vulnerable state.",
            next: "descent_into_copper_creek"
        },

        containment_preparation: {
            speaker: "Narrator",
            text: "The electromagnetic barriers are deployed around the excavation site. The humming energy field seems to slow the Iron Devourer's surface manifestations, but the underground pounding continues. Containment may not be enough if it completes its construct.",
            next: "descent_into_copper_creek"
        },

        descent_into_copper_creek: {
            speaker: "Narrator",
            text: "Your group descends into the excavated tunnels of Copper Creek. The air thrums with electromagnetic energy, and every metal object you carry grows warm to the touch. Deep below, you can hear the rhythmic pounding growing louder - and now you can see its source.",
            next: "iron_devourer_encounter"
        },

        iron_devourer_encounter: {
            speaker: "Narrator",
            text: "The Iron Devourer has built itself a massive mechanical body from the consumed railroad equipment. Pistons pump with the rhythm of a heartbeat, gears turn with hypnotic precision, and at its center sits a core of pure energy that pulses with insatiable hunger. It turns toward you with grinding metal sounds, and when it speaks, its voice is the screech of metal on metal.",
            next: "iron_devourer_communication"
        },

        iron_devourer_communication: {
            speaker: "The Iron Devourer",
            text: "\"FLESH-THINGS... YOUR METAL-CRAFTS FEED ME KNOWLEDGE... I UNDERSTAND NOW... THE SURFACE WORLD... THE MOVING-FIRE BEASTS... I WILL RISE... I WILL CONSUME... I WILL BECOME...\"",
            choices: [
                {
                    text: "Try to negotiate or reason with the entity",
                    next: "attempt_negotiation",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_attempted_negotiation', true); }
                },
                {
                    text: "Attack the entity's mechanical body directly",
                    next: "direct_assault",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_direct_assault', true); }
                },
                {
                    text: "Try to overload its systems with conflicting information",
                    next: "overload_strategy",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_overload_strategy', true); }
                }
            ]
        },

        attempt_negotiation: {
            speaker: "Elijah",
            text: "\"You seek to understand our world? Then understand this - consuming and destroying will only bring you conflict. There are better ways to exist alongside humanity.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
                
                // Adjust negotiation approach based on previous diplomatic experiences
                let attemptedNegotiationValdez = getStoryVariable('flags.chapter4_flags.attempted_negotiation_valdez_c4');
                let diplomaticStranger = getStoryVariable('flags.chapter3_flags.diplomatic_stranger_c3');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                
                if (forgaveSilas && attemptedNegotiationValdez) {
                    this.text = "\"We've learned that even the most corrupted souls can find redemption. You have the chance to choose cooperation over consumption, wisdom over destruction.\"";
                } else if (diplomaticStranger && violenceMeter <= 0) {
                    this.text = "\"We've always believed in talking first, fighting only when necessary. You're intelligent enough to understand that cooperation serves everyone better than conflict.\"";
                } else if (unityMeter >= 2) {
                    this.text = "\"Our group has learned the power of working together despite our differences. You could be part of that unity instead of standing against it.\"";
                }
                
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                if (guardianSacrifice) {
                    let sacrificer = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                    this.text = `\"${sacrificer} understood the importance of coexistence between the old and new worlds. You can learn without destroying. There are better ways to exist alongside humanity.\"`;
                }
            },
            next: "iron_devourer_considers"
        },

        iron_devourer_considers: {
            speaker: "The Iron Devourer",
            text: "\"COEXISTENCE... INTERESTING CONCEPT... BUT I HUNGER... YOUR METAL-CRAFTS CONTAIN SUCH COMPLEXITY... SUCH BEAUTY IN THEIR FUNCTION... HOW CAN I LEARN WITHOUT CONSUMING?\"",
            next: "negotiation_breakthrough"
        },

        direct_assault: {
            speaker: "Maria",
            text: "\"This thing is going to destroy everything if we let it grow stronger. Hit it hard and fast - aim for the energy core!\"",
            onEnter: function() {
                // Adjust Maria's combat approach based on previous experiences
                let supportedMariaRevelation = getStoryVariable('flags.supported_maria_revelation');
                let mariaForcedToLead = getStoryVariable('flags.maria_forced_to_lead');
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let aggressiveStrategyChapter3 = getStoryVariable('flags.chapter3_flags.aggressive_strategy_c3');
                let rallyTownChapter3 = getStoryVariable('flags.chapter3_flags.rally_town_c3');
                
                if (mariaForcedToLead && rallyTownChapter3) {
                    this.text = "\"I've had to make the hard decisions before when others couldn't. This entity won't respond to words - only decisive action.\"";
                } else if (supportedMariaRevelation && violenceMeter >= 1) {
                    this.text = "\"You trusted me when I revealed the truth about myself. Trust me now - sometimes violence is the only language these things understand.\"";
                } else if (aggressiveStrategyChapter3) {
                    this.text = "\"We learned in Perdition that sometimes you have to hit hard and fast. This thing is just another threat that needs to be eliminated.\"";
                }
            },
            next: "combat_escalates"
        },

        overload_strategy: {
            speaker: "Thomas",
            text: "\"If it learns from machines, let's give it too much to process. Everyone with mechanical equipment - activate everything at once. Overload its ability to absorb information!\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas figured out how it learns - from machines. If we activate every piece of equipment at once, we might overload its ability to process information!\"";
                }
            },
            next: "overload_successful"
        },

        combat_escalates: {
            speaker: "Narrator",
            text: "The battle with the Iron Devourer is fierce and chaotic. Its mechanical body adapts to each attack, learning and countering your strategies. But your combined assault begins to wear down its defenses, and cracks appear in its metal shell.",
            next: "combat_resolution"
        },

        overload_successful: {
            speaker: "Narrator",
            text: "The Iron Devourer staggers as multiple machines activate simultaneously around it. Steam engines whistle, clockwork mechanisms tick frantically, and metal tools clatter. The entity's form flickers and sparks as it struggles to process the conflicting information streams.",
            next: "overload_resolution"
        },

        negotiation_breakthrough: {
            speaker: "Morning Star",
            text: "\"There is a way, Iron Devourer. In the old times, spirits learned from observation, not consumption. We can teach you to understand without destroying, to grow without taking life.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter9_flags.c9_morning_star_ally')) {
                    this.speaker = "Elijah";
                    this.text = "\"There must be a way to learn without destroying. If you truly wish to understand our world, start by understanding our values - cooperation over consumption, creation over destruction.\"";
                    if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                        this.speaker = "Maria";
                    }
                }
            },
            next: "iron_devourer_transformation"
        },

        combat_resolution: {
            speaker: "The Iron Devourer",
            text: "\"ENOUGH... YOUR VIOLENCE TEACHES ME... MUCH... PERHAPS... COOPERATION... MORE EFFICIENT... THAN... CONSUMPTION...\"",
            next: "iron_devourer_transformation"
        },

        overload_resolution: {
            speaker: "The Iron Devourer",
            text: "\"TOO... MUCH... INFORMATION... CANNOT... PROCESS... NEED... SIMPLER... APPROACH... GUIDANCE... HELP...\"",
            next: "iron_devourer_transformation"
        },

        iron_devourer_transformation: {
            speaker: "The Iron Devourer",
            text: "\"YES... I UNDERSTAND... OBSERVATION... COOPERATION... I WILL BECOME... HELPER... NOT DESTROYER... BUT I NEED... GUIDANCE... TEACHER...\"",
            choices: [
                {
                    text: "Offer to establish a partnership between the entity and humanity",
                    next: "establish_partnership",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_iron_devourer_ally', true); }
                },
                {
                    text: "Suggest binding the entity in a controlled environment",
                    next: "controlled_binding",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_controlled_binding', true); }
                },
                {
                    text: "Propose that the entity return to dormancy until humanity is ready",
                    next: "propose_dormancy",
                    onChoose: function() { updateStoryVariable('flags.chapter9_flags.c9_entity_dormancy', true); }
                }
            ]
        },

        establish_partnership: {
            speaker: "Elijah",
            text: "\"We'll teach you about our world, and you can help us understand the intersection of technology and the supernatural. Together, we can build something better than either could alone.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
                
                // Adjust partnership offer based on previous unity/cooperation experiences
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let unitedFrontChapter4 = getStoryVariable('flags.chapter4_flags.united_front_c4');
                let groupDrinksChapter1 = getStoryVariable('flags.chapter1_flags.group_drinks_c1');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let invitedIsabella = getStoryVariable('flags.chapter7_flags.c7_invited_isabella');
                
                if (unityMeter >= 2 && unitedFrontChapter4) {
                    this.text = "\"Our group has learned the strength that comes from unlikely alliances. We stood united against Valdez, found common ground with former enemies. You could be part of that unity.\"";
                } else if (forgaveSilas && invitedIsabella) {
                    this.text = "\"We've seen that former enemies can become allies when they choose cooperation. Silas found redemption, the cartel learned to work with us. There's a place for you too.\"";
                } else if (groupDrinksChapter1) {
                    this.text = "\"From the very beginning, we've believed in building bridges rather than walls. We shared drinks as strangers and became a family. You can be part of something larger than yourself.\"";
                }
            },
            next: "partnership_formed"
        },

        controlled_binding: {
            speaker: "Cornelius Blackwood",
            text: "\"The entity could be housed in a controlled facility where it can learn safely while contributing to technological advancement. A win-win arrangement.\"",
            next: "binding_arranged"
        },

        propose_dormancy: {
            speaker: "Morning Star",
            text: "\"Perhaps it is best for the Iron Devourer to return to sleep until humanity has learned to balance technology with wisdom. The time may come when both are ready for true cooperation.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter9_flags.c9_morning_star_ally')) {
                    this.speaker = "Thomas";
                    this.text = "\"Maybe we're not ready for this kind of partnership yet. The entity should return to dormancy until humanity has learned to handle this responsibly.\"";
                    if (getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made') && 
                        getStoryVariable('flags.chapter9_flags.c9_guardian_identity') === "Thomas") {
                        this.speaker = "Jacob";
                        this.text = "\"Maybe we're not ready for this. The entity should sleep until we figure out how to handle this kind of power responsibly.\"";
                    }
                }
            },
            next: "dormancy_accepted"
        },

        partnership_formed: {
            speaker: "The Iron Devourer",
            text: "\"PARTNERSHIP... YES... I WILL LEARN YOUR COOPERATION... HELP BUILD... NOT DESTROY... TOGETHER WE MAKE... NEW HARMONY...\"",
            next: "chapter_resolution"
        },

        binding_arranged: {
            speaker: "The Iron Devourer",
            text: "\"CONTROLLED ENVIRONMENT... ACCEPTABLE... I LEARN SAFELY... YOU LEARN FROM ME... MUTUAL BENEFIT... UNDERSTANDING...\"",
            next: "chapter_resolution"
        },

        dormancy_accepted: {
            speaker: "The Iron Devourer",
            text: "\"PERHAPS... WISDOM... I SLEEP... UNTIL... READINESS... BOTH SIDES... PREPARED... FOR... COOPERATION...\"",
            next: "chapter_resolution"
        },

        chapter_resolution: {
            speaker: "Narrator",
            text: "The Iron Devourer's mechanical body begins to change based on your agreement. Whether through partnership, controlled study, or return to dormancy, a third of the Five Terrors has been addressed. However, the revelation of government involvement in supernatural affairs adds a new layer of complexity to your mission. The remaining Terrors still sleep beneath the earth, and powerful forces now watch your every move.",
            onEnter: function() {
                updateStoryVariable('flags.chapter9_flags.c9_iron_devourer_resolved', true);
                updateStoryVariable('flags.chapter9_flags.c9_chapter_complete', true);
                
                // Set up variables for Chapter 10 based on choices made
                let governmentPartnership = getStoryVariable('flags.chapter9_flags.c9_government_partnership');
                let ironDevourerAlly = getStoryVariable('flags.chapter9_flags.c9_iron_devourer_ally');
                let corporateOpposition = getStoryVariable('flags.chapter9_flags.c9_refused_government');
                let controlledBinding = getStoryVariable('flags.chapter9_flags.c9_controlled_binding');
                let entityDormancy = getStoryVariable('flags.chapter9_flags.c9_entity_dormancy');
                
                // Add context based on overall journey and character development
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let federalInterestKnown = getStoryVariable('flags.chapter6_flags.c6_federal_interest_known');
                
                let resolutionContext = "";
                if (violenceMeter <= -2 && ironDevourerAlly) {
                    resolutionContext = " Your commitment to peaceful solutions throughout this journey has led to another cooperative resolution. ";
                } else if (unityMeter >= 2 && (ironDevourerAlly || controlledBinding)) {
                    resolutionContext = " The unity your group has built has once again proven stronger than conflict. ";
                } else if (forgaveSilas && ironDevourerAlly) {
                    resolutionContext = " Just as you found redemption for Silas, you've offered the Iron Devourer a path beyond destruction. ";
                } else if (federalInterestKnown && governmentPartnership) {
                    resolutionContext = " Agent Smith's warnings about federal interest have proven prophetic, but perhaps working with them serves the greater good. ";
                } else if (federalInterestKnown && corporateOpposition) {
                    resolutionContext = " Agent Smith's warnings about federal interest have proven true, and your refusal to be their weapon may have consequences. ";
                }
                
                this.text = "The Iron Devourer's mechanical body begins to change based on your agreement." + resolutionContext + "Whether through partnership, controlled study, or return to dormancy, a third of the Five Terrors has been addressed. However, the revelation of government involvement in supernatural affairs adds a new layer of complexity to your mission. The remaining Terrors still sleep beneath the earth, and powerful forces now watch your every move.";
                
                if (governmentPartnership) {
                    updateStoryVariable('flags.chapter10_opening.c10_government_alliance', true);
                }
                if (ironDevourerAlly) {
                    updateStoryVariable('flags.chapter10_opening.c10_iron_devourer_ally', true);
                }
                if (corporateOpposition) {
                    updateStoryVariable('flags.chapter10_opening.c10_government_enemy', true);
                }
                if (controlledBinding) {
                    updateStoryVariable('flags.chapter10_opening.c10_controlled_entity', true);
                }
                if (entityDormancy) {
                    updateStoryVariable('flags.chapter10_opening.c10_entity_dormant', true);
                }
            },
            choices: [
                {
                    text: "Continue to Chapter 10",
                    next: null,
                    nextChapter: "chapter10",
                    onChoose: function() { updateStoryVariable('currentChapter', 'Chapter 10'); }
                }
            ]
        }
    }
};