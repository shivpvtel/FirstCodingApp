  // welcome screen

onEvent("continue", "click", function() {
  setScreen("Intro");
console.log("Here come instructions");
});

  // options screen

onEvent("nobutton", "click", function() {
  setScreen("welcome");
});
onEvent("yesbutton", "click", function() {
  setScreen("game");
  score = 0 ;
});

  // game screen and code

var lives = 3;
var score = 0 ;
setText("score", score);
onEvent("arrow", "click", function() {
  score = score + 1;
  setText("score", score);
  setPosition("arrow", randomNumber(40, 280), randomNumber(40, 410));
  console.log("arrow clicked!");
  if (score == 10) {
    setScreen("winning");
    score = 0;
  }
});
score = 0 ;
if (onEvent("backgroundimage", "click", function() {
    lives = lives-1;
    setText("lives", lives);
    if (lives===0) {
      lives = 3;
      setScreen("gameover");
      setText("lives", lives);
    }
    console.log("Screen Clicked!");
    score = 0;
  }));
setText("lives", lives);

  // you lose screen

onEvent("tryagain", "click", function() {
  console.log("IM GONNA TRY AGAIN!!");
  setScreen("Intro");
  score = 0 ;
  setText("score", score);
});
onEvent("imdone", "click", function() {
  console.log("IM DONE!!");
  setScreen("welcome");
  score = 0 ;
  setText("score", score);
});

  // you win screen

onEvent("endgame", "click", function() {
  console.log("Good bye!!");
  setScreen("welcome");
});
