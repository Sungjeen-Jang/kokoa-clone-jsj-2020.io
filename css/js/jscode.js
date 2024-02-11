document
  .getElementById("login-form")
  .querySelector('input[type="submit"]')
  .addEventListener("click", function () {
    this.classList.add("heartbeat");
    setTimeout(() => {
      this.classList.remove("heartbeat");
    }, 1500); // Remove the class after the animation duration
  });
