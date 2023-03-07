// These lists help fulfill the program's purpose. The 'correctAnswers'...
// list holds all of the correct answer choices, in order, and the...
// 'userAnswers' list holds all of the user's selected answer choices...
// in order. They makes it relatively easy to check a user's final score...
// at the end of the quiz by comparing their relative values.
var correctAnswers = ['Kobe Bryant', 'Michael Jordan', 'Lebron James'];
var userAnswers = [];

onEvent('beginQuizBtn', 'click', function () {
  setScreen('qOneScreen');
});

/* These click-events are designed to capture user input. */

onEvent('qOneSubmitBtn', 'click', function () {
  appendItem(userAnswers, getText('qOneOptions'));
  setScreen('qTwoScreen');
});

onEvent('qTwoSubmitBtn', 'click', function () {
  appendItem(userAnswers, getText('qTwoOptions'));
  setScreen('qThreeScreen');
});

onEvent('qThreeSubmitBtn', 'click', function () {
  appendItem(userAnswers, getText('qThreeOptions'));
  calculateAndDisplayFinalScore(correctAnswers, userAnswers);
  setScreen('resultsScreen');
});

// This function is designed to calculate and disply the user's final...
// score. It accepts two parameters:
// (1) 'answersList' {list} - a list of correct answer choices
// (2) 'userResList' {list} - a list of the user's answer choices
function calculateAndDisplayFinalScore(answersList, userResList) {
  var totalQuestions = answersList.length;
  var userScore = 0;

  // This for-loop fulfills the iteration submission requirement.
  for (var i = 0; i < answersList.length; i++) {
    // This if-statement fulfills the selection submission requirement.
    if (answersList[i] == userResList[i]) {
      userScore++;
    }
  }
  setText(
    'resultsDisplay',
    'You answered ' +
      userScore +
      ' out of ' +
      totalQuestions +
      ' questions correctly!'
  );
}

onEvent('tryAgainBtn', 'click', function () {
  userAnswers = [];
  setScreen('qOneScreen');
});
