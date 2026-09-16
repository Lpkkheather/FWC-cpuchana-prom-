const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let colorIndex = 0;
let size = 200;

const MIN_SIZE = 200;
const MAX_SIZE = 420;

function applySize() {
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
}

balloon.addEventListener("click", function () {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > MAX_SIZE) {
    size = MIN_SIZE;
  }

  applySize();
  balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener("mouseleave", function () {
  size -= 5;
  if (size < MIN_SIZE) {
    size = MIN_SIZE;
  }
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;

  applySize();
  balloon.style.backgroundColor = colors[colorIndex];
});
