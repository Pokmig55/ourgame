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
        targetHint: "The noble carriage is on a hill. What is the correct answer to hit the target?",
        correctAngle: 11,
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
];

let currentLevel = 0;

function displayStory() {
    const { level, story } = levels[currentLevel];
    const storyLog = document.getElementById("story-log");
    storyLog.innerHTML = `<div>Level ${level}</div><pre>${story}</pre>`;
    document.getElementById("story-container").style.display = "block";
    document.getElementById("gameplay-container").style.display = "none";
}

function loadGameplay() {
    const { level, targetHint } = levels[currentLevel];
    const gameLog = document.getElementById("game-log");
    gameLog.innerHTML = `<div>Level ${level}</div><div>${targetHint}</div>`;
    document.getElementById("story-container").style.display = "none";
    document.getElementById("gameplay-container").style.display = "block";
}

function handleInput() {
    const angleInput = parseFloat(document.getElementById("angle-input").value);
    const { correctAngle } = levels[currentLevel];
    if (Math.abs(angleInput - correctAngle) <= tolerance) {
        logFeedback("Great shot! You've hit the target!");
        document.getElementById("next-level-button").style.display = "block";
    } else {
        logFeedback("Missed! Try again.", true);
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        displayStory();
        document.getElementById("next-level-button").style.display = "none";
    } else {
        alert("Congratulations! You've completed the game.");
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
document.getElementById("next-level-button").addEventListener("click", nextLevel);
window.onload = initGame;
