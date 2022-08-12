// let dice ={
//     roll: function(){
//         let randomNumber = Math.floor(Math.random() * 6) + 1;
//         return randomNumber;
//     }
// }


// function printNumber(number){
//     let placeholder = document.getElementById("placeholder");
//     placeholder.innerHTML = number;
// }
// function printNumberFivetimes(){
//     for(let i = 0; i < 5; i++){
//         let number = dice.roll();
//         printNumber(number);
//     }
// }

let button = document.getElementById("button");

button.addEventListener("click", function printNumberFivetimes(){
    let dice_roll = rollDice();
    let placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = dice_roll;
}
);
let rollDice = () => {
    const dice_roll = Array.from(Array(5)).map(() => Math.floor(Math.random() * 6) + 1);
    return dice_roll;}

let sumOfDice = (dice_roll) => {
    let sum = 0;
    for(let i = 0; i < dice_roll.length; i++){
        sum += dice_roll[i];
    }
    return sum;
}
let printSum = (sum) => {
    let placeholder = document.getElementById("Dice-Total");
    placeholder.innerHTML = sum;
}
let printSumOfDice = () => {
    let dice_roll = rollDice();
    let sum = sumOfDice(dice_roll);
    printSum(sum);
}











