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
 Robin Hood faced a challenge to rob
 a Nobleman who was on his way 
 to the vault to store a sack
 full of gold coins.`,
        targetHint: "The noble carriage was already on a hill that had a height 3.05 meters high and 10 meters away, awaited his arrow. Standing at 2.00 meters tall, Robin needed to shoot The horse-drawn carriage to cut the rope that tied the sack containing the gold coins.With angle of 40° from the horizontal,What is the speed of the arrow to hit the target?",
        correctAngle: 10.67,
    },
    {
        level: 2,
        story: `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣦⡈⠻⢿⡏⠀⠈⣿⡇⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣦⣄⠙⢿⣿⡿⠃⣠⣾⣿⣿⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡈⠰⣾⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
⠀⠀⠤⠾⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠦⠈⠉⠉⣉⣉⣉⣉⣉⡉⠉⠀⠀
⠀⠀⠀⠀⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⡆⢰⣶⣶⣶⠿⠿⠿⣿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⣿⣿⠉⠉⠉⣿⣿⡿⠿⠿⢿⣿⡇⢸⣿⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣀⣀⣀⣿⣿⡇⠀⠀⢸⣿⡇⠸⠿⠿⠿⠀⠀⠀⠿⠿⠇⠀⠀⠀
⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⡇⠀
As the sun set over Sherwood Forest,
Robin Hood stood ready for one
final shot. The Sheriff of Nottingham
had stolen the people’s treasure,
and Robin was determined to get it back.
A silver crown sat 100 meters away,
and Robin, with his trusty bow, 
aimed at a perfect 45-degree angle.

He pulled back the string, and the
arrow flew into the air with precision,
reaching its peak before descending and 
striking the crown, knocking it from 
its stand. The Merry Men cheered
as Robin retrieved the crown.

"One shot, one victory," Robin said,smiling.
"This is just the beginning." And with that,
  he vowed to continue fighting for
  justice in Sherwood Forest.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀`,
        targetHint: "Robin Hood aims at a silver crown placed 100 meters away, shooting an arrow at a 45° angle with an initial velocity of 40 m/s. How long does it take for the arrow to reach the target? Assume no air resistance.",
        correctAngle: 3.54 ,
    },
     {
        level: 3,
        story: `
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣄⠀⠀⠀⠀⠀⠀⣏⢉⡆⠀⠀⠀⠀⢰⡋⢹⡄⠀⠀⠀⠀⠀⣠⣤⡀
⠸⣄⣼⡀⠀⠀⠀⠀⠀⢈⡿⡄⠀⠀⠀⠀⢠⠿⡁⠀⠀⠀⠀⠀⠀⣧⣠⠇
⠀⠀⢸⡉⠢⣄⠀⠀⠀⡼⠀⠘⢦⠀⠀⡰⠃⠀⢧⠀⠀⠀⣠⠔⠋⡇⠀⠀
⠀⠀⠀⣇⠀⠈⠑⠒⠒⠁⠀⠀⠀⠑⠊⠁⠀⠀⠈⠒⠒⠊⠁⠀⢸⠀⠀⠀
⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀
⠀⠀⠀⠀⣓⠤⠤⣄⣀⣀⣀⣀⣀⠀⠀⢀⣀⣀⣀⣀⣀⡤⢤⣾⠅⠀⠀⠀
⠀⠀⠀⠀⣏⢭⡙⢒⡒⠒⠒⠛⠛⢻⡛⠛⠛⠒⠒⢒⡒⠋⡭⣽⡇⠀⠀⠀
⠀⠀⠀⠀⣏⡚⠁⠧⠜⠰⣍⠇⠰⣁⣈⠆⠸⣭⠇⠳⠼⠀⢓⣹⠇⠀⠀⠀
⠀⠀⠀⠀⠓⠮⠭⠭⣟⣒⣒⣒⣒⣚⣓⣒⣒⣒⣒⣚⠭⠭⠵⠚⠀⠀⠀⠀
         
As Robin Hood took aim at the silver crown,
 he knew the fight wasn't over. That night,
 he revealed a new challenge to 
 the Merry Men: the Sheriff had built a massive 
 trebuchet aimed at Sherwood Forest, threatening
 the villagers. Robin’s plan was to use his bow
 to shoot an arrow that would sever the
 counterweight rope, disabling the machine.

At dawn, they approached the trebuchet,
and Robin saw it was 25 meters away.
The counterweight rope was hanging loosely
beneath the arm, and Robin needed to strike
it with precision. With his bow ready, he 
calculated the distance, speed, and angle 
of his shot.

He pulled back the string,
aimed carefully, and prepared to fire.`,
  
           targetHint: "Robin must shoot an arrow to hit the counterweight rope of the trebuchet, which is 25 meters away. He plans to shoot at a 30-degree angle, with an initial speed of 40 m/s. What is the maximum height the arrow reaches before descending? (Neglect air resistance and assume gravity is 9.8 m/s²).",

        correctAngle: 20.41,
    },
    {
        level: 4,
        story: ` 

⠀⠀⠀⠀⠀⠀⠀⢠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣹⣷⣶⣶⣶⣶⣦⣤⣤⣤⣤⣤⣤⣀⣀⣀⣀⣀⣀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⠟⠋⠉⢉⡉⠙⢿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠀
⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⠇⠀⠺⣦⣾⣇⣀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣾⣿⠟⠀⢸⡄⠰⠖⢻⡿⣿⡉⠀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣠⣴⣿⡿⠃⠀⠀⠈⢷⣄⠀⠛⠁⠈⢁⣴⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠸⠿⠿⠿⠟⠀⠀⠀⠀⠀⠀⠙⠛⠷⠶⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
As the Sheriff of Nottingham tightened
his grip on Sherwood Forest, he devised
a new weapon: a powerful cannon capable
of launching projectiles at great distances.
To test its might, the Sheriff aimed at a
tree 4 meter away, instructing his soldiers
to fire at an angle of 30 degrees.
The projectile soared through the air,
landing perfectly at the base of the tree.
The Sheriff smirked, confident in his new weapon.

"Hahaha! Eat this bullet Robin!" *The sheriff
said confidently but then the bullet suddenly
hit one of the Merry gang members. Robin was
enraged but he was lacking arrows to return the
shot. So he is slowly walking back 6 meters away
from the sheriff
`,
        targetHint: "The Sheriff, determined to destroy Sherwood Forest, built a massive trebuchet which 15 meters from ground and prepared to fire. Armed with his musket, he aimed at Robin Hood and his gang.As the Sheriff fired, the bullet with velocity 120 m/s , hit one of the merry gangs who were standing meters away from the sheriff with an angle of 30° with the plane. Robin hood noticed that. He immediately moved 6 meters away from the sheriff. But would it hit Robin hood?",
        correctAngle: 1298,
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
        logFeedback("Great ! You've guess correct answer!");
        document.getElementById("next-level-button").style.display = "block";
    } else {
        logFeedback("Wrong! Try again.", true);
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
