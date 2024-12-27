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
 In the heart of Sherwood Forest,
 Robin Hood faced a challenge to rob a
 Nobleman who was on his way to the
 vault to store a sack full 
 of gold coins.`,
        targetHint: " The noble carriage was already on a hill that had a height 3.05 meters high and 10 meters away, awaited his arrow. Standing at 2.00 meters tall, Robin needed to shoot The horse-drawn carriage to cut the rope that tied the sack containing the gold coins.With angle of 40° from the horizontal,What is the speed of the arrow to hit the target?",
        correctAngle: 10.67,
    },
    {
        level: 2,
        story: "As the sun set over Sherwood Forest, Robin Hood stood ready for one final shot. The Sheriff of Nottingham had stolen the people’s treasure, and Robin was determined to get it back. A silver crown sat 100 meters away, and Robin, with his trusty bow, aimed at a perfect 45-degree angle. He pulled back the string, and the arrow flew into the air with precision, reaching its peak before descending and striking the crown, knocking it from its stand. The Merry Men cheered as Robin retrieved the crown. One shot, one victory Robin said, smiling. This is just the beginning. And with that, he vowed to continue fighting for justice in Sherwood Forest.",
        targetHint:
            "Robin Hood aims at a silver crown placed 100 meters away, shooting an arrow at a 45° angle with an initial velocity of 40 m/s. How long does it take for the arrow to reach the target, and at what height will it strike the crown? Assume no air resistance.",
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
