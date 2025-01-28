import { isJumping, position } from './player.js';
import { getScore, counter, scoreIntervalId } from './timer.js';
//Imports the position, score and isJumping

export function generateObstacles() {
  const grid = document.querySelector(".grid");
  if (!grid) return;
  //Looks for the grid element in HTML and if grid is not found the function will end

  let randomTime = Math.random() * 4000;
  let obstaclePosition = 2000;
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  grid.appendChild(obstacle);
  obstacle.style.left = obstaclePosition + "px";
  //The obstacle spawn rate is set and the position that the obstacle will spawn at is also set

  let timeId = setInterval(function() {
    const playerElement = document.querySelector(".user");
    if (!playerElement) {
      clearInterval(timeId);
      return;
    }
    const playerRect = playerElement.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    //Starts a timer and also gets the current position of the player and obstacle

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.bottom > obstacleRect.top &&
      playerRect.top < obstacleRect.bottom
      //Checks if the player and the obstacle have a collision
    ) {
      clearInterval(timeId);
      document.getElementById("alert").innerHTML = "GAME OVER";
      clearInterval(scoreIntervalId);
      //If they collide then a message is displayed, the user and the obstacles also stop moving as the timer is cleared and the score also stops going up as it is also cleared

      while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
      //This removes all the obstacles from the game

      const playerDataString = localStorage.getItem('user');
      if (playerDataString) {
        let playerData = JSON.parse(playerDataString);
        playerData.score = typeof counter !== 'undefined' ? counter : 0;
        localStorage.setItem('user', JSON.stringify(playerData));
        console.log("Score saved successfully for:", playerData.username);
      }
      //This stores the score the player got into the correct place
    }

    obstaclePosition -= 10;
    obstacle.style.left = obstaclePosition + "px";
    //This makes the obstacle move the obstacle to the left
  }, 20);

  setTimeout(generateObstacles, randomTime);
  //This will generate the obstacles at random intervals
}

