// Chapter 16: Alliance of the Damned
storyData.chapter16 = {
    name: "Chapter 16",
    title: "Alliance of the Damned",
    scenes: {
        // Scene 1: Fugitives in the Wilderness
        start: {
            speaker: "Narrator",
            text: "Days bled into a week. Elijah, Maria, Doc, and Jacob were fugitives, haunted by the gunfire that killed Samuel Crane and the damning knowledge in his journal. Their escape from Perdition's jail had been desperate, their path uncertain, leading them deep into the badlands under Silas Rivers' grudging protection.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 16');
            },
            next: "rivers_gang_hideout_intro"
        },

        // Scene 2: The Rivers Gang Hideout
        rivers_gang_hideout_intro: {
            speaker: "Narrator",
            text: "The Rivers Gang hideout was a collection of rough-hewn cabins and caves nestled in a box canyon, well-hidden and easily defensible. It reeked of unwashed men, gun oil, and simmering violence. Not a place for a preacher, a schoolteacher, or a reforming doctor.",
            next: "initial_tension_with_gang_members"
        },

        // Scene 3: Initial Tension
        initial_tension_with_gang_members: {
            speaker: "Narrator",
            text: "The gang members eyed the newcomers with open suspicion and hostility. Only Silas's iron will kept them from outright aggression.",
            next: "silas_lays_down_rules"
        },

        // Scene 4: Silas Lays Down Rules
        silas_rivers_lays_down_rules: {
            speaker: "Silas Rivers",
            text: "'You four are here because Pike wants you dead as much as he wants me. That makes us... temporary bedfellows. You pull your weight, you follow my rules, maybe you live. Cause trouble...' He let the threat hang.",
            next: "elijah_moral_discomfort_intro"
        },

        // Scene 5: Elijah's Moral Discomfort
        elijah_moral_discomfort_intro: {
            speaker: "Elijah Cross",
            text: "(Internal) 'Working with murderers, thieves... an alliance of the damned indeed. Is this what atonement looks like? Or am I just sinking deeper into the mire?'",
            choices: [
                {
                    text: "Try to find a quiet place for prayer and reflection.",
                    next: "elijah_seeks_solitude_for_prayer"
                },
                {
                    text: "Observe the gang, trying to understand them.",
                    next: "elijah_observes_gang_dynamics"
                }
            ]
        },

        // Scene 6: Elijah Seeks Solitude (Optional)
        elijah_seeks_solitude_for_prayer: {
            speaker: "Narrator",
            text: "Elijah found a secluded rock outcropping. His prayers felt hollow, choked by the blatant criminality surrounding him. How could justice for the children emerge from such a tainted alliance?",
            next: "elijah_observes_gang_dynamics" // Converge
        },

        // Scene 7: Elijah Observes Gang (Optional or Converging)
        elijah_observes_gang_dynamics: {
            speaker: "Narrator",
            text: "He watched the gang: rough men, yes, but some showed flashes of camaraderie, even kindness to each other. It was a perverse mirror of a community, bound by loyalty to Silas and a shared life outside the law.",
            next: "maria_and_silas_conversation_intro"
        },

        // Scene 8: Maria and Silas - Common Ground
        maria_and_silas_conversation_intro: {
            speaker: "Narrator",
            text: "Maria, ever the pragmatist, sought out Silas Rivers directly. She found him cleaning his prized Colt Dragoons.",
            next: "maria_approaches_silas_directly"
        },

        maria_approaches_silas_directly: {
            speaker: "Maria Vasquez",
            text: "'Silas. We need to talk about Pike. Your attack on the shipment failed. My attempt to... acquire assets from him also went awry. He's expecting us to be broken. We need a new plan.'",
            next: "silas_appraises_maria"
        },

        silas_appraises_maria: {
            speaker: "Silas Rivers",
            text: "'You got nerve, girl, I'll give you that. Coming into my camp, making demands.' He squinted at her. 'That accent... not from around here. Mexico, maybe?'",
            next: "maria_reveals_heritage_to_silas"
        },

        // Scene 11: Maria Reveals Heritage
        maria_reveals_heritage_to_silas: {
            speaker: "Maria Vasquez",
            text: "'Sonora. A long time ago.' A flicker of something – pain, memory – crossed her face. 'My family lost everything to men like Pike. Corrupt officials, land grabbers.'",
            next: "silas_shares_his_own_past_loss"
        },

        // Scene 12: Silas Shares His Loss
        silas_shares_his_own_past_loss: {
            speaker: "Silas Rivers",
            text: "'My wife... Elena... she was from a village south of the border. Wiped out by bandits backed by American money looking to clear the land for cattle.' His voice grew gravelly. 'Some losses, they never heal. They just... fester.'",
            choices: [
                {
                    text: "Maria: 'So you understand what drives me.'",
                    next: "maria_finds_common_drive_with_silas"
                },
                {
                    text: "Maria: 'Pity doesn't win battles, Silas.'",
                    next: "maria_maintains_hard_stance_with_silas"
                }
            ]
        },

        // Scene 13: Maria Finds Common Drive (Optional)
        maria_finds_common_drive_with_silas: {
            speaker: "Maria Vasquez",
            text: "'Then you understand that men like Pike don't stop until they are stopped. Permanently. My reasons are my own, but our enemy is the same.'",
            next: "silas_maria_unlikely_bond_forms"
        },

        // Scene 14: Maria Maintains Hard Stance (Optional)
        maria_maintains_hard_stance_with_silas: {
            speaker: "Maria Vasquez",
            text: "'Sympathy is a luxury, Silas. Results are what matter. Pike has children in that mine. That's a weakness we can exploit. And he has my target, Dalton.'",
            next: "silas_maria_unlikely_bond_forms"
        },
        
        // Scene 15: An Unlikely Bond
        silas_maria_unlikely_bond_forms: {
            speaker: "Narrator",
            text: "An understanding passed between the aging outlaw and the vengeful gunslinger. Both were ruthless, both had suffered profound loss, and both understood the harsh language of survival and retribution.",
            next: "doc_whitmore_medical_duties_intro"
        },

        // Scene 16: Doc's Medical Duties
        doc_whitmore_medical_duties_intro: {
            speaker: "Narrator",
            text: "Doc Whitmore, meanwhile, was put to work. Several gang members had injuries from the failed shipment raid and previous skirmishes. His laudanum supply was dwindling, confiscated by Maria 'for rationing', and the withdrawal was making his hands tremble.",
            next: "doc_treating_gang_member"
        },

        // Scene 17: Treating a Gang Member
        doc_treating_gang_member: {
            speaker: "Injured Gang Member",
            text: "'Easy with that needle, Doc! Heard you got shaky hands when you ain't had your... tonic.' The outlaw eyed him suspiciously.",
            next: "doc_struggles_with_sobriety_and_duty"
        },

        // Scene 18: Doc's Struggle
        doc_struggles_with_sobriety_and_duty: {
            speaker: "Doc Whitmore",
            text: "'My hands are perfectly steady when a life is on the line.' Doc forced a veneer of professionalism, though a cold sweat beaded his brow. 'Now hold still. This will sting.'",
            next: "doc_realizes_value_to_gang"
        },
        
        // Scene 19: Doc Realizes His Value
        doc_realizes_value_to_gang: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'They need me. As long as they need my skills, I'm useful. Alive. Perhaps sobriety isn't the worst fate... if it keeps me breathing. And if I can find a way to replenish my private stock...'",
            next: "doc_negotiates_for_supplies_or_payment"
        },

        // Scene 20-22: Doc's Negotiation (Montage)
        doc_negotiates_for_supplies_or_payment: {
            speaker: "Narrator",
            text: "Doc began to subtly negotiate with Silas for better medical supplies, and perhaps, a 'stipend' for his services. He was, after all, a Boston-trained physician.",
            next: "doc_finds_gang_respects_skill"
        },
        doc_finds_gang_respects_skill: {
            speaker: "Narrator",
            text: "To his surprise, Silas agreed to some of his terms. Outlaws valued a skilled doctor, even a flawed one. Doc's fight to stay functional became a daily, agonizing battle, but his mind remained sharp, looking for angles.",
            next: "jacob_seeks_out_silas"
        },

        // Scene 23: Jacob Confronts Silas
        jacob_seeks_out_silas: {
            speaker: "Narrator",
            text: "Jacob, armed with the terrible knowledge from Crane's journal and his own discoveries, finally found the courage to confront his father. He found Silas staring into a campfire, alone.",
            next: "jacob_begins_confrontation_with_silas"
        },

        jacob_begins_confrontation_with_silas: {
            speaker: "Jacob Rivers",
            text: "'Pa. We need to talk. About what you've done. What our family has become.'",
            next: "silas_cold_response_to_jacob_ch16"
        },

        // Scene 25: Silas's Cold Response
        silas_cold_response_to_jacob_ch16: {
            speaker: "Silas Rivers",
            text: "'Become? We've always been what we are, boy. Survivors. Predators. The world ain't kind to sheep. You learned that in Texas, or so I thought.'",
            next: "jacob_accuses_silas_of_his_crimes"
        },

        // Scene 26: Jacob's Accusation
        jacob_accuses_silas_of_his_crimes: {
            speaker: "Jacob Rivers",
            text: "'Survival doesn't mean preying on the weak! Stealing from folks who have nothing! That bank in Texas... the teller... And Pike! You'd work with a man like Pike, who poisons children?'",
            choices: [
                {
                    text: "Show Crane's journal to Silas.",
                    next: "jacob_shows_crane_journal_to_silas"
                },
                {
                    text: "Focus on Pike's child exploitation.",
                    next: "jacob_focuses_on_pike_children_to_silas"
                }
            ]
        },

        // Scene 27: Jacob Shows Journal (Optional)
        jacob_shows_crane_journal_to_silas: {
            speaker: "Narrator",
            text: "Jacob pulled out Crane's journal. 'This details Pike's evil for seventeen years, Pa! Is this who the Rivers Gang allies with now?'",
            next: "silas_dismisses_journal_initially"
        },
        
        // Scene 28: Silas Dismisses Journal (If shown)
        silas_dismisses_journal_initially: {
            speaker: "Silas Rivers",
            text: "'An undertaker's ramblings? Means nothing. Pike's a snake, sure. But his silver spends same as any other.'",
            next: "jacob_focuses_on_pike_children_to_silas" // Converge
        },

        // Scene 29: Jacob Focuses on Children (Optional or Converging)
        jacob_focuses_on_pike_children_to_silas: {
            speaker: "Jacob Rivers",
            text: "'He's using children in those mines, Pa! Forcing them to dig his poison silver! The same way he did at that residential school years ago! Is that the Rivers way now? Harming children?'",
            next: "silas_moment_of_hesitation_or_anger"
        },

        // Scene 30: Silas Hesitates or Shows Anger
        silas_moment_of_hesitation_or_anger: {
            speaker: "Narrator",
            text: "For the first time, a flicker of something unreadable crossed Silas's face. Was it discomfort? Or just annoyance at his son's naivete?",
            next: "silas_justification_or_deflection"
        },

        // Scene 31: Silas's Justification
        silas_justification_or_deflection: {
            speaker: "Silas Rivers",
            text: "'Pike's business is his own. My business is taking his silver. The world is a cruel place, Jacob. You save who you can, and you damn the rest. I saved you from Pike's bullet, didn't I?'",
            next: "jacob_realizes_father_unchanged_or_conflicted"
        },
        
        // Scene 32: Jacob's Realization
        jacob_realizes_father_unchanged_or_conflicted: {
            speaker: "Jacob Rivers",
            text: "'You saved me to use me. To keep the gang strong.' Jacob sighed, the fight draining out of him. His father would never change. Or would he? That flicker... was it shame?",
            next: "silas_shifts_to_practicalities_pike"
        },

        // Scene 33: Silas Shifts to Pike
        silas_shifts_to_practicalities_pike: {
            speaker: "Silas Rivers",
            text: "'Enough of this. Pike has my silver, and he tried to kill my son – twice. That score needs settling. Those children you're so worried about? They're in Pike's mine. We hit the mine, we get the silver, we free the brats, we destroy Pike. Everyone gets something.'",
            next: "gathering_for_assault_plan"
        },

        // Scene 34: Gathering to Plan the Assault
        gathering_for_assault_plan: {
            speaker: "Narrator",
            text: "Silas called a meeting. The four protagonists and Silas's most trusted lieutenants gathered around a crudely drawn map of Pike's North Ridge mine.",
            next: "jacob_provides_mine_intel"
        },

        // Scene 35: Jacob Provides Mine Intel
        jacob_provides_mine_intel: {
            speaker: "Jacob Rivers",
            text: "'I worked in Section Gamma. There are older, unstable tunnels. And I saw where they take the children – a secondary shaft, heavily guarded, leading deeper down.'",
            next: "maria_provides_tactical_assessment_ch16"
        },

        // Scene 36: Maria's Tactical Assessment
        maria_provides_tactical_assessment_ch16: {
            speaker: "Maria Vasquez",
            text: "'Pike's main force will be protecting the silver processing area and his office. The child labor camp will have fewer, but likely more brutal, guards. A simultaneous assault is too risky. We need a diversion.'",
            next: "doc_adds_information_from_josiah"
        },

        // Scene 37: Doc Adds Josiah's Intel
        doc_adds_information_from_josiah: {
            speaker: "Doc Whitmore",
            text: "'Josiah Truth, before his... accident... babbled about Pike's full operation. Secret passages, ventilation shafts that could be used for entry or sabotage. He also mentioned Pike's connections to a General Morrison – expect possible military-grade weapons or discipline among some guards.'",
            next: "elijah_focuses_on_freeing_children"
        },

        // Scene 38: Elijah's Focus
        elijah_focuses_on_freeing_children: {
            speaker: "Elijah Cross",
            text: "'The silver is secondary. Our primary goal must be to free those children. Any plan must prioritize their safety and escape.' His voice brooked no argument on this point.",
            choices: [
                {
                    text: "Silas: 'The silver pays for their freedom, Preacher.'",
                    next: "silas_argues_for_silver_priority"
                },
                {
                    text: "Maria: 'Dead children can't be freed. Stealth first.'",
                    next: "maria_argues_for_stealth_ch16"
                }
            ]
        },

        // Scene 39: Silas Argues Silver (Optional)
        silas_argues_for_silver_priority: {
            speaker: "Silas Rivers",
            text: "'Sentiment is fine, Preacher, but that silver will fund getting those children far away from here and starting new lives. And it'll fund our war against Pike.'",
            next: "plan_solidifies_diversion_and_infiltration"
        },

        // Scene 40: Maria Argues Stealth (Optional)
        maria_argues_for_stealth_ch16: {
            speaker: "Maria Vasquez",
            text: "'A frontal assault on the children's section is a death sentence for them. We need a small, skilled team to infiltrate while the main force creates a diversion at the silver processing plant.'",
            next: "plan_solidifies_diversion_and_infiltration"
        },
        
        // Scene 41-43: The Plan Solidifies (Montage)
        plan_solidifies_diversion_and_infiltration: {
            speaker: "Narrator",
            text: "The plan took shape: The Rivers Gang would launch a noisy, aggressive assault on Pike's main silver operations, drawing the bulk of his forces.",
            next: "protagonists_infiltration_team_role"
        },
        protagonists_infiltration_team_role: {
            speaker: "Narrator",
            text: "Meanwhile, Elijah, Maria, Jacob, and a reluctant Doc (his medical skills deemed essential if children were injured) would use a hidden entrance – possibly one Crane hinted at or that Jacob knew – to reach the underground child labor camp.",
            next: "objectives_free_children_get_evidence"
        },
        objectives_free_children_get_evidence: {
            speaker: "Narrator",
            text: "Their objective: free the children, secure any further evidence of Pike's crimes (perhaps from Josiah's information via Doc or Crane's journal), and escape before Pike realized the true nature of the attack.",
            next: "uneasy_agreement_on_plan"
        },

        // Scene 44: Uneasy Agreement
        uneasy_agreement_on_plan: {
            speaker: "Silas Rivers",
            text: "'It's risky. But Pike won't expect us to split our forces, nor to care about a bunch of sick brats. That might just be our edge.' He looked at Jacob. 'You lead the infiltration team with your... friends. You know those tunnels.'",
            next: "jacob_accepts_leadership_role_hesitantly"
        },

        // Scene 45: Jacob Accepts Leadership
        jacob_accepts_leadership_role_hesitantly: {
            speaker: "Jacob Rivers",
            text: "'I'll do it, Pa. For Samuel. For those kids.' For the first time, Silas saw not the runaway traitor, but a determined young man.",
            next: "final_preparations_for_assault"
        },

        // Scene 46: Final Preparations
        final_preparations_for_assault: {
            speaker: "Narrator",
            text: "The camp buzzed with preparations. Weapons were checked, ammunition counted. The air was thick with the metallic scent of fear and impending battle.",
            next: "elijah_prays_for_strength_and_mercy"
        },

        // Scene 47: Elijah Prays
        elijah_prays_for_strength_and_mercy: {
            speaker: "Elijah Cross",
            text: "(Internal prayer) 'Lord, I walk with sinners to save the innocent. Guide my hand, steady my heart. Let this violence serve a just end, and grant mercy to us all, for we are surely damned in our own ways.'",
            next: "maria_sharpens_her_resolve_and_knives"
        },

        // Scene 48: Maria Sharpens Knives
        maria_sharpens_her_resolve_and_knives: {
            speaker: "Narrator",
            text: "Maria meticulously sharpened her knives, her face a mask of cold focus. Dalton was still out there. Pike was the obstacle. The children were a complication, but their rescue now aligned with her broader goals of destabilizing Pike.",
            next: "doc_hoards_laudanum_or_fights_for_clarity"
        },
        
        // Scene 49: Doc's Preparation
        doc_hoards_laudanum_or_fights_for_clarity: {
            speaker: "Narrator",
            text: "Doc Whitmore either carefully measured out his last doses of laudanum to remain functional, or steeled himself for the agony of clear-headed battle, knowing his skills would be desperately needed. He packed extra bandages and his strongest sedatives.",
            next: "chapter_end_scene_ch16"
        },

        // Scene 50: Chapter End - Eve of Battle
        chapter_end_scene_ch16: {
            speaker: "Narrator",
            text: "As the blood moon began to rise, casting an ominous crimson glow over the badlands, the unlikely alliance of protagonists and outlaws made their final preparations. The assault on Pike's mine was set for the deepest hour of the night. For the children, for revenge, for profit, for redemption – they rode towards Perdition's dark heart.",
            choices: [
                {
                    text: "Continue to Chapter 17",
                    next: null,
                    nextChapter: "chapter17"
                }
            ]
        }
    }
};