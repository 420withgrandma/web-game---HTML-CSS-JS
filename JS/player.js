export let isJumping = false;
export let position = 130;
let gravity = 0.9;
//The position, jumping and gravity values are set

export function jump() {
  isJumping = true;
  let count = 0;
  let jumpHeight = 15;
  //Sets jumping to true to indicate the player is jumping and sets the maximum height to 15

  let timerId = setInterval(function() {
    if (count === jumpHeight) {
      clearInterval(timerId);
      //A timer is set to move the player upwards and once it reaches the maximum height it stops
      let downTimerId = setInterval(function() {
        if (position <= 130) {
          clearInterval(downTimerId);
          isJumping = false;
          position = 130;
          document.querySelector(".user").style.bottom = position + "px";
          //A timer is started to bring the user down from the maximum height and once it reaches the ground it stops and resets the jumping state to false
        } else {
          position -= 10   * gravity;
          document.querySelector(".user").style.bottom = position + "px";
          //This makes the user move down at a rate of 10 multiplied by gravity
        }
      }, 20);
    } else {
      position += 20;
      count++;
      document.querySelector(".user").style.bottom = position + "px";
      //When the user is jumping it will go up by a rate of 20
    }
  }, 20);
}

export function control(e) {
  if (e.code === "Space" && !isJumping) {
    jump();
  }
  //If the spacebar is pressed then the function jump is started
}
