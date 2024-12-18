// Constants for game physics
const g = 9.8;
const levels = [
    { level: 1, velocity: 20, distance: 30, story: "Practice your aim in Sherwood Forest. Hone your skills as Robin Hood and prepare for greater challenges." },
    { level: 2, velocity: 25, distance: 50, story: "Compete in the village archery contest and earn the villagers' trust. Prove your legendary skills." },
    { level: 3, velocity: 30, distance: 70, story: "Save the captured villagers by hitting the ropes holding them. The Sheriff’s men won’t stop you." },
    { level: 4, velocity: 35, distance: 90, story: "The Sheriff’s men are intercepting a wagon carrying stolen gold. Protect it from their ambush!" },
    { level: 5, velocity: 40, distance: 110, story: "Compete in the Sheriff’s grand tournament. Outshoot his guards and prove you’re the greatest archer in the land." },
    { level: 6, velocity: 45, distance: 130, story: "The Sheriff challenges you to a final duel. One perfect shot will secure victory for the people of Nottingham." }
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
function logMessage(message) {
    const storyLog = document.getElementById("story-log");
    storyLog.innerText += `${message}\n`;
    storyLog.scrollTop = storyLog.scrollHeight;
}

// Load the current level
function loadLevel() {
    const { level, velocity, distance, story } = levels[currentLevel];
    logMessage(`Level ${level}:`);
    logMessage(story);
    logMessage(`Target Distance: ${distance} meters | Arrow Velocity: ${velocity} m/s`);
    logMessage(`Enter an angle between 0 and 90 degrees to hit the target.`);
}

// Handle the projectile firing
function fireProjectile() {
    const angleInput = document.getElementById("angle-input");
    const angle = parseFloat(angleInput.value);
    const { velocity, distance } = levels[currentLevel];

    if (isNaN(angle) || angle < 0 || angle > 90) {
        logMessage("Invalid input. Please enter a valid angle between 0 and 90 degrees.");
        return;
    }

    const range = calculateRange(angle, velocity);
    logMessage(`You shot an arrow that landed ${range.toFixed(2)} meters away.`);

    if (Math.abs(range - distance) <= tolerance) {
        logMessage("You hit the target! The crowd cheers.");
        currentLevel++;

        if (currentLevel < levels.length) {
            logMessage(`Prepare for Level ${levels[currentLevel].level}...`);
            loadLevel();
        } else {
            logMessage("Congratulations! You have completed all levels and defeated the Sheriff. The people of Nottingham celebrate your victory!");
            endGame();
        }
    } else if (range < distance) {
        logMessage("The arrow fell short. Aim higher.");
    } else {
        logMessage("The arrow overshot. Aim lower.");
    }
}

// End the game
function endGame() {
    const fireButton = document.getElementById("fire-button");
    fireButton.disabled = true;
    logMessage("Thank you for playing Robin Hood: Archery Adventure.");
}

// Initialize the game
function initGame() {
    currentLevel = 0;
    logMessage("Welcome to Robin Hood: Archery Adventure.");
    loadLevel();
}

// Event listeners
document.getElementById("fire-button").addEventListener("click", fireProjectile);
window.onload = initGame;
