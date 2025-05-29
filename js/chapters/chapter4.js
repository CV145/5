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
            choices: [
                {
                    text: "Get dressed and head downstairs immediately",
                    next: "early_riser"
                },
                {
                    text: "Take time to look out the window at the town",
                    next: "window_observation"
                },
                {
                    text: "Listen carefully to sounds from the other rooms",
                    next: "listening_to_companions"
                }
            ]
        },

        // Scene 3a: Early Riser
        early_riser: {
            speaker: "Narrator",
            text: "You dress quickly and make your way downstairs, eager to start the day. The stairs creak softly under your feet as you descend into the warm, inviting atmosphere of Mrs. Henderson's kitchen.",
            next: "breakfast_preparation"
        },

        // Scene 3b: Window Observation
        window_observation: {
            speaker: "Narrator",
            text: "From your window, Perdition looks different in the morning light—still weathered and worn, but somehow less ominous. A few early risers move through the streets: a woman hanging laundry, an old man leading a mule, smoke rising from several chimneys. Life persists, even here.",
            next: "breakfast_preparation"
        },

        // Scene 3c: Listening to Companions
        listening_to_companions: {
            speaker: "Narrator",
            text: "Through the walls, you can hear Thomas moving about methodically, probably organizing his medical supplies. Maria's room is silent—she's likely been awake for some time, watching the street. Jacob's restless pacing suggests nervous energy about the day ahead.",
            next: "breakfast_preparation"
        },

        // Scene 4: Breakfast Preparation
        breakfast_preparation: {
            speaker: "Mrs. Henderson",
            text: "Mrs. Henderson works efficiently at the stove, her movements practiced and sure. 'Good morning,' she says without turning around. 'I trust you slept well? Breakfast will be ready shortly. I've prepared extra—figured you'd need your strength for whatever you're planning to do about this town's troubles.'",
            next: "companions_gather"
        },

        // Scene 5: Companions Gather
        companions_gather: {
            speaker: "Narrator",
            text: "One by one, your companions join you in the kitchen. Elijah appears first, his clerical collar straightened and his expression thoughtful. Maria follows, already dressed and armed, her eyes scanning the room out of habit. Jacob comes down last, looking young but determined.",
            next: "breakfast_conversation_start"
        },

        // Scene 6: Breakfast Conversation Start
        breakfast_conversation_start: {
            speaker: "Mrs. Henderson",
            text: "'Before you ask, yes, I heard you folks talking last night. These walls aren't that thick.' She sets plates of bacon and eggs before you. 'And before you worry, I'm not one to spread gossip. But if you're truly planning to help this town, you should know what you're up against.'",
            choices: [
                {
                    text: "Ask Mrs. Henderson about the town's troubles",
                    next: "mrs_henderson_town_troubles"
                },
                {
                    text: "Inquire about specific people to avoid or trust",
                    next: "mrs_henderson_people_advice"
                },
                {
                    text: "Learn about the town's history before the decline",
                    next: "mrs_henderson_town_history"
                }
            ]
        },

        // Scene 7a: Mrs. Henderson on Town Troubles
        mrs_henderson_town_troubles: {
            speaker: "Mrs. Henderson",
            text: "'The troubles started about two years ago. First the mine production dropped, then the cattle started dying mysteriously. People began leaving, businesses closed. Sheriff Bradley tried to hold things together, but...' She shakes her head grimly. 'Someone didn't want law and order in Perdition.'",
            next: "breakfast_continues"
        },

        // Scene 7b: Mrs. Henderson's People Advice
        mrs_henderson_people_advice: {
            speaker: "Mrs. Henderson",
            text: "'Trust Jeremiah at the store—he's honest as they come. Doc Wilson at the veterinary clinic is good people too, though he's been drinking more since the cattle started dying. As for who to avoid...' She lowers her voice. 'The saloon owner, Frank Hutchins, he's got debts to unsavory folks. Makes him unreliable.'",
            next: "breakfast_continues"
        },

        // Scene 7c: Mrs. Henderson's Town History
        mrs_henderson_town_history: {
            speaker: "Mrs. Henderson",
            text: "'Perdition was a good town once. Founded by decent folks looking for a fresh start—hence the name, ironic as it seems now. The mine was productive, the land supported cattle, and we had a real community. Church socials, town meetings, children playing in the streets...' Her voice grows wistful.",
            next: "breakfast_continues"
        },

        // Scene 8: Breakfast Continues
        breakfast_continues: {
            speaker: "Thomas Whitmore",
            text: "'Mrs. Henderson, you mentioned people needing medical attention. Would you be willing to introduce me to them? I'd like to start helping as soon as possible.'",
            next: "medical_requests"
        },

        // Scene 9: Medical Requests
        medical_requests: {
            speaker: "Mrs. Henderson",
            text: "'Pete's widow, Martha, she's been poorly since he passed. Then there's young Billy at the livery—hurt his leg something fierce last week and it's not healing right. And...' She hesitates. 'There's others who might not come forward right away. Trust doesn't come easy these days.'",
            choices: [
                {
                    text: "Offer to visit patients with Mrs. Henderson",
                    next: "thomas_house_calls_planned"
                },
                {
                    text: "Suggest setting up a medical clinic",
                    next: "thomas_clinic_discussion"
                },
                {
                    text: "Ask about medical supplies in town",
                    next: "thomas_supplies_inquiry"
                }
            ]
        },

        // Scene 10a: Thomas House Calls Planned
        thomas_house_calls_planned: {
            speaker: "Thomas Whitmore",
            text: "'House calls would be best initially. People need to see I'm here to help, not to judge or take advantage. Would you be willing to accompany me, Mrs. Henderson? Your introduction would mean a great deal.'",
            next: "morning_plans_forming"
        },

        // Scene 10b: Thomas Clinic Discussion
        thomas_clinic_discussion: {
            speaker: "Thomas Whitmore",
            text: "'A proper clinic would be ideal, but I suspect trust must be earned first. Perhaps we could start with house calls and see if there's a suitable building available later.'",
            next: "morning_plans_forming"
        },

        // Scene 10c: Thomas Supplies Inquiry
        thomas_supplies_inquiry: {
            speaker: "Mrs. Henderson",
            text: "'Jeremiah's got some basics at the store—bandages, laudanum, a few other things. But you'd need to send to the county seat for anything serious. That's a three-day ride, and not everyone can afford it.'",
            next: "morning_plans_forming"
        },

        // Scene 11: Morning Plans Forming
        morning_plans_forming: {
            speaker: "Elijah Cross",
            text: "'While Thomas tends to the sick, the rest of us should learn more about this town. Yesterday was just the surface. If we're to help Perdition, we need to understand what's really happening here.'",
            next: "planning_the_day"
        },

        // Scene 12: Planning the Day
        planning_the_day: {
            speaker: "Maria Vasquez",
            text: "'The sheriff's office is empty. Someone should look through Bradley's records, see what he was investigating before he was killed. And we need to know who really runs things now that he's gone.'",
            choices: [
                {
                    text: "Suggest investigating the sheriff's office together",
                    next: "group_investigation_plan"
                },
                {
                    text: "Propose splitting up to cover more ground",
                    next: "split_up_plan"
                },
                {
                    text: "Recommend talking to more townspeople first",
                    next: "information_gathering_plan"
                }
            ]
        },

        // Scene 13a: Group Investigation Plan
        group_investigation_plan: {
            speaker: "Elijah Cross",
            text: "'Strength in numbers. If the sheriff was killed for what he knew, examining his office might be dangerous. Better we face that danger together.'",
            next: "departure_preparation"
        },

        // Scene 13b: Split Up Plan
        split_up_plan: {
            speaker: "Maria Vasquez",
            text: "'We can cover more ground separately. Thomas makes his medical rounds with Mrs. Henderson, I check the sheriff's office, Elijah talks to business owners, Jacob observes the younger folks. We meet back here at midday.'",
            next: "departure_preparation"
        },

        // Scene 13c: Information Gathering Plan
        information_gathering_plan: {
            speaker: "Jacob Rivers",
            text: "'Maybe we should talk to more regular folks first. Workers, families, people who aren't hiding anything. Get the lay of the land before we go poking around official business.'",
            next: "departure_preparation"
        },

        // Scene 14: Departure Preparation
        departure_preparation: {
            speaker: "Mrs. Henderson",
            text: "'Whatever you decide, be careful. This town's like a wounded animal—it might bite anyone trying to help. I'll have lunch ready at noon, and if you need anything...' She hands Thomas a small bell. 'Ring this from the front porch. I'll hear it.'",
            next: "leaving_boarding_house"
        },

        // Scene 15: Leaving the Boarding House
        leaving_boarding_house: {
            speaker: "Narrator",
            text: "The four companions step out into the morning air of Perdition. The town is more active now, with people going about their daily business, though everyone seems hurried, heads down, avoiding eye contact. The sense of a community under siege is palpable.",
            next: "first_destination_choice"
        },

        // Scene 16: First Destination Choice
        first_destination_choice: {
            speaker: "Narrator",
            text: "Standing on the boarding house porch, you have several options for beginning your investigation of Perdition. Each choice might reveal different aspects of the town's troubles.",
            choices: [
                {
                    text: "Head to the general store to talk with Jeremiah",
                    next: "visit_general_store"
                },
                {
                    text: "Go directly to the sheriff's office",
                    next: "visit_sheriff_office"
                },
                {
                    text: "Stop by the church ruins first",
                    next: "visit_church_ruins"
                },
                {
                    text: "Walk through the residential area",
                    next: "explore_residential"
                }
            ]
        },

        // Scene 17a: Visit General Store
        visit_general_store: {
            speaker: "Narrator",
            text: "Colt's General Store looks busier this morning, with several customers examining the sparse shelves. Jeremiah notices your group and nods, but continues serving a worried-looking woman who's counting coins carefully.",
            next: "general_store_interaction"
        },

        // Scene 17b: Visit Sheriff's Office
        visit_sheriff_office: {
            speaker: "Narrator",
            text: "The sheriff's office door stands ajar, as if abandoned in haste. A wooden sign reading 'Sheriff Tom Bradley' hangs crooked on its chains. Through the open door, you can see papers scattered on a desk and filing cabinets with drawers partially open.",
            next: "sheriff_office_investigation"
        },

        // Scene 17c: Visit Church Ruins
        visit_church_ruins: {
            speaker: "Narrator",
            text: "The burned church sits on a small rise at the edge of town. Blackened timbers reach toward the sky like the ribs of some great beast. Even weeks after the fire, the smell of ash and charred wood lingers in the air.",
            next: "church_ruins_exploration"
        },

        // Scene 17d: Explore Residential Area
        explore_residential: {
            speaker: "Narrator",
            text: "The residential streets of Perdition tell a story of gradual abandonment. Some houses are well-maintained with gardens and fresh paint, while others show broken windows, sagging porches, and yards grown wild with weeds.",
            next: "residential_observations"
        },

        // Scene 18a: General Store Interaction
        general_store_interaction: {
            speaker: "Jeremiah Colt",
            text: "After the woman leaves, Jeremiah approaches you. 'Morning, folks. Hope Mrs. Henderson treated you well. If you're looking for supplies, I'll be honest—selection's limited, but prices are fair.'",
            choices: [
                {
                    text: "Ask about the woman who just left",
                    next: "jeremiah_discusses_customer"
                },
                {
                    text: "Inquire about town supplies and trade",
                    next: "jeremiah_business_talk"
                },
                {
                    text: "Question him about Sheriff Bradley",
                    next: "jeremiah_sheriff_discussion"
                }
            ]
        },

        // Scene 19a: Jeremiah Discusses Customer
        jeremiah_discusses_customer: {
            speaker: "Jeremiah Colt",
            text: "'Sarah Mitchell. Her husband worked the mine before it... well, before the troubles started. Now she's trying to make three dollars stretch to feed four children.' His expression is grim. 'Too many stories like hers in Perdition these days.'",
            next: "store_conversation_continues"
        },

        // Scene 19b: Jeremiah Business Talk
        jeremiah_business_talk: {
            speaker: "Jeremiah Colt",
            text: "'Trade's been slow. Folks don't have money, and supply wagons don't come regular anymore. Had to let my clerk go last month.' He gestures at the sparse shelves. 'Running on what I had in stock, mostly.'",
            next: "store_conversation_continues"
        },

        // Scene 19c: Jeremiah Sheriff Discussion
        jeremiah_sheriff_discussion: {
            speaker: "Jeremiah Colt",
            text: "'Tom Bradley was a good man trying to do right in a bad situation.' Jeremiah's voice drops. 'He was investigating something before he died. Kept asking questions about property deeds and water rights. Made some folks nervous.'",
            next: "store_conversation_continues"
        },

        // Scene 20: Store Conversation Continues
        store_conversation_continues: {
            speaker: "Thomas Whitmore",
            text: "'Mr. Colt, Mrs. Henderson mentioned medical supplies. What do you have available, and what would you need to stock a proper medical kit?'",
            next: "medical_supplies_discussion"
        },

        // Scene 21: Medical Supplies Discussion
        medical_supplies_discussion: {
            speaker: "Jeremiah Colt",
            text: "'Bandages, some laudanum, whiskey for cleaning wounds. Basic stuff.' He opens a cabinet behind the counter. 'For anything serious, you'd need to order from the county seat. Course, with the doc gone, there wasn't much call for medical supplies.'",
            choices: [
                {
                    text: "Offer to provide a list of needed supplies",
                    next: "thomas_supply_list"
                },
                {
                    text: "Ask about the previous doctor's departure",
                    next: "previous_doctor_story"
                },
                {
                    text: "Inquire about payment arrangements",
                    next: "medical_payment_discussion"
                }
            ]
        },

        // Scene 22a: Thomas Supply List
        thomas_supply_list: {
            speaker: "Thomas Whitmore",
            text: "'I'll write up a list of essential medical supplies. If you can order them, I'll cover the cost initially. This town needs proper medical care, and I have some savings to invest in that goal.'",
            next: "leaving_general_store"
        },

        // Scene 22b: Previous Doctor Story
        previous_doctor_story: {
            speaker: "Jeremiah Colt",
            text: "'Doc Morrison? Good physician, but he spooked easy. After the third patient died from something he couldn't diagnose, he packed up and left. Said there was something unnatural about the illnesses. Course, that might've been the whiskey talking.'",
            next: "leaving_general_store"
        },

        // Scene 22c: Medical Payment Discussion
        medical_payment_discussion: {
            speaker: "Jeremiah Colt",
            text: "'Most folks can't pay much, but they'll find ways. Barter mostly—eggs, vegetables, labor. Mrs. Henderson always said a town without a doctor is a town without hope. Maybe you can bring some of that back.'",
            next: "leaving_general_store"
        },

        // Scene 18b: Sheriff Office Investigation
        sheriff_office_investigation: {
            speaker: "Elijah Cross",
            text: "'We should examine this carefully. If Sheriff Bradley was killed for what he knew, his records might tell us who wanted him silenced.' He steps carefully into the office, avoiding disturbing any evidence.",
            next: "office_search_begins"
        },

        // Scene 23: Office Search Begins
        office_search_begins: {
            speaker: "Narrator",
            text: "The sheriff's office is in disarray, but not from violence—it looks like someone searched it thoroughly after Bradley's death. Papers are scattered, drawers are open, and filing cabinets have been rifled through.",
            choices: [
                {
                    text: "Examine the scattered papers on the desk",
                    next: "desk_papers_examination"
                },
                {
                    text: "Check the filing cabinets for missing records",
                    next: "filing_cabinets_search"
                },
                {
                    text: "Look for Bradley's personal belongings",
                    next: "personal_belongings_search"
                },
                {
                    text: "Inspect the jail cells in the back",
                    next: "jail_cells_inspection"
                }
            ]
        },

        // Scene 24a: Desk Papers Examination
        desk_papers_examination: {
            speaker: "Maria Vasquez",
            text: "'Most of these are routine reports, but look at this.' She holds up a partially burned document. 'Property transfer records. Someone tried to destroy these, but didn't finish the job. Names are mostly burned, but I can make out 'water rights' and 'forced sale.''",
            next: "evidence_discovered"
        },

        // Scene 24b: Filing Cabinets Search
        filing_cabinets_search: {
            speaker: "Jacob Rivers",
            text: "'These cabinets are nearly empty. Whatever was in here, someone took it.' He pulls out a few remaining folders. 'Just old arrest records from years ago. Nothing recent.'",
            next: "evidence_discovered"
        },

        // Scene 24c: Personal Belongings Search
        personal_belongings_search: {
            speaker: "Thomas Whitmore",
            text: "'Bradley's personal effects are still here—family photograph, a Bible, his badge.' Thomas picks up a small notebook. 'This might be his personal observations. The handwriting is hurried, like he was taking notes quickly.'",
            next: "evidence_discovered"
        },

        // Scene 24d: Jail Cells Inspection
        jail_cells_inspection: {
            speaker: "Narrator",
            text: "The jail cells are empty but show signs of recent use. In one cell, scratched into the wall, are the words 'WATER IS LIFE' and what looks like a crude map of the area around Perdition.",
            next: "evidence_discovered"
        },

        // Scene 25: Evidence Discovered
        evidence_discovered: {
            speaker: "Elijah Cross",
            text: "'Water rights, forced sales, property transfers—there's a pattern here. Someone's been acquiring land and water access systematically. Sheriff Bradley must have been getting close to proving it.'",
            next: "office_investigation_interrupted"
        },

        // Scene 26: Office Investigation Interrupted
        office_investigation_interrupted: {
            speaker: "Narrator",
            text: "A shadow falls across the doorway. A well-dressed man in an expensive coat stands there, flanked by two rough-looking companions. His smile doesn't reach his eyes.",
            next: "mysterious_visitor"
        },

        // Scene 27: Mysterious Visitor
        mysterious_visitor: {
            speaker: "Well-Dressed Man",
            text: "'Good morning. I don't believe we've been introduced. I'm Silas Cross, and I handle... business matters... for various interests in the area. I couldn't help but notice you examining poor Sheriff Bradley's office.'",
            choices: [
                {
                    text: "Introduce yourselves politely",
                    next: "polite_introduction"
                },
                {
                    text: "Ask about his business in Perdition",
                    next: "business_inquiry"
                },
                {
                    text: "Question why he's watching you",
                    next: "suspicious_response"
                }
            ]
        },

        // Scene 28a: Polite Introduction
        polite_introduction: {
            speaker: "Elijah Cross",
            text: "'I'm Elijah Cross, and these are my companions. We're new to Perdition and were curious about the recent troubles. We heard Sheriff Bradley was well-respected.'",
            next: "silas_response"
        },

        // Scene 28b: Business Inquiry
        business_inquiry: {
            speaker: "Maria Vasquez",
            text: "'What kind of business matters? This is a small frontier town. What interests would need... handling?' Her hand rests casually near her gun.",
            next: "silas_response"
        },

        // Scene 28c: Suspicious Response
        suspicious_response: {
            speaker: "Thomas Whitmore",
            text: "'Interesting that you notice everyone examining the sheriff's office. Do you make it a habit to monitor who investigates law enforcement matters?'",
            next: "silas_response"
        },

        // Scene 29: Silas Response
        silas_response: {
            speaker: "Silas Cross",
            text: "'Cross? Interesting. No relation, I assume.' His smile grows colder. 'As for my business, I represent clients who have investments in this region. Property, water rights, mining interests. When strangers start asking questions about official matters, my clients like to know why.'",
            next: "tension_builds"
        },

        // Scene 30: Tension Builds
        tension_builds: {
            speaker: "Silas Cross",
            text: "'Sheriff Bradley was investigating matters that didn't concern him. Sadly, his curiosity proved... unhealthy. I'd hate to see newcomers make the same mistake. Perdition can be dangerous for those who don't understand how things work here.'",
            next: "veiled_threat"
        },

        // Scene 18c: Church Ruins Exploration
        church_ruins_exploration: {
            speaker: "Narrator",
            text: "Up close, the church ruins are even more devastating. The fire was clearly intense and thorough—too thorough for a simple lightning strike. Melted metal fixtures and strangely burned stone suggest something more deliberate.",
            choices: [
                {
                    text: "Examine the burned altar area",
                    next: "altar_examination"
                },
                {
                    text: "Look for signs of accelerant or arson",
                    next: "arson_investigation"
                },
                {
                    text: "Search for any surviving religious items",
                    next: "religious_items_search"
                },
                {
                    text: "Check the cemetery behind the church",
                    next: "cemetery_visit"
                }
            ]
        },

        // Scene 31a: Altar Examination
        altar_examination: {
            speaker: "Elijah Cross",
            text: "'The altar stone is cracked, but not from heat. Look at these marks—they're deliberate. Someone took an axe or sledgehammer to this before the fire.' His voice is troubled. 'This wasn't just arson. This was desecration.'",
            next: "church_discoveries"
        },

        // Scene 31b: Arson Investigation
        arson_investigation: {
            speaker: "Maria Vasquez",
            text: "'Here.' She points to several spots around the church foundation. 'Burn patterns are wrong for a lightning fire. Multiple ignition points, and look at this—' She kicks at some debris. 'Remnants of oil-soaked rags.'",
            next: "church_discoveries"
        },

        // Scene 31c: Religious Items Search
        religious_items_search: {
            speaker: "Thomas Whitmore",
            text: "'Most of the religious artifacts are destroyed, but...' He carefully lifts a partially melted cross from the rubble. 'This was silver. Good quality. Why would someone burn down a church but leave valuable items?'",
            next: "church_discoveries"
        },

        // Scene 31d: Cemetery Visit
        cemetery_visit: {
            speaker: "Jacob Rivers",
            text: "'The cemetery's been disturbed too.' Jacob calls from behind the church. 'Several headstones are knocked over, and this fresh grave...' He pauses. 'The marker says Tom Bradley. They buried the sheriff here.'",
            next: "church_discoveries"
        },

        // Scene 32: Church Discoveries
        church_discoveries: {
            speaker: "Narrator",
            text: "Your examination of the church ruins reveals a pattern of deliberate destruction. This wasn't just a building that burned—it was a symbol that someone wanted erased from Perdition.",
            next: "church_reflection"
        },

        // Scene 33: Church Reflection
        church_reflection: {
            speaker: "Elijah Cross",
            text: "'A church represents hope, community, moral authority. Destroying it sends a message: there's no higher power here than whoever controls this town. No sanctuary, no redemption, no resistance.'",
            next: "leaving_church_ruins"
        },

        // Scene 18d: Residential Observations
        residential_observations: {
            speaker: "Narrator",
            text: "Walking through the residential streets, you notice the clear divide between those who've stayed and those who've fled. Maintained houses cluster together, while abandoned ones create islands of decay.",
            choices: [
                {
                    text: "Approach a woman tending her garden",
                    next: "garden_woman_encounter"
                },
                {
                    text: "Investigate an abandoned house",
                    next: "abandoned_house_exploration"
                },
                {
                    text: "Watch children playing in a yard",
                    next: "children_observation"
                },
                {
                    text: "Talk to an elderly man on his porch",
                    next: "elderly_man_conversation"
                }
            ]
        },

        // Scene 34a: Garden Woman Encounter
        garden_woman_encounter: {
            speaker: "Garden Woman",
            text: "The woman looks up from her vegetables warily. 'You're the strangers staying at Henderson's place. Word travels fast in a small town.' She wipes her hands on her apron. 'I'm Ruth Peterson. Are you really here to help, or are you just passing through like everyone else?'",
            next: "residential_conversation"
        },

        // Scene 34b: Abandoned House Exploration
        abandoned_house_exploration: {
            speaker: "Narrator",
            text: "The abandoned house still has furniture inside, as if the family left in a hurry. Children's toys scatter the floor, and a half-finished meal sits molding on the kitchen table. A hastily scrawled note on the door reads: 'Gone to California. Don't follow.'",
            next: "residential_discoveries"
        },

        // Scene 34c: Children Observation
        children_observation: {
            speaker: "Narrator",
            text: "Three children play quietly in a fenced yard, but their games are subdued. Instead of laughing and shouting, they whisper to each other and glance frequently at the windows of their house, as if checking for permission to continue playing.",
            next: "residential_discoveries"
        },

        // Scene 34d: Elderly Man Conversation
        elderly_man_conversation: {
            speaker: "Elderly Man",
            text: "'Name's Walter Hayes. Been in Perdition since it was founded.' He rocks slowly in his chair. 'Seen this town rise and fall. Used to be, strangers were welcome. Now...' He studies you carefully. 'Now strangers either bring trouble or get it. Which are you?'",
            next: "residential_conversation"
        },

        // Scene 35: Residential Conversation/Discoveries
        residential_conversation: {
            speaker: "Narrator",
            text: "Your exploration of Perdition's residential area reveals a community under pressure. Families are afraid, isolated, and suspicious of outsiders. Yet underneath the fear, there's still hope that someone might help restore what they've lost.",
            next: "midday_approach"
        },

        residential_discoveries: {
            speaker: "Narrator",
            text: "The residential areas tell a story of a community slowly bleeding away. Yet those who remain show remarkable resilience, maintaining their homes and families despite the growing darkness around them.",
            next: "midday_approach"
        },

        // Scene 36: Midday Approach (Convergence Point)
        midday_approach: {
            speaker: "Narrator",
            text: "As the sun reaches its zenith, your morning explorations come to an end. Whether you've been investigating the sheriff's office, exploring the church ruins, talking to residents, or gathering supplies, one thing has become clear: Perdition is a town caught in the grip of systematic oppression.",
            next: "returning_to_boarding_house"
        },

        // Scene 37: Returning to Boarding House
        returning_to_boarding_house: {
            speaker: "Narrator",
            text: "You make your way back to Henderson's Boarding House, where the smell of cooking food and the promise of safety provide a welcome respite from the morning's discoveries. Mrs. Henderson has prepared a hearty lunch, and your companions are beginning to gather.",
            next: "lunch_discussion"
        },

        // Scene 38: Lunch Discussion
        lunch_discussion: {
            speaker: "Mrs. Henderson",
            text: "'Well? What did you learn about our troubled town?' She sets bowls of stew before you. 'And Dr. Whitmore, how did your first patient visits go?'",
            next: "sharing_discoveries"
        },

        // Scene 39: Sharing Discoveries
        sharing_discoveries: {
            speaker: "Thomas Whitmore",
            text: "'Martha Peterson is indeed ill, but it's grief more than medicine that ails her. Young Billy's leg is infected—I've cleaned it and left instructions. But Mrs. Henderson, I found something troubling. Several people described similar mysterious illnesses that Dr. Morrison couldn't treat.'",
            next: "medical_concerns"
        },

        // Scene 40: Medical Concerns
        medical_concerns: {
            speaker: "Thomas Whitmore",
            text: "'The symptoms they describe don't match any natural disease I know. Sudden weakness, strange dreams, and a peculiar fear of water. Three people died from it, and Dr. Morrison fled rather than face a fourth case.'",
            choices: [
                {
                    text: "Suggest investigating the water supply",
                    next: "water_investigation_suggested"
                },
                {
                    text: "Ask if the illness affected specific people",
                    next: "illness_pattern_inquiry"
                },
                {
                    text: "Wonder if the symptoms could be poisoning",
                    next: "poisoning_theory"
                }
            ]
        },

        // Scene 41a: Water Investigation Suggested
        water_investigation_suggested: {
            speaker: "Maria Vasquez",
            text: "'That fits with what we learned. Someone's been acquiring water rights systematically. Maybe they're not just controlling the water—maybe they're contaminating it.'",
            next: "afternoon_planning"
        },

        // Scene 41b: Illness Pattern Inquiry
        illness_pattern_inquiry: {
            speaker: "Elijah Cross",
            text: "'Were the victims connected in any way? Property owners? People who opposed something? There might be a pattern to who was targeted.'",
            next: "afternoon_planning"
        },

        // Scene 41c: Poisoning Theory
        poisoning_theory: {
            speaker: "Jacob Rivers",
            text: "'Could someone be poisoning people? Making it look like a disease to cover up murder?'",
            next: "afternoon_planning"
        },

        // Scene 42: Afternoon Planning
        afternoon_planning: {
            speaker: "Narrator",
            text: "As you share your morning discoveries over lunch, a clearer picture emerges. Perdition isn't just declining—it's being systematically destroyed by someone with resources, connections, and a complete lack of conscience.",
            next: "silas_cross_revelation"
        },

        // Scene 43: Silas Cross Revelation
        silas_cross_revelation: {
            speaker: "Mrs. Henderson",
            text: "'Silas Cross? You met him?' Her face goes pale. 'He's the one behind all this. Represents some mining consortium from back east. Been buying up properties, water rights, anything of value. Those who won't sell...' She doesn't finish the sentence.",
            next: "the_threat_revealed"
        },

        // Scene 44: The Threat Revealed
        the_threat_revealed: {
            speaker: "Mrs. Henderson",
            text: "'Sheriff Bradley was investigating Cross's land deals when he was killed. The church burned down after Pastor Williams preached against selling out to outside interests. The mysterious illnesses started after people refused to sell their water rights.'",
            next: "decision_point"
        },

        // Scene 45: Decision Point
        decision_point: {
            speaker: "Elijah Cross",
            text: "'Then we know our enemy. The question is: what do we do about it? Silas Cross has money, men, and no scruples. But Perdition still has people worth fighting for.'",
            choices: [
                {
                    text: "Plan to gather evidence against Cross",
                    next: "evidence_gathering_plan"
                },
                {
                    text: "Focus on protecting the remaining townspeople",
                    next: "protection_strategy"
                },
                {
                    text: "Consider confronting Cross directly",
                    next: "direct_confrontation_idea"
                }
            ]
        },

        // Scene 46a: Evidence Gathering Plan
        evidence_gathering_plan: {
            speaker: "Thomas Whitmore",
            text: "'Evidence is our best weapon. If we can prove Cross is behind the murders, the land fraud, and the poisonings, we might be able to bring in federal authorities.'",
            next: "afternoon_mission"
        },

        // Scene 46b: Protection Strategy
        protection_strategy: {
            speaker: "Maria Vasquez",
            text: "'Our first duty is to the innocent. We organize the remaining townspeople, help them defend themselves, and make Cross's job harder. Every family we save is a victory.'",
            next: "afternoon_mission"
        },

        // Scene 46c: Direct Confrontation Idea
        direct_confrontation_idea: {
            speaker: "Jacob Rivers",
            text: "'Maybe it's time someone stood up to Cross directly. Show him that Perdition won't be pushed around anymore.'",
            next: "afternoon_mission"
        },

        // Scene 47: Afternoon Mission
        afternoon_mission: {
            speaker: "Mrs. Henderson",
            text: "'Whatever you decide to do, be careful. Cross has eyes everywhere, and he's not above using innocent people to get what he wants. But...' She looks around the room. 'I haven't felt hope like this in months. Maybe you really can help us.'",
            next: "leaving_for_afternoon"
        },

        // Scene 48: Leaving for Afternoon
        leaving_for_afternoon: {
            speaker: "Narrator",
            text: "Armed with new knowledge and purpose, the four companions prepare to spend their afternoon taking action against the forces threatening Perdition. The real work is just beginning.",
            next: "afternoon_action_begins"
        },

        // Scene 49: Afternoon Action Begins
        afternoon_action_begins: {
            speaker: "Narrator",
            text: "As you step back into the streets of Perdition, you're no longer just visitors seeking shelter. You're champions of a community under siege, ready to fight for justice in a town that has almost forgotten what that word means.",
            next: "chapter_conclusion"
        },

        // Scene 50: Chapter Conclusion
        chapter_conclusion: {
            speaker: "Narrator",
            text: "The first full day in Perdition has revealed the true scope of the town's troubles and the identity of its primary enemy. Tomorrow will bring new challenges as you begin the fight to reclaim this troubled community from the grip of Silas Cross and his consortium. But tonight, hope has returned to Perdition—in the form of four unlikely heroes who refuse to let evil triumph unopposed.",
            choices: [
                {
                    text: "Continue to Chapter 5",
                    next: null,
                    nextChapter: "chapter5"
                }
            ]
        },

        // Additional scenes for various paths that were referenced
        leaving_general_store: {
            speaker: "Narrator",
            text: "Leaving the general store with new understanding of the town's economic struggles, you step back into the street with a growing sense of the challenges facing Perdition.",
            next: "midday_approach"
        },

        veiled_threat: {
            speaker: "Narrator",
            text: "Silas Cross tips his hat politely, but his message is clear. As he walks away with his men, the threat hangs in the air like smoke from a gunbarrel.",
            next: "midday_approach"
        },

        leaving_church_ruins: {
            speaker: "Narrator",
            text: "The church ruins have told their story of deliberate destruction and community wounds. As you leave this place of former sanctuary, the magnitude of Perdition's loss becomes clear.",
            next: "midday_approach"
        }
    }
};