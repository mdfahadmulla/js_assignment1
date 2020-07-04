function validateForm() {
    var nameValue = document.forms["myform"]["name"].value;
    var emailValue = document.forms["myform"]["email"].value;
    var passwordValue = document.forms["myform"]["password"].value;
    var alphabets = /^[A-Za-z]+$/;
    var email

    if (nameValue == "") {
        alert("Name Field cannot be empty");
        return false;

    } else if (!nameValue.match(alphabets)) {
        alert("Name cannot be numbers or symbols");
        return false;
    }

    if (emailValue == "") {
        alert("Email Field cannot be empty");
        return false;
    } else if(emailValue == )

    if (passwordValue == "") {
        alert("Password Field cannot be empty");

    }

    return false;
}