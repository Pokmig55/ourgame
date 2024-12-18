const g = 9.8;
const levels = [
    { velocity: 20, distance: 30 },
    { velocity: 25, distance: 50 },
    { velocity: 30, distance: 70 }
];
let currentLevel = 0;

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function calculateRange(angleDegrees, velocity) {
    const angleRadians = degreesToRadians(angleDegrees);
    return (velocity * velocity * Math.sin(2 * angleRadians)) / g;
}

function playLevel() {
    const angleInput = document.getElementById('angle-input');
    const resultDiv = document.getElementById('result');

    const angle = parseFloat(angleInput.value);
    if (isNaN(angle) || angle < 0 || angle > 90) {
        resultDiv.innerText = "Please enter a valid angle between 0 and 90 degrees.";
        resultDiv.className = "fail";
        return;
    }

    const levelData = levels[currentLevel];
    const range = calculateRange(angle, levelData.velocity);

    if (Math.abs(range - levelData.distance) <= 0.5) {
        resultDiv.innerText = `🎉 Congratulations! You hit the target at ${range.toFixed(2)} meters!`;
        resultDiv.className = "success";
        currentLevel++;
        if (currentLevel < levels.length) {
            setTimeout(() => {
                loadLevel();
                resultDiv.innerText = "";
            }, 2000);
        } else {
            resultDiv.innerText += "\nYou've completed all levels! Well done! 🎉";
        }
    } else if (range < levelData.distance) {
        resultDiv.innerText = `Your projectile landed at ${range.toFixed(2)} meters. Try a larger angle.`;
        resultDiv.className = "fail";
    } else {
        resultDiv.innerText = `Your projectile landed at ${range.toFixed(2)} meters. Try a smaller angle.`;
        resultDiv.className = "fail";
    }
}

function loadLevel() {
    if (currentLevel < levels.length) {
        const levelData = levels[currentLevel];
        document.getElementById('target-distance').innerText = levelData.distance;
        document.getElementById('initial-velocity').innerText = levelData.velocity;
        document.getElementById('angle-input').value = "";
        document.querySelector('h2').innerText = `Level ${currentLevel + 1}`;
    }
}

document.getElementById('launch-button').addEventListener('click', playLevel);
window.onload = loadLevel;
