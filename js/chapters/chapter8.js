// Chapter 8: Four Roads Diverge (Linear Version - 100 scenes)
storyData.chapter8 = {
    name: "Chapter 8",
    title: "Four Roads Diverge",
    scenes: {
        // Opening Scene
        start: {
            speaker: "Narrator",
            text: "Six months have passed since the fellowship shattered. Four souls who once stood together now walk alone, each carrying the weight of their choices. In Perdition and beyond, their separate paths wind through darkness, occasionally crossing but never quite meeting. This is where their individual stories truly begin.",
            next: "maria_opening"
        },

        // MARIA'S STORYLINE (Scenes 2-26)
        maria_opening: {
            speaker: "Narrator",
            text: "The mining compound at dawn. Maria Vasquez stands on the watchtower, surveying her domain. Chief of Security now, with a team of twenty men under her command. The title came with blood on her hands and ice in her heart. She's good at her job. Too good.",
            next: "maria_morning_report"
        },

        maria_morning_report: {
            speaker: "Lieutenant Morrison",
            text: "'Morning report, Chief. Caught three workers trying to organize again. They're in the detention building. Also, the new owners arrive today from Chicago. They want a full security briefing.'",
            next: "maria_efficiency"
        },

        maria_efficiency: {
            speaker: "Maria Vasquez",
            text: "'Have the organizers processed and expelled from company property. If they return, break something that won't heal right. As for the owners...' She pauses, checking her weapons. 'Set up the briefing for noon. Full display of our capabilities.'",
            next: "maria_inspection"
        },

        maria_inspection: {
            speaker: "Narrator",
            text: "Maria walks through the compound, noting every detail. Her men fear her more than respect her, which suits her fine. Fear is reliable. Respect can waver. She stops at the detention building, hearing muffled sounds from within.",
            next: "maria_detained_workers"
        },

        maria_detained_workers: {
            speaker: "Detained Worker",
            text: "'Please, we just wanted fair wages. My children are hungry—' The man's plea is cut short by one of Maria's men backhanding him. Maria watches impassively.",
            next: "maria_cold_orders"
        },

        maria_cold_orders: {
            speaker: "Maria Vasquez",
            text: "'Fair wages aren't my concern. Order is. You disrupted operations. Actions have consequences.' She nods to her men. 'Put them on the next wagon out. If I see them again, they won't leave vertical.'",
            next: "maria_owners_arrive"
        },

        maria_owners_arrive: {
            speaker: "Narrator",
            text: "A luxurious carriage arrives at noon, incongruous against the dusty mining camp. Three men in expensive suits emerge, led by William Thornbury—young, ambitious, and radiating the casual cruelty of inherited wealth.",
            next: "maria_thornbury_introduction"
        },

        maria_thornbury_introduction: {
            speaker: "William Thornbury",
            text: "'So you're the famous Maria Vasquez. I've heard impressive things. They say you've reduced work stoppages by eighty percent.' His smile doesn't reach his eyes. 'I hope you can do even better.'",
            next: "maria_briefing"
        },

        maria_briefing: {
            speaker: "Maria Vasquez",
            text: "'My methods are simple and effective. Swift punishment for infractions, rewards for compliance, and absolute surveillance. I have informants in every work crew. Trouble rarely has time to spread.'",
            next: "maria_demonstration"
        },

        maria_demonstration: {
            speaker: "Narrator",
            text: "As if on cue, a commotion erupts near the mine entrance. A worker refuses to enter, claiming unsafe conditions. Maria's men look to her, and she sees an opportunity to demonstrate her effectiveness to the new owners.",
            next: "maria_harsh_example"
        },

        maria_harsh_example: {
            speaker: "Maria Vasquez",
            text: "Without a word, Maria strides to the protesting worker. One swift motion—her boot to his knee. The crack echoes across the compound. As the man screams, she addresses the watching workers: 'The mine is safe because I say it is. Questions?'",
            next: "maria_owners_impressed"
        },

        maria_owners_impressed: {
            speaker: "William Thornbury",
            text: "'Excellent. Though I wonder... might there be more permanent solutions to our labor problems? The consortium has developed certain... strategies at our other operations.'",
            next: "maria_darker_proposition"
        },

        maria_darker_proposition: {
            speaker: "William Thornbury",
            text: "'There's going to be an accident soon. A terrible tragedy in the eastern shaft. Gas leak, perhaps. Or a support beam failure. We'll need someone to ensure the right people are working that shift. Troublemakers, union sympathizers...'",
            next: "maria_realization"
        },

        maria_realization: {
            speaker: "Narrator",
            text: "Even Maria, hardened as she is, feels a chill. This isn't about maintaining order anymore. This is murder, calculated and corporate. She keeps her expression neutral, but something stirs in the ice around her heart.",
            next: "maria_dangerous_knowledge"
        },

        maria_dangerous_knowledge: {
            speaker: "Maria Vasquez",
            text: "'I understand. You'll have a list of recommended shift assignments by week's end.' Her voice remains steady, professional. But her mind races. This is a line even she hasn't crossed. Mass murder for profit.",
            next: "maria_private_investigation"
        },

        maria_private_investigation: {
            speaker: "Narrator",
            text: "That night, Maria begins her own investigation. Using her security clearance, she accesses company files. What she finds makes her stomach turn—this isn't the first 'accident' the consortium has orchestrated. There's a pattern across multiple states.",
            next: "maria_evidence_gathering"
        },

        maria_evidence_gathering: {
            speaker: "Maria Vasquez",
            text: "She photographs documents, creates copies, builds a file. Old instincts from her cartel days serve her well. Information is power, and power might be the only thing that keeps her alive if she refuses to comply.",
            next: "maria_unexpected_visitor"
        },

        maria_unexpected_visitor: {
            speaker: "Rosa Morales",
            text: "'Don't reach for your gun, Vasquez.' A woman emerges from the shadows of Maria's office. 'I'm Rosa Morales, and I think we have a common problem. You're not the only one who's noticed the consortium's plans.'",
            next: "maria_union_leader"
        },

        maria_union_leader: {
            speaker: "Maria Vasquez",
            text: "'You're the union organizer. I should shoot you where you stand.' But Maria doesn't move. 'How did you get past my security?'",
            next: "maria_uncomfortable_alliance"
        },

        maria_uncomfortable_alliance: {
            speaker: "Rosa Morales",
            text: "'Your security includes people with families in those mines. They know what's coming. The question is: are you going to help orchestrate a massacre, or are you going to help me stop it?'",
            next: "maria_moral_crossroads"
        },

        maria_moral_crossroads: {
            speaker: "Narrator",
            text: "Maria stares at the union leader—everything she's paid to destroy. But the weight of the planned murders presses down on her. She thinks of the children who'll lose fathers, the wives who'll become widows. When did she start caring again?",
            choices: [
                {
                    text: "Consider Rosa's proposal",
                    next: "maria_considers_alliance"
                },
                {
                    text: "Maintain professional distance",
                    next: "maria_stays_cautious"
                }
            ]
        },

        maria_considers_alliance: {
            speaker: "Maria Vasquez",
            text: "'I'm listening. But understand this—I'm not doing this for your cause. If there's a way to prevent this without destroying my position, I'll consider it. Otherwise, you're on your own.'",
            next: "maria_information_exchange"
        },

        maria_stays_cautious: {
            speaker: "Maria Vasquez",
            text: "'Get out. Whatever you think you know, you're wrong. I do my job, nothing more.' But she doesn't call for security, and Rosa notices.",
            next: "maria_information_exchange"
        },

        maria_information_exchange: {
            speaker: "Rosa Morales",
            text: "'I have people inside the consortium's Chicago office. We know about their plans for multiple sites. This isn't just about Perdition. They're going to use these 'accidents' to justify bringing in federal troops, breaking unions across the frontier.'",
            next: "maria_bigger_picture"
        },

        maria_bigger_picture: {
            speaker: "Narrator",
            text: "Maria realizes she's stumbled into something far larger than one mining camp. The consortium isn't just exploiting workers—they're orchestrating a corporate takeover of the entire western frontier, using blood as their ink to rewrite laws.",
            next: "maria_decision_point"
        },

        maria_decision_point: {
            speaker: "Maria Vasquez",
            text: "'I need time. The owners expect that list by week's end. Give me three days to figure out a way to prevent this without getting us all killed. And Morales? If this is a trap, I'll personally ensure you don't live to regret it.'",
            next: "thomas_opening"
        },

        // THOMAS'S STORYLINE (Scenes 27-51)
        thomas_opening: {
            speaker: "Narrator",
            text: "The Company Clinic reeks of carbolic acid and despair. Thomas Whitmore sits at his desk, hands trembling as he reviews patient files. Each one stamped with payment status: APPROVED or DENIED. He doesn't need to look to know which pile is larger.",
            next: "thomas_morning_drink"
        },

        thomas_morning_drink: {
            speaker: "Thomas Whitmore",
            text: "The whiskey burns, but not enough to wash away the taste of compromise. He's saved more lives in six months than in his previous five years—but only the lives that could pay. The others... he tries not to think about the others.",
            next: "thomas_nurse_announcement"
        },

        thomas_nurse_announcement: {
            speaker: "Nurse Catherine",
            text: "'Doctor, there's a situation. The Garrett family is here again. Their youngest is worse. I know they're on the denied list, but the child is dying. Maybe if you could just look—'",
            next: "thomas_painful_denial"
        },

        thomas_painful_denial: {
            speaker: "Thomas Whitmore",
            text: "'Company policy is clear, Catherine. No payment, no treatment. Send them to the charity ward in Silver Creek.' His voice is steady, but his hands shake worse. He knows there is no charity ward. Not anymore.",
            next: "thomas_haunted_morning"
        },

        thomas_haunted_morning: {
            speaker: "Narrator",
            text: "Through his office window, Thomas watches the Garrett family leave, the father carrying his fevered daughter. The same child he could save with basic antibiotics sitting in his locked cabinet. Company property, for approved patients only.",
            next: "thomas_company_inspection"
        },

        thomas_company_inspection: {
            speaker: "Mr. Fitzgerald",
            text: "'Excellent compliance rates, Doctor Whitmore. Profit margins are up twelve percent since you took over. The board is pleased. Though we've noticed some inventory discrepancies. Medicine going missing?'",
            next: "thomas_covering_tracks"
        },

        thomas_covering_tracks: {
            speaker: "Thomas Whitmore",
            text: "'Minor breakage and spoilage. I've already adjusted the protocols to prevent future losses.' He lies smoothly, not mentioning his midnight visits to the poor quarter, the medicine he's been stealing for those who can't pay.",
            next: "thomas_fitzgerald_warning"
        },

        thomas_fitzgerald_warning: {
            speaker: "Mr. Fitzgerald",
            text: "'See that you do. The consortium has a zero-tolerance policy for theft. Even from employees. Especially from employees who might be tempted by... misguided compassion.'",
            next: "thomas_new_symptoms"
        },

        thomas_new_symptoms: {
            speaker: "Narrator",
            text: "After Fitzgerald leaves, Thomas reviews a disturbing pattern in his files. Children of known union organizers all presenting similar symptoms: muscle weakness, cognitive decline, organ failure. Too consistent to be coincidence.",
            next: "thomas_investigation_begins"
        },

        thomas_investigation_begins: {
            speaker: "Thomas Whitmore",
            text: "He pulls water samples from affected households, runs tests after hours. The results confirm his suspicions—targeted poisoning, something sophisticated. Not arsenic like Cross used. This is chemistry beyond frontier capabilities.",
            next: "thomas_catherine_conspiracy"
        },

        thomas_catherine_conspiracy: {
            speaker: "Nurse Catherine",
            text: "'Doctor, I know what you've been doing. The night visits. The missing medicine. I want to help. My brother's children are sick with the same symptoms. This isn't natural, is it?'",
            next: "thomas_reluctant_trust"
        },

        thomas_reluctant_trust: {
            speaker: "Thomas Whitmore",
            text: "'It's targeted poisoning. Specifically designed to affect children—slower metabolism makes them more vulnerable. Someone's using these families' own children as weapons against organizing efforts.'",
            next: "thomas_moral_awakening"
        },

        thomas_moral_awakening: {
            speaker: "Narrator",
            text: "For the first time in months, Thomas feels something beyond numbed compliance. Rage. Pure, clarifying rage. Using children as weapons crosses every line, violates every oath he ever took, drunk or sober.",
            next: "thomas_dangerous_decision"
        },

        thomas_dangerous_decision: {
            speaker: "Thomas Whitmore",
            text: "'Catherine, I need you to quietly identify all affected families. I'm going to synthesize an antidote. But we'll need to be careful. If the company realizes what we're doing...'",
            next: "thomas_fitzgerald_summons"
        },

        thomas_fitzgerald_summons: {
            speaker: "Mr. Fitzgerald",
            text: "'Doctor, the board has a special assignment for you. The mine owner's son has taken ill during his visit. You're to provide exclusive care. Drop everything else. This takes absolute priority.'",
            next: "thomas_ironic_patient"
        },

        thomas_ironic_patient: {
            speaker: "Narrator",
            text: "Thomas examines William Thornbury Jr., age seven. The boy presents with symptoms eerily similar to the poisoned children—an ironic twist that suggests someone else is playing a deeper game. The poisoner has made a mistake, or sent a message.",
            next: "thomas_treating_enemy"
        },

        thomas_treating_enemy: {
            speaker: "William Thornbury",
            text: "'You'll save him, won't you, Doctor? Whatever it takes. Money is no object. The best care possible.' The same man who ordered children poisoned now begs for his own child's life.",
            next: "thomas_moral_test"
        },

        thomas_moral_test: {
            speaker: "Narrator",
            text: "Thomas holds the boy's life in his shaking hands. He could let him die, claim the poisoning was too advanced. Poetic justice for a poisoner's son. Or he could save him, prove he's still a doctor despite everything.",
            next: "thomas_saves_child"
        },

        thomas_saves_child: {
            speaker: "Thomas Whitmore",
            text: "'I'll save him. But I'll need access to your private water supply for testing, and a full investigation of potential contamination sources.' He'll save the boy, but use the opportunity to gather evidence.",
            next: "thomas_evidence_access"
        },

        thomas_evidence_access: {
            speaker: "Narrator",
            text: "Treating the Thornbury boy gives Thomas unprecedented access to company facilities. He discovers shipping manifests, chemical requisitions, correspondence about 'population management strategies.' The conspiracy is vast, methodical, monstrous.",
            next: "thomas_catherine_plan"
        },

        thomas_catherine_plan: {
            speaker: "Nurse Catherine",
            text: "'Doctor, I've identified forty-three affected children. But we don't have enough antidote for all of them. And if we treat them openly, the company will know we've discovered their plan.'",
            next: "thomas_impossible_choice"
        },

        thomas_impossible_choice: {
            speaker: "Thomas Whitmore",
            text: "'Then we prioritize the worst cases and work in secret. Set up a hidden clinic in the old church basement. I'll steal what supplies I can. Some will die because we couldn't reach them in time, but we'll save who we can.'",
            next: "thomas_note_discovery"
        },

        thomas_note_discovery: {
            speaker: "Narrator",
            text: "While treating the Thornbury boy, Thomas finds a note in the father's jacket: 'The doctor knows. Solve the problem.' His blood runs cold. They're onto him. The only question is how much time he has left.",
            next: "jacob_opening"
        },

        // JACOB'S STORYLINE (Scenes 52-76)
        jacob_opening: {
            speaker: "Narrator",
            text: "The Rivers compound sprawls across the badlands like a cancer. Jacob Rivers stands beside his uncle, watching their men load crates of contraband. Six months ago, he wanted to be a hero. Now he's becoming what he once fought against—and he's disturbingly good at it.",
            next: "jacob_uncle_lesson"
        },

        jacob_uncle_lesson: {
            speaker: "Samuel Rivers",
            text: "'You've exceeded my expectations, nephew. That business with the Morrison farm—swift, efficient, minimal bloodshed. You're learning that fear is more useful than violence. Violence ends problems. Fear prevents them.'",
            next: "jacob_hollow_pride"
        },

        jacob_hollow_pride: {
            speaker: "Jacob Rivers",
            text: "'The Morrisons won't miss any more payments. Made sure the whole valley heard about what happens to those who do.' His voice is steady, professional. The idealistic boy is buried deep, smothered by practical necessity.",
            next: "jacob_new_assignment"
        },

        jacob_new_assignment: {
            speaker: "Samuel Rivers",
            text: "'I have a special project for you. We're expanding operations into Perdition. The chaos you and your friends created left a power vacuum. Time to fill it with something profitable. I want you to establish our distribution network there.'",
            next: "jacob_return_reluctance"
        },

        jacob_return_reluctance: {
            speaker: "Jacob Rivers",
            text: "'Perdition? Uncle, perhaps someone else would be better suited—' He can't finish. The thought of returning to where he was once a hero, now as a criminal, makes his chest tight.",
            next: "jacob_no_choice"
        },

        jacob_no_choice: {
            speaker: "Samuel Rivers",
            text: "'You know the town, the people. They trusted you once. That residual trust is valuable. Besides, this isn't a request. The family has invested too much in your education to waste it on sentiment.'",
            next: "jacob_preparation"
        },

        jacob_preparation: {
            speaker: "Narrator",
            text: "Jacob prepares for the journey with mechanical efficiency. Weapons cleaned, men selected, routes planned. But his hands pause over a small bundle—letters from Sarah Mitchell, the miner's wife who still believes he's worth saving.",
            next: "jacob_sarah_letters"
        },

        jacob_sarah_letters: {
            speaker: "Jacob Rivers",
            text: "Reading Sarah's latest letter: 'I know you're struggling with your choices. But I remember the young man who stood up to Cross. That person is still in there. Perdition needs hope, not more poison. Please come back to us, not to them.'",
            next: "jacob_conflicted_arrival"
        },

        jacob_conflicted_arrival: {
            speaker: "Narrator",
            text: "Arriving in Perdition at night, Jacob sees what six months of 'freedom' has brought. The town is worse than under Cross—multiple criminal factions fighting for control, honest folks caught in the crossfire. His uncle's drugs will be the final nail in the coffin.",
            next: "jacob_establishing_presence"
        },

        jacob_establishing_presence: {
            speaker: "Jacob Rivers",
            text: "'Spread the word quietly. The Rivers family offers protection and fair dealing. Anyone who works with us prospers. Anyone who opposes us...' He lets the threat hang. It's a speech he's given before, in other towns.",
            next: "jacob_unexpected_encounter"
        },

        jacob_unexpected_encounter: {
            speaker: "Sarah Mitchell",
            text: "'Jacob? Is it really you?' Sarah stands in the doorway of the saloon, her face a mix of hope and horror as she takes in his expensive clothes, the armed men at his back. 'What have you become?'",
            next: "jacob_painful_reunion"
        },

        jacob_painful_reunion: {
            speaker: "Jacob Rivers",
            text: "'Sarah. You shouldn't be here. This isn't... I'm here on business. Family business.' He can't meet her eyes. The disappointment in them cuts deeper than any blade.",
            next: "jacob_sarah_plea"
        },

        jacob_sarah_plea: {
            speaker: "Sarah Mitchell",
            text: "'Business? I know what kind of business your family does. Poison that enslaves men's souls. Is this really who you want to be? The boy who saved this town, now returning to destroy it?'",
            next: "jacob_cold_necessity"
        },

        jacob_cold_necessity: {
            speaker: "Jacob Rivers",
            text: "'That boy was naive. The world doesn't reward heroes, Sarah. It rewards survivors. I'm sorry you had to see me like this. Stay away from the saloon district. For your own safety.'",
            next: "jacob_lieutenant_report"
        },

        jacob_lieutenant_report: {
            speaker: "Rico Valdez",
            text: "'Boss, we've scouted the competition. Three gangs fighting for territory. Disorganized, poorly supplied. We can have this town locked down in a week. But there's something else—rumors about the mine owners planning something big.'",
            next: "jacob_intelligence_gathering"
        },

        jacob_intelligence_gathering: {
            speaker: "Jacob Rivers",
            text: "'Find out more about these plans. Information is currency. And set up a meeting with the strongest gang leader. Better to absorb competition than destroy it. Less messy, more profitable.'",
            next: "jacob_darker_discovery"
        },

        jacob_darker_discovery: {
            speaker: "Narrator",
            text: "Through his network, Jacob uncovers disturbing intelligence. His uncle isn't just planning to distribute opium—he's partnering with the Eastern Mining Consortium. The same group that backed Cross. The Rivers family was involved from the beginning.",
            next: "jacob_family_betrayal"
        },

        jacob_family_betrayal: {
            speaker: "Jacob Rivers",
            text: "Reading stolen documents: 'Phase One: Install Cross to destabilize. Phase Two: Remove Cross, create chaos. Phase Three: Flood town with narcotics, reduce population to compliant workforce.' His own family orchestrated everything.",
            next: "jacob_uncle_confrontation"
        },

        jacob_uncle_confrontation: {
            speaker: "Samuel Rivers",
            text: "'Ah, you found the papers. I wondered when you'd piece it together. Yes, we've been working with the consortium for years. Your friends' heroics? All part of the plan. Though you adapting so well to the family business—that was a pleasant surprise.'",
            next: "jacob_horrible_truth"
        },

        jacob_horrible_truth: {
            speaker: "Jacob Rivers",
            text: "'You used me. Used all of us. The stagecoach attack, meeting the others—none of it was chance?' The full weight of manipulation crushes down on him.",
            next: "jacob_uncle_justification"
        },

        jacob_uncle_justification: {
            speaker: "Samuel Rivers",
            text: "'Business, nephew. The consortium needed the town softened up. We provided the means. Soon Perdition will be the most profitable operation in three states. And you'll help run it, or you'll be buried under it. Family or not.'",
            next: "jacob_sarah_danger"
        },

        jacob_sarah_danger: {
            speaker: "Rico Valdez",
            text: "'Boss, that Mitchell woman's been organizing families against our operation. Your uncle wants her silenced. Permanently. Says to make an example of her.'",
            next: "jacob_line_crossed"
        },

        jacob_line_crossed: {
            speaker: "Narrator",
            text: "Jacob stands at the precipice. Following orders means killing the one person who still believes in his better nature. Refusing means war with his own family. Either path leads through blood.",
            next: "jacob_desperate_warning"
        },

        jacob_desperate_warning: {
            speaker: "Jacob Rivers",
            text: "He finds Sarah at her home, urgency cracking his cold facade: 'You need to leave town. Tonight. Don't ask questions, don't pack, just go. Please. I can't protect you if you stay.'",
            next: "jacob_sarah_refusal"
        },

        jacob_sarah_refusal: {
            speaker: "Sarah Mitchell",
            text: "'I'm not running. This is my home. These are my people. If your family wants to silence me, they'll have to do it in front of everyone. Maybe then folks will finally fight back. Even against the mighty Rivers family.'",
            next: "jacob_impossible_position"
        },

        jacob_impossible_position: {
            speaker: "Jacob Rivers",
            text: "'You don't understand. This isn't just my family anymore. It's bigger. The consortium, the mine owners, the government—they're all connected. Fighting them isn't brave, it's suicide.'",
            next: "elijah_opening"
        },

        // ELIJAH'S STORYLINE (Scenes 77-100)
        elijah_opening: {
            speaker: "Narrator",
            text: "The abandoned church in Cedar Falls echoes with Elijah's solitary voice. Three people sit in makeshift pews—down from five last week. His journey as a traveling preacher has shown him the consortium's reach. Every town tells the same story: corruption, violence, despair.",
            next: "elijah_sparse_congregation"
        },

        elijah_sparse_congregation: {
            speaker: "Elijah Cross",
            text: "'We gather not in grand cathedrals but in ruins, not in certainty but in doubt. Yet still we gather. Still we hope. The darkness spreading across our land is man-made, and what man has wrought, man can undo.'",
            next: "elijah_after_sermon"
        },

        elijah_after_sermon: {
            speaker: "Old Timer",
            text: "'Pretty words, Preacher. But words don't stop bullets or fill bellies. You talk about fighting darkness, but what have you actually done? Where were you when the Murphy family was burned out? When the sheriff was bought?'",
            next: "elijah_hollow_defense"
        },

        elijah_hollow_defense: {
            speaker: "Elijah Cross",
            text: "'I... I'm trying to inspire people to stand together. To find their courage.' But the words taste like ash. He knows the truth—he's been running from action, hiding behind sermons.",
            next: "elijah_congregation_leaves"
        },

        elijah_congregation_leaves: {
            speaker: "Narrator",
            text: "The sparse congregation files out, leaving Elijah alone with his doubts. Six months of preaching, and what has he accomplished? Towns still fall, people still suffer, and he still clings to words instead of taking action.",
            next: "elijah_mysterious_visitor"
        },

        elijah_mysterious_visitor: {
            speaker: "Marshal Catherine Brooks",
            text: "'Elijah Cross? I'm Federal Marshal Catherine Brooks. I've been following your trail, listening to your sermons. You speak about the consortium's corruption. I think it's time you did more than talk.'",
            next: "elijah_federal_interest"
        },

        elijah_federal_interest: {
            speaker: "Elijah Cross",
            text: "'A federal marshal? I'm surprised the government cares about frontier troubles. Usually, you only show up after the killing's done and the profits are secured.'",
            next: "elijah_brooks_proposition"
        },

        elijah_brooks_proposition: {
            speaker: "Marshal Brooks",
            text: "'Not all of us are bought. A few of us still believe in justice. I'm building a case against the Eastern Mining Consortium, but I need witnesses, evidence, someone who's seen their operations firsthand. Someone like you.'",
            next: "elijah_dangerous_knowledge"
        },

        elijah_dangerous_knowledge: {
            speaker: "Elijah Cross",
            text: "'What I've seen would turn your stomach, Marshal. Towns destroyed, people poisoned, entire communities enslaved by debt and drugs. But seeing and proving are different things. The consortium owns judges, kills witnesses.'",
            next: "elijah_evidence_offer"
        },

        elijah_evidence_offer: {
            speaker: "Marshal Brooks",
            text: "'Then help me gather proof they can't dismiss. You travel freely, people trust you. Document what you see. Build a case so airtight that even bought judges can't ignore it. Will you stop preaching about justice and start pursuing it?'",
            next: "elijah_accepts_mission"
        },

        elijah_accepts_mission: {
            speaker: "Elijah Cross",
            text: "'Yes. I'm tired of empty words. Tell me what you need.' For the first time in months, Elijah feels purpose beyond mere survival.",
            next: "elijah_investigation_begins"
        },

        elijah_investigation_begins: {
            speaker: "Narrator",
            text: "Armed with federal authority and renewed purpose, Elijah begins systematic documentation. Each town reveals new horrors: mass graves hidden outside mining camps, water sources deliberately contaminated, entire populations reduced to virtual slavery.",
            next: "elijah_pattern_recognition"
        },

        elijah_pattern_recognition: {
            speaker: "Elijah Cross",
            text: "Studying his notes: 'It's the same pattern everywhere. First, destabilization through violence. Then economic collapse. Finally, the consortium moves in as 'saviors,' but their salvation is slavery. Perdition was just the beginning.'",
            next: "elijah_survivor_testimony"
        },

        elijah_survivor_testimony: {
            speaker: "Mining Camp Survivor",
            text: "'They worked us until we dropped, Preacher. No water breaks in summer, no heat in winter. Anyone who complained disappeared. They said they were creating prosperity, but we were the coal they burned for it.'",
            next: "elijah_documenting_horror"
        },

        elijah_documenting_horror: {
            speaker: "Narrator",
            text: "Each testimony adds to Elijah's growing file. Photographs of mass graves, chemical samples from poisoned wells, financial documents showing the web of corruption. The evidence is damning, but also dangerous to possess.",
            next: "elijah_near_capture"
        },

        elijah_near_capture: {
            speaker: "Consortium Enforcer",
            text: "'Preacher Cross. You've been asking uncomfortable questions. Mr. Thornbury would like a word. You can come quietly, or we can drag your corpse. Your choice.'",
            next: "elijah_narrow_escape"
        },

        elijah_narrow_escape: {
            speaker: "Narrator",
            text: "Violence Elijah had forsworn saves him now. Muscle memory from darker days guides his hands as he fights free. But the message is clear—the consortium knows about his investigation. Time is running out.",
            next: "elijah_return_decision"
        },

        elijah_return_decision: {
            speaker: "Marshal Brooks",
            text: "'They're onto you. But I have news—my sources say the consortium is planning something massive in Perdition. An event to demonstrate their power and crush resistance permanently. We need someone who knows the town.'",
            next: "elijah_perdition_bound"
        },

        elijah_perdition_bound: {
            speaker: "Elijah Cross",
            text: "'Perdition. Where it all began.' He touches the evidence case. 'My former companions are there, aren't they? Maria, Thomas, Jacob—all serving the enemy now. Perhaps it's time for a reunion.'",
            next: "elijah_painful_truth"
        },

        elijah_painful_truth: {
            speaker: "Marshal Brooks",
            text: "'Your friends might be the key to stopping this. They're inside the consortium's operations. If we could turn them, get their cooperation... But from what I've heard, they've fallen far from their heroic days.'",
            next: "elijah_determination"
        },

        elijah_determination: {
            speaker: "Elijah Cross",
            text: "'We all fell, Marshal. The question is whether we can rise again. I'll return to Perdition. If there's any spark of who they were left in my friends, I'll find it. And if not... then I'll stop the consortium alone.'",
            next: "elijah_final_preparation"
        },

        elijah_final_preparation: {
            speaker: "Narrator",
            text: "Elijah prepares for the journey to Perdition, knowing he rides toward either redemption or doom. The evidence he carries could save the frontier or get him killed. But after months of empty words, action—any action—feels like salvation.",
            next: "chapter_convergence"
        },

        // CONVERGENCE SCENE
        chapter_convergence: {
            speaker: "Narrator",
            text: "Four roads wind toward Perdition, carrying four broken souls toward an inevitable collision. Maria plots to prevent a massacre while maintaining her cover. Thomas races to save poisoned children while marked for death. Jacob stands between family loyalty and his last shred of humanity. And Elijah returns with evidence that could damn them all—or save them. The stage is set for a reckoning that will determine not just their fates, but the future of the frontier itself.",
            next: "chapter_conclusion"
        },

        // FINAL SCENE
        chapter_conclusion: {
            speaker: "Narrator",
            text: "As the sun sets on another day in Perdition, four former friends pursue their separate paths, unaware that their stories are about to violently intersect. Each carries secrets that could destroy the others. Each faces choices that will define who they truly are. The fellowship may be broken, but fate—and the Eastern Mining Consortium—will soon force them together again. Whether as allies or enemies remains to be seen.",
            choices: [
                {
                    text: "Continue to Chapter 9",
                    next: null,
                    nextChapter: "chapter9"
                }
            ]
        }
    }
};