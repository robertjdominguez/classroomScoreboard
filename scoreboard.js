/* Controller for each button for the four different teams on the scoreboard
page -- TODO: Still don't think the logic is right for the winCount when using
majority rules. */

// Question settings for progress bars
let maxQuestion = {};
let majorityRules = {};
let questionCount = 0;
let winCount = 0;
let oneQuestionCount = 0;
let twoQuestionCount = 0;
let threeQuestionCount = 0;
let fourQuestionCount = 0;
let totalCount = 0;

function questionSet() {
  // Logic for scoring data
  const teamCount = document.getElementById('teamNumber').value;
  maxQuestion = document.getElementById('questionNumber').value;
  console.log("The max number of questions will be " + maxQuestion);
  incrementRate = 100 / maxQuestion;
  console.log("The progress bar will increment " + incrementRate + "% with each click.");


  // If/else statement for determining scoring set up
  if (document.getElementById('majorityWin').checked === true) {

    console.log("Majority rules!");
    winCount = maxQuestion / teamCount; // IFF rem. round
    console.log("Before any magic: " + winCount);

    winCountCheck = String(winCount);
    if (winCountCheck.indexOf('.') > -1) {
      winCount = (Math.round(winCount) + 2);
    } else {
      winCount++;
    }

    console.log("Needed to win: " + winCount);
    return majorityRules = true;

  } else {

    console.log("Race to the finish line...");
    return majorityRules = false;

  }

}

// Team 1
let barOne = document.getElementById('team1');
let widthOne = 0;

function moveOne() {

  teamOne = document.getElementById('teamOneName').value;
  oneQuestionCount++;
  widthOne += incrementRate;
  barOne.style.width = (widthOne + '%');
  totalCount = oneQuestionCount + twoQuestionCount + threeQuestionCount +
    fourQuestionCount;
  console.log(totalCount + " questions have been answered so far.");


  if (majorityRules == false) { // First to 'x'

    if (widthOne >= 100) {

      alert(teamOne + " is the winner!");
      console.log(barOne.style.width);

    } else {

      console.log(barOne.style.width);
    }

  } else { // Majority rules

    if (oneQuestionCount >= winCount) {

      alert(teamOne + " is the winner!");
      console.log("We have a winner!");

    } else {

      if (oneQuestionCount == winCount && totalCount == maxQuestion) {

        alert(teamOne + " is the winner!");
        console.log(barOne.style.width);

      } else {

        console.log(barOne.style.width);
      }
    }
  }
}

// Team 2
let barTwo = document.getElementById('team2');
let widthTwo = 0;

function moveTwo() {

  teamTwo = document.getElementById('teamTwoName').value;
  twoQuestionCount++;
  widthTwo += incrementRate;
  barTwo.style.width = (widthTwo + '%');
  totalCount = oneQuestionCount + twoQuestionCount + threeQuestionCount +
    fourQuestionCount;
  console.log(totalCount + " questions have been answered so far.");


  if (majorityRules == false) { // First to 'x'

    if (widthTwo >= 100) {

      alert(teamTwo + " is the winner!");
      console.log(barTwo.style.width);

    } else {

      console.log(barTwo.style.width);
    }

  } else { // Majority rules

    if (twoQuestionCount >= winCount) {

      alert(teamTwo + " is the winner!");
      console.log("We have a winner!");

    } else {

      if (twoQuestionCount == winCount && totalCount == maxQuestion) {

        alert(teamTwo + " is the winner!");
        console.log(barTwo.style.width);

      } else {

        console.log(barTwo.style.width);
      }
    }
  }
}

// Team 3
let barThree = document.getElementById('team3');
let widthThree = 0;

function moveThree() {

  teamThree = document.getElementById('teamThreeName').value;
  threeQuestionCount++;
  widthThree += incrementRate;
  barThree.style.width = (widthThree + '%');
  totalCount = oneQuestionCount + twoQuestionCount + threeQuestionCount +
    fourQuestionCount;
  console.log(totalCount + " questions have been answered so far.");


  if (majorityRules == false) { // First to 'x'

    if (widthThree >= 100) {

      alert(teamThree + " is the winner!");
      console.log(barThree.style.width);

    } else {

      console.log(barThree.style.width);
    }

  } else { // Majority rules

    if (threeQuestionCount >= winCount) {

      alert(teamThree + " is the winner!");
      console.log("We have a winner!");

    } else {

      if (threeQuestionCount == winCount && totalCount == maxQuestion) {

        alert(teamThree + " is the winner!");
        console.log(barThree.style.width);

      } else {

        console.log(barThree.style.width);
      }
    }
  }
}

// Team 4
let barFour = document.getElementById('team4');
let widthFour = 0;

function moveFour() {

  teamFour = document.getElementById('teamFourName').value;
  fourQuestionCount++;
  widthFour += incrementRate;
  barFour.style.width = (widthFour + '%');
  totalCount = oneQuestionCount + twoQuestionCount + threeQuestionCount +
    fourQuestionCount;
  console.log(totalCount + " questions have been answered so far.");


  if (majorityRules == false) { // First to 'x'

    if (widthFour >= 100) {

      alert(teamFour + " is the winner!");
      console.log(barFour.style.width);

    } else {

      console.log(barFour.style.width);
    }

  } else { // Majority rules

    if (fourQuestionCount >= winCount) {

      alert(teamFour + " is the winner!");
      console.log("We have a winner!");

    } else {

      if (fourQuestionCount == winCount && totalCount == maxQuestion) {

        alert(teamFour + " is the winner!");
        console.log(barFour.style.width);

      } else {

        console.log(barFour.style.width);
      }
    }
  }
}
