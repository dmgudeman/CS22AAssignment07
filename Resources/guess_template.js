/*
 * Word Guessing Game - Template
 *
 */
'use strict';
//Define a container for the game, its variables and its methods.
var game = {
  answerPosition: 0,   // position of the current answer in the wordList - start at 0
  display: '',         // the current dash/guessed letters display - ex '-a-a--r--t'
  wrong: '',           // all the wrong letters guessed so far
  answer: '',          // the correct answer - one word from game.answersList
  wrongCount: 0,       // the number of wrong guesses so far
  over: false,         // is the game over?
  answersList: [       // list of answers to cycle through
    'JavaScript',
    'document',
    'element',
    'ajax',
    'jQuery',
    'event',
    'json',
    'listener',
    'transition',
    'window'
  ]
};


game.restart = function () {
    // Initialize the game at the beginning or after restart
    // Make sure you initialize the game variables (the model)
    // and the web page (the view)
    // Enter your code here
    ++ game.answerPosition;
    console.log("I saw this " + game.answerPosition);
    game.display = '';
    game.wrong = '';
    game.answer = ''
    game.wrongCount = 0;
    game.over = false;
    game.answersList[game.answerPosition];
    game.dashes();

     guessbutton.addEventListener('click', game.play, false);
     console.log(game.dashes(game.answerPosition));
    
    // The focus method invoked on an input element allows the user to type in that input without having to click it.
    $('#guessedletter').focus();
};

game.dashes = function (number) {
    // you may use your function definition from question 4 in assignment 2 here.
    // this function takes a number as a parameter
    var result = '';
    for (var i = 1; i <= number; i++) {
      result = result + '-';
    }
    return result;
};

game.play = function () {
    // Invoked when the user clicks on GUESS
//if box is empty do nothing
//if already guessed right do nothing.

//takes letter in box and check to see if it is in word.
//adds it to the right place in the string if true
//adds it to the guessed wrong letters if false.
   

};

game.outcome = function () {
    // check if the game is won or lost

    // if string equals word display one
    // if number of choices = 10  print out correct word and ask to play again.

};

// Main program starts here
$(document).ready(function () {
  console.log("I saw this " );
    game.restart();
    $('#guessbutton').click(game.play);
    $('#restart').click(game.restart);
});