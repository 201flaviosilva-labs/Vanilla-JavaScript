const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
	const date = new Date();
	document.getElementById("DayTodayTimer").innerHTML = date.toLocaleDateString();
	document.getElementById("MonthTodayTimer").innerHTML = monthNames[date.getMonth()];
	document.getElementById("WeekTodayTimer").innerHTML = weekDays[date.getDay() - 1];
	document.getElementById("HourTodayTimer").innerHTML = date.toLocaleTimeString();
}, 1);
