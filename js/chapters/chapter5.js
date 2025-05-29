// Chapter 5: The Undertaker's Dance
storyData.chapter5 = {
    name: "Chapter 5",
    title: "The Undertaker's Dance",
    scenes: {
        // Scene 1: Perdition's Attempt at Normalcy
        start: {
            speaker: "Narrator",
            text: "A week had passed since Jacob's unsettling discovery in the mine. Perdition, in a desperate attempt at normalcy, was holding a town dance in the dusty shell of what was once a meeting hall. Fiddles scraped a lively tune, but an undercurrent of tension thrummed beneath the forced gaiety.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 5');
            },
            next: "protagonists_arrive_separately"
        },

        // Scene 2: Protagonists Arrive Separately
        protagonists_arrive_separately: {
            speaker: "Narrator",
            text: "All four of our strangers found themselves drawn to the event, each for their own reasons. Elijah, hoping to observe the townsfolk and perhaps find a moment of solace. Maria, under her schoolteacher guise, gathering information. Doc Whitmore, seeking oblivion in drink and company. And Jacob, yearning for a brief escape from the mine's darkness.",
            next: "dance_atmosphere"
        },

        // Scene 3: Dance Atmosphere
        dance_atmosphere: {
            speaker: "Narrator",
            text: "Lanterns cast flickering shadows. The air was thick with the smell of dust, sweat, and cheap whiskey. Couples twirled awkwardly, their laughter a little too loud. On a makeshift dais, Cornelius Pike watched, a predatory wolf among sheep, flanked by his enforcer, Jim Dalton, and other hard-faced men.",
            next: "crane_observing"
        },
        
        // Scene 4: Crane Observing
        crane_observing: {
            speaker: "Narrator",
            text: "Samuel Crane, the undertaker, stood near the doorway, a perpetual shadow. His eyes darted between Elijah, Doc, Maria, and Jacob, a grim understanding dawning on his face. His vision... it was unfolding.",
            next: "elijah_sees_maria"
        },

        // Scene 5: Elijah Sees Maria
        elijah_sees_maria: {
            speaker: "Narrator",
            text: "Elijah, nursing a glass of water, noticed Miss Vasquez, the new schoolteacher. She stood apart, observing the room with an intensity that seemed out of place for a simple educator. There was a stillness about her, a coiled energy.",
            choices: [
                {
                    text: "Approach Maria for a dance.",
                    next: "elijah_approaches_maria"
                },
                {
                    text: "Observe her from a distance.",
                    next: "elijah_observes_maria_detail"
                }
            ]
        },

        // Scene 6: Elijah Observes Maria (Optional Detail)
        elijah_observes_maria_detail: {
            speaker: "Elijah Cross",
            text: "(Internal) 'She watches them like a hawk watches field mice. Not the eyes of a teacher, but of a hunter. What secrets does she carry to this forsaken place?'",
            next: "elijah_approaches_maria"
        },

        // Scene 7: Elijah Approaches Maria
        elijah_approaches_maria: {
            speaker: "Elijah Cross",
            text: "'Miss Vasquez? Might a weary preacher have the honor of this dance?' Elijah offered a tentative smile.",
            next: "maria_accepts_dance"
        },

        // Scene 8: Maria Accepts
        maria_accepts_dance: {
            speaker: "Maria Vasquez",
            text: "'Preacher Cross.' Her voice was cool, her eyes searching his. 'I suppose even a soul in Perdition deserves one dance.' She allowed him to lead her to the floor.",
            next: "the_dance_begins"
        },

        // Scene 9: The Dance Begins
        the_dance_begins: {
            speaker: "Narrator",
            text: "They moved together with surprising grace, a study in contrasts: the burdened preacher and the woman with a hidden fire. The fiddle music swirled around them.",
            next: "dance_dialogue1_elijah"
        },

        // Scene 10: Dance Dialogue - Elijah
        dance_dialogue1_elijah: {
            speaker: "Elijah Cross",
            text: "'You seem... out of place here, Miss Vasquez. Like a rose in a boneyard.'",
            next: "dance_dialogue1_maria"
        },

        // Scene 11: Dance Dialogue - Maria
        dance_dialogue1_maria: {
            speaker: "Maria Vasquez",
            text: "'Perhaps all of us in Perdition are out of place, Preacher. Or perhaps we've found exactly where we belong.' Her grip tightened fractionally.",
            next: "dance_recognition_darkness"
        },

        // Scene 12: Recognizing Darkness
        dance_recognition_darkness: {
            speaker: "Narrator",
            text: "As they danced, their eyes met. In that moment, a flicker of recognition passed between them – not of familiarity, but of a shared understanding. Both had seen the abyss, and it had left its mark.",
            choices: [
                {
                    text: "Elijah: 'What brought you to a town like this?'",
                    next: "dance_elijah_probes"
                },
                {
                    text: "Maria: 'You carry a heavy weight, Preacher.'",
                    next: "dance_maria_probes"
                }
            ]
        },
        
        // Scene 13: Elijah Probes Maria (Optional Dialogue)
        dance_elijah_probes: {
            speaker: "Elijah Cross",
            text: "'A dedicated teacher traveling so far for such a... challenging post. It speaks of a strong calling. Or a deep need to be elsewhere.'",
            next: "dance_maria_evasive"
        },

        // Scene 14: Maria Probes Elijah (Optional Dialogue)
        dance_maria_probes: {
            speaker: "Maria Vasquez",
            text: "'That collar doesn't quite hide the shadows in your eyes, Preacher. What sins are you trying to outrun by coming to Perdition?'",
            next: "dance_elijah_evasive"
        },

        // Scene 15: Maria's Evasive Answer
        dance_maria_evasive: {
            speaker: "Maria Vasquez",
            text: "'All God's children deserve an education, Preacher. Even those in Perdition.' Her smile didn't reach her eyes.",
            next: "dance_ends_uneasily"
        },

        // Scene 16: Elijah's Evasive Answer
        dance_elijah_evasive: {
            speaker: "Elijah Cross",
            text: "'We all carry burdens, Miss Vasquez. Some are just heavier than others.'",
            next: "dance_ends_uneasily"
        },

        // Scene 17: Dance Ends Uneasily
        dance_ends_uneasily: {
            speaker: "Narrator",
            text: "The song ended. They separated with polite nods, the unspoken understanding hanging between them like gunsmoke. Both knew the other was more than they appeared.",
            next: "doc_whitmore_scene_intro"
        },

        // Scene 18: Doc Whitmore's Descent
        doc_whitmore_scene_intro: {
            speaker: "Narrator",
            text: "Meanwhile, Doc Whitmore was several doses of laudanum into his evening. His earlier unease had been replaced by a reckless, drug-fueled confidence. He watched Pike, his eyes narrowed with contempt.",
            next: "doc_muttering_loudly"
        },

        // Scene 19: Doc Muttering
        doc_muttering_loudly: {
            speaker: "Doc Whitmore",
            text: "(To a nearby miner, slurring slightly) 'Look at him. Pike. King of this dung heap. Thinks he owns everyone. But I know... I know what men like him are capable of. Seen it before... in Boston...'",
            next: "miner_nervous_reply"
        },
        
        // Scene 20: Miner's Nervous Reply
        miner_nervous_reply: {
            speaker: "Miner",
            text: "'Easy there, Doc. Mr. Pike's got ears everywhere. Not wise to speak ill of him.'",
            next: "doc_ignores_warning"
        },

        // Scene 21: Doc Ignores Warning
        doc_ignores_warning: {
            speaker: "Doc Whitmore",
            text: "'Wise? Wisdom is for sober men, friend. And I... am gloriously unburdened by such afflictions tonight!' He laughed, a harsh, broken sound.",
            next: "pike_stares_at_doc"
        },

        // Scene 22: Pike Notices Doc
        pike_stares_at_doc: {
            speaker: "Narrator",
            text: "Pike's cold gaze drifted towards Doc, a flicker of annoyance crossing his features. Jim Dalton, ever watchful, straightened slightly.",
            next: "doc_gets_another_drink"
        },
        
        // Scene 23: Doc Gets Another Drink (Laudanum)
        doc_gets_another_drink: {
            speaker: "Narrator",
            text: "Doc fumbled in his coat, producing his small vial of laudanum. He took a long swig, the opiate courage surging through him.",
            next: "doc_stumbles_towards_pike"
        },

        // Scene 24: Doc Stumbles Towards Pike
        doc_stumbles_towards_pike: {
            speaker: "Doc Whitmore",
            text: "'Cornelius Pike!' Doc's voice, though slurred, carried across the room, silencing the fiddles. 'A pillar of the community, they say! A benefactor!'",
            next: "pike_cold_response_to_doc"
        },

        // Scene 25: Pike's Cold Response
        pike_cold_response_to_doc: {
            speaker: "Cornelius Pike",
            text: "'Doctor Whitmore. Enjoying the festivities, I see. Perhaps a bit too much?' His tone was dangerously mild.",
            next: "doc_public_accusation1"
        },

        // Scene 26: Doc's Public Accusation
        doc_public_accusation1: {
            speaker: "Doc Whitmore",
            text: "'Oh, I'm enjoying the *truth*, Pike! The truth about men who build their empires on the bones of others! Men who get rich while children die! Sound familiar, you murdering bastard?'",
            next: "crowd_gasps_dalton_moves"
        },

        // Scene 27: Crowd Gasps, Dalton Moves
        crowd_gasps_dalton_moves: {
            speaker: "Narrator",
            text: "A collective gasp went through the hall. The music died completely. Jim Dalton and two other Pike enforcers started moving towards Doc, their intentions clear.",
            next: "doc_continues_accusation"
        },
        
        // Scene 28: Doc Continues, Undeterred
        doc_continues_accusation: {
            speaker: "Doc Whitmore",
            text: "'You think no one knows about your dirty secrets, Pike? About the children in the mountain? About the mercury? I know! This town is drowning in your poison!'",
            choices: [
                {
                    text: "Maria's reaction: Assess the threat.",
                    next: "maria_assesses_doc_situation"
                },
                {
                    text: "Elijah's reaction: Consider intervening morally.",
                    next: "elijah_considers_doc_situation"
                }
            ]
        },
        
        // Scene 29: Maria Assesses (Optional)
        maria_assesses_doc_situation: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'The fool. He'll get himself killed. But... he's just named Pike's crimes publicly. That changes things. Dalton is moving too quickly.'",
            next: "elijah_considers_doc_situation"
        },

        // Scene 30: Elijah Considers (Optional)
        elijah_considers_doc_situation: {
            speaker: "Elijah Cross",
            text: "(Internal) 'He's drunk and reckless, but if there's truth in his words... Pike cannot be allowed to silence him so easily. But what can I do against armed men?'",
            next: "pike_orders_doc_silenced"
        },
        
        // Scene 31: Pike Orders Doc Silenced
        pike_orders_doc_silenced: {
            speaker: "Cornelius Pike",
            text: "'The good doctor is unwell. Dalton, escort him outside. Help him... find some fresh air.' The euphemism was chilling.",
            next: "dalton_approaches_doc"
        },

        // Scene 32: Dalton Approaches Doc Menacingly
        dalton_approaches_doc: {
            speaker: "Narrator",
            text: "Dalton cracked his knuckles, a cruel smile on his face. 'Come on, Doc. Let's get you some... quiet time.'",
            next: "jacob_watches_tensely"
        },
        
        // Scene 33: Jacob Watches Tensely
        jacob_watches_tensely: {
            speaker: "Narrator",
            text: "Jacob, standing near the edge of the crowd, watched with growing horror. He'd seen this kind of 'quiet time' before in his father's gang. It never ended well for the recipient.",
            next: "doc_tries_to_resist"
        },

        // Scene 34: Doc Tries to Resist Weakly
        doc_tries_to_resist: {
            speaker: "Doc Whitmore",
            text: "'Get your filthy hands off me! I'm a physician! I know what you are, Pike! Everyone will know!' But the laudanum had sapped his strength.",
            next: "dalton_grabs_doc"
        },
        
        // Scene 35: Dalton Grabs Doc
        dalton_grabs_doc: {
            speaker: "Narrator",
            text: "Dalton grabbed Doc's arm in a vice-like grip, starting to drag him towards the exit. The other two enforcers moved to block any interference.",
            next: "jacob_makes_a_decision"
        },

        // Scene 36: Jacob Makes a Decision
        jacob_makes_a_decision: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'No. Not again. I ran from a killing once. I won't stand by and watch another.' Something snapped within him – the fear, the desire to be different.",
            next: "jacob_steps_forward"
        },

        // Scene 37: Jacob Steps Forward
        jacob_steps_forward: {
            speaker: "Jacob Rivers",
            text: "'Leave him be!' Jacob's voice, though young, cut through the tension. He moved to stand between Dalton and Doc.",
            next: "dalton_surprised_by_jacob"
        },

        // Scene 38: Dalton Surprised
        dalton_surprised_by_jacob: {
            speaker: "Jim Dalton",
            text: "'Well, now. What have we here? Pike's new mine rat got some sand?' He sneered, shoving Doc aside slightly to face Jacob.",
            next: "jacob_stands_ground"
        },

        // Scene 39: Jacob Stands His Ground
        jacob_stands_ground: {
            speaker: "Jacob Rivers",
            text: "'He's drunk, not dangerous. No need to hurt him. Just let him sleep it off.' Jacob tried to keep his voice steady, though his heart hammered.",
            next: "pike_amused_by_jacob"
        },

        // Scene 40: Pike Amused
        pike_amused_by_jacob: {
            speaker: "Cornelius Pike",
            text: "'The boy shows spirit, Dalton. Perhaps he's auditioning for your job.' Pike chuckled, a dry, humorless sound. 'But my orders stand. Remove the doctor.'",
            next: "dalton_moves_on_jacob"
        },

        // Scene 41: Dalton Moves on Jacob
        dalton_moves_on_jacob: {
            speaker: "Narrator",
            text: "Dalton lunged for Jacob. But Jacob, though inexperienced, was quick, his youth and desperation giving him an edge. He sidestepped, and Dalton stumbled.",
            next: "brief_scuffle_jacob_dalton"
        },

        // Scene 42: Brief Scuffle
        brief_scuffle_jacob_dalton: {
            speaker: "Narrator",
            text: "The scuffle was brief but fierce. Jacob landed a solid punch to Dalton's jaw, surprising the enforcer. Dalton roared and came back harder, but the distraction had bought precious seconds.",
            next: "others_react_to_jacob_action"
        },
        
        // Scene 43: Others React
        others_react_to_jacob_action: {
            speaker: "Narrator",
            text: "Elijah moved to support Jacob, placing a hand on Dalton's arm. Maria subtly shifted, her position now covering Pike's other men. The dynamic in the room had changed.",
            next: "pike_reconsiders_scene"
        },

        // Scene 44: Pike Reconsiders
        pike_reconsiders_scene: {
            speaker: "Cornelius Pike",
            text: "'Enough.' Pike's voice was sharp. He didn't want a full-blown brawl in public, not with a new preacher and schoolteacher witnessing it. 'The doctor has made a fool of himself. Take him to his rooms. He can sleep it off there. Jacob Rivers, you have my... attention.'",
            next: "dalton_backs_down_reluctantly"
        },

        // Scene 45: Dalton Backs Down
        dalton_backs_down_reluctantly: {
            speaker: "Narrator",
            text: "Dalton, glowering, released Doc, who slumped against Jacob. The enforcers reluctantly stood down at Pike's signal.",
            next: "jacob_helps_doc"
        },

        // Scene 46: Jacob Helps Doc
        jacob_helps_doc: {
            speaker: "Narrator",
            text: "Jacob, with a nod from Elijah, helped the near-unconscious Doc Whitmore out of the hall. He had made powerful enemies, but he had also, unexpectedly, acted.",
            next: "dance_hall_tension_remains"
        },

        // Scene 47: Tension Remains in the Hall
        dance_hall_tension_remains: {
            speaker: "Narrator",
            text: "The music did not resume immediately. Pike's gaze swept the room, a silent promise of retribution. The town dance had indeed become the Undertaker's Dance – a dance with death and dangerous secrets.",
            next: "josiah_truth_arrival_intro"
        },

        // Scene 48: Josiah Truth's Arrival
        josiah_truth_arrival_intro: {
            speaker: "Narrator",
            text: "Just as the tension seemed to peak, the main door creaked open again. A new figure stood silhouetted against the night. Tall, clad in black, with a weathered face and an empty sleeve where his left arm should have been. A one-armed preacher.",
            next: "josiah_truth_speaks_recognizes_elijah"
        },

        // Scene 49: Josiah Truth Speaks, Recognizes Elijah
        josiah_truth_speaks_recognizes_elijah: {
            speaker: "Josiah Truth",
            text: "'Forgive my intrusion. I am Josiah Truth, a humble servant of the Lord, seeking shelter.' His voice was deep, resonant. His one good eye scanned the room, then fixed unerringly on Elijah Cross. A flicker of something unreadable – recognition? – crossed his face. 'Elijah? Is that truly you?'",
            next: "chapter_end_scene_josiah"
        },

        // Scene 50: Chapter End - Cliffhanger
        chapter_end_scene_josiah: {
            speaker: "Narrator",
            text: "Elijah felt a chill despite the stuffy hall. The name, the missing arm... a fragment of a nightmare from his past surfaced. He didn't know this man. Or did he? The arrival of Josiah Truth promised new complications, and perhaps, a reckoning of a different kind.",
            choices: [
                {
                    text: "Continue to Chapter 6",
                    next: null,
                    nextChapter: "chapter6"
                }
            ]
        }
    }
};