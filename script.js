let keyCombo = [];
const box = document.querySelector('.box');
// listen for any keys pressed on the entire document
document.addEventListener('keydown', function (event) {
    console.log(`Key pressed: ${event.key}`);
    console.log(`Key code: ${event.code}`);
    // clear default input info
    box.textContent = "";
    if (event.key) {
        keyCombo.push(event.key);
        box.textContent = keyCombo;
        console.log(`Key combo: ${keyCombo}`);
    }
});

// clear button
const clearButton = document.querySelector('.clear');
// when clicking the clear button
clearButton.addEventListener('click', function () {
    // clear the keyCombo array
    keyCombo = [];
    // reset the box text
    box.textContent = "Keys will auto appeaer here";
});

