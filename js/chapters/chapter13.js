// Chapter 13: The Teacher's Revenge
storyData.chapter13 = {
    name: "Chapter 13",
    title: "The Teacher's Revenge",
    scenes: {
        // Scene 1: Maria Tracks Dalton
        start: {
            speaker: "Narrator",
            text: "Weeks of patient observation, of piecing together scraps of information from her unwitting student spies and the forced confessions of Josiah Truth, had finally led Maria Vasquez to this moment. Jim Dalton, her sister Sofia's murderer, was alone.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 13');
            },
            next: "dalton_isolated_location"
        },

        // Scene 2: Dalton's Location
        dalton_isolated_location: {
            speaker: "Narrator",
            text: "He was holed up in a small, abandoned prospector's cabin a few miles from Perdition, a place he evidently used for trysts or private dealings. Maria had watched him enter with a local Mexican woman an hour earlier.",
            next: "maria_approaches_cabin"
        },

        // Scene 3: Maria Approaches
        maria_approaches_cabin: {
            speaker: "Narrator",
            text: "She moved with the silence of a desert predator, her Colts oiled and ready. The schoolteacher facade was gone, replaced by the cold, focused mask of an avenger.",
            next: "inside_cabin_dalton_and_woman"
        },

        // Scene 4: Inside the Cabin
        inside_cabin_dalton_and_woman: {
            speaker: "Narrator",
            text: "Through a grimy window, Maria saw Dalton with the woman. They weren't lovers, not in the traditional sense. He was speaking to her earnestly, showing her a crudely made doll. The woman, Elena, listened with a sad tenderness.",
            next: "maria_kicks_door_in"
        },

        // Scene 5: Maria Makes Her Entrance
        maria_kicks_door_in: {
            speaker: "Narrator",
            text: "Maria didn't bother with subtlety. She kicked the flimsy door off its hinges, one Colt leveled at Dalton, the other covering Elena.",
            next: "dalton_shock_and_recognition"
        },

        // Scene 6: Dalton's Shock
        dalton_shock_and_recognition: {
            speaker: "Jim Dalton",
            text: "'Who in the hell-?!' He froze, his eyes widening as he recognized Maria, though likely not as the schoolteacher. 'You... from the cantina in Chihuahua... two years back... Sofia's sister?'",
            next: "maria_cold_confirmation"
        },

        // Scene 7: Maria's Confirmation
        maria_cold_confirmation: {
            speaker: "Maria Vasquez",
            text: "'Took you long enough, asesino.' Her voice was flat, deadly. 'Sofia sends her regards. Through me.'",
            next: "elena_pleads_for_dalton"
        },

        // Scene 8: Elena Pleads
        elena_pleads_for_dalton: {
            speaker: "Elena (Dalton's Lover)",
            text: "'Please, señorita! He is not all bad! He has a good heart! He has been helping the children, some of them, from Pike's mine!'",
            next: "maria_dismisses_plea"
        },

        // Scene 9: Maria Dismisses the Plea
        maria_dismisses_plea: {
            speaker: "Maria Vasquez",
            text: "'A good heart?' Maria laughed, a chilling sound. 'The only good part of him will be bleeding on this floor soon. His attempts to save a few brats now don't erase what he did to my sister.'",
            choices: [
                {
                    text: "Consider Elena's words about the children briefly.",
                    next: "maria_considers_dalton_children_briefly"
                },
                {
                    text: "Focus solely on Dalton's past crime.",
                    next: "maria_focus_dalton_crime_only"
                }
            ]
        },

        // Scene 10: Maria Considers Dalton/Children (Optional)
        maria_considers_dalton_children_briefly: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Protecting children? A convenient lie. Or a desperate man's late attempt at penance. It changes nothing. Sofia is still dead.'",
            next: "dalton_explains_his_actions"
        },

        // Scene 11: Maria Focuses on Crime (Optional)
        maria_focus_dalton_crime_only: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'He took Sofia's life. Nothing else matters. No act of supposed kindness can balance that scale.'",
            next: "dalton_explains_his_actions"
        },

        // Scene 12: Dalton Tries to Explain
        dalton_explains_his_actions: {
            speaker: "Jim Dalton",
            text: "'It's true! After... after Sofia... I changed. Elena, she showed me... Pike, what he's doing to those kids... it's wrong! I've been sneaking food to them, trying to get some of the sickest ones out!'",
            next: "maria_unmoved_begins_torture_setup"
        },

        // Scene 13: Maria Unmoved
        maria_unmoved_begins_torture_setup: {
            speaker: "Narrator",
            text: "Maria ignored his pleas. She bound Elena securely to a chair, ensuring she had a clear view. Then, she turned her attention to Dalton, a chillingly methodical purpose in her movements.",
            next: "maria_questioning_dalton_about_sofia"
        },

        // Scene 14: The Questioning Begins
        maria_questioning_dalton_about_sofia: {
            speaker: "Maria Vasquez",
            text: "'We're going to talk about Sofia, Dalton. Every detail. What she said. What she wore. How she looked at you. And then... how you killed her. Slowly.'",
            next: "dalton_refuses_to_speak_initially"
        },
        
        // Scene 15: Dalton's Initial Refusal
        dalton_refuses_to_speak_initially: {
            speaker: "Jim Dalton",
            text: "'I won't... I won't relive that. Do what you have to do, but I won't speak of it.' His face was pale, but defiant.",
            next: "maria_first_act_of_torture"
        },

        // Scene 16-25: The Torture (Implied, focusing on psychological and information extraction)
        // Note: The text will focus on the process and psychological aspect, not graphic detail.
        maria_first_act_of_torture: {
            speaker: "Narrator",
            text: "Maria smiled, a terrifyingly empty expression. She picked up a rusty branding iron from the cold hearth. 'Oh, you'll speak, Dalton. You just don't know it yet.'",
            next: "torture_scene_montage_1"
        },
        torture_scene_montage_1: {
            speaker: "Narrator",
            text: "The hours that followed were a descent into a private hell for Jim Dalton. Maria was an artist of pain, her questions relentless, her methods precise, designed to break his will piece by piece.",
            next: "elena_screams_witnessing"
        },
        elena_screams_witnessing: {
            speaker: "Narrator",
            text: "Elena screamed, begged, pleaded. Maria ignored her, her focus solely on Dalton, her voice a low, insistent whisper as she extracted the agonizing details of Sofia's last moments.",
            next: "dalton_begins_to_break"
        },
        dalton_begins_to_break: {
            speaker: "Jim Dalton",
            text: "(Broken sobs) 'She... she was wearing a blue dress... asked me why... said she had a sister who loved her...'",
            next: "maria_presses_for_more_details"
        },
        maria_presses_for_more_details: {
            speaker: "Maria Vasquez",
            text: "'And then, Dalton? What did you do then? Don't leave anything out.' Her voice was devoid of emotion, a scalpel dissecting his soul.",
            next: "torture_scene_montage_2"
        },
        torture_scene_montage_2: {
            speaker: "Narrator",
            text: "She used his love for Elena as another tool, another point of leverage, describing what she would do to the woman if Dalton remained silent on any particular detail.",
            next: "dalton_reveals_everything_about_sofia"
        },
        dalton_reveals_everything_about_sofia: {
            speaker: "Narrator",
            text: "Broken and bleeding, Dalton finally confessed everything: the botched robbery where Sofia was a bystander, his drunken panic, the accidental shot that became murder when he silenced her permanently.",
            next: "maria_absorbs_final_details_sofia"
        },
        maria_absorbs_final_details_sofia: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'So that's how it was. No grand betrayal. Just pathetic, drunken cowardice.' The truth was uglier, more mundane than the elaborate villainy she had imagined.",
            next: "maria_turns_to_elena"
        },
        
        // Scene 26: Maria Turns to Elena
        maria_turns_to_elena: {
            speaker: "Narrator",
            text: "When Dalton was a spent, whimpering wreck, Maria turned to the horrified Elena.",
            next: "maria_cold_statement_to_elena"
        },
        
        // Scene 27: Maria's Cold Statement
        maria_cold_statement_to_elena: {
            speaker: "Maria Vasquez",
            text: "'He loved you, didn't he?' Maria's voice was soft. 'He tried to protect children because of you. A shame love makes men so... vulnerable.'",
            next: "elena_pleads_for_her_life"
        },

        elena_pleads_for_her_life: {
            speaker: "Elena (Dalton's Lover)",
            text: "'Please... I did nothing! I tried to make him better! Have mercy!'",
            next: "maria_kills_elena"
        },

        // Scene 29: Maria Kills Elena
        maria_kills_elena: {
            speaker: "Maria Vasquez",
            text: "'Mercy?' Maria raised her Colt. 'Sofia found no mercy.' She looked at Dalton. 'Now you know what it feels like to lose what you love because of who you are.' She fired. Elena slumped in her chair.",
            next: "dalton_shattered_grief"
        },

        // Scene 30: Dalton's Shattered Grief
        dalton_shattered_grief: {
            speaker: "Narrator",
            text: "A raw, animalistic howl of pure agony tore from Dalton's throat. The physical pain was nothing compared to this. Maria watched, her face a mask.",
            next: "maria_prepares_to_kill_dalton"
        },

        // Scene 31: Maria Prepares to Kill Dalton
        maria_prepares_to_kill_dalton: {
            speaker: "Narrator",
            text: "She walked over to Dalton, reloading her Colt with deliberate care. This was it. The moment she had lived for.",
            next: "maria_confesses_her_own_sins_to_dalton"
        },

        // Scene 32: Maria's Confession to Dalton
        maria_confesses_her_own_sins_to_dalton: {
            speaker: "Maria Vasquez",
            text: "'Before you die, Dalton, know this: you weren't the only one using innocents. Those children in my school? My little birds, singing Pike's secrets to me. Some of them got too curious, asked the wrong questions. Flew too close to the flame Pike tends.'",
            next: "dalton_horrified_by_maria_confession"
        },

        dalton_horrified_by_maria_confession: {
            speaker: "Jim Dalton",
            text: "(Whispering, horrified anew) 'You... you used them? Let them get hurt? For this? You're a monster... worse than me...'",
            next: "maria_acknowledges_her_nature"
        },

        // Scene 34: Maria Acknowledges Her Nature
        maria_acknowledges_her_nature: {
            speaker: "Maria Vasquez",
            text: "'Perhaps.' A flicker of something unreadable in her eyes. 'But my sister is dead. And soon, so are you. It seems we all become what we despise in the end.'",
            choices: [
                {
                    text: "Maria feels a brief, sharp pang of self-loathing.",
                    next: "maria_self_loathing_pang"
                },
                {
                    text: "Maria steels herself, focusing on the kill.",
                    next: "maria_steels_for_kill"
                }
            ]
        },

        maria_self_loathing_pang: { // Optional
            speaker: "Narrator",
            text: "For an instant, Dalton's words struck a chord. Was this empty, bloody path all that was left for her? She crushed the thought. Weakness.",
            next: "maria_steels_for_kill"
        },

        maria_steels_for_kill: { // Optional or Converging
            speaker: "Narrator",
            text: "She raised her pistol, aiming at Dalton's head.",
            next: "interruption_pike_men_arrive"
        },

        // Scene 37: Interruption - Pike's Men Arrive
        interruption_pike_men_arrive: {
            speaker: "Narrator",
            text: "Just as her finger tightened on the trigger, shouts erupted outside. Pike's men. Dozens of them, alerted by Elena's earlier screams or simply on patrol.",
            next: "maria_curses_interruption"
        },

        // Scene 38: Maria Curses
        maria_curses_interruption: {
            speaker: "Maria Vasquez",
            text: "'Damn it!' Robbed of her kill. Her perfect revenge spoiled.",
            next: "maria_brief_gunfight_escape_plan"
        },

        // Scene 39: Brief Gunfight and Escape
        maria_brief_gunfight_escape_plan: {
            speaker: "Narrator",
            text: "Maria didn't hesitate. She returned fire, using the cabin's flimsy cover, then kicked out a back window and disappeared into the rugged terrain she knew so well. Survival, for now, trumped even revenge.",
            next: "pike_men_find_dalton_and_elena"
        },

        // Scene 40: Pike's Men Find Dalton
        pike_men_find_dalton_and_elena: {
            speaker: "Narrator",
            text: "Pike's men stormed the cabin to find Elena dead and Dalton barely clinging to life, horrifically tortured. Their expressions were grim.",
            next: "dalton_left_for_pike_justice"
        },
        
        // Scene 41-43: Dalton's Fate (Montage)
        dalton_left_for_pike_justice: {
            speaker: "Pike's Henchman (to another)",
            text: "'Boss ain't gonna like this. Dalton knew too much. And this... this was personal.'",
            next: "dalton_dragged_away_by_pike_men"
        },
        dalton_dragged_away_by_pike_men: {
            speaker: "Narrator",
            text: "They dragged Dalton away, not to a doctor, but likely to Pike himself for a final, brutal interrogation before his inevitable execution.",
            next: "maria_denied_final_kill"
        },
        maria_denied_final_kill: {
            speaker: "Narrator",
            text: "Maria had broken him, body and soul, but she had been denied the satisfaction of the final shot. Pike's men would finish him, their reasons entirely different from hers.",
            next: "maria_watches_from_distance"
        },

        // Scene 44: Maria Watches From Afar
        maria_watches_from_distance: {
            speaker: "Narrator",
            text: "From a high ridge, hidden, Maria watched Pike's men take Dalton. She felt... nothing. Or rather, a vast, echoing emptiness where the fire of her revenge had burned for two long years.",
            next: "emptiness_of_revenge_maria"
        },

        // Scene 45: The Emptiness
        emptiness_of_revenge_maria: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Sofia... is avenged. He suffered. He knew my pain. So why... why do I feel so hollow?'",
            choices: [
                {
                    text: "Acknowledge a flicker of regret for Elena.",
                    next: "maria_regret_for_elena_flicker"
                },
                {
                    text: "Dismiss the emptiness as a temporary lull.",
                    next: "maria_dismisses_emptiness"
                }
            ]
        },

        // Scene 46: Regret for Elena (Optional)
        maria_regret_for_elena_flicker: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'The woman... Elena. She was innocent in this. Collateral damage. Like my students. Like Sofia.' The thought was a sharp, unwelcome pain.",
            next: "maria_refuses_regret_final"
        },

        // Scene 47: Dismisses Emptiness (Optional)
        maria_dismisses_emptiness: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'This is just... the quiet after the storm. Dalton is dealt with. Now, Pike. And anyone else who stands in my way. There are always more targets.'",
            next: "maria_refuses_regret_final"
        },

        // Scene 48: Refusal to Acknowledge Regret
        maria_refuses_regret_final: {
            speaker: "Narrator",
            text: "Maria Vasquez straightened, the momentary flicker of emotion gone. Regret was a weakness she would not indulge. She had work to do. Pike was still alive. And her network of informants, however damaged, could be rebuilt, refined.",
            next: "new_focus_for_maria"
        },

        // Scene 49: New Focus
        new_focus_for_maria: {
            speaker: "Narrator",
            text: "Her revenge on Dalton was complete, if not by her own hand. But the taste was ash. She turned her cold gaze back towards Perdition. The game was far from over.",
            next: "chapter_end_scene_ch13"
        },

        // Scene 50: Chapter End - The Avenger's Path
        chapter_end_scene_ch13: {
            speaker: "Narrator",
            text: "The teacher was dead, long live the killer. Maria Vasquez had shed one skin only to reveal another, harder and more merciless beneath. Perdition had claimed another soul for its dark dance, and her path of vengeance was far from over.",
            choices: [
                {
                    text: "Continue to Chapter 14",
                    next: null,
                    nextChapter: "chapter14"
                }
            ]
        }
    }
};