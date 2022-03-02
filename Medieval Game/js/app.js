const computer = [`king`, `commoner`, `slave`];
let humanScore = 0;
let computerScore = 0;

function battleKing(){
    var randomIndex = Math.floor(Math.random()*computer.length);
    var randomElement = computer[randomIndex];
    if (randomElement == `king`){
        console.log(`king`);
        humanScore += 0;
        computerScore += 0;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `King`; 
        document.getElementById(`computerResults`).innerHTML = `King`; 
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `commoner`){
        console.log(`commoner`);
        humanScore += 1;
        computerScore += 0;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `King`; 
        document.getElementById(`computerResults`).innerHTML = `Commoner`;  
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `slave`){
        console.log(`slave`);
        humanScore += 0;
        computerScore += 1;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `King`; 
        document.getElementById(`computerResults`).innerHTML = `Slave`;   
        console.log(humanScore);
        console.log(computerScore);
    }
};

function battleCommoner(){
    var randomIndex = Math.floor(Math.random()*computer.length);
    var randomElement = computer[randomIndex];
    if (randomElement == `king`){
        console.log(`king`);
        humanScore += 0;
        computerScore += 1;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `Commoner`; 
        document.getElementById(`computerResults`).innerHTML = `King`;  
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `commoner`){
        console.log(`commoner`);
        humanScore += 0;
        computerScore += 0;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `Commoner`; 
        document.getElementById(`computerResults`).innerHTML = `Commoner`;  
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `slave`){
        console.log(`slave`);
        humanScore += 1;
        computerScore += 0;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `Commoner`; 
        document.getElementById(`computerResults`).innerHTML = `Slave`;  
        console.log(humanScore);
        console.log(computerScore);
    }
};

function battleSlave(){
    var randomIndex = Math.floor(Math.random()*computer.length);
    var randomElement = computer[randomIndex];
    if (randomElement == `king`){
        console.log(`king`);
        humanScore += 1;
        computerScore += 0;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `Slave`; 
        document.getElementById(`computerResults`).innerHTML = `King`;  
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `commoner`){
        console.log(`commoner`);
        humanScore += 0;
        computerScore += 1;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `Slave`; 
        document.getElementById(`computerResults`).innerHTML = `Commoner`;  
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (randomElement == `slave`){
        console.log(`slave`);
        humanScore += 0;
        computerScore += 0;
        document.getElementById(`humanSpan`).innerHTML = `Human: ` + humanScore; 
        document.getElementById(`computerSpan`).innerHTML = `Computer: ` + computerScore;
        document.getElementById(`humanResults`).innerHTML = `Slave`; 
        document.getElementById(`computerResults`).innerHTML = `Slave`;  
        console.log(humanScore);
        console.log(computerScore);
    }
};
