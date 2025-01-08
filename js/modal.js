//https://www.w3schools.com/howto/howto_css_modals.asp Accessed(23rd Feburary 2024)
//Used in the process of creating the modal to delete an appointment 

//Variable to store modal in 
var modal = document.getElementById("deleteModal");

//Delete button stored in variable 
var deleteButton = document.getElementsByClassName("deleteButton");

//span element used to closed modal stored in variable span
var span = document.getElementsByClassName("close")[0];

// If any of the delete buttons are clicekd the modal will appear. Sees how many buttons there is and then opens the modal when one of them is clicked. Applying it to all buttons using for.
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function() {
        modal.style.display = "block";
    }
}

// When the user clicks the X inside of the modal the is exited and no longer displayed
span.onclick = function() {
    modal.style.display = "none";
}

// If the user clicks outside of the modal it will also make the modal no longer display
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}