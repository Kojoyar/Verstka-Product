// account logic
// show modal logic
const registerUserModalBtn = document.querySelector("#registerUser-modal");
const loginUserModalBtn = document.querySelector("#loginUser-modal");
const registerUserModalBlock = document.querySelector("#registerUser-block");
const loginUserModalBlock = document.querySelector("#loginUser-block");
const registerUserBtn = document.querySelector("#registerUser-btn");
const loginUserBtn = document.querySelector("#loginUser-btn");
const logoutUserBtn = document.querySelector("#logoutUser-modal");

registerUserModalBtn.addEventListener("click", () => {
  registerUserModalBlock.setAttribute("style", "display: flex !important");
  registerUserBtn.setAttribute("style", "display: flex !important");

  loginUserModalBlock.setAttribute("style", "display: none !important");
  loginUserBtn.setAttribute("style", "display: none !important");
});

loginUserModalBtn.addEventListener("click", () => {
  loginUserModalBlock.setAttribute("style", "display: flex !important");
  loginUserBtn.setAttribute("style", "display: flex !important");

  registerUserModalBlock.setAttribute("style", "display: none !important");
  registerUserBtn.setAttribute("style", "display: none !important");
});
