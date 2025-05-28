// Chapter 5: The Binding
storyData.chapter5 = {
    name: "Chapter 5",
    title: "The Binding",
    scenes: {
        ritual_trap: {
            text: "Purple energy crackles around you as Silas's ritual takes hold. Ethereal chains wrap around your limbs, each link pulsing with the weight of your deepest traumas. The abandoned factory floor beneath you glows with arcane symbols, feeding on your pain.",
            choices: [
                { text: "Fight against the magical bonds", nextScene: "struggle_bonds" },
                { text: "Try to understand the ritual's nature", nextScene: "analyze_ritual" },
                { text: "Reach out to your companions", nextScene: "team_connection" }
            ]
        },

        struggle_bonds: {
            text: "You strain against the ethereal chains, but they only tighten in response. Each struggle sends waves of your past failures and fears directly into the swirling vortex above. The Hungry Dark begins to coalesce, a writhing mass of shadow and despair.",
            choices: [
                { text: "Channel your willpower differently", nextScene: "willpower_focus" },
                { text: "Accept the pain to understand it", nextScene: "embrace_trauma" }
            ]
        },

        analyze_ritual: {
            text: "Through the haze of pain, you recognize the ritual's pattern. It's not just feeding on trauma - it's weaponizing it. The symbols are a perversion of healing magic, inverting recovery into endless suffering. But every spell has a weakness...",
            choices: [
                { text: "Look for the ritual's anchor point", nextScene: "find_anchor" },
                { text: "Try to reverse the energy flow", nextScene: "reverse_flow" }
            ]
        },

        team_connection: {
            text: "Despite the isolation of your individual torments, you reach out. Alex grits through their guilt, Maria fights her betrayals, David battles his losses, and Lily confronts her past. Together, your shared strength creates hairline cracks in the ritual circle.",
            choices: [
                { text: "Synchronize your resistance", nextScene: "unified_resistance" },
                { text: "Share your burdens with each other", nextScene: "burden_sharing" }
            ]
        },

        willpower_focus: {
            text: "You stop fighting the chains directly and instead focus your will inward. The bonds expect resistance - they're designed for it. But as you find calm within the storm, the purple energy begins to flicker uncertainly.",
            choices: [
                { text: "Meditate deeper despite the danger", nextScene: "deep_meditation" },
                { text: "Use the calm to help others", nextScene: "spread_calm" }
            ]
        },

        embrace_trauma: {
            text: "You stop running from the pain and face it head-on. The memories flood through you - but this time, you don't let them control you. The Hungry Dark shudders as its food source becomes something else: acceptance, growth, healing.",
            choices: [
                { text: "Transform trauma into strength", nextScene: "trauma_transformation" },
                { text: "Overload the creature with healing", nextScene: "healing_overload" }
            ]
        },

        find_anchor: {
            text: "Your mystical senses identify it - Silas himself is the anchor. His own unhealed wounds from the town's past are the foundation of this twisted ritual. But before you can act, explosions rock the factory. The cartel and gang have arrived!",
            choices: [
                { text: "Use the chaos to break free", nextScene: "chaos_escape" },
                { text: "Try to reach Silas through the mayhem", nextScene: "reach_silas" }
            ]
        },

        reverse_flow: {
            text: "You begin inverting the ritual's energy, turning pain into purpose. The Hungry Dark writhes as its meal becomes poison. But the strain is immense - you need more power. That's when gunfire erupts outside.",
            choices: [
                { text: "Draw power from the conflict", nextScene: "conflict_power" },
                { text: "Use the distraction to rally your team", nextScene: "rally_team" }
            ]
        },

        unified_resistance: {
            text: "Moving as one, you and your companions synchronize your struggles. The ritual circle cracks wider as your combined will proves stronger than individual suffering. The Hungry Dark roars, a sound like a thousand voices crying out in anguish.",
            choices: [
                { text: "Press the advantage together", nextScene: "team_breakthrough" },
                { text: "Split up to attack multiple weak points", nextScene: "coordinated_assault" }
            ]
        },

        burden_sharing: {
            text: "You open your hearts to each other, sharing pain that was meant to isolate. Alex's guilt becomes lighter when held by all. Maria's betrayals lose their sting when understood. David's losses transform into shared memory. Lily's past becomes a source of collective strength.",
            choices: [
                { text: "Use shared strength to break free", nextScene: "emotional_breakthrough" },
                { text: "Turn unity against the Hungry Dark", nextScene: "unity_weapon" }
            ]
        },

        chaos_escape: {
            text: "The factory becomes a war zone as cartel soldiers clash with gang members. Stray bullets shatter ritual components. In the chaos, your bonds weaken. You break free just as the Hungry Dark fully manifests - a towering nightmare of writhing shadows and gaping maws.",
            choices: [
                { text: "Fight the creature directly", nextScene: "direct_combat" },
                { text: "Use the gangs against the monster", nextScene: "redirect_conflict" },
                { text: "Find Silas in the chaos", nextScene: "locate_silas" }
            ]
        },

        reach_silas: {
            text: "You spot Silas near the ritual's center, his face twisted in concentration and pain. He's as much a prisoner of this magic as you were. The corruption has spread through him, but underneath, you see the man who once tried to save this town.",
            choices: [
                { text: "Try to redeem him", nextScene: "silas_redemption" },
                { text: "Put him out of his misery", nextScene: "mercy_kill" }
            ]
        },

        team_breakthrough: {
            text: "Your unified assault shatters the ritual circle. Purple energy explodes outward as you break free. But the Hungry Dark is already here, feeding on the violence as cartel and gang forces storm the factory. It grows stronger with each death.",
            choices: [
                { text: "Stop the fighting to starve the creature", nextScene: "peace_making" },
                { text: "Turn everyone against the common threat", nextScene: "unite_enemies" }
            ]
        },

        emotional_breakthrough: {
            text: "The shared emotional strength breaks the ritual's hold completely. You stand together, transformed by the experience. But the Hungry Dark looms before you, and the sounds of battle echo through the factory as both criminal factions arrive.",
            choices: [
                { text: "Face the monster as a united team", nextScene: "team_final_battle" },
                { text: "Split up to handle multiple threats", nextScene: "tactical_split" }
            ]
        },

        direct_combat: {
            text: "You engage the Hungry Dark head-on. It's like fighting despair itself - every blow you land is absorbed, every attack you make feeds its growth. But you notice something: acts of courage and hope seem to burn it.",
            choices: [
                { text: "Rally everyone to fight with hope", nextScene: "hope_battle" },
                { text: "Sacrifice yourself to destroy it", nextScene: "heroic_sacrifice" }
            ]
        },

        redirect_conflict: {
            text: "You manipulate the battlefield, turning the gangs' aggression toward the true threat. Cartel soldiers and gang members alike scream as the Hungry Dark engulfs them. But their fear only makes it stronger. You need a different approach.",
            choices: [
                { text: "Unite them against the monster", nextScene: "emergency_alliance" },
                { text: "Use yourself as bait to save them", nextScene: "sacrifice_play" }
            ]
        },

        silas_redemption: {
            text: "'You don't understand!' Silas cries as you approach. 'The town's pain... it never ended. I tried to heal it, but it consumed me!' Tears stream down his corrupted face. 'I became the very thing I fought against.'",
            choices: [
                { text: "Help him find redemption", nextScene: "guide_redemption" },
                { text: "Convince him to sacrifice himself", nextScene: "noble_sacrifice" }
            ]
        },

        peace_making: {
            text: "You shout above the gunfire, using every ounce of persuasion to stop the bloodshed. 'Look around you! You're feeding that thing!' As understanding dawns and weapons lower, the Hungry Dark begins to shrink, starved of violence.",
            choices: [
                { text: "Lead the united front", nextScene: "united_victory" },
                { text: "Focus on banishing the weakened creature", nextScene: "banishment_ritual" }
            ]
        },

        team_final_battle: {
            text: "You and your team move as one against the Hungry Dark. Alex channels his protective instincts, Maria uses her connections to coordinate everyone, David's tactical knowledge guides the battle, and Lily's supernatural experience provides the edge you need.",
            choices: [
                { text: "Combine your strengths for a final strike", nextScene: "combined_strike" },
                { text: "Create a ritual of hope to counter despair", nextScene: "hope_ritual" }
            ]
        },

        hope_battle: {
            text: "Your call resonates through the chaos. Gang members and cartel soldiers alike remember why they fight - family, loyalty, survival. These sparks of hope burn through the Hungry Dark like fire through shadow. It retreats, diminishing with each act of courage.",
            choices: [
                { text: "Press the advantage with unity", nextScene: "unity_ending" },
                { text: "Finish it with a sacrifice of love", nextScene: "love_sacrifice" }
            ]
        },

        heroic_sacrifice: {
            text: "You make the ultimate choice. Channeling every positive emotion, every hope and dream, you throw yourself into the creature's core. The Hungry Dark convulses as your sacrifice becomes a bomb of pure light within its darkness.",
            choices: [
                { text: "Accept your fate", nextScene: "sacrifice_ending" },
                { text: "Fight to survive within the light", nextScene: "miracle_survival" }
            ]
        },

        guide_redemption: {
            text: "You reach out to Silas, helping him remember who he was. Together, you begin unweaving the ritual from within. The Hungry Dark shrieks as its source of power becomes a force for healing. Silas glows with renewed purpose.",
            choices: [
                { text: "Complete the redemption together", nextScene: "redemption_ending" },
                { text: "Let Silas make the final choice", nextScene: "silas_choice" }
            ]
        },

        united_victory: {
            text: "Cartel soldiers and gang members stand side by side, their conflict forgotten in the face of true evil. The Hungry Dark, starved of suffering and faced with unity, begins to dissolve. You've turned enemies into allies through shared purpose.",
            choices: [
                { text: "Seal away the creature forever", nextScene: "sealing_ending" },
                { text: "Transform it into something better", nextScene: "transformation_ending" }
            ]
        },

        combined_strike: {
            text: "Your team channels everything you've learned, everything you've overcome. The strike hits the Hungry Dark with the force of redemption itself. The creature doesn't just die - it transforms, its darkness becoming light, its hunger becoming fulfillment.",
            choices: [
                { text: "Guide the transformation", nextScene: "healing_ending" },
                { text: "Ensure it never returns", nextScene: "permanent_victory" }
            ]
        },

        unity_ending: {
            text: "The factory falls silent except for heavy breathing and whispered prayers. The Hungry Dark is gone, destroyed by the very unity it sought to prevent. Former enemies help each other to their feet. The town's cycle of violence shows its first cracks.",
            choices: [
                { text: "Establish a new peace", nextScene: "peace_aftermath" },
                { text: "Help rebuild what was broken", nextScene: "rebuilding_aftermath" }
            ]
        },

        sacrifice_ending: {
            text: "Your sacrifice burns away the Hungry Dark from within. As consciousness fades, you see your team rallying the survivors, former enemies working together. Your death becomes the foundation for new life. The town will remember you as the one who broke the cycle.",
            choices: [
                { text: "Find peace in sacrifice", nextScene: "heroic_memory" },
                { text: "Leave a final message", nextScene: "last_words" }
            ]
        },

        redemption_ending: {
            text: "Silas channels his renewed purpose into undoing years of corruption. The Hungry Dark dissolves as its creator reclaims his soul. 'Thank you,' he whispers, aging rapidly as dark magic leaves him. 'The town... can finally heal.'",
            choices: [
                { text: "Help him in his final moments", nextScene: "silas_peace" },
                { text: "Ensure his sacrifice means something", nextScene: "honor_sacrifice" }
            ]
        },

        transformation_ending: {
            text: "Instead of destroying the Hungry Dark, you transform it. The creature of despair becomes a guardian of hope, its hunger now a desire to protect rather than consume. The town gains an unlikely protector born from its own redeemed darkness.",
            choices: [
                { text: "Guide the new guardian", nextScene: "guardian_aftermath" },
                { text: "Establish new protections", nextScene: "mystical_aftermath" }
            ]
        },

        peace_aftermath: {
            text: "Weeks later, the factory stands empty but no longer abandoned. It's become neutral ground where former enemies meet to talk. Alex leads community protection, Maria brokers peace deals, David trains joint security, and Lily helps heal old wounds. The town breathes easier.",
            choices: [
                { text: "Continue the mission", nextScene: "ongoing_peace" },
                { text: "Pass the torch to others", nextScene: "new_generation" }
            ]
        },

        rebuilding_aftermath: {
            text: "The supernatural threat revealed common ground between enemies. Construction crews from both sides work together, rebuilding what was destroyed. Your team coordinates efforts, each using their skills to forge something new from the ashes of conflict.",
            choices: [
                { text: "Build lasting institutions", nextScene: "foundation_future" },
                { text: "Focus on healing individuals", nextScene: "personal_healing" }
            ]
        },

        heroic_memory: {
            text: "Your sacrifice echoes through the town's future. Children grow up hearing of the outsider who gave everything to break the cycle. Former enemies share drinks in your honor. The factory becomes a monument to the power of sacrifice over selfishness.",
            choices: [
                { text: "Watch from beyond", nextScene: "spiritual_guardian" },
                { text: "Rest in earned peace", nextScene: "final_rest" }
            ]
        },

        guardian_aftermath: {
            text: "The transformed creature now patrols the town's shadows, preventing the formation of new darkness. Children report dreams of a protective presence. Crime drops as even hardened criminals speak of something watching, something that turns malice into conscience.",
            choices: [
                { text: "Study this new symbiosis", nextScene: "mystical_research" },
                { text: "Prepare for future threats", nextScene: "vigilant_future" }
            ]
        },

        ongoing_peace: {
            text: "Your team becomes the cornerstone of a new order. Not perfect peace, but honest communication. Not an end to all crime, but an end to senseless violence. The town's children play in streets once ruled by fear. You've planted seeds that will grow for generations.",
            choices: [
                { text: "Reflect on the journey", nextScene: "final_reflection" },
                { text: "Plan the next mission", nextScene: "new_adventures" }
            ]
        },

        foundation_future: {
            text: "The Harmon Foundation rises from the factory's ashes - a community center where former enemies learn trades together. Your team's legacy becomes institutional, ensuring the peace outlasts any individual. The town has turned its darkest chapter into its brightest future.",
            choices: [
                { text: "Celebrate what you've built", nextScene: "celebration_ending" },
                { text: "Look toward tomorrow", nextScene: "hopeful_future" }
            ]
        },

        spiritual_guardian: {
            text: "Your spirit finds purpose in protection. When darkness threatens to return, you're there - a whisper of courage in a frightened heart, a sense of strength in a moment of weakness. Death hasn't ended your mission; it's transformed it into something eternal.",
            choices: [
                { text: "Embrace eternal vigilance", nextScene: "eternal_guardian" },
                { text: "Guide others to their strength", nextScene: "spiritual_mentor" }
            ]
        },

        final_reflection: {
            text: "Standing where it all began, you and your team look over a town transformed. The scars remain, but they're healing. The darkness came not from outside but from within - and so did the light that banished it. Together, you've proven that redemption is possible, even in the deepest shadow.",
            choices: [
                { text: "THE END - A New Dawn", nextScene: "credits" }
            ]
        },

        celebration_ending: {
            text: "The town celebrates not victory over an enemy, but victory over itself. Music fills streets once silent with fear. Former rivals share meals and stories. Your team stands together, knowing you've achieved something rare: true change. The Hungry Dark is gone, but more importantly, so is the hunger that created it.",
            choices: [
                { text: "THE END - United We Stand", nextScene: "credits" }
            ]
        },

        eternal_guardian: {
            text: "You become the town's eternal sentinel, a legend whispered in dark times and celebrated in light. When new threats emerge, they find the town protected by more than walls or weapons - by the undying spirit of one who gave everything. Your sacrifice echoes through eternity.",
            choices: [
                { text: "THE END - Forever Watching", nextScene: "credits" }
            ]
        },

        credits: {
            text: "Thank you for experiencing 'Shadows Over Harmon Falls.' Your choices shaped not just a story, but the fate of an entire town. Every path you took, every decision you made, mattered. In the end, the greatest monsters are those we create - and the greatest heroes are those who choose to heal rather than harm.\n\nMay you carry the lessons of Harmon Falls with you: that unity conquers division, that redemption is always possible, and that sometimes the bravest thing is not to fight, but to forgive.\n\nTHE END",
            choices: [
                { text: "Start New Game", nextScene: "chapter1.arrival" }
            ]
        }
    }
};