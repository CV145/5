// Chapter 18: Baptism by Fire
storyData.chapter18 = {
    name: "Chapter 18",
    title: "Baptism by Fire",
    scenes: {
        // Scene 1: Deep Within the Burial Tunnels
        start: {
            speaker: "Narrator",
            text: "The air in the ancient burial tunnels was cold, heavy with the silence of centuries and the scent of damp earth. Jacob led the way, his makeshift torch casting flickering shadows on walls adorned with faded pictographs. Behind him, Elijah, Maria, and Doc ushered the first group of rescued children, their small, frightened faces pale in the gloom.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 18');
            },
            next: "children_fear_and_hope_ch18"
        },

        // Scene 2: Children's Fear
        children_fear_and_hope_ch18: {
            speaker: "Narrator",
            text: "The children, already traumatized by their captivity in Pike's mine, clung to each other, whimpering softly. Samuel Rivers, Jacob's younger brother who had joined their desperate infiltration, moved amongst them, offering what little comfort he could.",
            next: "distant_rumble_approaching_danger"
        },

        // Scene 3: Distant Rumble - Pike's Retaliation
        distant_rumble_approaching_danger: {
            speaker: "Narrator",
            text: "A low rumble vibrated through the stone beneath their feet, growing steadily louder. It wasn't thunder. It was the sound of a great volume of water, moving fast.",
            next: "maria_realizes_pike_plan"
        },

        maria_realizes_pike_plan: {
            speaker: "Maria Vasquez",
            text: "'Pike!' Maria’s voice was sharp. 'He knows we're in these lower tunnels! He's flooding them! Diverting the river!'",
            next: "water_begins_to_seep_in"
        },

        // Scene 5: The Flood Begins
        water_begins_to_seep_in: {
            speaker: "Narrator",
            text: "Almost immediately, icy water began to seep in from cracks in the tunnel floor, quickly rising to their ankles. Panic erupted among the children.",
            next: "elijah_calms_children_as_water_rises"
        },

        elijah_calms_children_as_water_rises: {
            speaker: "Elijah Cross",
            text: "'Courage, little ones! Stay together! We must move higher!' His voice, though strained, cut through their fear.",
            next: "race_against_the_rising_tide"
        },

        // Scene 7-10: Race Against the Water (Montage)
        race_against_the_rising_tide: {
            speaker: "Narrator",
            text: "It became a desperate race. The water surged, now waist-deep in lower sections. The current tugged at the smaller children, threatening to sweep them away.",
            next: "protagonists_struggle_to_save_children"
        },
        protagonists_struggle_to_save_children: {
            speaker: "Narrator",
            text: "Jacob and Maria took the lead, searching for higher passages, while Elijah and Doc struggled to keep the children moving, lifting the weakest ones.",
            next: "maria_organizes_human_chains_ch18"
        },
        maria_organizes_human_chains_ch18: {
            speaker: "Maria Vasquez",
            text: "'Hold hands! Form a chain! Don't let go of the person next to you!' Maria's commands were sharp, practical, cutting through the chaos. The children, sensing authority, obeyed.",
            next: "water_level_critical_some_children_trapped"
        },
        
        // Scene 11: Children Trapped
        water_level_critical_some_children_trapped: {
            speaker: "Narrator",
            text: "They reached a narrow chokepoint where the tunnel rose steeply. The water was now chest-high and rising fast. A small group of the weakest children at the back of the line faltered, about to be overwhelmed by a sudden surge.",
            next: "samuel_rivers_sees_danger"
        },

        // Scene 12: Samuel Sees the Danger
        samuel_rivers_sees_danger: {
            speaker: "Samuel Rivers (Younger Brother)",
            text: "'The little ones! They can't make it!' Samuel cried out, seeing them lose their footing.",
            next: "samuel_heroic_decision_ch18"
        },

        // Scene 13: Samuel's Heroic Decision
        samuel_heroic_decision_ch18: {
            speaker: "Narrator",
            text: "Without a second thought, Samuel plunged back into the churning water, fighting the current to reach the struggling children. He pushed them, one by one, towards Jacob and Maria's outstretched hands.",
            choices: [
                {
                    text: "Jacob shouts a warning to Samuel.",
                    next: "jacob_warns_samuel_ch18"
                },
                {
                    text: "Maria tries to reach for Samuel.",
                    next: "maria_tries_to_reach_samuel_ch18"
                }
            ]
        },

        // Scene 14: Jacob Warns Samuel (Optional)
        jacob_warns_samuel_ch18: {
            speaker: "Jacob Rivers",
            text: "'Samuel, no! The current's too strong! Get back!'",
            next: "samuel_saves_last_child"
        },

        // Scene 15: Maria Tries to Reach Samuel (Optional)
        maria_tries_to_reach_samuel_ch18: {
            speaker: "Maria Vasquez",
            text: "'Grab my hand, boy! Don't be a fool!' But he was too far, too focused.",
            next: "samuel_saves_last_child"
        },

        // Scene 16: Samuel Saves the Last Child
        samuel_saves_last_child: {
            speaker: "Narrator",
            text: "He managed to shove the last child to safety just as a powerful wave crashed through the tunnel, dragging him under.",
            next: "samuel_drowns_jacob_watches_helplessly"
        },

        // Scene 17: Samuel Drowns
        samuel_drowns_jacob_watches_helplessly: {
            speaker: "Jacob Rivers",
            text: "'SAMUEL!!!' Jacob screamed, trying to reach for him, but the torrent was too violent. He saw his brother's hand slip beneath the dark water, then nothing.",
            next: "moment_of_grief_then_urgency"
        },

        // Scene 18: Moment of Grief, Then Urgency
        moment_of_grief_then_urgency: {
            speaker: "Narrator",
            text: "A wave of unbearable grief washed over Jacob, but there was no time. The water was still rising. Maria pulled him forward.",
            next: "maria_pulls_jacob_onward"
        },
        maria_pulls_jacob_onward: {
            speaker: "Maria Vasquez",
            text: "'He saved them, Jacob! Don't let it be for nothing! We have to keep moving!' Her voice was harsh, but not unkind.",
            next: "elijah_new_faith_leads_prayer_in_darkness"
        },

        // Scene 20: Elijah's New Faith
        elijah_new_faith_leads_prayer_in_darkness: {
            speaker: "Narrator",
            text: "As they struggled through the rising water in near darkness, fear threatened to consume the remaining children. Elijah, his traditional faith shaken by Josiah's betrayal, found a new strength, not in a distant God, but in the resilience of the human spirit before him.",
            next: "elijah_prayer_of_courage_and_hope"
        },

        elijah_prayer_of_courage_and_hope: {
            speaker: "Elijah Cross",
            text: "'Children, listen to me!' His voice resonated with a newfound conviction. 'We are not alone in this darkness. The courage of young Samuel lights our way! Hold onto the goodness within you, the love for each other. That is our true strength, our true deliverance!' He began to lead them in a simple, unifying prayer of hope and endurance.",
            next: "children_respond_to_elijah_prayer"
        },

        children_respond_to_elijah_prayer: {
            speaker: "Narrator",
            text: "The children, drawing comfort from his words and the rhythmic chant, found a measure of calm. Their linked hands tightened.",
            next: "doc_sober_and_observant_looks_for_weakness"
        },

        // Scene 23: Doc Sober and Observant
        doc_sober_and_observant_looks_for_weakness: {
            speaker: "Narrator",
            text: "Doc Whitmore, the agony of laudanum withdrawal a burning fire in his gut, was paradoxically clear-headed. The immediate, life-or-death crisis had focused his keen intellect. He scanned the tunnel walls, his medical knowledge of anatomy translating to an understanding of structural stress.",
            next: "doc_spots_structural_weak_point"
        },

        // Scene 24: Doc Spots a Weak Point
        doc_spots_structural_weak_point: {
            speaker: "Doc Whitmore",
            text: "'There!' He pointed to a section of the tunnel wall where water seeped aggressively around a large, embedded boulder. 'That rock is a keystone! If we can dislodge it, this section of the wall might collapse outwards, into what sounds like a larger, drier cavern beyond!'",
            choices: [
                {
                    text: "Question the risk of a cave-in.",
                    next: "question_doc_cave_in_risk"
                },
                {
                    text: "Immediately agree to try Doc's idea.",
                    next: "agree_to_doc_plan_immediately"
                }
            ]
        },

        // Scene 25: Question Cave-In Risk (Optional)
        question_doc_cave_in_risk: {
            speaker: "Jacob Rivers",
            text: "'Or it could bring the whole damn tunnel down on us, Doc!'",
            next: "doc_explains_calculated_risk"
        },

        // Scene 26: Doc Explains Calculated Risk (If questioned)
        doc_explains_calculated_risk: {
            speaker: "Doc Whitmore",
            text: "'It's a risk, yes! But staying here is certain death by drowning! The strata here suggests a larger void beyond, not solid rock. It's our best chance!'",
            next: "agree_to_doc_plan_immediately" // Converge
        },

        // Scene 27: Agree to Doc's Plan (Optional or Converging)
        agree_to_doc_plan_immediately: {
            speaker: "Maria Vasquez",
            text: "'He's right. We have no other choice. Everyone, find tools, pry bars, anything! Focus on that boulder!'",
            next: "desperate_effort_to_break_through_wall"
        },

        // Scene 28-30: The Breakthrough (Montage)
        desperate_effort_to_break_through_wall: {
            speaker: "Narrator",
            text: "With Jacob's remaining strength, Maria's relentless drive, and even Elijah using a piece of shattered timber as a lever, they battered at the rock and the surrounding wall. The water lapped at their chests.",
            next: "wall_begins_to_crack_and_groan"
        },
        wall_begins_to_crack_and_groan: {
            speaker: "Narrator",
            text: "Cracks appeared. The wall groaned under the pressure of the floodwaters behind it and their desperate efforts from within.",
            next: "final_push_wall_collapses_outward"
        },
        final_push_wall_collapses_outward: {
            speaker: "Narrator",
            text: "With a final, desperate heave, the keystone boulder shifted, and a section of the wall collapsed outwards with a roar, revealing a dark, cavernous space beyond, blessedly dry.",
            next: "scrambling_through_opening_to_safety"
        },

        // Scene 31: Scrambling to Safety
        scrambling_through_opening_to_safety: {
            speaker: "Narrator",
            text: "They scrambled through the opening, pulling the terrified children after them, just as the tunnel behind them completely flooded.",
            next: "emergence_into_sacred_burial_ground_ch18"
        },

        // Scene 32: Emergence into the Sacred Burial Ground
        emergence_into_sacred_burial_ground_ch18: {
            speaker: "Narrator",
            text: "They had emerged into a vast, natural cavern, untouched by miners' tools. Ancient burial niches lined the walls, some holding skeletal remains and pottery. This was the sacred burial ground of Sarah Crow Feather's people, the place Crane's journal had hinted at.",
            next: "rivers_gang_survivors_waiting_at_exit"
        },
        
        // Scene 33: Rivers Gang Survivors Waiting
        rivers_gang_survivors_waiting_at_exit: {
            speaker: "Narrator",
            text: "Near a faint glimmer of light at the far end of the cavern, a group of men waited – Silas Rivers and the battered survivors of his gang. They had fought their way out of Perdition and followed an old map, or perhaps instructions from Samuel, to this rendezvous.",
            next: "silas_sees_jacob_and_children_no_samuel"
        },

        // Scene 34: Silas Sees Jacob and the Children
        silas_sees_jacob_and_children_no_samuel: {
            speaker: "Silas Rivers",
            text: "'Jacob! You made it! And the brats... But... where's Samuel? Where's my boy?' Silas's voice, usually iron, was laced with a desperate hope.",
            next: "jacob_faces_father_with_news_of_samuel"
        },

        // Scene 35: Jacob Tells His Father
        jacob_faces_father_with_news_of_samuel: {
            speaker: "Jacob Rivers",
            text: "Jacob met his father's gaze, his own eyes filled with a grief that mirrored the older man's dawning horror. 'Pa... Samuel... he didn't make it. He... he drowned. Saving the children.'",
            next: "silas_reaction_to_samuel_death"
        },

        // Scene 36: Silas's Reaction
        silas_reaction_to_samuel_death: {
            speaker: "Narrator",
            text: "Silas Rivers, the feared outlaw leader, seemed to shrink. The fight drained out of him, replaced by a vast, hollow emptiness. He stumbled, and would have fallen if not for one of his men.",
            choices: [
                {
                    text: "Silas: Silent, crushing grief.",
                    next: "silas_silent_grief_ch18"
                },
                {
                    text: "Silas: A quiet, broken question.",
                    next: "silas_broken_question_ch18"
                }
            ]
        },

        // Scene 37: Silas's Silent Grief (Optional)
        silas_silent_grief_ch18: {
            speaker: "Narrator",
            text: "He said nothing. No curses, no roars of anger. Just a profound, silent devastation that was more terrible than any rage.",
            next: "dawn_breaks_over_burial_ground"
        },

        // Scene 38: Silas's Broken Question (Optional)
        silas_broken_question_ch18: {
            speaker: "Silas Rivers",
            text: "(Whispering) 'He died... a hero? My boy...?'",
            next: "dawn_breaks_over_burial_ground"
        },
        
        // Scene 39: Dawn Breaks
        dawn_breaks_over_burial_ground: {
            speaker: "Narrator",
            text: "As if on cue, the first rays of dawn pierced through a fissure high in the cavern ceiling, illuminating the ancient resting place. They had survived the night. The children were safe, for now.",
            next: "elijah_approaches_stone_marker_with_necklace"
        },

        // Scene 40: Elijah and the Necklace
        elijah_approaches_stone_marker_with_necklace: {
            speaker: "Narrator",
            text: "Elijah moved towards a prominent, weathered stone marker in the center of the burial ground. In his hand, he held Sarah Crow Feather's beaded necklace, taken from Crane's body.",
            next: "elijah_places_necklace_on_marker"
        },
        
        // Scene 41-43: The Ceremony (Montage)
        elijah_places_necklace_on_marker: {
            speaker: "Narrator",
            text: "With a quiet reverence born not of dogma but of shared human experience, he gently placed the necklace upon the stone. A makeshift offering. An acknowledgment.",
            next: "elijah_silent_words_for_sarah_crane_samuel"
        },
        elijah_silent_words_for_sarah_crane_samuel: {
            speaker: "Elijah Cross",
            text: "(Whispering, for the spirits and himself) 'Sarah. Samuel Crane. Young Samuel Rivers. May your spirits find the peace this world denied you. May these children find lives free from such sorrow.'",
            next: "wind_whispers_words_of_release"
        },
        wind_whispers_words_of_release: {
            speaker: "Narrator",
            text: "A soft breeze sighed through the cavern opening, stirring the dust of ages. For a moment, just a fleeting moment, the sound of the wind seemed to carry whispered words – too faint to understand, but undeniably words. A sigh of release, perhaps. Or a promise kept.",
            next: "moment_of_peace_uncertain_future_ch18"
        },

        // Scene 44: Moment of Peace, Uncertain Future
        moment_of_peace_uncertain_future_ch18: {
            speaker: "Narrator",
            text: "They stood there, the living and the memory of the dead, bathed in the new dawn. They had passed through a baptism of fire and flood. They were scarred, grieving, but alive.",
            next: "maria_practical_assessment_of_situation"
        },
        
        // Scene 45: Maria's Practical Assessment
        maria_practical_assessment_of_situation: {
            speaker: "Maria Vasquez",
            text: "'Pike will know these tunnels lead out somewhere. He'll be hunting. And these children need food, water, safety. The fight isn't over.'",
            next: "doc_recovering_but_changed_ch18"
        },

        // Scene 46: Doc, Recovering but Changed
        doc_recovering_but_changed_ch18: {
            speaker: "Doc Whitmore",
            text: "'No, it's not over.' Doc's voice was raspy from his ordeal, but his eyes were clear, the laudanum haze completely gone. 'But for the first time in a long time, I believe I know which side I'm on. And it's not Pike's.'",
            next: "jacob_grieving_but_resolute_ch18"
        },

        // Scene 47: Jacob, Grieving but Resolute
        jacob_grieving_but_resolute_ch18: {
            speaker: "Jacob Rivers",
            text: "(Looking at his father, then at the children) 'Samuel died so they could live. We can't let that be for nothing. We stop Pike. For Samuel. For all of them.'",
            next: "silas_stirs_new_purpose_or_broken"
        },

        // Scene 48: Silas Stirs
        silas_stirs_new_purpose_or_broken: {
            speaker: "Silas Rivers",
            text: "Silas Rivers slowly raised his head. The loss of his youngest son had broken something in him, or perhaps, forged something new. He looked at the rescued children, then at Jacob, then at the formidable Pike's Peak远在天边.",
            next: "alliance_solidified_by_loss_and_hope"
        },
        
        // Scene 49: Alliance Solidified
        alliance_solidified_by_loss_and_hope: {
            speaker: "Narrator",
            text: "Loss had cemented their strange alliance. The outlaw gang, the grieving father, the redeemed preacher, the vengeful gunslinger, the sobered doctor, and the prodigal son who had found his calling. They were an army of the damaged, united against Pike.",
            next: "chapter_end_scene_ch18"
        },

        // Scene 50: Chapter End - A New Dawn, A New War
        chapter_end_scene_ch18: {
            speaker: "Narrator",
            text: "As the sun climbed higher, casting its golden light upon the sacred ground, they prepared for the next stage of their war. Pike was still out there. Perdition was still in peril. But for the first time, they had a glimpse of what true redemption, bought with fire and sacrifice, might look like.",
            choices: [
                {
                    text: "Continue to Chapter 19",
                    next: null,
                    nextChapter: "chapter19"
                }
            ]
        }
    }
};