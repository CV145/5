// Chapter 17: The Prodigal's Return
storyData.chapter17 = {
    name: "Chapter 17",
    title: "The Prodigal's Return",
    scenes: {
        // Scene 1: Eve of the Assault
        start: {
            speaker: "Narrator",
            text: "The crimson light of the blood moon had given way to the deepest hour of the night. At the Rivers Gang hideout, the 'Alliance of the Damned' finalized their desperate plan. Jacob, despite his youth, felt the weight of leadership for the infiltration team.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 17');
            },
            next: "silas_final_words_to_jacob"
        },

        // Scene 2: Silas's Final Words to Jacob
        silas_final_words_to_jacob: {
            speaker: "Silas Rivers",
            text: "'You know those tunnels better than anyone now, boy. Get in, get those brats, and get out. My men will raise enough hell in Perdition to draw Pike's hornets from their nest. Don't fail.' His eyes held a complex mix of command and something akin to paternal concern.",
            next: "jacob_nods_to_silas"
        },

        jacob_nods_to_silas: {
            speaker: "Jacob Rivers",
            text: "'We won't, Pa.' The word still felt strange, yet right. 'We'll bring them out.'",
            next: "infiltration_team_departs"
        },

        // Scene 4: The Infiltration Team Departs
        infiltration_team_departs: {
            speaker: "Narrator",
            text: "Jacob, Elijah, Maria, and a grimly determined Doc Whitmore (his laudanum carefully 'rationed' by Maria for functionality) slipped away from the gang's camp, heading towards the hidden mine entrance near North Ridge that Crane had unknowingly led them to.",
            next: "sound_of_diversion_in_perdition"
        },

        // Scene 5: The Diversion Begins
        sound_of_diversion_in_perdition: {
            speaker: "Narrator",
            text: "As they neared the mine, faint sounds of gunfire and explosions echoed from the direction of Perdition, miles away. The Rivers Gang had begun their diversion.",
            next: "maria_comments_on_diversion"
        },

        maria_comments_on_diversion: {
            speaker: "Maria Vasquez",
            text: "'Silas knows how to make an entrance. That should keep Pike's main force occupied. Let's move.'",
            next: "entering_hidden_mine_tunnel_ch17"
        },

        // Scene 7: Entering the Hidden Tunnel
        entering_hidden_mine_tunnel_ch17: {
            speaker: "Narrator",
            text: "Jacob located the concealed entrance they'd witnessed Crane use. Pulling aside the brush and stones, they plunged into the suffocating darkness of Pike's secret operation.",
            next: "navigating_by_jacob_memory"
        },

        // Scene 8: Navigating by Memory
        navigating_by_jacob_memory: {
            speaker: "Jacob Rivers",
            text: "'This way. The main child labor caverns should be deeper in. The air gets worse... and you'll hear them before you see them.' His voice was grim.",
            next: "elijah_prayer_for_guidance_ch17"
        },

        // Scene 9: Elijah's Silent Prayer
        elijah_prayer_for_guidance_ch17: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Lord, guide our steps in this darkness. Protect the innocent. And forgive us the violence we may unleash to save them.'",
            next: "doc_monitors_his_own_condition"
        },

        // Scene 10: Doc's Condition
        doc_monitors_his_own_condition: {
            speaker: "Doc Whitmore",
            text: "(Internal, a tremor in his hand) 'Steady... steady. Focus on the task. Withdrawal is a beast, but Josiah's information about Pike's layout... that's the prize here, alongside any actual children.'",
            next: "deeper_into_the_mine_tunnels"
        },

        // Scene 11-13: Deeper into the Tunnels (Montage)
        deeper_into_the_mine_tunnels: {
            speaker: "Narrator",
            text: "They moved cautiously, their lanterns casting dancing shadows. The tunnels twisted, sometimes opening into vast, echoing chambers, sometimes narrowing to crawlspaces.",
            next: "avoiding_a_patrol_ch17"
        },
        avoiding_a_patrol_ch17: {
            speaker: "Narrator",
            text: "Once, they had to douse their lights and press themselves into crevices as a rough-voiced patrol of Pike's guards passed, their conversation callous and cruel.",
            next: "sounds_of_children_growing_louder"
        },
        sounds_of_children_growing_louder: {
            speaker: "Narrator",
            text: "The faint, rhythmic chinking of small tools and the heartbreaking sound of children's suppressed coughs grew louder, guiding them.",
            next: "reaching_overlook_child_mine_cavern"
        },

        // Scene 14: The Overlook - Horrifying Scale
        reaching_overlook_child_mine_cavern: {
            speaker: "Narrator",
            text: "Jacob led them to a narrow ledge overlooking a vast cavern, illuminated by scores of flickering torches. The sight below stole their breath.",
            next: "hundreds_of_children_revealed"
        },

        // Scene 15: Hundreds of Children
        hundreds_of_children_revealed: {
            speaker: "Narrator",
            text: "Not dozens, as they had seen before from the tunnel entrance, but hundreds. Hundreds of children, from various tribes and territories, toiled in the hellish glow, their small bodies caked with grime and silver-mercury dust.",
            choices: [
                {
                    text: "Jacob: 'There's... so many more than I thought.'",
                    next: "jacob_overwhelmed_by_numbers"
                },
                {
                    text: "Maria: 'Pike's entire enterprise runs on these souls.'",
                    next: "maria_sees_pikes_vulnerability_and_cruelty"
                },
                {
                    text: "Elijah: 'A legion of lost angels...'",
                    next: "elijah_heartbreak_at_scale"
                }
            ]
        },

        // Scene 16: Jacob Overwhelmed (Optional)
        jacob_overwhelmed_by_numbers: {
            speaker: "Jacob Rivers",
            text: "'I only saw a fraction from the other tunnel... I never knew... How could anyone do this?'",
            next: "maria_sees_pikes_vulnerability_and_cruelty"
        },

        // Scene 17: Maria's Calculation (Optional or Converging)
        maria_sees_pikes_vulnerability_and_cruelty: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'This is his true wealth, his true weakness. And the source of Dalton's fleeting conscience.'",
            next: "elijah_heartbreak_at_scale"
        },

        // Scene 18: Elijah's Heartbreak (Optional or Converging)
        elijah_heartbreak_at_scale: {
            speaker: "Elijah Cross",
            text: "'This is a pit of Gehenna itself. We must get them out. All of them.'",
            next: "doc_notes_children_condition_poisoning"
        },
        
        // Scene 19: Doc Notes the Children's Condition
        doc_notes_children_condition_poisoning: {
            speaker: "Doc Whitmore",
            text: "'Look at them. The tremors, the vacant stares... advanced mercury poisoning, every last one. My 'cure' would be a drop in an ocean of suffering here. Pike is systematically killing them.'",
            next: "planning_the_rescue_approach_ch17"
        },

        // Scene 20: Planning the Rescue
        planning_the_rescue_approach_ch17: {
            speaker: "Narrator",
            text: "They had to act fast. The guards were few in this deep section, relying on the children's weakness and fear. But moving hundreds of sick, terrified children would be a monumental task.",
            next: "maria_takes_out_guards_silently"
        },
        
        // Scene 21-23: Neutralizing Guards (Montage)
        maria_takes_out_guards_silently: {
            speaker: "Narrator",
            text: "Maria, with deadly efficiency, neutralized the two closest guards overlooking the main work area, her knife a silent whisper of death. Jacob, following her lead, disarmed another with a well-aimed rock.",
            next: "reaching_the_children_first_contact"
        },
        reaching_the_children_first_contact: {
            speaker: "Narrator",
            text: "Elijah was the first to reach the children, his preacher's voice, though low, carrying reassurance. 'Children, we are here to help you. Do not be afraid. We are taking you out of this place.'",
            next: "children_reaction_fear_then_hope"
        },
        children_reaction_fear_then_hope: {
            speaker: "Narrator",
            text: "Fear turned to fragile hope in their eyes. Some were too weak to stand. Doc quickly assessed the most critical, administering what little aid he could carry.",
            next: "organizing_the_escape_slow_process"
        },

        // Scene 24-27: Organizing the Escape (Montage)
        organizing_the_escape_slow_process: {
            speaker: "Narrator",
            text: "Organizing them was like herding frightened ghosts. Maria and Jacob took the lead, scouting the path back towards the entrance they'd used, while Elijah and Doc helped the weakest.",
            next: "rumble_of_explosion_deeper_in_mine"
        },
        rumble_of_explosion_deeper_in_mine: {
            speaker: "Narrator",
            text: "Suddenly, a deep rumble shook the cavern. Distant explosions. Pike's men were reacting to the diversion, or perhaps they'd found evidence of the infiltration.",
            next: "escape_route_blocked_cave_in"
        },
        escape_route_blocked_cave_in: {
            speaker: "Jacob Rivers",
            text: "(Shouting over the noise) 'They're blasting! They know someone's in here! The way we came in... it might be blocked!'",
            next: "confirmation_entrances_sealed"
        },
        
        // Scene 28: Entrances Sealed
        confirmation_entrances_sealed: {
            speaker: "Narrator",
            text: "Scouts from Pike's men, or perhaps a deliberate cave-in triggered by them, had sealed their primary escape route. They were trapped, deep underground, with hundreds of ailing children.",
            next: "panic_among_children_protagonists_despair"
        },

        // Scene 29: Panic and Despair
        panic_among_children_protagonists_despair: {
            speaker: "Narrator",
            text: "Panic rippled through the children. The protagonists exchanged grim looks. The situation had just become infinitely more dangerous.",
            next: "elijah_tries_to_calm_children"
        },
        elijah_tries_to_calm_children: {
            speaker: "Elijah Cross",
            text: "'Stay calm, little ones! We will find a way! Hold onto hope!' His voice was louder now, trying to project confidence he didn't entirely feel.",
            next: "maria_scouts_for_other_exits"
        },
        maria_scouts_for_other_exits: {
            speaker: "Maria Vasquez",
            text: "'There have to be other ways out. Old shafts, ventilation tunnels. Jacob, you know these mines. Think!'",
            next: "jacob_remembers_old_tales_burial_tunnels"
        },

        // Scene 32: Jacob Remembers Old Tales
        jacob_remembers_old_tales_burial_tunnels: {
            speaker: "Jacob Rivers",
            text: "'The old timers... they used to talk about the *Nahali Kiva*... the spirit paths. Ancient burial tunnels that predate the mine. Said they ran for miles. But they're sacred ground, cursed if disturbed.'",
            next: "doc_connects_to_crane_journal_elijah_discovery"
        },

        // Scene 33: Doc's Realization - The Burial Tunnels
        doc_connects_to_crane_journal_elijah_discovery: {
            speaker: "Doc Whitmore",
            text: "'Crane's journal!' Doc exclaimed. 'He mentioned Pike's first ledger was hidden beneath the altar stone at St. Catherine's ruins... and that the ruins were built over an old Native burial site! Elijah, you found that first mass grave... could these be connected?'",
            next: "elijah_confirms_knowledge_of_burial_site"
        },

        // Scene 34: Elijah Confirms His Discovery
        elijah_confirms_knowledge_of_burial_site: {
            speaker: "Elijah Cross",
            text: "'The grave I found... it felt older, different from the children Crane buried for Pike. There were carvings, symbols I didn't understand. If these tunnels connect... it could be our only way.'",
            choices: [
                {
                    text: "Express grave concern about disturbing sacred ground.",
                    next: "elijah_concern_sacred_ground_ch17"
                },
                {
                    text: "Acknowledge the necessity despite the risk.",
                    next: "elijah_acknowledges_necessity_ch17"
                }
            ]
        },
        
        // Scene 35: Elijah's Concern (Optional)
        elijah_concern_sacred_ground_ch17: {
            speaker: "Elijah Cross",
            text: "'But to lead these children, these innocents, through a consecrated burial ground... to disturb the spirits of the ancient dead... it's a heavy trespass, Doctor.'",
            next: "doc_pragmatic_response_to_elijah_concern"
        },

        // Scene 36: Doc's Pragmatic Response
        doc_pragmatic_response_to_elijah_concern: {
            speaker: "Doc Whitmore",
            text: "'Trespass or a mass grave for all of us, Preacher! The spirits can forgive us later. Pike's men won't.'",
            next: "elijah_acknowledges_necessity_ch17" // Converge
        },

        // Scene 37: Elijah Acknowledges Necessity (Optional or Converging)
        elijah_acknowledges_necessity_ch17: {
            speaker: "Elijah Cross",
            text: "'You're right. The lives of these children come first. If there's a path through those burial tunnels, we must take it, and pray for forgiveness later.'",
            next: "maria_agrees_any_escape_is_good"
        },

        // Scene 38: Maria Agrees
        maria_agrees_any_escape_is_good: {
            speaker: "Maria Vasquez",
            text: "'Cursed or not, a tunnel out is a tunnel out. Lead the way, Jacob. Or Preacher. Whoever knows these spirit paths.'",
            next: "jacob_tries_to_recall_tunnel_lore"
        },

        // Scene 39-41: Finding the Entrance to Burial Tunnels (Montage)
        jacob_tries_to_recall_tunnel_lore: {
            speaker: "Narrator",
            text: "Jacob, drawing on fragmented miners' lore and perhaps markings noted in Crane's journal that Elijah now shared, led them deeper into an unexplored section of the child labor mine.",
            next: "discovering_the_burial_tunnel_entrance"
        },
        discovering_the_burial_tunnel_entrance: {
            speaker: "Narrator",
            text: "Behind a loose rock wall, they found it: a narrow opening, clearly ancient, the air within cold and still, marked with faded pictographs.",
            next: "sense_of_entering_sacred_space"
        },
        sense_of_entering_sacred_space: {
            speaker: "Narrator",
            text: "A palpable sense of age and sanctity emanated from the passage. This was different from Pike's crudely dug tunnels. This was a place of spirits, of history.",
            next: "decision_to_enter_burial_tunnels"
        },
        
        // Scene 42: The Moral Weight of the Decision
        decision_to_enter_burial_tunnels: {
            speaker: "Elijah Cross",
            text: "'We are about to tread on holy ground, perhaps uninvited. Let us proceed with respect, and pray for the souls of those who rest here, and for the souls of these children we seek to save.'",
            next: "doc_impatient_but_cautious"
        },

        // Scene 43: Doc's Impatience
        doc_impatient_but_cautious: {
            speaker: "Doc Whitmore",
            text: "'Respect, yes. But also speed, Preacher. Pike's men won't be offering prayers when they find us.'",
            next: "maria_takes_point_entering_sacred_tunnels"
        },

        // Scene 44: Maria Takes Point
        maria_takes_point_entering_sacred_tunnels: {
            speaker: "Maria Vasquez",
            text: "'I'll take point. Jacob, you guide. Elijah, Doctor, keep the children moving and quiet.' She drew her Colt, its modern steel a stark contrast to the ancient stone.",
            next: "leading_first_children_into_burial_tunnel"
        },

        // Scene 45: Leading the Children In
        leading_first_children_into_burial_tunnel: {
            speaker: "Narrator",
            text: "The first group of terrified, hopeful children were guided into the narrow, dark passage of the Native American burial tunnels. Their small, shuffling footsteps echoed in the sacred silence.",
            next: "sounds_of_pursuit_from_pike_men"
        },

        // Scene 46: Sounds of Pursuit
        sounds_of_pursuit_from_pike_men: {
            speaker: "Narrator",
            text: "Behind them, from the main mine tunnels, they could hear the distant shouts of Pike's men, closer now. They had been discovered. The race had begun.",
            next: "jacob_finds_strength_in_leadership"
        },
        
        // Scene 47: Jacob's New Strength
        jacob_finds_strength_in_leadership: {
            speaker: "Jacob Rivers",
            text: "(To a frightened child) 'It's alright. We'll get through this. Stick close to me.' He found a strength he didn't know he possessed, the prodigal son now a reluctant shepherd.",
            next: "elijah_clutches_crane_necklace"
        },

        // Scene 48: Elijah and the Necklace
        elijah_clutches_crane_necklace: {
            speaker: "Narrator",
            text: "Elijah clutched Crane's journal and Sarah Crow Feather's necklace. 'She said four would come to make it right,' Crane had gasped. Righting this wrong might mean desecrating one sacred space to save innocents from another profane one.",
            next: "into_the_sacred_darkness_ch17_end"
        },

        // Scene 49: Into the Sacred Darkness
        into_the_sacred_darkness_ch17_end: {
            speaker: "Narrator",
            text: "With Pike's forces closing in behind and the unknown perils of the ancient burial grounds ahead, the four protagonists led their fragile flock deeper into the sacred darkness, praying for an exit, and perhaps, for redemption.",
            next: "chapter_end_scene_ch17"
        },

        // Scene 50: Chapter End - Race Against Time
        chapter_end_scene_ch17: {
            speaker: "Narrator",
            text: "Their audacious plan to free the children had succeeded beyond their wildest estimates of numbers, only to trap them in a desperate flight through hallowed earth. The prodigal's return to responsibility had led them all into a new, more ancient peril.",
            choices: [
                {
                    text: "Continue to Chapter 18",
                    next: null,
                    nextChapter: "chapter18"
                }
            ]
        }
    }
};