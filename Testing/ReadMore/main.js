let textStuff =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

document.getElementById("hide-text").addEventListener("click", showHide);

function addText() {
  let textBoxContainer = document.getElementById("text-box-container");
  let textBoxOne = document.createElement("p");
  textBoxOne.innerHTML = textStuff;
  textBoxContainer.appendChild(textBoxOne);
}

for (let i = 0; i < 3; i++) {
    addText();
}

function showHide () {
    let x = document.getElementById("text-box-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}


