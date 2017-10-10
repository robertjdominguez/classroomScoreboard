/* Controller for each buttonf or the four different teams on the scoreboard
page -- TODO: include a team naming option/control panel for the game set-up */

// Team 1
let barOne = document.getElementById('team1');
let widthOne = 0;

function moveOne() {
  if (widthOne >= 100) {

    alert("Team One is the winner!"); // TODO: Replace with dynamic team name

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
  if (widthTwo >= 100) {

    alert("Team Two is the winner!"); // TODO: Replace with dynamic team name

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
  if (widthThree >= 100) {

    alert("Team Three is the winner!"); // TODO: Replace with dynamic team name

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
  if (widthFour >= 100) {

    alert("Team Four is the winner!"); // TODO: Replace with dynamic team name

  } else {

    widthFour+=10;
    barFour.style.width = (widthFour + '%');
    console.log(barFour.style.width);

  }
}
