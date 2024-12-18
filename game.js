// Constants for game physics
const g = 9.8;
const levels = [
    { 
        level: 1, velocity: 20, distance: 30, targetHeight: 5, 
        story: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       /\\        🌲   🌲       /\\
      /  \\   🌳         🌳    /  \\
     /    \\        🌲         /    \\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Robin Hood practices shooting at a target on a tree stump.
        `,
        ascii: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       /\\       🌲   🌲       /\\
      /__\\   🌳         🌳   /__\\
     [____]       🎯        [____]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
    },
    { 
        level: 2, velocity: 25, distance: 50, targetHeight: 10,
        story: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    __________________________
   |                          |
   |       VILLAGE SQUARE     |
   |__________________________|
    /\\         /\\         /\\
   /  \\       /  \\       /  \\
  [____]     [____]     [____]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Robin Hood aims at a target placed atop a watchtower.
        `,
        ascii: `
    __________________________
   |                          |
   |       VILLAGE SQUARE     |
   |__________________________|
        🎯
    /\\        /\\        /\\
   /__\\      /__\\      /__\\
  [____]    [____]    [____]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
    },
    { 
        level: 3, velocity: 30, distance: 70, targetHeight: 15,
        story: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       ||  ||     ||  ||
    [] ||  ||  [] ||  || []
    || ||  ||     ||  || ||
    || ||  ||     ||  || ||
   _||_||__||_____|_|_||_||_
  |_________________________|
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Robin Hood faces his ultimate challenge: hitting a high target on the castle walls.
        `,
        ascii: `
       ||  ||     ||  ||
    [] ||  ||  🎯 ||  || []
    || ||  ||     ||  || ||
   _||_||__||_____|_|_||_||_
  |_________________________|
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
    },
];

// Convert degrees to radians
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180.0;
}

// Calculate projectile motion (x, y)
function calculateProjectile(angle, velocity, x) {
    const angleRadians = degreesToRadians(angle);
    const y = x * Math.tan(angleRadians) - (g * x ** 2) / (2 * velocity ** 2 * Math.cos(angleRadians) ** 2);
    return y;
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
    const { level, velocity, distance, targetHeight } = levels[currentLevel];
    logMessage("game-log", `Target Distance: ${distance} meters | Target Height: ${targetHeight} meters | Arrow Velocity: ${velocity} m/s`);
    logMessage("game-log", "Enter an angle between 0 and 90 degrees to hit the target.", true);
    document.getElementById("story-container").style.display = "none";
    document.getElementById("gameplay-container").style.display = "block";
}

// Handle projectile firing
function fireProjectile() {
    const angleInput = document.getElementById("angle-input");
    const angle = parseFloat(angleInput.value);
    const { velocity, distance, targetHeight } = levels[currentLevel];

    if (isNaN(angle) || angle < 0 || angle > 90) {
        logMessage("game-log", "Invalid input. Please enter a valid angle between 0 and 90 degrees.", true);
        return;
    }

    const y = calculateProjectile(angle, velocity, distance);
    logMessage("game-log", `At distance ${distance} meters, the arrow's height was ${y.toFixed(2)} meters.`);

    if (Math.abs(y - targetHeight) <= 0.5) {
        logMessage("game-log", "You hit the target! Well done!");
        currentLevel++;
        if (currentLevel < levels.length) {
            logMessage("game-log", `Prepare for Level ${levels[currentLevel].level}...`);
            loadLevelStory();
        } else {
            logMessage("game-log", "You have completed all levels. Nottingham is free! Congratulations!");
            document.getElementById("fire-button").disabled = true;
        }
    } else if (y < targetHeight) {
        logMessage("game-log", "The arrow fell short of the target height. Aim higher.", true);
    } else {
        logMessage("game-log", "The arrow overshot the target height. Aim lower.", true);
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
