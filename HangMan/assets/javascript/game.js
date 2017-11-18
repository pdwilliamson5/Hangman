



var names =[
"ken brockman",
"edna krabappel",
"grounds keeper willie",
"side shoe bob"
];

var name = names[Math.floor(Math.random() * names.length)];


var answerArray = [];


	for(var i = 0; i < name.length; i++)
		{
			answerArray[i] = "_";
		}

	var remainingLetters = name.length;



while (remainingLetters > 0){

	alert(answerArray.join(" "));

var guess = alert("guess a letter, or Cancel to stop playing");
	if (guess === null){
		break;
	}
	else if (guess.length !==1){
		alert("please enter a single letter");
	}
	else{
			for( var j = 0; j < name.length; j++)
			{
		if (name[j] ===guess) {
			answerArray[j] = guess;
			}
			remainingLetters--;
		
			}
		}

	}


prompt(answerArray.join(""));
prompt("Good job! the answer was" + word);





