const startButton = document.querySelector('.start-game-button');
const endButton = document.querySelector('.end-game-button');

const clickHereButton = document.querySelector(".click-here");

startButton.addEventListener('click', function () { 
    saveButton.classList.add('hide');
    box.classList.add('hide');
    clearButton.classList.add('hide');
    clickHereButton.classList.add('hide');
    startButton.classList.add('hide');
    endButton.classList.remove('hide');
});

endButton.addEventListener('click', function () { 
    saveButton.classList.remove('hide');
    box.classList.remove('hide');
    clearButton.classList.remove('hide');
    clickHereButton.classList.remove('hide');
    startButton.classList.remove('hide');
    endButton.classList.add('hide');
});