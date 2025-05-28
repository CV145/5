// Chapter 7: Echoes of the Past
storyData.chapter7 = {
    name: "Chapter 7",
    title: "Echoes of the Past",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "Two weeks have passed since the council meeting in Perdition. The fragile peace holds, but troubling news arrives with each passing rider. Reports of strange happenings in neighboring towns filter in: livestock found drained of blood in Copper Creek, an entire family disappeared from their homestead near Silver Ridge, and whispers of 'walking shadows' from the mining camp at Devil's Backbone.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 7');
            },
            next: "messenger_arrives"
        },
        
        messenger_arrives: {
            speaker: "Narrator",
            text: "A dust-covered rider approaches Perdition at sunset, his horse lathered with sweat and fear. He dismounts in the town square, looking around nervously before calling out in a voice that carries the weight of desperate urgency.",
            next: "messenger_speaks"
        },
        
        messenger_speaks: {
            speaker: "Messenger",
            text: "\"Anyone in charge here? I bring word from Marshal Davidson in Silver Ridge. Three towns have gone silent in the past week. Copper Creek, Devil's Backbone, and now Willow Bend. Last anyone heard, they were dealing with... unnatural disturbances. The Marshal's forming a posse, but he needs folks who've dealt with this kind of trouble before.\"",
            choices: [
                {
                    text: "Step forward immediately to help",
                    next: "volunteer_immediately",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_volunteered_immediately', true); }
                },
                {
                    text: "Ask for more details about the disturbances",
                    next: "ask_for_details",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_asked_for_details', true); }
                },
                {
                    text: "Consult with your companions first",
                    next: "consult_companions",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_consulted_companions', true); }
                }
            ]
        },
        
        volunteer_immediately: {
            speaker: "Elijah",
            text: "\"We've faced the darkness that plagues these lands. If other towns are suffering, we have a duty to help them.\" Your quick response earns nods of approval from the gathered townsfolk.",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "\"We've faced the darkness that plagues these lands. If other towns are suffering, we have a duty to help them.\" Maria's firm response earns nods from the gathered townsfolk.";
                }
            },
            next: "messenger_relief"
        },
        
        ask_for_details: {
            speaker: "Thomas",
            text: "\"Before we commit to anything, we need to understand what we're dealing with. What exactly have these towns reported?\"",
            next: "messenger_details"
        },
        
        consult_companions: {
            speaker: "Narrator",
            text: "You gather your companions aside for a quick conference. The messenger waits anxiously while you discuss the implications of these new threats.",
            next: "companion_discussion"
        },
        
        messenger_relief: {
            speaker: "Messenger",
            text: "\"Thank God. The Marshal said if anyone in Perdition was still alive after what happened here, they'd know how to fight these... things. He's waiting at the crossroads five miles north of Silver Ridge. Says to bring whatever worked here.\"",
            next: "preparation_phase"
        },
        
        messenger_details: {
            speaker: "Messenger",
            text: "\"Copper Creek reported animals and people being found... drained. Not of blood, mind you, but something else. Like they just gave up living. Devil's Backbone had their mine collapse, but folks swear they heard singing coming from the cave-in. And Willow Bend... last telegram said something about the dead walking the streets at noon.\"",
            next: "ominous_pattern"
        },
        
        companion_discussion: {
            speaker: "Maria",
            text: "\"These sounds like the same kind of supernatural threats we faced here. If we don't help stop them, they might spread. But we should be careful - we don't know what we're walking into.\"",
            next: "jacob_input"
        },
        
        jacob_input: {
            speaker: "Jacob",
            text: "\"My family might have men near some of those areas. Samuel could provide information, or... could be a problem if we're seen as interfering with gang operations.\"",
            next: "thomas_concern"
        },
        
        thomas_concern: {
            speaker: "Thomas",
            text: "\"I'm worried about leaving Perdition undefended. Our peace here is still fragile. But if these threats are spreading...\"",
            next: "group_decision"
        },
        
        group_decision: {
            speaker: "Narrator",
            text: "Your group weighs the options. The messenger shifts nervously, aware that time is of the essence.",
            choices: [
                {
                    text: "Agree to help immediately",
                    next: "volunteer_after_discussion",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_agreed_to_help', true); }
                },
                {
                    text: "Offer limited assistance",
                    next: "limited_help_offer",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_offered_limited_help', true); }
                },
                {
                    text: "Ask for time to prepare Perdition's defenses first",
                    next: "request_preparation_time",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_requested_prep_time', true); }
                }
            ]
        },
        
        ominous_pattern: {
            speaker: "Thomas",
            text: "\"These symptoms... they're different from what we faced, but related. It's as if the Hungry Dark was just one of several... entities.\"",
            next: "messenger_urgent_plea"
        },
        
        messenger_urgent_plea: {
            speaker: "Messenger",
            text: "\"Look, I don't pretend to understand what's happening. But Marshal Davidson says if we don't stop this spread, every town from here to the territorial capital could be lost. Will you help or not?\"",
            choices: [
                {
                    text: "Yes, we'll help",
                    next: "volunteer_after_discussion",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_agreed_to_help', true); }
                },
                {
                    text: "We need guarantees about our town's safety",
                    next: "demand_guarantees",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_demanded_guarantees', true); }
                }
            ]
        },
        
        volunteer_after_discussion: {
            speaker: "Elijah",
            text: "\"We've seen what happens when evil is left unchecked. We'll ride with the Marshal.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "\"We've seen what happens when evil is left unchecked. We'll ride with the Marshal.\"";
                }
            },
            next: "preparation_phase"
        },
        
        limited_help_offer: {
            speaker: "Maria",
            text: "\"We can spare one or two of us to advise, but we can't abandon Perdition completely. Our knowledge might be more valuable than our guns anyway.\"",
            next: "messenger_considers"
        },
        
        request_preparation_time: {
            speaker: "Jacob",
            text: "\"Give us one day to shore up Perdition's defenses and gather supplies. These supernatural threats might target towns left vulnerable.\"",
            next: "messenger_time_pressure"
        },
        
        demand_guarantees: {
            speaker: "Thomas",
            text: "\"If we leave Perdition to help other towns, what assurance do we have that it won't be attacked while we're gone?\"",
            next: "messenger_offers_protection"
        },
        
        messenger_considers: {
            speaker: "Messenger",
            text: "\"The Marshal said he'd take whatever help he could get. Even advice from folks who've faced this before could save lives.\"",
            next: "choose_who_goes"
        },
        
        messenger_time_pressure: {
            speaker: "Messenger",
            text: "\"Every hour we delay, more folks might die. But... I reckon the Marshal would understand preparing for a fight. One day, then?\"",
            next: "preparation_phase"
        },
        
        messenger_offers_protection: {
            speaker: "Messenger",
            text: "\"Marshal's got a deputy he can spare for Perdition. Good man, knows his business. Plus, word is these things are moving west - Perdition might be safer for now.\"",
            next: "consider_marshal_offer"
        },
        
        choose_who_goes: {
            speaker: "Narrator",
            text: "You need to decide who will go to help the Marshal and who will stay to protect Perdition.",
            choices: [
                {
                    text: "Send Maria and Thomas (keep Elijah and Jacob)",
                    next: "maria_thomas_go",
                    onChoose: function() { 
                        updateStoryVariable('flags.chapter7_flags.c7_maria_goes', true);
                        updateStoryVariable('flags.chapter7_flags.c7_thomas_goes', true);
                    }
                },
                {
                    text: "Send Elijah and Jacob (keep Maria and Thomas)",
                    next: "elijah_jacob_go",
                    requires: function() { return getStoryVariable('storyVariables.final_ending_type') !== 'Sacrifice'; },
                    onChoose: function() { 
                        updateStoryVariable('flags.chapter7_flags.c7_elijah_goes', true);
                        updateStoryVariable('flags.chapter7_flags.c7_jacob_goes', true);
                    }
                },
                {
                    text: "Everyone goes together",
                    next: "everyone_goes_together",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_everyone_goes', true); }
                }
            ]
        },
        
        consider_marshal_offer: {
            speaker: "Narrator",
            text: "The Marshal's offer of protection for Perdition is reassuring, but you've learned to be cautious about trusting outsiders completely.",
            choices: [
                {
                    text: "Accept the offer and go help",
                    next: "accept_marshal_protection",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_accepted_marshal_protection', true); }
                },
                {
                    text: "Politely decline but offer advice instead",
                    next: "decline_but_advise",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_declined_but_advised', true); }
                }
            ]
        },
        
        maria_thomas_go: {
            speaker: "Narrator",
            text: "You decide that Maria and Thomas should go with the Marshal - Maria's experience with dangerous situations and Thomas's medical expertise could prove invaluable. Elijah and Jacob will remain to protect Perdition and maintain the fragile peace.",
            next: "preparation_phase"
        },
        
        elijah_jacob_go: {
            speaker: "Narrator",
            text: "Elijah and Jacob volunteer to ride with the Marshal. Elijah's spiritual strength and Jacob's knowledge of the region could be crucial, while Maria and Thomas stay to coordinate Perdition's defenses and handle any cartel complications.",
            next: "preparation_phase"
        },
        
        everyone_goes_together: {
            speaker: "Narrator",
            text: "The group decides they're stronger together. Whatever supernatural threats await, you'll face them as a united front. Perdition will have to rely on its own people and the Marshal's promised deputy for protection.",
            next: "preparation_phase"
        },
        
        accept_marshal_protection: {
            speaker: "Elijah",
            text: "\"We accept your offer, Marshal. Perdition will be safer with your deputy here, and you'll have our full support against these supernatural threats.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "preparation_phase"
        },
        
        decline_but_advise: {
            speaker: "Thomas",
            text: "\"We appreciate the offer, but Perdition is our responsibility. However, we can share what we've learned about fighting these supernatural entities.\"",
            next: "share_knowledge"
        },
        
        share_knowledge: {
            speaker: "Narrator",
            text: "You spend time with the messenger, explaining the importance of unity, the power of faith and hope against despair, and the need for both spiritual and physical preparation when facing supernatural threats.",
            next: "messenger_grateful_departure"
        },
        
        messenger_grateful_departure: {
            speaker: "Messenger",
            text: "\"This knowledge could save lives. The Marshal will appreciate any insight into fighting these... things. May God watch over Perdition in your absence.\"",
            next: "preparation_phase"
        },
        
        preparation_phase: {
            speaker: "Narrator",
            text: "The next morning, you prepare for the journey. As you gather supplies and weapons, an unexpected visitor arrives - an elderly Native American woman riding a painted horse, her presence commanding immediate attention from the townsfolk.",
            next: "native_woman_arrives"
        },
        
        native_woman_arrives: {
            speaker: "Narrator",
            text: "The woman dismounts with the fluid grace of someone who has lived most of her life on horseback. Her weathered face carries the wisdom of decades, and her dark eyes seem to see more than they should. She approaches your group directly, as if she knew exactly who to find.",
            next: "native_woman_speaks"
        },
        
        native_woman_speaks: {
            speaker: "Morning Star",
            text: "\"You are the ones who faced the Hungry Shadow in this place. I felt its binding break, then reform. I am Morning Star of the Kiowa. My grandmother's grandmother spoke of the Five Terrors that sleep beneath the earth. One has stirred. The others are waking.\"",
            next: "morning_star_explanation"
        },
        
        morning_star_explanation: {
            speaker: "Morning Star",
            text: "\"What you call the 'Hungry Dark' was only the first. The Bone Singer calls the dead in the mining places. The Dream Walker feeds on hope itself. The Iron Devourer turns metal to rust and flesh to dust. And the Storm Crow brings madness on the wind. All were bound by the old pacts. All are stirring now.\"",
            next: "group_reaction_morning_star"
        },
        
        group_reaction_morning_star: {
            speaker: "Narrator",
            text: "Your group exchanges worried glances. The messenger, who had been preparing to leave, stops to listen with growing alarm.",
            choices: [
                {
                    text: "Ask Morning Star to join your mission",
                    next: "invite_morning_star",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_invited_morning_star', true); }
                },
                {
                    text: "Ask for more information about stopping these entities",
                    next: "ask_about_binding",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_asked_about_binding', true); }
                },
                {
                    text: "Express skepticism about the supernatural explanation",
                    next: "express_skepticism",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_expressed_skepticism', true); }
                }
            ]
        },
        
        invite_morning_star: {
            speaker: "Elijah",
            text: "\"If you know how to fight these entities, we could use your help. Lives are at stake.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "morning_star_considers"
        },
        
        ask_about_binding: {
            speaker: "Thomas",
            text: "\"These bindings you mentioned - how were they created? And more importantly, how do we restore them?\"",
            next: "morning_star_ritual_knowledge"
        },
        
        express_skepticism: {
            speaker: "Jacob",
            text: "\"With respect, ma'am, we've got real problems to deal with. Marshal's waiting, towns are in danger. Can we focus on practical solutions?\"",
            next: "morning_star_proves_knowledge"
        },
        
        morning_star_considers: {
            speaker: "Morning Star",
            text: "\"I have walked between the worlds for many years, seeking signs of the Five Terrors' stirring. Your battle with the Hungry Shadow has accelerated their awakening. Yes, I will help, but know that this path leads to great danger.\"",
            next: "morning_star_joins"
        },
        
        morning_star_ritual_knowledge: {
            speaker: "Morning Star",
            text: "\"The old bindings required five sacred sites, one for each Terror. But they were made in a time when the tribes worked together and the white settlers respected our warnings. Now... we must find new ways, or adapt the old ceremonies to a changed world.\"",
            next: "practical_guidance"
        },
        
        morning_star_proves_knowledge: {
            speaker: "Morning Star",
            text: "\"The mining town you call Devil's Backbone - the Bone Singer has awakened there. Its song calls to the dead in the mine shafts, drawing them up to walk among the living. The collapse was not accident, but invitation.\" She fixes Jacob with an intense stare. \"Is this practical enough?\"",
            next: "jacob_convinced"
        },
        
        jacob_convinced: {
            speaker: "Jacob",
            text: "\"That... that matches what the messenger described. How could you know that?\"",
            next: "morning_star_joins"
        },
        
        morning_star_joins: {
            speaker: "Morning Star",
            text: "\"I will ride with you to face the Bone Singer. But first, you must understand - these entities corrupt not just flesh and spirit, but the very land itself. Each one requires different medicine, different sacrifice.\"",
            next: "maria_complication_begins"
        },
        
        practical_guidance: {
            speaker: "Morning Star",
            text: "\"For now, we focus on the immediate threat. The Bone Singer must be faced with ceremonies of life and renewal. But beware - it grows stronger with each soul it claims.\"",
            next: "maria_complication_begins"
        },
        
        maria_complication_begins: {
            speaker: "Narrator",
            text: "As your group prepares to depart with Morning Star, a new rider approaches Perdition from the south. Maria's face goes pale as she recognizes the approaching figure - a woman in black, riding with the unmistakable confidence of cartel hierarchy.",
            next: "cartel_representative_arrives"
        },
        
        cartel_representative_arrives: {
            speaker: "Isabella Valdez",
            text: "\"María Santos. You have been very difficult to find.\" The woman dismounts slowly, her hand resting casually on her pistol. \"I am Isabella Valdez, cousin to the late Carlos. We have unfinished business to discuss.\"",
            next: "maria_tension"
        },
        
        maria_tension: {
            speaker: "Maria",
            text: "\"Isabella. I thought the family had accepted that I was... retired from their affairs.\" Maria's voice is carefully controlled, but you can see the tension in her shoulders.",
            next: "isabella_explanation"
        },
        
        isabella_explanation: {
            speaker: "Isabella Valdez",
            text: "\"Retired? You testified against us, María. Cost us men, routes, respect. But recent events... they have changed the family's perspective. We face threats that bullets cannot kill. Perhaps it is time for old grudges to be set aside.\"",
            next: "cartel_proposition"
        },
        
        cartel_proposition: {
            speaker: "Isabella Valdez",
            text: "\"The family extends an offer: your knowledge of these supernatural threats, in exchange for full amnesty. Help us protect our territory from these... entities... and all past grievances are forgotten.\"",
            choices: [
                {
                    text: "Support Maria's decision, whatever it is",
                    next: "support_maria_choice",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_supported_maria', true); }
                },
                {
                    text: "Advise Maria to reject the cartel offer",
                    next: "advise_rejection",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_advised_rejection', true); }
                },
                {
                    text: "Suggest negotiating better terms",
                    next: "suggest_negotiation",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_suggested_negotiation', true); }
                }
            ]
        },
        
        support_maria_choice: {
            speaker: "Elijah",
            text: "\"Whatever you decide, Maria, we'll stand by you. You've proven yourself to us.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Thomas";
                }
            },
            next: "maria_considers_offer"
        },
        
        advise_rejection: {
            speaker: "Thomas",
            text: "\"Maria, you've built a new life here. Don't let them drag you back into that world.\"",
            next: "maria_considers_rejection"
        },
        
        suggest_negotiation: {
            speaker: "Jacob",
            text: "\"Maybe there's a middle ground. Information sharing without... full reinvolvement?\"",
            next: "maria_considers_negotiation"
        },
        
        maria_considers_offer: {
            speaker: "Maria",
            text: "\"Isabella, I appreciate the family's offer, but I've found something more valuable than amnesty here. However... if innocent people are dying to supernatural threats, perhaps we can work together without me rejoining the organization.\"",
            next: "isabella_counter_offer"
        },
        
        maria_considers_rejection: {
            speaker: "Maria",
            text: "\"You're right, Thomas. Isabella, I'm honored by the family's offer, but I've chosen a different path. I'll help fight these supernatural threats as part of this community, not as part of the cartel.\"",
            next: "isabella_reaction_rejection"
        },
        
        maria_considers_negotiation: {
            speaker: "Maria",
            text: "\"Perhaps we can find terms that work for everyone. I have no desire to rejoin the cartel, but if sharing knowledge saves lives...\"",
            next: "negotiation_begins"
        },
        
        isabella_counter_offer: {
            speaker: "Isabella Valdez",
            text: "\"Independent cooperation? The family prefers... clearer arrangements. But given the circumstances, we might consider a temporary alliance. Information shared freely, but no formal ties.\"",
            next: "maria_final_decision"
        },
        
        isabella_reaction_rejection: {
            speaker: "Isabella Valdez",
            text: "\"I see. The family will be... disappointed. But perhaps the supernatural threats will change your mind. When these entities reach our territory, you may find you need allies with resources.\"",
            next: "threatening_departure"
        },
        
        negotiation_begins: {
            speaker: "Isabella Valdez",
            text: "\"What terms do you propose? The family needs reliable intelligence about these threats, and your new... friends... might benefit from our resources.\"",
            next: "negotiate_terms"
        },
        
        negotiate_terms: {
            speaker: "Narrator",
            text: "The negotiation is tense but productive. A temporary alliance is discussed - sharing information about supernatural threats while maintaining independence.",
            choices: [
                {
                    text: "Agree to information sharing only",
                    next: "info_sharing_agreement",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_cartel_info_sharing', true); }
                },
                {
                    text: "Request cartel resources for the mission",
                    next: "request_cartel_resources",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_requested_cartel_resources', true); }
                },
                {
                    text: "Offer to include Isabella in the mission",
                    next: "invite_isabella",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_invited_isabella', true); }
                }
            ]
        },
        
        maria_final_decision: {
            speaker: "Maria",
            text: "\"Temporary alliance it is. But I make my own choices about how to use any information shared.\"",
            next: "isabella_accepts"
        },
        
        threatening_departure: {
            speaker: "Isabella Valdez",
            text: "\"Very well. But María... the supernatural is not the only danger in these lands. Remember that.\" She mounts her horse with fluid grace. \"Perhaps we will meet again under different circumstances.\"",
            next: "cartel_tension_remains"
        },
        
        info_sharing_agreement: {
            speaker: "Isabella Valdez",
            text: "\"Acceptable. The family will provide what intelligence we have about supernatural activities in our territory. In return, you share what you learn about fighting these entities.\"",
            next: "temporary_alliance_formed"
        },
        
        request_cartel_resources: {
            speaker: "Maria",
            text: "\"If we're going to fight these things, we'll need supplies, weapons, maybe even men. Can the family provide material support?\"",
            next: "isabella_considers_resources"
        },
        
        invite_isabella: {
            speaker: "Elijah",
            text: "\"Isabella, you're welcome to ride with us. Face these threats firsthand and see what we're all dealing with.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "isabella_considers_joining"
        },
        
        isabella_accepts: {
            speaker: "Isabella Valdez",
            text: "\"Very well. I will remain in the area to coordinate this... partnership. But I want regular reports on these supernatural threats.\"",
            next: "temporary_alliance_formed"
        },
        
        cartel_tension_remains: {
            speaker: "Narrator",
            text: "Isabella's departure leaves an air of tension. The cartel's interest in the supernatural threats adds another layer of complexity to an already dangerous situation.",
            next: "departure_preparation"
        },
        
        isabella_considers_resources: {
            speaker: "Isabella Valdez",
            text: "\"The family has interests to protect. If these entities threaten our operations... yes, we can provide weapons, ammunition, even safe houses along certain routes.\"",
            next: "resource_agreement"
        },
        
        isabella_considers_joining: {
            speaker: "Isabella Valdez",
            text: "\"Ride with you? I am not some hired gun. But... if it serves the family's interests to observe these threats firsthand...\" She pauses, considering. \"Very well. I will accompany you to this Devil's Backbone place.\"",
            next: "isabella_joins_mission"
        },
        
        temporary_alliance_formed: {
            speaker: "Narrator",
            text: "A fragile alliance between your group and the Valdez cartel is established. The arrangement is tense but potentially beneficial for facing the supernatural threats.",
            next: "departure_preparation"
        },
        
        resource_agreement: {
            speaker: "Maria",
            text: "\"Thank you, Isabella. This cooperation could save many lives.\"",
            next: "temporary_alliance_formed"
        },
        
        isabella_joins_mission: {
            speaker: "Isabella Valdez",
            text: "\"But I make it clear - I am here as an observer and representative of family interests. I will not take orders from anyone but María, and only because we have history.\"",
            next: "expanded_group_dynamics"
        },
        
        expanded_group_dynamics: {
            speaker: "Narrator",
            text: "Your group has grown considerably. Morning Star brings knowledge of the supernatural threats, while Isabella represents powerful resources but also complicated loyalties. The dynamic has shifted significantly.",
            next: "departure_preparation"
        },
        
        departure_preparation: {
            speaker: "Narrator",
            text: "With alliances formed and knowledge shared, you prepare to leave Perdition for Devil's Backbone. The messenger has been waiting patiently, but his nervousness has only increased as he's overheard talk of ancient evils and supernatural entities.",
            next: "final_preparations"
        },
        
        final_preparations: {
            speaker: "Morning Star",
            text: "\"Before we ride to face the Bone Singer, you must understand - this entity draws power from disturbed graves and violent deaths. The mining has awakened many spirits. We will need more than bullets.\"",
            choices: [
                {
                    text: "Ask Morning Star to prepare ritual protection",
                    next: "ritual_protection",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_ritual_protection', true); }
                },
                {
                    text: "Focus on practical preparations - weapons and supplies",
                    next: "practical_preparations",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_practical_preparations', true); }
                },
                {
                    text: "Try to balance both spiritual and physical preparation",
                    next: "balanced_preparation",
                    onChoose: function() { updateStoryVariable('flags.chapter7_flags.c7_balanced_preparation', true); }
                }
            ]
        },
        
        ritual_protection: {
            speaker: "Morning Star",
            text: "\"Wise. I will prepare sacred sage and protection charms for each of you. The Bone Singer cannot touch those who carry the blessing of life over death.\" She begins gathering materials from her horse's saddlebags.",
            next: "group_departs"
        },
        
        practical_preparations: {
            speaker: "Thomas",
            text: "\"Good thinking. I'll gather medical supplies and extra ammunition. Whatever this thing is, being prepared for a fight can't hurt.\"",
            next: "group_departs"
        },
        
        balanced_preparation: {
            speaker: "Elijah",
            text: "\"We should prepare for both kinds of battle - spiritual and physical. Morning Star, please prepare what protections you can. Thomas, make sure we have medical supplies and weapons ready.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "comprehensive_preparation"
        },
        
        comprehensive_preparation: {
            speaker: "Narrator",
            text: "The next hour is spent in careful preparation. Morning Star creates protective charms while Thomas organizes medical supplies and weapons. The group's different expertise blends together effectively.",
            next: "group_departs"
        },
        
        group_departs: {
            speaker: "Narrator",
            text: "As the sun reaches its zenith, your expanded group rides out of Perdition toward Devil's Backbone. Behind you, the town watches with a mixture of hope and fear. Ahead lies the unknown danger of the Bone Singer and whatever horrors it has awakened in the mining tunnels.",
            next: "chapter_transition"
        },
        
        chapter_transition: {
            speaker: "Narrator",
            text: "The ride to Devil's Backbone will take two days, giving your group time to learn more about each other's capabilities and the nature of the threat you face. But even now, on the clear morning air, you can hear something that chills your blood - a faint, distant singing that seems to come from beneath the earth itself.",
            next: "chapter_end"
        },
        
        chapter_end: {
            speaker: "Narrator",
            text: "The revelation that the Hungry Dark was merely the first of five ancient evils changes everything. With new allies and old enemies at your side, you ride toward Devil's Backbone and the supernatural horror known as the Bone Singer. The scope of the threat has expanded beyond anything you imagined, and the fate of multiple towns now rests in your hands.",
            choices: [
                {
                    text: "Continue to Chapter 8",
                    next: null,
                    nextChapter: "chapter8",
                    onChoose: function() { updateStoryVariable('currentChapter', 'Chapter 8'); }
                }
            ]
        }
    }
}; 