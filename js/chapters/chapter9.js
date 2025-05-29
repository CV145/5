// Chapter 9: Underground
storyData.chapter9 = {
    name: "Chapter 9",
    title: "Underground",
    scenes: {
        // Scene 1: Elijah Revisits the Grave
        start: {
            speaker: "Narrator",
            text: "Days after his confrontation with Josiah Truth, Elijah Cross found himself drawn back to the desecrated cemetery. The children's bones he had briefly unearthed haunted him. Josiah's forgiveness had settled not as peace, but as a burning coal of responsibility.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 9');
            },
            next: "elijah_examines_site_again"
        },

        // Scene 2: Closer Examination
        elijah_examines_site_again: {
            speaker: "Narrator",
            text: "This time, he searched more carefully around the disturbed earth where he'd been digging the grave. He sifted through the soil, his fingers tracing the outline of what felt like fabric.",
            next: "discovery_of_fabric_and_bead"
        },

        // Scene 3: A Shred of Evidence
        discovery_of_fabric_and_bead: {
            speaker: "Narrator",
            text: "He unearthed a tattered piece of coarse, dark blue cloth – the kind used for institutional uniforms. And then, a single, fire-blackened bead, identical to those on the necklace Samuel Crane always clutched.",
            next: "connection_to_residential_school"
        },

        // Scene 4: The Residential School Connection
        connection_to_residential_school: {
            speaker: "Elijah Cross",
            text: "(Internal) 'St. Catherine's... Crane mentioned Pike ran it years ago. The children... the ones from the Prologue... Sarah Crow Feather...' The horrifying truth began to coalesce.",
            choices: [
                {
                    text: "Recall Crane's nervous demeanor about the past.",
                    next: "recall_crane_nervousness_ch9"
                },
                {
                    text: "Feel a surge of cold fury at Pike.",
                    next: "elijah_fury_at_pike_ch9"
                }
            ]
        },

        // Scene 5: Recall Crane's Nervousness (Optional)
        recall_crane_nervousness_ch9: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Crane's fear... his warnings to forget what I'd seen. He knew. He knew these were those children.'",
            next: "elijah_heads_to_confront_crane"
        },

        // Scene 6: Elijah's Fury (Optional)
        elijah_fury_at_pike_ch9: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Pike. This man's evil has no bounds. From the mercury poisoning then, to whatever horrors he inflicts now.'",
            next: "elijah_heads_to_confront_crane"
        },

        // Scene 7: Elijah Decides to Confront Crane Again
        elijah_heads_to_confront_crane: {
            speaker: "Narrator",
            text: "Armed with this grim certainty, Elijah strode towards Crane's undertaking establishment. The time for Crane's evasions was over.",
            next: "crane_in_his_workshop"
        },

        // Scene 8: Crane in His Workshop
        crane_in_his_workshop: {
            speaker: "Narrator",
            text: "Samuel Crane was meticulously polishing a coffin, a task that seemed to absorb all his nervous energy. He looked up, startled, as Elijah entered without knocking.",
            next: "elijah_direct_confrontation_crane"
        },

        // Scene 9: Elijah's Direct Confrontation
        elijah_direct_confrontation_crane: {
            speaker: "Elijah Cross",
            text: "'The children in that mass grave, Crane. They were from St. Catherine's Residential School, weren't they? The one Pike ran. The one where they died of mercury poisoning.' Elijah's voice was low, but held the sharp edge of judgment.",
            next: "crane_attempts_denial"
        },

        // Scene 10: Crane's Attempted Denial
        crane_attempts_denial: {
            speaker: "Samuel Crane",
            text: "'Preacher, I told you... old graves... best left undisturbed. What happened in the past...'",
            next: "elijah_shows_evidence"
        },

        // Scene 11: Elijah Shows the Evidence
        elijah_shows_evidence: {
            speaker: "Elijah Cross",
            text: "Elijah placed the tattered blue cloth and the blackened bead on the coffin. 'Like this bead, Crane? From the necklace you carry? Sarah Crow Feather's necklace?'",
            next: "crane_breaks_down"
        },

        // Scene 12: Crane Breaks
        crane_breaks_down: {
            speaker: "Narrator",
            text: "Crane stared at the items, his face crumbling. The carefully constructed walls of denial he'd lived behind for seventeen years shattered. He sank onto a stool, head in his hands.",
            next: "crane_confession_begins"
        },

        // Scene 13: Crane's Confession Begins
        crane_confession_begins: {
            speaker: "Samuel Crane",
            text: "'Yes... yes, it was them. All those little ones.' His voice was a choked whisper. 'Pike... he made me bury them. Threatened my family. I was young, terrified... I've lived with their faces every night since.'",
            next: "crane_reveals_operation_moved"
        },

        // Scene 14: Crane Reveals Pike's Operation Moved
        crane_reveals_operation_moved: {
            speaker: "Samuel Crane",
            text: "'But that ain't the worst of it, Preacher. He didn't stop. He just got smarter. Moved his operation... underground. Literally. Still using children. Heard whispers... from the new mine.'",
            next: "elijah_presses_for_location"
        },
        
        // Scene 15: Elijah Presses for Location
        elijah_presses_for_location: {
            speaker: "Elijah Cross",
            text: "'Underground? Where, Crane? Tell me everything.'",
            choices: [
                {
                    text: "Show compassion for Crane's past fear.",
                    next: "elijah_compassion_for_crane"
                },
                {
                    text: "Maintain a stern, demanding tone.",
                    next: "elijah_stern_with_crane"
                }
            ]
        },

        // Scene 16: Elijah's Compassion (Optional)
        elijah_compassion_for_crane: {
            speaker: "Elijah Cross",
            text: "'I understand fear, Samuel. I've lived with my own. But these are children, alive now, suffering now. You can help stop it.'",
            next: "crane_reveals_more_details"
        },

        // Scene 17: Elijah Stern with Crane (Optional)
        elijah_stern_with_crane: {
            speaker: "Elijah Cross",
            text: "'Your past guilt is no excuse for present silence, man! Where is Pike keeping those children?'",
            next: "crane_reveals_more_details"
        },
        
        // Scene 18: Crane Reveals More Details
        crane_reveals_more_details: {
            speaker: "Samuel Crane",
            text: "'I... I don't know exactly. Pike's too clever. But there are old tunnels... beneath the North Ridge mine. Forgotten ways. He uses them. I've seen... small figures, being taken there at night.'",
            next: "transition_to_maria_investigation_ch9"
        },

        // --- Maria's Storyline Convergence ---
        transition_to_maria_investigation_ch9: {
            speaker: "Narrator",
            text: "As Elijah pieced together the truth from Crane's tortured confession, Maria Vasquez was reaching a similar conclusion through her own methodical, colder means.",
            next: "maria_recap_child_disappearances"
        },

        // Scene 20: Maria Recap - Missing Students
        maria_recap_child_disappearances: {
            speaker: "Narrator",
            text: "The disappearance of her student informants had gnawed at Maria. Her investigation, initially focused on Dalton and Pike's general operations, now centered on the missing children. She had confirmed they weren't sick, nor had they simply left town.",
            next: "maria_observing_mine_activity"
        },

        // Scene 21: Maria Observing Mine Activity
        maria_observing_mine_activity: {
            speaker: "Narrator",
            text: "Her nightly reconnaissance of the North Ridge mine, the same one Crane mentioned, had revealed unusual activity: small, heavily guarded convoys arriving and leaving under the cover of darkness, carrying something... or someone.",
            next: "maria_suspects_underground_operation"
        },

        // Scene 22: Maria Suspects Underground Operation
        maria_suspects_underground_operation: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'The main shafts are for show, for legitimate silver. But the children... they're being taken somewhere else. Deeper. Hidden. An underground operation.'",
            next: "maria_sees_crane_acting_strangely"
        },
        
        // Scene 23: Maria Notices Crane
        maria_sees_crane_acting_strangely: {
            speaker: "Narrator",
            text: "Maria had also noticed Samuel Crane's increasingly furtive behavior, particularly his late-night solitary walks towards the desolate North Ridge area. The undertaker knew something.",
            next: "elijah_and_maria_paths_cross_intro"
        },

        // Scene 24: Paths Cross - Elijah and Maria
        elijah_and_maria_paths_cross_intro: {
            speaker: "Narrator",
            text: "That evening, as Elijah left Crane's, his mind reeling, he almost collided with Maria, who was emerging from the shadows nearby, clearly having observed the undertaker's shop.",
            next: "maria_to_elijah_crane_knows"
        },

        // Scene 25: Maria to Elijah
        maria_to_elijah_crane_knows: {
            speaker: "Maria Vasquez",
            text: "'Crane knows more than he lets on, Preacher. About Pike. About the children disappearing. I've been watching him.'",
            next: "elijah_shares_crane_confession"
        },

        // Scene 26: Elijah Shares Crane's Confession
        elijah_shares_crane_confession: {
            speaker: "Elijah Cross",
            text: "'He just confessed it. Pike is using children, working them in secret tunnels beneath the North Ridge mine. The same children from the residential school... some of them.' His voice was raw.",
            next: "maria_confirms_her_findings"
        },

        // Scene 27: Maria Confirms Her Findings
        maria_confirms_her_findings: {
            speaker: "Maria Vasquez",
            text: "'My investigation led me to the same place. The children from my school... they were being taken there.' Her expression was unreadable, but a dangerous light glinted in her eyes.",
            next: "uneasy_alliance_forms_discussion"
        },

        // Scene 28: The Uneasy Alliance Forms
        uneasy_alliance_forms_discussion: {
            speaker: "Narrator",
            text: "They stood in the twilight, the preacher driven by a desperate need for atonement and justice, the gunslinger by a cold thirst for revenge and a pragmatic understanding of the enemy. Their motives differed, but their immediate target was the same: Pike.",
            choices: [
                {
                    text: "Elijah: 'We have to stop him. Together.'",
                    next: "elijah_proposes_alliance_ch9"
                },
                {
                    text: "Maria: 'It seems our interests align, Preacher.'",
                    next: "maria_acknowledges_alignment_ch9"
                }
            ]
        },

        // Scene 29: Elijah Proposes Alliance (Optional)
        elijah_proposes_alliance_ch9: {
            speaker: "Elijah Cross",
            text: "'Pike is a monster. What he's doing to those children... it cannot stand. I don't trust your methods, Miss Vasquez, but right now, we need each other.'",
            next: "maria_agrees_to_temporary_alliance"
        },

        // Scene 30: Maria Acknowledges Alignment (Optional)
        maria_acknowledges_alignment_ch9: {
            speaker: "Maria Vasquez",
            text: "'Pike and Dalton are my targets. If freeing some children helps me get to them, then our paths run parallel for now. Don't mistake it for friendship, Preacher.'",
            next: "maria_agrees_to_temporary_alliance"
        },

        // Scene 31: Maria Agrees to Temporary Alliance
        maria_agrees_to_temporary_alliance: {
            speaker: "Maria Vasquez",
            text: "'Agreed. For now. Crane seems to be our best lead to these tunnels. He's terrified of Pike, but his guilt is eating him alive. He might be persuaded... or forced... to show us the way.'",
            next: "plan_to_follow_crane"
        },

        // Scene 32: Plan to Follow Crane
        plan_to_follow_crane: {
            speaker: "Elijah Cross",
            text: "'He mentioned making late-night visits to the North Ridge. Perhaps out of some twisted penance. We watch him tonight. If he goes, we follow.'",
            next: "waiting_for_nightfall_ch9"
        },

        // Scene 33: Waiting for Nightfall
        waiting_for_nightfall_ch9: {
            speaker: "Narrator",
            text: "The hours crawled by. Elijah and Maria found separate, concealed positions near Crane's workshop, the silence between them thick with unspoken questions and simmering distrust.",
            next: "crane_emerges_at_night"
        },
        
        // Scene 34-36: The Vigil (Montage)
        crane_emerges_at_night: {
            speaker: "Narrator",
            text: "Well after midnight, under a sliver of moon, Crane's door creaked open. He emerged, carrying a small, covered lantern and a shovel, looking furtively around before heading towards the North Ridge.",
            next: "elijah_maria_begin_tailing_crane"
        },
        elijah_maria_begin_tailing_crane: {
            speaker: "Narrator",
            text: "Elijah and Maria exchanged a look, then melted into the deeper shadows, following Crane at a safe distance. The undertaker moved with the slump of a man carrying an unbearable weight.",
            next: "crane_path_to_hidden_entrance"
        },
        crane_path_to_hidden_entrance: {
            speaker: "Narrator",
            text: "Crane didn't take the main path to the mine. Instead, he veered off towards a cluster of collapsed, ancient-looking adits, long forgotten by most.",
            next: "crane_at_the_hidden_entrance"
        },

        // Scene 37: Crane at the Hidden Entrance
        crane_at_the_hidden_entrance: {
            speaker: "Narrator",
            text: "He stopped before a rock face almost entirely obscured by overgrown brush and a recent-looking rockslide. After a nervous glance around, he began to pull away specific stones, revealing a narrow, dark opening.",
            next: "crane_enters_tunnel_elijah_maria_wait"
        },

        // Scene 38: Crane Enters
        crane_enters_tunnel_elijah_maria_wait: {
            speaker: "Samuel Crane",
            text: "(Muttering to himself as he entered) 'Forgive me, little ones... forgive an old fool...'",
            next: "elijah_and_maria_approach_entrance"
        },

        // Scene 39: Elijah and Maria Approach
        elijah_and_maria_approach_entrance: {
            speaker: "Narrator",
            text: "Once Crane disappeared inside, Elijah and Maria cautiously approached the hidden entrance. A faint, metallic scent and the distant, rhythmic chink of tools drifted from the darkness.",
            next: "decision_to_enter_tunnel_ch9"
        },
        
        // Scene 40: Decision to Enter
        decision_to_enter_tunnel_ch9: {
            speaker: "Maria Vasquez",
            text: "'This is it. Are you ready, Preacher? No turning back once we're inside.'",
            next: "elijah_resolve_entering_tunnel"
        },

        // Scene 41: Elijah's Resolve
        elijah_resolve_entering_tunnel: {
            speaker: "Elijah Cross",
            text: "'I've been turning back my whole life. It ends tonight.' He pushed aside the remaining brush and stepped into the oppressive blackness.",
            next: "inside_the_tunnels_intro"
        },

        // Scene 42: Inside the Tunnels
        inside_the_tunnels_intro: {
            speaker: "Narrator",
            text: "The tunnel was narrow, suffocating. The air was stale, heavy with the smell of damp earth and something else... despair. They followed the faint glimmer of Crane's lantern ahead.",
            next: "sounds_of_labor_in_tunnels"
        },

        // Scene 43: Sounds of Labor
        sounds_of_labor_in_tunnels: {
            speaker: "Narrator",
            text: "As they went deeper, the chinking sounds grew louder, accompanied by hacking coughs and the occasional sharp cry of an overseer. And then... a sound that froze Elijah's blood.",
            next: "childrens_voices_in_mine"
        },
        
        // Scene 44: Children's Voices
        childrens_voices_in_mine: {
            speaker: "Narrator",
            text: "Children's voices, weak and strained, singing a work song with no joy in it, their small efforts punctuated by the crack of a whip.",
            next: "reaching_the_main_cavern"
        },

        // Scene 45: Reaching the Main Cavern
        reaching_the_main_cavern: {
            speaker: "Narrator",
            text: "The tunnel opened into a larger cavern, lit by sputtering torches. What they saw made them both recoil in horror.",
            next: "witnessing_the_child_labor_horror"
        },

        // Scene 46: Witnessing the Horror
        witnessing_the_child_labor_horror: {
            speaker: "Narrator",
            text: "Dozens of children, some no older than six or seven, were hacking at silver-veined rock with undersized pickaxes. Their faces were smudged with grime and illness, their bodies frail. Armed guards watched them with callous indifference.",
            next: "children_conditions_described"
        },
        
        // Scene 47: Children's Conditions
        children_conditions_described: {
            speaker: "Narrator",
            text: "Many of the children coughed wrackingly, their eyes dull. Some had the tell-tale tremors of mercury poisoning. This wasn't just labor; it was a slow, agonizing death sentence.",
            choices: [
                {
                    text: "Elijah's internal prayer of anguish.",
                    next: "elijah_anguished_prayer_ch9"
                },
                {
                    text: "Maria's cold fury solidifies.",
                    next: "maria_cold_fury_ch9"
                }
            ]
        },

        // Scene 48: Elijah's Anguished Prayer (Optional)
        elijah_anguished_prayer_ch9: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Lord, if you exist, how can you permit this? These are your children... What have we become?'",
            next: "maria_cold_fury_ch9" // Ensure both paths converge if one is optional
        },
        
        // Scene 49: Maria's Cold Fury (Optional or Converging)
        maria_cold_fury_ch9: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Pike. Dalton. They will pay for this. Not just for Sofia. For all of them.' Her hand instinctively went to her hidden Colt.",
            next: "chapter_end_scene_ch9"
        },

        // Scene 50: Chapter End - Grim Resolve
        chapter_end_scene_ch9: {
            speaker: "Narrator",
            text: "Hidden in the shadows, Elijah and Maria exchanged a look. No words were needed. They had found Pike's dark secret, a horror beyond their darkest imaginings. The path ahead was fraught with peril, but their resolve was now forged in the fires of this shared, terrible witness.",
            choices: [
                {
                    text: "Continue to Chapter 10",
                    next: null,
                    nextChapter: "chapter10"
                }
            ]
        }
    }
};