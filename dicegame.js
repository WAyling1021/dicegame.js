function displayRules ()
{ 
	
		let str = "rulesOfTheGame"

			var rulesOfTheGame = "i am given a 4-sided, 6-sided, and 8-sided die to roll in round 1";
			rulesOfTheGame += "if i roll a three in round 1, I get a “money ball”, which doubles my score";
			rulesOfTheGame += "if i don’t roll a three in round 1, the die value is my score"; 
			rulesOfTheGame += "i have the ability to roll three times in round 1, with the 4-sided being my first roll, the 6-sided being my second roll, and the 8-sided being my third roll";
			rulesOfTheGame += "if i do score 21 points or more in round 1, then i get to choose a die to roll as a bonus value";
			rulesOfTheGame += "if i don’t score at least 20 points in round 1, then I begin round 2";
			rulesOfTheGame += "if i roll a six in round 2, I get a “money ball”, which doubles my score";  
			rulesOfTheGame += "if i don’t roll a six in round 2, the die value is my score"; 
			rulesOfTheGame += "i have the ability to roll three times in round 2, with the 10-sided being my first roll, the 12-sided being my second roll, and the 20-sided being my third roll"; 
			rulesOfTheGame += "i have to reach a score of 10 or better in round 1 to continue into the second round";
			rulesOfTheGame += "to win the 3 point contest you need a score of 21 or better"; 

		console.log(str); 
		console.log(rulesOfTheGame);


}


function rollDice(numberOfSides){
	let dieValue = Math.floor(Math.random() * numberOfSides) + 1; 
	console.log(dieValue); 

	if (dieValue === 3) {
		dieValue = dieValue * 2; 
	}

	return dieValue; 
}
let round = 1;

displayRules();
round++
console.log("Round "+round);
rollDice(4);
rollDice(6);
rollDice(8); 

function addingTotalScore(){
	let totalScore = (); 
}

let result = addingTotalScore(); 
console.log(result); 

function rollDice(numberOfSides){
	let dieValue = Math.floor(Math.random() * numberOfSides) + 1; 
	console.log(dieValue); 

	if (dieValue === 6) {
		dieValue = dieValue * 2; 
	}

	return dieValue; 
}


displayRules();
round++
console.log("Round "+round);
rollDice(10);
rollDice(12); 
rollDice(20); 

function addingTotalScore(){
	let totalScore = ; 
}

let finalResult = addingTotalScore(); 
console.log(finalResult); 



























