let r = 0;

const body = document.querySelector("body");
const RotatePage = document.getElementById("RotatePageBtn");
const ResetPage = document.getElementById("ResetPage");

RotatePage.addEventListener("click", () => {
	r += randomNumber();
	rodate();
});

ResetPage.addEventListener("click", () => {
	r = 0;
	rodate();
});

function rodate() {
	body.style["transition"] = "transform 1s";
	body.style["transform"] = `rotate(${r}deg)`;
}

const randomNumber = () => Math.floor(Math.random() * (90 - -90 + 1) + -90);
