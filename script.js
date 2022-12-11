password = document.querySelector("#password")
confirm_password  = document.querySelector("#confirm_password")
btn = document.getElementById("create_account_button")

//Added an avent listener to the button in order to check if the password was entered correctly twice
//If they are incorrect, their border will change red
btn.addEventListener('click',() => {
    console.log("check")
    if (password.value == confirm_password.value) {
        console.log("all good!")
        password.className = "correct_password"
        confirm_password.className = "correct_password"
        
    }
    else
    {
        console.log("They don't match")
        password.className = "error"
        confirm_password.className = "error"
    }
})
