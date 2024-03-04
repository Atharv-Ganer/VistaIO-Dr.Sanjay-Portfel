document.addEventListener("DOMContentLoaded", function() {
  const options = document.querySelector('.options');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const optionButtons = document.querySelectorAll('.option');
  const optionColors = ['#ff0000', ' #25D366', '#1DA1F2', '#0077b5']; // Define colors for each option
  let selectedIndex = 0;

  // Show options
  options.style.display = 'block';

  // Function to handle option selection
  function selectOption(index) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => {
      option.style.display = 'none';
    });
    allOptions[index].style.display = 'block';
    options.style.backgroundColor = optionColors[index]; // Set background color of menu
  }

  // Initial option selection
  selectOption(selectedIndex);

  // Event listeners for navigation buttons
  prevBtn.addEventListener('click', function() {
    selectedIndex = Math.max(0, selectedIndex - 1);
    selectOption(selectedIndex);
  });

  nextBtn.addEventListener('click', function() {
    selectedIndex = Math.min(3, selectedIndex + 1);
    selectOption(selectedIndex);
  });

  // Event listener for Gmail button click
  optionButtons[0].addEventListener('click', function() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sanjaychhalotre@gmail.com', '_blank'); // Open Gmail compose window with a specific email address
  });

  // Function to open LinkedIn profile
  function openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/sanjay-chhalotre-phd-40644979/', '_blank'); // Replace 'yourlinkedinprofile' with the LinkedIn profile URL you want to open
  }

  // Event listeners for hovering over each option
  optionButtons.forEach((button, index) => {
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = optionColors[index]; // Change background color of option
      options.style.backgroundColor = optionColors[index]; // Change background color of menu
    });
    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = ''; // Reset background color of option
    });
  });
});


// scroll to top btn
// Create a button element
var button = document.createElement("button");

// Add a class to the button for styling
button.classList.add("scroll-to-top-button");

// Add text content to the button
button.textContent = "↑";

// Append the button to the body of the document
document.body.appendChild(button);

// Add event listener to the button
button.addEventListener("click", function() {
    // Smooth scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});