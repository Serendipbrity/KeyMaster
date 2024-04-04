//  this file is for when the user wants to learn built in keys rather than creating their own

import { userAttempts, initUserInputListener } from './userAttempts.js';

const presetKeys = {
    copy: ["Meta", "c"],
    paste: ["Meta", "v"]

}

initUserInputListener();


// Function to compare two arrays
// function arraysEqual(a, b) {
//     if (a.length !== b.length) return false;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) return false;
//     }
//     return true;
// }

// Example of using the comparison inside an event listener
document.addEventListener('keydown', () => {
    // Assuming you have logic here to determine when userAttempts should be compared
       // Ensure userAttempts are only as long as correctKey for comparison
       if (userAttempts.length > presetKeys.copy.length) {
        // Remove the oldest key if userAttempts are longer than correctKey
        userAttempts.shift();
      }
    if (userAttempts === presetKeys.copy) {
    
        console.log('correct');
        // Clear userAttempts after correct input
        userAttempts.length = 0; // This resets the array for the next attempt
    // } else {
        // This logic might not be exactly what you want, as it would log "wrong" on every key press
        // Consider how and when you want to perform the comparison
        // console.log("wrong");
        // userAttempts.length = 0;
        // This resets the array for the next attempt
    }
    console.log("user attempt : " + userAttempts);
    console.log("preset : " + presetKeys.copy)
});



// const attempts = displayKeyByKeyIndex();
// attempts();
// function attempts() {
//     //   create an empty array to hold users key press attempts
// const userAttempts = [];
// //   listen for keydown events
// document.addEventListener("keydown", function (event) {
// // each single key press
// const attempt = event.key;
// //   if there is a key press
// if (attempt) {
//   //   add the key press to the userAttempts array
//   userAttempts.push(attempt);
//   console.log(userAttempts);
// }

// // Ensure userAttempts are only as long as presetKeys.copy for comparison
// if (userAttempts.length > presetKeys.copy.length) {
//   // Remove the oldest key if userAttempts are longer than presetKeys.copy
//   userAttempts.shift();
// }
// // Convert both arrays to JSON strings for comparison and check if they match
//   if (JSON.stringify(userAttempts) === JSON.stringify(presetKeys.copy)) {
//       setTimeout(function () {
//           window.alert("correct!")
//       }, 100);
// }
// });

// if (userAttempts === presetKeys.copy) {
//     console.log('correct') 
// } else {
//     console.log("wrong")
// }

// }
// attempts();
