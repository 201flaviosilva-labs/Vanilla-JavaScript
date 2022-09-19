document.getElementById("CalculatorKeyC").addEventListener("click", clear);
document.getElementById("CalculatorKeyR").addEventListener("click", calc);

document.getElementById("CalculatorKeyA").addEventListener("click", () => addDigits("+"));
document.getElementById("CalculatorKeyM").addEventListener("click", () => addDigits("*"));
document.getElementById("CalculatorKeyS").addEventListener("click", () => addDigits("-"));
document.getElementById("CalculatorKeyD").addEventListener("click", () => addDigits("/"));
document.getElementById("CalculatorKeyF").addEventListener("click", () => addDigits("."));
document.getElementById("CalculatorKey9").addEventListener("click", () => addDigits("9"));
document.getElementById("CalculatorKey8").addEventListener("click", () => addDigits("8"));
document.getElementById("CalculatorKey7").addEventListener("click", () => addDigits("7"));
document.getElementById("CalculatorKey6").addEventListener("click", () => addDigits("6"));
document.getElementById("CalculatorKey5").addEventListener("click", () => addDigits("5"));
document.getElementById("CalculatorKey4").addEventListener("click", () => addDigits("4"));
document.getElementById("CalculatorKey3").addEventListener("click", () => addDigits("3"));
document.getElementById("CalculatorKey2").addEventListener("click", () => addDigits("2"));
document.getElementById("CalculatorKey1").addEventListener("click", () => addDigits("1"));
document.getElementById("CalculatorKey0").addEventListener("click", () => addDigits("0"));

const CalculatorDisplayResult = document.getElementById("CalculatorDisplayResult");
let result = 0;

function addDigits(d) {
	if (result == 0 && d !== "." && result !== "0.") result = "";
	else if (d === "." && result == 0) result = "0";
	result += d;
	CalculatorDisplayResult.innerHTML = result;
}

function calc() {
	result = eval(result);
	CalculatorDisplayResult.innerHTML = result;
}

function clear() {
	result = 0;
	CalculatorDisplayResult.innerHTML = result;
}
