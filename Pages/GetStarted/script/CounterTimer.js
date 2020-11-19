const StartCounterTimer = document.getElementById("StartCounterTimer");

let timer;
let isStart = true;
let seconds = 0, minutes = 0, hours = 0;

StartCounterTimer.addEventListener("click", () => {
	startTime = new Date().getTime();
	if (isStart) {
		start();
		StartCounterTimer.innerHTML = "Stop";
	}
	else {
		clearInterval(timer);
		StartCounterTimer.innerHTML = "Continue";
	}
	isStart = !isStart;
});

function start() {
	timer = setInterval(() => {
		seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
			if (minutes >= 60) {
				minutes = 0;
				hours++;
			}
		}
		document.getElementById("TimerCounterTimer").innerHTML = `
		${hours > 9 ? hours : "0" + hours} :
		${minutes > 9 ? minutes : "0" + minutes} :
		${seconds > 9 ? seconds : "0" + seconds}
		`;
	}, 1000);
}

document.getElementById("ResetCounterTimer").addEventListener("click", () => {
	seconds = 0;
	minutes = 0;
	hours = 0;
	isStart = true;
	clearInterval(timer);
	StartCounterTimer.innerHTML = "Start";
	document.getElementById("TimerCounterTimer").innerHTML = `00 : 00 : 00 `;
});
