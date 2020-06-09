let r = 0;
let isWhite = true;
const body = document.querySelector("body");
document.getElementById("MagicJS").addEventListener("click", () => {
  r += Math.floor(Math.random() * 2) ? 90 : -90;
  body.addEventListener("click", () => {
    body.style["transition"] = "transform 3s";
    body.style["transform"] = `rotate(${r}deg)`;
  });
  Array.prototype.slice
    .call(document.querySelectorAll("div,p,span,img,a,body"))
    .map(function (tag) {
      tag.style["transform"] =
        "rotate(" + (Math.floor(Math.random() * 25) - 1) + "deg)";
    });
});

// TODO: Change LocalStorage
document.getElementById("btnBackground").addEventListener("click", () => {
  if (isWhite) {
    body.style.background = "black";
    Array.prototype.slice
      .call(
        document.querySelectorAll(
          "main h2, main h3, main h4, main h5, main h6, main p, main span, main a, footer p"
        )
      )
      .map(function (tag) {
        tag.style.color = "white";
      });
    isWhite = false;
  } else {
    body.style.background = "white";
    Array.prototype.slice
      .call(
        document.querySelectorAll(
          "main h2, main h3, main h4, main h5, main h6, main p, main span, main a, footer p"
        )
      )
      .map(function (tag) {
        tag.style.color = "black";
      });
    isWhite = true;
  }
});

// Ball Magic
criarBol();
body.addEventListener("click", () => criarBol());

function funcMudarCor() {
  const colorChange = [];
  for (let i = 0; i < 3; i++) {
    colorChange[i] = Math.floor(Math.random() * 251);
  }
  return colorChange;
}

function criarBol() {
  const colorChange = funcMudarCor();
  let rangeBall = Math.floor(Math.random() * window.innerWidth - 50);
  rangeBall = rangeBall < 50 ? 50 : rangeBall;
  const sizeBall = Math.floor(Math.random() * 50 + 1) + "px";
  const newBall = document.createElement("div");
  newBall.classList.add("bolas");
  newBall.style.left = rangeBall + "px";
  newBall.style.width = sizeBall;
  newBall.style.height = sizeBall;
  newBall.style.backgroundColor = `rgb(${colorChange[0]},${colorChange[1]},${colorChange[2]})`;
  body.appendChild(newBall);

  let pos = 0;
  const id = setInterval(frame, 5);

  function frame() {
    if (pos == window.innerHeight) {
      clearInterval(id);
      newBall.remove();
    } else {
      pos++;
      newBall.style.top = pos + "px";
    }
  }
}
