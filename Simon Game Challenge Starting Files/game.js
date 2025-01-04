var userClickedPattern =[];

var gamePattern=[];

var buttonColours =["red", "blue", "green", "yellow"];

var level = 0;

var started = false;

function startover(){
    level =0;
    gamePattern=[];
    started =false;
    userClickedPattern=[];
}

$(document).on("keydown",function(){
    if(!started){    
    $("h1").text("Level 0");
    nextSequence();
    started =true;
    }
})

function checkAnswer(currentlevel){
     if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence,1000);
            userClickedPattern=[];
        }
     }
     else{
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game over press any key to continue");

        startover();
        }
    
}

function nextSequence(){
    var randomNumber = (Math.floor(Math.random()*4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

 $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour);
  level++;
  $("h1").text("level "+ level);
}

$(".btn").on("click",function handler(){
     var userChosenColour = $(this).attr("id");
     userClickedPattern.push(userChosenColour);
     playSound($(this).attr("id"));
     animatePressed($(this).attr("id"));
     checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio1 = new Audio("sounds/"+name+".mp3");
 audio1.play();
}

function animatePressed(currentColour){
    $("#"+ currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");
    },100);
}