import { jump, control } from './player.js';
import { getScore } from './timer.js';
//Imports the ability to jump and the score counter

export function initializeGame() {
  document.addEventListener("DOMContentLoaded", function() {
    const playerDataString = localStorage.getItem('user');
    if (!playerDataString) {
      console.error("No user found in localStorage. Please register before playing.");
      document.getElementById("alert").textContent = "No user found. Please register.";
      return;
    }
    //If the user is not logged in then the game will not start and the user will be made to log in
    //This function is not working currently however it was working at one point in time, I have left it in as it does not really make any difference to the code other then displaying a message to the user urging them to log in.

    const playerData = JSON.parse(playerDataString);
    console.log("Current Username:", playerData.username);
    //If the user is logged in then the current username is shown in the console log

    document.addEventListener("keydown", control);
    setInterval(getScore, 1000);
    //The timer is started once the game has started
  });
}

