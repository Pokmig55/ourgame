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
        targetHint: "What is the speed of the arrow needed to hit the target in m/s?",
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
        targetHint: "The target is at a balanced distance. Try a medium angle.",
        correctAngle: 35,
    },
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
}

function handleInput() {
    const angleInput = parseFloat(document.getElementById("angle-input").value);
    const { correctAngle } = levels[currentLevel];
    if (Math.abs(angleInput - correctAngle) <= tolerance) {
        logFeedback("Great shot! You've hit the target!");
        currentLevel++;
        if (currentLevel < levels.length) {
            logFeedback("Get ready for the next level...");
            displayStory();
        } else {
            logFeedback("You've completed the game. Congratulations!");
            document.getElementById("fire-button").disabled = true;
        }
    } else {
        logFeedback("Missed! Try again.", true);
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
window.onload = initGame;
