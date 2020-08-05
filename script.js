function validateForm() {
    var nameValue = document.getElementById('myform').name.value;
    var emailValue = document.getElementById('myform').email.value;
    var passwordValue = document.getElementById('myform').password.value;

    if (nameValue == "") {
        document.getElementById('nameErr').innerHTML = "Name Field cannot be empty";
        event.preventDefault();
    } else {
        document.getElementById("nameErr").innerHTML = "";
    }

    if (emailValue == "") {
        document.getElementById('emailErr').innerHTML = "Email Field cannot be empty";
        event.preventDefault();

    } else {
        document.getElementById("emailErr").innerHTML = "";

    }

    if (passwordValue == "") {
        document.getElementById('passErr').innerHTML = "Password Field cannot be empty";
        event.preventDefault();
    }
    else if (passwordValue.length < 6 || passwordValue.length > 20) {
        document.getElementById('passErr').innerHTML = "Password digits should be between 6 and 20";
        event.preventDefault();
    } else {
        document.getElementById("passErr").innerHTML = "";
    }
    
    return su
}