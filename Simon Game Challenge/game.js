var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];   // array that holds the game pattern (holds the randomChosenColour)
var userClickedPattern = [];  // array that holds the user pattern

var started = false;
var level = 0;

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");    // taking the id of the clicked button (this) // this = .btn
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {   // currentLevel = userClickedPattern.length-1. Taking the last index  value
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");   // you can check on console if the code is working

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];    // reseting the array to be empty
    level++;
    $("#level-title").text("Level " + level);   // changing the text level to the current lvl

    var randomNumber = Math.floor(Math.random() * 4); // number from 1 - 4
    var randomChosenColour = buttonColours[randomNumber];  // selecting random colour from buttonColours array
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  // adding animation to the button with id of the colour
    playSound(randomChosenColour);
}

function playSound(name) {   // name = randomChosenColour
    var audio = new Audio("sounds/" + name + ".mp3");  // taking the sound from the sounds folder
    audio.play();
}

function animatePress(currentColour) {  // currentColour = userChosenColour
    $("#" + currentColour).addClass("pressed");  // taking the id of currentColour and adding "pressed" - CSS class
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");  // after 100ms removing the class "pressed"
    }, 100);
}

function startOver() {   // restarting the variables
    level = 0;
    gamePattern = [];
    started = false;
}