document.addEventListener("DOMContentLoaded", function () {
  const endButton = document.querySelector(".end-game-button");
  const nextButton = document.querySelector(".next-button");
  // textarea that displays the key names
  const gameCard = document.querySelector(".name-of-key");

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
    // each single key
    const key = keys[index];
    //  get the key name
    const correctKey = JSON.parse(localStorage.getItem(key));
    //  display the key name
    gameCard.textContent = key;
    // tell me button
    const tellMe = document.querySelector(".tell-me");
    // when clicking the tell me button
    tellMe.addEventListener("click", function () {
      const answer = document.querySelector(".answer");
       // Join the array elements into a string without commas
  const textWithoutCommas = correctKey.join(' ');
  
  answer.textContent = textWithoutCommas;
      // Set a timer to clear the textContent after 3 seconds (3000 milliseconds)
      setTimeout(() => {
        answer.textContent = "";
      }, 3000); // 3000 milliseconds = 3 seconds
    });
    //   create an empty array to hold users key press attempts
    const attempts = [];
    //   listen for keydown events
    document.addEventListener("keydown", function (event) {
      // each single key press
      const attempt = event.key;
      //   if there is a key press
      if (attempt) {
        //   add the key press to the attempts array
        attempts.push(attempt);
        console.log(attempts);
      }

      // Ensure attempts are only as long as correctKey for comparison
      if (attempts.length > correctKey.length) {
        // Remove the oldest key if attempts are longer than correctKey
        attempts.shift();
      }
      // Convert both arrays to JSON strings for comparison and check if they match
      if (JSON.stringify(attempts) === JSON.stringify(correctKey)) {
        setTimeout(function () {
          window.alert("correct!");
        }, 100);
      }
    });
  }

  // Add event listener for the end button
  endButton.addEventListener("click", function () {
    // Redirect to index.html (home)
    window.location.href = "/index.html";
  });

  // Function to move to the next key and display it
  function moveToNextKey() {
    // Move to the next key
    currentKeyIndex += 1;
    // if the current key index is greater than or equal to the length of the keys array
    if (currentKeyIndex >= keys.length) {
      // Loop back to the first key
      currentKeyIndex = 0;
    }
    // Display the next key
    displayKeyByKeyIndex(currentKeyIndex);
  }

  // Add click event listener for the next button
  nextButton.addEventListener("click", function () {
    moveToNextKey();
  });

  // Add keydown event listener to the document
  document.addEventListener("keydown", function (event) {
    // Check if the Enter key was pressed
    if (event.key === "Enter") {
      // Prevent the default action to avoid triggering any forms or other elements
      event.preventDefault();
      // Call the function to move to the next key
      moveToNextKey();
    }
  });

  // Initialize and display the first key upon DOM content loaded
  initializeAndDisplayFirstKey();
});
