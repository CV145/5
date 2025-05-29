// Chapter 20: Redemption's Price
storyData.chapter20 = {
    name: "Chapter 20",
    title: "Redemption's Price",
    scenes: {
        // Scene 1: Six Months Later - Perdition Transformed?
        start: {
            speaker: "Narrator",
            text: "Six months had passed since the battle for Perdition. The raw wounds on the town had begun to scar over, replaced by a semblance of order, though the nature of that order was as morally ambiguous as the souls who now shaped its destiny.",
            onEnter: function() {
                updateStoryVariable('currentChapter', 'Chapter 20');
            },
            next: "pike_fate_revealed_ch20"
        },

        // Scene 2: Pike's Fate
        pike_fate_revealed_ch20: {
            speaker: "Narrator",
            text: "Cornelius Pike had met his end at the gallows, convicted in a swift federal trial. The newspapers lauded it as a victory for justice in the territories. Few knew the full, messy truth.",
            next: "doc_whitmore_thriving_clinic_intro"
        },

        // --- Doc Whitmore's New Life ---
        doc_whitmore_thriving_clinic_intro: {
            speaker: "Narrator",
            text: "Dr. Thomas Whitmore's clinic in Perdition was now the finest medical establishment for a hundred miles. His testimony against Pike had earned him immunity and a lucrative government contract to supply mercury antidotes across the territory – antidotes he manufactured at inflated prices.",
            next: "doc_clinic_scene_description"
        },
        doc_clinic_scene_description: {
            speaker: "Narrator",
            text: "He sat in his polished office, a wealthy rancher groveling for an appointment. Doc, impeccably dressed, swirled a glass of expensive brandy, a vial of pure laudanum discreetly tucked in his waistcoat. His addiction was sated, his reputation (carefully curated with minimal free care for the town's poorest) was sterling.",
            next: "doc_internal_monologue_ch20"
        },
        doc_internal_monologue_ch20: {
            speaker: "Doc Whitmore",
            text: "(Internal) 'Perdition's suffering has been... remarkably profitable. And General Morrison's 'research' needs keep the contracts flowing. Amazing what a little well-placed testimony and a patented cure can do for a man's fortunes.'",
            choices: [
                {
                    text: "Does he feel any guilt for his methods?",
                    next: "doc_guilt_assessment_ch20"
                },
                {
                    text: "What are his plans for the future?",
                    next: "doc_future_plans_ch20"
                }
            ]
        },
        doc_guilt_assessment_ch20: { // Optional
            speaker: "Doc Whitmore",
            text: "(Internal) 'Guilt? That's a malady for the poor and the pious. I provide a service. They pay. The world continues to turn. And my access to the finest laudanum is now... unlimited.'",
            next: "transition_to_maria_school_ch20"
        },
        doc_future_plans_ch20: { // Optional
            speaker: "Doc Whitmore",
            text: "(Internal) 'Expand, of course. More clinics. More government contracts. Perhaps a senatorship, eventually. The possibilities are endless when one controls the cure... and understands the nature of the disease.'",
            next: "transition_to_maria_school_ch20"
        },

        // --- Maria Vasquez's New Role ---
        transition_to_maria_school_ch20: {
            speaker: "Narrator",
            text: "The Perdition schoolhouse, once dilapidated, was now neatly repaired, a fresh coat of paint on its walls. Inside, 'Miss Vasquez' was an image of stern but dedicated pedagogy.",
            next: "maria_teaching_her_students_ch20"
        },
        maria_teaching_her_students_ch20: {
            speaker: "Narrator",
            text: "But her true lessons happened after hours, with a select few older students. She taught them observation, discretion, how to gather information, how to spot a lie, how to leverage a secret. She was building a network, her influence spreading far beyond Perdition.",
            next: "maria_internal_monologue_ch20"
        },
        maria_internal_monologue_ch20: {
            speaker: "Maria Vasquez",
            text: "(Internal, watching a promising student) 'Knowledge is power, little one. And power is the only true currency in this world. Dalton was just the beginning. There are other names on my list. Pike's documents, though Morrison took the most valuable, gave me new leads.'",
            next: "maria_planning_next_target_ch20"
        },
        maria_planning_next_target_ch20: {
            speaker: "Narrator",
            text: "Perdition was her base, her respectable cover. From here, she directed her long-delayed vengeance against those who had wronged her family, one carefully planned takedown at a time.",
            next: "transition_to_jacob_marshal_ch20"
        },

        // --- Jacob Rivers, The Marshal ---
        transition_to_jacob_marshal_ch20: {
            speaker: "Narrator",
            text: "Deputy U.S. Marshal Jacob Rivers rode into Perdition, his face harder, leaner than it was six months ago. His testimony against Pike, corroborating Doc's, had earned him a pardon and a badge.",
            next: "jacob_confronts_maria_subtly_ch20"
        },
        jacob_confronts_maria_subtly_ch20: {
            speaker: "Narrator",
            text: "He often found himself at odds with Maria. He knew, or suspected, much of what she did under the guise of teaching, and it chafed against his newfound commitment to the law.",
            next: "jacob_to_maria_methods_ch20"
        },
        jacob_to_maria_methods_ch20: {
            speaker: "Jacob Rivers",
            text: "'Miss Vasquez. Heard some troubling rumors about a land dispute over at the Miller ranch. Seems one of your... brighter students... happened to overhear something that conveniently benefited one party.' His tone was neutral, but his eyes were sharp.",
            next: "maria_to_jacob_information_is_neutral_ch20"
        },
        maria_to_jacob_information_is_neutral_ch20: {
            speaker: "Maria Vasquez",
            text: "'Information is a tool, Marshal. Like your gun. It's how one uses it that matters. I merely encourage my students to be observant.' Her smile was a challenge.",
            next: "jacob_internal_struggle_ch20"
        },
        jacob_internal_struggle_ch20: {
            speaker: "Jacob Rivers",
            text: "(Internal) 'She twists everything. But sometimes... sometimes her information helps me catch real criminals. This town... it forces compromises I never imagined.'",
            next: "transition_to_elijah_halfway_house_ch20"
        },

        // --- Elijah Cross's Halfway House ---
        transition_to_elijah_halfway_house_ch20: {
            speaker: "Narrator",
            text: "Elijah Cross had transformed the old, fire-scarred church ruins into a halfway house for former outlaws and drifters, 'The Prodigal's Rest'. It was a small beacon of hope in a largely cynical town.",
            next: "elijah_counseling_former_outlaw_ch20"
        },
        elijah_counseling_former_outlaw_ch20: {
            speaker: "Narrator",
            text: "He offered food, shelter, and a path to an honest life, his own past sins fueling a deep, quiet empathy. He was the only one, it seemed, genuinely trying to heal Perdition's soul.",
            next: "elijah_internal_reflection_ch20"
        },
        elijah_internal_reflection_ch20: {
            speaker: "Elijah Cross",
            text: "(Internal, watching a former gang member learn to read) 'Redemption isn't a grand gesture. It's small acts, every day. Helping one soul find their way back from the brink. It's not the faith I knew, but... it's a faith that works, here in the dust.'",
            next: "the_rivers_gang_disbanded_ch20"
        },
        the_rivers_gang_disbanded_ch20: {
            speaker: "Narrator",
            text: "The Rivers Gang, without Silas's leadership and decimated by the fight, had scattered to the winds. Some ended up at Elijah's halfway house, seeking a different life.",
            next: "the_graveside_gathering_intro_ch20"
        },

        // --- The Graveside Gathering ---
        the_graveside_gathering_intro_ch20: {
            speaker: "Narrator",
            text: "On a cool autumn evening, the four found themselves at Perdition's cemetery, standing before two relatively new graves: Silas Rivers and his son, Samuel.",
            next: "silence_at_the_graves_ch20"
        },
        silence_at_the_graves_ch20: {
            speaker: "Narrator",
            text: "No words were spoken for a long moment. Their alliance, forged in blood and desperation, had shifted. It was no longer about friendship, if it ever truly had been.",
            next: "jacob_places_wildflowers_ch20"
        },
        jacob_places_wildflowers_ch20: {
            speaker: "Narrator",
            text: "Jacob awkwardly placed a handful of wildflowers on Samuel's grave, then another on his father's. A gesture of complicated grief.",
            next: "doc_breaks_silence_ch20"
        },
        doc_breaks_silence_ch20: {
            speaker: "Doc Whitmore",
            text: "'Life, eh? Nasty, brutish, and often profitably short for some.' He adjusted his expensive silk cravat.",
            next: "maria_pragmatic_observation_ch20"
        },
        maria_pragmatic_observation_ch20: {
            speaker: "Maria Vasquez",
            text: "'They made their choices. We made ours. Perdition remains.' She scanned the horizon, ever watchful.",
            next: "elijah_reflects_on_alliance_ch20"
        },
        elijah_reflects_on_alliance_ch20: {
            speaker: "Elijah Cross",
            text: "'We still need each other, it seems. Though our paths diverge.'",
            choices: [
                {
                    text: "Doc: 'Indeed. My clinic requires... discretion. Your reputations provide a certain... shield.'",
                    next: "doc_explains_need_for_alliance_ch20"
                },
                {
                    text: "Maria: 'My school benefits from the Marshal's... tolerance. And the Preacher's... blessing.'",
                    next: "maria_explains_need_for_alliance_ch20"
                }
            ]
        },
        doc_explains_need_for_alliance_ch20: { // Optional
            speaker: "Doc Whitmore",
            text: "'My... government contracts and discerning clientele appreciate a town that appears stable. Your... unique skills and reputations, Marshal Rivers, Miss Vasquez, Preacher Cross, help maintain that delicate illusion. For which I am, of course, prepared to offer certain... considerations.'",
            next: "maria_explains_need_for_alliance_ch20" // Ensure convergence
        },
        maria_explains_need_for_alliance_ch20: { // Optional or Converging
            speaker: "Maria Vasquez",
            text: "'My educational efforts require a degree of... community acceptance. The good Marshal's occasional blind eye, the Preacher's veneer of respectability over my... extracurricular activities, are invaluable. And Doctor, your access to certain... information and substances, is always useful.'",
            next: "jacob_acknowledges_tainted_peace_ch20"
        },
        jacob_acknowledges_tainted_peace_ch20: {
            speaker: "Jacob Rivers",
            text: "'We keep a kind of peace here. A dirty peace, maybe. But it's better than Pike's war.' He looked at Elijah. 'And sometimes, even a Marshal needs... skills the law doesn't teach, to deal with problems the law can't touch.'",
            next: "alliance_of_mutual_benefit_ch20"
        },
        alliance_of_mutual_benefit_ch20: {
            speaker: "Narrator",
            text: "It was an alliance of mutual, cynical benefit. Doc needed their tacit protection for his operations. Maria needed their cover of respectability for her network. Elijah and Jacob, trying to build something better, often needed the ruthless competence only Maria and the well-connected, amoral Doc could provide.",
            next: "walking_away_from_graves_ch20"
        },

        // --- Cynical Departures & Final Images ---
        walking_away_from_graves_ch20: {
            speaker: "Narrator",
            text: "They turned from the graves, walking back towards the town, partners in Perdition's uneasy future.",
            next: "maria_pockets_church_money_ch20"
        },
        maria_pockets_church_money_ch20: {
            speaker: "Narrator",
            text: "As they passed the rebuilt church—Elijah's Prodigal's Rest—Maria paused. With a deft, almost invisible movement, she slipped a few coins from the outdoor donation box into her reticule. Elijah, walking beside her, offered no comment, his face unreadable.",
            next: "doc_steals_flowers_ch20"
        },
        doc_steals_flowers_ch20: {
            speaker: "Narrator",
            text: "Further on, Doc paused by a freshly tended grave adorned with beautiful desert blooms. He plucked several of the finest flowers, tucking them into his lapel. 'For the office,' he murmured. 'Appearances, you know.'",
            next: "the_consecrated_mass_grave_ch20"
        },
        the_consecrated_mass_grave_ch20: {
            speaker: "Narrator",
            text: "They passed the site of the children's mass grave from 1882. It was now properly consecrated, a simple stone monument listing no names, only 'The Lost Lambs of St. Catherine's - Remembered'.",
            next: "doc_role_in_consecration_ch20"
        },
        doc_role_in_consecration_ch20: {
            speaker: "Narrator",
            text: "Elijah had fought for it. But the funds, ironically, had come from a 'civic improvement' grant Doc Whitmore had secured from the territorial government, charging them a handsome fee for 'archaeological consultation and interment services'.",
            next: "final_image_schoolyard_ch20"
        },
        final_image_schoolyard_ch20: {
            speaker: "Narrator",
            text: "The last image of Perdition settled on the schoolyard. Children played, their laughter echoing, innocent and unaware. Miss Vasquez watched them from her window, a small, knowing smile on her lips as one of her 'select students' subtly passed her a folded note.",
            next: "end_of_story_ch20"
        },
        end_of_story_ch20: {
            speaker: "Narrator",
            text: "Redemption, in Perdition, always came at a price. And often, it was paid by someone else.",
            choices: [
                {
                    text: "End Story",
                    next: null, // This indicates the end of the game
                    nextChapter: null // No next chapter
                }
            ]
        }
    }
};