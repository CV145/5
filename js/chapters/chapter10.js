// Chapter 10: Shadows and Revelations
storyData.chapter10 = {
    name: "Chapter 10",
    title: "Shadows and Revelations",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "Three days have passed since the Iron Devourer's resolution at Copper Creek. Your group has set up a temporary camp in the abandoned mining town of Silver Ridge, using it as a base to process recent events and plan your next moves. The morning sun casts long shadows through broken windows as disturbing news arrives.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 10');
                
                // Check Chapter 9 outcomes and major story flags
                let governmentAlliance = getStoryVariable('flags.chapter10_opening.c10_government_alliance');
                let ironDevourerAlly = getStoryVariable('flags.chapter10_opening.c10_iron_devourer_ally');
                let governmentEnemy = getStoryVariable('flags.chapter10_opening.c10_government_enemy');
                let controlledEntity = getStoryVariable('flags.chapter10_opening.c10_controlled_entity');
                let entityDormant = getStoryVariable('flags.chapter10_opening.c10_entity_dormant');
                
                // Check broader character development from all chapters
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let federalInterestKnown = getStoryVariable('flags.chapter6_flags.c6_federal_interest_known');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                
                let contextualOpening = "Three days have passed since the Iron Devourer's resolution at Copper Creek. ";
                
                if (ironDevourerAlly) {
                    contextualOpening += "The entity has proven true to its word, already helping improve mining equipment efficiency in nearby camps. ";
                } else if (controlledEntity) {
                    contextualOpening += "Government researchers have transported the contained entity to a secure facility for study. ";
                } else if (entityDormant) {
                    contextualOpening += "The ancient being returned to its slumber, leaving the mining site eerily quiet. ";
                }
                
                if (governmentAlliance) {
                    contextualOpening += "Your partnership with the federal supernatural division has granted you access to resources and intelligence, but also placed you under their watchful eye. ";
                } else if (governmentEnemy) {
                    contextualOpening += "Your refusal to cooperate with government forces has made you fugitives, forcing you to operate from the shadows. ";
                }
                
                if (unityMeter >= 2) {
                    contextualOpening += "Your group's strong bonds have helped you weather the recent trials with remarkable resilience. ";
                } else if (unityMeter <= -2) {
                    contextualOpening += "Tensions within your group have been growing, the weight of your journey testing friendships and loyalties. ";
                }
                
                contextualOpening += "The morning sun casts long shadows through broken windows as disturbing news arrives.";
                
                this.text = contextualOpening;
            },
            next: "urgent_messenger_arrival"
        },

        urgent_messenger_arrival: {
            speaker: "Narrator",
            text: "A rider approaches at full gallop, his horse foam-flecked and exhausted. The man himself looks haggard, his clothes torn and stained with what might be blood. He slides from his mount and stumbles toward your group, clutching a leather dispatch case.",
            next: "messenger_revelation"
        },

        messenger_revelation: {
            speaker: "Federal Courier",
            text: "\"Thank God I found you! I bring word from Marshal Williams in Santa Fe. The fourth Terror... the Whispering Void... it's awakened near the old Spanish mission. People are vanishing, and those who return speak of hearing their dead loved ones calling from empty spaces.\"",
            onEnter: function() {
                let governmentAlliance = getStoryVariable('flags.chapter10_opening.c10_government_alliance');
                let governmentEnemy = getStoryVariable('flags.chapter10_opening.c10_government_enemy');
                let federalInterestKnown = getStoryVariable('flags.chapter6_flags.c6_federal_interest_known');
                
                if (governmentEnemy) {
                    this.speaker = "Desperate Local";
                    this.text = "\"Please, you're the ones who stopped the singing and the metal beast, aren't you? I rode for three days to find you. The old Spanish mission near Santa Fe... something's happening there. People are vanishing into thin air, and the few who come back aren't... aren't right anymore.\"";
                } else if (!federalInterestKnown && !governmentAlliance) {
                    this.speaker = "Frightened Messenger";
                    this.text = "\"You have to help us! The mission near Santa Fe... there's something there that's taking people. They just disappear, and when they come back, they talk about hearing voices from nowhere. My sister... she went to investigate and came back changed.\"";
                }
            },
            next: "whispering_void_details"
        },

        whispering_void_details: {
            speaker: "Federal Courier",
            text: "\"The Whispering Void feeds on loss and longing. It creates pockets of nothingness where the voices of the departed echo. Those who enter seeking their lost loved ones become trapped between existence and oblivion. The mission has become a gateway to... somewhere else.\"",
            onEnter: function() {
                let governmentEnemy = getStoryVariable('flags.chapter10_opening.c10_government_enemy');
                let morningStarAlly = getStoryVariable('flags.chapter9_flags.c9_morning_star_ally');
                
                if (governmentEnemy) {
                    this.speaker = "Desperate Local";
                    this.text = "\"I don't understand what's happening, but it started three days ago. First it was just cold spots in the mission, then people started hearing voices of dead relatives. Now whole rooms are... empty. Not dark, not destroyed - just empty. Like they never existed.\"";
                }
                
                if (morningStarAlly) {
                    this.text += " Morning Star nods grimly. \"The fourth Terror awakens. This one is perhaps the most dangerous - it does not kill the body, but consumes the soul's connection to reality itself.\"";
                }
            },
            choices: [
                {
                    text: "Immediately depart for Santa Fe to investigate",
                    next: "immediate_departure",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_immediate_response', true); }
                },
                {
                    text: "Gather more information before acting",
                    next: "intelligence_gathering",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_cautious_approach', true); }
                },
                {
                    text: "Send scouts ahead while you prepare",
                    requires: function() { 
                        return getStoryVariable('flags.chapter7_flags.c7_asked_for_details') ||
                               getStoryVariable('flags.chapter7_flags.c7_requested_prep_time'); 
                    },
                    next: "scouting_mission",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_scouting_approach', true); }
                }
            ]
        },

        immediate_departure: {
            speaker: "Elijah",
            text: "\"Every moment we delay, more souls are lost. We've learned that these Terrors grow stronger with time - we need to act now.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "\"People are disappearing. We can't waste time when lives are at stake.\"";
                }
                
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let elijahAcceptsViolence = getStoryVariable('flags.chapter1_flags.elijah_accepts_violence');
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let prioritizedInnocents = getStoryVariable('flags.chapter3_flags.prioritize_innocents_c3');
                
                if (guardianSacrifice) {
                    let sacrificer = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                    this.text = `\"${sacrificer}'s sacrifice reminds us that every moment matters. We can't let more people suffer when we have the power to help.\"`;
                } else if (prioritizedInnocents || violenceMeter <= -1) {
                    this.text = "\"We've always put innocent lives first. These people need us now, not later.\"";
                } else if (elijahAcceptsViolence && violenceMeter >= 1) {
                    this.text = "\"I've learned that sometimes decisive action is the only way to prevent greater tragedy. We strike fast and hard.\"";
                }
            },
            next: "rapid_mobilization"
        },

        intelligence_gathering: {
            speaker: "Thomas",
            text: "\"We need to understand what we're facing before we charge in. The Whispering Void sounds unlike the other Terrors - we should learn from our previous encounters.\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                let askForDetails = getStoryVariable('flags.chapter7_flags.c7_asked_for_details');
                let tacticalApproach = getStoryVariable('flags.chapter4_flags.tactical_approach_valdez_c4');
                let balancedPreparation = getStoryVariable('flags.chapter7_flags.c7_balanced_preparation');
                
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas always said to think before acting. We need to understand what we're facing - this sounds different from the other Terrors.\"";
                } else if (askForDetails || balancedPreparation) {
                    this.text = "\"Our preparation before facing the Bone Singer saved lives. We should gather intelligence before confronting something that manipulates reality itself.\"";
                } else if (tacticalApproach) {
                    this.text = "\"We learned against Valdez that tactical planning beats rushing in blind. This entity sounds like it requires a different approach entirely.\"";
                }
            },
            next: "information_analysis"
        },

        scouting_mission: {
            speaker: "Jacob",
            text: "\"Let's send a small team ahead to assess the situation while we prepare properly. We've learned the value of reconnaissance from our previous encounters.\"",
            onEnter: function() {
                let requestedPrepTime = getStoryVariable('flags.chapter7_flags.c7_requested_prep_time');
                let tacticalApproach = getStoryVariable('flags.chapter4_flags.tactical_approach_valdez_c4');
                let jacobSavedElijah = getStoryVariable('flags.jacob_saved_elijah_chapter1');
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                
                if (requestedPrepTime && tacticalApproach) {
                    this.text = "\"Our careful preparation before the Bone Singer and tactical approach against Valdez both paid off. Let's scout first, then strike with full knowledge.\"";
                } else if (jacobSavedElijah && unityMeter >= 1) {
                    this.text = "\"I've seen what happens when we look out for each other and plan carefully. Let's not rush into something that could separate us from reality itself.\"";
                }
            },
            next: "scout_team_selection"
        },

        rapid_mobilization: {
            speaker: "Narrator",
            text: "Your group quickly breaks camp and prepares for immediate departure. The urgency is palpable, but the hasty preparations mean you'll arrive at Santa Fe with limited supplies and no detailed plan.",
            onEnter: function() {
                let immediateResponse = getStoryVariable('flags.chapter9_flags.c9_immediate_response');
                let groupDrinks = getStoryVariable('flags.chapter1_flags.group_drinks_c1');
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                
                if (immediateResponse && unityMeter >= 1) {
                    this.text += " Your group's experience working together under pressure shows as you efficiently coordinate the rapid departure.";
                } else if (groupDrinks && unityMeter >= 1) {
                    this.text += " The bonds forged from your very first night together help you move as one unit despite the rush.";
                } else if (unityMeter <= -1) {
                    this.text += " The hasty departure reveals some of the cracks in your group's unity, with disagreements about priorities slowing you down.";
                }
            },
            next: "journey_to_santa_fe"
        },

        information_analysis: {
            speaker: "Narrator",
            text: "You spend several hours questioning the messenger and cross-referencing his account with what you know about the other Terrors. Patterns begin to emerge that could prove crucial for confronting the Whispering Void.",
            onEnter: function() {
                let trustedSilasRitual = getStoryVariable('flags.chapter4_flags.trusted_silas_ritual_c4');
                let federalInterestKnown = getStoryVariable('flags.chapter6_flags.c6_federal_interest_known');
                let governmentAlliance = getStoryVariable('flags.chapter10_opening.c10_government_alliance');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                
                if (governmentAlliance && federalInterestKnown) {
                    this.text += " Your government contacts provide additional intelligence about previous Whispering Void encounters dating back decades.";
                } else if (trustedSilasRitual && forgaveSilas) {
                    this.text += " Your experience with Silas's supernatural knowledge and the lessons learned from his redemption provide valuable insights.";
                }
            },
            next: "tactical_planning_phase"
        },

        scout_team_selection: {
            speaker: "Narrator",
            text: "Choosing scouts for a mission involving reality-warping entities requires careful consideration. Who can resist the call of lost loved ones? Who has the mental fortitude to return with accurate intelligence?",
            choices: [
                {
                    text: "Send Elijah - his faith may protect him from despair",
                    requires: function() { 
                        return getStoryVariable('flags.faith_vs_doubt_meter') >= 1 ||
                               getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3'); 
                    },
                    next: "elijah_scout_mission",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_elijah_scout', true); }
                },
                {
                    text: "Send Thomas - his scientific approach could provide objective analysis",
                    requires: function() {
                        return !getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made') ||
                               getStoryVariable('flags.chapter9_flags.c9_guardian_identity') !== "Thomas";
                    },
                    next: "thomas_scout_mission",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_thomas_scout', true); }
                },
                {
                    text: "Send Maria and Jacob together - their partnership is strong",
                    requires: function() { 
                        return getStoryVariable('flags.unity_vs_division_meter') >= 1; 
                    },
                    next: "paired_scout_mission",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_paired_scouts', true); }
                },
                {
                    text: "Send Morning Star - their supernatural knowledge may be key",
                    requires: function() { 
                        return getStoryVariable('flags.chapter9_flags.c9_morning_star_ally'); 
                    },
                    next: "morning_star_scout",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_morning_star_scout', true); }
                }
            ]
        },

        elijah_scout_mission: {
            speaker: "Elijah",
            text: "\"I'll go. My faith has carried me through darkness before, and if this entity feeds on despair, perhaps divine protection will shield me from its influence.\"",
            onEnter: function() {
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                let confessedDarkSecret = getStoryVariable('flags.chapter3_flags.confessed_dark_secret_c3');
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                let elijahPacifist = getStoryVariable('flags.elijah_pacifist_in_chapter1');
                
                if (soughtDivineGuidance && faithMeter >= 2) {
                    this.text = "\"The divine guidance I sought in that ruined church prepared me for moments like this. My faith is stronger than any whispers from the void.\"";
                } else if (confessedDarkSecret && faithMeter >= 1) {
                    this.text = "\"I've faced my own darkness and found redemption. If this entity feeds on guilt and loss, I have nothing left for it to take.\"";
                } else if (elijahPacifist) {
                    this.text = "\"My commitment to peace has strengthened my resolve. I won't be swayed by voices promising easy answers through violence or despair.\"";
                }
            },
            next: "elijah_reconnaissance"
        },

        thomas_scout_mission: {
            speaker: "Thomas",
            text: "\"A scientific approach might be exactly what's needed. I can observe the phenomenon objectively and identify patterns that emotion might obscure.\"",
            onEnter: function() {
                let thomasMedical = getStoryVariable('flags.chapter8_flags.c8_thomas_medical_connection');
                let knowsThomasProfession = getStoryVariable('flags.knows_thomas_profession');
                let balancedPreparation = getStoryVariable('flags.chapter7_flags.c7_balanced_preparation');
                
                if (thomasMedical && knowsThomasProfession) {
                    this.text = "\"My medical background helped us understand the supernatural effects on the miners. Clinical observation might reveal how this entity manipulates perception and reality.\"";
                } else if (balancedPreparation) {
                    this.text = "\"Our balanced approach to preparation has served us well. I can gather the hard data we need to formulate an effective response.\"";
                }
            },
            next: "thomas_reconnaissance"
        },

        paired_scout_mission: {
            speaker: "Maria",
            text: "\"Jacob and I work well together. If one of us gets affected by the entity's influence, the other can pull them back to reality.\"",
            onEnter: function() {
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let supportedMariaRevelation = getStoryVariable('flags.supported_maria_revelation');
                let jacobSavedElijah = getStoryVariable('flags.jacob_saved_elijah_chapter1');
                let groupDrinks = getStoryVariable('flags.chapter1_flags.group_drinks_c1');
                
                if (unityMeter >= 2 && groupDrinks) {
                    this.text = "\"From our first night sharing drinks to now, we've learned to watch each other's backs. That trust will protect us from any entity trying to separate us from reality.\"";
                } else if (supportedMariaRevelation && jacobSavedElijah) {
                    this.text = "\"We've both experienced being saved by the group's loyalty. That connection to each other will anchor us against any supernatural influence.\"";
                }
            },
            next: "paired_reconnaissance"
        },

        morning_star_scout: {
            speaker: "Morning Star",
            text: "\"The Whispering Void is known to my people. I have protections against its influence and knowledge of its weaknesses. I will go and return with what you need to know.\"",
            next: "morning_star_reconnaissance"
        },

        journey_to_santa_fe: {
            speaker: "Narrator",
            text: "The three-day ride to Santa Fe passes in tense silence. As you approach the old Spanish mission, the very air seems different - thinner, as if reality itself has been worn away. Local townspeople point you toward the mission with frightened whispers and crossed themselves.",
            next: "mission_arrival"
        },

        tactical_planning_phase: {
            speaker: "Narrator",
            text: "Your analysis reveals disturbing patterns. The Whispering Void appears to create 'gaps' in reality where the barrier between the living and dead grows thin. These gaps feed on emotional trauma and expand outward from sources of great loss.",
            next: "planning_breakthrough"
        },

        elijah_reconnaissance: {
            speaker: "Narrator",
            text: "Elijah returns from the mission after two days, shaken but intact. His report confirms your worst fears while providing crucial intelligence about the entity's nature and weaknesses.",
            onEnter: function() {
                updateStoryVariable('flags.chapter10_flags.c10_elijah_scouted_successfully', true);
            },
            next: "elijah_report"
        },

        thomas_reconnaissance: {
            speaker: "Narrator",
            text: "Thomas returns with detailed observations and measurements. His scientific approach has yielded valuable data about the phenomenon's mechanics, though the experience has clearly affected him.",
            onEnter: function() {
                updateStoryVariable('flags.chapter10_flags.c10_thomas_scouted_successfully', true);
            },
            next: "thomas_report"
        },

        paired_reconnaissance: {
            speaker: "Narrator",
            text: "Maria and Jacob return together, their partnership having protected them from the worst of the entity's influence. Their combined observations provide both emotional and tactical intelligence.",
            onEnter: function() {
                updateStoryVariable('flags.chapter10_flags.c10_paired_scouted_successfully', true);
            },
            next: "paired_report"
        },

        morning_star_reconnaissance: {
            speaker: "Narrator",
            text: "Morning Star returns with ancient knowledge activated by direct exposure to the Whispering Void. Their insights into the entity's true nature could prove decisive in the coming confrontation.",
            onEnter: function() {
                updateStoryVariable('flags.chapter10_flags.c10_morning_star_scouted_successfully', true);
            },
            next: "morning_star_report"
        },

        elijah_report: {
            speaker: "Elijah",
            text: "\"The mission is... hollow. Not empty, but hollow. I could hear my congregation calling to me from spaces that weren't there. My faith held, but barely. The entity doesn't just feed on loss - it offers false reunion with the dead.\"",
            onEnter: function() {
                let confessionType = getStoryVariable('flags.elijah_confession_type');
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                
                if (confessionType === 'congregation_killed') {
                    this.text = "\"I heard them... my entire congregation calling my name from the void. They forgave me, offered to take away my guilt. It would have been so easy to follow their voices into nothingness.\"";
                } else if (confessionType === 'man_died_words') {
                    this.text = "\"The man who died from my words was there, calling from the emptiness. He said the pain could end if I just stepped into the void with him. My faith barely held against that temptation.\"";
                } else if (soughtDivineGuidance) {
                    this.text = "\"The divine guidance I sought protected me, but I could feel the entity trying to twist my faith into despair. It feeds on our deepest losses and offers false comfort.\"";
                }
            },
            next: "mission_planning"
        },

        thomas_report: {
            speaker: "Thomas",
            text: "\"The phenomenon exhibits properties of spatial displacement combined with psychic resonance. The 'gaps' aren't destroying matter - they're relocating sections of reality to... somewhere else. The voices are real, but they're not the actual dead.\"",
            onEnter: function() {
                let knowsThomasProfession = getStoryVariable('flags.knows_thomas_profession');
                let thomasMedical = getStoryVariable('flags.chapter8_flags.c8_thomas_medical_connection');
                
                if (knowsThomasProfession && thomasMedical) {
                    this.text = "\"As a doctor, I can tell you the psychological effects are as real as any physical wound. The entity is creating perfect psychological profiles of the dead based on the memories of the living, then using those constructs to lure people into the void.\"";
                }
            },
            next: "mission_planning"
        },

        paired_report: {
            speaker: "Maria",
            text: "\"We kept each other grounded. The void tried to separate us by showing us different versions of the same lost loved ones, but our connection to each other was stronger than its illusions.\"",
            onEnter: function() {
                let supportedMariaRevelation = getStoryVariable('flags.supported_maria_revelation');
                let jacobSavedElijah = getStoryVariable('flags.jacob_saved_elijah_chapter1');
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                
                if (supportedMariaRevelation && unityMeter >= 2) {
                    this.text = "\"When you supported me through my revelation about my past, you taught me that living connections matter more than guilt over the dead. That lesson protected us both from the void's false promises.\"";
                } else if (jacobSavedElijah && unityMeter >= 1) {
                    this.text = "\"Jacob's willingness to save Elijah back in the beginning showed us all that we're stronger together. The entity couldn't break that bond with promises of reuniting with the dead.\"";
                }
            },
            next: "mission_planning"
        },

        morning_star_report: {
            speaker: "Morning Star",
            text: "\"The Whispering Void is wounded - it was once whole but was split between worlds long ago. It seeks to heal itself by pulling living souls into the space between life and death, using their life force to bridge the gap between realities.\"",
            next: "mission_planning"
        },

        mission_arrival: {
            speaker: "Narrator",
            text: "The mission looms before you, its adobe walls intact but somehow... less solid than they should be. Sections of the building flicker in and out of existence, and you can hear faint voices calling from spaces that should be empty courtyards.",
            next: "initial_assessment"
        },

        planning_breakthrough: {
            speaker: "Narrator",
            text: "Your careful analysis pays off. You've identified that the entity's power waxes and wanes with the emotional state of nearby people. Strong bonds between the living seem to weaken its influence, while isolation and despair strengthen it.",
            next: "prepared_approach"
        },

        mission_planning: {
            speaker: "Narrator",
            text: "Armed with intelligence from your scout, you begin planning your approach to the Whispering Void. The entity's nature suggests that your strategy will need to account for psychological warfare as much as supernatural threats.",
            choices: [
                {
                    text: "Enter together as a unified group to resist the entity's attempts to separate you",
                    requires: function() { 
                        return getStoryVariable('flags.unity_vs_division_meter') >= 1; 
                    },
                    next: "unity_approach",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_unity_strategy', true); }
                },
                {
                    text: "Create a spiritual barrier using faith and positive memories",
                    requires: function() { 
                        return getStoryVariable('flags.faith_vs_doubt_meter') >= 1 ||
                               getStoryVariable('flags.forgave_silas_chapter5'); 
                    },
                    next: "spiritual_approach",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_spiritual_strategy', true); }
                },
                {
                    text: "Use scientific methods to disrupt the entity's spatial displacement",
                    requires: function() { 
                        return getStoryVariable('flags.chapter10_flags.c10_thomas_scouted_successfully') ||
                               getStoryVariable('flags.knows_thomas_profession'); 
                    },
                    next: "scientific_approach",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_scientific_strategy', true); }
                },
                {
                    text: "Combine multiple approaches for maximum effectiveness",
                    requires: function() {
                        return getStoryVariable('flags.chapter7_flags.c7_balanced_preparation') ||
                               getStoryVariable('flags.chapter4_flags.united_front_c4');
                    },
                    next: "combined_approach",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_combined_strategy', true); }
                }
            ]
        },

        initial_assessment: {
            speaker: "Narrator",
            text: "Without advance intelligence, you must rely on immediate observation and past experience. The mission's reality distortions are immediately apparent, but their full nature remains a dangerous mystery.",
            choices: [
                {
                    text: "Advance cautiously, staying together",
                    next: "cautious_entry",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_cautious_entry', true); }
                },
                {
                    text: "Split up to cover more ground quickly",
                    next: "split_entry",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_split_entry', true); }
                },
                {
                    text: "Attempt to communicate with the entity first",
                    requires: function() {
                        return getStoryVariable('flags.chapter4_flags.attempted_negotiation_valdez_c4') ||
                               getStoryVariable('flags.chapter9_flags.c9_attempted_negotiation');
                    },
                    next: "diplomatic_entry",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_diplomatic_entry', true); }
                }
            ]
        },

        prepared_approach: {
            speaker: "Narrator",
            text: "Your tactical preparation provides a significant advantage. Understanding the entity's mechanics allows you to plan countermeasures and identify its potential weaknesses before direct confrontation.",
            next: "mission_planning"
        },

        unity_approach: {
            speaker: "Maria",
            text: "\"We've grown stronger together through every trial. This entity feeds on isolation and despair, but our bonds are unbreakable. We enter as one and leave as one.\"",
            onEnter: function() {
                let groupDrinks = getStoryVariable('flags.chapter1_flags.group_drinks_c1');
                let unitedFront = getStoryVariable('flags.chapter4_flags.united_front_c4');
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                
                if (groupDrinks && unitedFront && unityMeter >= 2) {
                    this.text = "\"From our first night sharing drinks to standing united against Valdez, we've proven that together we're stronger than any supernatural threat. This entity won't break what we've built.\"";
                } else if (forgaveSilas && unityMeter >= 1) {
                    this.text = "\"We showed mercy to Silas and found strength in redemption. That same bond will protect us from any entity trying to exploit our guilt or loss.\"";
                }
            },
            next: "unity_implementation"
        },

        spiritual_approach: {
            speaker: "Elijah",
            text: "\"Faith and hope are stronger than despair and loss. We'll surround ourselves with memories of light and love, creating a barrier the void cannot penetrate.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "\"We honor those we've lost by living fully, not by following them into oblivion. Our positive memories and hopes for the future will shield us from the void's false promises.\"";
                }
                
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                
                if (soughtDivineGuidance && faithMeter >= 2) {
                    this.text = "\"The divine guidance I found in darkness will light our way through this void. Faith burns brighter than any supernatural shadow.\"";
                } else if (forgaveSilas && faithMeter >= 1) {
                    this.text = "\"If we could find redemption for Silas, we can find hope even in the face of this void. Love and forgiveness are more powerful than loss and despair.\"";
                }
            },
            next: "spiritual_implementation"
        },

        scientific_approach: {
            speaker: "Thomas",
            text: "\"If the entity manipulates space-time, we can interfere with that manipulation. Electromagnetic fields, focused sound waves, perhaps even controlled explosions to disrupt its spatial distortions.\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                let ironDevourerAlly = getStoryVariable('flags.chapter10_opening.c10_iron_devourer_ally');
                let knowsThomasProfession = getStoryVariable('flags.knows_thomas_profession');
                
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas taught us to think scientifically about these supernatural threats. We can use what he learned about the Iron Devourer to disrupt this entity's control over reality.\"";
                } else if (ironDevourerAlly) {
                    this.text = "\"Our alliance with the Iron Devourer has taught us how technology and supernatural forces can interact. We can use that knowledge to interfere with the Whispering Void's abilities.\"";
                } else if (knowsThomasProfession) {
                    this.text = "\"Medical science taught me that every phenomenon has underlying mechanisms. This entity may be supernatural, but it follows rules we can understand and exploit.\"";
                }
            },
            next: "scientific_implementation"
        },

        combined_approach: {
            speaker: "Narrator",
            text: "Your group's experience with complex supernatural threats has taught you that multiple strategies working in concert are often more effective than any single approach. You prepare to implement a coordinated multi-pronged assault on the Whispering Void.",
            onEnter: function() {
                let balancedPreparation = getStoryVariable('flags.chapter7_flags.c7_balanced_preparation');
                let unitedFront = getStoryVariable('flags.chapter4_flags.united_front_c4');
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                
                if (balancedPreparation && unitedFront && unityMeter >= 1) {
                    this.text += " Your experience with balanced preparation against the Bone Singer and united action against Valdez provides the perfect foundation for this complex operation.";
                }
            },
            next: "combined_implementation"
        },

        unity_implementation: {
            speaker: "Narrator",
            text: "Your group forms a tight formation, each member maintaining physical contact with another. As you approach the mission, the entity's attempts to create psychological distance are countered by your literal and emotional proximity.",
            next: "void_confrontation"
        },

        spiritual_implementation: {
            speaker: "Narrator",
            text: "Drawing upon your strongest positive memories and deepest convictions, your group creates a bubble of hope and faith around yourselves. The void's whispers grow quieter as they struggle against your collective spiritual strength.",
            next: "void_confrontation"
        },

        scientific_implementation: {
            speaker: "Narrator",
            text: "Using improvised equipment and careful calculation, you begin generating electromagnetic interference patterns designed to disrupt spatial distortions. The mission's reality fluctuations become more stable under your technological assault.",
            next: "void_confrontation"
        },

        combined_implementation: {
            speaker: "Narrator",
            text: "Your multi-layered approach proves devastatingly effective. Unity strengthens resolve, faith provides protection, and science stabilizes reality. The Whispering Void finds itself facing an opponent it cannot easily categorize or counter.",
            next: "void_confrontation"
        },

        cautious_entry: {
            speaker: "Narrator",
            text: "Your careful approach allows you to notice and avoid several reality traps, but the slow pace gives the entity more time to study your group and tailor its psychological attacks to your individual weaknesses.",
            next: "void_confrontation"
        },

        split_entry: {
            speaker: "Narrator",
            text: "Dividing your forces allows you to cover more ground and gather information quickly, but also makes each member more vulnerable to the entity's attempts to isolate and consume them.",
            next: "void_confrontation"
        },

        diplomatic_entry: {
            speaker: "Narrator",
            text: "Your attempt to communicate with the Whispering Void initially seems to fail, but then you realize the entity has been 'speaking' all along - through the arrangement of missing spaces and the specific voices it chooses to mimic.",
            next: "void_communication"
        },

        void_communication: {
            speaker: "The Whispering Void",
            text: "The entity's 'voice' comes not as sound but as gaps in sound, absence made audible. 'Why... do you... resist... reunion? The pain... can end... join those... you have lost... in the space... between breath... between heartbeats...'",
            choices: [
                {
                    text: "Explain that life has meaning precisely because it ends",
                    requires: function() {
                        return getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made') ||
                               getStoryVariable('flags.faith_vs_doubt_meter') >= 1;
                    },
                    next: "philosophy_of_life",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_philosophy_argument', true); }
                },
                {
                    text: "Offer to help the entity heal its split nature without consuming souls",
                    requires: function() {
                        return getStoryVariable('flags.forgave_silas_chapter5') ||
                               getStoryVariable('flags.chapter9_flags.c9_iron_devourer_ally');
                    },
                    next: "healing_offer",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_healing_offer', true); }
                },
                {
                    text: "Challenge the entity's right to decide who lives or dies",
                    requires: function() {
                        return getStoryVariable('flags.violence_vs_peace_meter') >= 1 ||
                               getStoryVariable('flags.chapter3_flags.prioritize_innocents_c3');
                    },
                    next: "challenge_entity",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_challenged_entity', true); }
                }
            ]
        },

        void_confrontation: {
            speaker: "Narrator",
            text: "The heart of the mission reveals the Whispering Void in its full terrible glory - a swirling absence in the center of the chapel, surrounded by the ghostly echoes of everyone who has ever suffered loss in this place. Your chosen approach will determine how this confrontation unfolds.",
            choices: [
                {
                    text: "Attempt to seal the void permanently",
                    next: "sealing_attempt",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_sealing_attempt', true); }
                },
                {
                    text: "Try to communicate with the trapped souls",
                    next: "soul_communication",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_soul_communication', true); }
                },
                {
                    text: "Focus on disrupting the entity's connection to this reality",
                    next: "disruption_attempt",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_disruption_attempt', true); }
                },
                {
                    text: "Attempt to heal the split in the entity's nature",
                    requires: function() {
                        return getStoryVariable('flags.forgave_silas_chapter5') &&
                               getStoryVariable('flags.chapter9_flags.c9_iron_devourer_ally');
                    },
                    next: "healing_attempt",
                    onChoose: function() { updateStoryVariable('flags.chapter10_flags.c10_healing_attempt', true); }
                }
            ]
        },

        philosophy_of_life: {
            speaker: "Elijah",
            text: "\"Life is precious precisely because it's finite. The connections we make, the love we share, the sacrifices we choose - they have meaning because they're not eternal. You offer escape from pain, but you also steal the possibility of joy.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
                
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                let confessionType = getStoryVariable('flags.elijah_confession_type');
                let soughtDivineGuidance = getStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3');
                
                if (guardianSacrifice) {
                    this.text = `\"${guardianIdentity} chose to become a guardian because he understood that some things are worth more than life itself. His sacrifice had meaning because it was chosen, not forced. Your void offers no choice, no meaning.\"`;
                } else if (confessionType && soughtDivineGuidance) {
                    this.text = "\"I've faced my own darkness and found that redemption requires living through pain, not escaping from it. Growth comes from surviving loss, not surrendering to it.\"";
                }
            },
            next: "entity_considers_philosophy"
        },

        healing_offer: {
            speaker: "Maria",
            text: "\"You're wounded, split between worlds. We've helped other ancient entities find new purposes. The Iron Devourer learned to create instead of consume. Perhaps you can learn to bridge worlds without destroying souls.\"",
            onEnter: function() {
                let forgaveSilas = getStoryVariable('flags.forgave_silas_chapter5');
                let ironDevourerAlly = getStoryVariable('flags.chapter10_opening.c10_iron_devourer_ally');
                let attempted_negotiation = getStoryVariable('flags.chapter9_flags.c9_attempted_negotiation');
                
                if (forgaveSilas && ironDevourerAlly) {
                    this.text = "\"We showed Silas that redemption was possible, and we helped the Iron Devourer find purpose in cooperation. You don't have to heal yourself by consuming others - we can help you find another way.\"";
                } else if (attempted_negotiation) {
                    this.text = "\"We've learned that supernatural entities aren't inherently evil - they're often just trying to fulfill their nature in the only way they know. We can teach you new ways to exist between worlds.\"";
                }
            },
            next: "entity_considers_healing"
        },

        challenge_entity: {
            speaker: "Thomas",
            text: "\"You have no right to decide who deserves oblivion and who deserves life. These people came here seeking peace for their loved ones, not to be consumed by your hunger for wholeness.\"",
            onEnter: function() {
                let guardianSacrifice = getStoryVariable('flags.chapter9_flags.c9_guardian_sacrifice_made');
                let guardianIdentity = getStoryVariable('flags.chapter9_flags.c9_guardian_identity');
                let prioritizedInnocents = getStoryVariable('flags.chapter3_flags.prioritize_innocents_c3');
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                
                if (guardianSacrifice && guardianIdentity === "Thomas") {
                    this.speaker = "Jacob";
                    this.text = "\"Thomas gave his life to protect people from supernatural threats. We won't let you twist that sacrifice by claiming these people deserve the same fate.\"";
                } else if (prioritizedInnocents && violenceMeter >= 1) {
                    this.text = "\"We've always put innocent lives first, even when it meant fighting. You're just another predator hiding behind cosmic justification for your hunger.\"";
                }
            },
            next: "entity_responds_to_challenge"
        },

        entity_considers_philosophy: {
            speaker: "The Whispering Void",
            text: "'Meaning... in endings... choice... in suffering... perhaps... there is... wisdom... in your words... but the split... remains... the pain... of separation... from wholeness...'",
            next: "philosophical_breakthrough"
        },

        entity_considers_healing: {
            speaker: "The Whispering Void",
            text: "'Help... without consuming... bridging... without destroying... show me... this way... that requires... no souls... as payment...'",
            next: "healing_breakthrough"
        },

        entity_responds_to_challenge: {
            speaker: "The Whispering Void",
            text: "'Right... wrong... concepts... of limited... beings... but your... defiance... has strength... perhaps... worthier... than submission...'",
            next: "confrontation_escalates"
        },

        philosophical_breakthrough: {
            speaker: "Narrator",
            text: "Your philosophical argument resonates with something deep within the entity's fragmented consciousness. The void begins to stabilize as it contemplates the meaning you've offered, but this is only the beginning of a longer resolution.",
            next: "chapter_resolution"
        },

        healing_breakthrough: {
            speaker: "Narrator",
            text: "The entity's willingness to accept help creates an opportunity for true healing. Working together, you begin the delicate process of helping the Whispering Void reconnect with itself without requiring the sacrifice of living souls.",
            next: "chapter_resolution"
        },

        confrontation_escalates: {
            speaker: "Narrator",
            text: "Your challenge has earned the entity's respect, but also its full attention. The void's power focuses on your group as it prepares to test whether your defiance is backed by strength worthy of its acknowledgment.",
            next: "final_confrontation"
        },

        sealing_attempt: {
            speaker: "Narrator",
            text: "Attempting to seal the void requires channeling enormous amounts of spiritual and physical energy. The effort will test every bond your group has forged and every lesson you've learned about supernatural forces.",
            next: "sealing_process"
        },

        soul_communication: {
            speaker: "Narrator",
            text: "Reaching out to the trapped souls reveals that many of them retain fragments of their original consciousness. They're not truly dead, but exist in a liminal state between life and oblivion.",
            next: "soul_rescue"
        },

        disruption_attempt: {
            speaker: "Narrator",
            text: "Using your understanding of the entity's mechanics, you begin systematically disrupting its connection to this reality. The process is dangerous but may force it to retreat to whatever dimension it originally came from.",
            next: "disruption_process"
        },

        healing_attempt: {
            speaker: "Narrator",
            text: "Drawing upon your experiences with redemption and cooperation, you attempt to heal the fundamental split in the entity's nature. This approach requires enormous trust and carries the greatest potential for either complete success or catastrophic failure.",
            next: "healing_process"
        },

        chapter_resolution: {
            speaker: "Narrator",
            text: "The confrontation with the Whispering Void concludes, but its resolution will depend on the choices you've made throughout your entire journey. The connections you've forged, the wisdom you've gained, and the principles you've upheld all contribute to the final outcome.",
            onEnter: function() {
                updateStoryVariable('flags.chapter10_flags.c10_chapter_complete', true);
                
                // Set up variables for Chapter 11 based on all previous choices
                let violenceMeter = getStoryVariable('flags.violence_vs_peace_meter') || 0;
                let unityMeter = getStoryVariable('flags.unity_vs_division_meter') || 0;
                let faithMeter = getStoryVariable('flags.faith_vs_doubt_meter') || 0;
                let philosophyArgument = getStoryVariable('flags.chapter10_flags.c10_philosophy_argument');
                let healingOffer = getStoryVariable('flags.chapter10_flags.c10_healing_offer');
                let challengedEntity = getStoryVariable('flags.chapter10_flags.c10_challenged_entity');
                let governmentAlliance = getStoryVariable('flags.chapter10_opening.c10_government_alliance');
                let governmentEnemy = getStoryVariable('flags.chapter10_opening.c10_government_enemy');
                
                // Four Terrors now resolved - set up for final Terror
                updateStoryVariable('flags.chapter11_opening.c11_four_terrors_resolved', true);
                
                if (philosophyArgument || (faithMeter >= 2 && unityMeter >= 1)) {
                    updateStoryVariable('flags.chapter11_opening.c11_void_philosophical_resolution', true);
                } else if (healingOffer && unityMeter >= 1) {
                    updateStoryVariable('flags.chapter11_opening.c11_void_healed', true);
                } else if (challengedEntity || violenceMeter >= 2) {
                    updateStoryVariable('flags.chapter11_opening.c11_void_dominated', true);
                } else {
                    updateStoryVariable('flags.chapter11_opening.c11_void_contained', true);
                }
                
                if (governmentAlliance) {
                    updateStoryVariable('flags.chapter11_opening.c11_government_support', true);
                } else if (governmentEnemy) {
                    updateStoryVariable('flags.chapter11_opening.c11_government_opposition', true);
                }
                
                // Final Terror setup based on character growth
                if (violenceMeter >= 3) {
                    updateStoryVariable('flags.chapter11_opening.c11_violence_path', true);
                } else if (violenceMeter <= -3) {
                    updateStoryVariable('flags.chapter11_opening.c11_peace_path', true);
                }
                
                if (unityMeter >= 3) {
                    updateStoryVariable('flags.chapter11_opening.c11_unity_strength', true);
                } else if (unityMeter <= -3) {
                    updateStoryVariable('flags.chapter11_opening.c11_division_weakness', true);
                }
                
                let contextualEnding = "The confrontation with the Whispering Void concludes";
                
                if (philosophyArgument && faithMeter >= 2) {
                    contextualEnding += " with the entity finding new purpose in the meaning you've shared. Your journey's lessons about faith and philosophy have transformed an ancient threat into a potential ally.";
                } else if (healingOffer && unityMeter >= 2) {
                    contextualEnding += " with the entity's wounds beginning to heal through cooperation rather than consumption. Your group's unity has shown it a better path.";
                } else if (challengedEntity && violenceMeter >= 2) {
                    contextualEnding += " with the entity retreating before your determined opposition. Your willingness to fight for what's right has earned its respect and withdrawal.";
                } else {
                    contextualEnding += " with the threat contained but not fully resolved. The entity remains dormant, a problem for future generations to face.";
                }
                
                contextualEnding += " However, disturbing reports reach you of the fifth and final Terror stirring. The Crimson Crown, destroyer of nations, has begun to wake in the ancient ruins far to the south. Your ultimate test awaits.";
                
                this.text = contextualEnding;
            },
            choices: [
                {
                    text: "Continue to Chapter 11",
                    next: null,
                    nextChapter: "chapter11",
                    onChoose: function() { updateStoryVariable('currentChapter', 'Chapter 11'); }
                }
            ]
        }
    }
};