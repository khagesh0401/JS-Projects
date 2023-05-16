let todo = document.getElementById("add");
let todocontainer = document.getElementById("todocontainer");
let textfield = document.getElementById("textfield");

todo.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerHTML = textfield.value;
  todocontainer.appendChild(paragraph);
  textfield.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    todocontainer.removeChild(paragraph);
  });
  var minus = document.getElementById("reset");
  minus.addEventListener("click", function () {
    todocontainer.removeChild(paragraph);
  });
});
