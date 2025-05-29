// Chapter 6: Confession
storyData.chapter6 = {
    name: "Chapter 6",
    title: "Confession",
    scenes: {
        // --- Part 1: Elijah and Josiah Truth ---
        start: {
            speaker: "Narrator",
            text: "The morning after the dance, Perdition was uneasy. Doc Whitmore was confined to his rooms, ostensibly recovering. Pike's men were more visible, their glares sharper. And Elijah Cross found himself sought out by the one-armed preacher, Josiah Truth.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 6');
            },
            next: "josiah_approaches_elijah"
        },

        josiah_approaches_elijah: {
            speaker: "Narrator",
            text: "Josiah found Elijah by the town's covered well, staring into its murky depths as if seeking answers. The older preacher's face was etched with a sorrow that resonated with Elijah's own.",
            next: "josiah_greeting_ch6"
        },

        josiah_greeting_ch6: {
            speaker: "Josiah Truth",
            text: "'Elijah Cross. It has been many years. You may not remember me, but I... I remember you. And I remember Kansas.'",
            next: "elijah_uneasy_recognition"
        },

        elijah_uneasy_recognition: {
            speaker: "Elijah Cross",
            text: "'Kansas?' A cold dread seeped into Elijah. 'I... I don't recall, Reverend Truth. My past is something I try to leave behind.'",
            choices: [
                {
                    text: "Study Josiah's face for clues.",
                    next: "study_josiah_face"
                },
                {
                    text: "Ask directly how Josiah knows him.",
                    next: "ask_josiah_directly"
                }
            ]
        },

        study_josiah_face: { // Optional
            speaker: "Narrator",
            text: "Elijah searched Josiah's weathered features, the missing arm, the haunted eyes. There was a painful familiarity he couldn't quite grasp, like a name on the tip of his tongue.",
            next: "josiah_kansas_connection"
        },

        ask_josiah_directly: { // Optional, leads to same point
            speaker: "Elijah Cross",
            text: "'How is it that you know my name, and my time in Kansas, sir?'",
            next: "josiah_kansas_connection"
        },

        josiah_kansas_connection: {
            speaker: "Josiah Truth",
            text: "'I was a member of your congregation at St. Michael's. My daughter... Abigail. She loved your Sunday sermons. She made you a drawing once, of a smiling sun.'",
            next: "elijah_abigail_memory"
        },

        elijah_abigail_memory: {
            speaker: "Narrator",
            text: "Abigail. The name struck Elijah like a physical blow. The memory of her small, soot-streaked face, the drawing of the sun he'd kept until it crumbled to dust... The church fire.",
            next: "elijah_realization_josiah"
        },

        elijah_realization_josiah: {
            speaker: "Elijah Cross",
            text: "(Whispering, horrified) 'Abigail... Truth. You're her father. Oh, merciful God...'",
            next: "josiah_confirms_identity"
        },

        josiah_confirms_identity: {
            speaker: "Josiah Truth",
            text: "'Yes, Elijah. I am her father. The father of one of the seven souls, one of the children, who perished in the fire you started.' His voice was flat, devoid of accusation, which was somehow worse.",
            next: "elijah_braces_for_wrath"
        },

        elijah_braces_for_wrath: {
            speaker: "Narrator",
            text: "Elijah closed his eyes, expecting condemnation, hatred, perhaps even violence. He deserved it all. He had lived with this guilt, this secret, for so long.",
            next: "elijah_awaits_judgment"
        },

        elijah_awaits_judgment: {
            speaker: "Elijah Cross",
            text: "'I... I have no words, Josiah. No defense. What I did... it was an accident born of anger and distraction, but the result was monstrous. I am responsible.'",
            next: "josiah_unexpected_response"
        },

        josiah_unexpected_response: {
            speaker: "Josiah Truth",
            text: "'I know what happened, Elijah. I investigated. I heard the whispers of your argument with Deacon Price, your carelessness with the lamp. I could have exposed you. Ruined you.'",
            next: "josiah_path_of_forgiveness"
        },
        
        josiah_path_of_forgiveness: {
            speaker: "Josiah Truth",
            text: "'But vengeance would not bring Abigail back. Hatred would only consume me as fire consumed your church, and my heart. So, I chose a different path. I chose to forgive you, Elijah.'",
            next: "elijah_shock_disbelief"
        },

        elijah_shock_disbelief: {
            speaker: "Elijah Cross",
            text: "'Forgive... me?' Elijah stared, uncomprehending. This was not the judgment he had anticipated, the condemnation he felt he deserved.",
            choices: [
                {
                    text: "'How? How can you forgive such a thing?'",
                    next: "elijah_questions_forgiveness"
                },
                {
                    text: "Remain silent, overwhelmed.",
                    next: "elijah_overwhelmed_by_forgiveness"
                }
            ]
        },

        elijah_questions_forgiveness: { // Optional
            speaker: "Elijah Cross",
            text: "'Your daughter... because of me... How can you stand there and offer forgiveness? I deserve your hatred!'",
            next: "josiah_explains_forgiveness"
        },

        elijah_overwhelmed_by_forgiveness: { // Optional
            speaker: "Narrator",
            text: "Elijah was speechless. The weight of Josiah's absolution felt heavier, more crushing, than any accusation could have been.",
            next: "josiah_explains_forgiveness"
        },
        
        josiah_explains_forgiveness: {
            speaker: "Josiah Truth",
            text: "'It was not easy. It took years. Years of wandering, of wrestling with God and my own grief. I lost my arm in a mill accident, a small price perhaps for the lessons I learned. Forgiveness, Elijah, is not for the forgiven. It is for the forgiver. It is the only way to release the poison from one's own soul.'",
            next: "elijah_tortured_by_mercy"
        },

        elijah_tortured_by_mercy: {
            speaker: "Narrator",
            text: "Josiah's words, meant to heal, felt like barbs to Elijah. This quiet, profound forgiveness was a torment far greater than any punishment. It offered no atonement, no way to pay his debt, only the stark, unbearable lightness of unearned mercy.",
            next: "josiah_purpose_in_perdition"
        },
        
        josiah_purpose_in_perdition: {
            speaker: "Josiah Truth",
            text: "'I did not seek you out for retribution, Elijah. I came to Perdition because I heard of its suffering. Perhaps... perhaps my journey of forgiveness can offer some solace here too. And perhaps, yours can begin.'",
            next: "elijah_left_grappling"
        },

        elijah_left_grappling: {
            speaker: "Narrator",
            text: "Josiah Truth nodded, a deep sadness in his single eye, and walked away, leaving Elijah by the well, more lost and burdened than ever before. The confession he had braced for had come, but not in the way he'd ever imagined.",
            next: "transition_to_maria_story" // Transition to Maria's storyline
        },

        // --- Part 2: Maria's Investigation ---
        transition_to_maria_story: {
            speaker: "Narrator",
            text: "Across town, at the small, dusty schoolhouse, Maria Vasquez faced a different kind of unsettling quiet.",
            next: "maria_notices_absences"
        },

        maria_notices_absences: {
            speaker: "Narrator",
            text: "It started subtly. First, young Timmy didn't show up for lessons. Then Lily. By the end of the week, three more of her carefully cultivated 'informants' were missing. Their parents offered vague excuses: sickness, family visiting, work in the country.",
            next: "maria_suspicion_grows"
        },

        maria_suspicion_grows: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'This is not coincidence. Pike. Dalton. They are cleaning house, or... something else. These children knew things. Or their parents did.'",
            next: "maria_begins_quiet_investigation"
        },

        maria_begins_quiet_investigation: {
            speaker: "Narrator",
            text: "Maria maintained her serene schoolteacher facade by day. By night, she became a shadow, moving through Perdition's alleys, listening, observing.",
            choices: [
                {
                    text: "Investigate Timmy's disappearance first.",
                    next: "investigate_timmy_disappearance"
                },
                {
                    text: "Try to gather information from other students.",
                    next: "question_other_students"
                }
            ]
        },

        investigate_timmy_disappearance: { // Optional Path
            speaker: "Narrator",
            text: "She started with Timmy's home, a small shack near Pike's office. The place was deserted, a few meager belongings left behind as if in haste. No sign of struggle, but a palpable sense of fear lingered.",
            next: "maria_finds_a_clue_timmy"
        },
        
        maria_finds_a_clue_timmy: {
            speaker: "Narrator",
            text: "Hidden beneath Timmy's cot, Maria found a crudely drawn picture: stick figures of children being led by a large, menacing figure towards a dark hole in a mountain. Pike's mine.",
            next: "question_other_students" // Merge back or continue distinct path
        },

        question_other_students: {
            speaker: "Narrator",
            text: "She subtly questioned her remaining students. Had they seen Timmy or Lily? Had their parents mentioned anything unusual?",
            next: "student_reveals_something"
        },

        student_reveals_something: {
            speaker: "Remaining Student (Whispering)",
            text: "'My pa saw a wagon, Miss Vasquez. Late at night. Headed towards the old North Ridge mine. He said... he thought he heard crying, like little kids. But he said it was just the wind.'",
            next: "maria_connects_dots"
        },

        maria_connects_dots: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'North Ridge mine. Pike's operation. Children crying. The drawing. Child labor. That bastard Pike is using children in his mine.' The pieces clicked into a sickening whole.",
            next: "maria_plans_reconnaissance"
        },
        
        maria_plans_reconnaissance: {
            speaker: "Narrator",
            text: "She needed proof. She needed to see it for herself. But it had to be done carefully. Her cover as a schoolteacher was valuable. Her revenge on Dalton was paramount.",
            next: "recon_preparation_night"
        },

        recon_preparation_night: {
            speaker: "Narrator",
            text: "That night, Maria prepared. Not with books and chalk, but with her Colts, her knife, and dark clothing. The hunter was replacing the teacher.",
            next: "approaching_north_ridge_mine"
        },

        approaching_north_ridge_mine: {
            speaker: "Narrator",
            text: "The North Ridge mine was a scar on the landscape, a place shunned by most townsfolk even in daylight. At night, it was a fortress of shadows and unease. Guards patrolled the perimeter.",
            next: "maria_stealth_approach"
        },
        
        maria_stealth_approach: {
            speaker: "Narrator",
            text: "Maria moved like a wraith, using her knowledge of terrain and shadow, learned in a harder school than any in Perdition. She bypassed the outer patrols with ease.",
            next: "observing_mine_entrance"
        },

        observing_mine_entrance: {
            speaker: "Narrator",
            text: "From a hidden vantage point, she watched the main entrance. She saw small figures, too small to be men, being herded towards a secondary shaft by armed overseers. Their faces were pale in the moonlight.",
            next: "confirming_child_labor"
        },
        
        confirming_child_labor: {
            speaker: "Maria Vasquez",
            text: "(Internal, a cold rage building) 'So it's true. He's not just a murderer and a thief. He's a slaver of children. Dalton works for this monster. Killing Dalton will be a pleasure, but Pike... Pike requires something more elaborate.'",
            choices: [
                {
                    text: "Consider the immediate risk to the children.",
                    next: "maria_considers_children_risk"
                },
                {
                    text: "Focus on how this impacts her revenge plans.",
                    next: "maria_focuses_on_revenge_angle"
                }
            ]
        },

        maria_considers_children_risk: { // Optional
            speaker: "Maria Vasquez",
            text: "(Internal) 'These children are in immediate danger. But a direct assault is suicide, and would expose me. I need leverage. I need to dismantle Pike's operation from within, save them, and get Dalton.'",
            next: "maria_plans_next_steps"
        },

        maria_focuses_on_revenge_angle: { // Optional
            speaker: "Maria Vasquez",
            text: "(Internal) 'Pike's entire operation is built on this. Exposing it could bring him down, and Dalton with him. The children... they are a means to an end. My end for Dalton.' A flicker of something almost like regret, instantly suppressed.",
            next: "maria_plans_next_steps"
        },
        
        maria_plans_next_steps: {
            speaker: "Narrator",
            text: "She couldn't act yet. Not directly. It would compromise her position, her hunt for Dalton. But this knowledge was a weapon. She would bide her time, gather more intelligence, and choose her moment.",
            next: "returning_to_town_unseen"
        },

        returning_to_town_unseen: {
            speaker: "Narrator",
            text: "Maria slipped away as silently as she had come, the image of the child laborers burned into her mind. Her schoolteacher facade would be harder to maintain now, knowing what she knew.",
            next: "maria_feigns_ignorance_next_day"
        },
        
        maria_feigns_ignorance_next_day: {
            speaker: "Narrator",
            text: "The next day at school, Maria greeted her remaining students with her usual calm smile. But her eyes were colder, her mind already calculating, planning.",
            next: "maintaining_cover_dialogue"
        },

        maintaining_cover_dialogue: {
            speaker: "Maria Vasquez",
            text: "'Children, today we will learn about the importance of perseverance, even when things are difficult.' Her words were for them, but her thoughts were on Pike, Dalton, and the long, bloody road to her revenge.",
            next: "parallel_paths_conclusion_intro"
        },
        
        // --- Chapter Conclusion ---
        parallel_paths_conclusion_intro: {
            speaker: "Narrator",
            text: "In Perdition, two confessions had been made, though of vastly different kinds. Elijah grappled with unearned forgiveness, a burden heavier than guilt. Maria embraced a terrible knowledge, steeling herself for the violence she knew was to come.",
            next: "chapter_end_scene_ch6"
        },

        chapter_end_scene_ch6: {
            speaker: "Narrator",
            text: "The town remained oblivious to these undercurrents, its citizens struggling for daily survival. But the arrival of Josiah Truth and Maria's discovery were new threads in Perdition's tangled fate, pulling everyone closer to an inevitable reckoning.",
            choices: [
                {
                    text: "Continue to Chapter 7",
                    next: null,
                    nextChapter: "chapter7"
                }
            ]
        }
    }
};