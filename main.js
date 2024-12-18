const g = 9.8; // Gravity constant
let monsterHealth = 100; // Monster starts with 100 HP
let playerHealth = 50; // Player starts with 50 HP
const velocity = 20; // Fixed projectile velocity
const targetDistance = 30; // Fixed target distance
const tolerance = 1; // Accuracy tolerance

// Utility to convert degrees to radians
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180.0;
}

// Calculate projectile range
function calculateRange(angle) {
    const radians = degreesToRadians(angle);
    return ((velocity ** 2) * Math.sin(2 * radians)) / g;
}

// Update the game log
function logMessage(message) {
    const gameLog = document.getElementById("game-log");
    gameLog.innerText += `\n${message}`;
    gameLog.scrollTop = gameLog.scrollHeight;
}

// Handle player firing the projectile
function fireProjectile() {
    const angleInput = document.getElementById("angle-input");
    const angle = parseFloat(angleInput.value);

    if (isNaN(angle) || angle < 0 || angle > 90) {
        logMessage("⚠ Invalid angle! Please enter a value between 0 and 90.");
        return;
    }

    const range = calculateRange(angle);
    logMessage(`🎯 You fired a projectile at ${range.toFixed(2)} meters!`);

    // Check if the projectile hit the monster
    if (Math.abs(range - targetDistance) <= tolerance) {
        monsterHealth -= 25;
        logMessage("💥 You hit the monster! -25 HP");
    } else if (range < targetDistance) {
        logMessage("❌ Your attack fell short! The monster attacks you!");
        playerHealth -= 10;
    } else {
        logMessage("❌ You overshot! The monster attacks you!");
        playerHealth -= 10;
    }

    // Check for win/lose conditions
    if (monsterHealth <= 0) {
        logMessage("🎉 You defeated the monster! The path is clear.");
        endGame("win");
    } else if (playerHealth <= 0) {
        logMessage("💀 The monster defeated you. Game over.");
        endGame("lose");
    } else {
        logMessage(`Monster HP: ${monsterHealth}, Your HP: ${playerHealth}`);
    }
}

// End the game
function endGame(result) {
    const fireButton = document.getElementById("fire-button");
    fireButton.disabled = true;

    if (result === "win") {
        logMessage("🎊 Congratulations, you are victorious!");
    } else {
        logMessage("💔 Better luck next time.");
    }
}

// Attach event listener to the fire button
document.getElementById("fire-button").addEventListener("click", fireProjectile);
