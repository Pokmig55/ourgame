// Constants for game physics
const g = 9.8;
const levels = [
    { 
        level: 1, velocity: 20, distance: 30, 
        story: "Sherwood Forest is alive with the rustle of leaves as Robin Hood hones his archery skills. This is just the beginning of a great adventure." 
    },
    { 
        level: 2, velocity: 25, distance: 50, 
        story: "The village square is bustling with excitement. You must win the archery contest to earn the villagers’ trust and support." 
    },
    { 
        level: 3, velocity: 30, distance: 70, 
        story: "Captured villagers are tied up by the Sheriff’s men. Only your precise shots can cut the ropes and set them free." 
    },
    { 
        level: 4, velocity: 35, distance: 90, 
        story: "The Sheriff’s men have set a trap to intercept a wagon of stolen gold. Protect the wagon and thwart their plans!" 
    },
    { 
        level: 5, velocity: 40, distance: 110, 
        story: "You are invited to the Sheriff’s grand tournament. Outshoot his guards to prove you’re the best archer in the land." 
    },
    { 
        level: 6, velocity: 45, distance: 130, 
        story: "The final duel with the Sheriff himself! One perfect shot will decide the fate of Nottingham and its people." 
    }
];
const tolerance = 0.5;

let currentLevel = 0;

// Convert degrees to radians
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180.0;
}

// Calculate projectile range
function calculateRange(angle, velocity) {
    const radians = degreesToRadians(angle);
    return ((velocity ** 2) * Math.sin(2 * radians)) / g;
}

// Log messages to the story log
function logMessage(logId, message) {
    const log = document.getElementById(logId);
    log.innerText += `${message}\n`;
    log.scrollTop = log.scrollHeight;
}

// Load the current level story
function loadLevelStory() {
    const { level, story } = levels[currentLevel];
    const storyLog = document.getElementById("story-log");
    storyLog.innerText = `Level ${level}: ${story}`;
    document.getElementById("story-container").style.display = "block";
    document.getElementById("gameplay-container").style.display = "none";
}

// Load gameplay for the current level
function loadLevelGameplay() {
    const { level, velocity, distance } = levels[currentLevel];
    logMessage("game-log", `Level ${level}: Target Distance: ${distance} meters | Arrow Velocity: ${velocity} m/s`);
    logMessage("game-log", "Enter an angle between 0 and 90 degrees to hit the target.");
    document.getElementById("story-container").style.display = "none";
    document.getElementById("gameplay-container").style.display = "block";
}

// Handle projectile firing
function fireProjectile() {
    const angleInput = document.getElementById("angle-input");
    const angle = parseFloat(angleInput.value);
    const { velocity, distance } = levels[currentLevel];

    if (isNaN(angle) || angle < 0 || angle > 90) {
        logMessage("game-log", "Invalid input. Please enter a valid angle between 0 and 90 degrees.");
        return;
    }

    const range = calculateRange(angle, velocity);
    logMessage("game-log", `You shot an arrow that landed ${range.toFixed(2)} meters away.`);

    if (Math.abs(range - distance) <= tolerance) {
        logMessage("game-log", "You hit the target! The crowd cheers.");
        currentLevel++;
        if (currentLevel < levels.length) {
            loadLevelStory();
        } else {
            logMessage("game-log", "Congratulations! You have completed all levels and defeated the Sheriff. Nottingham is free!");
            document.getElementById("fire-button").disabled = true;
        }
    } else if (range < distance) {
        logMessage("game-log", "The arrow fell short. Aim higher.");
    } else {
        logMessage("game-log", "The arrow overshot. Aim lower.");
    }
}

// Initialize the game
function initGame() {
    currentLevel = 0;
    logMessage("story-log", "Welcome to Robin Hood: Archery Adventure.");
    loadLevelStory();
}

// Event listeners
document.getElementById("skip-button").addEventListener("click", loadLevelGameplay);
document.getElementById("fire-button").addEventListener("click", fireProjectile);
window.onload = initGame;
