const DesignMode = document.getElementById("DesignModeInput");
let designMode = false;

DesignModeInput.addEventListener("change", () => {
	designMode = !designMode;
	document.designMode = designMode ? "on" : "off";
});
