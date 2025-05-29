// Chapter 2: The Way Station (Linear Version)
storyData.chapter2 = {
    name: "Chapter 2",
    title: "The Way Station",
    scenes: {
        // Scene 1: Approaching the Way Station
        start: {
            speaker: "Narrator",
            text: "The sun climbs higher as the stagecoach rolls across the desert landscape. Elijah's bandaged arm throbs with each jolt, but the pain is manageable. The four passengers sit in a different silence now—not the awkward quiet of strangers, but the contemplative hush of people who have shared blood and survived together.",
            next: "driver_announces_station"
        },

        // Scene 2: Driver Announces the Station
        driver_announces_station: {
            speaker: "Stagecoach Driver",
            text: "'Way station ahead!' the driver calls down. 'Miller's Rest! We'll stop for water, supplies, and to tend that wound proper-like!' His voice carries relief—he's as shaken by the bandit attack as anyone.",
            next: "first_glimpse_station"
        },

        // Scene 3: First Glimpse of Miller's Rest
        first_glimpse_station: {
            speaker: "Narrator",
            text: "Miller's Rest appears on the horizon like a mirage—a cluster of adobe buildings around a well, with corrals for horses and a small general store. Smoke rises from a chimney, promising hot food and civilization's comforts, however modest.",
            next: "maria_assessment"
        },

        // Scene 4: Maria's Tactical Assessment
        maria_assessment: {
            speaker: "Maria Vasquez",
            text: "'Good defensive position.' Maria's eyes scan the approaching buildings with professional interest. 'Built against those rocks for protection from wind and raiders. Whoever runs this place knows the frontier.'",
            next: "thomas_medical_concern"
        },

        // Scene 5: Thomas's Medical Concerns
        thomas_medical_concern: {
            speaker: "Thomas Whitmore",
            text: "'That wound needs proper cleaning and fresh bandages, Elijah.' Thomas's voice is steadier than it was yesterday. 'Desert air may be dry, but infection is still a threat. We should see if they have any medical supplies.'",
            next: "jacob_nervous_observation"
        },

        // Scene 6: Jacob's Nervous Observation
        jacob_nervous_observation: {
            speaker: "Jacob Rivers",
            text: "'Looks peaceful enough,' Jacob says, though his hand unconsciously checks his pistol. 'After yesterday... well, I reckon I'll be checking shadows for a while.'",
            choices: [
                {
                    text: "Elijah reassures Jacob about his caution",
                    next: "elijah_reassures_jacob"
                },
                {
                    text: "Maria comments on staying alert",
                    next: "maria_on_vigilance"
                },
                {
                    text: "Focus on approaching the station",
                    next: "coach_pulls_up"
                }
            ]
        },

        // Scene 7: Elijah Reassures Jacob
        elijah_reassures_jacob: {
            speaker: "Elijah Cross",
            text: "'That caution might save your life someday, son. The frontier teaches hard lessons, but surviving them makes you wiser.' Elijah's tone is gentle but approving. 'Trust your instincts, but don't let fear rule you.'",
            next: "coach_pulls_up"
        },

        // Scene 8: Maria on Vigilance
        maria_on_vigilance: {
            speaker: "Maria Vasquez",
            text: "'Good. Stay alert.' Maria nods approvingly. 'The boy who saved my life yesterday is learning to think like a survivor. That's more valuable than all the fast-draw practice in the world.'",
            next: "coach_pulls_up"
        },

        // Scene 9: Coach Pulls Up to the Station
        coach_pulls_up: {
            speaker: "Narrator",
            text: "The stagecoach rolls to a stop beside the main building, wheels crunching on gravel. A wooden sign reads 'Miller's Rest - Est. 1885 - Cold Water, Hot Food, Fair Prices.' The promise of civilization feels like a blessing after the violence of yesterday.",
            next: "station_keeper_emerges"
        },

        // Scene 10: Station Keeper Emerges
        station_keeper_emerges: {
            speaker: "Station Keeper Miller",
            text: "'Welcome to Miller's Rest!' A portly man with graying hair and kind eyes emerges from the main building. 'I'm Sam Miller. You folks look like you've had a hard journey. Come in, come in! We'll get you fed and rested.'",
            next: "driver_explains_attack"
        },

        // Scene 11: Driver Explains the Attack
        driver_explains_attack: {
            speaker: "Stagecoach Driver",
            text: "'Bandits hit us yesterday, Sam. Six men led by that devil Valdez.' The driver's voice shakes slightly at the memory. 'These folks here fought them off, but the preacher took a bullet in the arm.'",
            next: "miller_reaction"
        },

        // Scene 12: Miller's Reaction
        miller_reaction: {
            speaker: "Station Keeper Miller",
            text: "'Valdez?' Miller's face darkens. 'That murdering snake hit the Peterson ranch last month. Killed old Pete and burned his house.' He looks at the four passengers with new respect. 'You fought off his whole gang and lived to tell it?'",
            next: "disembarking"
        },

        // Scene 13: Disembarking from the Coach
        disembarking: {
            speaker: "Narrator",
            text: "The four companions climb down from the coach, their legs stiff from the long ride. The desert heat hits them immediately, but the promise of shade and water draws them toward the main building. They move together now, a unit forged by shared trial.",
            next: "miller_observes_group"
        },

        // Scene 14: Miller Observes the Group
        miller_observes_group: {
            speaker: "Station Keeper Miller",
            text: "'You four stick together like family, but I can tell you're strangers.' Miller's eyes are shrewd but kind. 'Funny how the frontier can forge bonds faster than years of peaceful living. Come on, let's get that arm looked at.'",
            next: "entering_station"
        },

        // Scene 15: Entering the Station
        entering_station: {
            speaker: "Narrator",
            text: "The inside of Miller's Rest is simple but welcoming. Rough wooden tables, a stone fireplace, shelves lined with supplies. The smell of coffee and beans fills the air. After the harsh desert and yesterday's violence, it feels like sanctuary.",
            next: "other_travelers_present"
        },

        // Scene 16: Other Travelers Present
        other_travelers_present: {
            speaker: "Narrator",
            text: "Three other travelers sit at a corner table—a well-dressed businessman, an elderly woman in widow's weeds, and a young cowboy who can't be much older than Jacob. They look up with curious eyes as the newcomers enter.",
            next: "businessman_speaks"
        },

        // Scene 17: Businessman Speaks Up
        businessman_speaks: {
            speaker: "Businessman",
            text: "'Excuse me, friends.' The businessman rises politely. 'Harold Jenkins, traveling merchant. Word is you folks tangled with Valdez's gang. Might I ask... how did you fare?'",
            choices: [
                {
                    text: "Elijah answers diplomatically",
                    next: "elijah_diplomatic_response"
                },
                {
                    text: "Maria responds bluntly",
                    next: "maria_blunt_response"
                },
                {
                    text: "Let someone else answer",
                    next: "thomas_measured_response"
                }
            ]
        },

        // Scene 18: Elijah's Diplomatic Response
        elijah_diplomatic_response: {
            speaker: "Elijah Cross",
            text: "'We were fortunate, Mr. Jenkins. The Lord saw fit to preserve us, though not without cost.' Elijah indicates his bandaged arm. 'Valdez won't be troubling anyone again, but his men scattered to the winds.'",
            next: "jenkins_relief"
        },

        // Scene 19: Maria's Blunt Response
        maria_blunt_response: {
            speaker: "Maria Vasquez",
            text: "'Valdez is dead. Three of his men too. The rest ran like the cowards they are.' Maria's voice is matter-of-fact. 'If you're traveling these roads, you'd best go armed and ready.'",
            next: "jenkins_relief"
        },

        // Scene 20: Thomas's Measured Response
        thomas_measured_response: {
            speaker: "Thomas Whitmore",
            text: "'The encounter was... educational.' Thomas's dry humor surfaces. 'I learned that medical training includes steady hands under fire. Not something they taught at Philadelphia General.'",
            next: "jenkins_relief"
        },

        // Scene 21: Jenkins Shows Relief
        jenkins_relief: {
            speaker: "Businessman",
            text: "'Thank Providence! I've been dreading that stretch of road for weeks. Valdez has been the scourge of honest travelers.' He extends his hand. 'Allow me to buy your meal, friends. It's the least I can do.'",
            next: "widow_speaks_up"
        },

        // Scene 22: The Widow Speaks
        widow_speaks_up: {
            speaker: "Widow Morrison",
            text: "'Agnes Morrison,' the elderly woman introduces herself. 'I'm traveling to my sister's in California. This old heart has been fearful of the journey, but if you brave souls defeated those villains...' She dabs her eyes with a handkerchief.",
            next: "young_cowboy_interested"
        },

        // Scene 23: Young Cowboy Shows Interest
        young_cowboy_interested: {
            speaker: "Young Cowboy",
            text: "'Name's Billy.' The young cowboy looks at Jacob with interest. 'You don't look much older than me. Did you really fight bandits?' There's admiration and envy in his voice.",
            next: "jacob_responds_to_billy"
        },

        // Scene 24: Jacob Responds to Billy
        jacob_responds_to_billy: {
            speaker: "Jacob Rivers",
            text: "'I... I tried to help.' Jacob's modesty is genuine. 'Mostly I just watched these three save all our lives. But I learned something about courage yesterday. It's not about not being scared—it's about doing what's right anyway.'",
            next: "miller_medical_attention"
        },

        // Scene 25: Miller Offers Medical Attention
        miller_medical_attention: {
            speaker: "Station Keeper Miller",
            text: "'Now then, let's see about that arm.' Miller gestures toward a back room. 'My Mary was a nurse before we came west. She'll have you fixed up proper. The rest of you, sit and rest. Food'll be ready shortly.'",
            next: "group_settles_in"
        },

        // Scene 26: Group Settles In
        group_settles_in: {
            speaker: "Narrator",
            text: "As Thomas accompanies Elijah to have his wound tended, Maria and Jacob settle at a table. The atmosphere is relaxed but watchful—yesterday's violence has taught them all to stay alert even in peaceful moments.",
            next: "maria_jacob_conversation"
        },

        // Scene 27: Maria and Jacob's Conversation
        maria_jacob_conversation: {
            speaker: "Maria Vasquez",
            text: "'You did well yesterday, boy.' Maria's voice is quiet but sincere. 'That warning you gave me—it saved my life. In my experience, that makes you family. You understand?'",
            next: "jacob_touched_response"
        },

        // Scene 28: Jacob's Touched Response
        jacob_touched_response: {
            speaker: "Jacob Rivers",
            text: "'Family?' Jacob's voice catches slightly. 'I... thank you, Maria. I never had anyone say that about something I did. My brothers always said I was too soft, too weak for this country.'",
            next: "maria_wisdom"
        },

        // Scene 29: Maria's Wisdom
        maria_wisdom: {
            speaker: "Maria Vasquez",
            text: "'Your brothers were fools. Soft? You kept your eyes open when bullets were flying. Weak? You warned me when a killer was about to put a bullet in my back. That's not weakness—that's strength.'",
            next: "elijah_returns_bandaged"
        },

        // Scene 30: Elijah Returns, Properly Bandaged
        elijah_returns_bandaged: {
            speaker: "Narrator",
            text: "Elijah returns with his arm properly cleaned and rebandaged, followed by Thomas and a motherly woman who must be Mary Miller. Elijah moves more easily now, the professional medical attention having eased his pain considerably.",
            next: "mary_miller_introduction"
        },

        // Scene 31: Mary Miller's Introduction
        mary_miller_introduction: {
            speaker: "Mary Miller",
            text: "'Clean wound, should heal fine if kept dry.' Mary Miller wipes her hands on her apron. 'Dr. Whitmore here has good hands. Been a while since I met a real physician out here. Most frontier doctors are just cowboys with a few bottles of whiskey.'",
            next: "thomas_appreciates_compliment"
        },

        // Scene 32: Thomas Appreciates the Compliment
        thomas_appreciates_compliment: {
            speaker: "Thomas Whitmore",
            text: "'Kind of you to say, Mrs. Miller. It's been... some time since I practiced proper medicine. This morning reminded me why I became a doctor in the first place.' His hands are steady as he accepts a cup of coffee.",
            next: "meal_preparation"
        },

        // Scene 33: Meal Preparation
        meal_preparation: {
            speaker: "Narrator",
            text: "Mary bustles about preparing a hearty meal of beans, bacon, and fresh bread. The simple food smells like heaven after yesterday's trail rations and violence. The other travelers join them at the large common table, creating an impromptu gathering.",
            next: "jenkins_shares_news"
        },

        // Scene 34: Jenkins Shares News from the Road
        jenkins_shares_news: {
            speaker: "Businessman",
            text: "'I've been traveling these territories for months.' Jenkins cuts his bread carefully. 'Valdez wasn't the only problem. Heard tell of strange happenings around Perdition itself. People leaving, businesses closing. Some say the town's dying.'",
            choices: [
                {
                    text: "Ask about the strange happenings",
                    next: "strange_happenings_detail"
                },
                {
                    text: "Inquire about why people are leaving",
                    next: "exodus_reasons"
                },
                {
                    text: "Focus on practical concerns about the town",
                    next: "practical_town_concerns"
                }
            ]
        },

        // Scene 35: Strange Happenings Detail
        strange_happenings_detail: {
            speaker: "Businessman",
            text: "'Hard to say what's truth and what's trail gossip.' Jenkins lowers his voice. 'But I heard from three different sources about livestock found dead with no wounds, wells going bad overnight, and folks claiming they hear voices on the wind. Superstitious nonsense, most likely.'",
            next: "widow_adds_information"
        },

        // Scene 36: Exodus Reasons
        exodus_reasons: {
            speaker: "Businessman",
            text: "'Economic troubles, mostly. Mine played out, cattle rustling increased, and the railroad changed its route. But some folks... they seemed spooked. Left everything behind like they were running from something more than hard times.'",
            next: "widow_adds_information"
        },

        // Scene 37: Practical Town Concerns
        practical_town_concerns: {
            speaker: "Businessman",
            text: "'From a practical standpoint, it's not promising. Half the businesses shuttered, sheriff's position vacant more often than not, and the local saloon is about the only thriving enterprise. Not exactly a destination for respectable folks.'",
            next: "widow_adds_information"
        },

        // Scene 38: Widow Adds Information
        widow_adds_information: {
            speaker: "Widow Morrison",
            text: "'My dear departed husband passed through Perdition five years ago.' The widow's voice is soft but clear. 'He said it was a town with shadows in its corners. Poor man took sick right after and never quite recovered. Course, that might've been coincidence.'",
            next: "billy_cowboy_perspective"
        },

        // Scene 39: Billy's Cowboy Perspective
        billy_cowboy_perspective: {
            speaker: "Young Cowboy",
            text: "'My trail boss won't take cattle through Perdition anymore.' Billy speaks up. 'Says the stock gets spooked something fierce. Horses won't drink from certain wells, cattle won't graze certain areas. Animals know things people don't.'",
            next: "group_processes_information"
        },

        // Scene 40: Group Processes Information
        group_processes_information: {
            speaker: "Narrator",
            text: "The four companions exchange meaningful glances. They came to Perdition seeking new starts, but the picture painted by fellow travelers suggests they might be heading toward more trouble than opportunity. Yet none speaks of turning back.",
            next: "elijah_philosophical_moment"
        },

        // Scene 41: Elijah's Philosophical Moment
        elijah_philosophical_moment: {
            speaker: "Elijah Cross",
            text: "'Sometimes the places that need help most are the places decent folks avoid.' Elijah's voice carries quiet conviction. 'If Perdition is truly troubled, perhaps that's exactly where we're meant to be.'",
            next: "maria_pragmatic_response"
        },

        // Scene 42: Maria's Pragmatic Response
        maria_pragmatic_response: {
            speaker: "Maria Vasquez",
            text: "'Troubled towns mean desperate people. Desperate people do desperate things.' Maria's tone is matter-of-fact. 'But we've proven we can handle ourselves. And sometimes opportunity hides in places others fear to go.'",
            next: "thomas_medical_perspective"
        },

        // Scene 43: Thomas's Medical Perspective
        thomas_medical_perspective: {
            speaker: "Thomas Whitmore",
            text: "'A town without proper medical care...' Thomas muses. 'There might be real purpose in that. People need healing, whether from bullets, disease, or whatever troubles they face. Perhaps this old drunk might finally be useful again.'",
            next: "jacob_brave_decision"
        },

        // Scene 44: Jacob's Brave Decision
        jacob_brave_decision: {
            speaker: "Jacob Rivers",
            text: "'I came west to become my own man.' Jacob's voice grows stronger. 'Running from the first sign of trouble would make me everything my brothers said I was. If you three are willing to face whatever's in Perdition, so am I.'",
            next: "meal_conclusion"
        },

        // Scene 45: Meal Conclusion
        meal_conclusion: {
            speaker: "Narrator",
            text: "The meal concludes with the four travelers more unified than before. The warnings about Perdition have not deterred them—if anything, they've strengthened their resolve. They've already faced death together; they can face uncertainty together too.",
            next: "mysterious_rider_arrives"
        },

        // Scene 46: Mysterious Rider Arrives
        mysterious_rider_arrives: {
            speaker: "Station Keeper Miller",
            text: "'Rider coming in fast!' Miller calls from the window. Through the glass, they can see a lone horseman approaching at a gallop, dust streaming behind him. 'Looks like he's been riding hard for miles.'",
            next: "rider_brings_news"
        },

        // Scene 47: Rider Brings Urgent News
        rider_brings_news: {
            speaker: "Urgent Rider",
            text: "The rider bursts through the door, sweat-stained and breathless. 'Perdition!' he gasps. 'Sheriff's been found dead! Murdered in his own office! Town's in chaos—folks are talking about abandoning the place entirely!'",
            next: "shocking_revelation"
        },

        // Scene 48: Shocking Revelation Impact
        shocking_revelation: {
            speaker: "Narrator",
            text: "The news hits the common room like a thunderclap. The other travelers look stricken, but the four companions exchange grim looks of determination. If anything, this news confirms they're heading where they're needed most.",
            next: "final_resolution"
        },

        // Scene 49: Final Resolution
        final_resolution: {
            speaker: "Elijah Cross",
            text: "'Then we'd better get moving.' Elijah stands, testing his bandaged arm. 'A town without law needs people willing to stand for what's right. Whatever we're riding into, we'll face it together.'",
            next: "chapter_end"
        },

        // Scene 50: Chapter End
        chapter_end: {
            speaker: "Narrator",
            text: "As the stagecoach prepares to depart Miller's Rest, the four companions board with new purpose. Behind them lies the safety of civilization; ahead waits Perdition and its deadly mysteries. But they are no longer strangers—they are a family forged by fire, ready to face whatever darkness awaits.",
            choices: [
                {
                    text: "Continue to Chapter 3",
                    next: null,
                    nextChapter: "chapter3"
                }
            ]
        }
    }
};