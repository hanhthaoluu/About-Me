'use strict';
alert('Hello there! Welcome to Thao\'s Page!');
var user = prompt('What is your name?');
alert('Welcome ' + user + '!');

var confirmed = confirm(user + ', are you ready to play a guessing game?');

if(confirmed === true){
  alert('Ok, let\'s play!');
  console.log('The user is ready to play!');
} else {
  console.log('The user is not ready to play...but let\'s proceed anyway.');
}

var familyQuestion = prompt('Does Thao have kids?').toUpperCase();

if (familyQuestion === 'YES' || familyQuestion === 'Y'){
  alert('Excellent! You are right!');
  console.log(user + ' got the familyQuestion question right.');
} else if (familyQuestion === 'NO' || familyQuestion === 'N'){
  alert('Incorrect! Don\'t worry. You will get it right next time.');
  console.log(user + ' got the familyQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('Thao has two beautiful kids, a five years old daughter and a 9 months old son. Besides spending time learning to code and having fun with two kids, Thao has other hobbies.');

var hobbyQuestion = prompt('Is gardening Thao\'s favorite hobby?').toUpperCase();

if(hobbyQuestion === 'YES' || hobbyQuestion === 'Y'){
  alert('Superstar! You\'re good at this game!');
  console.log(user + ' is a great player!');
} else if (hobbyQuestion === 'NO' || hobbyQuestion === 'N'){
  alert('Incorrect! Keep going! You will get it right next time.');
  console.log(user + 'got the hobbyQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('Summer is almost here. Are you excited?! During the warm months, Thao likes to do something else also besides spending time in the garden.');

var hobbyQuestion2 = prompt('Has Thao been to the Zion National Park and Bryce Kenyon National Park?').toUpperCase();

if(hobbyQuestion2 === 'YES' || hobbyQuestion2 === 'Y'){
  alert('You are a genius! Let\'s move forward!');
  console.log(user + ' is really good at this guessing game!');
} else if (hobbyQuestion2 === 'NO' || hobbyQuestion2 === 'N'){
  alert('Incorrect! But don\'t give up. You will get it right next time!');
  console.log('The user answered incorrectly, but it\'s ok.');
} else {
  alert('Invalid response.');
}

var hobbyQuestion3 = prompt('Does Thao like to take roadtrips? Has Thao ever driven her family back to Seattle from California nonstop?').toUpperCase();

if (hobbyQuestion3 === 'YES' || hobbyQuestion3 === 'Y'){
  alert('Awesome! You got it right!');
  console.log(user + ' got the hobbyQuestion3 question correct!');
} else if (hobbyQuestion3 === 'NO' || hobbyQuestion3 === 'N'){
  alert('Incorrect! Keep going and you will get the next question right.');
  console.log(user + ' got the hobbyQuestion3 question wrong.');
} else {
  alert('Invalid response.');
}

var lifeValueQuestion = prompt('Is Thao a vegetarian?').toUpperCase();

if(lifeValueQuestion === 'YES' || lifeValueQuestion === 'Y'){
  alert('Fanstastic! You are really good at this game!');
  console.log(user + ' got the lifeValueQuestion question right.');
} else if (lifeValueQuestion === 'NO' || lifeValueQuestion === 'N'){
  alert('Sorry, you got it wrong!');
  console.log(user + ' got the lifeValueQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('This is the end of the guessing game. Hope you enjoyed playing the game. Thank you for playing!');
document.write("Question 1: Does Thao have kids?" + "<br>" + "Your answer: " + familyQuestion + "<br>");
document.write("Question 2: Is gardening Thao\'s favorite hobby?" + "<br>" + "Your answer: " + hobbyQuestion + "<br>");
document.write("Question 3: Has Thao been to the Zion National Park and Bryce Kenyon National Park?" + "<br>" + "Your answer: " + hobbyQuestion2 + "<br>");
document.write("Question 4: Does Thao like to take roadtrips? Has Thao ever driven her family back to Seattle from California nonstop?" + "<br>" + "Your answer: " + hobbyQuestion3 + "<br>");
document.write("Question 5: Is Thao a vegetarian?" + "<br>" + "Your answer: " + lifeValueQuestion + "<br>");
/*var guessingGameQuestions = [familyQuestion, hobbyQuestion, hobbyQuestion2, hobbyQuestion3, lifeValueQuestion];
for(var i = 0; i < guessingGameQuestions.length; i++) {
  document.write(guessingGameQuestions[i]);
}*/
