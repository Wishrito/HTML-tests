function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "your name"); prompt("Please enter your password:", "your password");
    if (person == null || person == "" ) {
        if (password == null || password == "") {
            text = "invalid credentials.";
        }
    if (password == null || password == "") {
        text = "please provide a password.";
    } else {
      text = "logged in successfully.";
    }
    document.getElementById("demo").innerHTML = text;
  }
}