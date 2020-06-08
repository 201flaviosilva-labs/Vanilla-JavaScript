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
