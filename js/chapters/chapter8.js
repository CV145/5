// Chapter 8: The Bone Singer's Call
storyData.chapter8 = {
    name: "Chapter 8",
    title: "The Bone Singer's Call",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "The first day's ride to Devil's Backbone passes in uneasy silence. The singing that began as a distant whisper has grown stronger, a haunting melody that seems to resonate in your bones. Your horses grow increasingly restless as you approach the mining territory, and even the most hardened among you feel the weight of something ancient and malevolent awakening.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 8');
                
                // Check Chapter 7 outcomes to determine group composition
                let morningStarJoined = getStoryVariable('flags.chapter7_flags.c7_invited_morning_star');
                let isabellaJoined = getStoryVariable('flags.chapter7_flags.c7_invited_isabella');
                let cartelAlliance = getStoryVariable('flags.chapter7_flags.c7_cartel_info_sharing');
                let ritualProtection = getStoryVariable('flags.chapter7_flags.c7_ritual_protection');
                
                updateStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star', morningStarJoined || false);
                updateStoryVariable('flags.chapter8_flags.c8_group_composition_isabella', isabellaJoined || false);
                updateStoryVariable('flags.chapter8_flags.c8_cartel_alliance_active', cartelAlliance || false);
                updateStoryVariable('flags.chapter8_flags.c8_has_ritual_protection', ritualProtection || false);
            },
            next: "camp_first_night"
        },

        camp_first_night: {
            speaker: "Narrator",
            text: "As night falls, you make camp in a sheltered grove several miles from Devil's Backbone. The singing is now clearly audible - a wordless chant that seems to call to something deep within the earth. Around the campfire, tensions and uncertainties surface among your expanded group.",
            next: "campfire_dynamics"
        },

        campfire_dynamics: {
            speaker: "Morning Star",
            text: "\"The Bone Singer grows stronger with each hour. It feeds on the disturbance of the dead and the grief of the living. The mining has given it much to feast upon.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    // If Morning Star didn't join, this knowledge comes from experience instead
                    this.speaker = "Thomas";
                    this.text = "\"That singing... it's getting into my head. There's something about the frequency that affects the nervous system. Whatever's causing it isn't natural.\"";
                }
            },
            next: "isabella_concerns"
        },

        isabella_concerns: {
            speaker: "Isabella Valdez",
            text: "\"My family has lost three shipments near Devil's Backbone in the past month. The miners who survived spoke of dead men walking the tunnels, calling their names. I thought it was just mine gas causing hallucinations.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_isabella')) {
                    // If Isabella didn't join, this comes from Maria's cartel knowledge
                    this.speaker = "Maria";
                    this.text = "\"I've heard reports from cartel contacts near Devil's Backbone. Three shipments lost, miners talking about dead men in the tunnels. I thought it was just stories to cover theft.\"";
                }
            },
            next: "group_discussion"
        },

        group_discussion: {
            speaker: "Jacob",
            text: "\"So what's our plan? We can't just walk into those mines if there are... things... down there.\"",
            choices: [
                {
                    text: "Gather intelligence from surviving miners first",
                    next: "intelligence_gathering",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_chose_intelligence_first', true); }
                },
                {
                    text: "Attempt to confront the Bone Singer directly",
                    next: "direct_confrontation_plan",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_chose_direct_confrontation', true); }
                },
                {
                    text: "Try to find and protect survivors before facing the entity",
                    next: "rescue_mission_plan",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_chose_rescue_first', true); }
                }
            ]
        },

        intelligence_gathering: {
            speaker: "Thomas",
            text: "\"Smart. We need to understand what we're facing before we go underground. The more we know about this Bone Singer's abilities and weaknesses, the better our chances.\"",
            next: "morning_star_ritual_knowledge"
        },

        direct_confrontation_plan: {
            speaker: "Elijah",
            text: "\"Every moment we delay, more innocent souls are claimed. Sometimes the righteous path is the direct one, regardless of the danger.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "\"Every moment we delay, more people die. We know what we're facing - an ancient evil. Better to strike quickly than let it grow stronger.\"";
                }
            },
            next: "morning_star_ritual_knowledge"
        },

        rescue_mission_plan: {
            speaker: "Maria",
            text: "\"There might still be people alive down there, trapped or hiding. If we can get them out first, the Bone Singer loses potential victims and we gain information.\"",
            next: "morning_star_ritual_knowledge"
        },

        morning_star_ritual_knowledge: {
            speaker: "Morning Star", 
            text: "\"The Bone Singer cannot be destroyed by conventional means. It must be bound again using the old ceremonies, or... transformed through great sacrifice. But first, we must understand why it has awakened now, in this place.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    // Alternative dialogue if Morning Star isn't present
                    this.speaker = "Thomas";
                    this.text = "\"From what we learned fighting the Hungry Dark, these entities can't be killed conventionally. We need to find a way to stop it that goes beyond bullets and blades.\"";
                }
            },
            next: "approach_devils_backbone"
        },

        approach_devils_backbone: {
            speaker: "Narrator",
            text: "The next morning, Devil's Backbone looms before you - a collection of ramshackle buildings built around the entrance to what was once a prosperous silver mine. Now it stands eerily silent except for that omnipresent singing echoing from the depths. Smoke rises from a few chimneys, suggesting some survivors remain.",
            next: "town_observation"
        },

        town_observation: {
            speaker: "Jacob",
            text: "\"I count maybe a dozen buildings with signs of life. The mine entrance... there's something wrong with it. It looks bigger than it should be, like it's been... opened wider.\"",
            next: "survivor_encounter"
        },

        survivor_encounter: {
            speaker: "Narrator",
            text: "As you approach the town, a figure emerges from one of the buildings - an elderly man with wild eyes and hands that shake with more than just age. He stares at your group with a mixture of relief and terror.",
            next: "survivor_speaks"
        },

        survivor_speaks: {
            speaker: "Old Miner Joe",
            text: "\"Strangers! Thank God, strangers! You... you ain't come about the silver, have you? Please tell me you ain't here for the silver. It's cursed, all of it. The singing started a month ago, and since then...\" He shudders. \"Since then, the dead don't stay dead.\"",
            choices: [
                {
                    text: "Reassure him you're here to help with the supernatural threat",
                    next: "reassure_survivor",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_reassured_survivor', true); }
                },
                {
                    text: "Ask about the other survivors in town",
                    next: "ask_about_survivors",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_asked_about_survivors', true); }
                },
                {
                    text: "Demand information about what happened in the mine",
                    next: "demand_mine_information",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_demanded_information', true); }
                }
            ]
        },

        reassure_survivor: {
            speaker: "Elijah",
            text: "\"We're not here for silver, friend. We've come to help stop whatever evil has awakened in these mountains. You're safe now.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "joe_relief"
        },

        ask_about_survivors: {
            speaker: "Thomas",
            text: "\"How many people are still alive in the town? Are they injured? We have medical supplies if needed.\"",
            next: "joe_survivor_count"
        },

        demand_mine_information: {
            speaker: "Maria",
            text: "\"Tell us exactly what happened in that mine. We need to know everything if we're going to stop this.\"",
            next: "joe_fearful_compliance"
        },

        joe_relief: {
            speaker: "Old Miner Joe",
            text: "\"Help? You... you mean to fight it? The thing that's been calling to us? Mister, I seen grown men walk into that mine 'cause they heard their dead fathers calling their names. Ain't none of them come back out.\"",
            next: "mine_horror_details"
        },

        joe_survivor_count: {
            speaker: "Old Miner Joe",
            text: "\"Maybe fifteen of us left out of near fifty. The rest... they either got called into the mine or they ran. Those of us left, we're too scared to leave and too scared to stay. Doc Peterson's been trying to keep folks calm, but that singing...\"",
            next: "meet_doc_peterson"
        },

        joe_fearful_compliance: {
            speaker: "Old Miner Joe",
            text: "\"I'll tell you what I can, miss, but it ain't natural what's down there. Started when we broke through into the old tribal burial caves. The foreman said to keep digging, but we shoulda listened to the warnings...\"",
            next: "mine_horror_details"
        },

        meet_doc_peterson: {
            speaker: "Narrator",
            text: "Joe leads you to a larger building where you find Dr. Peterson, a frontier physician who's been tending to the survivors' physical and mental distress. He looks up with weary hope as you enter.",
            next: "peterson_greeting"
        },

        peterson_greeting: {
            speaker: "Doc Peterson",
            text: "\"Thank God someone came. I'm Dr. Henry Peterson. I've been trying to keep these people sane, but that infernal singing is driving everyone to madness. Some days it's louder, some days softer, but it never stops.\"",
            onEnter: function() {
                // Thomas and Peterson have a professional connection
                if (getStoryVariable('flags.thomas_established_practice')) {
                    updateStoryVariable('flags.chapter8_flags.c8_thomas_medical_connection', true);
                }
            },
            next: "thomas_medical_consultation"
        },

        thomas_medical_consultation: {
            speaker: "Thomas",
            text: "\"Doctor, I'm Thomas Whitmore. What are the symptoms you're seeing? Physical manifestations beyond the psychological effects?\"",
            next: "peterson_medical_report"
        },

        peterson_medical_report: {
            speaker: "Doc Peterson",
            text: "\"Severe auditory hallucinations, compulsive behavior toward the mine entrance, and... this is where it gets strange... some patients show signs of communicating with deceased family members. Not hallucinations, mind you. Actual responses to information they couldn't possibly know.\"",
            next: "supernatural_medical_evidence"
        },

        mine_horror_details: {
            speaker: "Old Miner Joe",
            text: "\"We was digging the new shaft when we broke through. Found a whole chamber full of bones - arranged all proper-like, in patterns. The foreman made us keep digging, said it was just old Indian graves. But that night, the singing started. And the next morning... Bill Henderson walked right into that mine, talking to his dead wife like she was standing right there beside him.\"",
            next: "chamber_discovery"
        },

        supernatural_medical_evidence: {
            speaker: "Thomas",
            text: "\"That's not possible through conventional psychology. There's definitely a supernatural element affecting the brain's temporal lobe and auditory processing centers.\"",
            next: "chamber_discovery"
        },

        chamber_discovery: {
            speaker: "Morning Star",
            text: "\"A burial chamber with bones in patterns - that was a sacred site. The mining disturbed an ancient resting place, and the Bone Singer feeds on such desecration. The dead call to the living because their rest has been broken.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    this.speaker = "Elijah";
                    this.text = "\"Disturbing a burial ground... no wonder something evil has awakened. The dead deserve their rest, and when that's violated, consequences follow.\"";
                    if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                        this.speaker = "Thomas";
                        this.text = "\"A burial chamber with organized bone patterns - that suggests ceremonial significance. The mining likely disturbed something that was meant to stay undisturbed.\"";
                    }
                }
            },
            choices: [
                {
                    text: "Ask Morning Star how to perform a proper burial ceremony",
                    next: "burial_ceremony_discussion",
                    requires: function() { return getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star'); },
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_burial_ceremony_option', true); }
                },
                {
                    text: "Plan to evacuate the remaining survivors first",
                    next: "evacuation_plan",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_evacuation_priority', true); }
                },
                {
                    text: "Prepare to enter the mine and confront the Bone Singer",
                    next: "mine_entry_preparation",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_direct_mine_entry', true); }
                }
            ]
        },

        burial_ceremony_discussion: {
            speaker: "Morning Star",
            text: "\"To quiet the Bone Singer, we must first restore peace to the disturbed spirits. This requires gathering the scattered bones, performing the proper burial rites, and making an offering to appease the ancestor spirits. But it is dangerous work - the Bone Singer will try to stop us.\"",
            next: "ceremony_requirements"
        },

        evacuation_plan: {
            speaker: "Isabella Valdez",
            text: "\"Smart thinking. My people can provide safe passage for the survivors. Better to clear the area before dealing with supernatural threats.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_isabella')) {
                    this.speaker = "Maria";
                    this.text = "\"We should get these people to safety first. I know some safe routes away from here, places where they can shelter until this is over.\"";
                }
            },
            next: "evacuation_logistics"
        },

        mine_entry_preparation: {
            speaker: "Jacob",
            text: "\"Every minute we wait, that thing gets stronger. Let's gear up and go face it head-on. We've got the skills and the knowledge - time to use them.\"",
            next: "preparation_for_descent"
        },

        ceremony_requirements: {
            speaker: "Morning Star",
            text: "\"We will need sage, sweetgrass, and tobacco for the ceremony. I have some, but more would be better. Also, someone must stay above to maintain the ritual circle while others enter the mine to gather the disturbed bones.\"",
            next: "ritual_preparation"
        },

        evacuation_logistics: {
            speaker: "Doc Peterson",
            text: "\"Some of these people are in no condition to travel far. Mrs. Henderson hasn't spoken since her husband walked into the mine. And young Tommy's been having seizures every time the singing gets louder.\"",
            choices: [
                {
                    text: "Thomas stays to care for those too sick to move",
                    next: "thomas_stays_medical",
                    onChoose: function() { 
                        updateStoryVariable('flags.chapter8_flags.c8_thomas_stays_behind', true);
                        updateStoryVariable('relationships.thomas_medical_dedication', 
                            Math.min(3, getStoryVariable('relationships.thomas_medical_dedication') + 1));
                    }
                },
                {
                    text: "Move everyone regardless of condition - nowhere is safe",
                    next: "force_evacuation",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_forced_evacuation', true); }
                },
                {
                    text: "Split the group - some escort evacuees, others face the Bone Singer",
                    next: "split_group_plan",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_split_group', true); }
                }
            ]
        },

        preparation_for_descent: {
            speaker: "Thomas",
            text: "\"We'll need light sources, rope, and weapons that can function in confined spaces. Also, if this entity affects people psychologically, we should establish signals in case someone becomes compromised.\"",
            next: "preparation_for_descent"
        },

        ritual_preparation: {
            speaker: "Morning Star",
            text: "\"The ceremony must be performed at sunset, when the veil between worlds is thinnest. We have perhaps two hours to gather the materials and prepare the sacred space.\"",
            next: "ritual_preparation"
        },

        thomas_stays_medical: {
            speaker: "Thomas",
            text: "\"I'll stay and keep the survivors stable. If that Bone Singer is calling to people through psychological manipulation, medical intervention might help resist its influence.\"",
            next: "reduced_mine_team"
        },

        force_evacuation: {
            speaker: "Elijah",
            text: "\"Sometimes you have to save people despite themselves. We'll carry them if we have to.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "evacuation_complications"
        },

        split_group_plan: {
            speaker: "Maria",
            text: "\"Half of us escort the survivors to safety while the other half deals with the supernatural threat. We can't abandon these people, but we also can't let that thing spread to other towns.\"",
            next: "divide_responsibilities"
        },

        reduced_mine_team: {
            speaker: "Narrator",
            text: "With Thomas remaining to care for the survivors, your mine team consists of those willing and able to face the supernatural threat directly. The responsibility weighs heavily on those chosen to descend.",
            next: "mine_descent_begins"
        },

        evacuation_complications: {
            speaker: "Mrs. Henderson",
            text: "\"I ain't leaving! William's down there, and he's calling for me! I can hear him singing... he needs me...\" Several other survivors nod in agreement, their eyes distant and unfocused.",
            next: "handle_influenced_survivors"
        },

        divide_responsibilities: {
            speaker: "Narrator",
            text: "The group discusses who should escort the survivors and who should face the Bone Singer. The decisions made here will determine both the survivors' safety and the composition of the team entering the mine.",
            choices: [
                {
                    text: "Elijah and Jacob escort survivors, Maria stays for the mine",
                    requires: function() { return getStoryVariable('storyVariables.final_ending_type') !== 'Sacrifice'; },
                    next: "reduced_mine_team",
                    onChoose: function() { 
                        updateStoryVariable('flags.chapter8_flags.c8_elijah_jacob_escort', true);
                        updateStoryVariable('flags.chapter8_flags.c8_maria_mine_team', true);
                    }
                },
                {
                    text: "Maria and Isabella escort survivors, others handle the mine",
                    requires: function() { return getStoryVariable('flags.chapter8_flags.c8_group_composition_isabella'); },
                    next: "reduced_mine_team",
                    onChoose: function() { 
                        updateStoryVariable('flags.chapter8_flags.c8_maria_isabella_escort', true);
                    }
                },
                {
                    text: "Keep the core team together, find another solution",
                    next: "mine_entry_preparation",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_alternative_solution', true); }
                }
            ]
        },

        handle_influenced_survivors: {
            speaker: "Morning Star",
            text: "\"The Bone Singer's influence grows stronger on them. We must break its hold or they will walk into the mine willingly.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    this.speaker = "Thomas";
                    this.text = "\"This is mass psychological manipulation. We need to break the auditory pattern that's influencing them.\"";
                }
            },
            choices: [
                {
                    text: "Use Morning Star's protective rituals on the survivors",
                    requires: function() { return getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star'); },
                    next: "protective_ritual_survivors",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_survivors_protected', true); }
                },
                {
                    text: "Thomas sedates the most affected survivors",
                    next: "medical_intervention",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_medical_sedation', true); }
                },
                {
                    text: "Use physical restraint to prevent them from entering the mine",
                    next: "physical_restraint",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_physical_restraint', true); }
                }
            ]
        },

        mine_descent_begins: {
            speaker: "Narrator",
            text: "As your team approaches the mine entrance, the singing becomes almost overwhelming. The opening itself seems to pulse with a malevolent life, and strange symbols have been carved around its edges - symbols that weren't there when the miners first broke through.",
            next: "mine_entrance_examination"
        },

        protective_ritual_survivors: {
            speaker: "Morning Star",
            text: "\"I will create a protective circle around them. The sage smoke will cloud the Bone Singer's influence and give their spirits strength to resist the call.\"",
            next: "ritual_success"
        },

        medical_intervention: {
            speaker: "Thomas",
            text: "\"A mild sedative should disrupt whatever neurological manipulation is occurring. It's not ideal, but it's better than losing them to that thing.\"",
            next: "sedation_effects"
        },

        physical_restraint: {
            speaker: "Jacob",
            text: "\"I don't like it, but if they try to walk into that mine, we'll have to stop them by force. Better alive and angry than dead and gone.\"",
            next: "restraint_consequences"
        },

        mine_entrance_examination: {
            speaker: "Thomas",
            text: "\"These symbols... they're not Native American. They look almost... surgical. Like something was carved out rather than carved in.\"",
            next: "symbol_investigation"
        },

        ritual_success: {
            speaker: "Mrs. Henderson",
            text: "\"The... the singing's quieter now. I can think more clearly. William... William's been dead for weeks, hasn't he? That thing was using his voice...\"",
            next: "mine_entrance_examination"
        },

        sedation_effects: {
            speaker: "Doc Peterson",
            text: "\"The sedatives are working. They're calmer now, less responsive to the auditory stimulus. But Thomas, how long will this last?\"",
            next: "mine_entrance_examination"
        },

        restraint_consequences: {
            speaker: "Mrs. Henderson",
            text: "\"Let me go! William needs me! You don't understand - he's in pain down there! The singing... it hurts him...\" She struggles against the ropes, tears streaming down her face.",
            next: "mine_entrance_examination"
        },

        symbol_investigation: {
            speaker: "Morning Star",
            text: "\"These are not symbols of binding or warning. They are... invitations. The Bone Singer has marked this place as its own territory, claiming dominion over both the living and the dead.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    this.speaker = "Elijah";
                    this.text = "\"Whatever made these marks, it's claiming this place. This isn't just an awakened evil - it's actively expanding its influence.\"";
                    if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                        this.speaker = "Maria";
                    }
                }
            },
            next: "enter_the_mine"
        },

        enter_the_mine: {
            speaker: "Narrator",
            text: "Taking a collective breath, your team steps into the mine. The singing immediately becomes overwhelming, echoing off the walls with supernatural resonance. Ahead, the tunnel branches, and from each passage comes the sound of different voices - some familiar, some ancient, all calling you deeper into the darkness.",
            choices: [
                {
                    text: "Follow the main tunnel toward the burial chamber",
                    next: "main_tunnel_path",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_main_tunnel_chosen', true); }
                },
                {
                    text: "Investigate the side passages where the voices are strongest",
                    next: "side_passage_investigation",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_side_passages_chosen', true); }
                },
                {
                    text: "Try to resist the voices and find a path that leads to silence",
                    next: "resist_voices_path",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_resisted_voices', true); }
                }
            ]
        },

        main_tunnel_path: {
            speaker: "Narrator",
            text: "The main tunnel slopes downward into the heart of the mountain. As you descend, you begin to see them - figures walking ahead of you in the darkness, translucent and shimmering, but unmistakably human. They seem to be leading you toward the source of the singing.",
            next: "encounter_spirits"
        },

        side_passage_investigation: {
            speaker: "Jacob",
            text: "\"There's something in this passage... someone crying. It sounds like... like Sarah from the general store. But she ain't dead, is she?\"",
            next: "encounter_spirits"
        },

        resist_voices_path: {
            speaker: "Maria",
            text: "\"Don't listen to them. They're trying to lead us into a trap. Look for a passage where the singing is quieter - that's where the entity doesn't want us to go.\"",
            next: "encounter_spirits"
        },

        encounter_spirits: {
            speaker: "Narrator",
            text: "The spirits turn to face you, and you recognize some of them - miners who disappeared, townspeople who walked into the mine. But their eyes are hollow, and when they speak, it's the Bone Singer's voice that emerges.",
            next: "spirit_communication"
        },

        spirit_communication: {
            speaker: "Spirit of Bill Henderson",
            text: "\"Come deeper... join us in the singing... the chamber of bones needs tending... the old ones hunger for proper burial... you can help us rest...\"",
            choices: [
                {
                    text: "Try to communicate with the spirits directly",
                    next: "attempt_spirit_dialogue",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_attempted_spirit_dialogue', true); }
                },
                {
                    text: "Use Morning Star's protective rituals against the spirits",
                    requires: function() { return getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star'); },
                    next: "protective_ritual_survivors",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_used_ritual_protection', true); }
                },
                {
                    text: "Push past the spirits to reach the chamber",
                    next: "reach_burial_chamber",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_forced_passage', true); }
                }
            ]
        },

        attempt_spirit_dialogue: {
            speaker: "Elijah",
            text: "\"Bill, if that's really you, tell me - what does the Bone Singer want? How do we help you find peace?\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Thomas";
                }
            },
            next: "spirit_revelation"
        },

        spirit_revelation: {
            speaker: "Spirit of Bill Henderson",
            text: "\"The chamber... the bones were scattered when the miners broke through... the Bone Singer cannot rest while the burial is incomplete... but it grows stronger... feeding on our need for peace... soon it will be too powerful to bind again...\"",
            next: "urgent_time_limit"
        },

        urgent_time_limit: {
            speaker: "Morning Star",
            text: "\"The spirit speaks truth! If we don't complete the burial ceremony before the next dawn, the Bone Singer will have enough power to spread beyond this mine to other burial grounds across the territory.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    this.speaker = "Thomas";
                    this.text = "\"The spirit's right - this entity is feeding on the disturbance and growing stronger. We need to act quickly before it becomes too powerful to stop.\"";
                }
                updateStoryVariable('flags.chapter8_flags.c8_time_limit_revealed', true);
            },
            next: "reach_burial_chamber"
        },

        reach_burial_chamber: {
            speaker: "Narrator",
            text: "Guided by the spirits, you reach the heart of the mine - a vast natural chamber that has been carved open by mining equipment. Ancient bone arrangements lie scattered across the floor, and in the center sits a pulsing mass of shadow and sound - the Bone Singer itself.",
            next: "bone_singer_encounter"
        },

        bone_singer_encounter: {
            speaker: "Narrator",
            text: "The Bone Singer is not a creature in any conventional sense - it's a writhing confluence of shadows, bones, and pure sound that seems to exist in multiple dimensions simultaneously. Its song fills your minds with the voices of every person who has ever died in these mountains, demanding their proper burial and eternal rest.",
            next: "bone_singer_communication"
        },

        bone_singer_communication: {
            speaker: "The Bone Singer",
            text: "\"LIVING ONES... YOU DISTURB THE SACRED DEAD... THE BONES MUST BE ARRANGED... THE PATTERNS MUST BE COMPLETE... HELP US... OR JOIN US IN ETERNAL SONG...\"",
            choices: [
                {
                    text: "Offer to help restore the proper burial arrangements",
                    next: "offer_burial_help",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_offered_burial_help', true); }
                },
                {
                    text: "Attempt to bind the Bone Singer with Morning Star's rituals",
                    requires: function() { return getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star'); },
                    next: "burial_sacrifice_required",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_attempted_binding', true); }
                },
                {
                    text: "Challenge the Bone Singer's right to claim the living",
                    next: "burial_sacrifice_required",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_challenged_bone_singer', true); }
                }
            ]
        },

        offer_burial_help: {
            speaker: "Elijah",
            text: "\"We understand your pain. The dead deserve proper rest. Show us how to arrange the bones correctly, and we'll help restore the sacred burial.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "bone_singer_accepts_help"
        },

        bone_singer_accepts_help: {
            speaker: "The Bone Singer",
            text: "\"YES... ARRANGE THE BONES IN THE ANCIENT PATTERNS... BUT BEWARE... THE LIVING WHO TOUCH THE SACRED DEAD RISK JOINING THEM... ONE OF YOU MUST REMAIN TO TEND THE BURIAL FOREVER...\"",
            next: "burial_sacrifice_required"
        },

        burial_sacrifice_required: {
            speaker: "Morning Star",
            text: "\"The entity speaks of an ancient law - one guardian must remain to tend the sacred dead. But there may be another way... a living guardian who volunteers to stay temporarily while we complete a stronger binding ritual.\"",
            onEnter: function() {
                if (!getStoryVariable('flags.chapter8_flags.c8_group_composition_morning_star')) {
                    this.speaker = "Thomas";
                    this.text = "\"It's demanding a permanent guardian. But we might be able to find a way to fulfill the requirement without losing someone forever.\"";
                }
            },
            choices: [
                {
                    text: "Volunteer to stay as the burial guardian",
                    next: "volunteer_as_guardian",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_volunteered_as_guardian', true); }
                },
                {
                    text: "Ask if a symbolic guardian would be acceptable",
                    next: "guardian_acceptance",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_negotiated_guardian', true); }
                },
                {
                    text: "Refuse the terms and seek another solution",
                    next: "burial_sacrifice_required",
                    onChoose: function() { updateStoryVariable('flags.chapter8_flags.c8_refused_guardian_terms', true); }
                }
            ]
        },

        volunteer_as_guardian: {
            speaker: "Elijah",
            text: "\"If staying to tend the sacred dead brings peace to these spirits, then I accept. But my friends go free, and no other living souls are claimed.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Thomas";
                    this.text = "\"If someone must stay to guard this place, I volunteer. I've spent too much of my life running from responsibility. This is where I make my stand.\"";
                }
            },
            next: "guardian_acceptance"
        },

        guardian_acceptance: {
            speaker: "The Bone Singer",
            text: "\"THE LIVING GUARDIAN ACCEPTS... ARRANGE THE BONES... COMPLETE THE SACRED PATTERNS... AND THE DEAD WILL FIND PEACE... THE SINGING WILL QUIET... THE GUARDIAN WILL BECOME THE BRIDGE BETWEEN LIFE AND DEATH...\"",
            next: "burial_arrangement_begins"
        },

        burial_arrangement_begins: {
            speaker: "Narrator",
            text: "Working together, your team begins the solemn task of arranging the scattered bones according to the ancient patterns the Bone Singer shows you. It's delicate, sacred work that requires both reverence and precision. As you work, the entity's song gradually becomes less frantic and more peaceful.",
            next: "chapter_climax"
        },

        chapter_climax: {
            speaker: "Narrator",
            text: "As the final bone is placed in its proper position, a profound silence falls over the chamber. The Bone Singer's form begins to fade, becoming more translucent and peaceful. The spirits of the dead miners appear one final time, nodding their gratitude before dissolving into gentle light. The supernatural threat to Devil's Backbone is ended, but the cost and consequences of this victory will echo through the choices yet to come.",
            onEnter: function() {
                updateStoryVariable('flags.chapter8_flags.c8_bone_singer_pacified', true);
                updateStoryVariable('flags.chapter8_flags.c8_chapter_complete', true);
                
                // Set up variables for Chapter 9 based on choices made
                let guardianVolunteered = getStoryVariable('flags.chapter8_flags.c8_volunteered_as_guardian');
                let groupSplit = getStoryVariable('flags.chapter8_flags.c8_split_group');
                let cartelAlliance = getStoryVariable('flags.chapter8_flags.c8_cartel_alliance_active');
                
                if (guardianVolunteered) {
                    updateStoryVariable('flags.chapter9_opening.c9_guardian_sacrifice', true);
                }
                if (groupSplit) {
                    updateStoryVariable('flags.chapter9_opening.c9_team_separated', true);
                }
                if (cartelAlliance) {
                    updateStoryVariable('flags.chapter9_opening.c9_cartel_relationship', true);
                }
            },
            choices: [
                {
                    text: "Continue to Chapter 9",
                    next: null,
                    nextChapter: "chapter9",
                    onChoose: function() { updateStoryVariable('currentChapter', 'Chapter 9'); }
                }
            ]
        }
    }
};