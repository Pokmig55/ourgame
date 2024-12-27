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
  
Robin Hood faced a challenge in Sherwood Forest.
The noble carriage awaited his arrow on a hill, 
3.05 meters high and 10 meters away.
Standing at 2 meters tall, Robin must aim his bow
to cut the rope tying the sack of gold coins.
Calculate the speed of the arrow with a 40° angle.`,
        targetHint: "What is the initial speed of the arrow to hit the target?",
        correctAnswer: 35.0,
    },
    {
        level: 2,
        story: `The Sheriff of Nottingham stole the people's treasure!
A silver crown sat 100 meters away. Robin aimed
at a 45° angle, pulling back his bowstring. The arrow
flew through the air, striking the crown with precision.
How long does it take for the arrow to hit the target?`,
        targetHint: "Calculate the time to hit the target assuming no air resistance.",
        correctAnswer: 5.5,
    },
];

let currentLevel = 0;

function displayStory() {
    const { level, story } = levels[currentLevel];
    const storyLog = document.getElementById("story-log");
    storyLog.innerHTML = `<h2>Level ${level}</h2><p>${story}</p>`;
    document.getElementById("story-container").style.display = "block";
    document.getElementById("gameplay-container").style.display = "none";
}

function loadGameplay() {
    const { targetHint } = levels[currentLevel];
    const gameLog = document.getElementById("game-log");
    gameLog.innerHTML = `<p>${targetHint}</p>`;
    document.getElementById("story-container").style.display = "none";
    document.getElementById("gameplay-container").style.display = "block";
}

function handleInput() {
    const userAnswer = parseFloat(document.getElementById("angle-input").value);
    const { correctAnswer } = levels[currentLevel];
    if (Math.abs(userAnswer - correctAnswer) <= tolerance) {
        alert("Great shot! You've completed this level!");
        document.getElementById("next-level-button").style.display = "block";
    } else {
        alert("Missed! Try again.");
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        displayStory();
        document.getElementById("next-level-button").style.display = "none";
    } else {
        alert("Congratulations! You've completed the game!");
    }
}

function initGame() {
    currentLevel = 0;
    displayStory();
}

document.getElementById("skip-button").addEventListener("click", loadGameplay);
document.getElementById("fire-button").addEventListener("click", handleInput);
document.getElementById("next-level-button").addEventListener("click", nextLevel);
window.onload = initGame;
