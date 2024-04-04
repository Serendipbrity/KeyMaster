// This file is for creating new keys (currently on the homepage)

// create empty array to hold one key combo
let keyCombo = [];

// 'keys will appear here' box
const box = document.querySelector(".box");
// where new key combo will appear in modal
const modalBody = document.querySelector(".modal-body");
const saveButton = document.querySelector(".save");

function recordedKeyPreses(event) {
  console.log(`Key pressed: ${event.key}`);
  // clear default input info
  box.textContent = "";
  // if there is a key event
  if (event.key) {
    // add the key event to the keyCombo array
    keyCombo.push(event.key);
    // display the key event in the box
    box.textContent = keyCombo;
    console.log(`Recorded: ${keyCombo}`);
  }
}
// listen for any keys pressed on the entire document
document.addEventListener("keydown", recordedKeyPreses);

// when the save button is clicked
saveButton.addEventListener("click", function () {
  // display the key combo in the modal
  modalBody.textContent = keyCombo;
  document.removeEventListener("keydown", recordedKeyPreses);
});

//  modal save button
const modalSave = document.querySelector(".modal-save-button");

// when the modal save button is clicked
modalSave.addEventListener("click", function () {
    // name or description of key combo
    const nameInput = document.querySelector(".name").value;
    // save the key combo and name to local storage
  localStorage.setItem(nameInput, JSON.stringify(keyCombo));
});

// --------- clear button ----------------------------
const clearButton = document.querySelector(".clear");
// when clicking the clear button
clearButton.addEventListener("click", function () {
  // clear the keyCombo array
  keyCombo = [];
  // reset the box text
  box.textContent = "Keys will auto appeaer here";
  // add back the keydown event listener
  document.addEventListener("keydown", recordedKeyPreses);
});
// ---------------------------------------------------

const startButton = document.querySelector(".start-game-button");
// when clicking the start button
startButton.addEventListener("click", function () {
  // Redirect to the game page
  window.location.href = "../HTML/game.html";
});
