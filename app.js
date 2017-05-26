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
