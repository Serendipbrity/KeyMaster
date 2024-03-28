document.addEventListener("DOMContentLoaded", function () {
    var editor = CodeMirror.fromTextArea(document.querySelector('.game-card'), {
        lineNumbers: true,
        mode: "htmlmixed",
        theme: "default"
    });

    editor.setValue(`<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML template. Feel free to edit it.</p>
</body>
</html>`);
});

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
        window.alert("correct!");
      }
    });
  }

  // Add event listener for the end button
  endButton.addEventListener("click", function () {
    // Redirect to index.html (home)
    window.location.href = "index.html";
  });

  // Add event listener for the next button
  nextButton.addEventListener("click", function () {
    // Move to the next key
    currentKeyIndex += 1;
    // if the current key index is greater than or equal to the length of the keys array
    if (currentKeyIndex >= keys.length) {
      // Loop back to the first key
      currentKeyIndex = 0;
    }
    // Display the next key
    displayKeyByKeyIndex(currentKeyIndex);
  });

  // Initialize and display the first key upon DOM content loaded
initializeAndDisplayFirstKey();
  

