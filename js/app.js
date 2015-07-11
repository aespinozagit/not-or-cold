

$(document).ready(function(){

	var  secretNumber, userimput, guessCounter = 0;

	
	/*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);
     });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000); 
    });

/*--- Reload page on click---*/
    $(".new").click(function(){
    location.reload();
    });

// Generate secret number
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    secretNumber =  getRandomInt(1, 100);

// Get the user input, clear the form, and update guessCounter on submit of userInput
    $('form').on('submit', function (e) {
        e.preventDefault();
        userInput = $('#userGuess').val();
        $(this)[0].reset();
        guessCounter++;
        $('#count').html((+guessCounter));
        $('ul#guessList').append("<li>" + userInput + "<li");

// verify the user input ; number betwee 1-100

    function guessDifference() {
        return (Math.abs(userInput - secretNumber)); 
    }
    function insertFeedback (text) {
        $('h2#feedback').replaceWith("<h2 id=\"feedback\">" + text +"</h2>"); 
    }
    if (isNaN(userInput)) {
        insertFeedback("Enter a number between 1-100");
    }
    if ((100< userInput) || (userInput < 1)){
        insertFeedback("Enter a number between 1-100");
    }
    if ((!isNaN(userInput))&&((0 < userInput) && (userInput < 101))) {
        if (guessDifference() > 50) {
            insertFeedback("You're Ice Cold!");

        } else if (guessDifference() > 40) {
            insertFeedback("You're Cold!");

        } else if (guessDifference() > 30) {
            insertFeedback("You're warm!");

        } else if (guessDifference() > 10) {
            insertFeedback("You're Hot!");
            
        } else if (guessDifference() >= 5) {
            insertFeedback("You're Very Hot!");

        } else if (guessDifference()=== 0){
            insertFeedback("Great You Got It!");
        }
    }
    });
});