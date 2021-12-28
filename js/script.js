function validateForm() {
    //collect form data in javascript variables

    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;  
    var name1 = document.getElementById("uname").value;

    //check empty username field
    if(name1 == "") {
        document.getElementById("blankMsg").innerHTML = "**Fill the user name!";
        return false;
    }

    //character data validation
    if(!isNaN(name1)){
        document.getElementById("blankMsg").innerHTML = "**Only characters are allowed!";
        return false;
    }

    //check empty password field
    if(pw1 == ""){
        document.getElementById("message1").innerHTML = "**Fill the password please!"
        return false;
    }

    //check empty confirm password field
    if(pw2 == "") {
        document.getElementById("message2").innerHTML = "**Enter the password!"
        return false;
    }

    //minimum password length validation
    if(pw1.length < 8) {
        document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters1";
        return false;  
    }

    //maximum length of password validation
    if(pw1.length > 15) {
        document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters!";
        return false; 
    }

    if(pw1 != pw2) {
    document.getElementById("message2").innerHTML = "**Passwords are not same!";
    return false;
    } else {
        alert("Your password created successfully");
        document.write("Signup form has been submitted successfully!");
    }
}
