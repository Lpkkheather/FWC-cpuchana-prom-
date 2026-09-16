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
  const texts = [];
  $("#ft_list .todo-item").each(function () {
    texts.push($(this).text());
  });
  setCookie("todos", JSON.stringify(texts));
}

function createTodoElement(text) {
  const $div = $("<div>").addClass("todo-item").text(text);

  $div.on("click", function () {
    const confirmed = confirm("Remove this to-do item?");
    if (confirmed) {
      $div.remove();
      saveTodos();
    }
  });

  return $div;
}

function addTodo(text) {
  $("#ft_list").prepend(createTodoElement(text));
}

$("#new-btn").on("click", function () {
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
    $("#ft_list").append(createTodoElement(text));
  });
}
