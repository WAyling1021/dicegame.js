function displayRules ()
{ 
	
		let str = "rulesOfTheGame"

			var rulesOfTheGame = "i am given a 4-sided, 6-sided, and 8-sided die to roll in round 1 \n";
			rulesOfTheGame += "if i roll a three in round 1, I get a “money ball”, which doubles my score \n";
			rulesOfTheGame += "if i don’t roll a three in round 1, the die value is my score \n"; 
			rulesOfTheGame += "i have the ability to roll three times in round 1, with the 4-sided being my first roll, the 6-sided being my second roll, and the 8-sided being my third roll \n";
			rulesOfTheGame += "if i do score 21 points or more in round 1, then i get to choose a die to roll as a bonus value \n";
			rulesOfTheGame += "if i don’t score at least 20 points in round 1, then I begin round 2 \n";
			rulesOfTheGame += "if i roll a six in round 2, I get a “money ball”, which doubles my score \n";  
			rulesOfTheGame += "if i don’t roll a six in round 2, the die value is my score \n"; 
			rulesOfTheGame += "i have the ability to roll three times in round 2, with the 10-sided being my first roll, the 12-sided being my second roll, and the 20-sided being my third roll \n"; 
			rulesOfTheGame += "i have to reach a score of 10 or better in round 1 to continue into the second round \n";
			rulesOfTheGame += "to win the 3 point contest you need a score of 21 or better \n"; 

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

function addingTotalScoreRoundOne(){
	let totalScore = rollDice(4);
	totalScore += rollDice(6);
	totalScore += rollDice(8); 
	return totalScore;
}

function rollDice(numberOfSides){
	let dieValue = Math.floor(Math.random() * numberOfSides) + 1; 
	console.log(dieValue); 

	if (dieValue === 6) {
		dieValue = dieValue * 2; 
	}

	return dieValue; 
}

function addingTotalScoreRoundTwo(){
	let totalScore = rollDice(10);
	totalScore += rollDice(12);
	totalScore += rollDice(20); 
	return totalScore;
}

function determineIfRoundTwo(totalScore, round){
	if (totalScore >= 10) {
		round++;
		console.log("Round "+round);
		let roundTwoResults = addingTotalScoreRoundTwo();
		let finalScore = totalScore + roundTwoResults; 
		console.log(finalScore); 
	} 
	else{
		console.log(totalScore); 
	} 
}

let round = 0;

displayRules();
round++;
console.log("Round "+round);

let result = addingTotalScoreRoundOne(); 
console.log(result);


determineIfRoundTwo(result, round); 



// function addingTotalScore(){
// 	let totalScore = ; 
// 	console.log = ("round winner"); 


// }

// let finalResult = addingTotalScore(); 
// console.log(finalResult); 




























