const colors = ["red", "green", "blue"];
let colorIndex = 0;
let size = 200;

const MIN_SIZE = 200;
const MAX_SIZE = 420;

function applySize() {
  $("#balloon").css({ width: size + "px", height: size + "px" });
}

$("#balloon").on("click", function () {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > MAX_SIZE) {
    size = MIN_SIZE;
  }

  applySize();
  $("#balloon").css("background-color", colors[colorIndex]);
});

$("#balloon").on("mouseleave", function () {
  size -= 5;
  if (size < MIN_SIZE) {
    size = MIN_SIZE;
  }
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;

  applySize();
  $("#balloon").css("background-color", colors[colorIndex]);
});
