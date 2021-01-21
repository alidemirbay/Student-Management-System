
$(document).ready(function () {

  // Getting references to our form and inputs
  var loginForm = $("#login-form");
  var emailInput = $("#email");
  var passwordInput = $("#password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      alert("Invalid Username or Password")
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  console.log(email);

  // loginUser does a post to our "api/login" route and if successful, redirects us the the page1
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function () {
      window.location.replace("/page1");
    }).catch(function (err) {
      console.log(err);
    });
  }

});