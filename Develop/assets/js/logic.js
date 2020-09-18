// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questionTitleEl = document.getElementById("question-title");
var currentQuestion;
// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


function startQuiz() {
  // hide start screen
  document.getElementById("start-screen").style.display = "none";
  // un-hide questions section
  document.getElementById("questions").style.display = "block";
  // start timer
  var timeInterval = setInterval(function() {
  // show starting time
    timerEl.textContent = time;
    time--;
  }, 1000);
  
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  questionTitleEl.innerText = currentQuestion.title 
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++){
    // create new button for each choice
    var answerButton = document.createElement("button");
    answerButton.innerText = currentQuestion.choices[i]
    // attach click event listener to each choice
    answerButton.addEventListener("click", function(e){
      answerClick(e)
    })
    // display on the page
    choicesEl.append(answerButton);
  }
}

function answerClick(event) {
    // check if user guessed wrong
    if(event.target.textContent !== currentQuestion.answer){
      console.log(event.target.textContent)
    // penalize time
      time = time-10
    // play "wrong" sound effect
      sfxWrong.play()
   } 
   else if(event.target.textContent == currentQuestion.answer){ 
    // play "right" sound effect
    sfxRight.play()
  }
      // flash right/wrong feedback on page for half a second
    feedbackEl.innerText = (event.target.textContent == currentQuestion.answer)? "Correct!" : "Wrong!"
      //flash right/wrong
    var feedbackTimeout = setTimeout(function() {
      // erase feedback
      feedbackEl.innerText = ""
      }, 500);
   // check if we've run out of questions
      if(currentQuestionIndex == questions.length-1){
    // calling quizEnd
      quizEnd()
  }
  // else call getQuestion
  else{
      // move to next question by incrementing index
      currentQuestionIndex++ 
      getQuestion()
  }
  // getQuestion
}

function quizEnd() {
  // stop timer
  console.log("quiz ended")
  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
