'user strict';
alert('Welcome to Thao\'s Page!');
var user = prompt('What is your name?');
alert('Welcome ' + user + '!');
var confirmed = confirm('Are you ready to play a guessing game?');
if (confirmed === true){
  console.log('The user is ready to play!')
} else {
  console.log('The user is not ready to play...but let\'s proceed anyway.');
}
var userAnswer = prompt('Does Thao have kids?');
if (userAnswer === 'yes'.toLowerCase()){
  console.log('Excellent! You are right!');
} else {
  console.log('Incorrect! Guess again!');
}
console.log('Thao has two beautiful kids, a five years old daughter and');
console.log('a 9 months old son. Besides spending time learning to code and');
console.log('having fun with two kids, Thao has other hobbies.');
var hobbyQuestion = prompt('Is gardening Thao\'s favorite hobby?');
if (hobbyQuestion === 'Yes'.toUpperCase()){
  console.log('Correct! You\'re good at this game!');
} else {
  prompt('Incorrect! Try again! Guess it right next time!');
}
