/* Global elements */
const colorBoard1 = document.getElementById("board-1");
const colorBoard2 = document.getElementById("board-2");
const colorBoard3 = document.getElementById("board-3");
const colorBoard4 = document.getElementById("board-4");
const colorBoard5 = document.getElementById("board-5");

const colorCode1 = document.getElementById("code-1");
const colorCode2 = document.getElementById("code-2");
const colorCode3 = document.getElementById("code-3");
const colorCode4 = document.getElementById("code-4");
const colorCode5 = document.getElementById("code-5");

//Load Default

/* When user clicks "Get Color scheme" */
document
  .getElementById("color-picker")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const seedColor = formData.get("seed-color").slice(1);
    const colorMode = formData.get("color-mode").toLowerCase();

    generateScheme(seedColor, colorMode);
    // console.log(colorMode);
  });

function generateScheme(seed, mode) {
  const fetchUrl = `https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=5`;
  // let colorArr = [];

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const colorArr = data.colors.map((color) => {
        return color.hex.value;
      });

      //Update colors
      colorCode1.textContent = colorArr[0];
      colorCode2.textContent = colorArr[1];
      colorCode3.textContent = colorArr[2];
      colorCode4.textContent = colorArr[3];
      colorCode5.textContent = colorArr[4];

      colorBoard1.style.backgroundColor = colorArr[0];
      colorBoard2.style.backgroundColor = colorArr[1];
      colorBoard3.style.backgroundColor = colorArr[2];
      colorBoard4.style.backgroundColor = colorArr[3];
      colorBoard5.style.backgroundColor = colorArr[4];
      // console.log(colorArr);
    });
}

// generateScheme("eee", "monochrome");

function select(option) {
  document.getElementById("color-mode-input").value = option;
}

const dropdownEl = document.querySelector(".color-mode");
dropdownEl.onclick = function () {
  dropdownEl.classList.toggle("active");
};
