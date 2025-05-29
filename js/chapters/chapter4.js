// Chapter 4: First Dawn in Perdition (Linear Version)
storyData.chapter4 = {
    name: "Chapter 4",
    title: "First Dawn in Perdition",
    scenes: {
        // Scene 1: Dawn at Henderson's Boarding House
        start: {
            speaker: "Narrator",
            text: "Dawn breaks over Perdition with reluctant light, casting long shadows through the boarding house windows. The four companions wake to their first morning in the troubled town, each carrying the weight of yesterday's discoveries and the uncertainty of what lies ahead.",
            next: "morning_awakening"
        },

        // Scene 2: Morning Awakening
        morning_awakening: {
            speaker: "Narrator",
            text: "The smell of coffee and bacon drifts up from the kitchen below, a comforting reminder of civilization. Through the thin walls, you can hear the others stirring—the creak of floorboards, the splash of water in washbasins, the quiet preparation for a new day.",
            next: "heading_downstairs"
        },

        // Scene 3: Heading Downstairs
        heading_downstairs: {
            speaker: "Narrator",
            text: "You dress and make your way downstairs, where Mrs. Henderson works efficiently at the stove. 'Good morning,' she says without turning around. 'I trust you slept well? Breakfast will be ready shortly.'",
            next: "companions_gather"
        },

        // Scene 4: Companions Gather
        companions_gather: {
            speaker: "Narrator",
            text: "One by one, your companions join you in the kitchen. Elijah appears first, his clerical collar straightened and his expression thoughtful. Maria follows, already dressed and armed, her eyes scanning the room out of habit. Jacob comes down last, looking young but determined.",
            next: "mrs_henderson_revelation"
        },

        // Scene 5: Mrs. Henderson's Revelation
        mrs_henderson_revelation: {
            speaker: "Mrs. Henderson",
            text: "'Before you ask, yes, I heard you folks talking last night. These walls aren't that thick.' She sets plates of bacon and eggs before you. 'And if you're truly planning to help this town, you should know what you're up against.'",
            next: "town_troubles_revealed"
        },

        // Scene 6: Town Troubles Revealed
        town_troubles_revealed: {
            speaker: "Mrs. Henderson",
            text: "'The troubles started about two years ago. First the mine production dropped, then the cattle started dying mysteriously. People began leaving, businesses closed. Sheriff Bradley tried to hold things together, but someone didn't want law and order in Perdition.'",
            choices: [
                {
                    text: "Ask who would want to destroy the town",
                    next: "asking_about_enemy"
                },
                {
                    text: "Listen quietly to learn more",
                    next: "listening_to_details"
                }
            ]
        },

        // Scene 7a: Asking About Enemy
        asking_about_enemy: {
            speaker: "Elijah Cross",
            text: "'Who would benefit from Perdition's destruction? Someone must be profiting from all this misery.'",
            next: "enemy_revealed"
        },

        // Scene 7b: Listening to Details
        listening_to_details: {
            speaker: "Narrator",
            text: "You listen intently as Mrs. Henderson continues, her voice growing darker with each revelation about the town's systematic destruction.",
            next: "enemy_revealed"
        },

        // Scene 8: Enemy Revealed
        enemy_revealed: {
            speaker: "Mrs. Henderson",
            text: "'There's a man named Silas Cross. Represents some mining consortium from back east. Been buying up properties, water rights, anything of value. Those who won't sell...' She doesn't finish the sentence, but her meaning is clear.",
            next: "thomas_medical_concerns"
        },

        // Scene 9: Thomas's Medical Concerns
        thomas_medical_concerns: {
            speaker: "Thomas Whitmore",
            text: "'Mrs. Henderson, you mentioned people needing medical attention. I'd like to start helping as soon as possible. Are there specific cases I should know about?'",
            next: "medical_mysteries"
        },

        // Scene 10: Medical Mysteries
        medical_mysteries: {
            speaker: "Mrs. Henderson",
            text: "'Pete's widow Martha has been poorly since he passed. Young Billy at the livery hurt his leg and it's not healing right. But there's something else—mysterious illnesses that Dr. Morrison couldn't treat. Three people died from something that made them fear water.'",
            next: "planning_the_day"
        },

        // Scene 11: Planning the Day
        planning_the_day: {
            speaker: "Maria Vasquez",
            text: "'We need information. The sheriff's office, the general store, the church ruins—they all might tell us something about this Silas Cross and what he's really doing here.'",
            next: "departure_preparation"
        },

        // Scene 12: Departure Preparation
        departure_preparation: {
            speaker: "Mrs. Henderson",
            text: "'Whatever you decide to do, be careful. Cross has eyes everywhere. I'll have lunch ready at noon.' She hands Thomas a small bell. 'Ring this from the front porch if you need help.'",
            next: "leaving_boarding_house"
        },

        // Scene 13: Leaving the Boarding House
        leaving_boarding_house: {
            speaker: "Narrator",
            text: "The four companions step out into the morning air of Perdition. The town is more active now, with people going about their daily business, though everyone seems hurried, heads down, avoiding eye contact.",
            next: "visiting_general_store"
        },

        // Scene 14: Visiting the General Store
        visiting_general_store: {
            speaker: "Narrator",
            text: "Your first stop is Colt's General Store. Jeremiah Colt, a weathered man with kind but cautious eyes, looks up as you enter. 'Morning, folks. Word is you're staying at Henderson's. If you're looking for supplies, I'll be honest—selection's limited.'",
            next: "jeremiah_information"
        },

        // Scene 15: Information from Jeremiah
        jeremiah_information: {
            speaker: "Jeremiah Colt",
            text: "'Tom Bradley was a good man trying to do right in a bad situation. He was investigating something before he died—kept asking about property deeds and water rights. Made some folks nervous, if you catch my meaning.'",
            choices: [
                {
                    text: "Ask about Silas Cross directly",
                    next: "jeremiah_on_cross"
                },
                {
                    text: "Inquire about the water rights",
                    next: "jeremiah_on_water"
                }
            ]
        },

        // Scene 16a: Jeremiah on Cross
        jeremiah_on_cross: {
            speaker: "Jeremiah Colt",
            text: "'Cross? That man's like a vulture circling carrion. Shows up when folks are desperate, offers prices that seem generous until you realize what you're really giving up.'",
            next: "leaving_store"
        },

        // Scene 16b: Jeremiah on Water
        jeremiah_on_water: {
            speaker: "Jeremiah Colt",
            text: "'Water's life out here. Control the water, control everything. Cross has been real interested in who owns the water rights around Perdition. Too interested, if you ask me.'",
            next: "leaving_store"
        },

        // Scene 17: Leaving the Store
        leaving_store: {
            speaker: "Thomas Whitmore",
            text: "'Mr. Colt, I'm a physician. Mrs. Henderson mentioned medical supplies, and I'd like to help the community. Do you have anything available?'",
            next: "medical_supplies_discussion"
        },

        // Scene 18: Medical Supplies Discussion
        medical_supplies_discussion: {
            speaker: "Jeremiah Colt",
            text: "'Bandages, some laudanum, whiskey for cleaning wounds. Basic stuff. The doc who was here before—Morrison—he left after three folks died from something he couldn't diagnose. Said the symptoms didn't match any natural disease.'",
            next: "sheriff_office_investigation"
        },

        // Scene 19: Sheriff's Office Investigation
        sheriff_office_investigation: {
            speaker: "Narrator",
            text: "Your next stop is the sheriff's office. The door stands ajar, papers scattered on the desk, filing cabinets rifled through. Someone searched this place thoroughly after Bradley's death.",
            next: "examining_evidence"
        },

        // Scene 20: Examining Evidence
        examining_evidence: {
            speaker: "Maria Vasquez",
            text: "'Look at this.' She holds up a partially burned document. 'Property transfer records. Someone tried to destroy these but didn't finish the job. I can make out 'water rights' and 'forced sale.''",
            next: "thomas_finds_notebook"
        },

        // Scene 21: Thomas Finds Notebook
        thomas_finds_notebook: {
            speaker: "Thomas Whitmore",
            text: "'Bradley's personal notebook is still here. The handwriting is hurried, like he was taking notes quickly. There are references to mysterious illnesses and... contaminated water sources.'",
            next: "jacob_discovery"
        },

        // Scene 22: Jacob's Discovery
        jacob_discovery: {
            speaker: "Jacob Rivers",
            text: "'In the jail cell, someone scratched 'WATER IS LIFE' into the wall, along with what looks like a crude map of the area around Perdition. Someone was trying to leave a message.'",
            next: "silas_cross_arrives"
        },

        // Scene 23: Silas Cross Arrives
        silas_cross_arrives: {
            speaker: "Narrator",
            text: "A shadow falls across the doorway. A well-dressed man in an expensive coat stands there, flanked by two rough-looking companions. His smile doesn't reach his eyes.",
            next: "cross_introduction"
        },

        // Scene 24: Cross's Introduction
        cross_introduction: {
            speaker: "Silas Cross",
            text: "'Good morning. I don't believe we've been introduced. I'm Silas Cross, and I handle business matters for various interests in the area. I couldn't help but notice you examining poor Sheriff Bradley's office.'",
            next: "polite_response"
        },

        // Scene 25: Polite Response
        polite_response: {
            speaker: "Elijah Cross",
            text: "'I'm Elijah Cross, and these are my companions. We're new to Perdition and were curious about the recent troubles. We heard Sheriff Bradley was well-respected.'",
            next: "cross_response"
        },

        // Scene 26: Cross's Response
        cross_response: {
            speaker: "Silas Cross",
            text: "'Cross? Interesting coincidence. As for my business, I represent clients with investments in this region. Property, water rights, mining interests. When strangers start asking questions about official matters, my clients like to know why.'",
            next: "veiled_threat"
        },

        // Scene 27: Veiled Threat
        veiled_threat: {
            speaker: "Silas Cross",
            text: "'Sheriff Bradley was investigating matters that didn't concern him. Sadly, his curiosity proved unhealthy. I'd hate to see newcomers make the same mistake. Perdition can be dangerous for those who don't understand how things work here.'",
            choices: [
                {
                    text: "Stand firm against the threat",
                    next: "standing_firm"
                },
                {
                    text: "Remain diplomatically neutral",
                    next: "diplomatic_response"
                }
            ]
        },

        // Scene 28a: Standing Firm
        standing_firm: {
            speaker: "Maria Vasquez",
            text: "'We understand perfectly. Some people think they can intimidate others into submission. They're usually wrong.' Her hand rests near her gun.",
            next: "cross_departure"
        },

        // Scene 28b: Diplomatic Response
        diplomatic_response: {
            speaker: "Elijah Cross",
            text: "'We appreciate the information, Mr. Cross. We're simply travelers trying to understand our new surroundings.'",
            next: "cross_departure"
        },

        // Scene 29: Cross's Departure
        cross_departure: {
            speaker: "Silas Cross",
            text: "'Of course. Well, gentlemen... and lady... I hope your stay in Perdition is brief and uneventful.' He tips his hat and walks away with his men, but the threat hangs in the air.",
            next: "church_ruins_visit"
        },

        // Scene 30: Church Ruins Visit
        church_ruins_visit: {
            speaker: "Narrator",
            text: "Your investigation takes you to the burned church on the hill. Up close, the destruction is even more devastating. The fire was clearly intense and thorough—too thorough for a simple lightning strike.",
            next: "examining_church_damage"
        },

        // Scene 31: Examining Church Damage
        examining_church_damage: {
            speaker: "Elijah Cross",
            text: "'The altar stone is cracked, but not from heat. These marks are deliberate—someone took an axe to this before the fire. This wasn't just arson. This was desecration of everything this building represented.'",
            next: "maria_finds_evidence"
        },

        // Scene 32: Maria Finds Evidence
        maria_finds_evidence: {
            speaker: "Maria Vasquez",
            text: "'Multiple ignition points, remnants of oil-soaked rags. This was carefully planned destruction, not a random act of violence. Someone wanted to eliminate what this church meant to the community.'",
            next: "jacob_finds_grave"
        },

        // Scene 33: Jacob Finds Grave
        jacob_finds_grave: {
            speaker: "Jacob Rivers",
            text: "'Behind the church, several headstones are knocked over, and there's a fresh grave. The marker says Tom Bradley. They buried the sheriff here, where the church used to provide sanctuary.'",
            next: "residential_area_visit"
        },

        // Scene 34: Residential Area Visit
        residential_area_visit: {
            speaker: "Narrator",
            text: "Walking through Perdition's residential streets, you see the clear divide between those who've stayed and those who've fled. Some houses are well-maintained, while others show broken windows and yards grown wild.",
            next: "meeting_ruth_peterson"
        },

        // Scene 35: Meeting Ruth Peterson
        meeting_ruth_peterson: {
            speaker: "Ruth Peterson",
            text: "A woman tending her garden looks up warily. 'You're the strangers staying at Henderson's. Word travels fast in a small town. I'm Ruth Peterson. Are you really here to help, or just passing through like everyone else?'",
            next: "thomas_offers_help"
        },

        // Scene 36: Thomas Offers Help
        thomas_offers_help: {
            speaker: "Thomas Whitmore",
            text: "'I'm a physician, Mrs. Peterson. I'm here to help however I can. Mrs. Henderson mentioned your husband worked at the mine before the troubles started.'",
            next: "ruth_explains_situation"
        },

        // Scene 37: Ruth Explains Situation
        ruth_explains_situation: {
            speaker: "Ruth Peterson",
            text: "'My husband Pete worked the mine for fifteen years. When production started dropping, Cross's men came around, offering to buy us out. Pete refused. A week later, he came down with the sickness that killed him and two others.'",
            next: "abandoned_house_discovery"
        },

        // Scene 38: Abandoned House Discovery
        abandoned_house_discovery: {
            speaker: "Narrator",
            text: "You pass an abandoned house with furniture still inside, as if the family left in a hurry. A hastily scrawled note on the door reads: 'Gone to California. Don't follow.' The desperation is palpable.",
            next: "walter_hayes_encounter"
        },

        // Scene 39: Walter Hayes Encounter
        walter_hayes_encounter: {
            speaker: "Walter Hayes",
            text: "An elderly man rocks on his porch. 'Name's Walter Hayes. Been in Perdition since it was founded. Seen this town rise and fall. Used to be, strangers were welcome. Now they either bring trouble or get it. Which are you?'",
            choices: [
                {
                    text: "We're here to help rebuild",
                    next: "rebuilding_response"
                },
                {
                    text: "We're here to find the truth",
                    next: "truth_seeking_response"
                }
            ]
        },

        // Scene 40a: Rebuilding Response
        rebuilding_response: {
            speaker: "Elijah Cross",
            text: "'We're here to help rebuild what's been torn down, Mr. Hayes. Every community deserves hope.'",
            next: "walter_advice"
        },

        // Scene 40b: Truth Seeking Response
        truth_seeking_response: {
            speaker: "Maria Vasquez",
            text: "'We're here to find the truth about what's happening to Perdition and stop it.'",
            next: "walter_advice"
        },

        // Scene 41: Walter's Advice
        walter_advice: {
            speaker: "Walter Hayes",
            text: "'Truth is, Cross has this town by the throat. But maybe... maybe if enough people stood together...' He trails off, but there's a spark of hope in his old eyes.",
            next: "returning_to_boarding_house"
        },

        // Scene 42: Returning to Boarding House
        returning_to_boarding_house: {
            speaker: "Narrator",
            text: "As the sun reaches its zenith, you make your way back to Henderson's Boarding House. The smell of cooking food and the promise of safety provide welcome respite from the morning's dark discoveries.",
            next: "lunch_discussion"
        },

        // Scene 43: Lunch Discussion
        lunch_discussion: {
            speaker: "Mrs. Henderson",
            text: "'Well? What did you learn about our troubled town?' She sets bowls of stew before you. The warmth is comforting after the cold reality of Perdition's systematic destruction.",
            next: "sharing_discoveries"
        },

        // Scene 44: Sharing Discoveries
        sharing_discoveries: {
            speaker: "Thomas Whitmore",
            text: "'The mysterious illnesses, the property acquisitions, the systematic intimidation—it's all connected. Someone is poisoning people who won't sell their water rights, making it look like a disease.'",
            next: "cross_pattern_revealed"
        },

        // Scene 45: Cross's Pattern Revealed
        cross_pattern_revealed: {
            speaker: "Maria Vasquez",
            text: "'Silas Cross threatened us directly. He's behind Sheriff Bradley's murder, the church burning, and the poisonings. He's systematically destroying everything that gives this community strength.'",
            next: "mrs_henderson_confirms"
        },

        // Scene 46: Mrs. Henderson Confirms
        mrs_henderson_confirms: {
            speaker: "Mrs. Henderson",
            text: "'I was afraid you'd figure that out. Cross has been the shadow over this town for two years. Every family that's fled, every business that's closed, every death—he's profited from all of it.'",
            next: "decision_point"
        },

        // Scene 47: Decision Point
        decision_point: {
            speaker: "Elijah Cross",
            text: "'Then we know our enemy. The question is: what do we do about it? Cross has money, men, and no scruples. But Perdition still has people worth fighting for.'",
            next: "jacob_speaks_up"
        },

        // Scene 48: Jacob Speaks Up
        jacob_speaks_up: {
            speaker: "Jacob Rivers",
            text: "'We came west to become better than we were. Maybe this is how we do it—by standing up to someone like Cross. By protecting people who can't protect themselves.'",
            next: "afternoon_mission"
        },

        // Scene 49: Afternoon Mission
        afternoon_mission: {
            speaker: "Mrs. Henderson",
            text: "'Whatever you decide to do, be careful. Cross has eyes everywhere. But...' She looks around the room with something she hasn't felt in months. 'I haven't felt hope like this since Tom Bradley was alive. Maybe you really can help us.'",
            next: "chapter_conclusion"
        },

        // Scene 50: Chapter Conclusion
        chapter_conclusion: {
            speaker: "Narrator",
            text: "Armed with knowledge of their true enemy, the four companions prepare for the fight ahead. Silas Cross has built his empire on fear, corruption, and murder. But now he faces something he hasn't encountered before—four souls united by purpose, determined to restore justice to a town that has almost forgotten what that word means.",
            choices: [
                {
                    text: "Continue to Chapter 5",
                    next: null,
                    nextChapter: "chapter5"
                }
            ]
        }
    }
};