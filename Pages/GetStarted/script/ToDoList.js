const input = document.getElementById("InputToDoList");
const submit = document.getElementById("SubmitToDoList");
const list = document.getElementById("ListToDoList");

createToDo("Start Learn JavaScript");

submit.addEventListener("click", event => {
	event.preventDefault();
	createToDo(input.value);
});

function createToDo(todo) {
	const li = document.createElement("li");
	const button = document.createElement("button");
	li.innerHTML = todo;
	input.value = "";
	button.addEventListener("click", () => list.removeChild(li));
	li.appendChild(button);
	list.appendChild(li);
}
