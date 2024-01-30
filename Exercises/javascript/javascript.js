let userName = prompt("Please enter your username")

if (userName == "Admin") {
 let password = prompt("Password")
  if (password == "TheMaster") {
    alert("Welcome")
  } else if (password == "")
    alert("Cancelled") 
    else {
        alert("Wrong Password")
    }
} else if (userName == "") {
    alert ("Cancelled")
} else {
    alert ("I don't know you")
}