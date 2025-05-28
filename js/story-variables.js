// js/story-variables.js

// This file will store and manage variables that track player choices
// and their consequences throughout the story.

// Initialize global story variables object if it doesn't exist
var storyVariables = storyVariables || {};

// --- GENERAL STORY PROGRESS ---
storyVariables.currentChapter = "Prologue"; // Tracks the current chapter
storyVariables.final_ending_type = null; // Tracks the type of ending achieved

// --- CHARACTER RELATIONSHIP FLAGS (from notes/relationship_system.txt) ---
storyVariables.relationships = {
    elijah: {
        maria: { trust: 50, tension: 20 }, // Example starting values
        thomas: { trust: 55, tension: 10 },
        jacob: { trust: 65, tension: 5 }
    },
    maria: {
        thomas: { trust: 45, tension: 30 },
        jacob: { trust: 50, tension: 20 }
    },
    thomas: {
        jacob: { trust: 55, tension: 15 }
    }
};

storyVariables.flags = {
    // Elijah specific
    elijah_confession_type: null, // 'congregation_killed', 'man_died_words', 'refused'
    elijah_killed_in_chapter1: false,
    elijah_pacifist_in_chapter1: false,
    observed_elijah: false, // Added for prologue choice

    // Maria specific
    supported_maria_revelation: false,
    felt_betrayed_maria_revelation: false,
    maria_forced_to_lead: false,


    // Jacob specific
    jacob_saved_elijah_chapter1: false,

    // Thomas specific (new category)
    knows_thomas_profession: false, // Added for prologue choice

    // Silas specific
    forgave_silas_chapter5: false,

    // General choices
    violence_vs_peace_meter: 0, // -5 (total peace) to +5 (total violence)
    faith_vs_doubt_meter: 0, // -5 (total doubt) to +5 (total faith) - mainly for Elijah
    unity_vs_division_meter: 0, // -5 (total division) to +5 (total unity) - for party cohesion

    // Chapter 1 Specific Flags
    chapter1_flags: {
        tried_negotiation: false,
        prepared_immediately: false,
        deferred_leadership: false,
        stood_up_to_bandits: false,
        tried_peaceful: false, // Consider merging with tried_negotiation if they are mutually exclusive or serve same purpose
        bandits_retreated: false,
        made_enemies: false,
        bandits_warned: false,
        showed_strength: false,
        diplomatic_but_firm: false,
        late_assertion: false,
        completely_passive: false,
        elijah_reluctant_violence: false,
        elijah_accepts_violence: false,
        chose_passivity: false,
        prepared_for_violence: false,
        bandits_agitated: false,
        elijah_prayed_for_bandits_c1: false,
        group_drinks_c1: false
    },
    // Chapter 2 Specific Flags
    chapter2_flags: {
        protecting_town_c2: false
    },
    // Chapter 3 Specific Flags
    chapter3_flags: {
        sought_divine_guidance_c3: false,
        investigated_church_c3: false,
        committed_to_town_c3: false,
        found_thomas_first_c3: false,
        found_jacob_first_c3: false,
        confronted_maria_photo_c3: false,
        stayed_quiet_photo_c3: false,
        focused_on_survival_c3: false,
        confessed_dark_secret_c3: false,
        confessed_guilt_c3: false,
        kept_secret_c3: false,
        prioritize_innocents_c3: false,
        rally_town_c3: false,
        aggressive_strategy_c3: false,
        hostile_to_stranger_c3: false,
        diplomatic_stranger_c3: false,
        cautious_stranger_c3: false
    },
    // Chapter 4 Specific Flags
    chapter4_flags: {
        denied_silas_c4: false,
        questioned_silas_c4: false,
        attacked_silas_c4: false,
        rejected_prophecy_c4: false,
        connected_prophecy_c4: false,
        willing_to_believe_silas_c4: false,
        suspicious_of_silas_c4: false,
        demanded_proof_from_silas_c4: false,
        united_front_c4: false,
        sought_silas_strategy_c4: false,
        prioritized_civilians_c4: false,
        chose_saloon_defense_c4: false,
        chose_church_defense_c4: false,
        chose_split_defense_c4: false,
        aggressive_combat_valdez_c4: false,
        attempted_negotiation_valdez_c4: false,
        tactical_approach_valdez_c4: false,
        trusted_silas_ritual_c4: false,
        ignored_ritual_c4: false,
        sought_understanding_ritual_c4: false,
        led_ritual_c4: false,
        followed_silas_ritual_c4: false,
        improvised_ritual_c4: false
    },
    // Chapter 5 Specific Flags
    chapter5_flags: {
        c5_ritual_fought_bonds: false,
        c5_ritual_analyzed: false,
        c5_ritual_team_connection: false,
        c5_willpower_focused: false,
        c5_embraced_trauma: false,
        c5_found_ritual_anchor: false,
        c5_reversed_energy_flow: false,
        c5_unified_resistance: false,
        c5_shared_burdens: false,
        c5_deep_meditation: false,
        c5_spread_calm: false,
        c5_trauma_transformation: false,
        c5_healing_overload: false,
        c5_chaos_escape_attempt: false,
        c5_reach_silas_attempt: false,
        c5_draw_conflict_power: false,
        c5_rally_team_distraction: false,
        c5_press_advantage_together: false,
        c5_coordinated_assault_ritual: false,
        c5_emotional_breakthrough_attempt: false,
        c5_unity_weapon_attempt: false,
        c5_fight_monster_directly: false,
        c5_redirect_gangs_vs_monster: false,
        c5_locate_silas_in_chaos: false,
        c5_attempt_silas_redemption: false,
        c5_mercy_kill_silas: false,
        c5_stop_fighting_to_starve: false,
        c5_unite_enemies_vs_monster: false,
        c5_face_monster_as_team: false,
        c5_tactical_split_vs_monster: false,
        c5_rally_with_hope: false,
        c5_heroic_sacrifice_attempt: false,
        c5_emergency_alliance_attempt: false,
        c5_sacrifice_play_attempt: false,
        c5_guide_silas_redemption: false,
        c5_convince_silas_sacrifice: false,
        c5_lead_united_front_victory: false,
        c5_banish_weakened_monster: false,
        c5_combined_strike_final: false,
        c5_hope_ritual_final: false,
        c5_outcome_unity_victory: false,
        c5_outcome_love_sacrifice: false,
        c5_outcome_sacrifice_accept_fate: false,
        c5_outcome_sacrifice_miracle_survival: false,
        c5_outcome_silas_redeemed_together: false,
        c5_outcome_silas_final_choice: false,
        c5_outcome_sealed_forever: false,
        c5_outcome_transformed_monster: false,
        c5_outcome_guided_transformation: false,
        c5_outcome_permanent_victory: false,
        c5_outcome_new_protections: false, // Added for a choice in transformation_ending
        c5_ending_path_unity_peace: false,
        c5_ending_path_unity_rebuild: false,
        c5_ending_path_sacrifice_peace: false,
        c5_ending_path_sacrifice_message: false,
        c5_ending_path_redemption_silas_peace: false,
        c5_ending_path_redemption_honor_silas: false,
        c5_ending_path_peace_mission: false,
        c5_ending_path_peace_pass_torch: false,
        c5_ending_path_rebuild_foundation: false,
        c5_ending_path_rebuild_personal: false,
        c5_ending_path_sacrifice_watch_beyond: false,
        c5_ending_path_sacrifice_rest_earned: false,
        c5_ending_path_guardian_study: false,
        c5_ending_path_guardian_prepare: false,
        c5_ending_path_peace_reflect: false,
        c5_ending_path_peace_plan_next: false
    },
    // Chapter 6 Specific Flags
    chapter6_flags: {
        c6_prepared_unity_speech: false,
        c6_scouted_location: false,
        c6_held_pre_talks: false,
        c6_proposed_unity_pact: false,
        c6_proposed_territorial_truce: false,
        c6_warned_external_threats: false,
        c6_agent_told_partial_truth: false,
        c6_agent_told_full_truth: false,
        c6_agent_avoided: false,
        c6_federal_interest_known: false
        // Additional flags for C6 will be added as the chapter is developed
    },
    // Chapter 7 Specific Flags
    chapter7_flags: {
        c7_volunteered_immediately: false,
        c7_asked_for_details: false,
        c7_consulted_companions: false,
        c7_agreed_to_help: false,
        c7_offered_limited_help: false,
        c7_requested_prep_time: false,
        c7_demanded_guarantees: false,
        c7_accepted_marshal_protection: false,
        c7_declined_but_advised: false,
        c7_maria_goes: false,
        c7_thomas_goes: false,
        c7_elijah_goes: false,
        c7_jacob_goes: false,
        c7_everyone_goes: false,
        c7_invited_morning_star: false,
        c7_asked_about_binding: false,
        c7_expressed_skepticism: false,
        c7_supported_maria: false,
        c7_advised_rejection: false,
        c7_suggested_negotiation: false,
        c7_cartel_info_sharing: false,
        c7_requested_cartel_resources: false,
        c7_invited_isabella: false,
        c7_ritual_protection: false,
        c7_practical_preparations: false,
        c7_balanced_preparation: false
    },
    // Chapter 8 Specific Flags
    chapter8_flags: {
        // Group composition from Chapter 7 outcomes
        c8_group_composition_morning_star: false,
        c8_group_composition_isabella: false,
        c8_cartel_alliance_active: false,
        c8_has_ritual_protection: false,
        
        // Strategic approach choices
        c8_chose_intelligence_first: false,
        c8_chose_direct_confrontation: false,
        c8_chose_rescue_first: false,
        
        // Survivor interaction choices
        c8_reassured_survivor: false,
        c8_asked_about_survivors: false,
        c8_demanded_information: false,
        
        // Medical/care choices
        c8_thomas_medical_connection: false,
        c8_thomas_stays_behind: false,
        c8_forced_evacuation: false,
        c8_split_group: false,
        
        // Survivor influence handling
        c8_survivors_protected: false,
        c8_medical_sedation: false,
        c8_physical_restraint: false,
        
        // Group division choices
        c8_elijah_jacob_escort: false,
        c8_maria_isabella_escort: false,
        c8_maria_mine_team: false,
        c8_alternative_solution: false,
        c8_evacuation_priority: false,
        c8_direct_mine_entry: false,
        
        // Mine exploration choices
        c8_main_tunnel_chosen: false,
        c8_side_passages_chosen: false,
        c8_resisted_voices: false,
        
        // Spirit interaction
        c8_attempted_spirit_dialogue: false,
        c8_used_ritual_protection: false,
        c8_forced_passage: false,
        c8_time_limit_revealed: false,
        
        // Bone Singer encounter choices
        c8_offered_burial_help: false,
        c8_attempted_binding: false,
        c8_challenged_bone_singer: false,
        c8_volunteered_as_guardian: false,
        c8_negotiated_guardian: false,
        c8_refused_guardian_terms: false,
        
        // Final outcomes
        c8_bone_singer_pacified: false,
        c8_chapter_complete: false,
        c8_burial_ceremony_option: false
    },
    // Chapter 9 Opening Flags (set by Chapter 8 outcomes)
    chapter9_opening: {
        c9_guardian_sacrifice: false,
        c9_team_separated: false,
        c9_cartel_relationship: false
    }
};

// --- FACTION RELATIONSHIPS (from notes/relationship_system.txt) ---
storyVariables.factions = {
    valdez_cartel: { respect: -50, hostility: 70 }, // Example: -100 to 100 scale
    rivers_gang: { respect: -40, hostility: 60 },
    perdition_townspeople: { trust: 10, fear: 30 }
};


// --- KEY DECISIONS ---
// Example: decisions related to "The Hungry Dark"
storyVariables.hungry_dark_ritual_outcome = null; // e.g. 'disrupted_by_allies', 'protagonists_escaped_resistance'
storyVariables.hungry_dark_status = 'bound_weakened'; // 'bound_weakened', 'strengthened', 'defeated_temporarily'

// Function to update a variable
function updateStoryVariable(variablePath, value) {
    let keys = variablePath.split('.');
    let current = storyVariables;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    console.log(`Updated story variable: ${variablePath} = ${value}`);
    // Potentially trigger save to localStorage here if using save-system.js
};

// Function to get a variable's value
function getStoryVariable(variablePath) {
    let keys = variablePath.split('.');
    let current = storyVariables;
    for (let i = 0; i < keys.length; i++) {
        if (current === undefined || current === null || !current.hasOwnProperty(keys[i])) {
            console.warn(`Story variable not found: ${variablePath}`);
            return undefined;
        }
        current = current[keys[i]];
    }
    return current;
};

// Example usage:
// updateStoryVariable('relationships.elijah.maria.trust', 60);
// updateStoryVariable('flags.supported_maria_revelation', true);
// let mariaTrust = getStoryVariable('relationships.elijah.maria.trust');
// console.log('Current Maria trust for Elijah:', mariaTrust);

// It might be beneficial to load initial values from story-data-init.js or localStorage
// For now, this sets up the structure and basic update/get functions.