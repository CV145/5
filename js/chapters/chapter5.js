// Chapter 5: Lines in the Sand (Linear Version)
storyData.chapter5 = {
    name: "Chapter 5",
    title: "Lines in the Sand",
    scenes: {
        // Scene 1: Afternoon Plans
        start: {
            speaker: "Narrator",
            text: "The afternoon sun beats down on Perdition as the four companions prepare to take their first real action against Silas Cross. Armed with knowledge of his crimes and methods, they now face the daunting task of organizing resistance in a town paralyzed by fear.",
            next: "strategy_discussion"
        },

        // Scene 2: Strategy Discussion
        strategy_discussion: {
            speaker: "Elijah Cross",
            text: "'We can't fight Cross with guns alone. He has more men and resources than we do. But we have something he doesn't—the truth, and people who are tired of living in fear.'",
            next: "maria_tactical_input"
        },

        // Scene 3: Maria's Tactical Input
        maria_tactical_input: {
            speaker: "Maria Vasquez",
            text: "'Every successful resistance starts with gathering allies and cutting off the enemy's advantages. Cross controls this town through fear and isolation. We break that, we break his power.'",
            next: "thomas_medical_angle"
        },

        // Scene 4: Thomas's Medical Angle
        thomas_medical_angle: {
            speaker: "Thomas Whitmore",
            text: "'I can prove the poisonings if I can examine the water sources and test them properly. Physical evidence of Cross's crimes would be invaluable. And treating the sick will show people we're here to help, not exploit.'",
            next: "jacob_determination"
        },

        // Scene 5: Jacob's Determination
        jacob_determination: {
            speaker: "Jacob Rivers",
            text: "'The older folks like Walter Hayes remember when Perdition was a real community. If we can remind people of what they're fighting for, maybe they'll find the courage to stand up.'",
            choices: [
                {
                    text: "Focus on gathering evidence first",
                    next: "evidence_priority"
                },
                {
                    text: "Start by building community trust",
                    next: "trust_priority"
                }
            ]
        },

        // Scene 6a: Evidence Priority
        evidence_priority: {
            speaker: "Elijah Cross",
            text: "'Evidence gives us credibility. If we can prove Cross's crimes, people will be more willing to stand with us.'",
            next: "first_mission_planning"
        },

        // Scene 6b: Trust Priority
        trust_priority: {
            speaker: "Elijah Cross",
            text: "'Trust has to come first. People need to know we're not just another group of armed strangers with our own agenda.'",
            next: "first_mission_planning"
        },

        // Scene 7: First Mission Planning
        first_mission_planning: {
            speaker: "Mrs. Henderson",
            text: "'If you're going to help this town, you need to understand that Cross doesn't just control through violence. He's got Sheriff Bradley's deputy, Pete Morrison, in his pocket. And Frank Hutchins at the saloon reports everything to Cross's men.'",
            next: "informant_network"
        },

        // Scene 8: Understanding the Informant Network
        informant_network: {
            speaker: "Maria Vasquez",
            text: "'So we assume everything we do in public gets back to Cross. That means we need to be smart about who we approach and how we approach them.'",
            next: "thomas_water_testing_plan"
        },

        // Scene 9: Thomas's Water Testing Plan
        thomas_water_testing_plan: {
            speaker: "Thomas Whitmore",
            text: "'I need to test the water sources—the covered well in town square, the springs outside town, and any private wells. If I can prove the poisoning, we have our smoking gun.'",
            next: "leaving_for_afternoon_work"
        },

        // Scene 10: Leaving for Afternoon Work
        leaving_for_afternoon_work: {
            speaker: "Narrator",
            text: "The companions split up for their afternoon tasks, each carrying the weight of Perdition's hope on their shoulders. This is no longer about four strangers seeking a new life—this is about saving a community from systematic destruction.",
            next: "thomas_medical_rounds"
        },

        // Scene 11: Thomas's Medical Rounds
        thomas_medical_rounds: {
            speaker: "Narrator",
            text: "Thomas begins his medical rounds with Mrs. Henderson as his guide. Their first stop is Martha Peterson's small house on the edge of town, where grief and illness have taken their toll on the widow of one of Cross's victims.",
            next: "treating_martha"
        },

        // Scene 12: Treating Martha Peterson
        treating_martha: {
            speaker: "Martha Peterson",
            text: "'Doctor Morrison couldn't help my Pete. Said it was some kind of wasting disease, but...' She breaks down sobbing. 'Pete was strong as an ox. He didn't just waste away. Something killed him.'",
            next: "thomas_examination"
        },

        // Scene 13: Thomas's Examination
        thomas_examination: {
            speaker: "Thomas Whitmore",
            text: "'Mrs. Peterson, I need to ask some difficult questions. What was Pete drinking in the days before he got sick? Where did your water come from?'",
            next: "martha_reveals_details"
        },

        // Scene 14: Martha Reveals Details
        martha_reveals_details: {
            speaker: "Martha Peterson",
            text: "'We had our own well, but it went bad about a week before Pete got sick. Tasted strange, smelled worse. We had to start getting water from the town well. That's when the sickness started.'",
            next: "thomas_water_sample"
        },

        // Scene 15: Thomas Takes Water Sample
        thomas_water_sample: {
            speaker: "Thomas Whitmore",
            text: "'Mrs. Peterson, I'd like to test your well water. If there's something in it that made Pete sick, we need to know what it is.' He carefully collects a sample in a glass vial.",
            next: "billy_livery_visit"
        },

        // Scene 16: Visiting Billy at the Livery
        billy_livery_visit: {
            speaker: "Narrator",
            text: "Their next stop is the livery stable, where young Billy Thompson tends to the town's remaining horses despite his injured leg. The boy can't be more than sixteen, but his eyes carry the weight of someone much older.",
            next: "billy_injury_examination"
        },

        // Scene 17: Examining Billy's Injury
        billy_injury_examination: {
            speaker: "Thomas Whitmore",
            text: "'Let me look at that leg, son. Mrs. Henderson says it's not healing properly.' As he unwraps the dirty bandages, Thomas's expression grows concerned. 'This infection is serious. How did this happen?'",
            next: "billy_explains_injury"
        },

        // Scene 18: Billy Explains His Injury
        billy_explains_injury: {
            speaker: "Billy Thompson",
            text: "'Horse kicked me when I was shoeing him. But that's not the strange part, Doc. The horse had never been mean before. Started acting crazy after drinking from the trough. Lost three horses that way before I stopped using well water.'",
            next: "thomas_treats_billy"
        },

        // Scene 19: Thomas Treats Billy
        thomas_treats_billy: {
            speaker: "Thomas Whitmore",
            text: "'I'm going to clean this wound properly and give you fresh bandages. But Billy, I need you to stay away from any water that tastes or smells strange. Promise me.'",
            next: "elijah_community_building"
        },

        // Scene 20: Elijah's Community Building
        elijah_community_building: {
            speaker: "Narrator",
            text: "While Thomas makes his medical rounds, Elijah walks through the residential areas, stopping to talk with anyone willing to listen. His clerical collar opens doors that might otherwise remain closed to strangers.",
            next: "elijah_meets_family"
        },

        // Scene 21: Elijah Meets the Mitchell Family
        elijah_meets_family: {
            speaker: "Sarah Mitchell",
            text: "The woman Jeremiah mentioned at the store looks up from her small garden. 'You're the preacher staying at Henderson's. Heard you asking questions about the troubles. Most folks are too scared to talk.'",
            next: "elijah_offers_hope"
        },

        // Scene 22: Elijah Offers Hope
        elijah_offers_hope: {
            speaker: "Elijah Cross",
            text: "'Mrs. Mitchell, I know things have been hard. But I've seen communities pull together in the darkest times. Sometimes all it takes is someone willing to take the first step.'",
            choices: [
                {
                    text: "Ask her to help organize the community",
                    next: "community_organization_request"
                },
                {
                    text: "Offer practical help with her family's needs",
                    next: "practical_help_offer"
                }
            ]
        },

        // Scene 23a: Community Organization Request
        community_organization_request: {
            speaker: "Elijah Cross",
            text: "'If families like yours could start talking to each other, sharing resources, watching out for one another—that's how communities survive difficult times.'",
            next: "sarah_responds"
        },

        // Scene 23b: Practical Help Offer
        practical_help_offer: {
            speaker: "Elijah Cross",
            text: "'My friend Dr. Whitmore is making medical rounds. If your children need attention, or if you need help with anything else, we're here to help.'",
            next: "sarah_responds"
        },

        // Scene 24: Sarah Responds
        sarah_responds: {
            speaker: "Sarah Mitchell",
            text: "'You talk about community, but Cross has eyes everywhere. My husband worked for him at the mine. Said Cross keeps lists of who talks to who, who causes trouble. People who get on those lists... they have accidents.'",
            next: "maria_intelligence_gathering"
        },

        // Scene 25: Maria's Intelligence Gathering
        maria_intelligence_gathering: {
            speaker: "Narrator",
            text: "Maria takes a different approach, positioning herself where she can observe Cross's operations without being seen. From a vantage point behind the abandoned bank building, she watches the comings and goings at the saloon.",
            next: "observing_cross_men"
        },

        // Scene 26: Observing Cross's Men
        observing_cross_men: {
            speaker: "Narrator",
            text: "Three rough-looking men enter and exit the saloon at regular intervals, clearly reporting to someone inside. Maria notes their weapons, their horses, their routines. Information that could prove valuable in any confrontation.",
            next: "deputy_morrison_appearance"
        },

        // Scene 27: Deputy Morrison Appears
        deputy_morrison_appearance: {
            speaker: "Narrator",
            text: "Deputy Pete Morrison emerges from the saloon, his badge catching the afternoon sun. But instead of patrolling the town, he heads straight for Cross's temporary office in the old bank building. The corruption is blatant.",
            next: "jacob_elder_conversations"
        },

        // Scene 28: Jacob's Conversations with Elders
        jacob_elder_conversations: {
            speaker: "Narrator",
            text: "Jacob seeks out the town's older residents, people who remember Perdition in better days. His youth and earnestness opens doors that might remain closed to the others, and his questions about the town's history yield valuable insights.",
            next: "walter_hayes_stories"
        },

        // Scene 29: Walter Hayes's Stories
        walter_hayes_stories: {
            speaker: "Walter Hayes",
            text: "'This town was built by good people seeking honest lives. My own father helped lay the cornerstone of that church Cross burned down. We had laws here, real laws, before Cross bought himself a deputy.'",
            next: "jacob_asks_about_resistance"
        },

        // Scene 30: Jacob Asks About Resistance
        jacob_asks_about_resistance: {
            speaker: "Jacob Rivers",
            text: "'Mr. Hayes, if enough people stood together, could Cross really stop all of them? There's got to be more honest folks than corrupt ones in Perdition.'",
            next: "walter_reveals_past_attempt"
        },

        // Scene 31: Walter Reveals Past Attempt
        walter_reveals_past_attempt: {
            speaker: "Walter Hayes",
            text: "'We tried once, about six months ago. Got twelve families together, agreed to refuse Cross's offers and support each other. Within a week, three of those families had 'accidents.' The rest got scared and scattered.'",
            next: "late_afternoon_convergence"
        },

        // Scene 32: Late Afternoon Convergence
        late_afternoon_convergence: {
            speaker: "Narrator",
            text: "As the afternoon wears on, the four companions begin to converge back toward the boarding house, each carrying new information and a deeper understanding of the challenges they face in liberating Perdition from Cross's grip.",
            next: "cross_makes_move"
        },

        // Scene 33: Cross Makes His Move
        cross_makes_move: {
            speaker: "Narrator",
            text: "But Cross hasn't been idle either. As the companions reunite, they see smoke rising from the direction of Martha Peterson's house. The message is clear—Cross knows they've been asking questions, and he's responding with characteristic brutality.",
            next: "rushing_to_fire"
        },

        // Scene 34: Rushing to the Fire
        rushing_to_fire: {
            speaker: "Narrator",
            text: "The four companions run toward the smoke, joined by other townspeople who emerge from their homes despite their fear. Martha Peterson's small house is engulfed in flames, and there's no sign of the widow.",
            next: "searching_for_martha"
        },

        // Scene 35: Searching for Martha
        searching_for_martha: {
            speaker: "Thomas Whitmore",
            text: "'Martha! Mrs. Peterson!' Thomas calls out desperately, but the roar of the flames drowns out any possible response. The fire is too intense, too well-established to be accidental.",
            next: "deputy_morrison_arrives"
        },

        // Scene 36: Deputy Morrison Arrives
        deputy_morrison_arrives: {
            speaker: "Deputy Morrison",
            text: "'Nothing to see here, folks. Old house, bad chimney. These things happen.' His tone is dismissive, but his eyes scan the crowd, noting who's present and who's showing concern for Martha.",
            next: "elijah_confronts_deputy"
        },

        // Scene 37: Elijah Confronts the Deputy
        elijah_confronts_deputy: {
            speaker: "Elijah Cross",
            text: "'Deputy, where is Mrs. Peterson? Shouldn't you be searching for survivors rather than making excuses?' There's steel in Elijah's voice, the authority of a man accustomed to moral leadership.",
            next: "deputy_threatens"
        },

        // Scene 38: Deputy Threatens
        deputy_threatens: {
            speaker: "Deputy Morrison",
            text: "'I'd be careful asking too many questions, preacher. This town's dangerous for folks who don't mind their own business. Just ask Sheriff Bradley... oh wait, you can't.'",
            next: "crowd_reaction"
        },

        // Scene 39: Crowd Reaction
        crowd_reaction: {
            speaker: "Narrator",
            text: "A murmur runs through the gathered townspeople. The deputy's callous reference to Bradley's murder is too blatant to ignore, even for those too frightened to speak out. Seeds of anger are being planted.",
            choices: [
                {
                    text: "Challenge the deputy's authority publicly",
                    next: "public_challenge"
                },
                {
                    text: "Focus on finding Martha Peterson",
                    next: "search_for_martha"
                }
            ]
        },

        // Scene 40a: Public Challenge
        public_challenge: {
            speaker: "Maria Vasquez",
            text: "'Funny how these 'accidents' keep happening to people who won't sell to Cross. Maybe it's time this town had real law enforcement instead of bought-and-paid-for thugs.'",
            next: "tension_escalates"
        },

        // Scene 40b: Search for Martha
        search_for_martha: {
            speaker: "Jacob Rivers",
            text: "'We need to search the area. Mrs. Peterson might have escaped, might be hiding somewhere. We can't just assume the worst.'",
            next: "finding_martha"
        },

        // Scene 41: Tension Escalates / Finding Martha
        tension_escalates: {
            speaker: "Deputy Morrison",
            text: "'That sounds like fighting words, lady. Maybe you and your friends need to cool off in jail for disturbing the peace.'",
            next: "standoff_begins"
        },

        finding_martha: {
            speaker: "Narrator",
            text: "A search of the nearby area reveals Martha Peterson hiding behind the old water trough, shaken but alive. 'They came for me,' she whispers. 'Said I talked too much to the doctor.'",
            next: "standoff_begins"
        },

        // Scene 42: Standoff Begins
        standoff_begins: {
            speaker: "Narrator",
            text: "Whether through public confrontation or the discovery of Martha Peterson, the afternoon has crystallized into a moment of choice. The townspeople watch as their future hangs in the balance between Cross's corruption and the newcomers' defiance.",
            next: "walter_hayes_steps_forward"
        },

        // Scene 43: Walter Hayes Steps Forward
        walter_hayes_steps_forward: {
            speaker: "Walter Hayes",
            text: "'I've lived in this town for forty years, Deputy. I remember when the badge meant something. When lawmen protected people instead of threatening them.' The old man's voice carries surprising strength.",
            next: "other_voices_join"
        },

        // Scene 44: Other Voices Join
        other_voices_join: {
            speaker: "Sarah Mitchell",
            text: "'My husband worked for Cross at the mine. He told me what really goes on there—the threats, the intimidation, the accidents that aren't accidents.' More voices murmur agreement from the crowd.",
            next: "deputy_outnumbered"
        },

        // Scene 45: Deputy Outnumbered
        deputy_outnumbered: {
            speaker: "Deputy Morrison",
            text: "'You folks are making a mistake. Cross won't stand for this kind of insubordination. He's got more men coming to town tonight.' His confidence wavers as he realizes the crowd's mood has shifted.",
            next: "elijah_rallies_crowd"
        },

        // Scene 46: Elijah Rallies the Crowd
        elijah_rallies_crowd: {
            speaker: "Elijah Cross",
            text: "'Then we'd better be ready for them. This is our town, our home. We don't have to live in fear anymore. We can stand together, protect each other, rebuild what Cross has tried to destroy.'",
            next: "community_awakening"
        },

        // Scene 47: Community Awakening
        community_awakening: {
            speaker: "Narrator",
            text: "Something fundamental shifts in the crowd. Years of accumulated fear and anger crystallize into determination. Perdition's people are remembering what it means to be a community, and they're finding their courage.",
            next: "cross_arrives"
        },

        // Scene 48: Cross Arrives
        cross_arrives: {
            speaker: "Silas Cross",
            text: "'What's all this commotion about?' Cross emerges from the crowd, flanked by armed men. His smile is cold as winter. 'I heard there was some kind of disturbance. Deputy Morrison, are these people causing trouble?'",
            next: "final_confrontation_setup"
        },

        // Scene 49: Final Confrontation Setup
        final_confrontation_setup: {
            speaker: "Narrator",
            text: "The moment of truth has arrived. Cross stands before the gathered townspeople with his hired guns, while the four companions stand with a community that has finally found its voice. Lines have been drawn in the dust of Perdition's main street.",
            next: "chapter_conclusion"
        },

        // Scene 50: Chapter Conclusion
        chapter_conclusion: {
            speaker: "Elijah Cross",
            text: "'Mr. Cross, your reign of terror in Perdition is over. These people aren't afraid anymore. They know the truth about Sheriff Bradley's murder, about the poisoned wells, about your systematic destruction of their community. And they're ready to fight back.'",
            choices: [
                {
                    text: "Continue to Chapter 6",
                    next: null,
                    nextChapter: "chapter6"
                }
            ]
        }
    }
};