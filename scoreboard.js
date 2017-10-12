/* Controller for each buttonf or the four different teams on the scoreboard
page -- TODO: include a team naming option/control panel for the game set-up */

// Team 1
let barOne = document.getElementById('team1');
let widthOne = 0;

function moveOne() {

  teamOne = document.getElementById('teamOneName').value;

  if (widthOne >= 100) {

    alert( teamOne + " is the winner!");

  } else {

    widthOne+=10;
    barOne.style.width = (widthOne + '%');
    console.log(barOne.style.width);

  }
}

// Team 2
let barTwo = document.getElementById('team2');
let widthTwo = 0;

function moveTwo() {

  teamTwo = document.getElementById('teamTwoName').value;

  if (widthTwo >= 100) {

    alert( teamTwo + " is the winner!");

  } else {

    widthTwo+=10;
    barTwo.style.width = (widthTwo + '%');
    console.log(barTwo.style.width);

  }
}

// Team 3
let barThree = document.getElementById('team3');
let widthThree = 0;

function moveThree() {

  teamThree = document.getElementById('teamThreeName').value;

  if (widthThree >= 100) {

    alert( teamThree + " is the winner!");

  } else {

    widthThree+=10;
    barThree.style.width = (widthThree + '%');
    console.log(barThree.style.width);

  }
}

// Team 4
let barFour = document.getElementById('team4');
let widthFour = 0;

function moveFour() {

  teamFour = document.getElementById('teamFourName').value;

  if (widthFour >= 100) {

    alert( teamFour + " is the winner!");

  } else {

    widthFour+=10;
    barFour.style.width = (widthFour + '%');
    console.log(barFour.style.width);

  }
}
