// Chapter 7: The Doctor's Dilemma
storyData.chapter7 = {
    name: "Chapter 7",
    title: "The Doctor's Dilemma",
    scenes: {
        // Scene 1: The Mining Accident
        start: {
            speaker: "Narrator",
            text: "A piercing scream echoed from the depths of Pike's North Ridge mine, followed by frantic shouts. A premature dynamite blast, or a rotten support beam giving way – accidents were common, and often fatal.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 7');
            },
            next: "news_reaches_town"
        },

        // Scene 2: News Reaches Town
        news_reaches_town: {
            speaker: "Narrator",
            text: "Word quickly spread through Perdition: Jim Dalton, Pike's ruthless enforcer, was gravely injured, trapped beneath a rockfall. Hope and fear warred on the faces of the townsfolk.",
            next: "pike_summons_doc_urgently"
        },

        // Scene 3: Pike Summons Doc
        pike_summons_doc_urgently: {
            speaker: "Narrator",
            text: "Two of Pike's grim-faced men found Doc Whitmore in his newly acquired clinic, the scent of laudanum heavy in the air. 'Pike wants you at the mine. Now. Dalton's hurt bad.' Their tone left no room for refusal.",
            next: "doc_feigns_reluctance"
        },

        // Scene 4: Doc's Feigned Reluctance
        doc_feigns_reluctance: {
            speaker: "Doc Whitmore",
            text: "'Dalton, you say?' Doc affected a thoughtful frown, hiding the sudden quickening of his pulse. An opportunity. 'A dangerous environment, the mine. My fee for such hazardous consultations is... substantial.'",
            next: "pike_men_insist"
        },

        // Scene 5: Pike's Men Insist
        pike_men_insist: {
            speaker: "Pike's Henchman",
            text: "'Pike says get him. He'll pay whatever. Just get Dalton breathing.' The henchman's hand rested significantly on the butt of his pistol.",
            next: "doc_gathers_supplies_ch7"
        },

        // Scene 6: Doc Gathers Supplies
        doc_gathers_supplies_ch7: {
            speaker: "Narrator",
            text: "Doc packed his medical bag, his mind already racing. Dalton, the man Maria Vasquez wanted dead. This could be... very interesting. He made sure to include a few extra vials, not all of them for healing.",
            next: "maria_learns_of_dalton_accident"
        },

        // Scene 7: Maria Learns of the Accident
        maria_learns_of_dalton_accident: {
            speaker: "Narrator",
            text: "Maria, teaching her class, heard the commotion. One of her student informants, young Samuel, whispered the news during recess: 'It's Mr. Dalton, Miss Vasquez! They say he might die!'",
            next: "maria_internal_conflict_ch7"
        },

        // Scene 8: Maria's Internal Conflict
        maria_internal_conflict_ch7: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Dalton... dying? Fate offers a gift. Or is it a test?' She felt a savage joy, quickly masked. She needed to see this, to ensure her sister's murderer met his end.",
            next: "maria_excuses_herself_to_mine"
        },

        // Scene 9: Maria Heads to the Mine
        maria_excuses_herself_to_mine: {
            speaker: "Narrator",
            text: "Dismissing her class early with a plausible excuse about needing to see the sheriff, Maria made her way towards the North Ridge mine. Her teacher facade was firmly in place, but beneath it, the avenger stirred.",
            next: "at_the_mine_entrance_ch7"
        },

        // Scene 10: At the Mine Entrance - Chaos
        at_the_mine_entrance_ch7: {
            speaker: "Narrator",
            text: "The mine entrance was chaotic. Miners gathered, speaking in hushed, fearful tones. Pike himself stood grimly by, directing efforts to clear the collapsed tunnel where Dalton lay.",
            next: "doc_arrives_at_mine_ch7"
        },

        // Scene 11: Doc Arrives
        doc_arrives_at_mine_ch7: {
            speaker: "Pike",
            text: "'Whitmore! Took you long enough! He's still alive, but fading. Get in there!' Pike gestured impatiently towards the dark tunnel.",
            next: "maria_positions_herself"
        },

        // Scene 12: Maria Positions Herself
        maria_positions_herself: {
            speaker: "Narrator",
            text: "Maria found a vantage point, appearing as a concerned schoolteacher offering support, but her eyes were fixed on the tunnel entrance, missing nothing.",
            choices: [
                {
                    text: "Recall her sister's face, fueling her resolve.",
                    next: "maria_recalls_sister_ch7"
                },
                {
                    text: "Assess Pike's reaction for weaknesses.",
                    next: "maria_assesses_pike_ch7"
                }
            ]
        },

        // Scene 13: Maria Recalls Sister (Optional)
        maria_recalls_sister_ch7: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Sofia... this is for you. He will suffer as you suffered.' The memory of her sister's laughter, then her screams, burned in Maria's mind.",
            next: "doc_enters_collapsed_tunnel"
        },

        // Scene 14: Maria Assesses Pike (Optional)
        maria_assesses_pike_ch7: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'Pike values Dalton. His concern is for an asset, not a man. This enforcer is important to his operations. Dalton's death could destabilize things... or create new opportunities.'",
            next: "doc_enters_collapsed_tunnel"
        },

        // Scene 15: Doc Enters the Tunnel
        doc_enters_collapsed_tunnel: {
            speaker: "Narrator",
            text: "Doc, guided by a nervous miner, squeezed through the hastily cleared passage. The air was thick with dust, the groans of stressed timbers a constant threat. He found Dalton pinned beneath a heavy beam, his leg grotesquely twisted.",
            next: "dalton_conscious_in_pain"
        },

        // Scene 16: Dalton is Conscious
        dalton_conscious_in_pain: {
            speaker: "Jim Dalton",
            text: "(Gasping) 'Doc? Get... get this damn thing off me! My leg... I can't feel my leg!' Sweat and grime caked his face, his eyes wide with pain and fear.",
            next: "doc_examines_dalton"
        },

        // Scene 17: Doc's Examination
        doc_examines_dalton: {
            speaker: "Doc Whitmore",
            text: "'Easy now, Dalton. Let's see what we're dealing with.' Doc's examination was swift, professional. Crushed femur, likely arterial damage. A life-threatening injury, but survivable... if treated properly.",
            next: "doc_sees_the_opportunity"
        },

        // Scene 18: Doc Sees the Opportunity
        doc_sees_the_opportunity: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Maria wants him dead. Pike wants him alive. And I... I want to profit from both.' A cruel, brilliant idea began to form in his laudanum-sharpened mind.",
            next: "doc_calls_for_help_to_move_beam"
        },

        // Scene 19: Calling for Help
        doc_calls_for_help_to_move_beam: {
            speaker: "Doc Whitmore",
            text: "'We need to lift this beam! Carefully!' He directed the other miners. 'Any sudden movement could kill him.'",
            next: "dalton_freed_brought_out"
        },

        // Scene 20: Dalton Freed and Brought Out
        dalton_freed_brought_out: {
            speaker: "Narrator",
            text: "After a tense struggle, Dalton was freed and carried out into the weak daylight. Pike rushed forward. Maria watched, her expression unreadable.",
            next: "pike_orders_doc_to_save_dalton"
        },

        // Scene 21: Pike's Order
        pike_orders_doc_to_save_dalton: {
            speaker: "Pike",
            text: "'Save him, Whitmore! I don't care what it costs!' Pike's desperation was evident.",
            next: "doc_prepares_for_surgery"
        },

        // Scene 22: Doc Prepares for "Surgery"
        doc_prepares_for_surgery: {
            speaker: "Doc Whitmore",
            text: "'I'll need a clean space, boiling water, my full kit. And privacy. No distractions.' He looked pointedly at Pike, then his gaze flickered towards Maria.",
            next: "makeshift_operating_room"
        },

        // Scene 23: Makeshift Operating Room
        makeshift_operating_room: {
            speaker: "Narrator",
            text: "A nearby foreman's shack was quickly converted. Dalton was laid on a crude table. Doc began to lay out his instruments. Maria managed to position herself where she could observe, ostensibly offering to assist as a 'concerned teacher'.",
            next: "maria_watches_intently"
        },

        // Scene 24: Maria Watches
        maria_watches_intently: {
            speaker: "Narrator",
            text: "Maria watched Doc's hands, her own fists clenched. Would he save her sister's killer? Could she intervene if he did, without exposing herself?",
            next: "doc_begins_the_procedure"
        },

        // Scene 25: The "Surgery" Begins
        doc_begins_the_procedure: {
            speaker: "Doc Whitmore",
            text: "'Laudanum for the pain, though he'll need to be held down.' Doc administered a heavy dose. As Dalton's eyes glazed over, Doc met Maria's gaze across the room. A silent question, a subtle invitation.",
            next: "doc_the_botched_job_plan"
        },

        // Scene 26: Doc's Internal Plan
        doc_the_botched_job_plan: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Stop the external bleeding, yes. Set the bone... poorly. Introduce a subtle infection. Nick a minor vessel that will seep slowly. Make it look like a valiant effort against overwhelming trauma. He'll die, but not too quickly. Painfully. Maria will appreciate that.'",
            next: "maria_understands_silent_offer"
        },
        
        // Scene 27: Maria Understands
        maria_understands_silent_offer: {
            speaker: "Maria Vasquez",
            text: "(Internal) 'He's offering me Dalton's suffering... for a price, no doubt. The man's a vulture. But... a slow, painful death for Dalton? Sofia would approve.'",
            choices: [
                {
                    text: "Give a subtle nod of agreement to Doc.",
                    next: "maria_agrees_to_deal"
                },
                {
                    text: "Remain impassive, letting Doc proceed as he will.",
                    next: "maria_remains_impassive"
                }
            ]
        },

        // Scene 28: Maria Agrees (Optional but implied by plot)
        maria_agrees_to_deal: {
            speaker: "Narrator",
            text: "Maria gave the slightest, almost imperceptible nod. The pact was sealed in silence, over the broken body of her enemy.",
            next: "doc_proceeds_with_plan"
        },

        // Scene 29: Maria Remains Impassive (Alternative leading to same outcome if plot demands agreement)
        maria_remains_impassive: {
            speaker: "Narrator",
            text: "Maria kept her face a mask, but Doc, a connoisseur of desperation and dark desires, read her intent. He knew what she wanted.",
            next: "doc_proceeds_with_plan"
        },

        // Scene 30: Doc Proceeds with His Plan
        doc_proceeds_with_plan: {
            speaker: "Narrator",
            text: "Doc worked with an outward show of intense concentration. He cleaned, he sutured, he set. But his skilled hands also made tiny, almost invisible errors – a ligature not quite tight enough, a bone fragment left to irritate, an antiseptic solution deliberately weakened.",
            next: "surgery_conclusion_apparent_success"
        },

        // Scene 31: "Successful" Surgery Concludes
        surgery_conclusion_apparent_success: {
            speaker: "Doc Whitmore",
            text: "'He's stable... for now.' Doc announced, wiping sweat from his brow. 'The leg is saved, though he'll have a long recovery. The internal injuries were severe. He'll need constant care.'",
            next: "pike_relieved_grateful"
        },

        // Scene 32: Pike's Relief
        pike_relieved_grateful: {
            speaker: "Pike",
            text: "'You did it, Whitmore! I knew you were the man for the job! Name your price!' Pike was visibly relieved, already seeing his enforcer back in action.",
            next: "doc_defers_payment_from_pike"
        },

        // Scene 33: Doc Defers Pike's Payment
        doc_defers_payment_from_pike: {
            speaker: "Doc Whitmore",
            text: "'We can discuss my fee later, Mr. Pike. For now, Mr. Dalton needs rest. And I... need a drink.' His eyes found Maria again.",
            next: "maria_and_doc_private_conversation"
        },

        // Scene 34: Maria and Doc Speak Privately
        maria_and_doc_private_conversation: {
            speaker: "Narrator",
            text: "Later, as Dalton was being moved to a slightly cleaner bunkhouse under Pike's orders, Maria found Doc cleaning his instruments.",
            next: "doc_demands_payment_from_maria"
        },

        // Scene 35: Doc's Demand
        doc_demands_payment_from_maria: {
            speaker: "Doc Whitmore",
            text: "'A complicated procedure, Miss Vasquez. Ensuring a... specific outcome takes skill. My services for such specialized work are not cheap.'",
            next: "maria_acknowledges_debt"
        },

        // Scene 36: Maria Acknowledges the "Debt"
        maria_acknowledges_debt: {
            speaker: "Maria Vasquez",
            text: "'He will suffer? And he will die?' Her voice was low and intense.",
            next: "doc_confirms_daltons_fate"
        },

        // Scene 37: Doc Confirms Dalton's Fate
        doc_confirms_daltons_fate: {
            speaker: "Doc Whitmore",
            text: "'Oh, he'll suffer. Infection, internal bleeding... it will be slow. Agonizing. By the time anyone realizes it's not a natural complication, it will be far too late. He'll be dead within a month, perhaps two. My price for this... personalized care?'",
            next: "maria_agrees_to_pay_price"
        },
        
        // Scene 38: Maria Agrees to Pay
        maria_agrees_to_pay_price: {
            speaker: "Maria Vasquez",
            text: "'Name it. Information? Coin? You'll have it.' The transactional relationship was forged. Two predators recognizing each other.",
            next: "doc_names_his_initial_price"
        },

        doc_names_his_initial_price: {
            speaker: "Doc Whitmore",
            text: "'For now... a steady supply of your finest laudanum, should my own run short. And information. You seem to know this town's underbelly. I like to be informed.'",
            next: "pike_rewards_doc_with_access"
        },

        // Scene 40: Pike Rewards Doc with Access
        pike_rewards_doc_with_access: {
            speaker: "Narrator",
            text: "True to his word, Pike was generous. Not only did he pay Doc handsomely, but he also granted him unrestricted access to the mine's small, grim medical facility and its records. 'Keep my men healthy, Whitmore, and you'll want for nothing.'",
            next: "doc_explores_mine_medical_facility"
        },

        // Scene 41: Doc Explores the Medical Facility
        doc_explores_mine_medical_facility: {
            speaker: "Narrator",
            text: "Alone in the poorly lit facility, Doc began his own investigation. The records were sparse, but patterns emerged: miners, particularly younger ones, suffering from tremors, confusion, organ failure. Symptoms he recognized.",
            next: "doc_finds_evidence_of_poisoning"
        },

        // Scene 42: Evidence of Mercury Poisoning
        doc_finds_evidence_of_poisoning: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Mercury. Just like Jed the miner whispered. But these records... they're not just cases of accidental exposure. There are notes here... dosages... observations...'",
            next: "discovery_of_experiment_notes"
        },

        // Scene 43: Discovery of Experiment Notes
        discovery_of_experiment_notes: {
            speaker: "Narrator",
            text: "He found a locked cabinet. A quick application of a purloined hairpin, a skill acquired in less reputable days, and it sprang open. Inside: detailed notes, sketches, and even daguerreotypes of children. Native American children, like those Samuel Crane had buried, exhibiting advanced stages of mercury poisoning.",
            next: "doc_horrifying_realization_ch7"
        },

        // Scene 44: The Horrifying Realization
        doc_horrifying_realization_ch7: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'My God... these aren't just records of illness. These are experiments. Pike isn't just mining silver... he's testing the effects of mercury on these children. For what purpose?'",
            choices: [
                {
                    text: "Speculate on Pike's motives for the experiments.",
                    next: "speculate_pike_motives_ch7"
                },
                {
                    text: "Focus on the value of this evidence.",
                    next: "focus_evidence_value_ch7"
                }
            ]
        },

        // Scene 45: Speculate on Pike's Motives (Optional)
        speculate_pike_motives_ch7: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Is it for some government contract? \"Medical research\" like Crane mentioned from the prologue? Or just Pike's own sadistic curiosity? Either way, this is explosive.'",
            next: "doc_photographs_evidence"
        },

        // Scene 46: Focus on Evidence Value (Optional)
        focus_evidence_value_ch7: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'This... this is a goldmine of a different sort. Evidence that could destroy Pike, or make me a very wealthy man. Or both.'",
            next: "doc_photographs_evidence"
        },

        // Scene 47: Doc Photographs Everything
        doc_photographs_evidence: {
            speaker: "Narrator",
            text: "Using a small, concealable camera he'd acquired, Doc meticulously photographed every damning page, every horrifying image. His hands were surprisingly steady. This was not about morality; it was about leverage.",
            next: "doc_plans_to_sell_info"
        },

        // Scene 48: Planning to Sell the Information
        doc_plans_to_sell_info: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'The government might pay for this, to cover up their involvement or prosecute a rogue agent. Pike's competitors would pay a king's ransom. Even a crusading journalist from back East...' His mind whirled with possibilities.",
            next: "a_dangerous_game_ch7"
        },

        // Scene 49: A Dangerous Game
        a_dangerous_game_ch7: {
            speaker: "Narrator",
            text: "Doc Whitmore now held secrets that could ignite a firestorm. He had Pike's trust, Maria's begrudging alliance, and evidence that could bring down powerful men. He smiled, a genuine, predatory smile this time. Perdition was proving to be very profitable indeed.",
            next: "chapter_end_scene_ch7"
        },

        // Scene 50: Chapter End
        chapter_end_scene_ch7: {
            speaker: "Narrator",
            text: "As Doc secured his damning photographs, he knew he was playing a game with deadly stakes. But for a man who had already danced with murder and addiction, danger was just another stimulant. And the potential rewards were intoxicating.",
            choices: [
                {
                    text: "Continue to Chapter 8",
                    next: null,
                    nextChapter: "chapter8"
                }
            ]
        }
    }
};