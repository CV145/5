// Chapter 1: Baptism by Fire
storyData.chapter1 = {
    name: "Chapter 1",
    title: "Baptism by Fire",
    scenes: {
        start: {
            speaker: "Narrator",
            text: "The riders circle the stagecoach like vultures, their faces hidden behind bandanas. The lead rider, a mountain of a man with cold eyes, raises his hand. The others stop, weapons drawn but not yet aimed.",
            next: "bandit_speaks_start"
        },
        
        bandit_speaks_start: {
            speaker: "Bandit Leader",
            text: "\"Well, well. Stagecoach to Perdition. You folks picked a bad day to travel. See, this here's a toll road, and the toll just went up.\"",
            choices: [
                {
                    text: "Try to negotiate peacefully",
                    next: "negotiate_attempt",
                    onChoose: function() {
                        updateStoryVariable('flags.tried_negotiation', true);
                    }
                },
                {
                    text: "Prepare for a fight",
                    next: "prepare_fight_start",
                    onChoose: function() {
                        updateStoryVariable('flags.prepared_immediately', true);
                    }
                },
                {
                    text: "Let someone else take the lead",
                    next: "wait_and_see_start",
                    onChoose: function() {
                        updateStoryVariable('flags.deferred_leadership', true);
                    }
                }
            ],
            onEnter: {
                setBackground: "desert",
                showCharacters: ["elijah", "maria", "thomas", "jacob"]
            }
        },
        
        negotiate_attempt: {
            speaker: "Elijah Cross",
            text: "\"We're just travelers seeking passage to Perdition. We have little of value, save our lives. Surely men such as yourselves have no need for more blood on your hands.\"",
            next: "negotiate_continues"
        },
        
        negotiate_continues: {
            speaker: "Narrator",
            text: "Your calm words seem to give the bandit leader pause. For a moment, you see him weighing his options.",
            next: "bandit_laughs"
        },
        
        prepare_fight_start: {
            speaker: "Narrator",
            text: "Without waiting for more talk, you gesture to your companions. Maria's hand immediately goes to her weapon, understanding the signal. Thomas reaches for his medical bag where his derringer waits. Even young Jacob, though nervous, readies himself.",
            next: "maria_ready"
        },
        
        maria_ready: {
            speaker: "Maria Vasquez",
            text: "\"Smart move, Preacher. Better to be ready than caught flat-footed.\"",
            next: "bandits_notice"
        },
        
        bandits_notice: {
            speaker: "Narrator",
            text: "The bandits notice the subtle shift in your group's posture. The leader's eyes narrow as he realizes you're not going to be easy prey.",
            next: "bandit_notices_preparation"
        },
        
        wait_and_see_start: {
            speaker: "Narrator",
            text: "You hold back, watching the others for cues. This isn't your fight to start—not yet. Sometimes wisdom means knowing when not to act.",
            next: "thomas_nervous"
        },
        
        thomas_nervous: {
            speaker: "Thomas Whitmore",
            text: "\"Wonderful. Six armed men and we're playing cards with our lives.\" He takes a nervous sip from his bottle.",
            next: "jacob_worried"
        },
        
        jacob_worried: {
            speaker: "Jacob Rivers",
            text: "\"What... what do we do?\" The boy's voice trembles as he looks between the adults.",
            next: "narrator_hesitation"
        },
        
        narrator_hesitation: {
            speaker: "Narrator",
            text: "Your hesitation creates an opening for the bandits to press their advantage.",
            next: "bandit_gains_confidence"
        },
        
        prepare_fight: {
            speaker: "Narrator",
            text: "Maria's already moving, positioning herself by the window. Thomas fumbles for a small derringer hidden in his medical bag. Young Jacob's hand shakes as he grips his too-clean revolver.",
            next: "maria_prepared"
        },
        
        maria_prepared: {
            speaker: "Maria Vasquez",
            text: "\"Smart. Better to be ready than sorry.\" She checks her cylinder. \"If shooting starts, keep low and aim true.\"",
            choices: [
                {
                    text: "\"I've seen enough violence for one lifetime.\"",
                    next: "reluctant_fighter",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_reluctant_violence', true);
                        updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 5);
                    }
                },
                {
                    text: "\"Sometimes violence is the only language they understand.\"",
                    next: "accept_violence",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_accepts_violence', true);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 10);
                    }
                }
            ]
        },
        
        wait_and_see: {
            speaker: "Narrator",
            text: "The tension stretches like a bowstring. Each passenger waits for someone else to make the first move, while outside, the bandits grow restless.",
            next: "thomas_speaks_wait"
        },
        
        thomas_speaks_wait: {
            speaker: "Thomas Whitmore",
            text: "\"Well, this is a fine mess. Six armed men and we're playing statue.\" He takes a nervous sip from his bottle.",
            next: "jacob_speaks_wait"
        },
        
        jacob_speaks_wait: {
            speaker: "Jacob Rivers", 
            text: "\"Maybe... maybe they'll just take what they want and leave?\" His voice wavers with desperate hope.",
            choices: [
                {
                    text: "\"Sometimes the best action is no action.\"",
                    next: "passive_approach",
                    onChoose: function() {
                        updateStoryVariable('flags.chose_passivity', true);
                    }
                },
                {
                    text: "\"We can't just sit here forever.\"",
                    next: "forced_action",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 5);
                    }
                }
            ]
        },
        
        bandit_laughs: {
            speaker: "Bandit Leader",
            text: "\"A preacher! Boys, we got ourselves a preacher!\" His laugh is like gravel. \"Tell me, Preacher, your God watching right now? 'Cause He's about to see some of His children come home early.\"",
            choices: [
                {
                    text: "\"He's always watching. The question is, are you ready to meet Him?\"",
                    next: "bandit_threatened",
                    onChoose: function() {
                        updateStoryVariable('flags.stood_up_to_bandits', true);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 10);
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 15);
                    }
                },
                {
                    text: "\"Take what you want. No one needs to die today.\"",
                    next: "bandit_greedy",
                    onChoose: function() {
                        updateStoryVariable('flags.tried_peaceful', true);
                    }
                }
            ]
        },
        
        bandit_notices: {
            speaker: "Bandit Leader",
            text: "\"Looks like the lady's got some fight in her. And the drunk's reaching for something. You folks sure you want to dance? We got you six to four, and that's assuming the boy there knows which end of that gun to point.\"",
            next: "maria_speaks"
        },
        
        bandit_notices_preparation: {
            speaker: "Bandit Leader",
            text: "\"Well now, looks like we got ourselves some fighters here, boys.\" His voice hardens. \"I appreciate folks who know which way the wind blows. Makes things... interesting.\"",
            next: "bandit_notices_prep_narration"
        },
        
        bandit_notices_prep_narration: {
            speaker: "Narrator",
            text: "Your quick thinking to prepare for violence has shifted the dynamic. The bandits are warier now, but also more aggressive.",
            choices: [
                {
                    text: "\"We're ready for whatever comes.\"",
                    next: "standoff_prepared",
                    onChoose: function() {
                        updateStoryVariable('flags.showed_strength', true);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 15);
                    }
                },
                {
                    text: "\"We don't want trouble, but we're not defenseless.\"",
                    next: "measured_response",
                    onChoose: function() {
                        updateStoryVariable('flags.diplomatic_but_firm', true);
                    }
                }
            ]
        },
        
        bandit_gains_confidence: {
            speaker: "Bandit Leader",
            text: "\"See that, boys? These pilgrims don't even know if they want to fight or pray.\" He laughs coldly. \"Makes our job easier.\"",
            next: "bandit_confidence_narration"
        },
        
        bandit_confidence_narration: {
            speaker: "Narrator",
            text: "Your hesitation has emboldened the bandits. They sense weakness and are moving to exploit it.",
            choices: [
                {
                    text: "\"Enough games. What do you want?\"",
                    next: "assert_control_late",
                    onChoose: function() {
                        updateStoryVariable('flags.late_assertion', true);
                    }
                },
                {
                    text: "Continue to wait and see",
                    next: "full_passivity",
                    onChoose: function() {
                        updateStoryVariable('flags.completely_passive', true);
                        updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 10);
                    }
                }
            ]
        },
        
        reluctant_fighter: {
            speaker: "Maria Vasquez",
            text: "\"Violence finds you whether you want it or not, Preacher. Better to be ready.\" Her tone is understanding but firm.",
            next: "violence_arrives"
        },
        
        violence_arrives: {
            speaker: "Narrator",
            text: "Outside, the bandit leader's voice booms: \"Alright, pilgrims! Time to pay the toll!\"",
            next: "bandit_demands"
        },
        
        accept_violence: {
            speaker: "Maria Vasquez", 
            text: "\"Now you're talking sense. These men respect only strength.\" She positions her gun. \"Let's give them something to respect.\"",
            next: "violence_prepared"
        },
        
        violence_prepared: {
            speaker: "Narrator",
            text: "The moment of preparation proves crucial as the bandit leader shouts his demands.",
            next: "bandit_demands",
            onLeave: function() {
                updateStoryVariable('flags.prepared_for_violence', true);
            }
        },
        
        passive_approach: {
            speaker: "Narrator",
            text: "Your words seem to calm Jacob slightly, but Maria shoots you a look that could cut glass. Thomas just takes another drink.",
            next: "maria_frustrated"
        },
        
        maria_frustrated: {
            speaker: "Maria Vasquez",
            text: "\"Patience is a virtue, Preacher, but sometimes it gets you killed.\" She keeps her hand near her gun despite your counsel.",
            next: "bandit_loses_patience"
        },
        
        forced_action: {
            speaker: "Jacob Rivers",
            text: "\"You're right. My pa always said waiting for trouble just makes it worse.\" The boy's hand steadies slightly on his gun.",
            next: "jacob_encouraged"
        },
        
        jacob_encouraged: {
            speaker: "Narrator",
            text: "Your words of encouragement seem to bolster the young man's courage, though his inexperience still shows.",
            next: "bandit_demands"
        },
        
        bandit_demands: {
            speaker: "Bandit Leader",
            text: "\"Passengers! Out of the coach, nice and slow. Leave your weapons and valuables inside. We're reasonable men—cooperate and you'll live to see sunset.\"",
            next: "maria_speaks"
        },
        
        bandit_loses_patience: {
            speaker: "Bandit Leader", 
            text: "\"Time's up! My boys are getting trigger happy, and I can't control them much longer. Everyone out NOW!\"",
            next: "patience_lost_narration"
        },
        
        patience_lost_narration: {
            speaker: "Narrator",
            text: "Your passive approach has cost valuable time. The bandits are more agitated now, making the situation more dangerous.",
            next: "maria_forced_response",
            onLeave: function() {
                updateStoryVariable('flags.bandits_agitated', true);
            }
        },
        
        maria_forced_response: {
            speaker: "Maria Vasquez",
            text: "\"So much for patience.\" Her gun is already half-drawn. \"Now we do this the hard way.\"",
            next: "fight_begins"
        },
        
        standoff_prepared: {
            speaker: "Maria Vasquez",
            text: "\"You heard the man. We're ready.\" Her gun is steady in her hand. \"Question is, are you?\"",
            next: "standoff_narration"
        },
        
        standoff_narration: {
            speaker: "Narrator",
            text: "The tension is thick as both sides size each other up. Your show of strength has impressed your companions and made the bandits more cautious.",
            next: "maria_speaks"
        },
        
        measured_response: {
            speaker: "Bandit Leader", 
            text: "\"Diplomatic but armed. I can respect that.\" He tips his hat mockingly. \"Shame you won't live long enough to negotiate properly.\"",
            next: "measured_narration"
        },
        
        measured_narration: {
            speaker: "Narrator",
            text: "Your balanced approach has bought some time, but the threat remains. The bandits are still confident in their numbers.",
            next: "maria_speaks"
        },
        
        assert_control_late: {
            speaker: "Bandit Leader",
            text: "\"NOW you want to talk? After letting us see how scared you are?\" He laughs. \"Too late for that, pilgrim. Price just went up.\"",
            next: "control_late_narration"
        },
        
        control_late_narration: {
            speaker: "Narrator",
            text: "Your late attempt to take control has only made things worse. The bandits smell fear and are pressing their advantage.",
            next: "desperate_situation"
        },
        
        full_passivity: {
            speaker: "Narrator",
            text: "Your continued silence speaks volumes. The bandits exchange glances, grinning. They've found easy prey.",
            next: "maria_takes_charge"
        },
        
        maria_takes_charge: {
            speaker: "Maria Vasquez",
            text: "\"Jesus Christ, Preacher, say something!\" Her frustration is evident as she realizes you're not taking charge.",
            next: "desperate_situation"
        },
        
        desperate_situation: {
            speaker: "Bandit Leader",
            text: "\"Alright, boys. These sheep are ready for shearing. Everyone out of the coach. NOW!\"",
            next: "desperate_narration"
        },
        
        desperate_narration: {
            speaker: "Narrator",
            text: "Your passive approach has put everyone in greater danger. The bandits are now fully aggressive and confident.",
            next: "forced_compliance"
        },
        
        forced_compliance: {
            speaker: "Narrator",
            text: "With little choice left, your group begins to comply. But Maria has other ideas.",
            next: "maria_rebels"
        },
        
        maria_rebels: {
            speaker: "Maria Vasquez",
            text: "\"Like hell.\" Her gun comes up fast. \"Preacher may be useless, but I'm not going down without a fight.\"",
            next: "fight_begins",
            onLeave: function() {
                updateStoryVariable('flags.maria_forced_to_lead', true);
                updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 20);
            }
        },

        bandit_threatened: {
            speaker: "Narrator",
            text: "The leader's eyes narrow. For a moment, something flickers there—uncertainty, perhaps even fear. Then it's gone, replaced by rage.",
            next: "bandit_angry"
        },
        
        bandit_angry: {
            speaker: "Bandit Leader",
            text: "\"You got sand, Preacher. Let's see if it's enough to stop a bullet.\"",
            next: "fight_begins"
        },
        
        bandit_greedy: {
            speaker: "Bandit Leader",
            text: "\"Smart man. Alright, everyone out. Slow and easy. Any sudden moves and my boys get twitchy.\"",
            next: "maria_objects"
        },
        
        maria_speaks: {
            speaker: "Maria Vasquez",
            text: "\"Six to four? I count different.\" Her voice is calm, almost amused. \"See, you're counting the boy and the drunk. But you're not counting the two rifles aimed at your back from those rocks.\"",
            next: "bluff_narration"
        },
        
        bluff_narration: {
            speaker: "Narrator",
            text: "The bandits turn slightly, uncertain. There's nothing there, but the doubt is enough.",
            choices: [
                {
                    text: "Play along with her bluff",
                    next: "support_bluff",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 15);
                        updateStoryVariable('relationships.maria.thomas.trust', getStoryVariable('relationships.maria.thomas.trust') + 10);
                    }
                },
                {
                    text: "Stay silent and ready",
                    next: "tense_moment"
                }
            ]
        },
        
        maria_objects: {
            speaker: "Maria Vasquez",
            text: "\"I don't think so.\" Her pistol is already half-drawn. \"See, I've got business in Perdition, and it doesn't include being robbed by amateur highwaymen.\"",
            next: "fight_begins"
        },
        
        support_bluff: {
            speaker: "Elijah Cross",
            text: "\"The lady speaks truth. Did you think we'd travel this road unprotected? Lower your weapons, and everyone lives to see another sunset.\"",
            next: "thomas_supports"
        },
        
        thomas_supports: {
            speaker: "Narrator",
            text: "Thomas, catching on, adds his voice: \"I've got wounded to tend to in Perdition. I'd rather not add to their number here.\"",
            next: "bluff_works"
        },
        
        tense_moment: {
            speaker: "Narrator",
            text: "The moment stretches. Sweat beads on foreheads. Fingers twitch near triggers. Even the wind seems to hold its breath.",
            next: "jacob_panics"
        },
        
        bluff_works: {
            speaker: "Narrator",
            text: "The bandit leader's eyes dart to the rocks, then back. Doubt has taken root. His men shift nervously, no longer sure of their advantage.",
            next: "bandit_doubts"
        },
        
        bandit_doubts: {
            speaker: "Bandit Leader",
            text: "\"You're lying.\" But his voice lacks conviction.",
            next: "maria_presses"
        },
        
        maria_presses: {
            speaker: "Maria Vasquez",
            text: "\"Only one way to find out. But once the shooting starts, there's no taking it back. Your call.\"",
            choices: [
                {
                    text: "Press the advantage",
                    next: "bandits_retreat"
                },
                {
                    text: "Offer them a way out",
                    next: "peaceful_resolution"
                }
            ]
        },
        
        jacob_panics: {
            speaker: "Narrator",
            text: "The pressure breaks young Jacob. His nerve fails, and his gun goes off—whether by accident or panic, no one can say. The bullet goes wide, but the damage is done.",
            next: "jacob_apologizes"
        },
        
        jacob_apologizes: {
            speaker: "Jacob Rivers",
            text: "\"I—I didn't mean—\"",
            next: "fight_begins"
        },
        
        bandits_retreat: {
            speaker: "Elijah Cross",
            text: "\"The Lord offers mercy to those who seek it. But make no mistake—we are prepared to send you to judgment if you force our hand. Choose wisely.\"",
            next: "retreat_narration"
        },
        
        retreat_narration: {
            speaker: "Narrator",
            text: "The combination of Maria's steel, Elijah's conviction, and the seed of doubt proves too much. The bandit leader spits in the dust.",
            next: "bandit_threatens"
        },
        
        bandit_threatens: {
            speaker: "Bandit Leader",
            text: "\"This ain't over. Perdition's a small town, and we got long memories.\"",
            next: "bandits_leave"
        },
        
        bandits_leave: {
            speaker: "Narrator",
            text: "With that threat hanging in the air like smoke, the bandits wheel their horses and ride off, leaving only dust and the promise of future trouble.",
            next: "aftermath_peaceful",
            onLeave: function() {
                updateStoryVariable('flags.bandits_retreated', true);
                updateStoryVariable('flags.made_enemies', true);
            }
        },
        
        peaceful_resolution: {
            speaker: "Elijah Cross",
            text: "\"No blood needs to be spilled today. Ride on, and we'll forget this meeting ever happened.\"",
            next: "bandit_considers"
        },
        
        bandit_considers: {
            speaker: "Bandit Leader",
            text: "\"Forget? Mister, I don't forget nothing. But maybe you're right. Maybe today ain't the day.\" He tips his hat mockingly. \"Welcome to Perdition, pilgrims. Hope you survive it.\"",
            next: "bandits_laugh_leave"
        },
        
        bandits_laugh_leave: {
            speaker: "Narrator",
            text: "The bandits leave, but their laughter carries on the wind—a promise that this isn't over.",
            next: "aftermath_peaceful",
            onLeave: function() {
                updateStoryVariable('flags.bandits_warned', true);
            }
        },
        
        fight_begins: {
            speaker: "Narrator",
            text: "The world explodes into chaos. Maria's gun clears leather faster than thought, and her first shot takes a bandit from his saddle. Thomas, despite his shaking hands, manages to fire his derringer. Even Jacob, terrified as he is, starts shooting.",
            next: "elijah_choice"
        },
        
        elijah_choice: {
            speaker: "Narrator",
            text: "In the midst of the gunfight, Elijah faces a choice that will define him. A bandit has Thomas in his sights, about to fire.",
            choices: [
                {
                    text: "Shoot to save Thomas",
                    next: "elijah_shoots",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_killed_in_chapter1', true);
                        updateStoryVariable('relationships.elijah.thomas.trust', getStoryVariable('relationships.elijah.thomas.trust') + 25);
                    }
                },
                {
                    text: "Try to tackle the bandit",
                    next: "elijah_tackles",
                    onChoose: function() {
                        updateStoryVariable('flags.elijah_pacifist_in_chapter1', true);
                    }
                },
                {
                    text: "Shout a warning",
                    next: "elijah_warns",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.thomas.trust', getStoryVariable('relationships.elijah.thomas.trust') + 10);
                    }
                }
            ]
        },
        
        elijah_shoots: {
            speaker: "Narrator",
            text: "Time slows. Elijah's hand finds the old Navy Colt he swore he'd never touch again. The weight is familiar, damning. He fires, and the bandit falls. Thomas lives, but something dies in Elijah's eyes.",
            next: "elijah_shoots_speaks"
        },
        
        elijah_shoots_speaks: {
            speaker: "Elijah Cross",
            text: "\"Forgive me.\" Whether he's talking to God or himself is unclear.",
            next: "fight_ends"
        },
        
        elijah_tackles: {
            speaker: "Narrator",
            text: "Elijah throws himself at the bandit, bowling him over. They struggle in the dust. The bandit's gun goes off, but the shot goes wild. Thomas, given time, places a precise shot that ends the threat.",
            next: "thomas_grateful"
        },
        
        thomas_grateful: {
            speaker: "Thomas Whitmore",
            text: "\"Preacher! You damn fool, you could have been killed!\"",
            next: "elijah_responds_tackle"
        },
        
        elijah_responds_tackle: {
            speaker: "Elijah Cross",
            text: "\"Better that than adding to my tally of souls.\"",
            next: "fight_ends"
        },
        
        elijah_warns: {
            speaker: "Narrator",
            text: "\"Thomas! Down!\" Elijah's shout comes just in time. Thomas ducks, and Maria's shot takes the bandit down instead. But another bandit, seeing Elijah distracted, takes aim at him.",
            next: "jacob_saves"
        },
        
        jacob_saves: {
            speaker: "Narrator",
            text: "Jacob, surprising everyone including himself, saves Elijah with a lucky shot.",
            next: "jacob_shocked"
        },
        
        jacob_shocked: {
            speaker: "Jacob Rivers",
            text: "\"I... I got him! I actually got him!\"",
            next: "fight_ends",
            onLeave: function() {
                updateStoryVariable('flags.jacob_saved_elijah_chapter1', true);
                updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 20);
            }
        },
        
        fight_ends: {
            speaker: "Narrator",
            text: "When the smoke clears, three bandits lie dead. The others have fled, including their leader. The stagecoach is riddled with bullets, but miraculously, all four passengers still breathe.",
            next: "aftermath_violent"
        },
        
        aftermath_peaceful: {
            speaker: "Narrator",
            text: "As the dust settles, the four strangers look at each other with new eyes. They faced danger together and came through without bloodshed—a minor miracle in this harsh land.",
            next: "driver_amazed"
        },
        
        driver_amazed: {
            speaker: "Stagecoach Driver",
            text: "\"Well, I'll be damned. Thirty years driving this route, and that's the first time I've seen bandits back down. You folks got the devil's own luck.\"",
            next: "arrival_perdition"
        },
        
        aftermath_violent: {
            speaker: "Narrator",
            text: "The aftermath of violence hangs heavy. Blood soaks into the thirsty ground. The survivors breathe hard, each processing what just happened in their own way.",
            next: "maria_checks"
        },
        
        maria_checks: {
            speaker: "Maria Vasquez",
            text: "\"Everyone alright? No one's hurt?\" She's already checking her weapon, professional even in the aftermath.",
            next: "thomas_responds"
        },
        
        thomas_responds: {
            speaker: "Thomas Whitmore",
            text: "\"Define 'alright.'\" He takes a long pull from his bottle. \"But I'm breathing, which is more than those poor bastards can say.\"",
            choices: [
                {
                    text: "Check on young Jacob",
                    next: "comfort_jacob"
                },
                {
                    text: "Say words over the dead",
                    next: "pray_for_dead"
                }
            ]
        },
        
        comfort_jacob: {
            speaker: "Narrator",
            text: "Jacob stands frozen, staring at the man he shot. His face is pale, his hands shaking.",
            next: "elijah_comforts"
        },
        
        elijah_comforts: {
            speaker: "Elijah Cross",
            text: "\"First time is always the hardest, son. It's supposed to be hard. The day it gets easy is the day you lose yourself.\"",
            next: "jacob_responds"
        },
        
        jacob_responds: {
            speaker: "Jacob Rivers",
            text: "\"I... I killed a man. My brothers always said it would feel different. Powerful. But I just feel... empty.\"",
            next: "elijah_wisdom"
        },
        
        elijah_wisdom: {
            speaker: "Elijah Cross",
            text: "\"That emptiness? That's your soul trying to hold on. Don't let go of it.\"",
            next: "arrival_perdition",
            onLeave: function() {
                updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 15);
            }
        },
        
        pray_for_dead: {
            speaker: "Narrator",
            text: "Elijah kneels beside the fallen bandits, his voice carrying the old words he thought he'd left behind.",
            next: "elijah_prays"
        },
        
        elijah_prays: {
            speaker: "Elijah Cross",
            text: "\"Lord, we commend these souls to your judgment. They chose their path, and we chose ours. Grant them the mercy we could not.\"",
            next: "maria_questions"
        },
        
        maria_questions: {
            speaker: "Maria Vasquez",
            text: "\"You pray for men who tried to kill us?\"",
            next: "elijah_explains"
        },
        
        elijah_explains: {
            speaker: "Elijah Cross",
            text: "\"Especially for them. The righteous don't need our prayers.\"",
            next: "arrival_perdition",
            onLeave: function() {
                updateStoryVariable('flags.elijah_prayed_for_bandits_c1', true);
            }
        },
        
        arrival_perdition: {
            speaker: "Narrator",
            text: "The stagecoach limps into Perdition as the sun bleeds red across the horizon. The town is smaller than expected—a main street, a few buildings fighting a losing battle against the desert, and more ghosts than living souls.",
            next: "driver_warns"
        },
        
        driver_warns: {
            speaker: "Stagecoach Driver",
            text: "\"Perdition, folks. Such as it is. Watch yourselves—this town's got a way of testing people. Those bandits? They were just the welcome committee.\"",
            next: "entering_town"
        },
        
        entering_town: {
            speaker: "Narrator",
            text: "The four passengers gather their belongings, each lost in thought. The attack has forged something between them—not quite trust, not yet friendship, but a recognition that in this place, they might need each other.",
            next: "thomas_offers"
        },
        
        thomas_offers: {
            speaker: "Thomas Whitmore",
            text: "\"Well, I for one need a drink. A real drink, not this medicinal swill. Anyone care to join me? First round's on the doctor who's still breathing thanks to you all.\"",
            choices: [
                {
                    text: "\"A drink sounds good. We should stick together.\"",
                    next: "agree_drinks",
                    onChoose: function() {
                        updateStoryVariable('flags.group_drinks_c1', true);
                        updateStoryVariable('relationships.elijah.thomas.trust', getStoryVariable('relationships.elijah.thomas.trust') + 10);
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 5);
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 5);
                    }
                },
                {
                    text: "\"I need to find lodging first. But perhaps later.\"",
                    next: "practical_choice"
                },
                {
                    text: "\"I don't drink. But I'll walk with you.\"",
                    next: "temperance_choice"
                }
            ]
        },
        
        agree_drinks: {
            speaker: "Maria Vasquez",
            text: "\"After what just happened, I could use a drink myself. Besides, in a town like this, probably safer to watch each other's backs.\"",
            next: "jacob_agrees"
        },
        
        jacob_agrees: {
            speaker: "Jacob Rivers",
            text: "\"I... I'll come too. If that's alright. I don't much want to be alone right now.\"",
            next: "group_united"
        },
        
        group_united: {
            speaker: "Narrator",
            text: "The unlikely group heads toward the saloon, their shadows long in the dying light. Whatever brought them to Perdition, they're bound together now by lead and blood.",
            next: "chapter1_end"
        },
        
        practical_choice: {
            speaker: "Maria Vasquez",
            text: "\"Smart. This town doesn't look like it has many safe places to sleep. I'll come with you—safety in numbers.\"",
            next: "practical_narration"
        },
        
        practical_narration: {
            speaker: "Narrator",
            text: "Thomas shrugs and heads to the saloon alone, while Jacob hesitates, unsure who to follow.",
            next: "chapter1_end"
        },
        
        temperance_choice: {
            speaker: "Thomas Whitmore",
            text: "\"A preacher who won't drink with the man whose life he saved? Your loss, padre. But I appreciate the company.\"",
            next: "temperance_narration"
        },
        
        temperance_narration: {
            speaker: "Narrator",
            text: "As they walk down Perdition's dusty main street, each wonders what they've gotten themselves into.",
            next: "chapter1_end"
        },
        
        chapter1_end: {
            speaker: "Narrator",
            text: "Night falls on Perdition like a shroud. In the saloon, Thomas finds his bottle. In the hotel, Maria checks the exits. In the church—abandoned but still standing—Elijah kneels before a broken altar. And somewhere in the shadows, Jacob tries to wash blood from his hands that isn't there.",
            next: "chapter1_reflection"
        },
        
        chapter1_reflection: {
            speaker: "Narrator",
            text: "They've survived their first test, but Perdition has more in store. The bandit leader's words echo: 'This ain't over.'",
            next: "chapter1_final"
        },
        
        chapter1_final: {
            speaker: "Narrator",
            text: "In this town where the wind goes to die, four strangers have found each other. Whether that's salvation or damnation remains to be seen.",
            choices: [
                {
                    text: "Continue to Chapter 2",
                    next: null,
                    nextChapter: "chapter2"
                }
            ],
            onEnter: {
                setBackground: "night"
            }
        }
    }
};