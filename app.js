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
var correct = 0;
var incorrect = 0;


var familyQuestion = 'Does Thao have kids?';
var answerFamilyQuestion = prompt(familyQuestion).toUpperCase();

if (answerFamilyQuestion === 'YES' || answerFamilyQuestion === 'Y'){
  alert('Excellent! You are right!');
  correct += 1;
  console.log(user + ' got the familyQuestion question right.');
} else if (answerFamilyQuestion === 'NO' || answerFamilyQuestion === 'N'){
  alert('Incorrect! Don\'t worry. You will get it right next time.');
  incorrect += 1;
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
  incorrect += 1;
  console.log(user + 'got the hobbyQuestion question wrong.');
} else {
  alert('Invalid response.');
}

alert('Summer is almost here. Are you excited?! During the warm months, Thao likes to do something else also besides spending time in the garden.');


var hobbyQuestion2 = 'Has Thao been to the Zion National Park and Bryce Kenyon National Park?';
var answerHobbyQuestion2 = prompt(hobbyQuestion2).toUpperCase();

if(answerHobbyQuestion2 === 'YES' || answerHobbyQuestion2 === 'Y'){
  alert('You are a genius! Let\'s move forward!');
  correct += 1;
  console.log(user + ' is really good at this guessing game!');
} else if (answerHobbyQuestion2 === 'NO' || answerHobbyQuestion2 === 'N'){
  alert('Incorrect! But don\'t give up. You will get it right next time!');
  incorrect += 1;
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
  incorrect += 1;
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
  incorrect += 1;
  console.log(user + ' got the lifeValueQuestion question wrong.');
} else {
  alert('Invalid response.');
}

//this works finally
var guessing = 0;
while (guessing < 5) {
  var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');
  if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 45 pots!");
    guessing = 5;
    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Your answer is too low. Guess again!");
        guessing ++;
    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        alert("Getting closer. Guess again!");
        guessing ++;
    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        alert("Getting very close. Guess again!");
        guessing ++;
    } else {
      alert("Enter a number between 0 and 50.");
      prompt('How many flowering pots are there in my house?');
      guessing ++;
    }
}


//tried this code. endless loop, prompting endlessly but take in new responses and output correct alert
/*
var guessing = 0;
while (guessing < 6) {
  var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');
  if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 45 pots!");
    guessing = false;
    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Your answer is too low. Guess again!");
        guessing ++;
    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        alert("Getting closer. Guess again!");
        guessing ++;
    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        alert("Getting very close. Guess again!");
        guessing ++;
    } else {
      alert("Enter a number between 0 and 50.");
      prompt('How many flowering pots are there in my house?');
      guessing ++;
    }
}
*/

//tried this already; endless prompting
/*
var guessing = 0;

  do {
    var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');
    if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
        guessing = false;
        alert("Correct! The answer is 45 pots!");

    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Your answer is too low. Guess again!");
        guessing ++;
    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        alert("Getting closer. Guess again!");
        guessing ++;
    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        alert("Getting very close. Guess again!");
        guessing ++;
    } else {
      alert("Enter a number between 0 and 50.");
  }
  while (guessing < 6);
*/





//tried this code. endless loop, prompting endlessly but take in new responses and output correct alert
/*
var guessing = 0;
do {
  var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');
  if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 45 pots!");
    guessing = false;
  } else if (userAnswerFloweringPotsNumber < 20) {
      alert("Your answer is too low. Guess again!");
      guessing = true;
  } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
      alert("Getting closer. Guess again!");
      guessing = true;
  } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
      alert("Getting very close. Guess again!");
      guessing = true;
  } else {
      alert("Enter a number between 0 and 50.");

  }
  guessing ++;
}
while ((guessing = true) && (guessing <6));
*/

//tried this code. endless loop, prompting endlessly but take in new responses and output correct alert
/*
var guessing = 0;
do {
  var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');
  if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 45 pots!");
    guessing = false;
  } else if (userAnswerFloweringPotsNumber < 20) {
      alert("Your answer is too low. Guess again!");
      guessing = true;
  } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
      alert("Getting closer. Guess again!");
      guessing = true;
  } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
      alert("Getting very close. Guess again!");
      guessing = true;
  } else {
      alert("Enter a number between 0 and 50.");
      prompt('How many flowering pots are there in my house?');
      guessing = true;
  }
  guessing ++;
}
while ((guessing < 6) && (guessing = true));
*/


//tried this already. prompt 5 times but does not take in new responses correctly
/*
var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');
var guessing = 0;
do {
  userAnswerFloweringPotsNumber;
  if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 45 pots!");
    guessing = false;
  } else if (userAnswerFloweringPotsNumber < 20) {
      alert("Your answer is too low. Guess again!");
  } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
      alert("Getting closer. Guess again!");
  } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
      alert("Getting very close. Guess again!");
  } else {
      alert("Enter a number between 0 and 50.";
      prompt('How many flowering pots are there in my house?');
  }
  guessing ++;
}
while (guessing < 5);
*/

var floweringPotsNumberQuestion = [userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber];
while (guessing) {
  for (i=0; i < floweringPotsNumberQuestion.length; i++) {
    if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
      alert("Correct! The answer is 45 pots!");
      guessing = false;
    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Your answer is too low. Guess again!");
        prompt('How many flowering pots are there in my house?');
    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        alert("Getting closer. Guess again!");
        prompt('How many flowering pots are there in my house?');
    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        alert("Getting very close. Guess again!");
        prompt('How many flowering pots are there in my house?');
    } else {
        prompt('How many flowering pots are there in my house?');
    }
  }
  guessing = false;
}

//tried this already. prompt 5 times but does not take in new responses correctly
/*var guessing = true;
var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');

var floweringPotsNumberQuestion = [userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber];
while (guessing) {
  for (i=0; i < floweringPotsNumberQuestion.length; i++) {
    if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
      alert("Correct! The answer is 45 pots!");
      guessing = false;
    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Your answer is too low. Guess again!");
        userAnswerFloweringPotsNumber;
    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        alert("Getting closer. Guess again!");
        userAnswerFloweringPotsNumber;

    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        alert("Getting very close. Guess again!");
        userAnswerFloweringPotsNumber;
    } else {
        alert("Enter a number between 0 and 50.";
        userAnswerFloweringPotsNumber;
    }
  }
  guessing = false;
}
*/

//tried this code. alert 5 times but does not prompt again
/*
var guessing = true;
var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');

var floweringPotsNumberQuestion = [userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber];
while (guessing) {
  for (i=0; i < floweringPotsNumberQuestion.length; i++) {
    if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
      alert("Correct! The answer is 45 pots!");
      guessing = false;
    } else if (userAnswerFloweringPotsNumber < 20) {
        alert("Your answer is too low. Guess again!");

    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        alert("Getting closer. Guess again!");


    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        alert("Getting very close. Guess again!");

    } else {
        alert("Enter a number between 0 and 50.";
        userAnswerFloweringPotsNumber;
    }
  }
  guessing = false;
}
*/

//tried this already. it asked the user 5 times but does not prompt again correctly
/*
var guessing = true;
var userAnswerFloweringPotsNumber = prompt('How many flowering pots are there in my house?');

var floweringPotsNumberQuestion = [userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber, userAnswerFloweringPotsNumber];
while (guessing) {
  for (i=0; i< floweringPotsNumberQuestion.length; i++) {
    if (40 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 50) {
      alert("Correct! The answer is 45 pots!");
      guessing = false;
    } else if (userAnswerFloweringPotsNumber < 20) {
        prompt("Your answer is too low. Guess again!") + userAnswerFloweringPotsNumber);

    } else if (20 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 30) {
        prompt("Getting closer. Guess again!") + userAnswerFloweringPotsNumber);

    } else if (30 <= userAnswerFloweringPotsNumber && userAnswerFloweringPotsNumber < 40) {
        prompt("Getting very close. Guess again!") + userAnswerFloweringPotsNumber);

    } else {
        prompt("Enter a number between 0 and 50.") + userAnswerFloweringPotsNumber);
    }
  }
  guessing = false;
}
*/

/*var floweringPotsNumberQuestion = "How many flowering pots are there in my house?";
var userAnswerFloweringPotsNumber = prompt("How many flowering pots are there in my house?");
if (40 <= userAnswerFloweringPotsNumber < 50) {
  alert("Correct! The answer is 43 pots!");
  guessingFloweringPotsNumberQuestion = false;
} else if (userAnswerFloweringPotsNumber<20) {
  alert("Your answer is too low. Guess again!");

} else if (20 <= userAnswerFloweringPotsNumber < 30) {
  alert("Getting closer. Guess again!");
} else if (30 <= userAnswerFloweringPotsNumber < 40) {
  alert("Getting very close. Guess again!");
} else {
  alert("Enter a number between 0 and 50.");
}*/


//var guessingFloweringPotsNumberQuestion = true;
var floweringPotsNumberQuestion = "How many flowering pots are there in my house?";
var userAnswerFloweringPotsNumber = prompt("How many flowering pots are there in my house?");

//tried this but did not work
/*while (guessingFloweringPotsNumberQuestion) {
  if (40 <= userAnswerFloweringPotsNumber < 50) {
    alert("Correct! The answer is 43 pots!");
    guessingFloweringPotsNumberQuestion = false;
  } else if (userAnswerFloweringPotsNumber<20) {
    alert("Your answer is too low. Guess again!");

  } else if (20 <= userAnswerFloweringPotsNumber < 30) {
    alert("Getting closer. Guess again!");
  } else if (30 <= userAnswerFloweringPotsNumber < 40) {
    alert("Getting very close. Guess again!");
  } else {
    alert("Enter a number between 0 and 50.");
  }
}*/

while (guessingFloweringPotsNumberQuestion ) {
  //userAnswerFloweringPotsNumber;
  for (userAnswerFloweringPotsNumber < 20) {
    alert("Your answer is too low. Guess again!");
    userAnswerFloweringPotsNumber;
  for (20 <= userAnswerFloweringPotsNumber < 30) {
    alert("Getting closer. Guess again!");
    userAnswerFloweringPotsNumber;
  for (30 <= userAnswerFloweringPotsNumber < 40) {
    alert("Getting very close. Guess again!");
    //userAnswerFloweringPotsNumber;
  for (40 <= userAnswerFloweringPotsNumber < 50) {
    document.write("Your guess to the number of flowering pots I own is" + userAnswerFloweringPotsNumber);
    alert("Correct! The answer is 43 pots!");
    guessingFloweringPotsNumberQuestion = false;
  }
}


for (var i = 0; i<5; i++)


//tried to use switch statement to ask user to guess the number of indoor flowering pots I own

/*var userAnswerFloweringPotsNumber = prompt("How many flowering pots are there in my house?");
switch (userAnswerFloweringPotsNumber) {
  case userAnswerFloweringPotsNumber < 20;
  prompt("Your answer is too low. Guess again!" + userAnswerFloweringPotsNumber);
  break;
  case 20 <= userAnswerFloweringPotsNumber < 30;
  prompt("Getting closer. Guess again!" + userAnswerFloweringPotsNumber);
  break;
  case 30 <= userAnswerFloweringPotsNumber < 40;
  prompt("Getting very close. Guess again!" + userAnswerFloweringPotsNumber);
  break;
  case 40 <= userAnswerFloweringPotsNumber < 50;
  prompt("Correct! The answer is 43 pots!");
  userAnswerFloweringPotsNumber = false;
  break;
  default:
  prompt("Enter a number between 0 and 50." + userAnswerFloweringPotsNumber);
}*/

/*var states = "Florida Pennsylvania California Texas Maryland";
var myStates = "Florida Pennsylvania";
var userAnswerStates = prompt("Besides Washington state, what other states have I lived in the past?");

var guessingStates = true;
while(guessingStates) {

}*/


alert('This is the end of the guessing game. Hope you enjoyed playing the game. Thank you for playing!');

document.write("THE GUESSING GAME" + "<br>");
document.write("Question 1: Does Thao have kids?" + "<br>" + "Your answer: " + answerFamilyQuestion + "<br>");
document.write("Question 2: Is gardening Thao\'s favorite hobby?" + "<br>" + "Your answer: " + answerHobbyQuestion + "<br>");
document.write("Question 3: Has Thao been to the Zion National Park and Bryce Kenyon National Park?" + "<br>" + "Your answer: " + answerHobbyQuestion2 + "<br>");
document.write("Question 4: Does Thao like to take roadtrips? Has Thao ever driven her family back to Seattle from California nonstop?" + "<br>" + "Your answer: " + answerHobbyQuestion3 + "<br>");
document.write("Question 5: Is Thao a vegetarian?" + "<br>" + "Your answer: " + answerLifeValueQuestion + "<br>");
document.write("RESULTS: " + user + "You got " + correct + " questions correct and " + incorrect + " questions incorrect.");
document.write(floweringPotsNumberQuestion + "<br>");
document.write("The correct number is 43!");
/*var guessingGameQuestions = [familyQuestion, answerFamilyQuestion, hobbyQuestion, hobbyQuestion2, hobbyQuestion3, lifeValueQuestion];
for(var i = 0; i < guessingGameQuestions.length; i++) {
  document.write(guessingGameQuestions[i]);
}*/
