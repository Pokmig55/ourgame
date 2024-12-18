// Constants for game physics
const g = 9.8;
const levels = [
    { 
        level: 1, velocity: 20, distance: 30, 
        story: `
        Sherwood Forest: Robin Hood practices his aim amidst the trees.
        `,
        ascii: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       /\\        🌲   🌲      /\\
      /__\\   🌳       🌳    /__\\
     [____]           🌲    [____]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
    },
    { 
        level: 2, velocity: 25, distance: 50, 
        story: `
Villagers gather in the square to watch the archery contest.
        `,
        ascii: `
    __________________________
   |                          |
   |       VILLAGE SQUARE     |
   |__________________________|
    /\\         /\\        /\\
   /__\\       /__\\      /__\\
  [____]      [____]     [____]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
    },
    { 
        level: 3, velocity: 30, distance: 70, 
        story: `

The Sheriff’s castle looms ahead. Can Robin infiltrate it?
        `,
        ascii: `
       ||  ||     ||  ||
    [] ||  ||  [] ||  || []
    || ||  ||     ||  || ||
    || ||  ||     ||  || ||
   _||_||__||_____|_|_||_||_
  |_________________________|
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
    },
    // Add more levels as needed...
];

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

// Log messages to the game log
function logMessage(logId, message, isHint = false) {
    const log = document.getElementById(logId);
    const messageClass = isHint ? "hint" : "log-message";
    const logEntry = `<div class="${messageClass}">${message}</div>`;
    log.innerHTML += logEntry;
    log.scrollTop = log.scrollHeight;
}

// Load the current level story with ASCII art
function loadLevelStory() {
    const { level, story, ascii } = levels[currentLevel];
    const storyLog = document.getElementById("story-log");
    storyLog.innerHTML = `
        <div class="story-ascii">${ascii}</div>
        <div class="story-message">Level ${level}: ${story}</div>
    `;
    document.getElementById("story-container").style.display = "block";
    document.getElementById("gameplay-container").style.display = "none";
}

// Load gameplay for the current level
function loadLevelGameplay() {
    const { level, velocity, distance } = levels[currentLevel];
    logMessage("game-log", `Target Distance: ${distance} meters | Arrow Velocity: ${velocity} m/s`);
    logMessage("game-log", "Enter an angle between 0 and 90 degrees to hit the target.", true);
    document.getElementById("story-container").style.display = "none";
    document.getElementById("gameplay-container").style.display = "block";
}

// Handle projectile firing
function fireProjectile() {
    const angleInput = document.getElementById("angle-input");
    const angle = parseFloat(angleInput.value);
    const { velocity, distance } = levels[currentLevel];

    if (isNaN(angle) || angle < 0 || angle > 90) {
        logMessage("game-log", "Invalid input. Please enter a valid angle between 0 and 90 degrees.", true);
        return;
    }

    const range = calculateRange(angle, velocity);
    logMessage("game-log", `Your arrow landed ${range.toFixed(2)} meters away.`);

    if (Math.abs(range - distance) <= 0.5) {
        logMessage("game-log", "You hit the target! Well done!");
        currentLevel++;
        if (currentLevel < levels.length) {
            logMessage("game-log", `Prepare for Level ${levels[currentLevel].level}...`);
            loadLevelStory();
        } else {
            logMessage("game-log", "You have completed all levels. Nottingham is free! Congratulations!");
            document.getElementById("fire-button").disabled = true;
        }
    } else if (range < distance) {
        logMessage("game-log", "The arrow fell short. Aim higher.", true);
    } else {
        logMessage("game-log", "The arrow overshot. Aim lower.", true);
    }
}

// Initialize the game
function initGame() {
    currentLevel = 0;
    loadLevelStory();
}

// Event listeners
document.getElementById("skip-button").addEventListener("click", loadLevelGameplay);
document.getElementById("fire-button").addEventListener("click", fireProjectile);
window.onload = initGame;
