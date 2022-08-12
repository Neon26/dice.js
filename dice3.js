function rollDice(){
    let dice1 =document.getElementById("dice1");
    let dice2 =document.getElementById("dice2");
    let dice3 =document.getElementById("dice3");
    let dice4 =document.getElementById("dice4");
    let dice5 =document.getElementById("dice5");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let d5 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d1 + d2 + d3 + d4 + d5;
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;
    dice3.innerHTML = d3;
    dice4.innerHTML = d4;
    dice5.innerHTML = d5;
    return diceTotal;

}