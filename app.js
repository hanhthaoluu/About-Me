'use strict';

alert('Hello there! Welcome to Thao\'s Page!');
var user = prompt('What is your name?').toUpperCase();
alert('Welcome ' + user + '!');

var confirmed = confirm(user + ', are you ready to play a guessing game? Unless instructed otherwise, enter either "Yes" or "Y" or "No" or "N". Not case sensitive.');

if(confirmed === true){
  alert('Ok, let\'s play!');
  console.log('The user is ready to play!');
} else {
  console.log('The user is not ready to play...but let\'s proceed anyway.');
}

var correct = 0;

function myGuessingGameIfElseYesMeansRight() {
  var familyQuestion = 'Does Thao have kids?';
  var answerFamilyQuestion = prompt(familyQuestion).toUpperCase();

  if (answerFamilyQuestion === 'YES' || answerFamilyQuestion === 'Y'){
    alert('Excellent! You are right!');
    correct += 1;
    console.log(user + ' got the family question right.');
  } else if (answerFamilyQuestion === 'NO' || answerFamilyQuestion === 'N'){
    alert('Incorrect! Don\'t worry. You will get it right next time.');
    console.log(user + ' got the family question wrong.');
  } else {
    alert('Invalid response.');
  }
}

alert('Thao has two beautiful kids, a five years old daughter and a 9 months old son. Besides spending time learning to code and having fun with two kids, Thao has other hobbies.');

myGuessingGameIfElseYesMeansRight();

function myGuessingGameHobbyQuestionIfElseYesMeansRight() {
  var hobbyQuestion = 'Is gardening Thao\'s favorite hobby?';
  var answerHobbyQuestion = prompt(hobbyQuestion).toUpperCase();

  if(answerHobbyQuestion === 'YES' || answerHobbyQuestion === 'Y'){
    alert('Superstar! You\'re good at this game!');
    correct ++;
    console.log(user + ' is a great player!');
  } else if (answerHobbyQuestion === 'NO' || answerHobbyQuestion === 'N'){
    alert('Incorrect! Keep going! You will get it right next time.');
    console.log(user + 'got the hobbyQuestion question wrong.');
  } else  {
    alert('Invalid response.');
  }
}

myGuessingGameHobbyQuestionIfElseYesMeansRight();

alert('Summer is here! Are you excited?! During the warm months, Thao likes to do something else also besides spending time in the garden.');


function myGuessingGameHikingQuestionIfElseYesMeansRight() {
  var hobbyQuestion2 = 'Has Thao been to the Zion National Park and Bryce Canyon National Park?';
  var answerHobbyQuestion2 = prompt(hobbyQuestion2).toUpperCase();

  if(answerHobbyQuestion2 === 'YES' || answerHobbyQuestion2 === 'Y'){
    alert('You are a genius! Let\'s move forward!');
    correct += 1;
    console.log(user + ' is really good at this guessing game!');
  } else if (answerHobbyQuestion2 === 'NO' || answerHobbyQuestion2 === 'N'){
    alert('Incorrect! But don\'t give up. You will get it right next time!');
    console.log('The user answered incorrectly, but it\'s ok.');
  } else {
    alert('Invalid response.');
  }
}

myGuessingGameHikingQuestionIfElseYesMeansRight();

function myGuessingGameRoadTripIfElseYesMeansRight() {
  var hobbyQuestion3 = 'Does Thao like to take roadtrips? Has Thao ever driven her family back to Seattle from California nonstop?';
  var answerHobbyQuestion3 = prompt(hobbyQuestion3).toUpperCase();

  if (answerHobbyQuestion3 === 'YES' || answerHobbyQuestion3 === 'Y'){
    alert('Awesome! You got it right!');
    correct += 1;
    console.log(user + ' got the hobbyQuestion3 question correct!');
  } else if (answerHobbyQuestion3 === 'NO' || answerHobbyQuestion3 === 'N'){
    alert('Incorrect! Keep going and you will get the next question right.');
    console.log(user + ' got the hobbyQuestion3 question wrong.');
  } else {
    alert('Invalid response.');
  }
}

myGuessingGameRoadTripIfElseYesMeansRight();


function myGuessingGameDietaryQuestionIfElseYesMeansRight() {
  var lifeValueQuestion = ('Is Thao a vegetarian?');
  var answerLifeValueQuestion = prompt(lifeValueQuestion).toUpperCase();

  if(answerLifeValueQuestion === 'YES' || answerLifeValueQuestion === 'Y'){
    alert('Fanstastic! You are really good at this game!');
    correct += 1;
    console.log(user + ' got the lifeValueQuestion question right.');
  } else if (answerLifeValueQuestion === 'NO' || answerLifeValueQuestion === 'N'){
    alert('Sorry, you got it wrong!');
    console.log(user + ' got the lifeValueQuestion question wrong.');
  } else {
    alert('Invalid response.');
  }
}

myGuessingGameDietaryQuestionIfElseYesMeansRight();

function myGuessingGamePlantingPotsIfElseYesMeansRight() {
  var guessingNumberFloweringPots = 0;

  while (guessingNumberFloweringPots < 5) {
    var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in Thao\'s house? Enter a number between 0 and 50.  If your number is within the correct range then your answer is rendered as correct. You have 5 chances total. Good luck!');
    if (45 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
      alert("Correct! The answer is 45 pots!");
      guessingNumberFloweringPots = 5;
      correct ++;
    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Incorrect. Your answer is way too low.");
        guessingNumberFloweringPots ++;
    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 35) {
        alert("Incorrect. Your answer is too low.");
        guessingNumberFloweringPots ++;
    } else if (35 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 45) {
        alert("Incorrect. Getting very close.");
        guessingNumberFloweringPots ++;
    } else {
        alert("Enter a number between 0 and 50.");
        guessingNumberFloweringPots ++;
    }
  }

  alert('Thao is plantholic. Thao has 45 pots in her house, not counting the outdoor pots.');
}

myGuessingGamePlantingPotsIfElseYesMeansRight();

function myGuessingGameStatesILivedWhileIfElse() {

  var states = [' Virginia', ' Florida', ' Georgia', ' Oregon', ' Ohio', ' Pennsylvania', ' California', ' Maryland', ' Texas', ' Utah'];
  var myStates = ['FLORIDA', 'PENNSYLVANIA'];
  var userSixAnswerStatesILived = [];
  var guessingStatesILived = 0;

  while(guessingStatesILived < 6) {
    var userAnswerStatesILived = prompt("Besides Washington state, what other two states have I lived in the past?" + " Choose from these possible correct states: " + states + "? Enter 1 state (not case sensitive) for each prompt or text box. You have 6 chances to get a single correct answer.").toUpperCase();

    if (userAnswerStatesILived === 'FLORIDA' || userAnswerStatesILived === 'PENNSYLVANIA') {
      alert('Correct!');
      correct ++;
      break;
    } else {
      alert('Incorrect.');
      guessingStatesILived++;
    }
  }

alert('Thao has lived in Florida and Pennsylvania.');
}

myGuessingGameStatesILivedWhileIfElse();

alert('This is the end of the guessing game. Hope you enjoyed playing the game. Thank you for playing!');

var totalScore = (correct + '/7');
