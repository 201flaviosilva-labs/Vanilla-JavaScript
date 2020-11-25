const input = document.getElementById("InputToDoList");
const submit = document.getElementById("SubmitToDoList");
const list = document.getElementById("ListToDoList");

submit.addEventListener("click", event => {
	event.preventDefault();
	const li = document.createElement("li");
	const button = document.createElement("button");
	li.innerHTML = input.value;
	input.value = "";
	button.addEventListener("click", () => list.removeChild(li));
	li.appendChild(button);
	list.appendChild(li);
});
