document.addEventListener("DOMContentLoaded", function () {
    const endButton = document.querySelector(".end-game-button");
    const nextButton = document.querySelector(".next-button");
    // textarea that displays the key names
    const gameCard = document.querySelector(".game-card"); 
  
    // To keep track of which key is currently shown
    let currentKeyIndex = 0; 
    let keys = []; // Array to store the keys from localStorage
  
    // Function to initialize and display the first localStorage key
    function initializeAndDisplayFirstKey() {
        // Get all keys from localStorage
        keys = Object.keys(localStorage); 
        // Check if there are any keys in localStorage
        if (keys.length > 0) {
          // Display the first key
        displayKeyByKeyIndex(currentKeyIndex); 
        } else {
            // Handle case where localStorage is empty
        gameCard.textContent = "No data available"; 
      }
    }
  
    // Function to display a key by its index in the 'keys' array
    function displayKeyByKeyIndex(index) {
      const key = keys[index];
      const value = JSON.parse(localStorage.getItem(key)); // Assuming value is stored as JSON string
      gameCard.textContent = `${key}`; // Display key and value, adjust as needed
    }
  
    // Add event listener for the end button
    endButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  
    // Add event listener for the next button
    nextButton.addEventListener("click", function () {
      currentKeyIndex += 1; // Move to the next key
      if (currentKeyIndex >= keys.length) {
        currentKeyIndex = 0; // Loop back to the first key if we've reached the end
      }
      displayKeyByKeyIndex(currentKeyIndex); // Display the next key
    });
  
    initializeAndDisplayFirstKey(); // Initialize and display the first key upon DOM content loaded
  });
  