'use strict';
alert('Hello! Welcome to Thao\'s Page!');

var user = prompt('What is your name?');

alert('Welcome ' + user + '!');

var confirmed = confirm(user + ', are you ready to play a guessing game?');

if(confirmed === true){
  alert('Ok, let\'s play!');
  console.log('The user is ready to play!');
} else {
  console.log('The user is not ready to play...but let\'s proceed anyway.');
}

var familyQuestion = prompt('Does Thao have kids?').toLowerCase();

if (familyQuestion === 'yes' || familyQuestion === 'y'){
  alert('Excellent! You are right!');
  console.log(user + ' got the familyQuestion question right.');
} else if (familyQuestion === 'no' || familyQuestion === 'n'){
  alert('Incorrect! Don\'t worry. You will get it right next time.');
  console.log(user + ' got the familyQuestion question wrong.');
} else {
  alert('Invalid response.');
}

console.log('Thao has two beautiful kids, a five years old daughter and');
console.log('a 9 months old son. Besides spending time learning to code and');
console.log('having fun with two kids, Thao has other hobbies.');

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

console.log('Summer is almost here. Are you excited?! During the warm months,');
console.log('Thao likes to do something else also besides spending time');
console.log('in the garden.');

var hobbyQuestion2 = prompt('Has Thao been to the Zion National Park?').toUpperCase();

if(hobbyQuestion2 === 'YES' || hobbyQuestion2 === 'Y'){
  alert('You are a genius! Let\'s move forward!');
  console.log(user + ' is really good at this guessing game!');
} else if (hobbyQuestion2 === 'NO' || hobbyQuestion2 === 'N'){
  alert('Incorrect! But don\'t give up. You will get it right next time!');
  console.log('The user answered incorrectly, but it\'s ok.');
} else {
  alert('Invalid response.');
}

console.log('Thao loves to take roadtrips. One time, Thao drove her family');
console.log('back to Seattle from California nonstop.');

var hobbyQuestion3 = prompt('Do you think Thao got a speeding ticket on her way back from California?').toLowerCase();

if (hobbyQuestion3 === 'yes' || hobbyQuestion3 === 'y'){
  alert('Awesome! You got it right!');
  console.log(user + ' got the hobbyQuestion3 question correct!');
} else if (hobbyQuestion3 === 'no' || hobbyQuestion3 === 'n'){
  alert('Incorrect! Keep going and you will get the next question right.');
  console.log(user + ' got the hobbyQuestion3 question wrong.');
} else {
  alert('Invalid response.');
}

var lifeValueQuestion = prompt('Is Thao a vegetarian?').toLowerCase();

if(lifeValueQuestion === 'yes' || lifeValueQuestion === 'y'){
  alert('Fanstastic! You are really good at this game!');
  console.log(user + ' got the lifeValueQuestion question right.');
} else if (lifeValueQuestion === 'no' || lifeValueQuestion === 'n'){
  alert('Sorry, you got it wrong!');
  console.log(user + ' got the lifeValueQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('This is the end of the guessing game. Hope you enjoyed playing the game. Thank you for playing!');
