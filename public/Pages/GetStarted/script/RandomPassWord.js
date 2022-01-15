const LettersS = "abcdefghijklmnopqrstuvwxyz";
const LettersC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const Symbols = "._-,;!?+*:@#$%&/=|";

generator();

document.getElementById("GeneratePassWord")
	.addEventListener("click", () => {
		generator();
	});

function generator() {
	let word = "";
	let char = "";
	if (document.getElementById("SmallLettersPassWord").checked) char += LettersS;
	if (document.getElementById("CapitalLettersPassWord").checked) char += LettersC;
	if (document.getElementById("NumbersPassWord").checked) char += Numbers;
	if (document.getElementById("SymbolsPassWord").checked) char += Symbols;

	if (char === "") char = LettersS + LettersC + Numbers + Symbols;

	for (let i = 0; i < 16; i++) {
		word += char[Math.floor(Math.random() * char.length)];
	}

	document.getElementById("OutputPassWord").innerHTML = word;
}