const form = document.getElementById("calc-form");

function isPositiveInteger(value) {
  return /^[0-9]+$/.test(value);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const leftValue = document.getElementById("left").value;
  const rightValue = document.getElementById("right").value;
  const operator = document.getElementById("operator").value;

  if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
    alert("Error :(");
    return;
  }

  const left = parseInt(leftValue, 10);
  const right = parseInt(rightValue, 10);

  if ((operator === "/" || operator === "%") && right === 0) {
    alert("It's over 9000!");
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = left + right;
      break;
    case "-":
      result = left - right;
      break;
    case "*":
      result = left * right;
      break;
    case "/":
      result = left / right;
      break;
    case "%":
      result = left % right;
      break;
  }

  console.log(result);
  alert(result);
});

setInterval(function () {
  alert("Please, use me...");
}, 30000);
