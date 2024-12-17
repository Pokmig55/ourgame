const g = 9.8; // Gravity constant
const vLevel1 = 20.0; // Initial velocity for Level 1
const vLevel2 = 25.0; // Initial velocity for Level 2
const vLevel3 = 30.0; // Initial velocity for Level 3
const dLevel1 = 30.0; // Distance for Level 1
const dLevel2 = 50.0; // Distance for Level 2
const dLevel3 = 70.0; // Distance for Level 3
const tolerance = 0.5; // Tolerance for hitting the target

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180.0;
}

// Function to calculate the range of the projectile
function calculateRange(angleDegrees, velocity) {
    const angleRadians = degreesToRadians(angleDegrees);
    return (velocity * velocity * Math.sin(2 * angleRadians)) / g;
}

// Function to handle playing a level
function playLevel(level) {
    let velocity, distance;
    if (level === 1) {
        velocity = vLevel1;
        distance = dLevel1;
    } else if (level === 2) {
        velocity = vLevel2;
        distance = dLevel2;
    } else {
        velocity = vLevel3;
        distance = dLevel3;
    }

    // Get the angle input from the user
    const userAngle = parseFloat(document.getElementById('angle').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(userAngle) || userAngle < 0 || userAngle > 90) {
        resultDiv.innerHTML = "Please enter a valid angle between 0 and 90 degrees.";
        return;
    }

    // Calculate the range based on the input angle
    const range = calculateRange(userAngle, velocity);
    resultDiv.innerHTML = `Your projectile landed at ${range.toFixed(2)} meters.<br>`;

    // Check if the player hit the target
    if (Math.abs(range - distance) <= tolerance) {
        resultDiv.innerHTML += "Congratulations! You hit the target!";
    } else if (range < distance) {
        resultDiv.innerHTML += "Your projectile fell short of the target. Try a larger angle.";
    } else {
        resultDiv.innerHTML += "Your projectile overshot the target. Try a smaller angle.";
    }
}
