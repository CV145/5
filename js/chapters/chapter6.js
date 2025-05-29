// Chapter 6: The Reckoning (Linear Version)
storyData.chapter6 = {
    name: "Chapter 6",
    title: "The Reckoning",
    scenes: {
        // Scene 1: Opening Confrontation
        start: {
            speaker: "Narrator",
            text: "The late afternoon sun casts long shadows across Perdition's main street as Silas Cross stands before the gathered townspeople. His hired guns fan out behind him, hands resting on their weapons. The air is thick with tension and the acrid smell of Martha Peterson's still-burning house.",
            next: "cross_demands"
        },

        // Scene 2: Cross's Demands
        cross_demands: {
            speaker: "Silas Cross",
            text: "'I see you've been busy making friends, preacher. But let me remind everyone here who owns the water rights, who controls the trade routes, and who has the means to enforce order in this town.' His eyes scan the crowd with cold calculation.",
            next: "crowd_stands_firm"
        },

        // Scene 3: The Crowd Stands Firm
        crowd_stands_firm: {
            speaker: "Narrator",
            text: "But something has changed. Where once the townspeople would have scattered at Cross's approach, they now stand their ground. Walter Hayes, Sarah Mitchell, Martha Peterson, and dozens of others form a human wall of defiance. The four companions stand at their center.",
            next: "maria_assessment"
        },

        // Scene 4: Maria's Assessment
        maria_assessment: {
            speaker: "Maria Vasquez",
            text: "Maria counts the opposition with a professional eye. 'Eight men, not counting Cross and Morrison. Armed but spread thin. They weren't expecting this many people.' She keeps her voice low, meant only for her companions.",
            next: "thomas_medical_evidence"
        },

        // Scene 5: Thomas's Medical Evidence
        thomas_medical_evidence: {
            speaker: "Thomas Whitmore",
            text: "Thomas steps forward, holding up the water sample vial. 'Mr. Cross, I have evidence here of arsenic poisoning in the Peterson well. The same poison that killed Pete Peterson and made others sick. As a doctor, I'm prepared to testify to what I've found.'",
            next: "cross_threatens_thomas"
        },

        // Scene 6: Cross Threatens Thomas
        cross_threatens_thomas: {
            speaker: "Silas Cross",
            text: "'A drunk doctor's testimony? Who would believe that?' Cross's smile doesn't reach his eyes. 'Be careful, Dr. Whitmore. Perdition can be dangerous for men who don't know their place.'",
            next: "jacob_speaks_up"
        },

        // Scene 7: Jacob Speaks Up
        jacob_speaks_up: {
            speaker: "Jacob Rivers",
            text: "'You can't threaten all of us, Cross.' Jacob's voice cracks slightly, but he stands tall. 'We've all seen what you've done. Sheriff Bradley, the church, the poisoned wells. The whole town knows the truth now.'",
            next: "morrison_draws_gun"
        },

        // Scene 8: Morrison Draws His Gun
        morrison_draws_gun: {
            speaker: "Deputy Morrison",
            text: "Deputy Morrison's hand moves to his gun. 'That's enough talk. You're all under arrest for disturbing the peace and sedition.' But his voice wavers as he realizes how outnumbered they are.",
            next: "elijah_moral_authority"
        },

        // Scene 9: Elijah's Moral Authority
        elijah_moral_authority: {
            speaker: "Elijah Cross",
            text: "'Deputy, you're going to arrest an entire town? On whose authority? The sheriff you helped murder?' Elijah's voice carries the weight of absolute conviction. 'Put the gun away before someone gets hurt.'",
            choices: [
                {
                    text: "Appeal to Cross's men directly",
                    next: "appeal_to_gunmen"
                },
                {
                    text: "Focus on rallying the townspeople",
                    next: "rally_townspeople"
                }
            ]
        },

        // Scene 10a: Appeal to Cross's Men
        appeal_to_gunmen: {
            speaker: "Elijah Cross",
            text: "'You men behind Cross—is this what you signed up for? Burning widows out of their homes? Poisoning wells? You're not soldiers or lawmen. You're just hired thugs doing dirty work for a man who'd sell you out in a heartbeat.'",
            next: "gunmen_waver"
        },

        // Scene 10b: Rally the Townspeople
        rally_townspeople: {
            speaker: "Elijah Cross",
            text: "'People of Perdition, this is your moment. You can choose to live in fear, or you can choose to stand together. Cross only has power if we give it to him. United, we are stronger than any hired guns.'",
            next: "townspeople_surge"
        },

        // Scene 11: The Gunmen Waver / Townspeople Surge
        gunmen_waver: {
            speaker: "Narrator",
            text: "Some of Cross's men exchange uneasy glances. They signed on for easy money intimidating a broken town, not facing down an angry mob. Two of them take small steps backward, their commitment wavering.",
            next: "cross_desperation"
        },

        townspeople_surge: {
            speaker: "Narrator",
            text: "The crowd surges forward slightly, emboldened by Elijah's words. Men who haven't carried guns in years rest hands on old revolvers. Women grip kitchen knives and farming tools. The message is clear: Perdition will fight.",
            next: "cross_desperation"
        },

        // Scene 12: Cross's Desperation
        cross_desperation: {
            speaker: "Silas Cross",
            text: "'You fools! You think you can stand against progress? Against the future?' Cross's composed facade cracks. 'I offered this town prosperity. I offered to make it more than a dusty waystation. And this is how you repay me?'",
            next: "walter_hayes_speaks"
        },

        // Scene 13: Walter Hayes Speaks
        walter_hayes_speaks: {
            speaker: "Walter Hayes",
            text: "'You offered us slavery, Cross. You offered to steal our water, our land, our dignity. Perdition may be small, but it's ours. We built it with honest sweat and honest work. We won't let you turn it into your personal kingdom.'",
            next: "martha_peterson_testimony"
        },

        // Scene 14: Martha Peterson's Testimony
        martha_peterson_testimony: {
            speaker: "Martha Peterson",
            text: "Martha steps forward, soot-stained but unbroken. 'You tried to burn me alive because I talked to the doctor. Just like you burned the church. Just like you poisoned my Pete. How many more have to die for your greed?'",
            next: "cross_final_gambit"
        },

        // Scene 15: Cross's Final Gambit
        cross_final_gambit: {
            speaker: "Silas Cross",
            text: "'Fine. You want to do this the hard way?' Cross pulls out a telegram. 'I have friends in high places. Federal marshals, railroad barons, men who matter. One word from me, and this town will be wiped off the map. Is that what you want?'",
            next: "unexpected_ally"
        },

        // Scene 16: An Unexpected Ally
        unexpected_ally: {
            speaker: "Frank Hutchins",
            text: "Frank Hutchins, the saloon keeper and Cross's informant, suddenly speaks from the crowd. 'I'm done being your spy, Cross. These people deserve better than what you've given them. I'll testify to everything I've seen and heard.'",
            next: "momentum_shifts"
        },

        // Scene 17: The Momentum Shifts
        momentum_shifts: {
            speaker: "Narrator",
            text: "The betrayal from his own informant visibly shakes Cross. More of his hired guns step away, unwilling to fight a battle they can't win. Deputy Morrison looks around nervously, realizing he's rapidly becoming isolated.",
            next: "maria_tactical_move"
        },

        // Scene 18: Maria's Tactical Move
        maria_tactical_move: {
            speaker: "Maria Vasquez",
            text: "Maria moves with practiced efficiency, positioning herself to cut off Morrison's escape route. 'Deputy, drop the gun. You're outnumbered fifty to one. Don't die for a man who wouldn't spit on you if you were on fire.'",
            next: "morrison_surrenders"
        },

        // Scene 19: Morrison Surrenders
        morrison_surrenders: {
            speaker: "Deputy Morrison",
            text: "Morrison's gun clatters to the ground. 'I... I surrender. Don't shoot.' His badge follows the gun into the dust. 'Cross made me do it. Threatened my family if I didn't play along.'",
            next: "cross_alone"
        },

        // Scene 20: Cross Stands Alone
        cross_alone: {
            speaker: "Narrator",
            text: "Silas Cross stands alone now, abandoned by his men and his corrupt deputy. The man who once held Perdition in a grip of fear is reduced to a solitary figure surrounded by the people he terrorized. His empire of intimidation has crumbled in minutes.",
            next: "cross_draws_weapon"
        },

        // Scene 21: Cross Draws His Weapon
        cross_draws_weapon: {
            speaker: "Narrator",
            text: "In desperation, Cross reaches for his own gun. But before he can clear leather, multiple clicks of hammers being cocked fill the air. He's staring down the barrels of dozens of weapons held by steady hands.",
            next: "elijah_final_offer"
        },

        // Scene 22: Elijah's Final Offer
        elijah_final_offer: {
            speaker: "Elijah Cross",
            text: "'It's over, Silas. You've lost. But you still have a choice. Surrender peacefully and face justice in a court of law, or...' Elijah doesn't need to finish. The alternative is clear.",
            next: "cross_bitter_defeat"
        },

        // Scene 23: Cross's Bitter Defeat
        cross_bitter_defeat: {
            speaker: "Silas Cross",
            text: "'You think you've won? You have no idea what you've done. The consortium I represent won't forget this. They'll send more men, harder men. Perdition will burn, and it'll be on your heads.'",
            next: "thomas_steps_forward"
        },

        // Scene 24: Thomas Steps Forward
        thomas_steps_forward: {
            speaker: "Thomas Whitmore",
            text: "'Let them come. We'll be ready. And we'll have the law on our side this time—real law, not your bought-and-paid-for thuggery. I'll make sure every newspaper from here to San Francisco knows what you did here.'",
            next: "securing_cross"
        },

        // Scene 25: Securing Cross
        securing_cross: {
            speaker: "Narrator",
            text: "Several townsmen move forward to secure Cross, binding his hands with rope. The once-powerful man who terrorized Perdition is led away like a common criminal, his threats echoing hollowly in the evening air.",
            next: "addressing_the_crowd"
        },

        // Scene 26: Addressing the Crowd
        addressing_the_crowd: {
            speaker: "Elijah Cross",
            text: "'People of Perdition, what we've done today is just the beginning. We need to organize, elect a new sheriff, establish real law and order. This town belongs to all of us now, and we must work together to keep it that way.'",
            next: "practical_matters"
        },

        // Scene 27: Practical Matters
        practical_matters: {
            speaker: "Walter Hayes",
            text: "'We'll need to send word to the territorial capital about what happened here. Get a federal marshal to take Cross and Morrison for trial. And we need to make sure those poisoned wells are sealed properly.'",
            next: "maria_security_concerns"
        },

        // Scene 28: Maria's Security Concerns
        maria_security_concerns: {
            speaker: "Maria Vasquez",
            text: "'Cross wasn't lying about having friends. We should post watches, organize a militia. Some of his men might come back, or the consortium might send others. We need to be ready.'",
            next: "jacob_volunteers"
        },

        // Scene 29: Jacob Volunteers
        jacob_volunteers: {
            speaker: "Jacob Rivers",
            text: "'I'll help organize the younger men for watch duty. We can use the old sheriff's office as headquarters once we clean it out. This is our town now—we need to protect it.'",
            next: "thomas_medical_priorities"
        },

        // Scene 30: Thomas's Medical Priorities
        thomas_medical_priorities: {
            speaker: "Thomas Whitmore",
            text: "'I need to set up a proper clinic and start treating everyone who's been affected by the poisoned water. With clean sources and proper care, we can heal this town—literally and figuratively.'",
            next: "frank_hutchins_confession"
        },

        // Scene 31: Frank Hutchins's Full Confession
        frank_hutchins_confession: {
            speaker: "Frank Hutchins",
            text: "'I have records in my saloon safe—payments from Cross, lists of who he was targeting next, correspondence with his eastern backers. I'll turn it all over. Maybe it'll help make up for my part in this.'",
            next: "community_rebuilding"
        },

        // Scene 32: Community Rebuilding Plans
        community_rebuilding: {
            speaker: "Sarah Mitchell",
            text: "'We should rebuild the church first. Not just for worship, but as a symbol that Cross couldn't break our spirit. And we need to help Martha rebuild her home—all of us together.'",
            next: "evening_celebration"
        },

        // Scene 33: Evening Celebration Preparation
        evening_celebration: {
            speaker: "Mrs. Henderson",
            text: "'Tonight, we should celebrate. Not just our freedom from Cross, but our unity. I'll open my kitchen—everyone bring what food you can. We'll feast like a real community again.'",
            choices: [
                {
                    text: "Help organize the celebration",
                    next: "organizing_celebration"
                },
                {
                    text: "Focus on securing the prisoners",
                    next: "securing_prisoners"
                }
            ]
        },

        // Scene 34a: Organizing the Celebration
        organizing_celebration: {
            speaker: "Narrator",
            text: "The companions help coordinate an impromptu town celebration. Tables are dragged into the street, lanterns are hung, and for the first time in months, music drifts through Perdition's dusty air. The town remembers how to smile.",
            next: "quiet_moment"
        },

        // Scene 34b: Securing the Prisoners
        securing_prisoners: {
            speaker: "Narrator",
            text: "The companions ensure Cross and Morrison are securely locked in the jail, with rotating guards from the townspeople. Justice will be served properly this time, through courts and law rather than vengeance.",
            next: "quiet_moment"
        },

        // Scene 35: A Quiet Moment
        quiet_moment: {
            speaker: "Narrator",
            text: "As night falls and the celebration begins, the four companions find a quiet moment together on the boarding house porch. They've been in Perdition less than two weeks, but it feels like a lifetime.",
            next: "elijah_reflection"
        },

        // Scene 36: Elijah's Reflection
        elijah_reflection: {
            speaker: "Elijah Cross",
            text: "'When I boarded that stagecoach, I was running from my past. Now... I feel like I've found something worth fighting for again. You three, this town—it's given me purpose I thought I'd lost forever.'",
            next: "maria_acceptance"
        },

        // Scene 37: Maria's Acceptance
        maria_acceptance: {
            speaker: "Maria Vasquez",
            text: "'I've been alone for so long, I forgot what it felt like to trust others. To have people who'd stand with you no matter what. You're not just allies anymore. You're...' She pauses, unused to the word. 'Family.'",
            next: "thomas_redemption"
        },

        // Scene 38: Thomas's Redemption
        thomas_redemption: {
            speaker: "Thomas Whitmore",
            text: "'My hands haven't shaken once since we got here. For the first time in years, I feel like a real doctor again. Like I can actually help people instead of just... drowning in a bottle. Thank you for that.'",
            next: "jacob_growth"
        },

        // Scene 39: Jacob's Growth
        jacob_growth: {
            speaker: "Jacob Rivers",
            text: "'I came west thinking I'd find adventure, prove I was a man. But what I found was so much more. I found courage I didn't know I had, and people worth being courageous for. Whatever comes next, I'm ready.'",
            next: "mysterious_rider"
        },

        // Scene 40: A Mysterious Rider
        mysterious_rider: {
            speaker: "Narrator",
            text: "As the celebration continues below, Maria notices a lone rider on the horizon, watching the town from a distant hill. The figure remains motionless for several minutes before turning and disappearing into the darkness.",
            next: "maria_warns_others"
        },

        // Scene 41: Maria Warns the Others
        maria_warns_others: {
            speaker: "Maria Vasquez",
            text: "'We had an observer. Single rider, trained horse, patient surveillance. Could be one of Cross's men checking on their boss, or...' She frowns. 'Could be someone else entirely. The consortium, maybe.'",
            next: "planning_ahead"
        },

        // Scene 42: Planning for the Future
        planning_ahead: {
            speaker: "Elijah Cross",
            text: "'Tomorrow we start preparing for whatever comes next. Tonight, let Perdition celebrate. These people have earned one night of peace and joy. We'll stand watch.'",
            next: "thomas_agreement"
        },

        // Scene 43: Thomas's Agreement
        thomas_agreement: {
            speaker: "Thomas Whitmore",
            text: "'The fight's not over. Cross was just a symptom of larger forces—greed, exploitation, the powerful preying on the weak. But we've shown that communities can fight back when they stand together.'",
            next: "setting_watches"
        },

        // Scene 44: Setting the Watch
        setting_watches: {
            speaker: "Narrator",
            text: "The companions organize a watch schedule for the night, ensuring someone is always alert while the town celebrates. The mysterious rider has reminded them that vigilance is the price of their newfound freedom.",
            next: "celebration_continues"
        },

        // Scene 45: The Celebration Continues
        celebration_continues: {
            speaker: "Narrator",
            text: "Music and laughter fill Perdition's streets as the town rediscovers its sense of community. Children play games they'd been too frightened to enjoy, couples dance, and stories of better days are shared around improvised tables.",
            next: "hutchins_documents"
        },

        // Scene 46: Hutchins Delivers Documents
        hutchins_documents: {
            speaker: "Frank Hutchins",
            text: "Frank Hutchins approaches with a leather satchel. 'As promised—every document I kept for Cross. Names, dates, money transfers. There's enough here to interest federal prosecutors and journalists alike.'",
            next: "examining_evidence"
        },

        // Scene 47: Examining the Evidence
        examining_evidence: {
            speaker: "Narrator",
            text: "A quick examination reveals the scope of Cross's operation—and more troubling, hints at similar schemes in other frontier towns. The Eastern Mining Consortium appears to have a systematic approach to acquiring western territories.",
            next: "bigger_picture"
        },

        // Scene 48: Understanding the Bigger Picture
        bigger_picture: {
            speaker: "Elijah Cross",
            text: "'This is bigger than just Perdition. According to these papers, we're just one of a dozen towns targeted. If we can get this information to the right authorities, we might save other communities from our fate.'",
            next: "hope_and_determination"
        },

        // Scene 49: Hope and Determination
        hope_and_determination: {
            speaker: "Narrator",
            text: "As the night wears on, the four companions take turns watching over their adopted town. They've won an important victory, but they know it's only the beginning. Perdition has been saved, but the fight for justice in the frontier continues.",
            next: "chapter_conclusion"
        },

        // Scene 50: Chapter Conclusion
        chapter_conclusion: {
            speaker: "Narrator",
            text: "Dawn breaks over a transformed Perdition. Silas Cross sits in jail awaiting justice, the wells are being cleansed, and hope has returned to the community. But on the horizon, that mysterious rider represents questions yet unanswered and challenges yet to come. The four strangers who met on a stagecoach have become the guardians of a town reborn, united in purpose and ready for whatever the harsh frontier might throw at them next.",
            choices: [
                {
                    text: "Continue to Chapter 7",
                    next: null,
                    nextChapter: "chapter7"
                }
            ]
        }
    }
};