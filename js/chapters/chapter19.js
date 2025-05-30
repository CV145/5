// Chapter 19: The Reckoning
storyData.chapter19 = {
    name: "Chapter 19",
    title: "The Reckoning",
    scenes: {
        // Scene 1: Aftermath of the Escape - Children Safe
        start: {
            speaker: "Narrator",
            text: "They had emerged from the sacred burial grounds with the rising sun, blinking in the light, hundreds of rescued children dazed but alive. The immediate threat of Pike's flooding was gone, but the war for Perdition was about to enter its bloodiest phase.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 19');
            },
            next: "securing_the_children_briefly"
        },

        // Scene 2: Securing the Children
        securing_the_children_briefly: {
            speaker: "Narrator",
            text: "Silas Rivers, though shattered by Samuel's death, organized his remaining gang members to guard the children in a defensible ravine near the burial site. Elijah and Jacob stayed with them initially, offering comfort and aid, while Maria and Doc scouted towards Perdition.",
            next: "reports_of_garrett_forces_mobilizing"
        },

        // Scene 3: Garrett Mobilizes
        reports_of_garrett_forces_mobilizing: {
            speaker: "Rivers Gang Scout",
            text: "'Boss! Sheriff Garrett's rounding up every man Pike's got left! They're armed for war, heading this way! And Pike... someone saw Pike loading saddlebags, looks like he's aiming to bolt with whatever he can carry!'",
            next: "decision_final_confrontation_or_flight"
        },

        // Scene 4: The Decision
        decision_final_confrontation_or_flight: {
            speaker: "Silas Rivers",
            text: "'He ain't getting away.' Silas's voice was cold iron. 'Not after Samuel. Not after everything. We make our stand in Perdition. Lure Garrett in, finish this.' He looked at the protagonists. 'You four in? Or you running?'",
            next: "protagonists_commit_to_fight"
        },

        // Scene 5: Protagonists Commit
        protagonists_commit_to_fight: {
            speaker: "Elijah Cross",
            text: "'We started this. We'll see it through. For Crane. For Samuel. For all those children.' Jacob nodded grimly. Maria's eyes glinted. Doc sighed, knowing escape was no longer an option.",
            next: "return_to_perdition_battle_lines_drawn"
        },

        // Scene 6: Return to Perdition - Battle Lines
        return_to_perdition_battle_lines_drawn: {
            speaker: "Narrator",
            text: "They returned to a Perdition bracing for war. The Rivers Gang, depleted but vengeful, fortified key positions. Garrett's men, a mix of Pike's enforcers and deputized thugs, were already probing the town's perimeter.",
            next: "battle_for_perdition_begins_ch19"
        },

        // Scene 7-12: The Battle for Perdition (Montage)
        battle_for_perdition_begins_ch19: {
            speaker: "Narrator",
            text: "Gunfire erupted along Main Street. Jacob, fighting alongside his father's men, showed a grim proficiency born of desperation and loss. Elijah, setting aside his preacher's collar, fought to protect the few remaining townsfolk brave enough to resist.",
            next: "doc_sets_up_field_hospital"
        },
        doc_sets_up_field_hospital: {
            speaker: "Narrator",
            text: "Doc Whitmore, sober and efficient in the crisis, established a makeshift field hospital in the battered general store, bullets whining outside as he tended to the wounded from both sides, his focus entirely on the medical challenge.",
            next: "maria_focuses_on_pike_movements"
        },
        maria_focuses_on_pike_movements: {
            speaker: "Narrator",
            text: "Maria fought with cold precision, but her main goal was locating Pike. She knew he wouldn't stay for the main battle if he had a way out. She needed his documents, his secrets.",
            next: "silas_rivers_fights_like_a_demon"
        },
        silas_rivers_fights_like_a_demon: {
            speaker: "Narrator",
            text: "Silas Rivers fought like a man possessed, his grief for Samuel fueling a terrifying rage. He sought out Garrett, bellowing his name amidst the chaos.",
            next: "garrett_vs_silas_confrontation"
        },
        garrett_vs_silas_confrontation: {
            speaker: "Narrator",
            text: "The two leaders finally clashed near the burnt-out church. Their fight was brutal, personal. Garrett, younger and backed by more men, gained the upper hand.",
            next: "silas_rivers_mortally_wounded"
        },
        
        // Scene 13: Silas Mortally Wounded
        silas_rivers_mortally_wounded: {
            speaker: "Narrator",
            text: "Silas fell, a bullet tearing through his chest. Garrett stood over him, preparing the finishing shot.",
            next: "jacob_witnesses_father_fall_ch19"
        },
        jacob_witnesses_father_fall_ch19: {
            speaker: "Jacob Rivers",
            text: "'PA!' Jacob screamed, fighting his way towards them, but he was too far.",
            next: "doc_reaches_silas_first"
        },

        // Scene 15: Doc Reaches Silas
        doc_reaches_silas_first: {
            speaker: "Narrator",
            text: "Doc Whitmore, seeing an opportunity even in tragedy, reached Silas first under a brief lull in covering fire. He knelt beside the dying outlaw.",
            next: "doc_to_silas_last_chance_for_relief"
        },

        doc_to_silas_last_chance_for_relief: {
            speaker: "Doc Whitmore",
            text: "'Silas... you're done for. But I can ease the pain... for a price. Your hidden stash... where is it? Your last transaction, old man.'",
            choices: [
                {
                    text: "Silas, defiant, refuses to speak.",
                    next: "silas_defiant_death_ch19"
                },
                {
                    text: "Silas, pragmatic, makes a deal.",
                    next: "silas_makes_deathbed_deal_ch19"
                }
            ]
        },

        // Scene 17: Silas Defiant (Optional)
        silas_defiant_death_ch19: {
            speaker: "Silas Rivers",
            text: "(Coughing blood, glaring at Doc) 'Go to hell, vulture... My son... Jacob... he's better than... all of you...' He sagged, life fading.",
            next: "jacob_reaches_dying_father_ch19"
        },

        // Scene 18: Silas Makes Deal (Optional)
        silas_makes_deathbed_deal_ch19: {
            speaker: "Silas Rivers",
            text: "(Weakly) 'Under the... Clayton jailhouse floor... North corner... For Samuel... ease his pa's passing, damn you...' He managed a bloody grin. 'Get paid, Doctor... get paid...'",
            next: "doc_administers_morphine_takes_info"
        },
        doc_administers_morphine_takes_info: { // If deal made
            speaker: "Narrator",
            text: "Doc administered a strong dose of morphine. As Silas's pain eased into oblivion, Doc pocketed the information, a final, grim payment secured.",
            next: "jacob_reaches_dying_father_ch19"
        },

        // Scene 20: Jacob Reaches His Dying Father
        jacob_reaches_dying_father_ch19: {
            speaker: "Narrator",
            text: "Jacob finally reached his father's side as Garrett was driven back by renewed gang fire. Silas's eyes, dimming, found Jacob.",
            next: "silas_last_words_to_jacob_ch19"
        },
        silas_last_words_to_jacob_ch19: {
            speaker: "Silas Rivers",
            text: "'Samuel... good boy... You... you walk your own path, Jacob... Be... better...' His eyes fluttered closed. Silas Rivers was dead.",
            next: "jacob_grief_and_resolve_ch19"
        },
        jacob_grief_and_resolve_ch19: {
            speaker: "Narrator",
            text: "A wave of grief, complex and profound, hit Jacob. His father, the monster, the patriarch, was gone. The battle raged on, but something in Jacob had irrevocably shifted.",
            next: "maria_spots_pike_fleeing"
        },

        // Scene 23: Maria Spots Pike Fleeing
        maria_spots_pike_fleeing: {
            speaker: "Maria Vasquez",
            text: "(To herself, spotting movement near the edge of town) 'Pike. And those saddlebags look heavy. Time to collect.'",
            next: "maria_pursues_pike_silently"
        },

        // Scene 24: Maria's Pursuit
        maria_pursues_pike_silently: {
            speaker: "Narrator",
            text: "Leaving the main battle, Maria slipped away, tracking Pike as he made his way towards the distant train station, clearly planning to escape Perdition with his ill-gotten gains and secrets.",
            next: "pike_at_train_station_waits"
        },

        // Scene 25: Pike at the Train Station
        pike_at_train_station_waits: {
            speaker: "Narrator",
            text: "Pike reached the deserted train station, glancing nervously back towards Perdition. He wasn't just fleeing; he was waiting. Meeting someone.",
            next: "general_morrison_arrives_at_station"
        },

        // Scene 26: General Morrison Arrives
        general_morrison_arrives_at_station: {
            speaker: "Narrator",
            text: "A lone rider approached from the east. As he drew closer, his uniform became clear: a General's insignia. It was Colonel Morrison from the Prologue, older, harder, and clearly in a position of immense power.",
            next: "morrison_greets_pike_coldly"
        },
        morrison_greets_pike_coldly: {
            speaker: "General Morrison",
            text: "'Pike. You've made a considerable mess. The documents, if you please. Washington is... displeased with this public spectacle.'",
            next: "pike_hands_over_documents_fearfully"
        },
        pike_hands_over_documents_fearfully: {
            speaker: "Pike",
            text: "'General, I... it was unforeseen! These outlaws, the interference... Here, the ledgers, the research notes on the amalgam... everything you contracted for.'",
            next: "maria_makes_her_move_on_pike_morrison"
        },

        // Scene 29: Maria Confronts Pike and Morrison
        maria_makes_her_move_on_pike_morrison: {
            speaker: "Maria Vasquez",
            text: "'A touching reunion. But I believe those documents have a prior claim.' Maria stepped from the shadows, Colts leveled.",
            next: "morrison_assesses_maria_calmly"
        },
        morrison_assesses_maria_calmly: {
            speaker: "General Morrison",
            text: "'And you are?' His voice was calm, but his eyes were like ice chips, assessing her threat.",
            next: "maria_incapacitates_pike_begins_torture"
        },

        // Scene 31: Maria Tortures Pike
        maria_incapacitates_pike_begins_torture: {
            speaker: "Narrator",
            text: "Maria ignored Morrison, shooting Pike expertly in both kneecaps. As Pike screamed, she dragged him behind a stack of crates. 'We're going to have a long talk, Cornelius, about your other operations. Your partners. Your hidden accounts.'",
            next: "morrison_watches_unconcerned_for_pike"
        },
        morrison_watches_unconcerned_for_pike: {
            speaker: "Narrator",
            text: "General Morrison watched, making no move to help Pike. His only concern was the documents Pike had dropped, and Maria herself. Pike's screams began to echo from behind the crates.",
            next: "elijah_arrives_at_station_finds_scene"
        },

        // Scene 33: Elijah Arrives
        elijah_arrives_at_station_finds_scene: {
            speaker: "Narrator",
            text: "Elijah, having heard Pike had fled and suspecting Maria's pursuit, arrived at the station to the horrifying sounds of Pike's agony and Maria's cold, questioning voice.",
            next: "elijah_confronts_maria_over_torture"
        },
        elijah_confronts_maria_over_torture: {
            speaker: "Elijah Cross",
            text: "'Maria! In God's name, what are you doing?! This isn't justice, it's savagery!' He saw Pike, mutilated, barely conscious.",
            next: "maria_cold_suggestion_to_elijah"
        },

        // Scene 35: Maria's Cold Suggestion
        maria_cold_suggestion_to_elijah: {
            speaker: "Maria Vasquez",
            text: "'He's given me enough names and numbers to dismantle a dozen corrupt enterprises, Preacher. Valuable information.' She gestured towards Morrison. 'Kill them both. Pike's hidden fortunes, Morrison's government gold... We could be rich. Start new lives, truly new.'",
            choices: [
                {
                    text: "Elijah: 'This is madness! He needs a trial!'",
                    next: "elijah_insists_on_trial_for_pike"
                },
                {
                    text: "Elijah: Consider her offer for a split second, then reject.",
                    next: "elijah_rejects_maria_bloody_offer"
                }
            ]
        },

        // Scene 36: Elijah Insists on Trial (Optional or Converging)
        elijah_insists_on_trial_for_pike: {
            speaker: "Elijah Cross",
            text: "'We are not murderers, Maria! He will face a court of law for his crimes! This barbarity ends now!'",
            next: "morrison_sees_opening_to_escape"
        },

        // Scene 37: Elijah Rejects Offer (Optional)
        elijah_rejects_maria_bloody_offer: {
            speaker: "Narrator",
            text: "For a sickening moment, the allure of wealth, of power to do good with ill-gotten gains, tempted Elijah. He violently shoved it away. 'No. We are better than this.'",
            next: "morrison_sees_opening_to_escape"
        },

        // Scene 38: Morrison Escapes
        morrison_sees_opening_to_escape: {
            speaker: "Narrator",
            text: "During the heated argument between Elijah and Maria, General Morrison, ever the pragmatist, saw his chance. He grabbed the fallen government documents and slipped away towards his horse, disappearing into the chaos of the ongoing town battle.",
            next: "doc_whitmore_separate_encounter_morrison_intro"
        },

        // Scene 39: Doc's Side Deal - Intro
        doc_whitmore_separate_encounter_morrison_intro: {
            speaker: "Narrator",
            text: "Meanwhile, Doc Whitmore, having 'secured' Pike's abandoned mine office after the alarm, had looted a substantial quantity of medical supplies and, more importantly, processed opium and laudanum from Pike's hidden stores.",
            next: "doc_intercepts_fleeing_morrison"
        },
        doc_intercepts_fleeing_morrison: {
            speaker: "Narrator",
            text: "As Morrison made his hasty retreat from the train station, he almost ran into Doc, who appeared from an alley, medical bag in hand, looking remarkably composed.",
            next: "doc_offers_deal_to_morrison"
        },

        // Scene 41: Doc Offers Morrison a Deal
        doc_offers_deal_to_morrison: {
            speaker: "Doc Whitmore",
            text: "'General Morrison, I presume? A man of your stature... you'll need reliable suppliers for your... 'research projects'. I happen to have access to certain... compounds. And an antidote for mercury poisoning, should your experiments ever go awry. For a government contract, of course.'",
            next: "morrison_recognizes_opportunist_agrees_deal"
        },

        // Scene 42: Morrison Agrees
        morrison_recognizes_opportunist_agrees_deal: {
            speaker: "General Morrison",
            text: "'You're a vulture, Doctor. But perhaps a useful one.' Morrison scribbled a contact on a piece of paper. 'Washington will be in touch. Discretion is paramount.' He spurred his horse and vanished.",
            next: "doc_secures_his_future_ch19"
        },
        doc_secures_his_future_ch19: {
            speaker: "Doc Whitmore",
            text: "(Internal, smiling faintly) 'Indeed it is, General. Indeed it is.' He pocketed the contact, his future considerably more lucrative.",
            next: "back_at_station_pike_secured_maria_furious"
        },

        // Scene 44: Back at the Station
        back_at_station_pike_secured_maria_furious: {
            speaker: "Narrator",
            text: "Back at the station, Pike, groaning and bleeding, was securely bound. Maria was furious at Morrison's escape and Elijah's interference.",
            next: "maria_to_elijah_you_fool"
        },
        maria_to_elijah_you_fool: {
            speaker: "Maria Vasquez",
            text: "'You fool, Elijah! Morrison was the real prize! Those documents he took... they were power! And Pike alive is a liability!'",
            next: "elijah_stands_by_his_principles"
        },
        elijah_stands_by_his_principles: {
            speaker: "Elijah Cross",
            text: "'He will face earthly justice, Maria. That is the only power that matters if we are to be better than them. We take him to the nearest Federal Marshal.'",
            next: "end_of_battle_in_perdition"
        },
        
        // Scene 47: End of the Battle
        end_of_battle_in_perdition: {
            speaker: "Narrator",
            text: "Word arrived from town: the battle was over. Garrett was dead, his forces broken. The Rivers Gang had paid a heavy price, but Perdition was, for the moment, free of Pike's direct control.",
            next: "jacob_finds_them_at_station"
        },

        // Scene 48: Jacob Finds Them
        jacob_finds_them_at_station: {
            speaker: "Jacob Rivers",
            text: "'Elijah! Maria! Pa... Pa is dead. But the town... it's ours, I think.' He saw Pike. 'What happened here?'",
            next: "reckoning_achieved_at_a_cost"
        },

        // Scene 49: Reckoning Achieved, But Costly
        reckoning_achieved_at_a_cost: {
            speaker: "Narrator",
            text: "The reckoning had come. Pike was captured, his empire in Perdition shattered. But Silas Rivers was dead, Samuel Crane was dead, General Morrison had escaped with his secrets, and the protagonists themselves were deeply scarred, their alliance strained by conflicting moralities and ambitions.",
            next: "chapter_end_scene_ch19"
        },

        // Scene 50: Chapter End - Uneasy Victory
        chapter_end_scene_ch19: {
            speaker: "Narrator",
            text: "As the sun cast long, bloody shadows over the train station, the survivors faced an uncertain future. Justice for Pike seemed possible, but the larger network of corruption remained, and Doc Whitmore had just made a deal with the devil himself. The price of Perdition's 'freedom' was steep, and still being counted.",
            choices: [
                {
                    text: "Continue to Chapter 20",
                    next: null,
                    nextChapter: "chapter20"
                }
            ]
        }
    }
};