document.addEventListener('DOMContentLoaded', function() {
    // Get the button that opens the dropdown
    var dropbtn = document.querySelector('.dropbtn');

    // Get the dropdown content
    var dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown when the button is clicked
    dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
    // Popup functionality
var deactivateButton = document.getElementById('deactivateButton');
var popup = document.getElementById('popup');
var mainContent = document.getElementById('mainContent');
var closePopup = document.getElementById('closePopup');

deactivateButton.addEventListener('click', function(event) {
    event.preventDefault();
    mainContent.classList.add('blurred');
    popup.style.display = 'block';
});

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
    mainContent.classList.remove('blurred');
});

});

