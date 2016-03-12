//Online ranking
function CalculateElo(AnsQuest, EnemyAnsQuest, currentElo, EnemyElo){
	var playerOne = Math.pow(10,currentElo/400);
	var playerTwo = Math.pow(10,EnemyElo/400);
	var ExpectedValueOne = playerOne/(playerOne + playerTwo);
	var win = 1 ; var draw = 0.5; var lose = 0;
	if(AnsQuest > EnemyAnsQuest){
		return currentElo + 64*(win - ExpectedValueOne);
	}if(AnsQuest == EnemyAnsQuest){
		return currentElo + 64*(draw - ExpectedValueOne);
	}else{
		if((currentElo + 64*(lose - ExpectedValueOne)) < 1000){
			return 1000;
		}else{
			return currentElo + 64*(lose - ExpectedValueOne);
		}
	}
	//update database with new elo 
}
//console.log(CalculateElo(4,3,1023,1037));
//console.log(CalculateElo(3,4,1037,1023));

//Offline level
function CalculateLevel(points, currentLevel, Difficulty){
	var playerOne = Math.pow(10,currentLevel/400);
	var OfflineSystem = Math.pow(10,Difficulty/400);
	var ExpectedValueOne = playerOne/(playerOne + OfflineSystem);
	if(points == 0){
		return currentLevel;
	}if(points < 5){
		return currentLevel; 
	}if(points >= 5 && points < 7){
		return Math.floor(currentLevel + 32*(1 - ExpectedValueOne)); 
	}else{
		return Math.floor(currentLevel + 64*(1- ExpectedValueOne));
	}
}


function OfflineLevelRank(calcLevel){
	if(calcLevel >=1000 && calcLevel <1100){
		return "Bronze";
	}if(calcLevel >=1100 && calcLevel <1200){
		return "Silver";
	}if(calcLevel >=1200 && calcLevel <1300){
		return "Gold";
	}if(calcLevel >=1300 && calcLevel <1400){
		return "Plat";
	}if(calcLevel >=1400 && calcLevel <1500){
		return "Dimond";
	}
}
console.log(CalculateLevel(8,1383,1800));
console.log(OfflineLevelRank(CalculateLevel(8,1383,1800)));