const canvas = document.getElementById("Canvas");
const player = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Mover Jogador no Canvas em modo Mobile
let startCoordinates = { X: 0, Y: 0 };
if (window.innerWidth < 1000) {
	document.addEventListener("touchstart", (e) => {
		startCoordinates.X = e.changedTouches[0].clientX;
		startCoordinates.Y = e.changedTouches[0].clientY;
	}, false);

	document.addEventListener("touchmove", (e) => {
		const endCoordinates = {
			X: e.changedTouches[0].clientX,
			Y: e.changedTouches[0].clientY
		}
		const xDifference = Math.abs(startCoordinates.X - endCoordinates.X);
		const yDifference = Math.abs(startCoordinates.Y - endCoordinates.Y);

		const event = { keyCode: 0 };
		if (xDifference > 50) {
			if (startCoordinates.X > endCoordinates.X) event.keyCode = 37;
			else event.keyCode = 39;
		} else if (yDifference > 50) {
			if (startCoordinates.Y > endCoordinates.Y) event.keyCode = 38;
			else event.keyCode = 40;
		}
		player.changeDirection(event);
	}, false);
}

const pWidth = 10;
const pHeight = 10;
let pX = canvasWidth / 2 + pWidth / 2;
let pY = canvasHeight / 2 + pHeight / 2;

const speed = 10;

draw();
function draw() {
	player.clearRect(0, 0, canvasWidth, canvasHeight);
	player.fillStyle = "white";
	player.fillRect(pX, pY, pWidth, pHeight);
}

document.addEventListener("keydown", (e) => moverJogador(e));

function moverJogador(e) {
	const keyCode = e.keyCode;
	// para não passar do canvas
	if ((keyCode === 37 || keyCode === 65) && pX >= pWidth) pX -= speed;
	if ((keyCode === 39 || keyCode === 68) && pX <= canvasWidth - pWidth - speed) pX += speed;
	if ((keyCode === 38 || keyCode === 87) && pY >= pHeight) pY -= speed;
	if ((keyCode === 40 || keyCode === 83) && pY <= canvasHeight - pHeight - speed) pY += speed;
	draw();
}