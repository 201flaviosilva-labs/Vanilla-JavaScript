const list = document.getElementById("list");

function create(text) {
	const li = document.createElement("li");
	li.innerHTML = text;
	list.appendChild(li);
}

function removeAll() {
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
}
