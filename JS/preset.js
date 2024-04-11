//  this file is for when the user wants to learn built in keys rather than creating their own

const presetKeys = {
    copy: ["Meta", "c"],
    paste: ["Meta", "v"],
    "highlight left":["Meta","Shift","ArrowLeft"],
    spotlight: ["Meta", " "],
    "open terminal": ["Control", "`"],
    "duplicate line down (replaces copy and paste)":["Alt", "Shift", "ArrowDown"],
}

let currentKeyIndex = 0; // Keep track of the current key being shown

// Function to display the current key name
function showKeyNames() {
    const keyName = document.querySelector(".preset-key-name");
    // Get the keys as an array
    const keys = Object.keys(presetKeys); 
  
    if (keys.length > 0 && currentKeyIndex < keys.length) {
        keyName.textContent = keys[currentKeyIndex]; // Show the current key
    }
    else {
        console.log("No more keys to display or out of bounds index.");
        // keyName.textContent = "No more keys"; // Indicate no more keys are left
        currentKeyIndex = 0;
        showKeyNames()
    }
}

// Function to handle key press attempts and check them
function attempts() {
    const userAttempts = []; // To hold user key press attempts
    
    document.addEventListener("keydown", function (event) {
        const attempt = event.key;
        userAttempts.push(attempt);
        
        const currentKey = Object.keys(presetKeys)[currentKeyIndex];
        const correctCommands = presetKeys[currentKey];
        
        if (JSON.stringify(userAttempts.slice(-correctCommands.length)) === JSON.stringify(correctCommands)) {
            alert("Correct!");
            // Optionally reset userAttempts and move to the next key command as needed
        }
    });
}

// Initialize the key name display and attempts listener
showKeyNames();
attempts();

// Function to advance to the next key command when the "Next" button is clicked
document.querySelector(".next-button").addEventListener("click", () => {
    currentKeyIndex++; // Move to the next command
    showKeyNames(); // Update display to show the next key command
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const nextButton = document.querySelector(".next-button");
        nextButton.click(); // Programmatically click the "Next" button
    }
});

