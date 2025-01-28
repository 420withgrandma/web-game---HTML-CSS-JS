document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login");
  const errorMessage = document.getElementById("error-message");
  //Sets the login form and error message from the html as loginForm and errorMessage

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    // Prevents the form from submitting and refreshing the page

    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;
    // Get form values

    if (!username || !password) {
      errorMessage.textContent = "Please fill in both fields!";
      errorMessage.style.color = "red";
      return; //Checks if username and password are empty and if they are it shows the error message
    }

    const storedUserData = JSON.parse(localStorage.getItem("user"));
    // Get the user data from localStorage

    if (!storedUserData) {
      errorMessage.textContent = "No registered user found. Please register first.";
      errorMessage.style.color = "red";
      return;
    }
    // Check if user data exists in localStorage

    if (storedUserData.username === username && storedUserData.password === password) {
    // Check if the entered username and password match the stored data
      errorMessage.textContent = "Login successful!";
      errorMessage.style.color = "green";
      window.location.href = "game.html"; 
      //If login is successful it will redirect to game page
    } else {
      errorMessage.textContent = "Incorrect username or password!";
      errorMessage.style.color = "red";
      // Show error if credentials don't match
    }
  });
});
