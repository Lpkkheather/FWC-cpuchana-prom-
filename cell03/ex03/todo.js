const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new-btn");

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; max-age=" + (60 * 60 * 24 * 365);
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].trim().split("=");
    if (parts[0] === name) {
      return decodeURIComponent(parts[1]);
    }
  }
  return null;
}

function saveTodos() {
  const items = ftList.querySelectorAll(".todo-item");
  const texts = [];
  items.forEach(function (item) {
    texts.push(item.textContent);
  });
  setCookie("todos", JSON.stringify(texts));
}

function createTodoElement(text) {
  const div = document.createElement("div");
  div.className = "todo-item";
  div.textContent = text;

  div.addEventListener("click", function () {
    const confirmed = confirm("Remove this to-do item?");
    if (confirmed) {
      div.remove();
      saveTodos();
    }
  });

  return div;
}

function addTodo(text) {
  const div = createTodoElement(text);
  ftList.insertBefore(div, ftList.firstChild);
}

newBtn.addEventListener("click", function () {
  const text = prompt("Enter your new to-do:");
  if (text !== null && text.trim() !== "") {
    addTodo(text.trim());
    saveTodos();
  }
});

const saved = getCookie("todos");
if (saved) {
  const texts = JSON.parse(saved);
  texts.forEach(function (text) {
    ftList.appendChild(createTodoElement(text));
  });
}
