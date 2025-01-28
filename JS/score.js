fetch("../JSON/scores.json")
    .then(response => response.json())
    .then(scores => {
        //Fetches the current stored scores in JSON
        let newScore = localStorage.getItem("user");
        if (newScore) {
            let parsedScore = JSON.parse(newScore);
            scores.push(parsedScore); 
        }
        //Retrives the new score from local storage and adds the new score to the scores array which is stored is JSON

        scores.sort((a, b) => Number(b.score) - Number(a.score));
        //Sorts the scores array from highest to lowest score

        var output = document.getElementById("hscore");
        //Display the sorted scores

        if (output) {
            output.innerHTML = ""; 
            scores.forEach(score => {
                output.innerHTML += `${score.firstname} ${score.score}<br>`;
            });
            //Clears existing content and displays firstname and score
        } else {
            console.error("Element with ID 'hscore' not found.");
            //If there is an error with loading into html then an error message is displayed into console log
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));
    //If there is an error fetching the json file then an error message is displayed into console log
