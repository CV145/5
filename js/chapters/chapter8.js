// Chapter 8: Blood Moon Rising
storyData.chapter8 = {
    name: "Chapter 8",
    title: "Blood Moon Rising",
    scenes: {
        // Scene 1: Clayton - Rivers Gang Arrival
        start: {
            speaker: "Narrator",
            text: "Forty miles east of Perdition, the dusty town of Clayton buzzed with an unwelcome energy. The Rivers Gang had arrived, Silas Rivers at their head, his presence casting a long, dark shadow. They were lean, hard men, their eyes holding the glint of recent violence and future plunder.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 8');
            },
            next: "silas_plans_next_move"
        },

        // Scene 2: Silas Rivers Plans
        silas_plans_next_move: {
            speaker: "Silas Rivers",
            text: "'Pike's silver shipment outta Perdition... it's ripe for the taking. But that town's got a new stink about it. Ghosts and do-gooders.' Silas spat. 'Samuel, you're youngest, least known. Ride to Perdition. Scout it. Pike's routines, defenses, weaknesses.'",
            next: "samuel_rivers_intro"
        },

        // Scene 3: Samuel Rivers
        samuel_rivers_intro: {
            speaker: "Narrator",
            text: "Samuel Rivers, barely seventeen, looked like a younger, less haunted version of his brother Jacob. He nodded, fear and fealty warring in his eyes. Defying his father was unthinkable.",
            next: "samuel_accepts_mission"
        },

        // Scene 4: Samuel Accepts
        samuel_accepts_mission: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "'Yes, Pa. I'll find out what you need.'",
            next: "silas_warning_to_samuel"
        },

        // Scene 5: Silas's Warning
        silas_warning_to_samuel: {
            speaker: "Silas Rivers",
            text: "'And if you see your traitor brother, Jacob... you let me know. He chose strangers over blood. That ain't somethin' I forgive easy.'",
            next: "samuel_departs_for_perdition"
        },

        // Scene 6: Samuel Departs
        samuel_departs_for_perdition: {
            speaker: "Narrator",
            text: "Samuel rode out the next dawn, a knot of apprehension in his stomach. He loved his brother Jacob, despite everything. But he feared his father more.",
            next: "samuel_approaching_perdition"
        },

        // Scene 7: Samuel Approaching Perdition
        samuel_approaching_perdition: {
            speaker: "Narrator",
            text: "Two days later, Samuel crested the rise overlooking Perdition. It looked just as broken and dusty as the stories claimed.",
            next: "samuel_scouting_town_discreetly"
        },

        // Scene 8: Samuel Scouts Perdition
        samuel_scouting_town_discreetly: {
            speaker: "Narrator",
            text: "He spent a day observing from the outskirts, then ventured in, posing as a drifter looking for odd jobs. He noted Pike's enforcers, the new doctor's shingle, the quiet schoolteacher, and the preacher often seen near the undertaker's.",
            next: "samuel_spots_jacob_at_mine"
        },

        // Scene 9: Samuel Spots Jacob
        samuel_spots_jacob_at_mine: {
            speaker: "Narrator",
            text: "Then, near Pike's mine, he saw him. Covered in dust, swinging a pickaxe with a grim determination that Samuel had never seen in him before. Jacob. Alive.",
            choices: [
                {
                    text: "Samuel's internal joy at seeing Jacob.",
                    next: "samuel_joy_seeing_jacob"
                },
                {
                    text: "Samuel's fear of his father's reaction.",
                    next: "samuel_fear_father_reaction"
                }
            ]
        },

        // Scene 10: Samuel's Joy (Optional)
        samuel_joy_seeing_jacob: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "(Internal) 'Jacob! He made it! He's alive!' A surge of relief, quickly followed by anxiety. What would his father do?",
            next: "samuel_plans_to_contact_jacob"
        },

        // Scene 11: Samuel's Fear (Optional)
        samuel_fear_father_reaction: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "(Internal) 'Pa said... if I saw him... Oh, Jacob, what am I gonna do? He looks so tired.'",
            next: "samuel_plans_to_contact_jacob"
        },

        // Scene 12: Samuel Plans Contact
        samuel_plans_to_contact_jacob: {
            speaker: "Narrator",
            text: "Samuel knew he had to talk to Jacob, warn him. He scribbled a hasty note, using a code they'd shared as boys, and paid a scruffy urchin a nickel to deliver it to 'the new miner named Jacob at Pike's outfit'.",
            next: "jacob_receives_note"
        },

        // Scene 13: Jacob Receives the Note
        jacob_receives_note: {
            speaker: "Narrator",
            text: "Jacob, exhausted after a long shift, was handed the crumpled note. His heart leaped into his throat as he recognized Samuel's scrawl and their childhood code.",
            next: "note_contents_meeting_place"
        },

        // Scene 14: Note Contents
        note_contents_meeting_place: {
            speaker: "Jacob Rivers",
            text: "(Reading note) 'Coyote Creek, midnight. Full moon. Need to talk. Urgent. Your brother.' (Internal) 'Samuel... here? Pa must have sent him. This can't be good.'",
            next: "jacob_prepares_for_secret_meeting"
        },

        // Scene 15: Jacob Prepares for Meeting
        jacob_prepares_for_secret_meeting: {
            speaker: "Narrator",
            text: "Fear and a sliver of hope warred within Jacob. He had to know why Samuel was here. He slipped out of the noisy miners' barracks unseen as midnight approached.",
            next: "coyote_creek_meeting_spot"
        },

        // Scene 16: Coyote Creek - The Meeting
        coyote_creek_meeting_spot: {
            speaker: "Narrator",
            text: "Coyote Creek was a dried-up arroyo a mile from town, bathed in the cold light of a full moon. Samuel was already there, a small, nervous figure.",
            next: "brothers_reunite_tense"
        },

        // Scene 17: Brothers Reunite Tensely
        brothers_reunite_tense: {
            speaker: "Jacob Rivers",
            text: "'Samuel. What are you doing here? Does Pa know?'",
            next: "samuel_explains_scouting_mission"
        },

        // Scene 18: Samuel Explains
        samuel_explains_scouting_mission: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "'Pa sent me. To scout Perdition. He's... he's planning something, Jacob. Something big. Against Pike.'",
            next: "jacob_presses_for_details_ch8"
        },
        
        // Scene 19: Jacob Presses for Details
        jacob_presses_for_details_ch8: {
            speaker: "Jacob Rivers",
            text: "'Pike? What kind of plan? Is it the silver shipment?' Jacob remembered the whispers around the mine.",
            choices: [
                {
                    text: "Ask about their father, Silas.",
                    next: "ask_about_silas_status"
                },
                {
                    text: "Express concern for Samuel's safety.",
                    next: "express_concern_for_samuel"
                }
            ]
        },

        // Scene 20: Ask about Silas (Optional)
        ask_about_silas_status: {
            speaker: "Jacob Rivers",
            text: "'How is he, Samuel? Pa? After... after Texas?'",
            next: "samuel_describes_silas_anger"
        },
        
        // Scene 21: Samuel Describes Silas (Optional leads here)
        samuel_describes_silas_anger: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "'Harder than ever. And angrier. He talks about you, Jacob. Calls you a traitor. Says blood ain't thicker than betrayal.' Samuel shivered. 'He means to hit Pike's silver shipment. Take it all.'",
            next: "jacob_realizes_danger_to_perdition"
        },

        // Scene 22: Express Concern for Samuel (Optional)
        express_concern_for_samuel: {
            speaker: "Jacob Rivers",
            text: "'This is dangerous, Samuel. For you to be here. If Pa finds out you warned me...'",
            next: "samuel_brotherly_loyalty"
        },

        // Scene 23: Samuel's Loyalty (Optional leads here)
        samuel_brotherly_loyalty: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "'I had to, Jacob! He's planning to hit Pike's silver shipment. Hard. There'll be killing. Innocents might get caught in the crossfire.'",
            next: "jacob_realizes_danger_to_perdition"
        },

        // Scene 24: Jacob Realizes the Danger
        jacob_realizes_danger_to_perdition: {
            speaker: "Narrator",
            text: "Jacob's blood ran cold. A full-scale attack by the Rivers Gang on Pike's shipment would turn Perdition into a warzone. People would die. People he was starting to know.",
            next: "samuel_warns_jacob_to_flee"
        },

        // Scene 25: Samuel Urges Jacob to Flee
        samuel_warns_jacob_to_flee: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "'You gotta leave, Jacob. If Pa finds you here during the robbery... he'll kill you himself. He swore it. I came to warn you. Run, brother. Run far.'",
            next: "jacob_torn_dilemma_ch8"
        },

        // Scene 26: Jacob's Dilemma
        jacob_torn_dilemma_ch8: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'Run again? Let my family bring bloodshed to this town? Or warn Perdition, and betray my own blood, what's left of it? Condemn Samuel?'",
            next: "jacob_thanks_samuel_parts_ways"
        },
        
        // Scene 27: Jacob Thanks Samuel
        jacob_thanks_samuel_parts_ways: {
            speaker: "Jacob Rivers",
            text: "'Thank you, Samuel. For the warning. You shouldn't have risked it.' He embraced his younger brother briefly. 'Now go. Get back to Clayton before Pa misses you. And be careful.'",
            next: "samuel_leaves_jacob_to_his_choice"
        },

        // Scene 28: Samuel Leaves
        samuel_leaves_jacob_to_his_choice: {
            speaker: "Narrator",
            text: "Samuel hesitated, then slipped away into the night, leaving Jacob alone with an impossible choice.",
            next: "jacob_agonizing_over_decision"
        },

        // Scene 29: Agonizing Over the Decision
        jacob_agonizing_over_decision: {
            speaker: "Narrator",
            text: "Jacob returned to the miners' barracks, his mind a whirlwind. Warn the town, and he'd be fighting his own family, likely signing Samuel's death warrant. Stay silent, and innocent people in Perdition would suffer. His new, fragile attempt at an honest life felt like a cruel joke.",
            next: "sleepless_night_for_jacob"
        },
        
        // Scene 30-32: Jacob's Sleepless Night (Montage of turmoil)
        sleepless_night_for_jacob: {
            speaker: "Narrator",
            text: "Sleep offered no escape. He tossed and turned, images of the Texas bank, the terrified teller, his father's rage, and now Samuel's frightened face, warring with the thought of bloodshed in Perdition's streets.",
            next: "jacob_remembers_why_he_fled"
        },
        jacob_remembers_why_he_fled: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'I left to escape this! To be better! What good is an honest life if it's built on the silence that condemns others?'",
            next: "jacob_fear_of_father_still_strong"
        },
        jacob_fear_of_father_still_strong: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'But Pa... he'll hunt me to the ends of the earth if I cross him again. And Samuel... he trusted me.'",
            next: "next_day_at_the_mine_jacob_distracted"
        },

        // Scene 33: Next Day at the Mine - Distracted
        next_day_at_the_mine_jacob_distracted: {
            speaker: "Narrator",
            text: "The next day at the mine, Jacob was distracted, his movements clumsy. His turmoil was a heavy weight, making the physical labor even more punishing.",
            next: "mining_accident_jacob_injury"
        },

        // Scene 34: The Mining Injury
        mining_accident_jacob_injury: {
            speaker: "Narrator",
            text: "A loose rock, dislodged by a poorly set charge further up the tunnel, came crashing down. Jacob cried out as it struck his arm, a sharp, agonizing pain shooting through him.",
            next: "fellow_miners_help_jacob"
        },

        // Scene 35: Miners Help Jacob
        fellow_miners_help_jacob: {
            speaker: "Fellow Miner",
            text: "'Rivers is hit! Get him out of here! Looks like a bad break. Someone fetch Doc Whitmore!'",
            next: "jacob_taken_to_doc_whitmore"
        },

        // Scene 36: Taken to Doc Whitmore
        jacob_taken_to_doc_whitmore: {
            speaker: "Narrator",
            text: "Supported by two miners, Jacob was half-carried, half-dragged to Doc Whitmore's clinic. The pain in his arm was intense, but it was nothing compared to the turmoil in his soul.",
            next: "doc_examines_jacob_arm"
        },

        // Scene 37: Doc Examines Jacob's Arm
        doc_examines_jacob_arm: {
            speaker: "Doc Whitmore",
            text: "'Nasty fracture, young man. You're lucky it wasn't your head.' Doc, smelling faintly of laudanum but his hands surprisingly steady, began to clean the wound. 'Gonna have to set this. It'll hurt.'",
            next: "jacob_endures_pain_setting_bone"
        },

        // Scene 38: Jacob Endures the Pain
        jacob_endures_pain_setting_bone: {
            speaker: "Narrator",
            text: "Jacob gritted his teeth as Doc expertly set the bone, the sharp agony momentarily eclipsing his moral crisis. Once his arm was splinted and bandaged, Doc offered him a swig of whiskey.",
            next: "doc_notices_jacob_distress"
        },

        // Scene 39: Doc Notices Jacob's Distress
        doc_notices_jacob_distress: {
            speaker: "Doc Whitmore",
            text: "'Pain from the arm, or is something heavier weighing on you, son? You look like a man who's seen a ghost.' Doc's eyes were unnervingly perceptive.",
            choices: [
                {
                    text: "Try to dismiss Doc's observation.",
                    next: "jacob_dismisses_doc_ch8"
                },
                {
                    text: "Hesitantly hint at his troubles.",
                    next: "jacob_hints_at_trouble_ch8"
                }
            ]
        },

        // Scene 40: Jacob Dismisses Doc (Optional)
        jacob_dismisses_doc_ch8: {
            speaker: "Jacob Rivers",
            text: "'Just the arm, Doc. Hurts like hell.' He tried to force a smile.",
            next: "doc_probes_further_ch8"
        },
        
        // Scene 41: Doc Probes Further (If dismissed)
        doc_probes_further_ch8: {
            speaker: "Doc Whitmore",
            text: "'I've treated enough broken bones and broken men to know the difference, Jacob. Physical pain is one thing. The soul... that's a trickier ailment.' He took a sip from his own flask. 'Sometimes talking helps. Sometimes it just gives your demons a voice.'",
            next: "jacob_hints_at_trouble_ch8" // Merge or lead to decision
        },

        // Scene 42: Jacob Hints at Trouble
        jacob_hints_at_trouble_ch8: {
            speaker: "Jacob Rivers",
            text: "'It's... complicated, Doc. Family trouble. The kind that follows you, no matter how far you run.'",
            next: "doc_offers_a_sympathetic_ear_or_opportunistic"
        },
        
        // Scene 43: Doc's "Sympathetic" Ear
        doc_offers_a_sympathetic_ear_or_opportunistic: {
            speaker: "Doc Whitmore",
            text: "'Family.' Doc swirled the whiskey in his cup. 'Can't live with 'em, can't legally shoot 'em... most of the time. What kind of trouble are we talking about, Jacob? The kind that might... impact this town?'",
            next: "jacob_weighs_confiding_in_doc"
        },

        // Scene 44: Jacob Weighs Confiding
        jacob_weighs_confiding_in_doc: {
            speaker: "Narrator",
            text: "Jacob looked at Doc. The man was an addict, cynical, probably corrupt. But he was also intelligent, and perhaps, in his own twisted way, understood desperation. And Jacob was desperate.",
            next: "jacob_decides_to_confide_partially"
        },

        // Scene 45: Jacob Decides to Confide (Partially)
        jacob_decides_to_confide_partially: {
            speaker: "Jacob Rivers",
            text: "'There's... there's a robbery planned, Doc. A big one. Pike's silver shipment. My... my family is planning it.' The words tumbled out, heavy with guilt and fear.",
            next: "doc_absorbs_information_carefully"
        },

        // Scene 46: Doc Absorbs the Information
        doc_absorbs_information_carefully: {
            speaker: "Narrator",
            text: "Doc Whitmore listened, his expression unreadable. The laudanum haze in his eyes seemed to clear for a moment, replaced by a sharp, calculating gleam. He asked a few careful questions, drawing out more details from the anguished young man.",
            next: "doc_sees_opportunity_in_jacob_dilemma"
        },

        // Scene 47: Doc Sees Opportunity
        doc_sees_opportunity_in_jacob_dilemma: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'The Rivers Gang... Pike's silver... This town is about to become a powder keg. And I, Dr. Thomas Whitmore, might just find myself holding the match. Or perhaps, selling fire insurance.'",
            next: "doc_offers_jacob_false_comfort_or_advice"
        },

        // Scene 48: Doc's "Advice"
        doc_offers_jacob_false_comfort_or_advice: {
            speaker: "Doc Whitmore",
            text: "'A difficult position, Jacob. Loyalty to blood versus loyalty to... well, whatever passes for civic duty in this town.' He topped off Jacob's whiskey. 'You'll need to think carefully about your next move. Information like this... it's valuable. And dangerous.'",
            next: "jacob_leaves_doc_office_more_burdened"
        },

        // Scene 49: Jacob Leaves, More Burdened
        jacob_leaves_doc_office_more_burdened: {
            speaker: "Narrator",
            text: "Jacob left Doc's clinic with his arm in a sling and his soul in turmoil. Confiding in Doc hadn't eased his burden; it had only added another layer of complexity, another untrustworthy player in a deadly game.",
            next: "chapter_end_scene_ch8"
        },

        // Scene 50: Chapter End - Doc's Contemplation
        chapter_end_scene_ch8: {
            speaker: "Narrator",
            text: "Alone, Doc Whitmore considered the information. Pike's silver, the notorious Rivers Gang, a vulnerable town, and a conflicted young man caught in the middle. He smiled thinly. Perdition was indeed a town of opportunity, though not the kind most honest folk sought. The blood moon was rising, metaphorically and perhaps literally, over this damned town.",
            choices: [
                {
                    text: "Continue to Chapter 9",
                    next: null,
                    nextChapter: "chapter9"
                }
            ]
        }
    }
};