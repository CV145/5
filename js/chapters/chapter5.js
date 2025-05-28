// Chapter 5: The Binding
storyData.chapter5 = {
    name: "Chapter 5",
    title: "The Binding",
    scenes: {
        ritual_trap: {
            text: "Purple energy crackles around you as Silas's ritual takes hold. Ethereal chains wrap around your limbs, each link pulsing with the weight of your deepest traumas. The abandoned factory floor beneath you glows with arcane symbols, feeding on your pain.",
            choices: [
                { text: "Fight against the magical bonds", next: "struggle_bonds", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ritual_fought_bonds', true); } },
                { text: "Try to understand the ritual's nature", next: "analyze_ritual", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ritual_analyzed', true); } },
                { text: "Reach out to your companions", next: "team_connection", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ritual_team_connection', true); } }
            ]
        },

        struggle_bonds: {
            text: "You strain against the ethereal chains, but they only tighten in response. Each struggle sends waves of your past failures and fears directly into the swirling vortex above. The Hungry Dark begins to coalesce, a writhing mass of shadow and despair.",
            choices: [
                { text: "Channel your willpower differently", next: "willpower_focus", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_willpower_focused', true); } },
                { text: "Accept the pain to understand it", next: "embrace_trauma", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_embraced_trauma', true); } }
            ]
        },

        analyze_ritual: {
            text: "Through the haze of pain, you recognize the ritual's pattern. It's not just feeding on trauma - it's weaponizing it. The symbols are a perversion of healing magic, inverting recovery into endless suffering. But every spell has a weakness...",
            choices: [
                { text: "Look for the ritual's anchor point", next: "find_anchor", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_found_ritual_anchor', true); } },
                { text: "Try to reverse the energy flow", next: "reverse_flow", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_reversed_energy_flow', true); } }
            ]
        },

        team_connection: {
            text: "Despite the isolation of your individual torments, you reach out. Elijah grits through their guilt, Maria fights her betrayals, Thomas battles his losses, and Jacob confronts their past. Together, your shared strength creates hairline cracks in the ritual circle.",
            choices: [
                { text: "Synchronize your resistance", next: "unified_resistance", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_unified_resistance', true); } },
                { text: "Share your burdens with each other", next: "burden_sharing", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_shared_burdens', true); } }
            ]
        },

        willpower_focus: {
            text: "You stop fighting the chains directly and instead focus your will inward. The bonds expect resistance - they're designed for it. But as you find calm within the storm, the purple energy begins to flicker uncertainly.",
            choices: [
                { text: "Meditate deeper despite the danger", next: "deep_meditation", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_deep_meditation', true); } },
                { text: "Use the calm to help others", next: "spread_calm", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_spread_calm', true); } }
            ]
        },

        embrace_trauma: {
            text: "You stop running from the pain and face it head-on. The memories flood through you - but this time, you don't let them control you. The Hungry Dark shudders as its food source becomes something else: acceptance, growth, healing.",
            choices: [
                { text: "Transform trauma into strength", next: "trauma_transformation", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_trauma_transformation', true); } },
                { text: "Overload the creature with healing", next: "healing_overload", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_healing_overload', true); } }
            ]
        },

        find_anchor: {
            text: "Your mystical senses identify it - Silas himself is the anchor. His own unhealed wounds from the town's past are the foundation of this twisted ritual. But before you can act, explosions rock the factory. The cartel and gang have arrived!",
            choices: [
                { text: "Use the chaos to break free", next: "chaos_escape", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_chaos_escape_attempt', true); } },
                { text: "Try to reach Silas through the mayhem", next: "reach_silas", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_reach_silas_attempt', true); } }
            ]
        },

        reverse_flow: {
            text: "You begin inverting the ritual's energy, turning pain into purpose. The Hungry Dark writhes as its meal becomes poison. But the strain is immense - you need more power. That's when gunfire erupts outside.",
            choices: [
                { text: "Draw power from the conflict", next: "conflict_power", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_draw_conflict_power', true); } },
                { text: "Use the distraction to rally your team", next: "rally_team", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_rally_team_distraction', true); } }
            ]
        },

        unified_resistance: {
            text: "Moving as one, you and your companions synchronize your struggles. The ritual circle cracks wider as your combined will proves stronger than individual suffering. The Hungry Dark roars, a sound like a thousand voices crying out in anguish.",
            choices: [
                { text: "Press the advantage together", next: "team_breakthrough", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_press_advantage_together', true); } },
                { text: "Split up to attack multiple weak points", next: "coordinated_assault", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_coordinated_assault_ritual', true); } }
            ]
        },

        burden_sharing: {
            text: "You open your hearts to each other, sharing pain that was meant to isolate. Elijah's guilt becomes lighter when held by all. Maria's betrayals lose their sting when understood. Thomas's losses transform into shared memory. Jacob's past becomes a source of collective strength.",
            choices: [
                { text: "Use shared strength to break free", next: "emotional_breakthrough", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_emotional_breakthrough_attempt', true); } },
                { text: "Turn unity against the Hungry Dark", next: "unity_weapon", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_unity_weapon_attempt', true); } }
            ]
        },

        chaos_escape: {
            text: "The factory becomes a war zone as cartel soldiers clash with gang members. Stray bullets shatter ritual components. In the chaos, your bonds weaken. You break free just as the Hungry Dark fully manifests - a towering nightmare of writhing shadows and gaping maws.",
            choices: [
                { text: "Fight the creature directly", next: "direct_combat", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_fight_monster_directly', true); } },
                { text: "Use the gangs against the monster", next: "redirect_conflict", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_redirect_gangs_vs_monster', true); } },
                { text: "Find Silas in the chaos", next: "locate_silas", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_locate_silas_in_chaos', true); } }
            ]
        },

        reach_silas: {
            text: "You spot Silas near the ritual's center, his face twisted in concentration and pain. He's as much a prisoner of this magic as you were. The corruption has spread through him, but underneath, you see the man who once tried to save this town.",
            choices: [
                { text: "Try to redeem him", next: "silas_redemption", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_attempt_silas_redemption', true); } },
                { text: "Put him out of his misery", next: "mercy_kill", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_mercy_kill_silas', true); } }
            ]
        },

        team_breakthrough: {
            text: "Your unified assault shatters the ritual circle. Purple energy explodes outward as you break free. But the Hungry Dark is already here, feeding on the violence as cartel and gang forces storm the factory. It grows stronger with each death.",
            choices: [
                { text: "Stop the fighting to starve the creature", next: "peace_making", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_stop_fighting_to_starve', true); } },
                { text: "Turn everyone against the common threat", next: "unite_enemies", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_unite_enemies_vs_monster', true); } }
            ]
        },

        emotional_breakthrough: {
            text: "The shared emotional strength breaks the ritual's hold completely. You stand together, transformed by the experience. But the Hungry Dark looms before you, and the sounds of battle echo through the factory as both criminal factions arrive.",
            choices: [
                { text: "Face the monster as a united team", next: "team_final_battle", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_face_monster_as_team', true); } },
                { text: "Split up to handle multiple threats", next: "tactical_split", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_tactical_split_vs_monster', true); } }
            ]
        },

        direct_combat: {
            text: "You engage the Hungry Dark head-on. It's like fighting despair itself - every blow you land is absorbed, every attack you make feeds its growth. But you notice something: acts of courage and hope seem to burn it.",
            choices: [
                { text: "Rally everyone to fight with hope", next: "hope_battle", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_rally_with_hope', true); } },
                { text: "Sacrifice yourself to destroy it", next: "heroic_sacrifice", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_heroic_sacrifice_attempt', true); } }
            ]
        },

        redirect_conflict: {
            text: "You manipulate the battlefield, turning the gangs' aggression toward the true threat. Cartel soldiers and gang members alike scream as the Hungry Dark engulfs them. But their fear only makes it stronger. You need a different approach.",
            choices: [
                { text: "Unite them against the monster", next: "emergency_alliance", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_emergency_alliance_attempt', true); } },
                { text: "Use yourself as bait to save them", next: "sacrifice_play", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_sacrifice_play_attempt', true); } }
            ]
        },

        silas_redemption: {
            text: "'You don't understand!' Silas cries as you approach. 'The town's pain... it never ended. I tried to heal it, but it consumed me!' Tears stream down his corrupted face. 'I became the very thing I fought against.'",
            choices: [
                { text: "Help him find redemption", next: "guide_redemption", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_guide_silas_redemption', true); } },
                { text: "Convince him to sacrifice himself", next: "noble_sacrifice", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_convince_silas_sacrifice', true); } }
            ]
        },

        peace_making: {
            text: "You shout above the gunfire, using every ounce of persuasion to stop the bloodshed. 'Look around you! You're feeding that thing!' As understanding dawns and weapons lower, the Hungry Dark begins to shrink, starved of violence.",
            choices: [
                { text: "Lead the united front", next: "united_victory", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_lead_united_front_victory', true); } },
                { text: "Focus on banishing the weakened creature", next: "banishment_ritual", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_banish_weakened_monster', true); } }
            ]
        },

        team_final_battle: {
            text: "You and your team move as one against the Hungry Dark. Elijah channels his protective instincts, Maria uses her connections to coordinate everyone, Thomas's tactical knowledge guides the battle, and Jacob's supernatural experience provides the edge you need.",
            choices: [
                { text: "Combine your strengths for a final strike", next: "combined_strike", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_combined_strike_final', true); } },
                { text: "Create a ritual of hope to counter despair", next: "hope_ritual", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_hope_ritual_final', true); } }
            ]
        },

        hope_battle: {
            text: "Your call resonates through the chaos. Gang members and cartel soldiers alike remember why they fight - family, loyalty, survival. These sparks of hope burn through the Hungry Dark like fire through shadow. It retreats, diminishing with each act of courage.",
            choices: [
                { text: "Press the advantage with unity", next: "unity_ending", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_unity_victory', true); } },
                { text: "Finish it with a sacrifice of love", next: "love_sacrifice", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_love_sacrifice', true); } }
            ]
        },

        heroic_sacrifice: {
            text: "You make the ultimate choice. Channeling every positive emotion, every hope and dream, you throw yourself into the creature's core. The Hungry Dark convulses as your sacrifice becomes a bomb of pure light within its darkness.",
            choices: [
                { text: "Accept your fate", next: "sacrifice_ending", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_sacrifice_accept_fate', true); } },
                { text: "Fight to survive within the light", next: "miracle_survival", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_sacrifice_miracle_survival', true); } }
            ]
        },

        guide_redemption: {
            text: "You reach out to Silas, helping him remember who he was. Together, you begin unweaving the ritual from within. The Hungry Dark shrieks as its source of power becomes a force for healing. Silas glows with renewed purpose.",
            choices: [
                { text: "Complete the redemption together", next: "redemption_ending", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_silas_redeemed_together', true); } },
                { text: "Let Silas make the final choice", next: "silas_choice", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_silas_final_choice', true); } }
            ]
        },

        united_victory: {
            text: "Cartel soldiers and gang members stand side by side, their conflict forgotten in the face of true evil. The Hungry Dark, starved of suffering and faced with unity, begins to dissolve. You've turned enemies into allies through shared purpose.",
            choices: [
                { text: "Seal away the creature forever", next: "sealing_ending", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_sealed_forever', true); } },
                { text: "Transform it into something better", next: "transformation_ending", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_transformed_monster', true); } }
            ]
        },

        combined_strike: {
            text: "Your team channels everything you've learned, everything you've overcome. The strike hits the Hungry Dark with the force of redemption itself. The creature doesn't just die - it transforms, its darkness becoming light, its hunger becoming fulfillment.",
            choices: [
                { text: "Guide the transformation", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_guided_transformation', true); updateStoryVariable('storyVariables.final_ending_type', 'Transformation'); } },
                { text: "Ensure it never returns", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_permanent_victory', true); updateStoryVariable('storyVariables.final_ending_type', 'Transformation'); } }
            ]
        },

        unity_ending: {
            text: "The factory falls silent except for heavy breathing and whispered prayers. The Hungry Dark is gone, destroyed by the very unity it sought to prevent. Former enemies help each other to their feet. The town's cycle of violence shows its first cracks.",
            choices: [
                { text: "Establish a new peace", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_unity_peace', true); updateStoryVariable('storyVariables.final_ending_type', 'Unity'); } },
                { text: "Help rebuild what was broken", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_unity_rebuild', true); updateStoryVariable('storyVariables.final_ending_type', 'Unity'); } }
            ]
        },

        sacrifice_ending: {
            text: "Your sacrifice burns away the Hungry Dark from within. As consciousness fades, you see your team rallying the survivors, former enemies working together. Your death becomes the foundation for new life. The town will remember you as the one who broke the cycle.",
            choices: [
                { text: "Find peace in sacrifice", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_sacrifice_peace', true); updateStoryVariable('storyVariables.final_ending_type', 'Sacrifice'); } },
                { text: "Leave a final message", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_sacrifice_message', true); updateStoryVariable('storyVariables.final_ending_type', 'Sacrifice'); } }
            ]
        },

        redemption_ending: {
            text: "Silas channels his renewed purpose into undoing years of corruption. The Hungry Dark dissolves as its creator reclaims his soul. 'Thank you,' he whispers, aging rapidly as dark magic leaves him. 'The town... can finally heal.'",
            choices: [
                { text: "Help him in his final moments", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_redemption_silas_peace', true); updateStoryVariable('storyVariables.final_ending_type', 'Redemption'); } },
                { text: "Ensure his sacrifice means something", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_redemption_honor_silas', true); updateStoryVariable('storyVariables.final_ending_type', 'Redemption'); } }
            ]
        },

        transformation_ending: {
            text: "Instead of destroying the Hungry Dark, you transform it. The creature of despair becomes a guardian of hope, its hunger now a desire to protect rather than consume. The town gains an unlikely protector born from its own redeemed darkness.",
            choices: [
                { text: "Guide the new guardian", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_transformed_monster', true); updateStoryVariable('storyVariables.final_ending_type', 'Transformation'); } },
                { text: "Establish new protections", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_outcome_new_protections', true); updateStoryVariable('storyVariables.final_ending_type', 'Transformation'); } }
            ]
        },

        // Missing scenes that are referenced but don't exist
        deep_meditation: {
            text: "You sink deeper into meditation, even as the ritual tries to feed on your inner peace. Paradoxically, this makes you harder to drain - the Hungry Dark expects struggle, not serenity.",
            next: "peace_making"
        },

        spread_calm: {
            text: "You extend your newfound calm to your companions. One by one, they find their own centers of peace within the storm. The ritual begins to fail as its fuel transforms from despair to hope.",
            next: "team_breakthrough"
        },

        trauma_transformation: {
            text: "Your traumas don't disappear - they transform into strength, wisdom, compassion. The Hungry Dark recoils as its food becomes medicine. You've turned pain into power.",
            next: "healing_overload"
        },

        healing_overload: {
            text: "You channel healing energy directly into the creature's core. It writhes and shrinks, unable to process the positive emotions you're forcing into its system. The effect spreads to your companions.",
            next: "redemption_ending"
        },

        conflict_power: {
            text: "You draw on the chaotic energy of the battle raging outside, but instead of using it for destruction, you transform it into a force for healing. The reversed ritual begins to work.",
            next: "guide_redemption"
        },

        rally_team: {
            text: "Using the distraction of the gunfight, you rally your team. Together, you focus your combined will on breaking the ritual completely.",
            next: "team_breakthrough"
        },

        coordinated_assault: {
            text: "Each of you attacks a different weakness in the ritual circle. The coordinated assault shatters multiple binding points simultaneously.",
            next: "chaos_escape"
        },

        unity_weapon: {
            text: "Your shared unity becomes a weapon against the Hungry Dark. It cannot comprehend or consume the pure connection between you.",
            next: "united_victory"
        },

        locate_silas: {
            text: "Fighting through the chaos, you reach Silas at the ritual's heart. His eyes show both madness and desperate hope.",
            next: "silas_redemption"
        },

        tactical_split: {
            text: "You split up to handle multiple threats - some fight the creature, others evacuate civilians, creating a coordinated response to the crisis.",
            next: "emergency_alliance"
        },

        emergency_alliance: {
            text: "In the face of supernatural horror, former enemies join forces. Cartel soldiers and gang members fight side by side against the true threat.",
            next: "united_victory"
        },

        sacrifice_play: {
            text: "You put yourself in danger to save both rival factions, earning their respect and unity through your selfless act.",
            next: "hope_battle"
        },

        noble_sacrifice: {
            text: "Silas accepts that his sacrifice is needed. Together, you work to undo the damage he caused, his death becoming an act of redemption.",
            next: "redemption_ending"
        },

        mercy_kill: {
            text: "With heavy heart, you end Silas's suffering. His corruption dies with him, and the ritual collapses without its anchor.",
            next: "sacrifice_ending"
        },

        unite_enemies: {
            text: "You convince both factions that the real enemy is the Hungry Dark, not each other. Their combined strength turns the tide.",
            next: "united_victory"
        },

        hope_ritual: {
            text: "You create a counter-ritual of hope and healing, using your team's bonds as the foundation. Light spreads through the darkness.",
            next: "unity_ending"
        },

        love_sacrifice: {
            text: "One of your team makes the ultimate sacrifice out of love for the others and the town. Their death becomes a beacon of light that destroys the Hungry Dark.",
            next: "sacrifice_ending"
        },

        miracle_survival: {
            text: "Against all odds, your sacrifice doesn't kill you - instead, it transforms you into something that can exist alongside the light you've created.",
            next: "transformation_ending"
        },

        silas_choice: {
            text: "You give Silas the choice of how to proceed. He chooses redemption over revenge, healing over hatred.",
            next: "redemption_ending"
        },

        sealing_ending: {
            text: "The united forces seal the Hungry Dark away forever, binding it with chains of unity and hope rather than fear and division.",
            choices: [
                { text: "Ensure the seal holds", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_unity_peace', true); updateStoryVariable('storyVariables.final_ending_type', 'Unity'); } },
                { text: "Plan for the future", next: "epilogue_perch", onChoose: function() { updateStoryVariable('flags.chapter5_flags.c5_ending_path_unity_rebuild', true); updateStoryVariable('storyVariables.final_ending_type', 'Unity'); } }
            ]
        },

        banishment_ritual: {
            text: "With the creature weakened, you perform a ritual to banish it back to whatever dark realm it came from.",
            next: "unity_ending"
        },

        epilogue_perch: {
            speaker: "Narrator",
            text: "The dust begins to settle over Perdition, literally and figuratively. The immediate crisis has passed, but the scars remain, and the path forward is uncertain. New alliances have been forged in fire, and old enmities, though perhaps quieted, still linger beneath the surface. The future of Perdition, and your role in it, awaits.",
            next: null,
            nextChapter: "chapter6",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 5 Epilogue');
            }
        }
    }
};