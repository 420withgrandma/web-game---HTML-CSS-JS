document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("error-message");
  //Sets the form and error message from the HTML as form and errorMessage

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    //Prevents the form from submitting

    const firstname = document.getElementById("firstname-input").value;
    const lastname = document.getElementById("lastname-input").value;
    const email = document.getElementById("email-input").value;
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;
    const repassword = document.getElementById("repassword-input").value;
    //Get form values

    if (!firstname || !lastname || !email || !username || !password || !repassword) {
      errorMessage.textContent = "Please fill in all fields!";
      errorMessage.style.color = "red";
      return; 
    }
    //Validate form fields

    if (password !== repassword) {
      errorMessage.textContent = "Passwords do not match!";
      errorMessage.style.color = "red";
      return; 
    }
    //Check if passwords match

    const userData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
      score: 0
    };
    //If all checks pass, stores user data in localStorage

    localStorage.setItem("user", JSON.stringify(userData));

    form.reset();
    errorMessage.textContent = "Registration successful!";
    errorMessage.style.color = "green";
    //Clear form and display success message
  });
});
