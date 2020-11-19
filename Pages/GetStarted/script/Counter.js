const Counter = document.getElementById("CounterCounter");

let number = 0;

document.getElementById("AddCounter").addEventListener("click", () => {
	number++;
	updateCounter();
});
document.getElementById("RemoveCounter").addEventListener("click", () => {
	number--;
	updateCounter();
});

function updateCounter() {
	Counter.innerHTML = number;
	if (number > 0) Counter.style.background = "green";
	else if (number < 0) Counter.style.background = "red";
	else Counter.style.background = "yellow";

}
