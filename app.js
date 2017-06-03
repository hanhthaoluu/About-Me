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
//var totalScore = correct/7;

var familyQuestion = 'Does Thao have kids?';
var answerFamilyQuestion = prompt(familyQuestion).toUpperCase();

if (answerFamilyQuestion === 'YES' || answerFamilyQuestion === 'Y'){
  alert('Excellent! You are right!');
  correct += 1;
  console.log(user + ' got the familyQuestion question right.');
} else if (answerFamilyQuestion === 'NO' || answerFamilyQuestion === 'N'){
  alert('Incorrect! Don\'t worry. You will get it right next time.');

  console.log(user + ' got the familyQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('Thao has two beautiful kids, a five years old daughter and a 9 months old son. Besides spending time learning to code and having fun with two kids, Thao has other hobbies.');

var hobbyQuestion = 'Is gardening Thao\'s favorite hobby?';
var answerHobbyQuestion = prompt(hobbyQuestion).toUpperCase();

if(answerHobbyQuestion === 'YES' || answerHobbyQuestion === 'Y'){
  alert('Superstar! You\'re good at this game!');
  correct ++;
  console.log(user + ' is a great player!');
} else if (answerHobbyQuestion === 'NO' || answerHobbyQuestion === 'N'){
  alert('Incorrect! Keep going! You will get it right next time.');
  console.log(user + 'got the hobbyQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('Summer is here! Are you excited?! During the warm months, Thao likes to do something else also besides spending time in the garden.');


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

//This works perfectly
var guessingNumberFloweringPots = 0;
while (guessingNumberFloweringPots < 4) {
  var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in Thao\'s house? Enter a number between 0 and 50.  If your number is within the correct range then your answer is rendered as correct. You have 5 chances total. Good luck!');
  if (45 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 45 pots!");
    guessingNumberFloweringPots = 4;
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
      //var userAnswerFloweringPotsNumber = prompt('How many planting pots are there in Thao\'s house?');
      guessingNumberFloweringPots ++;
    }
}

alert('Thao is plantholic. Thao has 45 pots in her house, not counting the outdoor pots.');

//This works
var states = [' Virginia', ' Florida', ' Georgia', ' Oregon', ' Ohio', ' Pennsylvania', ' California', ' Maryland', ' Texas', ' Utah'];
var myStates = ['FLORIDA', 'PENNSYLVANIA'];
var userSixAnswerStatesILived = [];

var guessingStatesILived = 0;
while(guessingStatesILived < 6) {
  var userAnswerStatesILived = prompt("Besides Washington state, what other two states have I lived in the past?" + " Choose from these possible correct states: " + states + "? Enter 1 state for each prompt or box. You have 6 chances to get a single correct answer.").toUpperCase();
  userSixAnswerStatesILived.push(userAnswerStatesILived);
  guessingStatesILived ++;
}

for(var i = 0; i < myStates.length; i++) {
  console.log(myStates[i]);
  for (var j = 0; j < userSixAnswerStatesILived.length; j++) {
    console.log(userSixAnswerStatesILived[j]);

    if (myStates[i] === userSixAnswerStatesILived[j]) {
      alert('Your answer match!');
      //console.log('Match: ' + myStates[i]);
      correct ++;
      //guessingStatesILived = 6;
      console.log('Match: ' + myStates[i]);
     }
    //else {
      //alert('No match! All your six guesses were wrong. Better luck next time!');
      //incorrect ++;
      //guessingStatesILived = 6;

    }
  }





alert('This is the end of the guessing game. Hope you enjoyed playing the game. Thank you for playing!');

var totalScore = (correct + '/7');

document.write("THE GUESSING GAME" + "<br>");
document.write("QUESTION 1: Does Thao have kids?" + "<br>" + "YOUR ANSWER: " + answerFamilyQuestion + "<br>");
document.write("QUESTION 2: Is gardening Thao\'s favorite hobby?" + "<br>" + "YOUR ANSWER: " + answerHobbyQuestion + "<br>");
document.write("QUESTION 3: Has Thao been to the Zion National Park and Bryce Kenyon National Park?" + "<br>" + "YOUR ANSWER: " + answerHobbyQuestion2 + "<br>");
document.write("QUESTION 4: Does Thao like to take roadtrips? Has Thao ever driven her family back to Seattle from California nonstop?" + "<br>" + "YOUR ANSWER: " + answerHobbyQuestion3 + "<br>");
document.write("QUESTION 5: Is Thao a vegetarian?" + "<br>" + "YOUR ANSWER: " + answerLifeValueQuestion + "<br>");


document.write("QUESTION 6: How many planting pots are there in Thao\'s house?" + "<br>" + "YOUR ANSWER: " + userAnswerFloweringPotsNumber + "<br>");

document.write("QUESTION 7: Besides Washington state, what other two states have I lived in the past? Choose from these possible correct states: " + states + "?" + "<br>" + "YOUR ANSWER: " + userSixAnswerStatesILived + "<br>");

document.write("RESULTS: " + user + ", you got " + correct + " questions correct." + "<br>" + "YOUR SCORE: " + totalScore);


/*var guessingGameQuestions = [familyQuestion, answerFamilyQuestion, hobbyQuestion, hobbyQuestion2, hobbyQuestion3, lifeValueQuestion];
for(var i = 0; i < guessingGameQuestions.length; i++) {
  document.write(guessingGameQuestions[i]);
}*/
