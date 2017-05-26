'user strict';
alert('Welcome to Thao\'s Page!');
var user = prompt('What is your name?');
alert('Welcome ' + user + '!');
var confirmed = confirm(user + ', are you ready to play a guessing game?');
if (confirmed === true){
  alert('Ok, let\'s play!');
  console.log('The user is ready to play!')
} else {
  console.log('The user is not ready to play...but let\'s proceed anyway.');
}
var familyQuestion = prompt('Does Thao have kids?').toLowerCase();
if (familyQuestion === 'yes'){
  console.log('Excellent! You are right!');
} else {
  alert('Incorrect! Guess again!');
  console.log('The user got it wrong...but let\'s move forward anyway.');
}
console.log('Thao has two beautiful kids, a five years old daughter and');
console.log('a 9 months old son. Besides spending time learning to code and');
console.log('having fun with two kids, Thao has other hobbies.');
var hobbyQuestion = prompt('Is gardening Thao\'s favorite hobby?').toUpperCase();
if (hobbyQuestion === 'Yes'){
  console.log('Correct! You\'re good at this game!');
} else {
  prompt('Incorrect! Try again! Guess it right next time!');
}
console.log('Summer is almost here. Are you excited?! During the warm months,');
console.log('Thao likes to do something else also besides spending time');
console.log('in the garden.');
var hobbyQuestion2 = prompt('Has Thao been to the Zion National Park?').toUpperCase();
if (hobbyQuestion2 === 'Yes'){
  console.log('You are a genius! Let\'s move forward!');
} else {
  alert('Incorrect! But don\'t give up. You will get it right next time!');
  console.log('The user answered incorrectly, but it\'s ok.');
}
console.log('Thao loves to take roadtrips. One time, Thao drove her family');
console.log('back to Seattle from California nonstop.');
var hobbyQuestion3 = prompt('Do you think Thao got a speeding ticket on her way back from California?').toLowerCase();
if (hobbyQuestion3 === 'yes'){
  console.log('Awesome! You got it right!');
} else {
  console.log('Incorrect!');
}
var lifeValueQuestion= prompt('Is Thao a vegetarian?').toLowerCase();
if (lifeValueQuestion === 'yes'){
  alert('Fanstastic! You got it right! Thao loves plants but she eats mainly plants. This is a conflict of interest that Thao cannot resolve.');
  console.log(user + ' got the question right.');
} else {
  alert('Sorry, you got it wrong!');
  console.log(user + ' got the question wrong.');
}
