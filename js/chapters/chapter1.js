// Chapter 1: Baptism by Fire (Linear Version)
storyData.chapter1 = {
    name: "Chapter 1",
    title: "Baptism by Fire",
    scenes: {
        // Scene 1: The Confrontation Begins
        start: {
            speaker: "Narrator",
            text: "The bandit leader steps fully into view, his weathered face bearing scars that speak of a violent life. Behind him, five more riders dismount with practiced ease, rifles and pistols glinting in the afternoon sun. The stagecoach driver raises his hands slowly, fear evident in every movement.",
            next: "bandit_leader_speaks"
        },

        // Scene 2: Bandit Leader's Demands
        bandit_leader_speaks: {
            speaker: "Bandit Leader",
            text: "'Name's Valdez. You folks are gonna step out real gentle-like, and we're gonna have ourselves a conversation about what's in those bags.' His eyes scan the coach interior. 'Especially you, Preacher. God's work pays better than most folks think.'",
            next: "passengers_react"
        },

        // Scene 3: Passengers React
        passengers_react: {
            speaker: "Narrator",
            text: "The four passengers sit frozen for a moment. Maria's hand hovers near her weapon, Elijah clutches his Bible tighter, Thomas swallows hard, and Jacob looks like he might be sick. The weight of decision hangs heavy in the dusty air.",
            next: "elijah_first_response"
        },

        // Scene 4: Elijah's First Response
        elijah_first_response: {
            speaker: "Elijah Cross",
            text: "'There's no need for violence, friend.' Elijah's voice carries the practiced calm of years of sermons. 'We're simple travelers with little of value. Perhaps we can come to an understanding.'",
            choices: [
                {
                    text: "Focus on the bandits' reaction",
                    next: "bandits_laugh"
                },
                {
                    text: "Observe Maria's preparation",
                    next: "maria_readies_herself"
                },
                {
                    text: "Watch Thomas and Jacob",
                    next: "fear_and_resolve"
                }
            ]
        },

        // Scene 5: Bandits Laugh
        bandits_laugh: {
            speaker: "Narrator",
            text: "Valdez throws back his head and laughs, a harsh sound like grinding stone. His men join in, but their eyes never stop watching for trouble. 'Understanding? Oh, Preacher, I understand plenty. I understand you got coin, and I want it.'",
            next: "maria_readies_herself"
        },

        // Scene 6: Maria Readies Herself
        maria_readies_herself: {
            speaker: "Narrator",
            text: "Maria shifts almost imperceptibly, her body coiling like a spring. Her dark eyes calculate distances, count weapons, assess threats. She's done this before, and her experience shows in the subtle preparation of a predator about to strike.",
            next: "fear_and_resolve"
        },

        // Scene 7: Fear and Resolve
        fear_and_resolve: {
            speaker: "Narrator",
            text: "Thomas's hands shake as he fumbles for his medical bag, where his derringer waits. Jacob's fear is naked on his young face, but beneath it, something harder emerges. The boy is becoming a man in this crucible of violence.",
            next: "valdez_growing_impatient"
        },

        // Scene 8: Valdez Growing Impatient
        valdez_growing_impatient: {
            speaker: "Valdez",
            text: "'Enough talking!' He raises his rifle. 'Out of the coach, now! Anyone tries anything clever, and the boy dies first!' The barrel swings toward Jacob, who goes pale as death.",
            next: "moment_of_truth"
        },

        // Scene 9: Moment of Truth
        moment_of_truth: {
            speaker: "Narrator",
            text: "This is the moment that will define them all. In the space of a heartbeat, choices must be made that will echo through their lives. The desert wind stills, as if nature itself holds its breath.",
            next: "maria_moves_first"
        },

        // Scene 10: Maria Moves First
        maria_moves_first: {
            speaker: "Narrator",
            text: "Maria explodes into motion with deadly grace. Her Colt clears leather faster than thought, the weapon barking flame and lead. The nearest bandit spins and falls, clutching his shoulder, his own rifle firing harmlessly into the sky.",
            next: "chaos_erupts"
        },

        // Scene 11: Chaos Erupts
        chaos_erupts: {
            speaker: "Narrator",
            text: "The world dissolves into gunfire and shouting. Valdez curses and swings his rifle toward Maria. The coach horses rear and scream. The driver tumbles from his seat, whether from fear or a bullet unclear.",
            next: "elijah_joins_fight"
        },

        // Scene 12: Elijah Joins the Fight
        elijah_joins_fight: {
            speaker: "Narrator",
            text: "Elijah's Army Colt appears in his hand as if summoned by prayer. The weapon feels familiar despite the years, muscle memory overriding moral reservation. His first shot takes a bandit in the leg, sending him sprawling.",
            next: "thomas_surprising_action"
        },

        // Scene 13: Thomas's Surprising Action
        thomas_surprising_action: {
            speaker: "Narrator",
            text: "Thomas moves with unexpected coordination, his medical training serving him well. He produces his derringer and fires with surgeon's precision, the small bullet finding its mark in a bandit's gun hand, disarming him instantly.",
            next: "jacob_freezes"
        },

        // Scene 14: Jacob Freezes
        jacob_freezes: {
            speaker: "Narrator",
            text: "Jacob sits paralyzed, his untested courage crumbling under the reality of violence. He clutches his satchel like a shield, eyes wide with terror as bullets fly around him. The boy's initiation into the harsh realities of the West has begun.",
            next: "valdez_rallies_men"
        },

        // Scene 15: Valdez Rallies His Men
        valdez_rallies_men: {
            speaker: "Valdez",
            text: "'Take cover behind the rocks! These ain't sheep for the slaughter!' He fires at Maria, the bullet splintering wood near her head. 'Kill the men, but keep the woman and boy alive! They might be worth something!'",
            next: "first_blood_drawn"
        },

        // Scene 16: First Blood Drawn
        first_blood_drawn: {
            speaker: "Narrator",
            text: "A bandit's bullet catches Elijah in the arm, spinning him around. Blood seeps through his dark coat, but he maintains his grip on his weapon. The wound is painful but not serious—he's suffered worse in the war.",
            next: "maria_tactical_thinking"
        },

        // Scene 17: Maria's Tactical Thinking
        maria_tactical_thinking: {
            speaker: "Narrator",
            text: "Maria assesses their position with cold professionalism. The coach provides some cover, but they're outnumbered and outgunned. She needs to even the odds quickly, or they'll all be dead or worse within minutes.",
            choices: [
                {
                    text: "Focus on Maria's next move",
                    next: "maria_flanking_maneuver"
                },
                {
                    text: "Check on the wounded Elijah",
                    next: "elijah_pushes_through_pain"
                },
                {
                    text: "See how Thomas is coping",
                    next: "thomas_under_fire"
                }
            ]
        },

        // Scene 18: Maria's Flanking Maneuver
        maria_flanking_maneuver: {
            speaker: "Narrator",
            text: "With feline grace, Maria rolls from the coach to a nearby boulder, drawing fire away from the others. Her movement is poetry written in gunpowder, each step calculated to maximize cover while maintaining offensive capability.",
            next: "elijah_pushes_through_pain"
        },

        // Scene 19: Elijah Pushes Through Pain
        elijah_pushes_through_pain: {
            speaker: "Narrator",
            text: "Elijah grits his teeth against the burning in his arm and returns fire. His military training surfaces through years of peaceful ministry, muscle memory guiding his aim. Another bandit cries out and staggers back.",
            next: "thomas_under_fire"
        },

        // Scene 20: Thomas Under Fire
        thomas_under_fire: {
            speaker: "Narrator",
            text: "Thomas discovers that his hands, so unsteady with drink, become rock-solid under fire. The surgeon's precision that once saved lives now serves to preserve them. His derringer barks again, finding its mark.",
            next: "jacob_finds_voice"
        },

        // Scene 21: Jacob Finds His Voice
        jacob_finds_voice: {
            speaker: "Jacob Rivers",
            text: "'Behind you!' Jacob's voice cracks as he shouts a warning to Maria. A bandit had circled around the rocks, but the boy's sharp eyes caught the movement. It's his first contribution to the fight, and it saves Maria's life.",
            next: "maria_acknowledges_jacob"
        },

        // Scene 22: Maria Acknowledges Jacob
        maria_acknowledges_jacob: {
            speaker: "Maria Vasquez",
            text: "'Good eyes, boy!' Maria spins and fires in one fluid motion, her bullet catching the flanking bandit center mass. He drops like a stone, his rifle clattering on the rocks. Three bandits down, three to go.",
            next: "valdez_desperate_gambit"
        },

        // Scene 23: Valdez's Desperate Gambit
        valdez_desperate_gambit: {
            speaker: "Valdez",
            text: "'Enough of this!' Valdez breaks from cover, charging toward the coach with wild fury. 'If I'm gonna die, I'm taking some of you with me!' His rifle blazes as he advances, death in his eyes.",
            next: "final_confrontation_begins"
        },

        // Scene 24: Final Confrontation Begins
        final_confrontation_begins: {
            speaker: "Narrator",
            text: "Time seems to slow as Valdez rushes forward, his remaining men laying down covering fire. This is the moment of ultimate decision—fight or flight, live or die. The choice will define who they become.",
            next: "elijah_stands_firm"
        },

        // Scene 25: Elijah Stands Firm
        elijah_stands_firm: {
            speaker: "Narrator",
            text: "Elijah rises from cover, his wounded arm forgotten. The preacher and the soldier within him unite for one terrible moment. His Colt speaks with divine authority, and Valdez stumbles, blood blooming across his chest.",
            next: "valdez_final_words"
        },

        // Scene 26: Valdez's Final Words
        valdez_final_words: {
            speaker: "Valdez",
            text: "(Gasping, falling to his knees) 'You... you think this is over? There's worse than me out there, Preacher. Much worse. Perdition... Perdition will eat you alive...' He collapses, his rifle falling silent.",
            next: "remaining_bandits_flee"
        },

        // Scene 27: Remaining Bandits Flee
        remaining_bandits_flee: {
            speaker: "Narrator",
            text: "With their leader dead, the surviving bandits break and run, spurring their horses toward the horizon. They disappear into the desert like mirages, leaving only dust and silence in their wake.",
            next: "aftermath_silence"
        },

        // Scene 28: Aftermath Silence
        aftermath_silence: {
            speaker: "Narrator",
            text: "The silence that follows is deafening after the thunderous gunfire. Smoke drifts from the barrels of weapons, and the acrid smell of gunpowder fills the air. The four survivors look at each other with new eyes.",
            next: "checking_for_wounded"
        },

        // Scene 29: Checking for Wounded
        checking_for_wounded: {
            speaker: "Thomas Whitmore",
            text: "'Is anyone seriously hurt?' Thomas's medical training takes over, his hands already reaching for his bag. 'Elijah, let me look at that arm. The rest of you, check yourselves for wounds you might not have noticed.'",
            next: "elijah_tends_to_wound"
        },

        // Scene 30: Elijah Tends to His Wound
        elijah_tends_to_wound: {
            speaker: "Narrator",
            text: "Elijah allows Thomas to examine his arm, wincing as the doctor probes the wound. 'Clean through,' Thomas pronounces. 'You'll live, but it needs proper bandaging.' The bullet had missed bone and major vessels.",
            next: "maria_surveys_battlefield"
        },

        // Scene 31: Maria Surveys the Battlefield
        maria_surveys_battlefield: {
            speaker: "Narrator",
            text: "Maria moves among the fallen bandits with professional thoroughness, checking for survivors and collecting weapons. Her movements are efficient, practiced. This is not her first time walking a battlefield.",
            choices: [
                {
                    text: "Learn about Maria's past experience",
                    next: "maria_backstory_hint"
                },
                {
                    text: "Focus on Jacob's reaction",
                    next: "jacob_processing_violence"
                },
                {
                    text: "Check on the stagecoach driver",
                    next: "driver_status_check"
                }
            ]
        },

        // Scene 32: Maria's Backstory Hint
        maria_backstory_hint: {
            speaker: "Narrator",
            text: "As Maria works, flashes of memory surface—other battles, other corpses, other times when survival meant embracing violence. The Mexican Revolution taught harsh lessons, and she learned them all too well.",
            next: "jacob_processing_violence"
        },

        // Scene 33: Jacob Processing Violence
        jacob_processing_violence: {
            speaker: "Narrator",
            text: "Jacob stares at the bodies with wide eyes, his face pale. The reality of death, violent and sudden, crashes over him like a cold wave. The boy who left home this morning is gone forever, replaced by someone harder.",
            next: "driver_status_check"
        },

        // Scene 34: Driver Status Check
        driver_status_check: {
            speaker: "Narrator",
            text: "The stagecoach driver emerges from behind the coach, shaken but unharmed. 'Thought I was a dead man for sure,' he gasps. 'You folks... you saved all our lives. Never seen anything like it.' His respect is evident.",
            next: "thomas_medical_assessment"
        },

        // Scene 35: Thomas's Medical Assessment
        thomas_medical_assessment: {
            speaker: "Thomas Whitmore",
            text: "'We were fortunate. Very fortunate.' Thomas's hands remain steady as he bandages Elijah's arm. 'A few inches either way, and we'd be planning a funeral instead of continuing our journey.'",
            next: "elijah_moral_struggle"
        },

        // Scene 36: Elijah's Moral Struggle
        elijah_moral_struggle: {
            speaker: "Narrator",
            text: "Elijah stares at his bloodied hands, the weight of what he's done settling on his soul. The commandment 'Thou shalt not kill' wars with the necessity of survival. His faith feels both shaken and somehow strengthened.",
            next: "maria_practical_concerns"
        },

        // Scene 37: Maria's Practical Concerns
        maria_practical_concerns: {
            speaker: "Maria Vasquez",
            text: "'We need to move. Soon.' Maria's voice cuts through the moment of reflection. 'Gunfire carries far in the desert. If these men have friends, they'll come looking. And Valdez mentioned something about Perdition.'",
            next: "valdez_warning_remembered"
        },

        // Scene 38: Valdez's Warning Remembered
        valdez_warning_remembered: {
            speaker: "Narrator",
            text: "Valdez's dying words echo in their minds: 'There's worse than me out there.' The warning feels prophetic, a glimpse of darker trials ahead. Perdition suddenly seems less like a destination and more like a promise.",
            next: "driver_suggests_route"
        },

        // Scene 39: Driver Suggests Route
        driver_suggests_route: {
            speaker: "Stagecoach Driver",
            text: "'There's a way station about ten miles ahead. We can rest the horses, get proper medical attention for your arm, Preacher. But after that...' He looks toward the horizon. 'Perdition's still a day's ride.'",
            next: "group_discussion_begins"
        },

        // Scene 40: Group Discussion Begins
        group_discussion_begins: {
            speaker: "Narrator",
            text: "The four passengers gather near the coach, bound now by shared violence and survival. The easy anonymity of strangers has been burned away by gunfire, leaving something rawer and more honest in its place.",
            next: "jacob_speaks_up"
        },

        // Scene 41: Jacob Speaks Up
        jacob_speaks_up: {
            speaker: "Jacob Rivers",
            text: "'I... I've never seen men die before.' His voice is quiet but steady. 'Thank you. All of you. If you hadn't... if we hadn't fought...' He can't finish, but the gratitude is clear.",
            next: "maria_harsh_truth"
        },

        // Scene 42: Maria's Harsh Truth
        maria_harsh_truth: {
            speaker: "Maria Vasquez",
            text: "'Don't thank us yet, boy. This was just the beginning.' Her dark eyes are hard as flint. 'Out here, you kill or you die. Sometimes both. Better learn that now, before Perdition teaches you the hard way.'",
            next: "elijah_offers_comfort"
        },

        // Scene 43: Elijah Offers Comfort
        elijah_offers_comfort: {
            speaker: "Elijah Cross",
            text: "'She's right about the danger, but wrong about hope.' Elijah's voice carries hard-won wisdom. 'We faced death together and lived. That counts for something. We're not the same people who boarded this coach.'",
            next: "thomas_philosophical_moment"
        },

        // Scene 44: Thomas's Philosophical Moment
        thomas_philosophical_moment: {
            speaker: "Thomas Whitmore",
            text: "'Funny thing about violence—it clarifies priorities wonderfully.' Thomas's voice is steadier than it's been in months. 'Perhaps this old drunk still has some life left in him after all.'",
            choices: [
                {
                    text: "Explore Thomas's newfound resolve",
                    next: "thomas_renewed_purpose"
                },
                {
                    text: "Focus on the group's growing bond",
                    next: "unlikely_fellowship"
                },
                {
                    text: "Return to practical concerns",
                    next: "preparing_to_leave"
                }
            ]
        },

        // Scene 45: Thomas's Renewed Purpose
        thomas_renewed_purpose: {
            speaker: "Narrator",
            text: "Something has awakened in Thomas—a spark of the man he was before drink and despair claimed him. His hands no longer shake, and his eyes hold a clarity that speaks of second chances and renewed purpose.",
            next: "unlikely_fellowship"
        },

        // Scene 46: Unlikely Fellowship
        unlikely_fellowship: {
            speaker: "Narrator",
            text: "They are an unlikely group—a fallen preacher, a mysterious woman with a gun, a broken doctor finding himself, and a boy growing into manhood. But blood shared and lives saved have forged bonds stronger than friendship.",
            next: "preparing_to_leave"
        },

        // Scene 47: Preparing to Leave
        preparing_to_leave: {
            speaker: "Narrator",
            text: "They gather their belongings and help the driver check the coach for damage. A few bullet holes in the canvas, but the wheels and axles are sound. The horses, though spooked, are unharmed and ready to continue.",
            next: "final_look_back"
        },

        // Scene 48: Final Look Back
        final_look_back: {
            speaker: "Narrator",
            text: "As they prepare to leave, each takes a final look at the scene of their baptism by fire. The bodies will be food for vultures and coyotes, but the memory of this moment will stay with them forever.",
            next: "coach_rolls_on"
        },

        // Scene 49: Coach Rolls On
        coach_rolls_on: {
            speaker: "Narrator",
            text: "The stagecoach lurches into motion, wheels creaking as they roll away from the battlefield. Behind them lies their old lives; ahead waits Perdition and whatever trials it might bring. They are changed, all of them.",
            next: "chapter_end"
        },

        // Scene 50: Chapter End
        chapter_end: {
            speaker: "Narrator",
            text: "The desert wind erases their tracks, but not their memories. Four strangers became comrades in the crucible of violence. Whatever Perdition holds for them, they will face it together. The real journey is just beginning.",
            choices: [
                {
                    text: "Continue to Chapter 2",
                    next: null,
                    nextChapter: "chapter2"
                }
            ]
        }
    }
};