// Constants for game physics
const g = 9.8;
const levels = [
    { level: 1, velocity: 20, distance: 30 },
    { level: 2, velocity: 25, distance: 50 },
    { level: 3, velocity: 30, distance: 70 }
];
const tolerance = 0.5;

let currentLevel = 0;

// Utility: Convert degrees to radians
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180.0;
}

// Utility: Calculate projectile range
function calculateRange(angle, velocity) {
    const radians = degreesToRadians(angle);
    return ((velocity ** 2) * Math.sin(2 * radians)) / g;
}

// Utility: Log messages
function logMessage(message) {
    const gameLog = document.getElementById("game-log");
    gameLog.innerText += `${message}\n`;
    gameLog.scrollTop = gameLog.scrollHeight;
}

// Load the current level
function loadLevel() {
    const { level, velocity, distance } = levels[currentLevel];
    logMessage(`Level ${level}`);
    logMessage(`Target Distance: ${distance} meters`);
    logMessage(`Initial Velocity: ${velocity} m/s`);
    logMessage(`Enter an angle between 0 and 90 degrees to hit the target.`);
}

// Fire the projectile
function fireProjectile() {
    const angleInput = document.getElementById("angle-input");
    const angle = parseFloat(angleInput.value);
    const { velocity, distance } = levels[currentLevel];

    if (isNaN(angle) || angle < 0 || angle > 90) {
        logMessage("Invalid angle. Please enter a value between 0 and 90 degrees.");
        return;
    }

    const range = calculateRange(angle, velocity);
    logMessage(`Your projectile landed at ${range.toFixed(2)} meters.`);

    if (Math.abs(range - distance) <= tolerance) {
        logMessage("Congratulations! You hit the target.");
        currentLevel++;

        if (currentLevel < levels.length) {
            logMessage(`Proceeding to Level ${levels[currentLevel].level}.`);
            loadLevel();
        } else {
            logMessage("You have completed all levels. Well done!");
            endGame();
        }
    } else if (range < distance) {
        logMessage("Your projectile fell short. Try a larger angle.");
    } else {
        logMessage("Your projectile overshot the target. Try a smaller angle.");
    }
}

// End the game
function endGame() {
    const fireButton = document.getElementById("fire-button");
    fireButton.disabled = true;
    logMessage("Game over. Thank you for playing.");
}

// Initialize the game
function initGame() {
    currentLevel = 0;
    logMessage("Welcome to the Projectile Motion Game.");
    loadLevel();
}

// Add event listener to the fire button
document.getElementById("fire-button").addEventListener("click", fireProjectile);

// Start the game
window.onload = initGame;
