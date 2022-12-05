function validate() {
    var firstname = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    var email = document.getElementById("email");
    var subject = document.getElementById("state");

    if (firstname.value.trim() == "" || lastname.value.trim() == "" || email.value.trim() == "" || subject.value.trim() == "") {
        alert("Required field");
        return false;
    }
    else {
        true;
    }
}