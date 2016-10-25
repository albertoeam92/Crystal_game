$(document).ready(function(){

    var yesOrNo = true;
    var wins = 0;
    var loses = 0;
    var resultCrystal = 0;
    
     
     $(document).on("keyup",function(){

	     	var matchNumber = Math.floor((Math.random() * 120) + 16);
	     	var redNumber = Math.floor((Math.random() * 12) + 1);
	     	var blueNumber = Math.floor((Math.random() * 12) + 1);
	     	var yellowNumber = Math.floor((Math.random() * 12) + 1);
	     	var greenNumber = Math.floor((Math.random() * 12) + 1);

	     	console.log(matchNumber);
	     	console.log(redNumber);
	     	console.log(blueNumber);
	     	console.log(yellowNumber);
	       	console.log(greenNumber);


	     	$("#red").on("click", function () {

	     		resultCrystal = resultCrystal + redNumber;
	     		console.log(resultCrystal);

	     	});

	     	$("#blue").on("click", function () {

	     		resultCrystal = resultCrystal + blueNumber;
	     		console.log(resultCrystal);

	     	});

	     	$("#yellow").on("click", function () {

	     		resultCrystal = resultCrystal + yellowNumber;
	     		console.log(resultCrystal);

	     	});

	     	$("#green").on("click", function () {

	     		resultCrystal = resultCrystal + greenNumber;
	     		console.log(resultCrystal);

	     	});

            

     });
    

	

		
});