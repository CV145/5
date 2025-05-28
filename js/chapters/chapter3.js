storyData.chapter3 = {
    name: "Chapter 3",
    title: "Shadows and Revelations",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "Three days have passed since the bandit attack. Perdition seems quieter than usual—too quiet. The morning sun casts long shadows through the dusty streets, and even the usual drunks have stayed indoors.",
            next: "ominous_morning"
        },
        
        ominous_morning: {
            speaker: "Narrator", 
            text: "You find yourself in the abandoned church, seeking solace in its broken pews and faded murals. The morning light filters through cracked stained glass, painting everything in shades of amber and crimson.",
            choices: [
                {
                    text: "Pray for guidance",
                    next: "prayer_moment",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.sought_divine_guidance_c3', true);
                    }
                },
                {
                    text: "Examine the old murals",
                    next: "examine_murals",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.investigated_church_c3', true);
                    }
                },
                {
                    text: "Leave to find the others",
                    next: "seek_companions"
                }
            ]
        },
        
        prayer_moment: {
            speaker: "Elijah Cross",
            text: "\"Lord, I've strayed far from your path. These hands have taken life, this heart harbors doubt. But these people... they need protection. Show me the way.\"",
            next: "prayer_interrupted"
        },
        
        prayer_interrupted: {
            speaker: "Narrator",
            text: "As you kneel before the broken altar, a floorboard creaks behind you. You're not alone.",
            next: "church_visitor"
        },
        
        examine_murals: {
            speaker: "Narrator",
            text: "The murals tell the story of Perdition's founding—a town built on hope, now crumbling into dust. One panel catches your eye: it depicts four figures standing against a great darkness. The paint is faded, but the message is clear.",
            next: "mural_realization"
        },
        
        mural_realization: {
            speaker: "Elijah Cross",
            text: "\"Four souls united... against the shadow of evil.\" The parallel to your own situation isn't lost on you.",
            next: "church_visitor"
        },
        
        seek_companions: {
            speaker: "Narrator",
            text: "As you turn to leave, the church door swings open. A figure stands silhouetted against the morning light.",
            next: "church_visitor"
        },
        
        church_visitor: {
            speaker: "Maria Vasquez",
            text: "\"Thought I'd find you here, Preacher.\" Maria steps inside, her usual confidence tempered by something else—worry? \"We need to talk. All of us.\"",
            choices: [
                {
                    text: "\"What's happened?\"",
                    next: "maria_news"
                },
                {
                    text: "\"You look troubled.\"",
                    next: "maria_concern",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 5);
                    }
                }
            ]
        },
        
        maria_news: {
            speaker: "Maria Vasquez",
            text: "\"The sheriff's dead. Found him this morning, throat cut. And that's not all—there's a message. Written in blood.\"",
            next: "news_continues"
        },
        
        news_continues: {
            speaker: "Narrator",
            text: "She hands you a piece of paper, her hand steady despite the grim news.",
            next: "bloody_message"
        },
        
        maria_concern: {
            speaker: "Maria Vasquez",
            text: "\"Troubled? That's one way to put it.\" She almost smiles. \"The sheriff's dead, Elijah. Throat cut clean. Professional work.\"",
            next: "concern_continues"
        },
        
        concern_continues: {
            speaker: "Narrator",
            text: "She pauses, then adds quietly, \"There's something else. A message. For us.\"",
            next: "bloody_message"
        },
        
        bloody_message: {
            speaker: "Narrator",
            text: "The message is simple but chilling: 'The four strangers have three sunsets. Leave, or join the sheriff.'",
            next: "message_reaction"
        },
        
        message_reaction: {
            speaker: "Maria Vasquez",
            text: "\"Someone wants us gone. Question is—the bandits we fought, or someone else entirely?\"",
            choices: [
                {
                    text: "\"We can't abandon these people.\"",
                    next: "stay_and_fight",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.committed_to_town_c3', true);
                    }
                },
                {
                    text: "\"Maybe we should consider leaving.\"",
                    next: "consider_leaving"
                },
                {
                    text: "\"Who else knows about this?\"",
                    next: "who_knows"
                }
            ]
        },
        
        stay_and_fight: {
            speaker: "Maria Vasquez",
            text: "\"I figured you'd say that. Can't say I disagree.\" She checks her pistol absently. \"But we need a plan. Whoever did this isn't some amateur bandit.\"",
            next: "gather_others"
        },
        
        consider_leaving: {
            speaker: "Maria Vasquez",
            text: "\"Running? After everything?\" Her eyes flash. \"I thought you had more spine than that, Preacher. Besides, you think they'll just let us go?\"",
            next: "leaving_reality"
        },
        
        leaving_reality: {
            speaker: "Narrator",
            text: "She's right. Whoever killed the sheriff won't be satisfied with your departure.",
            next: "gather_others",
            onLeave: function() {
                updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 5);
            }
        },
        
        who_knows: {
            speaker: "Maria Vasquez",
            text: "\"Doc found the body. He's keeping it quiet for now, but in a town this small? News travels fast. We've got maybe an hour before panic sets in.\"",
            next: "gather_others"
        },
        
        gather_others: {
            speaker: "Narrator",
            text: "You and Maria make your way through Perdition's dusty streets. The town feels different now—watchful, hostile. Windows shutter as you pass.",
            next: "streets_description"
        },
        
        streets_description: {
            speaker: "Maria Vasquez",
            text: "\"Doc's at the undertaker's. Jacob... last I saw, he was practicing his draw behind the saloon. Kid's determined to be ready next time.\"",
            choices: [
                {
                    text: "Find Thomas first",
                    next: "find_thomas",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.found_thomas_first_c3', true);
                    }
                },
                {
                    text: "Find Jacob first",
                    next: "find_jacob",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.found_jacob_first_c3', true);
                    }
                }
            ]
        },
        
        find_thomas: {
            speaker: "Narrator",
            text: "The undertaker's parlor smells of formaldehyde and death. You find Thomas examining the sheriff's body with professional detachment, though his hands shake slightly.",
            next: "thomas_examination_intro"
        },
        
        thomas_examination_intro: {
            speaker: "Thomas Whitmore",
            text: "\"Elijah. Maria.\" He doesn't look up. \"Clean cut. Single stroke. Either our killer's a surgeon or a professional assassin. Given the message, I'd bet on the latter.\"",
            next: "thomas_examination"
        },
        
        find_jacob: {
            speaker: "Narrator",
            text: "Behind the saloon, Jacob practices his draw over and over. His movements are smoother now, more confident. The boy is becoming a man—perhaps too quickly.",
            next: "jacob_practice"
        },
        
        jacob_practice: {
            speaker: "Jacob Rivers",
            text: "\"Preacher! Maria!\" He holsters his gun. \"I heard about the sheriff. People are scared. Some are already packing to leave.\"",
            next: "jacob_determination"
        },
        
        thomas_examination: {
            speaker: "Narrator",
            text: "Thomas pulls a sheet over the sheriff's body, his medical examination complete.",
            next: "thomas_discovery"
        },
        
        thomas_discovery: {
            speaker: "Thomas Whitmore",
            text: "\"There's something else. The sheriff had this in his pocket.\" He produces a worn photograph. \"Recognize anyone?\"",
            next: "photograph_reveal"
        },
        
        photograph_reveal: {
            speaker: "Narrator",
            text: "The photograph shows four people standing in front of a building. One face is circled in what looks like dried blood—Maria's.",
            choices: [
                {
                    text: "\"Maria, what is this?\"",
                    next: "confront_maria",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.confronted_maria_photo_c3', true);
                    }
                },
                {
                    text: "Keep quiet and observe her reaction",
                    next: "observe_maria",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.stayed_quiet_photo_c3', true);
                    }
                }
            ]
        },
        
        jacob_determination: {
            speaker: "Jacob Rivers",
            text: "\"I won't run. Not again.\" His jaw sets with determination. \"My family's probably behind this somehow. The Rivers gang doesn't forgive betrayal.\"",
            next: "jacob_worries"
        },
        
        jacob_worries: {
            speaker: "Narrator",
            text: "Before you can respond, Thomas appears, looking grim.",
            next: "thomas_arrives"
        },
        
        confront_maria: {
            speaker: "Maria Vasquez",
            text: "Her face goes pale, then hard. \"Where did you get this?\"",
            next: "maria_questioned"
        },
        
        maria_questioned: {
            speaker: "Thomas Whitmore",
            text: "\"Sheriff's pocket. Care to explain why someone circled your face in blood?\"",
            next: "maria_confession_start"
        },
        
        maria_confession_start: {
            speaker: "Maria Vasquez",
            text: "\"That's... that's my sister. And her family.\" Her voice cracks slightly. \"They're all dead now. Because of me.\"",
            next: "maria_revelation"
        },
        
        observe_maria: {
            speaker: "Narrator",
            text: "Maria's hand moves instinctively to her gun as she sees the photograph. Her face cycles through recognition, pain, and finally, resignation.",
            next: "maria_resigned"
        },
        
        maria_resigned: {
            speaker: "Maria Vasquez",
            text: "\"So. It's finally caught up with me.\" She takes the photo with steady hands. \"I should have known I couldn't run forever.\"",
            next: "maria_revelation"
        },
        
        thomas_arrives: {
            speaker: "Thomas Whitmore",
            text: "\"We have a problem.\" He shows you and Jacob the photograph. \"Found this on the sheriff. Maria's got some explaining to do.\"",
            next: "jacob_questions"
        },
        
        jacob_questions: {
            speaker: "Jacob Rivers",
            text: "\"Is that... Maria? Who are the others?\"",
            next: "group_gathers"
        },
        
        maria_revelation: {
            speaker: "Maria Vasquez",
            text: "\"Five years ago, I testified against the Valdez cartel. Put three of their top men behind bars. This photo? That's my sister's family. The cartel killed them all as a message.\"",
            next: "maria_defiance"
        },
        
        maria_defiance: {
            speaker: "Narrator",
            text: "She meets each of your eyes in turn, defiant despite the pain.",
            next: "maria_admission"
        },
        
        maria_admission: {
            speaker: "Maria Vasquez",
            text: "\"I've been running ever since. Guess they finally found me. And now you're all in danger because of me.\"",
            choices: [
                {
                    text: "\"We stand together. Your fight is our fight.\"",
                    next: "unity_choice",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 20);
                        updateStoryVariable('relationships.maria.thomas.trust', getStoryVariable('relationships.maria.thomas.trust') + 15);
                        updateStoryVariable('relationships.maria.jacob.trust', getStoryVariable('relationships.maria.jacob.trust') + 15);
                        updateStoryVariable('flags.supported_maria_revelation', true);
                    }
                },
                {
                    text: "\"You should have told us. We had a right to know.\"",
                    next: "betrayal_choice",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 10);
                        updateStoryVariable('flags.felt_betrayed_maria_revelation', true);
                    }
                },
                {
                    text: "\"The past doesn't matter. What matters is surviving the next three days.\"",
                    next: "practical_choice",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.focused_on_survival_c3', true);
                    }
                }
            ]
        },
        
        group_gathers: {
            speaker: "Narrator",
            text: "You head to the undertaker's parlor where Maria waits. The confrontation is inevitable now.",
            next: "maria_revelation"
        },
        
        unity_choice: {
            speaker: "Thomas Whitmore",
            text: "\"The preacher's right. We've all got our demons. Yours just happen to carry guns and grudges.\"",
            next: "jacob_unity"
        },
        
        jacob_unity: {
            speaker: "Jacob Rivers",
            text: "\"Besides, if we're talking about dangerous pasts...\" He swallows hard. \"My brothers are probably coming too. The Rivers gang doesn't let anyone go.\"",
            next: "all_secrets"
        },
        
        betrayal_choice: {
            speaker: "Maria Vasquez",
            text: "\"You're right. I should have.\" Her voice is steel. \"But would it have changed anything? We're here now, and they want us all dead.\"",
            next: "thomas_mediation"
        },
        
        thomas_mediation: {
            speaker: "Thomas Whitmore",
            text: "\"She has a point. Besides, we've all been less than honest about our pasts.\"",
            next: "all_secrets"
        },
        
        practical_choice: {
            speaker: "Jacob Rivers",
            text: "\"Three days. That's not much time.\" He looks between everyone. \"Maybe it's time we stopped keeping secrets. If we're going to survive, we need to know what we're really up against.\"",
            next: "all_secrets"
        },
        
        all_secrets: {
            speaker: "Narrator",
            text: "The four of you stand in the undertaker's parlor, surrounded by death and secrets. The time for hiding is over.",
            next: "thomas_confession"
        },
        
        thomas_confession: {
            speaker: "Thomas Whitmore",
            text: "\"Since we're sharing...\" Thomas pulls out his medical bag, revealing several vials of laudanum. \"I'm not just a drunk. I'm an addict. Have been since I lost a patient—a child—three years ago.\"",
            next: "elijah_secret"
        },
        
        elijah_secret: {
            speaker: "Narrator",
            text: "All eyes turn to you. Your own secret weighs heavy, demanding confession.",
            choices: [
                {
                    text: "\"I killed my own congregation.\"",
                    next: "dark_confession",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_confession_type', 'congregation_killed');
                        updateStoryVariable('flags.chapter3_flags.confessed_dark_secret_c3', true);
                        updateStoryVariable('relationships.elijah.thomas.trust', getStoryVariable('relationships.elijah.thomas.trust') + 10);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 10);
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') - 5); // Jacob might be disturbed
                    }
                },
                {
                    text: "\"A man died because of my words. I've been running from God ever since.\"",
                    next: "guilty_confession",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_confession_type', 'man_died_words');
                        updateStoryVariable('flags.chapter3_flags.confessed_guilt_c3', true);
                        updateStoryVariable('relationships.elijah.thomas.trust', getStoryVariable('relationships.elijah.thomas.trust') + 15);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 10);
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 10);
                    }
                },
                {
                    text: "\"My past doesn't matter. Only our future does.\"",
                    next: "refuse_confession",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_confession_type', 'refused');
                        updateStoryVariable('flags.chapter3_flags.kept_secret_c3', true);
                        updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 5);
                        updateStoryVariable('relationships.elijah.thomas.tension', getStoryVariable('relationships.elijah.thomas.tension') + 5);
                    }
                }
            ]
        },
        
        dark_confession: {
            speaker: "Elijah Cross",
            text: "\"Not with bullets. With words. I preached righteousness while the town burned with fever. Told them it was God's will, that medicine was blasphemy. Thirty souls died because they believed me.\"",
            next: "dark_reaction"
        },
        
        dark_reaction: {
            speaker: "Narrator",
            text: "The silence that follows is deafening. Jacob steps back slightly, while Maria and Thomas exchange glances.",
            next: "plan_defense"
        },
        
        guilty_confession: {
            speaker: "Elijah Cross",
            text: "\"I counseled a man to forgive his brother's killer. Told him vengeance belonged to the Lord. He listened. Two days later, that same killer murdered his wife and children.\"",
            next: "guilty_reaction"
        },
        
        guilty_reaction: {
            speaker: "Thomas Whitmore",
            text: "\"Christ, Elijah. No wonder you left the collar behind.\"",
            next: "plan_defense"
        },
        
        refuse_confession: {
            speaker: "Maria Vasquez",
            text: "\"Still keeping secrets, Preacher? Fine. But secrets have a way of coming out when you least expect them.\"",
            next: "refuse_reaction"
        },
        
        refuse_reaction: {
            speaker: "Narrator",
            text: "The others look at you with mixed expressions—disappointment, understanding, suspicion.",
            next: "plan_defense"
        },
        
        plan_defense: {
            speaker: "Narrator",
            text: "With secrets laid bare (or kept hidden), the group focuses on survival. Three days until the ultimatum expires. Three days to prepare for war.",
            next: "thomas_strategy"
        },
        
        thomas_strategy: {
            speaker: "Thomas Whitmore",
            text: "\"We need weapons, defensive positions, and most importantly—allies. This town may not love us, but they hate cartels and outlaws more.\"",
            next: "strategy_meeting"
        },
        
        strategy_meeting: {
            speaker: "Maria Vasquez",
            text: "\"The saloon's the most defensible building. Stone walls, good sight lines. We could make our stand there.\"",
            next: "jacob_concern"
        },
        
        jacob_concern: {
            speaker: "Jacob Rivers",
            text: "\"What about the townsfolk? We can't just let them get caught in the crossfire.\"",
            choices: [
                {
                    text: "\"We evacuate the innocent. Give them a chance to run.\"",
                    next: "evacuate_plan",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.prioritize_innocents_c3', true);
                    }
                },
                {
                    text: "\"We arm the townspeople. Make this their fight too.\"",
                    next: "arm_townspeople",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.rally_town_c3', true);
                    }
                },
                {
                    text: "\"We fight smart. Hit them before they hit us.\"",
                    next: "preemptive_strike",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.aggressive_strategy_c3', true);
                    }
                }
            ]
        },
        
        evacuate_plan: {
            speaker: "Thomas Whitmore",
            text: "\"Noble, but impractical. Where would they go? The next town is three days' ride through desert.\"",
            next: "evacuate_compromise"
        },
        
        evacuate_compromise: {
            speaker: "Maria Vasquez",
            text: "\"He's right. But we could get the children and elderly to the old mine. It's defensible and out of the way.\"",
            next: "mysterious_visitor"
        },
        
        arm_townspeople: {
            speaker: "Jacob Rivers",
            text: "\"I like it. Give people a chance to fight for their homes.\" His enthusiasm is clear. \"My pa always said a man fights hardest for what's his.\"",
            next: "arm_agreement"
        },
        
        arm_agreement: {
            speaker: "Maria Vasquez",
            text: "\"Your pa also led a gang of killers, boy. But... you're not wrong. We'll need every gun we can get.\"",
            next: "mysterious_visitor"
        },
        
        preemptive_strike: {
            speaker: "Maria Vasquez",
            text: "\"Now you're thinking like a gunfighter.\" She grins darkly. \"They expect us to wait, defend. But if we hit first...\"",
            next: "strike_agreement"
        },
        
        strike_agreement: {
            speaker: "Thomas Whitmore",
            text: "\"It's risky. But sitting here like lambs to slaughter isn't much better.\"",
            next: "mysterious_visitor"
        },
        
        mysterious_visitor: {
            speaker: "Narrator",
            text: "The door to the undertaker's parlor creaks open. A figure in a long black coat enters, face hidden beneath a wide-brimmed hat.",
            next: "visitor_speaks"
        },
        
        visitor_speaks: {
            speaker: "Mysterious Figure",
            text: "\"The four strangers. At last.\" The voice is cultured, amused. \"I've been looking for you for a very long time.\"",
            choices: [
                {
                    text: "Draw your weapon",
                    next: "defensive_reaction",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.hostile_to_stranger_c3', true);
                    }
                },
                {
                    text: "\"Who are you?\"",
                    next: "calm_inquiry",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.diplomatic_stranger_c3', true);
                    }
                },
                {
                    text: "Let the others take the lead",
                    next: "observe_stranger",
                    onChoose: function() {
                        updateStoryVariable('flags.chapter3_flags.cautious_stranger_c3', true);
                    }
                }
            ]
        },
        
        defensive_reaction: {
            speaker: "Narrator",
            text: "Your hand moves to your gun, and instantly Maria and the stranger match your speed. Three weapons half-drawn, the room balanced on a knife's edge.",
            next: "stranger_peaceful"
        },
        
        stranger_peaceful: {
            speaker: "Mysterious Figure",
            text: "\"Impressive reflexes. But if I wanted you dead, you'd never have seen me coming.\" The figure slowly raises empty hands. \"I'm here to help.\"",
            next: "stranger_reveal"
        },
        
        calm_inquiry: {
            speaker: "Mysterious Figure",
            text: "\"Someone who knows why you're really here. Why fate brought four broken souls to this dying town.\" The figure steps into the light. \"My name is Silas Cross. Ring any bells, brother?\"",
            next: "stranger_reveal"
        },
        
        observe_stranger: {
            speaker: "Maria Vasquez",
            text: "\"State your business, stranger. We're not in the mood for games.\"",
            next: "stranger_introduction"
        },
        
        stranger_introduction: {
            speaker: "Mysterious Figure",
            text: "\"No games. Just truth.\" The figure removes their hat, revealing a face bearing an uncanny resemblance to Elijah. \"Hello, brother.\"",
            next: "stranger_reveal"
        },
        
        stranger_reveal: {
            speaker: "Narrator",
            text: "The man standing before you could be your twin, save for the cruel twist to his mouth and the cold calculation in his eyes. Silas Cross—the brother you thought died ten years ago.",
            next: "silas_taunt"
        },
        
        silas_taunt: {
            speaker: "Silas Cross",
            text: "\"Surprised? You always were slow to see what was right in front of you, Elijah. Just like with our congregation.\"",
            next: "chapter3_cliffhanger"
        },
        
        chapter3_cliffhanger: {
            speaker: "Narrator",
            text: "The revelation hangs in the air like gunsmoke. Your dead brother stands before you, very much alive and somehow connected to the threats closing in on Perdition.",
            next: "silas_revelation"
        },
        
        silas_revelation: {
            speaker: "Silas Cross",
            text: "\"Oh, the look on your face. Don't worry, brother. I'm here to help. After all...\" His smile is sharp as a blade. \"I'm the one who brought you all together.\"",
            choices: [
                {
                    text: "Continue to Chapter 4",
                    next: null,
                    nextChapter: "chapter4"
                }
            ]
        }
    }
};