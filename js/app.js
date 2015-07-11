$(document).ready(function(){
        
  var hiddenNumber = Math.floor((Math.random() * 100) + 1);
    
    /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

    $("a.new").click(function(){
        $("#guessList").find("li").remove();
        $("#count").text("0");
        $("#feedback").text("Make Your Guess!!");
      document.getElementById('userGuess').value = "";
      i = 0;
      hiddenNumber = Math.floor((Math.random() * 100) + 1);
    });

    // function to get user input value
    var inputNum = function(){
        
        var guessNum = document.getElementById("userGuess").value;
        $("#guessList").append("<li>" + guessNum + "</li>");
        document.getElementById('userGuess').value = "";

    };

    var i = 0;

    var count = function(){
        $("#count").text(+ i);
    };
    
     var check = function(){
        
        var guessNum = document.getElementById("userGuess").value;
        
        if(!$.trim($('#userGuess').val())){
            $("#feedback").text("Enter a number between 1-100");
        } else if (guessNum < 1) {
            $("#feedback").text("Enter a number between 1-100");
        } else if (guessNum > 100) {
            $("#feedback").text("Enter a number between 1-100");
        } else if (guessNum > hiddenNumber && guessNum <= (hiddenNumber + 2)){
        $("#feedback").text("You're Very Hot!");
        i++;
        count();
        inputNum();
      } else if (guessNum > hiddenNumber && guessNum < (hiddenNumber + 5)){
        $("#feedback").text("You're Hot!");
        i++;
        count();
        inputNum();
      } else if (guessNum > hiddenNumber && guessNum < (hiddenNumber + 15)){
        $("#feedback").text("You're warm!");
        i++;
        count();
        inputNum();
      } else if (guessNum > hiddenNumber && guessNum < (hiddenNumber + 25)){
            $("#feedback").text("You're Cold!");
            i++;
            count();
            inputNum();
        } else if (guessNum < hiddenNumber && guessNum >= (hiddenNumber - 2)){
        $("#feedback").text("You're Very Hot!");
        i++;
        count();
        inputNum();
      } else if (guessNum < hiddenNumber && guessNum > (hiddenNumber - 5)){
        $("#feedback").text("You're Hot!");
        i++;
        count();
        inputNum();
      } else if (guessNum < hiddenNumber && guessNum > (hiddenNumber - 15)){
        $("#feedback").text("You're warm!");
        i++;
        count();
        inputNum();
      } else if (guessNum < hiddenNumber && guessNum > (hiddenNumber - 25)){
            $("#feedback").text("You're Cold!");
            i++;
            count();
            inputNum();
        } else if (guessNum >= (hiddenNumber + 30)){
            $("#feedback").text("You're Ice Cold!");
            i++;
            count();
            inputNum();
        } else if (guessNum <= (hiddenNumber - 30)){
            $("#feedback").text("You're Ice Cold!");
            i++;
            count();
            inputNum();
        } else {
            $("#feedback").text("Great You Got It!");
            i++;
            count();
        }
    };

    $("#userGuess").on("keydown", function(e){
        if(e.which == 13){
            e.preventDefault();

            check();
        }
    });

    $("#guessButton").click(function(){
        check();
    });
});