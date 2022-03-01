const computer = [`king`, `commoner`, `slave`];
/*let humanScore = document.getElementById(`humanSpan`);
let computerScore = document.getElementById(`computerSpan`);*/

let humanScore = 0;
let computerScore = 0;

function battleKing(){
    var randomIndex = Math.floor(Math.random()*computer.length);
    var randomElement = computer[randomIndex];
    if (randomElement == `king`){
        console.log(`king`);
        humanScore += 0;
        computerScore += 0;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `commoner`){
        console.log(`commoner`);
        humanScore += 1;
        computerScore += 0;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `slave`){
        console.log(`slave`);
        humanScore += 0;
        computerScore += 1;
        console.log(humanScore);
        console.log(computerScore);
    }
};

function battleCommoner(){
    var randomIndex = Math.floor(Math.random()*computer.length);
    var randomElement = computer[randomIndex];
    if (randomElement == `king`){
        console.log(`king`);
        humanScore.innerHTML = 0;
    }
    else if (randomElement == `commoner`){
        console.log(`commoner`);
    }
    else if (randomElement == `slave`){
        console.log(`slave`);
    }
};

function battleSlave(){
    var randomIndex = Math.floor(Math.random()*computer.length);
    var randomElement = computer[randomIndex];
    if (randomElement == `king`){
        console.log(`king`);
        humanScore.innerHTML = 0;
    }
    else if (randomElement == `commoner`){
        console.log(`commoner`);
    }
    else if (randomElement == `slave`){
        console.log(`slave`);
    }
};