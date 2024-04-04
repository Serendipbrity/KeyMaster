const userAttempts = [];

function initUserInputListener() {
    document.addEventListener("DOMContentLoaded", function () {
        document.addEventListener("keydown", function (event) {
            const attempt = event.key;
            userAttempts.push(attempt);
            // console.log(userAttempts);
            // Emit an event or perform additional logic as needed
        })
  });
}

export { userAttempts, initUserInputListener };
