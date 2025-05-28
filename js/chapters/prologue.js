// Prologue: Where the Wind Dies
storyData.prologue = {
    name: "Prologue",
    title: "Where the Wind Dies",
    scenes: {
        start: {
            text: "The town of Perdition sits at the edge of nowhere, where the desert swallows hope and spits out ghosts. In the summer of 1899, as the century prepares to turn its back on the old ways, four souls converge on this forgotten place, each running from something, each searching for something else.",
            next: "dust_storm",
            onEnter: {
                setBackground: "desert",
                weather: "dust"
            }
        },
        
        dust_storm: {
            text: "A dust storm rolls across the horizon, painting the sky the color of dried blood. The stagecoach rocks violently as it pushes through the wind, its passengers silent in their shared misery.",
            next: "elijah_intro",
            autoNext: "elijah_intro",
            delay: 4000
        },
        
        elijah_intro: {
            speaker: "Elijah Cross",
            text: "\"Lord knows I've tried to forget. But some sins, they follow you like shadows at noon. No matter how far west you run.\"",
            choices: [
                {
                    text: "Observe him quietly",
                    next: "observe_elijah",
                    onChoose: function() {
                        updateStoryVariable('flags.observed_elijah', true);
                    }
                },
                {
                    text: "Look out the window instead",
                    next: "window_view"
                }
            ],
            onEnter: {
                showCharacters: ["elijah"]
            }
        },
        
        observe_elijah: {
            text: "The man's collar betrays his past—starched white beneath the dust, a preacher's collar on a man who looks like he's wrestling with the devil himself. His hands shake slightly as he grips a worn leather bible, its pages yellowed and torn.",
            next: "maria_intro"
        },
        
        window_view: {
            text: "Through the dust-caked window, you see nothing but endless desert and the occasional skeleton of a long-dead saguaro. This land takes everything and gives nothing back.",
            next: "maria_intro"
        },
        
        maria_intro: {
            speaker: "Narrator",
            text: "Across from the preacher sits a woman whose eyes never stop moving—watching the door, the windows, the other passengers. Her hand rests casually near her hip, where the outline of iron shows through her duster.",
            next: "maria_speaks_intro"
        },
        
        maria_speaks_intro: {
            speaker: "Maria Vasquez",
            text: "\"You're staring, Preacher. In my experience, men who stare too long end up seeing things they wish they hadn't.\"",
            choices: [
                {
                    text: "\"We're all running from something.\"",
                    next: "maria_response_understanding",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.maria.trust', getStoryVariable('relationships.elijah.maria.trust') + 5);
                    }
                },
                {
                    text: "\"Just wondering what a woman like you is doing here.\"",
                    next: "maria_response_suspicious",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.maria.tension', getStoryVariable('relationships.elijah.maria.tension') + 10);
                    }
                }
            ],
            onEnter: {
                showCharacters: ["elijah", "maria"]
            }
        },
        
        maria_response_understanding: {
            speaker: "Maria Vasquez",
            text: "\"Running? Maybe. Or maybe I'm hunting. Sometimes it's hard to tell the difference anymore.\" She offers a smile that doesn't reach her eyes.",
            next: "thomas_intro"
        },
        
        maria_response_suspicious: {
            speaker: "Maria Vasquez", 
            text: "\"A woman like me?\" Her hand moves an inch closer to her hip. \"Careful, Preacher. Your Good Book teach you about judging folks?\"",
            next: "thomas_intro"
        },
        
        thomas_intro: {
            speaker: "Narrator",
            text: "A bottle rolls across the coach floor as they hit another rut. It stops at the feet of a man who looks like he was once somebody important. His clothes are fine but stained, his hands steady despite the smell of whiskey that clings to him like perfume.",
            next: "thomas_speaks_intro"
        },
        
        thomas_speaks_intro: {
            speaker: "Thomas Whitmore",
            text: "\"Medicine.\" He picks up the bottle, taking a long pull. \"For the nerves. This damned rocking would test even the Lord's patience.\"",
            choices: [
                {
                    text: "\"You're a doctor?\"",
                    next: "thomas_doctor",
                    onChoose: function() {
                        updateStoryVariable('flags.knows_thomas_profession', true);
                    }
                },
                {
                    text: "Say nothing but watch him",
                    next: "thomas_observed"
                }
            ],
            onEnter: {
                showCharacters: ["elijah", "maria", "thomas"]
            }
        },
        
        thomas_doctor: {
            speaker: "Thomas Whitmore",
            text: "\"Was. Past tense. These days I'm just another ghost heading west. Though I suppose even ghosts need their medicine.\" He laughs bitterly and takes another drink.",
            next: "jacob_intro"
        },
        
        thomas_observed: {
            text: "His hands might shake from the drink, but there's something in the way he moves—precise, careful, like a man used to holding life and death in his fingertips. The bottle might be his master now, but it wasn't always so.",
            next: "jacob_intro"
        },
        
        jacob_intro: {
            speaker: "Narrator",
            text: "In the corner, trying to make himself invisible, sits a boy barely old enough to shave. His clothes are too new, his gun too clean, his eyes too innocent for this hard country.",
            next: "jacob_speaks_intro"
        },
        
        jacob_speaks_intro: {
            speaker: "Jacob Rivers",
            text: "\"How... how much further to Perdition?\" His voice cracks slightly, betraying his youth.",
            choices: [
                {
                    text: "\"First time out west, kid?\"",
                    next: "jacob_nervous",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.jacob.trust', getStoryVariable('relationships.elijah.jacob.trust') + 10);
                    }
                },
                {
                    text: "\"Far enough to change your mind about coming.\"",
                    next: "jacob_defensive",
                    onChoose: function() {
                        updateStoryVariable('relationships.elijah.jacob.tension', getStoryVariable('relationships.elijah.jacob.tension') + 5);
                    }
                }
            ],
            onEnter: {
                showCharacters: ["elijah", "maria", "thomas", "jacob"]
            }
        },
        
        jacob_nervous: {
            speaker: "Jacob Rivers",
            text: "\"Is it that obvious?\" He tries to smile but it comes out wrong. \"My pa always said the west would make a man of me. Course, he said a lot of things.\"",
            next: "coach_stops"
        },
        
        jacob_defensive: {
            speaker: "Jacob Rivers",
            text: "\"I ain't changing my mind about nothing. I got my reasons for being here, same as you all.\" His hand goes to his gun, a gesture more nervous than threatening.",
            next: "coach_stops"
        },
        
        coach_stops: {
            speaker: "Narrator",
            text: "The stagecoach lurches to a sudden stop. Outside, horses whinny nervously. The driver's voice carries down, tight with fear: \"Riders coming. Six of them. Armed.\"",
            next: "maria_warns"
        },
        
        maria_warns: {
            speaker: "Maria Vasquez",
            text: "\"Well, Preacher, seems like Perdition's welcoming committee found us first. Hope you remember how to pray.\"",
            choices: [
                {
                    text: "\"I remember. Question is, do you remember how to shoot?\"",
                    next: "prologue_end_tense"
                },
                {
                    text: "\"Sometimes the Lord provides unlikely angels.\"",
                    next: "prologue_end_faith"
                }
            ],
            onEnter: {
                setBackground: "sunset",
                weather: "clear"
            }
        },
        
        prologue_end_tense: {
            speaker: "Maria Vasquez",
            text: "\"Never forgot.\" She draws her pistol in one smooth motion. \"Though I doubt these men are here for prayer meeting.\"",
            next: "prologue_final"
        },
        
        prologue_end_faith: {
            speaker: "Elijah Cross",
            text: "\"Then let's hope we're angels and not the devils they're expecting.\"",
            next: "prologue_final"
        },
        
        prologue_final: {
            text: "The four strangers exchange glances, united for a moment by the danger approaching. Outside, the dust swirls like prophecy, and the sound of hoofbeats grows closer. Whatever brought them to Perdition, they'll have to survive this first.",
            next: null,
            nextChapter: "chapter1"
        }
    }
};