// Build a very simple 5 Dice roll game.

// 1's are worth 100 points
// 5's are worth 50 points
// Triple 1's are worth 1000
// triple 2-6's are worth the face value * 100 (2=200, 3=300, 6=600 ect) 
// Show a round score 
// Show a total score
let button = document.getElementById("button");

function rollDice(){
    const dice_roll = Array.from(Array(5)).map(() => Math.floor(Math.random() * 6) + 1);
    let my_dice = document.createElement("div");
    my_dice.innerHTML = dice_roll;
    document.body.appendChild(my_dice);
    return dice_roll;

}

const removeDice = () => {
    let my_dice = document.getElementsByClassName("dice");
    while (my_dice.length > 0) {
        my_dice[0].remove();
    }
}

function roundScore(dice_roll){
    let round_score = 0;
    for(let i = 0; i < dice_roll.length; i++){
        if(dice_roll[i] === 1){
            round_score += 100;
        } else if(dice_roll[i] === 5){
            round_score += 50;
        } else {
            round_score += dice_roll[i] * 100;
        }
    }
    return round_score;
}

button.addEventListener("click", buttonClick);{
    let dice_roll = rollDice();
    let round_score = roundScore(dice_roll);
    let total_score = totalScore(round_score);
    printRoundScore(round_score);
    printTotalScore(total_score);

}



function buttonClick(){
    rollDice()
    printRoundScoreOfDice();
    printTotalScoreOfDice();
    printSumOfDice();
    removeDice();
}




function sumOfDice(dice_roll){
    let sum = 0;
    for(let i = 0; i < dice_roll.length; i++){
        sum += dice_roll[i];
    }
    return sum;
}

function printSum(sum){
    let placeholder = document.getElementById("Dice-Total");
    placeholder.innerHTML = sum;
}

function printSumOfDice(){
    let dice_roll = rollDice();
    let sum = sumOfDice(dice_roll);
    printSum(sum);
}



function printRoundScore(round_score){
    let placeholder = document.getElementById("Round-Score");
    placeholder.innerHTML = round_score;
}

function printRoundScoreOfDice(){
    let dice_roll = rollDice();
    let round_score = roundScore(dice_roll);
    printRoundScore(round_score);
}

function totalScore(round_score){
    let total_score = 0;
    total_score += round_score;
    return total_score;
}

function printTotalScore(total_score){
    let placeholder = document.getElementById("Total-Score");
    placeholder.innerHTML = total_score;
}

function printTotalScoreOfDice(){
    let dice_roll = rollDice();
    let round_score = roundScore(dice_roll);
    let total_score = totalScore(round_score);
    printTotalScore(total_score);
}

