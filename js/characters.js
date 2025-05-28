const characters = {
    elijah: {
        name: "Elijah Cross",
        age: 35,
        role: "Former Preacher",
        description: "A man haunted by his past, seeking redemption in the unforgiving frontier",
        traits: ["Thoughtful", "Guilt-ridden", "Eloquent", "Conflicted"],
        backstory: "Once a respected preacher in Boston, Elijah fled west after a tragedy that shattered his faith. His silver tongue and knowledge of scripture hide a deep well of regret.",
        portrait: "elijah.png",
        color: "#8B4513"
    },
    
    maria: {
        name: "Maria Vasquez",
        age: 28,
        role: "Sharpshooter",
        description: "A fierce woman with a mysterious past and deadly aim",
        traits: ["Independent", "Secretive", "Protective", "Skilled"],
        backstory: "Raised on the Mexican border, Maria learned to shoot before she could properly walk. She carries secrets that could destroy the fragile trust of the group.",
        portrait: "maria.png",
        color: "#CD853F"
    },
    
    thomas: {
        name: "Thomas 'Doc' Whitmore",
        age: 42,
        role: "Disgraced Doctor",
        description: "A brilliant physician battling his demons and the bottle",
        traits: ["Intelligent", "Cynical", "Addicted", "Compassionate"],
        backstory: "Once a celebrated surgeon in Philadelphia, Thomas lost everything to laudanum addiction after losing a patient. He seeks a new start but can't escape his cravings.",
        portrait: "thomas.png",
        color: "#2F4F4F"
    },
    
    jacob: {
        name: "Jacob 'Jake' Rivers",
        age: 19,
        role: "Runaway Son",
        description: "A young man fleeing his family's dark legacy",
        traits: ["Naive", "Eager", "Haunted", "Quick-learner"],
        backstory: "The youngest son of a notorious outlaw family, Jacob ran away to escape becoming like his brothers. He's desperate to prove he's different, but blood runs deep.",
        portrait: "jacob.png",
        color: "#4682B4"
    }
};

const relationships = {
    trust: {
        elijah_maria: 50,
        elijah_thomas: 60,
        elijah_jacob: 70,
        maria_thomas: 40,
        maria_jacob: 45,
        thomas_jacob: 55
    },
    tension: {
        elijah_maria: 30,
        elijah_thomas: 20,
        elijah_jacob: 10,
        maria_thomas: 60,
        maria_jacob: 40,
        thomas_jacob: 25
    }
};

function updateRelationship(char1, char2, type, amount) {
    const key = `${char1}_${char2}`;
    const reverseKey = `${char2}_${char1}`;
    
    if (relationships[type][key] !== undefined) {
        relationships[type][key] = Math.max(0, Math.min(100, relationships[type][key] + amount));
        relationships[type][reverseKey] = relationships[type][key];
    }
}

function getRelationship(char1, char2, type) {
    const key = `${char1}_${char2}`;
    const reverseKey = `${char2}_${char1}`;
    return relationships[type][key] || relationships[type][reverseKey] || 50;
}