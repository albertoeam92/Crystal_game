$(document).ready(function(){

    
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
            
            $("#match-number").html(matchNumber);

	     	$("#red").on("click", function () {

	     		resultCrystal = resultCrystal + redNumber;
	     		console.log(resultCrystal);
	     		$("#result").html(resultCrystal);

	     	});

	     	$("#blue").on("click", function () {

	     		resultCrystal = resultCrystal + blueNumber;
	     		console.log(resultCrystal);
	     		$("#result").html(resultCrystal);

	     	});

	     	$("#yellow").on("click", function () {

	     		resultCrystal = resultCrystal + yellowNumber;
	     		console.log(resultCrystal);
	     		$("#result").html(resultCrystal);

	     	});

	     	$("#green").on("click", function () {

	     		resultCrystal = resultCrystal + greenNumber;
	     		console.log(resultCrystal);
	     		$("#result").html(resultCrystal);

	     	});


            if(resultCrystal == matchNumber) {

            	wins++;
                
                $("#wins-loses").append("<p>" + " You win!" + "</p>");
            	$( "#wins").html("<p>"+"Wins: "+ wins+ "</p>" + "<br>");
            }   

            if (resultCrystal > matchNumber) {
                
                loses++;

            	$("#loses").html("<p>"+"Loses: "+ loses + "</p>" + "<br>");

            }

     });
    

	

		
});