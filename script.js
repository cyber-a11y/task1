/*Get references to the input field and the button by their IDs
var textInput = document.getElementById("textInput");
var showAlertButton = document.getElementById("showAlertButton");


    // Add a click event listener to the button
    //add code below
showAlertButton.addEventListener("click", function() {alert("Alert");});
 
    // Get the value entered in the input field
    //add code below
 {
        var textinput = document.getElementById("textinput").value;
        document.getElementById("showAlertButton").innerHTML = showAlertButtons;
    }

    // Display an alert with the entered text
    //add code below
    var showAlertButton = document.getElementById("showAlertButton").innerHTML;
   alert('innerHTNL:' +showAlertButton);

    // Clear the input field
    //add code below
 */
// Get references to the input field and the button by their IDs
var textInput = document.getElementById("textInput");
var showAlertButton = document.getElementById("showAlertButton");

// Add a click event listener to the button
showAlertButton.addEventListener("click", function () {
    // Get the value entered in the input field
    var enteredText = textInput.value;

    // Display an alert with the entered text
    if (enteredText !== "") {
        alert("You entered: " + enteredText);
    } else {
        alert("Please enter some text before clicking the button.");
    }
});
