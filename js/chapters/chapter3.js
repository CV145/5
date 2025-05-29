// Chapter 3: The Gun and the Chalk
storyData.chapter3 = {
    name: "Chapter 3",
    title: "The Gun and the Chalk",
    scenes: {
        // Scene 1: Maria's Arrival - The Schoolteacher
        start: {
            speaker: "Narrator",
            text: "A different kind of traveler stepped off the noon stage a week after Doc Whitmore's arrival. She was comely, dressed in modest but neat attire, and carried a valise filled with books and slates. 'Miss Maria Vasquez,' she introduced herself to the station agent, 'the new schoolteacher for Perdition.'",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 3');
            },
            next: "maria_hidden_luggage"
        },

        // Scene 2: Hidden Luggage
        maria_hidden_luggage: {
            speaker: "Narrator",
            text: "Her other trunk, heavier and securely locked, contained no books. Instead, nestled among spare clothing were well-oiled twin Colts, a Winchester rifle, and enough ammunition to start a small war. Maria Vasquez was many things, but a simple schoolteacher was not one of them.",
            next: "maria_observes_perdition"
        },

        // Scene 3: Maria Observes Perdition
        maria_observes_perdition: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'This town stinks of fear and desperation. Good. People are easier to manage when they're afraid.' Her eyes, sharp and missing nothing, scanned the faces of the few townsfolk who watched her arrival.",
            choices: [
                {
                    text: "Assess the children she sees.",
                    next: "assess_children_perdition"
                },
                {
                    text: "Look for signs of Pike's influence.",
                    next: "look_for_pike_signs"
                },
                {
                    text: "Focus on securing her lodgings.",
                    next: "maria_secures_lodging"
                }
            ]
        },

        // Scene 4: Assess Children (Optional Insight)
        assess_children_perdition: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Thin. Wary. Some look like they haven't seen a decent meal in weeks. Their parents will be grateful for any attention paid to them. Trust will be easy to earn, and easier to exploit.'",
            next: "maria_secures_lodging"
        },

        // Scene 5: Look for Pike's Influence (Optional Insight)
        look_for_pike_signs: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'The few men who look well-fed and confident... they walk with a swagger. Pike's men, likely. I'll need to know them all. And who they answer to, besides Pike himself.'",
            next: "maria_secures_lodging"
        },

        // Scene 6: Maria Secures Lodging
        maria_secures_lodging: {
            speaker: "Narrator",
            text: "She inquired about the schoolhouse and was directed to a small, dusty cottage attached to it, recently vacated. It was meager, but it would serve. Privacy was her main concern.",
            next: "unpacking_her_tools"
        },

        // Scene 7: Unpacking Her True Tools
        unpacking_her_tools: {
            speaker: "Narrator",
            text: "Once alone, Maria carefully unpacked her 'teaching supplies' – the guns. She checked their mechanisms, the weight familiar and comforting in her hands. These were the tools of her true trade: vengeance.",
            next: "the_target_jim_dalton"
        },

        // Scene 8: The Target - Jim Dalton
        the_target_jim_dalton: {
            speaker: "Maria Vasquez",
            text: "(Internal, looking at a faded photograph of her younger sister, Sofia) 'Jim Dalton. You took her from me two years ago. Now, I've found you. And Perdition will be your grave.'",
            next: "first_day_at_school"
        },

        // Scene 9: Setting up the Schoolhouse
        first_day_at_school: {
            speaker: "Narrator",
            text: "The next morning, Maria opened the schoolhouse. It was a single, dilapidated room, thick with dust and neglect. She spent hours cleaning, arranging the few rickety desks, and making it resemble a place of learning.",
            next: "students_arrive_hesitantly"
        },

        // Scene 10: Students Arrive
        students_arrive_hesitantly: {
            speaker: "Narrator",
            text: "A handful of children arrived, pushed by hopeful parents or drawn by reluctant curiosity. They were a motley crew, ranging in age from six to nearly twelve, their clothes patched, their faces smudged but alight with cautious interest.",
            next: "maria_charming_facade"
        },
        
        // Scene 11: Maria's Charming Facade
        maria_charming_facade: {
            speaker: "Maria Vasquez",
            text: "'Welcome, children! I am Miss Vasquez. It's so wonderful to see so many bright faces ready to learn!' Her smile was warm, her voice gentle – a carefully constructed mask.",
            next: "initial_lessons_observation"
        },

        // Scene 12: Initial Lessons and Observation
        initial_lessons_observation: {
            speaker: "Narrator",
            text: "She began with simple lessons – letters, numbers, stories. But all the while, Maria observed. Who was shy? Who was bold? Who spoke of their families, their fathers' work? She was gathering intelligence, one innocent remark at a time.",
            next: "searching_for_dalton_info_subtly"
        },
        
        // Scene 13: Searching for Dalton - Subtle Inquiries
        searching_for_dalton_info_subtly: {
            speaker: "Narrator",
            text: "In the following days, Maria subtly steered conversations. 'Your father works at the mine? That must be very important work! Who is the foreman there? A Mr. Dalton, perhaps?'",
            next: "dalton_identified_as_enforcer"
        },

        // Scene 14: Dalton Identified as Pike's Enforcer
        dalton_identified_as_enforcer: {
            speaker: "Child 1 (Timidly)",
            text: "'Mr. Dalton? Yes, ma'am. He's Mr. Pike's right hand. Pa says he's a hard man. Makes sure everyone does what Mr. Pike wants.'",
            next: "maria_internal_confirmation"
        },

        // Scene 15: Maria's Internal Confirmation
        maria_internal_confirmation: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Pike's enforcer. Good. Close to power. Close to my vengeance. Now, to find his weaknesses.'",
            next: "identifying_key_children"
        },

        // Scene 16: Identifying Key Children
        identifying_key_children: {
            speaker: "Narrator",
            text: "Maria identified three children whose parents had direct ties to Pike or his closest men: young Timmy, whose father was a guard at Pike's office; Lily, whose mother cleaned for Pike; and quiet Samuel, whose older brother was one of Dalton's cronies.",
            next: "cultivating_timmy"
        },

        // Scene 17: Cultivating Timmy - Praise and Small Gifts
        cultivating_timmy: {
            speaker: "Maria Vasquez",
            text: "'Timmy, your drawing is so clever! You have a keen eye for detail. Here, a piece of candy for such good work.' A little praise, a small treat – trust was easily bought.",
            next: "timmy_shares_information"
        },

        // Scene 18: Timmy Shares Information
        timmy_shares_information: {
            speaker: "Timmy",
            text: "'Miss Vasquez, guess what? Pa said Mr. Pike is expecting a big shipment tonight! Lots of guards will be there!' He beamed, eager for more praise.",
            next: "maria_notes_info"
        },

        // Scene 19: Maria Notes the Information
        maria_notes_info: {
            speaker: "Maria Vasquez",
            text: "'Is that so, Timmy? How exciting! You're a very observant boy.' (Internal) 'A shipment. Valuable. Dalton will be there.'",
            next: "cultivating_lily"
        },

        // Scene 20: Cultivating Lily - False Sympathy
        cultivating_lily: {
            speaker: "Maria Vasquez",
            text: "'Lily, dear, you seem sad today. Is everything alright at home?' Maria’s voice was honey-laced with feigned concern. Vulnerability was a door she knew how to open.",
            next: "lily_divulges_details"
        },
        
        // Scene 21: Lily Divulges Pike's Habits
        lily_divulges_details: {
            speaker: "Lily",
            text: "'Ma says Mr. Pike has been angry lately. Shouting a lot. He meets with strange men in his study late at night. Ma has to clean up cigar smoke and spilled whiskey.'",
            next: "maria_files_away_detail"
        },

        // Scene 22: Maria Files Away the Detail
        maria_files_away_detail: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Late night meetings. Irritable. Perhaps his operations aren't as smooth as he'd like. Or perhaps he's expecting trouble.'",
            next: "cultivating_samuel"
        },

        // Scene 23: Cultivating Samuel - Shared 'Secrets'
        cultivating_samuel: {
            speaker: "Narrator",
            text: "With Samuel, whose brother ran with Dalton, Maria used a different tactic. She shared small, harmless 'secrets' with him, making him feel important and trusted.",
            next: "samuel_boasts_brother"
        },

        // Scene 24: Samuel Boasts About His Brother
        samuel_boasts_brother: {
            speaker: "Samuel (Child)",
            text: "'My brother, Tom, he ain't afraid of nobody! Not even Mr. Dalton. He told me Mr. Dalton carries a special kind of knife, one with a bird feather on the handle. Says it's his lucky charm.'",
            next: "maria_recognizes_knife"
        },

        // Scene 25: Maria Recognizes the Knife Description
        maria_recognizes_knife: {
            speaker: "Maria Vasquez",
            text: "(Internal, a jolt of cold fury) 'A bird feather... Sofia collected feathers. That bastard. He took a trophy.' Her resolve hardened.",
            choices: [
                {
                    text: "Press Samuel for more details about Dalton.",
                    next: "press_samuel_for_more"
                },
                {
                    text: "Praise Samuel to reinforce his trust.",
                    next: "praise_samuel_for_info"
                }
            ]
        },
        
        // Scene 26: Press Samuel for More (Optional)
        press_samuel_for_more: {
            speaker: "Maria Vasquez",
            text: "'That's very interesting, Samuel. Does your brother say where Mr. Dalton keeps this special knife? Or when he carries it?'",
            next: "samuel_hesitates_then_shares"
        },

        // Scene 27: Samuel Hesitates, Then Shares More
        samuel_hesitates_then_shares: {
            speaker: "Samuel (Child)",
            text: "'He... he keeps it in his left boot mostly. Says it's for emergencies. My brother says Mr. Dalton is quick with it.'",
            next: "praise_samuel_for_info"
        },

        // Scene 28: Praise Samuel
        praise_samuel_for_info: {
            speaker: "Maria Vasquez",
            text: "'You're a very good secret-keeper, Samuel. And very brave to share such important things with me. This will be our special secret, alright?'",
            next: "the_web_of_informants"
        },
        
        // Scene 29: The Web of Unwitting Informants
        the_web_of_informants: {
            speaker: "Narrator",
            text: "Days turned into a week. Maria, the beloved Miss Vasquez, wove a web of innocent informants. Children, eager for a kind word or a sweet, unknowingly fed her scraps of information about Pike's operations, Dalton's routines, and the undercurrents of Perdition.",
            next: "one_child_grows_suspicious_intro"
        },

        // Scene 30: One Child Grows Suspicious - Billy
        one_child_grows_suspicious_intro: {
            speaker: "Narrator",
            text: "But not all children were so easily swayed. A boy named Billy, older and sharper than most, began to notice the pointed nature of Miss Vasquez's questions.",
            next: "billy_questions_maria"
        },
        
        // Scene 31: Billy Questions Maria
        billy_questions_maria: {
            speaker: "Billy (Suspicious Child)",
            text: "'Miss Vasquez? Why do you ask so much about Mr. Pike and his men? My pa says it ain't healthy to be too curious in Perdition.'",
            next: "maria_cold_assessment"
        },

        // Scene 32: Maria's Cold Assessment
        maria_cold_assessment: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'This one is a problem. His suspicion could unravel everything. He needs to be silenced, but not in a way that draws attention.'",
            next: "maria_private_word_billy"
        },

        // Scene 33: Maria Asks for a Private Word
        maria_private_word_billy: {
            speaker: "Maria Vasquez",
            text: "'Billy, could you stay after class for a moment? I have something important to discuss with you.' Her smile remained, but her eyes were chips of ice.",
            next: "the_threat_to_billy"
        },
        
        // Scene 34: The Threat
        the_threat_to_billy: {
            speaker: "Narrator",
            text: "When they were alone, Maria's demeanor shifted. The warmth vanished, replaced by a chilling intensity.",
            next: "maria_delivers_threat"
        },

        // Scene 35: Maria Delivers the Threat
        maria_delivers_threat: {
            speaker: "Maria Vasquez",
            text: "'Billy, you're a smart boy. Smart enough to know that some questions are dangerous. Your father works at the general store, doesn't he? And your mother takes in laundry. It would be a terrible shame if... business dried up for them. Or if an accident happened.'",
            next: "billy_understands"
        },
        
        // Scene 36: Billy Understands
        billy_understands: {
            speaker: "Narrator",
            text: "Billy's eyes widened, fear replacing suspicion. He understood. The kind schoolteacher was not what she seemed.",
            next: "billy_silenced"
        },

        // Scene 37: Billy is Silenced
        billy_silenced: {
            speaker: "Billy (Suspicious Child)",
            text: "'I... I won't say nothin', Miss Vasquez. I promise.' His voice was a hoarse whisper.",
            next: "maria_feigned_kindness_returns"
        },

        // Scene 38: Maria's Feigned Kindness Returns
        maria_feigned_kindness_returns: {
            speaker: "Maria Vasquez",
            text: "'Good boy, Billy. I knew you were smart.' She patted his head, her smile back in place, now more menacing than comforting. 'Now run along. And remember our little chat.'",
            next: "sheriff_garrett_visits_school"
        },

        // Scene 39: Sheriff Garrett Visits the School
        sheriff_garrett_visits_school: {
            speaker: "Narrator",
            text: "A few days later, Sheriff Tom Garrett paid a visit to the schoolhouse. He was a tall, imposing man, but his friendly demeanor seemed slightly off, his eyes too probing.",
            next: "garrett_questions_maria1"
        },
        
        // Scene 40: Garrett's Questions
        garrett_questions_maria1: {
            speaker: "Sheriff Tom Garrett",
            text: "'Miss Vasquez, just checking in on our new schoolteacher. Heard good things. Though, it's unusual for someone with your... polish... to end up in a place like Perdition. What brings you here, truly?'",
            next: "maria_deflects_garrett1"
        },

        // Scene 41: Maria Deflects
        maria_deflects_garrett1: {
            speaker: "Maria Vasquez",
            text: "'A desire to make a difference, Sheriff. And perhaps a change of scenery.' She offered him her most demure smile. 'Perdition seemed like a town that could use a dedicated teacher.'",
            choices: [
                {
                    text: "Subtly try to gather information on Garrett.",
                    next: "maria_probes_garrett"
                },
                {
                    text: "Maintain a purely professional and polite facade.",
                    next: "maria_polite_facade_garrett"
                }
            ]
        },

        // Scene 42: Maria Probes Garrett (Optional)
        maria_probes_garrett: {
            speaker: "Maria Vasquez",
            text: "'It must be difficult, Sheriff, keeping order in a town facing such... economic hardships. Do you find Mr. Pike a supportive presence in that regard?'",
            next: "garrett_noncommittal_response"
        },
        
        // Scene 43: Maria Maintains Polite Facade
        maria_polite_facade_garrett: {
            speaker: "Narrator",
            text: "Maria kept her answers brief and her smile pleasant, volunteering no information Garrett didn't directly ask for. She sensed he was testing her.",
            next: "garrett_noncommittal_response"
        },

        // Scene 44: Garrett's Noncommittal Response
        garrett_noncommittal_response: {
            speaker: "Sheriff Tom Garrett",
            text: "'Mr. Pike is a businessman. He looks out for his interests, like anyone else.' Garrett's eyes didn't leave hers. 'And I look out for the town's. That includes knowing who's in it, and why.'",
            next: "garrett_comments_on_luggage"
        },

        // Scene 45: Garrett Comments on Her Luggage
        garrett_comments_on_luggage: {
            speaker: "Sheriff Tom Garrett",
            text: "'That was a mighty heavy trunk you brought in for a schoolteacher, Miss Vasquez. Full of books, I presume?' His tone was light, but the question was pointed.",
            next: "maria_explains_luggage"
        },
        
        // Scene 46: Maria's Explanation
        maria_explains_luggage: {
            speaker: "Maria Vasquez",
            text: "'Indeed, Sheriff. A teacher can never have too many books. Some are quite old and heavy – family heirlooms, you might say.' She met his gaze evenly, not a flicker of deception in her eyes.",
            next: "garrett_departs_suspiciously"
        },

        // Scene 47: Garrett Departs, Still Suspicious
        garrett_departs_suspiciously: {
            speaker: "Sheriff Tom Garrett",
            text: "'Well, welcome to Perdition, Miss Vasquez. I hope you find it... educational.' He tipped his hat and left, but Maria knew this was not the last she'd see of Sheriff Garrett.",
            next: "maria_reflects_on_garrett"
        },

        // Scene 48: Maria Reflects on Garrett
        maria_reflects_on_garrett: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'He's suspicious. More observant than I expected. He could be a problem. Or... perhaps, another tool, if handled correctly. He works for Pike, or is he his own man?'",
            next: "end_of_day_maria"
        },

        // Scene 49: End of Day - Plans Solidifying
        end_of_day_maria: {
            speaker: "Narrator",
            text: "As night fell, Maria reviewed her mental ledger. Dalton was Pike's enforcer. Children were her eyes and ears. Billy was silenced. Sheriff Garrett was a potential complication. Her plans for Jim Dalton were taking shape, cloaked in chalk dust and innocent smiles.",
            next: "chapter_end_scene_maria"
        },

        // Scene 50: Chapter End
        chapter_end_scene_maria: {
            speaker: "Narrator",
            text: "Maria Vasquez, the schoolteacher, was a phantom. Maria Vasquez, the avenger, was methodically laying the groundwork for a storm of her own making in the heart of Perdition. Her revenge would be patient, precise, and devastating.",
            choices: [
                {
                    text: "Continue to Chapter 4",
                    next: null,
                    nextChapter: "chapter4"
                }
            ]
        }
    }
};