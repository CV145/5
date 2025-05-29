// Chapter 3: Perdition's Gate (Linear Version)
storyData.chapter3 = {
    name: "Chapter 3",
    title: "Perdition's Gate",
    scenes: {
        // Scene 1: Approaching Perdition
        start: {
            speaker: "Narrator",
            text: "The stagecoach crests a low ridge, and there it is—Perdition. The town sprawls in a dusty valley like a wound in the earth, its buildings weathered and gray under the merciless sun. Even from a distance, the place feels wrong, as if hope itself has abandoned these streets.",
            next: "first_impression"
        },

        // Scene 2: First Impressions
        first_impression: {
            speaker: "Jacob Rivers",
            text: "'It's smaller than I expected.' Jacob's voice carries disappointment and unease. 'And... empty. Where are all the people?' Indeed, the streets visible from their vantage point seem eerily deserted for midday.",
            next: "maria_tactical_assessment"
        },

        // Scene 3: Maria's Tactical Assessment
        maria_tactical_assessment: {
            speaker: "Maria Vasquez",
            text: "'A dying town.' Maria's eyes scan the buildings with professional interest. 'Half the structures are abandoned, but someone's maintaining defenses. See those boarded windows? Those aren't just empty—they're fortified.'",
            next: "thomas_observes_decay"
        },

        // Scene 4: Thomas Observes the Decay
        thomas_observes_decay: {
            speaker: "Thomas Whitmore",
            text: "'Look at the well in the center square.' Thomas points to a stone structure that seems to be the town's heart. 'It's covered over. That's not normal for a desert town. Either the water's gone bad, or they're afraid of something contaminating it.'",
            next: "elijah_spiritual_observation"
        },

        // Scene 5: Elijah's Spiritual Observation
        elijah_spiritual_observation: {
            speaker: "Elijah Cross",
            text: "'There's no church bell ringing for midday prayers.' Elijah's voice is troubled. 'In a frontier town, the church is usually the strongest building, the heart of the community. I don't even see a steeple.'",
            choices: [
                {
                    text: "Ask about the missing church",
                    next: "church_discussion"
                },
                {
                    text: "Focus on immediate practical concerns",
                    next: "practical_concerns"
                },
                {
                    text: "Continue observing the town",
                    next: "driver_breaks_silence"
                }
            ]
        },

        // Scene 6: Church Discussion
        church_discussion: {
            speaker: "Stagecoach Driver",
            text: "'Burned down three months ago,' the driver calls down, overhearing. 'Lightning strike, they said. But folks whispered it was deliberate. Preacher left town the next day and never came back.'",
            next: "driver_breaks_silence"
        },

        // Scene 7: Practical Concerns
        practical_concerns: {
            speaker: "Maria Vasquez",
            text: "'Church or no church, we need shelter, supplies, and information. A town this scared will have loose tongues in the right places. Usually the saloon.'",
            next: "driver_breaks_silence"
        },

        // Scene 8: Driver Breaks His Silence
        driver_breaks_silence: {
            speaker: "Stagecoach Driver",
            text: "'This is as far as I go, folks.' The driver's voice is apologetic but firm. 'Company orders. I drop passengers at the edge of town and turn around. Won't even water the horses here anymore.'",
            next: "coach_stops"
        },

        // Scene 9: Coach Stops at Town's Edge
        coach_stops: {
            speaker: "Narrator",
            text: "The stagecoach rolls to a stop at a weathered wooden sign: 'PERDITION - EST. 1887 - POPULATION 347.' Someone has scratched out the population number and written '?' in its place. The amendment looks recent.",
            next: "gathering_belongings"
        },

        // Scene 10: Gathering Belongings
        gathering_belongings: {
            speaker: "Narrator",
            text: "The four companions gather their meager belongings and step down onto the dusty ground. The heat hits them immediately, but it's more than just desert sun—there's an oppressive weight to the air, as if the very atmosphere bears some unseen burden.",
            next: "driver_urgent_departure"
        },

        // Scene 11: Driver's Urgent Departure
        driver_urgent_departure: {
            speaker: "Stagecoach Driver",
            text: "'God go with you, folks.' The driver tips his hat nervously. 'And if you take my advice, you won't stay long. This place... it ain't natural anymore.' Without waiting for a response, he cracks his whip and turns the coach around.",
            next: "watching_coach_leave"
        },

        // Scene 12: Watching the Coach Leave
        watching_coach_leave: {
            speaker: "Narrator",
            text: "They watch the stagecoach disappear in a cloud of dust, taking with it their last connection to the outside world. Now they truly stand alone at the threshold of Perdition, four souls against whatever darkness awaits within.",
            next: "first_steps_into_town"
        },

        // Scene 13: First Steps Into Town
        first_steps_into_town: {
            speaker: "Narrator",
            text: "Their boots crunch on the hard-packed earth as they walk down what was once Perdition's main street. Buildings loom on either side—some occupied and showing signs of life, others clearly abandoned with boarded windows and doors hanging askew.",
            next: "eyes_watching"
        },

        // Scene 14: Eyes Watching from Shadows
        eyes_watching: {
            speaker: "Maria Vasquez",
            text: "'We're being watched.' Maria's hand hovers near her gun. 'Windows, doorways, alley mouths. Count at least six different positions. They're cautious but curious.'",
            next: "jacob_nervous_energy"
        },

        // Scene 15: Jacob's Nervous Energy
        jacob_nervous_energy: {
            speaker: "Jacob Rivers",
            text: "'Should we... announce ourselves? Call out?' Jacob's voice is uncertain. 'Seems wrong to just walk into someone's town without greeting. But then again, nobody's come out to greet us either.'",
            next: "elijah_leadership_moment"
        },

        // Scene 16: Elijah's Leadership Moment
        elijah_leadership_moment: {
            speaker: "Elijah Cross",
            text: "'We walk with purpose but not aggression. We're travelers seeking shelter and honest work, nothing more. Let them see we're not here to cause trouble.' His voice carries quiet authority.",
            next: "approaching_town_center"
        },

        // Scene 17: Approaching Town Center
        approaching_town_center: {
            speaker: "Narrator",
            text: "They approach what appears to be the town center—a small square dominated by the covered well Thomas had noticed. Around it, several buildings show signs of activity: a general store, a saloon called 'The Last Chance,' and what might be a sheriff's office.",
            next: "sheriff_office_observation"
        },

        // Scene 18: Sheriff's Office Observation
        sheriff_office_observation: {
            speaker: "Thomas Whitmore",
            text: "'There's the sheriff's office.' Thomas nods toward a building with a hanging sign and barred windows. 'Door's standing open, but I don't see anyone moving inside. After what that rider told us...'",
            next: "saloon_activity"
        },

        // Scene 19: Saloon Shows Life
        saloon_activity: {
            speaker: "Narrator",
            text: "The Last Chance Saloon shows the most signs of life—horses tied outside, the sound of voices from within, and the tinkling of an out-of-tune piano. It seems to be the beating heart of what's left of Perdition's community.",
            next: "first_townsperson_encounter"
        },

        // Scene 20: First Townsperson Encounter
        first_townsperson_encounter: {
            speaker: "Elderly Townsman",
            text: "An elderly man emerges from the general store, stops short when he sees them, and stares with a mixture of surprise and suspicion. 'Strangers.' His voice is gravelly with age and caution. 'Don't see many new faces these days. You folks lost?'",
            choices: [
                {
                    text: "Elijah responds diplomatically",
                    next: "elijah_diplomatic_introduction"
                },
                {
                    text: "Ask about lodging directly",
                    next: "direct_lodging_question"
                },
                {
                    text: "Inquire about the town's situation",
                    next: "town_situation_inquiry"
                }
            ]
        },

        // Scene 21: Elijah's Diplomatic Introduction
        elijah_diplomatic_introduction: {
            speaker: "Elijah Cross",
            text: "'Not lost, friend. We're travelers seeking an honest place to settle and work. I'm Elijah Cross, and these are my companions. We heard Perdition might have opportunities for folks willing to work hard.'",
            next: "old_man_skeptical_response"
        },

        // Scene 22: Direct Lodging Question
        direct_lodging_question: {
            speaker: "Maria Vasquez",
            text: "'We need rooms and supplies. Is there a boarding house or inn?' Maria's approach is straightforward and practical. 'We can pay fair rates and we don't cause trouble.'",
            next: "old_man_skeptical_response"
        },

        // Scene 23: Town Situation Inquiry
        town_situation_inquiry: {
            speaker: "Thomas Whitmore",
            text: "'We heard on the road that Perdition has been facing some difficulties. As travelers, we're wondering what we might be walking into.' Thomas's tone is polite but direct.",
            next: "old_man_skeptical_response"
        },

        // Scene 24: Old Man's Skeptical Response
        old_man_skeptical_response: {
            speaker: "Elderly Townsman",
            text: "'Work?' The old man's laugh is bitter. 'Mister, half the businesses in this town are boarded up. The mine's played out, the cattle are dying, and we just lost our sheriff to a bullet in the back. What kind of work you think there is?'",
            next: "learning_about_sheriff"
        },

        // Scene 25: Learning About the Sheriff
        learning_about_sheriff: {
            speaker: "Jacob Rivers",
            text: "'The sheriff... we heard about that at Miller's Rest. I'm sorry for your loss. Was he... was he a good man?' Jacob's youth makes the question sound genuine rather than prying.",
            next: "sheriff_backstory"
        },

        // Scene 26: Sheriff's Backstory
        sheriff_backstory: {
            speaker: "Elderly Townsman",
            text: "'Tom Bradley? Best sheriff this town ever had. Honest as the day is long, fair to everyone. That's probably what got him killed.' The old man's voice grows dark. 'When honest men start dying, you know a place has gone to hell.'",
            next: "asking_about_lodging"
        },

        // Scene 27: Asking About Lodging
        asking_about_lodging: {
            speaker: "Elijah Cross",
            text: "'Despite the troubles, we still need a place to stay tonight. Is there anywhere in town that takes travelers?' Elijah's tone is respectful but determined.",
            next: "lodging_options"
        },

        // Scene 28: Lodging Options
        lodging_options: {
            speaker: "Elderly Townsman",
            text: "'Mrs. Henderson runs a boarding house two blocks down. Clean beds, fair prices. But...' He hesitates. 'She's particular about her guests. And with everything that's been happening, she might not be taking strangers.'",
            next: "alternative_accommodations"
        },

        // Scene 29: Alternative Accommodations
        alternative_accommodations: {
            speaker: "Elderly Townsman",
            text: "'The saloon's got rooms upstairs, but they're... well, they're saloon rooms. Not fit for decent folks. 'Course, depending on what kind of travelers you are, might suit you just fine.' His eyes study them carefully.",
            next: "choosing_approach"
        },

        // Scene 30: Choosing Their Approach
        choosing_approach: {
            speaker: "Thomas Whitmore",
            text: "'We'll try the boarding house first. If Mrs. Henderson won't have us, we'll make do elsewhere. Thank you for the information, Mr...?' Thomas extends his hand politely.",
            next: "old_man_introduction"
        },

        // Scene 31: Old Man's Introduction
        old_man_introduction: {
            speaker: "Elderly Townsman",
            text: "'Jeremiah Colt. I run what's left of the general store.' He shakes Thomas's hand cautiously. 'Word of advice? Watch yourselves. This town's got more secrets than honest folk, and they don't all appreciate newcomers asking questions.'",
            next: "getting_directions"
        },

        // Scene 32: Getting Directions
        getting_directions: {
            speaker: "Jeremiah Colt",
            text: "'Mrs. Henderson's place is the white house with green shutters on Maple Street. Can't miss it—it's the only building on that block that still looks cared for. Tell her Jeremiah sent you. Might help.'",
            next: "walking_to_boarding_house"
        },

        // Scene 33: Walking to Boarding House
        walking_to_boarding_house: {
            speaker: "Narrator",
            text: "They walk deeper into Perdition, their footsteps echoing off empty buildings. The town feels like a graveyard of dreams—storefronts with faded signs, houses with broken windows, and everywhere the sense of something once hopeful now gone wrong.",
            next: "observing_decay"
        },

        // Scene 34: Observing the Decay
        observing_decay: {
            speaker: "Maria Vasquez",
            text: "'This place died slow.' Maria's voice is matter-of-fact. 'See how some buildings are maintained while others are abandoned? People left in waves, not all at once. Something drove them out gradually.'",
            next: "finding_boarding_house"
        },

        // Scene 35: Finding the Boarding House
        finding_boarding_house: {
            speaker: "Narrator",
            text: "Henderson's Boarding House stands like an oasis of care in a desert of neglect. The white paint is fresh, the green shutters straight, and flowers bloom in carefully tended boxes. It's a defiant statement of normalcy in an abnormal place.",
            next: "approaching_front_door"
        },

        // Scene 36: Approaching the Front Door
        approaching_front_door: {
            speaker: "Jacob Rivers",
            text: "'Should we all go up together, or should one of us speak for the group?' Jacob's consideration shows his growing maturity. 'Might be less intimidating if just one person asks about rooms.'",
            next: "group_decision"
        },

        // Scene 37: Group Decision
        group_decision: {
            speaker: "Elijah Cross",
            text: "'We stay together. We're not trying to deceive anyone about who we are or how many we are. Honesty from the start.' He steps up to the door and knocks with quiet authority.",
            next: "mrs_henderson_appears"
        },

        // Scene 38: Mrs. Henderson Appears
        mrs_henderson_appears: {
            speaker: "Mrs. Henderson",
            text: "The door opens to reveal a stern-faced woman in her fifties, with graying hair pulled back severely and sharp eyes that miss nothing. 'Yes?' Her tone is polite but cautious. 'I don't recognize you folks.'",
            next: "elijah_introduction"
        },

        // Scene 39: Elijah's Introduction
        elijah_introduction: {
            speaker: "Elijah Cross",
            text: "'Mrs. Henderson? I'm Elijah Cross, and these are my traveling companions. We're looking for lodging for a few nights while we get our bearings in town. Jeremiah Colt at the general store recommended your establishment.'",
            next: "mrs_henderson_assessment"
        },

        // Scene 40: Mrs. Henderson's Assessment
        mrs_henderson_assessment: {
            speaker: "Mrs. Henderson",
            text: "Her eyes study each of them in turn—Elijah's clerical collar, Maria's practical clothes and visible gun, Thomas's worn but quality clothing, Jacob's earnest young face. 'Jeremiah sent you?' She seems to be weighing something in her mind.",
            next: "questioning_their_purpose"
        },

        // Scene 41: Questioning Their Purpose
        questioning_their_purpose: {
            speaker: "Mrs. Henderson",
            text: "'What brings four armed strangers to Perdition? This isn't exactly a destination town these days. Most folks are trying to leave, not arrive.' Her tone isn't hostile, just curious and careful.",
            choices: [
                {
                    text: "Explain they're seeking a fresh start",
                    next: "fresh_start_explanation"
                },
                {
                    text: "Mention they heard the town needed help",
                    next: "helping_town_explanation"
                },
                {
                    text: "Be vague about their reasons",
                    next: "vague_explanation"
                }
            ]
        },

        // Scene 42: Fresh Start Explanation
        fresh_start_explanation: {
            speaker: "Elijah Cross",
            text: "'We're all seeking fresh starts, Mrs. Henderson. The West has always been a place where people can leave their past behind and build something better. We heard Perdition might have opportunities for folks willing to work.'",
            next: "mrs_henderson_response"
        },

        // Scene 43: Helping Town Explanation
        helping_town_explanation: {
            speaker: "Thomas Whitmore",
            text: "'Frankly, ma'am, we heard the town was struggling and thought our various skills might be useful. I'm a physician, and it seems a town in difficulty could use medical services.'",
            next: "mrs_henderson_response"
        },

        // Scene 44: Vague Explanation
        vague_explanation: {
            speaker: "Maria Vasquez",
            text: "'People travel for many reasons, señora. Ours are our own. We pay our way, mind our business, and don't cause trouble. That should be enough for anyone.'",
            next: "mrs_henderson_response"
        },

        // Scene 45: Mrs. Henderson's Response
        mrs_henderson_response: {
            speaker: "Mrs. Henderson",
            text: "'A physician?' Her stern expression softens slightly. 'Lord knows we need one. Dr. Morrison left town three weeks ago—packed up and ran like the devil was chasing him. Said this place was cursed.' She steps back from the door.",
            next: "invitation_inside"
        },

        // Scene 46: Invitation Inside
        invitation_inside: {
            speaker: "Mrs. Henderson",
            text: "'Come in, then. I've got four rooms available—haven't had guests in two weeks. Dollar a night, meals extra. House rules are simple: no drinking in the rooms, no loud noise after ten, and no bringing trouble to my door.'",
            next: "entering_boarding_house"
        },

        // Scene 47: Entering the Boarding House
        entering_boarding_house: {
            speaker: "Narrator",
            text: "The interior of the boarding house is as meticulously maintained as the exterior. Clean wooden floors, fresh curtains, and the smell of soap and cooking food. It's a haven of civilization in an increasingly uncivilized place.",
            next: "settling_arrangements"
        },

        // Scene 48: Settling Arrangements
        settling_arrangements: {
            speaker: "Mrs. Henderson",
            text: "'Rooms are upstairs—two and three on the left, four and five on the right. Supper's at six sharp. And if you're truly a doctor, Dr. Whitmore, there's folks in this town who could use your help. Starting with old Pete's widow—she's been poorly since he died.'",
            next: "accepting_responsibility"
        },

        // Scene 49: Accepting Responsibility
        accepting_responsibility: {
            speaker: "Thomas Whitmore",
            text: "'I'd be honored to help, Mrs. Henderson. It's been... too long since I practiced proper medicine. Perhaps it's time to remember what it means to heal rather than harm.' His hands are steady as he accepts the room key.",
            next: "chapter_conclusion"
        },

        // Scene 50: Chapter Conclusion
        chapter_conclusion: {
            speaker: "Narrator",
            text: "As the four companions settle into their rooms at Henderson's Boarding House, they've taken their first steps into Perdition's troubled heart. Outside, the town holds its secrets close, but inside these walls, they've found temporary sanctuary. Tomorrow will bring new challenges, but tonight they rest as guests in a place desperate for the help they might provide.",
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