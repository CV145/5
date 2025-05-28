// Chapter 6: New Alliances
storyData.chapter6 = {
    name: "Chapter 6",
    title: "New Alliances",
    scenes: {
        start: {
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 6');
                let endingType = getStoryVariable('storyVariables.final_ending_type');
                let C5flags = getStoryVariable('flags.chapter5_flags') || {};
                let nextScene = "start_generic_aftermath";

                if (endingType === 'Sacrifice') {
                    nextScene = "start_after_sacrifice";
                } else if (endingType === 'Redemption') {
                    if (C5flags.c5_outcome_silas_redeemed_together && getStoryVariable('flags.forgave_silas_chapter5')) {
                        nextScene = "start_after_redemption_silas_redeemed";
                    } else {
                        nextScene = "start_after_redemption_silas_uncertain";
                    }
                } else if (endingType === 'Unity') {
                    nextScene = "start_after_unity";
                } else if (endingType === 'Transformation') {
                    nextScene = "start_after_transformation";
                }
                
                // Use setTimeout to redirect after the current scene loads
                setTimeout(() => {
                    if (typeof game !== 'undefined' && game.loadScene) {
                        game.loadScene('chapter6', nextScene);
                    }
                }, 100);
            },
            text: "Loading Chapter 6...",
            next: "start_generic_aftermath" // Fallback if redirect fails
        },
        
        start_after_sacrifice: {
            speaker: "Narrator",
            text: "In the wake of Elijah's sacrifice, Perdition mourns a hero but finds a fragile new hope. The immediate crisis is over, but his absence leaves a void. The townsfolk speak his name in hushed, reverent tones. The remaining three – Maria, Thomas, and Jacob – must now carry the weight of his legacy and the town's future.",
            next: "council_meeting_prep"
        },
        
        start_after_redemption_silas_redeemed: {
            speaker: "Narrator",
            text: "With Silas finding redemption alongside Elijah and the Hungry Dark quelled, Perdition begins to heal. The Cross brothers, once symbols of division, now represent a complex hope. Silas, though weakened and changed, works with the group, his knowledge invaluable, his presence a constant reminder of the thin line between damnation and grace.",
            next: "council_meeting_prep"
        },
        
        start_after_redemption_silas_uncertain: {
            speaker: "Narrator",
            text: "Though Silas aided in stopping the Hungry Dark, his ultimate fate and the town's trust in him remain points of contention. Perdition is saved, but the air is thick with unspoken questions about the surviving Cross brother. Elijah and the group must navigate this uneasy peace carefully.",
            next: "council_meeting_prep"
        },
        
        start_after_unity: {
            speaker: "Narrator",
            text: "The hard-won unity against the Hungry Dark holds, for now. Cartel remnants, gang members, and townsfolk eye each other with a wary respect born of shared trauma. Perdition is saved, but this new peace is a delicate seedling in scorched earth, needing careful cultivation by Elijah and his companions.",
            next: "council_meeting_prep"
        },
        
        start_after_transformation: {
            speaker: "Narrator",
            text: "Perdition is safe, now watched over by the transformed Hungry Dark – a guardian entity whose motives remain as alien as its previous hunger. The town is uneasy, trying to understand if this new protector is a blessing or merely a different kind of leash. Elijah and the group are the de facto interpreters of its silent vigil.",
            next: "council_meeting_prep"
        },
        
        start_generic_aftermath: {
            speaker: "Narrator",
            text: "The days immediately following the confrontation with the Hungry Dark are a blur of activity and uneasy quiet. Perdition is saved, but the cost is etched on every face and every damaged building. Elijah and his companions survey the aftermath, knowing the fight for Perdition's soul is far from over.",
            next: "council_meeting_prep"
        },
        
        council_meeting_prep: {
            speaker: "Narrator",
            text: "A week later, a council of sorts is to be held. Representatives from the town, what remains of the Valdez interests, and the Rivers gang have agreed to meet. Your group is central to brokering this fragile peace.",
            choices: [
                {
                    text: "Prepare your arguments for unity.",
                    next: "prepare_unity_speech",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_prepared_unity_speech', true); }
                },
                {
                    text: "Scout the meeting location for potential threats.",
                    next: "scout_meeting_location",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_scouted_location', true); }
                },
                {
                    text: "Speak with key faction members beforehand.",
                    next: "pre_council_talks",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_held_pre_talks', true); }
                }
            ]
        },
        
        prepare_unity_speech: {
            speaker: "Elijah",
            text: "You spend hours refining your points, hoping to appeal to the shared desire for survival and prosperity, even among bitter enemies. Thomas helps you consider different perspectives while Jacob provides insights into gang mentality.",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                    this.text = "Maria spends hours refining arguments for unity, hoping to appeal to the shared desire for survival. Thomas helps consider different perspectives while Jacob provides insights into gang mentality.";
                }
            },
            next: "council_begins"
        },
        
        scout_meeting_location: {
            speaker: "Maria",
            text: "Maria joins you in scouting the chosen meeting spot - the town's half-repaired church. She points out potential ambush points and escape routes. \"Hope for peace,\" she murmurs, \"but always be ready for war.\"",
            next: "council_begins"
        },
        
        pre_council_talks: {
            speaker: "Thomas",
            text: "Thomas, with his surprisingly diplomatic demeanor, proves invaluable in sounding out the faction leaders before the official meeting. He reports back that both sides are wary but genuinely tired of bloodshed.",
            next: "council_begins"
        },
        
        council_begins: {
            speaker: "Narrator",
            text: "The church is crowded. Townsfolk fill the pews, their faces a mix of hope and fear. At the altar, now a makeshift table, sit the key players: a stern-faced woman representing the Valdez interests, Samuel Rivers (looking older and more tired), and Elder Hayes, Perdition's unofficial mayor. Your group stands as mediators.",
            next: "valdez_opening_statement"
        },
        
        valdez_opening_statement: {
            speaker: "Isabella Valdez",
            text: "\"Let us be clear. We are here because too many have died. My family... has paid a heavy price. We seek not vengeance for the past madness, but security for our future. Perdition sits on a valuable trade route. We can all prosper, or we can all bleed out in this dust.\"",
            next: "rivers_response"
        },
        
        rivers_response: {
            speaker: "Samuel Rivers",
            text: "\"Prosperity?\" Samuel Rivers scoffs, his hand never far from his gun. \"This town owes us. My men died fighting that... thing. We ain't leaving empty-handed. But more war? Even I'm getting tired of burying my kin.\"",
            next: "elder_hayes_plea"
        },
        
        elder_hayes_plea: {
            speaker: "Elder Hayes",
            text: "\"Friends, please!\" Elder Hayes, a man whose face is a roadmap of Perdition's hardships, raises his trembling hands. \"This town has suffered enough. We need peace to rebuild. We need your strength, not your strife. We offer... cooperation. Fair trade. A new beginning for all of us, under the eyes of God and whatever spirits watch over this cursed, blessed land.\"",
            next: "player_mediation_choice"
        },
        
        player_mediation_choice: {
            speaker: "Narrator",
            text: "All eyes turn to your group. This is the moment to steer Perdition towards a new dawn or watch it collapse back into violence.",
            choices: [
                {
                    text: "Appeal for a unified Perdition, with shared responsibilities.",
                    next: "propose_unity_pact",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_proposed_unity_pact', true); }
                },
                {
                    text: "Suggest a pragmatic truce: separate territories, enforced peace.",
                    next: "propose_territorial_truce",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_proposed_territorial_truce', true); }
                },
                {
                    text: "Warn them: unite against external threats, or be destroyed piecemeal.",
                    next: "warn_external_threats",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_warned_external_threats', true); }
                }
            ]
        },
        
        propose_unity_pact: {
            speaker: "Elijah",
            text: "\"Perdition can be more than just a stop on the road. It can be a sanctuary, a place of true community. But only if we share the burden of its defense and the fruits of its prosperity. A council, with representatives from each group, ensuring fairness. Shared patrols. A new charter for a new Perdition.\"",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "faction_reactions"
        },
        
        propose_territorial_truce: {
            speaker: "Thomas",
            text: "\"Perhaps full unity is too much to ask for, too soon. But we can draw lines. The Valdez interests manage trade east, the Rivers clan handles routes west. The town itself... neutral ground, policed jointly. Clear boundaries, clear consequences for breaking them. A hard peace, but peace nonetheless.\"",
            next: "faction_reactions"
        },
        
        warn_external_threats: {
            speaker: "Maria",
            text: "\"What we faced... it may not be the only horror in these lands. And word of Perdition's troubles will travel. The vultures will circle – not just bandits, but powers that would see us all enslaved or erased. If we don't stand together, at least in defense, we stand for nothing and will fall alone.\"",
            next: "faction_reactions"
        },
        
        faction_reactions: {
            speaker: "Narrator",
            text: "The faction leaders consider your proposal. Isabella Valdez looks thoughtful, Samuel Rivers grudgingly nods, and Elder Hayes clasps his hands in prayer. The discussion is tense but avoids open hostility. A fragile agreement begins to form, documented on paper.",
            next: "federal_agent_arrival_subtle"
        },
        
        federal_agent_arrival_subtle: {
            speaker: "Narrator",
            text: "As the meeting concludes and parchments are signed, a lone rider approaches Perdition. Dressed in unremarkable traveler's clothes, he asks for lodging and observes the town with an unnervingly keen gaze. He introduces himself as Mr. Smith, a 'historian' interested in local events.",
            next: "agent_observes"
        },
        
        agent_observes: {
            speaker: "Narrator",
            text: "Mr. Smith spends the next few days quietly talking to townsfolk, taking notes, and paying particular attention to your group. He asks pointed questions about the 'recent disturbances' and the 'unusual weather patterns.'",
            choices: [
                {
                    text: "Offer him a carefully edited version of events.",
                    next: "agent_partial_truth",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_agent_told_partial_truth', true); }
                },
                {
                    text: "Be open about the supernatural, gauging his reaction.",
                    next: "agent_full_truth",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_agent_told_full_truth', true); }
                },
                {
                    text: "Avoid him and warn the others to be cautious.",
                    next: "agent_avoidance",
                    onChoose: function() { updateStoryVariable('flags.chapter6_flags.c6_agent_avoided', true); }
                }
            ]
        },
        
        agent_partial_truth: {
            speaker: "Elijah",
            text: "\"We had a severe bandit problem, Mr. Smith, coupled with a... peculiar storm. Caused a lot of damage and fear. But the town pulled together. We're rebuilding now.\" You omit the more unbelievable details.",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "agent_departs_or_reveals"
        },
        
        agent_full_truth: {
            speaker: "Elijah",
            text: "\"Mr. Smith, what happened here was beyond bandits. We faced something... unnatural. A darkness that fed on this town's pain. We stood against it, and by some miracle, we survived.\" You watch him carefully.",
            onEnter: function() {
                if (getStoryVariable('storyVariables.final_ending_type') === 'Sacrifice') {
                    this.speaker = "Maria";
                }
            },
            next: "agent_departs_or_reveals"
        },
        
        agent_avoidance: {
            speaker: "Maria",
            text: "\"That man asks too many questions. And his eyes don't match his story. Keep your distance. I don't like him.\" The group becomes more guarded.",
            next: "agent_departs_or_reveals"
        },
        
        agent_departs_or_reveals: {
            speaker: "Narrator",
            text: "A few days later, Mr. Smith departs as quietly as he arrived, leaving behind a lingering sense of unease and unanswered questions.",
            onEnter: function() {
                let C6flags = getStoryVariable('flags.chapter6_flags') || {};
                if (C6flags.c6_agent_told_full_truth && (getStoryVariable('flags.unity_vs_division_meter') > 2 || getStoryVariable('flags.chapter5_flags.c5_outcome_unity_victory'))) {
                    this.text = "Mr. Smith nods slowly after your full account. Before leaving, he discreetly shows you a U.S. Marshal's badge. \"Washington is taking an interest in these... anomalies. You haven't heard the last of us. Be prepared.\"";
                    updateStoryVariable('flags.chapter6_flags.c6_federal_interest_known', true);
                }
            },
            next: "chapter_end"
        },
        
        chapter_end: {
            speaker: "Narrator",
            text: "The fragile peace treaty signed in Perdition's church represents a new beginning, but you know it's only the start. The strange events that brought your group together seem to be spreading beyond this small town. As Mr. Smith's departure reminds you, the world is taking notice of what happened here. Whatever comes next, Perdition now stands as a beacon of unity in a region plagued by conflict - and perhaps something far worse than human enemies.",
            choices: [
                {
                    text: "Continue to Chapter 7",
                    next: null,
                    nextChapter: "chapter7",
                    onChoose: function() { updateStoryVariable('currentChapter', 'Chapter 7'); }
                }
            ]
        }
    }
}; 