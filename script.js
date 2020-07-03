function validateForm() {
    var nameValue = document.forms["myform"]["name"].value;
    var emailValue = document.forms["myform"]["email"].value;
    var passwordValue = document.forms["myform"]["password"].value;

    if (nameValue == "") {
        alert("Name Field cannot be empty");
        return false;
    }

    if (emailValue == "") {
        alert("Email Field cannot be empty");
        return false;
    }

    if (passwordValue == "") {
        alert("Password Field cannot be empty");

    }

    return false;
}