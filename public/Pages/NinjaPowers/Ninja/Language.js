const list = {
	English: {
		a: "One",
		b: "Two"
	},
	Portuguese: {
		a: "Um",
		b: "Dois"
	}
}

const IndiomaSlect = document.getElementById("IndiomaSlect");

const valorIndiomaSlect = Object.keys(ind);
for (let i = 0; i < valorIndiomaSlect.length; i++) {
	let opt = valorIndiomaSlect[i];
	const el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
	IndiomaSlect.appendChild(el);
}
