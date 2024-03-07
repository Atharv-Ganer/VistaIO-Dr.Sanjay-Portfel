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

document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const imageContainer = document.querySelector('.image-container');

  // Hide the image container initially
  imageContainer.style.visibility = 'hidden';

  // Show loading screen initially
  loadingScreen.style.display = 'flex';

  // Set timeout to hide loading screen after 4 seconds
  setTimeout(function() {
      loadingScreen.style.display = 'none'; // Hide the loading screen
      imageContainer.style.visibility = 'visible'; // Reveal the image container

      // Allow scrolling after loading
      document.body.style.overflow = 'visible';

      // Add class to trigger scrolling animation after loading
      imageContainer.classList.add('animate-on-load');
  }, 4000); // 4 seconds delay
});

