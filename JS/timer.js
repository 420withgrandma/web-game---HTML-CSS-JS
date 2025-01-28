let counter = 0;
let scoreIntervalId;
// Sets the counter variable to 0 and declares the scoreIntervalId

export function getScore() {
  if (!scoreIntervalId) {
    // Only set a new interval if none exists
    scoreIntervalId = setInterval(() => {
      document.getElementById("highscore").innerHTML = ++counter;
    }, 1000);
  }
}
// Increases the counter variable by one every second and updates the HTML

export { counter, scoreIntervalId };

