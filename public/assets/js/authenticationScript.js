$(function() {

  $("#loginButton").on("click", function(event) {
    event.preventDefault();
    //get the login stuff
    var username = $("#loginUsername").val().trim();
    var password = $("#loginPwd").val().trim();
    //clear input fields;
    $("#loginUsername").val("");
    $("#loginPwd").val("");
    //check if we have the usename and thee password

    if (!username || !password) {
      alert('Please enter your username and password!');
      return;
    }
    $.post("/api/login", {
      username: username,
      password: password
    }).then(function(data) {

      console.log(data);
      window.location.replace(data);
    }).fail(function(err) {
      if (err) {
        alert('Wrong username or password!');
      }
    });
    /*
    .catch(function(err){
      console.log(err);
    });*/
  });

  $("#signupButton").on("click", function(event) {
    event.preventDefault();
    //get the signup stuff
    username = $("#signupUsername").val().trim(),
      password = $("#signupPwd").val().trim()
    if (!username || !password) {
      alert('Please enter both a username and password!');
      return;
    }
    $("#signupUsername").val("");
    $("#signupPwd").val("");

    $.get("/api/user/" + username).then(function(response) {
      //if null, username isn't taken
      //console.log(response);
      if (response != null) {
        //put in some red text that says user name already taken
        alert('Username is already taken. Try another!');
      } else {
        $.post("/api/signup", { username: username, password: password }).then(function(data) {
          console.log(data);
          window.location.replace(data);
        });
      }
    });
  });

});