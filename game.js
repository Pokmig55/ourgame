const tolerance = 1;
const levels = [
    {
        level: 1,
        story: `
 [][][] /""\\ [][][] 
  |::| /____\\ |::|  
  |[]|_|::::|_|[]|  
  |::::::__::::::|  
  |:::::/||\\:::::|  
  |:#:::||||::#::|  
 In the heart of Sherwood Forest, Robin Hood faced a challenge to rob a
 Nobleman who was on his way to the vault to store a sack full of gold coins.`,
        targetHint: "The noble carriage was already on a hill that had a height 3.05 meters high and 10 meters away, awaited his arrow. Standing at 2.00 meters tall, Robin needed to shoot the horse-drawn carriage to cut the rope that tied the sack containing the gold coins. What is the initial speed of the arrow to hit the target in m/s?",
        correctAngle: 10.67,
    },
    {
        level: 2,
        story: `
   __||__  
  / .--. \\  
  / /    \\ \\  
 | |      | |  
  \\ \\    / /  
   '--' '--'  
Village Square: Robin's archery skills are tested before a crowd.`,
        targetHint: "Try a balanced angle.",
        correctAngle: 35,
    },
    // Add remaining levels...
];

let currentLevel = 0;

function displayStory() {
    const { level, story } = levels[currentLevel];
    const storyLog = document.getElementById("story-log");
    storyLog.innerHTML = `
        <div>Level ${level}</div>
        <pre>${story}</pre>
    `;
    document.getElementById("story-container").style.display = "block";
    document.getElementById("gameplay-container").style.display = "none";
    document.getElementById("congrats-container").style.display = "none";
}

function loadGameplay() {
    const { level, targetHint } = levels[currentLevel];
    const gameLog = document.getElementById("game-log");
    gameLog.innerHTML = `
        <div>Level ${level}</div>
        <div>${targetHint}</div>
        <div>Enter your answer:</div>
    `;
    document.getElementById("story-container").style.display = "none";
    document.getElementById("gameplay-container").style.display = "block";
    document.getElementById("congrats-container").style.display = "none";
}

function handleInput() {
    const angleInput = parseFloat(document.getElementById("angle-input").value);
    const { correctAngle } = levels[currentLevel];
    if (Math.abs(angleInput - correctAngle) <= tolerance) {
        document.getElementById("congrats-container").style.display = "block";
        document.getElementById("gameplay-container").style.display = "none";
        document.getElementById("story-container").style.display = "none";
        document.getElementById("congrats-message").innerText = `Great shot! You've completed Level ${levels[currentLevel].level}!`;
        currentLevel++;
        if (currentLevel >= levels.length) {
            document.getElementById("next-level-button").innerText = "Finish Game";
        }
    } else {
        logFeedback("Missed! Try again.", true);
    }
}

function proceedToNextLevel() {
    if (currentLevel < levels.length) {
        displayStory();
    } else {
        logFeedback("Congratulations! You've completed the game!");
        document.getElementById("congrats-container").innerHTML = `
            <div>Thank you for playing!</div>
        `;
    }
}

function logFeedback(message, isHint = false) {
    const log = document.getElementById("game-log");
    const messageClass = isHint ? "hint" : "success";
    log.innerHTML += `<div class="${messageClass}">${message}</div>`;
    log.scrollTop = log.scrollHeight;
}

function initGame() {
    currentLevel = 0;
    displayStory();
}

document.getElementById("skip-button").addEventListener("click", loadGameplay);
document.getElementById("fire-button").addEventListener("click", handleInput);
document.getElementById("next-level-button").addEventListener("click", proceedToNextLevel);
window.onload = initGame;
