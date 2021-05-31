let u = document.getElementById("username");
let p = document.getElementById("pass");

document.getElementById("btn-submit").addEventListener("click", function() {
    if(u.value == "" && p.value == "") alert("You have not type anything, please type again");
    else if(u.value == "") alert("No Username, please type your username");
    else if(p.value == "") alert("No Password, please type your password");
    else alert("Sign In Successfully");
})