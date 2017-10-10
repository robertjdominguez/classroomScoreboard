/* This script is used to gather information for the teams and the scoreboard
itself.*/

/* TODO: (1) Include dynamic option for question numbers
*/

// Scrape data from Game Controls
function gameData() {
  const questionNumber = document.getElementById('questionNumber').value; // Number of questions
  const teamOne = document.getElementById('teamOneName').value;
  const teamTwo = document.getElementById('teamTwoName').value;
  const teamThree = document.getElementById('teamThreeName').value;
  const teamFour = document.getElementById('teamFourName').value;

  document.getElementById('teamOne').innerHTML = teamOne;
  document.getElementById('teamTwo').innerHTML = teamTwo;
  document.getElementById('teamThree').innerHTML = teamThree;
  document.getElementById('teamFour').innerHTML = teamFour;
}
