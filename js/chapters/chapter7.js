// Chapter 7: The Price of Victory (Linear Version)
storyData.chapter7 = {
    name: "Chapter 7",
    title: "The Price of Victory",
    scenes: {
        // Scene 1: Three Weeks Later
        start: {
            speaker: "Narrator",
            text: "Three weeks have passed since Cross's arrest. The federal marshal took him away in chains, but left behind only empty promises and mounting problems. Without Cross's money—dirty as it was—Perdition's economy has collapsed. The mines stay closed. The shops are shuttering. And the four heroes who saved the town are learning that victory can taste like ash.",
            next: "morning_reality"
        },

        // Scene 2: Harsh Morning Reality
        morning_reality: {
            speaker: "Narrator",
            text: "The boarding house dining room feels colder these days. Mrs. Henderson serves watered-down coffee and day-old bread—it's all she can afford now. Thomas stares at his trembling hands. Maria counts her remaining bullets. Jacob reads a letter from home. Elijah pretends to pray.",
            next: "henderson_eviction_notice"
        },

        // Scene 3: The Eviction Notice
        henderson_eviction_notice: {
            speaker: "Mrs. Henderson",
            text: "'I'm sorry, but I can't keep feeding you all for free.' Her voice cracks as she sets down a final notice from the bank. 'Cross owned the mortgage on this place. The bank's calling it in. I have two weeks before they take everything.'",
            next: "first_crack"
        },

        // Scene 4: The First Crack
        first_crack: {
            speaker: "Maria Vasquez",
            text: "'So we saved the town just so the banks could destroy it instead?' Maria's laugh is bitter. 'We should have taken Cross's money when we had the chance. At least then we'd have something to show for all this.'",
            next: "elijah_objects"
        },

        // Scene 5: Elijah's Hollow Objection
        elijah_objects: {
            speaker: "Elijah Cross",
            text: "'We did the right thing—' But even Elijah can't finish the sentence. The right thing has left children hungry and good people homeless. His collar feels like a lie around his neck.",
            next: "thomas_bitter_truth"
        },

        // Scene 6: Thomas's Bitter Truth
        thomas_bitter_truth: {
            speaker: "Thomas Whitmore",
            text: "'Another child died yesterday. Not from poison this time—from hunger. The Garrett family can't afford food or medicine.' He reaches for a flask that isn't there, his hands shaking worse. 'I couldn't help them. What good is a doctor who can't even buy bandages?'",
            next: "jacob_family_pressure"
        },

        // Scene 7: Jacob's Family Pressure
        jacob_family_pressure: {
            speaker: "Jacob Rivers",
            text: "'My uncle wants me to come back.' Jacob holds up the letter. 'Says there's work with the family business. Steady pay, respect, protection. All I have to do is forget about being a hero and become what he always wanted—a Rivers man through and through.'",
            next: "uncomfortable_truths"
        },

        // Scene 8: Uncomfortable Truths Surface
        uncomfortable_truths: {
            speaker: "Narrator",
            text: "The silence that follows is heavy with unspoken accusations. They saved Perdition from Cross, but they can't save it from poverty. They're heroes with empty pockets and emptier promises. And the town is starting to notice.",
            next: "frank_hutchins_arrives"
        },

        // Scene 9: Frank Hutchins's Proposition
        frank_hutchins_arrives: {
            speaker: "Frank Hutchins",
            text: "The former saloon keeper enters without knocking. 'Got a business proposition for you folks. Some of Cross's old associates want to reopen the mines. They need... security. People who know how to handle themselves. Pays well.'",
            next: "moral_compromise"
        },

        // Scene 10: The Moral Compromise
        moral_compromise: {
            speaker: "Frank Hutchins",
            text: "'Before you get all righteous, think about this—those mines employed half the town. Without them, Perdition dies. These men aren't saints, but they're not Cross either. They just want to make money. Lot of people could eat if those mines reopen.'",
            next: "group_divides"
        },

        // Scene 11: The Group Divides
        group_divides: {
            speaker: "Maria Vasquez",
            text: "'I'll do it.' Maria's voice is flat, practical. 'I've guarded worse men for worse reasons. At least this time, I'd be helping the town survive.'",
            next: "elijah_protests"
        },

        // Scene 12: Elijah's Protest
        elijah_protests: {
            speaker: "Elijah Cross",
            text: "'We can't work for criminals! We just spent weeks fighting against—' 'Against what?' Maria cuts him off. 'Against the only people bringing money to this town? Look around, preacher. Your principles are killing these people.'",
            next: "thomas_sides_with_maria"
        },

        // Scene 13: Thomas Takes a Side
        thomas_sides_with_maria: {
            speaker: "Thomas Whitmore",
            text: "'Maria's right. I became a doctor to save lives, not watch people starve for the sake of moral purity. If working security means I can afford medicine for the sick, then I'll do it.'",
            next: "jacob_torn"
        },

        // Scene 14: Jacob Is Torn
        jacob_torn: {
            speaker: "Jacob Rivers",
            text: "'This isn't what we fought for. We were supposed to be better than this. But...' He looks at the letter from home. 'Maybe there is no 'better.' Maybe there's just survival.'",
            next: "argument_escalates"
        },

        // Scene 15: The Argument Escalates
        argument_escalates: {
            speaker: "Narrator",
            text: "What starts as a debate becomes a vicious argument. Old resentments surface. Maria calls Elijah a self-righteous fool. Elijah accuses her of being a mercenary without conscience. Thomas drinks openly now, mocking them both. Jacob watches his heroes tear each other apart.",
            next: "maria_reveals_past"
        },

        // Scene 16: Maria's Dark Past
        maria_reveals_past: {
            speaker: "Maria Vasquez",
            text: "'You want to judge me, preacher? Let me tell you who I really am. I didn't just work for the cartel—I was their best killer. Men, women, didn't matter. I did it for money, and I was good at it. The only reason I stopped was because they killed my sister by mistake.'",
            next: "thomas_confession"
        },

        // Scene 17: Thomas's Confession
        thomas_confession: {
            speaker: "Thomas Whitmore",
            text: "'We're sharing truths? Fine. I didn't come west for a fresh start. I came because I killed a patient. Operated drunk, cut an artery I shouldn't have touched. A little girl bled out on my table while I was too impaired to save her. Her parents still think it was God's will.'",
            next: "elijah_hypocrisy"
        },

        // Scene 18: Elijah's Hypocrisy Exposed
        elijah_hypocrisy: {
            speaker: "Elijah Cross",
            text: "'Stop. Just... stop.' But Maria won't let him. 'No, your turn, preacher. Tell us about the money that went missing from your church. Tell us why you really left your parish.' Elijah's face drains of color.",
            next: "elijah_truth"
        },

        // Scene 19: Elijah's Truth
        elijah_truth: {
            speaker: "Elijah Cross",
            text: "'I... I took it. Thousands of dollars meant for the poor. Gambled it away trying to feel something, anything. Told myself I'd win it back, make it right. But I lost everything. The church covered it up to avoid scandal, sent me west to disappear.'",
            next: "jacob_disillusionment"
        },

        // Scene 20: Jacob's Disillusionment
        jacob_disillusionment: {
            speaker: "Jacob Rivers",
            text: "'You're all frauds.' Jacob's voice is quiet, devastated. 'I looked up to you. Thought you were different. But you're just... broken people pretending to be heroes. Maybe my uncle was right. Maybe there's no such thing as good people, just people who hide their sins better.'",
            choices: [
                {
                    text: "Try to salvage the group's unity",
                    next: "salvage_attempt"
                },
                {
                    text: "Let the group fracture completely",
                    next: "complete_fracture"
                }
            ]
        },

        // Scene 21a: Attempting to Salvage Unity
        salvage_attempt: {
            speaker: "Elijah Cross",
            text: "'Wait. We're all broken, yes. But we still saved this town. We still stood together when it mattered. That has to count for something.'",
            next: "maria_rejects_unity"
        },

        // Scene 21b: Complete Fracture
        complete_fracture: {
            speaker: "Narrator",
            text: "The silence that follows Jacob's words is final. Four people who once trusted each other with their lives now can't stand to be in the same room. The fellowship is dead, killed by truth.",
            next: "decisions_made"
        },

        // Scene 22: Maria Rejects Unity
        maria_rejects_unity: {
            speaker: "Maria Vasquez",
            text: "'Count for something? Tell that to the families going hungry. Tell that to Mrs. Henderson losing her home. We played hero and ruined lives. At least when I was a killer, I was honest about it.'",
            next: "decisions_made"
        },

        // Scene 23: Decisions Made
        decisions_made: {
            speaker: "Narrator",
            text: "By evening, the group has shattered. Maria agrees to work security for the new mine owners. Thomas will serve as their company doctor—for the pay. Jacob writes back to his uncle, accepting his offer. Only Elijah refuses, clinging to principles that feel more hollow by the hour.",
            next: "town_reaction"
        },

        // Scene 24: The Town's Reaction
        town_reaction: {
            speaker: "Walter Hayes",
            text: "Walter Hayes confronts them outside the boarding house. 'Heard you're working for the new mine bosses. The same kind of men as Cross, just with different names. We trusted you. Thought you were different.'",
            next: "maria_harsh_response"
        },

        // Scene 25: Maria's Harsh Response
        maria_harsh_response: {
            speaker: "Maria Vasquez",
            text: "'You trusted us to save you, and we did. Now you want us to starve for your principles? Pay us a living wage, and we'll be your heroes. Otherwise, we take the work we can get.'",
            next: "town_divided"
        },

        // Scene 26: The Town Divides
        town_divided: {
            speaker: "Narrator",
            text: "Perdition splits into factions. Some support the pragmatic choice—better to compromise than starve. Others feel betrayed, watching their heroes become mercenaries. The unity forged in fighting Cross crumbles in the face of economic reality.",
            next: "first_day_new_job"
        },

        // Scene 27: First Day at the New Job
        first_day_new_job: {
            speaker: "Narrator",
            text: "Maria and Thomas report to the mine offices. Their new employers are smooth-talking businessmen from back east—not obviously criminal, but clearly ruthless. They speak of profit margins and acceptable losses, and it's clear that 'acceptable losses' includes workers' lives.",
            next: "moral_erosion_begins"
        },

        // Scene 28: Moral Erosion Begins
        moral_erosion_begins: {
            speaker: "Mine Owner",
            text: "'Sometimes workers get... uppity. Start talking about unions, safety regulations, that sort of thing. We trust you'll help them see reason. After all, a closed mine helps no one, right? And if someone needs to be made an example of, well... that's why we hired professionals.'",
            next: "thomas_medical_compromise"
        },

        // Scene 29: Thomas's Medical Compromise
        thomas_medical_compromise: {
            speaker: "Thomas Whitmore",
            text: "Thomas is shown the company medical supplies—more than he's seen in months. But there's a catch: 'Workers who cause trouble don't get treatment. Company policy. Can't waste resources on malcontents.' His hands shake as he nods agreement.",
            next: "jacob_family_business"
        },

        // Scene 30: Jacob Joins the Family Business
        jacob_family_business: {
            speaker: "Samuel Rivers",
            text: "'Good to have you back, nephew.' Samuel Rivers hands Jacob a gun. 'Your friends made quite a mess here. Cost us considerable business. But family is family. You'll help us rebuild our operations. Start by collecting some debts. Show them you're a Rivers now.'",
            next: "elijah_isolation"
        },

        // Scene 31: Elijah's Isolation
        elijah_isolation: {
            speaker: "Narrator",
            text: "Elijah sits alone in the burned church ruins. No one comes to his sermons anymore. The hero preacher has become a reminder of failed promises. He clutches his Bible, but the words offer no comfort. He's kept his principles, but at what cost?",
            next: "first_violence"
        },

        // Scene 32: The First Violence
        first_violence: {
            speaker: "Narrator",
            text: "A mine worker named Peterson—Martha's cousin—organizes a meeting about unsafe conditions. Maria is ordered to break it up. She does so efficiently, professionally. When Peterson resists, she breaks his arm. Just enough violence to send a message. She feels nothing.",
            next: "thomas_denies_treatment"
        },

        // Scene 33: Thomas Denies Treatment
        thomas_denies_treatment: {
            speaker: "Thomas Whitmore",
            text: "'Sorry, Peterson. Company policy. Troublemakers don't get treatment.' Thomas's words are slurred—he's drinking heavily again. He watches the man leave in pain, tells himself it's not his fault. The company has rules. He just follows them.",
            next: "jacob_debt_collection"
        },

        // Scene 34: Jacob's Violent Education
        jacob_debt_collection: {
            speaker: "Narrator",
            text: "Jacob stands outside a farmhouse with two Rivers men. The family owes gambling debts they can't pay. 'Sometimes you got to hurt people to help them understand,' his companion says. 'Your uncle wants to see if you've got the stomach for real work.' Jacob's hand tightens on his gun.",
            next: "moral_event_horizon"
        },

        // Scene 35: Crossing Lines
        moral_event_horizon: {
            speaker: "Narrator",
            text: "The farmer begs, shows them his children watching from the window. Jacob remembers wanting to be a hero. But heroes don't eat. Heroes don't survive. He nods to his companions. The beating is brutal but measured. Business, not personal. The children cry.",
            next: "elijah_witnesses"
        },

        // Scene 36: Elijah Witnesses
        elijah_witnesses: {
            speaker: "Elijah Cross",
            text: "Elijah finds the beaten farmer, tries to help. 'It was the Rivers boy,' the man gasps. 'The one who helped save the town. He just watched while they...' Elijah's faith, already fragile, cracks a little more.",
            next: "confrontation_brewing"
        },

        // Scene 37: The Confrontation Builds
        confrontation_brewing: {
            speaker: "Narrator",
            text: "Word spreads quickly. The heroes who saved Perdition have become its new oppressors. Maria breaks strikes. Thomas denies medicine. Jacob collects debts with violence. Only Elijah remains 'pure'—and useless. The town's resentment builds toward a boiling point.",
            next: "workers_organize"
        },

        // Scene 38: Workers Organize
        workers_organize: {
            speaker: "Sarah Mitchell",
            text: "Sarah Mitchell, who once stood with them against Cross, now leads the opposition. 'They're no different than Cross. Worse, even—at least Cross was honest about what he was. These four pretended to be our saviors.'",
            next: "maria_warning"
        },

        // Scene 39: Maria's Warning
        maria_warning: {
            speaker: "Maria Vasquez",
            text: "Maria finds Sarah one night. 'Stop the organizing. This is your only warning. I don't want to hurt you, but I will. This is just business.' Sarah spits at her feet. 'We trusted you. I defended you to Cross.' Maria's face remains stone. 'That was your mistake.'",
            next: "thomas_breaking_point"
        },

        // Scene 40: Thomas Reaches His Limit
        thomas_breaking_point: {
            speaker: "Narrator",
            text: "A child dies in the mine—preventable if safety measures had been in place. Thomas is ordered to write it up as an accident. He's drunk when he signs the paper, but sober enough to know what he's doing. Another small death on his conscience.",
            next: "jacob_questions"
        },

        // Scene 41: Jacob's Doubts
        jacob_questions: {
            speaker: "Jacob Rivers",
            text: "'This isn't what I wanted,' Jacob tells his uncle. Samuel laughs. 'Nobody wants this, boy. But this is what the world is. You can be the one holding the gun or the one it's pointed at. Your heroic friends figured that out quick enough.'",
            next: "elijah_final_sermon"
        },

        // Scene 42: Elijah's Last Sermon
        elijah_final_sermon: {
            speaker: "Elijah Cross",
            text: "Elijah preaches to an empty church about redemption and justice. His words echo off broken walls. Outside, he can hear Maria's men breaking up another workers' meeting. He keeps preaching, desperate to believe his own words.",
            next: "henderson_evicted"
        },

        // Scene 43: Mrs. Henderson Loses Everything
        henderson_evicted: {
            speaker: "Narrator",
            text: "The bank takes the boarding house. Mrs. Henderson, who showed them kindness, is thrown into the street. Maria is there, working security for the bank. She doesn't meet the old woman's eyes. Just following orders. Just doing her job.",
            next: "complete_transformation"
        },

        // Scene 44: Complete Transformation
        complete_transformation: {
            speaker: "Narrator",
            text: "Six weeks after Cross's defeat, the transformation is complete. The four heroes who saved Perdition have become everything they fought against. Maria, the enforcer. Thomas, the complicit doctor. Jacob, the violent debt collector. And Elijah, the useless saint.",
            next: "frank_observation"
        },

        // Scene 45: Frank's Observation
        frank_observation: {
            speaker: "Frank Hutchins",
            text: "'Funny how that works,' Frank observes to whoever will listen. 'They got rid of Cross, but they became him. Maybe worse. At least Cross built things before he destroyed them. These four just learned that being good doesn't pay the bills.'",
            next: "final_meeting"
        },

        // Scene 46: Final Meeting
        final_meeting: {
            speaker: "Narrator",
            text: "The four meet one last time at the abandoned boarding house. They avoid eye contact, each carrying the weight of their choices. The silence is heavy with mutual disgust and self-loathing.",
            next: "maria_pragmatism"
        },

        // Scene 47: Maria's Cold Pragmatism
        maria_pragmatism: {
            speaker: "Maria Vasquez",
            text: "'Don't look at me like that. We're surviving. That's more than most can say. The town's eating again, even if they hate us for it. Sometimes that's the best you can do.'",
            next: "thomas_justification"
        },

        // Scene 48: Thomas's Weak Justification
        thomas_justification: {
            speaker: "Thomas Whitmore",
            text: "'I've saved more lives with company medicine than I ever could have as a principled pauper. So what if I have to look the other way sometimes? The greater good, right?' He laughs bitterly, takes another drink.",
            next: "jacob_resignation"
        },

        // Scene 49: Jacob's Resignation
        jacob_resignation: {
            speaker: "Jacob Rivers",
            text: "'We're not heroes. Never were. Just people who got lucky once and thought it meant something. Now we know better. The world doesn't want heroes. It wants survivors who don't ask questions.'",
            next: "chapter_conclusion"
        },

        // Scene 50: Chapter Conclusion
        chapter_conclusion: {
            speaker: "Narrator",
            text: "They part without goodbyes, each walking back to their new lives. Perdition still stands, but the cost of its survival has been the souls of its saviors. In trying to be better than Cross, they've become him—or perhaps something worse. They saved the town's body but poisoned its spirit, and their own. The hero's journey ends not in triumph, but in the bitter recognition that sometimes, everyone becomes what they hate, given enough hunger and desperation. The only choice is whether to admit it or keep pretending.",
            choices: [
                {
                    text: "Continue to Chapter 8",
                    next: null,
                    nextChapter: "chapter8"
                }
            ]
        }
    }
};