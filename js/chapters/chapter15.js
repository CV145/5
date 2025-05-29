// Chapter 15: Perdition's Fall
storyData.chapter15 = {
    name: "Chapter 15",
    title: "Perdition's Fall",
    scenes: {
        // Scene 1: The Heist Begins
        start: {
            speaker: "Narrator",
            text: "Under the cloak of a moonless Perdition night, the four approached Pike's mine office. Their plan, meticulously crafted from conflicting desires, was desperate. Doc craved Pike's rumored fortune, Maria the incriminating documents, while Elijah and Jacob clung to the hope of finding something, anything, to save the children.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 15');
            },
            next: "maria_disables_outer_sentry"
        },

        // Scene 2-7: The Heist Attempt (Montage)
        maria_disables_outer_sentry: {
            speaker: "Narrator",
            text: "Maria moved first, a whisper in the dark, disabling the lone outer sentry with swift, brutal efficiency. Jacob, his heart pounding, picked the lock on a side window, his outlaw past serving an unlikely purpose.",
            next: "doc_and_elijah_entry"
        },
        doc_and_elijah_entry: {
            speaker: "Narrator",
            text: "Doc and Elijah slipped inside, Doc already eyeing the large, cast-iron safe in Pike's opulent office, Elijah scanning for ledgers, for names, for proof of the children's plight.",
            next: "heist_alarm_is_tripped"
        },
        heist_alarm_is_tripped: {
            speaker: "Narrator",
            text: "But Pike was no fool. As Doc began to work on the safe's complex mechanism, a faint click echoed, followed by the distant, unmistakable sound of an alarm bell ringing from the main guardhouse.",
            choices: [
                {
                    text: "Doc: 'Curse it! He had a secondary trip!'",
                    next: "doc_curses_alarm_ch15"
                },
                {
                    text: "Maria: 'We're blown! Get what you can, quickly!'",
                    next: "maria_orders_quick_grab_ch15"
                }
            ]
        },
        doc_curses_alarm_ch15: { // Optional
            speaker: "Doc Whitmore",
            text: "'Damn his meticulous soul! A pressure plate under the rug! No time for finesse now!'",
            next: "guards_converge_on_office"
        },
        maria_orders_quick_grab_ch15: { // Optional
            speaker: "Maria Vasquez",
            text: "'Forget the safe! Grab any loose papers! We need to move!'",
            next: "guards_converge_on_office"
        },
        guards_converge_on_office: {
            speaker: "Narrator",
            text: "Shouts and running footsteps converged on the office. Their careful plan had unraveled in an instant.",
            next: "attempted_escape_cut_off"
        },
        
        // Scene 8: Escape Cut Off - Garrett Appears
        attempted_escape_cut_off: {
            speaker: "Narrator",
            text: "They made for the window, but the office was suddenly flooded with armed men, led by a grim-faced Sheriff Tom Garrett.",
            next: "garrett_smug_capture"
        },

        // Scene 9: Garrett's Smug Capture
        garrett_smug_capture: {
            speaker: "Sheriff Tom Garrett",
            text: "'Well, well. Looks like the town's saviors have fallen from grace. Or perhaps, just revealed their true colors.' His smile was predatory. 'Stealing from Mr. Pike? Tsk, tsk.'",
            next: "protagonists_disarmed_and_bound"
        },

        // Scene 10: Disarmed and Bound
        protagonists_disarmed_and_bound: {
            speaker: "Narrator",
            text: "Outnumbered and outmaneuvered, they were quickly disarmed and bound. Hope turned to ash.",
            next: "garrett_reveals_pike_connection"
        },

        // Scene 11: Garrett Reveals His Connection to Pike
        garrett_reveals_pike_connection: {
            speaker: "Sheriff Tom Garrett",
            text: "'You fools really thought you could undermine my brother and get away with it?' He kicked a fallen ledger near Elijah. 'Cornelius Pike is not a man to be trifled with. And neither is his family.'",
            next: "protagonists_shock_at_revelation"
        },

        // Scene 12: Protagonists' Shock
        protagonists_shock_at_revelation: {
            speaker: "Jacob Rivers",
            text: "'Brother? You're Pike's brother?' Jacob stared, the pieces of Perdition's corruption clicking into a horrifying whole.",
            next: "garrett_confirms_and_threatens"
        },
        garrett_confirms_and_threatens: {
            speaker: "Sheriff Tom Garrett",
            text: "'Indeed. And we protect our own. You four have caused quite enough trouble. Your little reign is over.'",
            next: "taken_to_perdition_jail"
        },

        // Scene 14: Jailed with Silas Rivers
        taken_to_perdition_jail: {
            speaker: "Narrator",
            text: "They were thrown into Perdition's squalid jail cells. In the adjacent cell, bruised but defiant, sat Silas Rivers, Jacob's father.",
            next: "silas_acknowledges_jacob_and_group"
        },

        // Scene 15: Silas Acknowledges Jacob
        silas_acknowledges_jacob_and_group: {
            speaker: "Silas Rivers",
            text: "'Well, look what the cat dragged in. My traitor son, a fallen preacher, a killer schoolmarm, and a pill-peddling sawbones. Quite the collection Garrett's got.' His voice was rough, but held a grudging respect.",
            next: "tense_jail_conversations_intro"
        },
        
        // Scene 16-18: Tense Jail Conversations (Montage)
        tense_jail_conversations_intro: {
            speaker: "Narrator",
            text: "Hours passed. Despair began to set in. They spoke in low tones, recriminations mixing with fear.",
            next: "doc_laments_lost_fortune"
        },
        doc_laments_lost_fortune: {
            speaker: "Doc Whitmore",
            text: "'All that money... Pike's fortune... slipped right through my fingers.' He was already feeling the first pangs of withdrawal.",
            next: "maria_calculates_her_losses"
        },
        maria_calculates_her_losses: {
            speaker: "Maria Vasquez",
            text: "'Those documents would have bought me a kingdom. Now Garrett and Pike hold all the cards.' Her eyes were cold, already plotting.",
            next: "elijah_jacob_concern_for_children"
        },
        elijah_jacob_concern_for_children: {
            speaker: "Elijah Cross",
            text: "'The children... what will happen to them now? Pike will be more ruthless than ever.' Jacob nodded, his face a mask of misery.",
            next: "sudden_commotion_outside_jail"
        },

        // Scene 20: The Breakout Begins - Commotion
        sudden_commotion_outside_jail: {
            speaker: "Narrator",
            text: "Suddenly, shouts and gunfire erupted outside the jail. The sounds of a full-blown battle.",
            next: "silas_rivers_knowing_grin"
        },

        // Scene 21: Silas Rivers Grins
        silas_rivers_knowing_grin: {
            speaker: "Silas Rivers",
            text: "'Took 'em long enough.' Silas grinned, a flash of his old, dangerous self. 'My boys don't leave family behind. Not even traitorous ones.'",
            next: "rivers_gang_attacks_jail"
        },

        // Scene 22: Rivers Gang Attacks the Jail
        rivers_gang_attacks_jail: {
            speaker: "Narrator",
            text: "The jail door exploded inwards under a hail of bullets. Rivers Gang members poured in, guns blazing.",
            next: "chaos_of_jailbreak"
        },
        
        // Scene 23: Chaos of the Jailbreak
        chaos_of_jailbreak: {
            speaker: "Narrator",
            text: "In the ensuing chaos, cell doors were blasted open. Garrett's deputies fought back, but they were outnumbered and surprised. Silas was freed, and he gestured to the protagonists.",
            next: "silas_offers_escape_to_protagonists"
        },

        silas_offers_escape_to_protagonists: {
            speaker: "Silas Rivers",
            text: "'You lot! Pike wants you dead as much as me. Come on, if you want to live!'",
            choices: [
                {
                    text: "Hesitate, unsure of trusting Silas.",
                    next: "protagonists_hesitate_trusting_silas"
                },
                {
                    text: "Immediately take the chance to escape.",
                    next: "protagonists_seize_escape_chance"
                }
            ]
        },

        // Scene 25: Protagonists Hesitate (Optional)
        protagonists_hesitate_trusting_silas: {
            speaker: "Jacob Rivers",
            text: "'Pa? Why are you helping us?'",
            next: "silas_gruff_response_ch15"
        },

        // Scene 26: Silas's Gruff Response (If hesitated)
        silas_gruff_response_ch15: {
            speaker: "Silas Rivers",
            text: "'Pike's an enemy of my enemy for now, boy! And maybe... maybe you ain't entirely useless. Now move!'",
            next: "protagonists_seize_escape_chance"
        },

        // Scene 27: Protagonists Seize Escape Chance
        protagonists_seize_escape_chance: {
            speaker: "Narrator",
            text: "With no other options, the four joined the chaotic breakout, fighting their way into the night.",
            next: "crane_appears_in_the_chaos"
        },

        // Scene 28: Crane Appears
        crane_appears_in_the_chaos: {
            speaker: "Narrator",
            text: "As they spilled into a dark alley, a figure emerged from the shadows of the mortuary. It was Samuel Crane, his face illuminated by nearby fires, an expression of desperate resolve on his features.",
            next: "crane_offers_hidden_escape_route"
        },

        // Scene 29: Crane Offers Escape
        crane_offers_hidden_escape_route: {
            speaker: "Samuel Crane",
            text: "'This way! Quickly! I know a way out... through the old tunnels beneath my workshop. It's time I made amends.'",
            next: "following_crane_into_tunnels"
        },

        // Scene 30: Into the Mortuary Tunnels
        following_crane_into_tunnels: {
            speaker: "Narrator",
            text: "They followed Crane into the musty, oppressive darkness of the mortuary's hidden passages, the sounds of the battle fading behind them. Crane was panting, clearly not a man used to such exertion.",
            next: "crane_stops_gives_journal_necklace"
        },
        
        // Scene 31: Crane Stops, Presents Journal and Necklace
        crane_stops_gives_journal_necklace: {
            speaker: "Samuel Crane",
            text: "'Here.' He thrust a worn leather-bound journal and a familiar beaded necklace into Elijah's hands. 'This is... everything. Pike's crimes. From the very beginning. 1882. The children from St. Catherine's... I buried them.'",
            next: "crane_full_confession_sarah_curse"
        },

        // Scene 32: Crane's Full Confession
        crane_full_confession_sarah_curse: {
            speaker: "Samuel Crane",
            text: "'Sarah Crow Feather... the girl Pike murdered... she spoke a curse with her last breath. Said four would come, drawn by the injustice, to make it right. When you four arrived... I knew.' His voice was heavy with years of guilt.",
            next: "crane_prophetic_warning"
        },

        // Scene 33: Crane's Prophetic Warning
        crane_prophetic_warning: {
            speaker: "Samuel Crane",
            text: "'But I don't think she meant mercy, Preacher.' Crane gasped, clutching his chest. 'The spirits of those children... they demand a different kind of justice.'",
            next: "garrett_appears_in_tunnel_exit"
        },

        // Scene 34: Garrett Appears
        garrett_appears_in_tunnel_exit: {
            speaker: "Narrator",
            text: "Suddenly, the tunnel exit ahead was blocked. Sheriff Tom Garrett stood there, lantern in one hand, pistol in the other, his face a mask of fury.",
            next: "garrett_to_crane_traitor"
        },

        garrett_to_crane_traitor: {
            speaker: "Sheriff Tom Garrett",
            text: "'Crane! You sniveling, grave-robbing traitor! Helping these vermin escape?'",
            next: "crane_stands_against_garrett"
        },

        // Scene 36: Crane's Final Stand
        crane_stands_against_garrett: {
            speaker: "Samuel Crane",
            text: "'No more, Garrett! No more Pike! This town deserves peace!' Crane, unarmed, took a defiant step forward.",
            next: "garrett_shoots_crane"
        },

        // Scene 37: Garrett Shoots Crane
        garrett_shoots_crane: {
            speaker: "Narrator",
            text: "Garrett didn't hesitate. The gunshot was deafening in the enclosed space. Crane crumpled, clutching his stomach, a dark stain spreading on his shirt.",
            choices: [
                {
                    text: "Elijah rushes to Crane's side.",
                    next: "elijah_rushes_to_crane_side"
                },
                {
                    text: "Maria fires back at Garrett.",
                    next: "maria_fires_at_garrett_ch15"
                }
            ]
        },

        // Scene 38: Elijah Rushes to Crane (Optional Path)
        elijah_rushes_to_crane_side: {
            speaker: "Narrator",
            text: "Elijah, ignoring the danger, rushed to Crane's side as Maria and Jacob instinctively provided covering fire, forcing Garrett back momentarily.",
            next: "crane_whispers_final_information"
        },

        // Scene 39: Maria Fires at Garrett (Optional Path)
        maria_fires_at_garrett_ch15: {
            speaker: "Narrator",
            text: "Maria's Colts barked, driving Garrett back from the immediate tunnel exit. Elijah used the opening to reach Crane.",
            next: "crane_whispers_final_information"
        },

        // Scene 40: Crane's Dying Words - More Evidence
        crane_whispers_final_information: {
            speaker: "Samuel Crane",
            text: "(Gasping to Elijah) 'The old mission... St. Catherine's ruins... beneath the altar stone... Pike's first ledger... proof for General Morrison...' His voice faded.",
            next: "crane_finds_peace_speaks_native_tongue"
        },

        // Scene 41: Crane's Final Moments
        crane_finds_peace_speaks_native_tongue: {
            speaker: "Narrator",
            text: "A strange peace settled on Crane's face. He looked past Elijah, a faint smile touching his lips.",
            next: "crane_last_words_native_tongue"
        },
        crane_last_words_native_tongue: {
            speaker: "Samuel Crane",
            text: "(Whispering in a Native language Elijah didn't understand, the same words Sarah Crow Feather had used) 'Anpétu ki le मीणाaté... The debt... is paid.' His eyes closed.",
            next: "crane_is_dead"
        },
        
        // Scene 43: Crane is Dead
        crane_is_dead: {
            speaker: "Narrator",
            text: "Samuel Crane, the haunted undertaker of Perdition, was dead. His final act, an attempt at atonement.",
            next: "garrett_regroups_protagonists_trapped"
        },

        // Scene 44: Garrett Regroups
        garrett_regroups_protagonists_trapped: {
            speaker: "Sheriff Tom Garrett",
            text: "(Shouting from outside the tunnel) 'Nowhere to run now, fugitives! That tunnel's a dead end further up! Give up!'",
            next: "protagonists_examine_journal_quickly"
        },

        // Scene 45: Examining the Journal Briefly
        protagonists_examine_journal_quickly: {
            speaker: "Narrator",
            text: "While Maria and Jacob watched the tunnel entrance Garrett guarded, Elijah quickly flipped through Crane's journal. It was filled with dates, names, horrifying details of Pike's decades of exploitation, starting with the children of St. Catherine's.",
            next: "doc_finds_another_passage_or_weakness"
        },

        // Scene 46: Doc Finds an Alternative
        doc_finds_another_passage_or_weakness: {
            speaker: "Doc Whitmore",
            text: "'This draft... the tunnel wall here is unstable!' Doc, ever the opportunist even in chaos, had been probing their surroundings. 'A few good shoves, we might break through to the old crypts he mentioned!'",
            next: "desperate_escape_attempt_through_crypts"
        },

        // Scene 47: Desperate Escape
        desperate_escape_attempt_through_crypts: {
            speaker: "Narrator",
            text: "Working together, fueled by adrenaline, they battered at the weak point in the tunnel wall as Garrett's men began to advance down the passage.",
            next: "breaking_through_to_safety_or_new_danger"
        },
        
        // Scene 48: Breaking Through
        breaking_through_to_safety_or_new_danger: {
            speaker: "Narrator",
            text: "With a final heave, the wall crumbled. They scrambled through the opening into another, even older series of tunnels – the forgotten crypts beneath Perdition, just as Crane's dying words hinted at more evidence.",
            next: "momentary_respite_new_knowledge"
        },

        // Scene 49: Momentary Respite, New Knowledge
        momentary_respite_new_knowledge: {
            speaker: "Narrator",
            text: "They were fugitives again, Crane was dead, but they held his legacy: a journal filled with Pike's sins, Sarah Crow Feather's necklace, and the knowledge of more evidence hidden beneath St. Catherine's ruins. The fall of Perdition had truly begun, but its nature was yet to be determined.",
            next: "chapter_end_scene_ch15"
        },

        // Scene 50: Chapter End - Fugitives with a Purpose
        chapter_end_scene_ch15: {
            speaker: "Narrator",
            text: "The escape from Perdition's jail was complete, but at a terrible cost. Crane's sacrifice had armed them with truth, but also painted them as Garrett's prime targets. Their alliance, born of necessity, was now forged in shared desperation and the weight of the undertaker's final, damning confession.",
            choices: [
                {
                    text: "Continue to Chapter 16",
                    next: null,
                    nextChapter: "chapter16"
                }
            ]
        }
    }
};