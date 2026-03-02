let spotlightBox;


document.addEventListener("keydown", e => {
  // Mac: e.metaKey è il tasto Command
  // Windows/Linux: e.ctrlKey è Ctrl
  if ((e.ctrlKey || e.metaKey) && e.code === "Space") {
    e.preventDefault();  // evita che la barra spaziatrice faccia scroll
    toggleSpotlight();
  }
});

function toggleSpotlight() {
  if (spotlightBox) {
    spotlightBox.remove();
    spotlightBox = null;
    return;
  }

  spotlightBox = document.createElement("div");
  spotlightBox.id = "spotlightBox";

  spotlightBox.innerHTML = `
    <input id="spotInput" placeholder="Spotlight Search">
    <div id="results"></div>
  `;

  document.body.appendChild(spotlightBox);

  // forza in primo piano
  spotlightBox.style.position = "fixed";
  spotlightBox.style.top = "20%";
  spotlightBox.style.left = "50%";
  spotlightBox.style.transform = "translateX(-50%)";
  spotlightBox.style.width = "550px";
  spotlightBox.style.borderRadius = "25px";
  spotlightBox.style.backdropFilter = "blur(60px)";
  spotlightBox.style.background = "rgba(255,255,255,0.15)";
  spotlightBox.style.boxShadow = "0 50px 120px rgba(0,0,0,0.6)";
  spotlightBox.style.padding = "20px";
  spotlightBox.style.color = "white";
  spotlightBox.style.zIndex = 10000; // PRIMO PIANO
  spotlightBox.style.display = "flex";
  spotlightBox.style.flexDirection = "column";
  spotlightBox.style.gap = "10px";

  const spotInput = document.getElementById("spotInput");
  const results = document.getElementById("results");
  spotInput.focus();

  spotInput.oninput = function () {
    results.innerHTML = "";
    const val = spotInput.value.toLowerCase();
    if (!val) return;

    for (let a in apps) {
      if (a.includes(val)) {
        const r = document.createElement("div");
        r.className = "spotResult";
        r.style.padding = "12px";
        r.style.borderRadius = "12px";
        r.style.cursor = "pointer";
        r.onmouseover = () => r.style.background = "rgba(255,255,255,0.25)";
        r.onmouseleave = () => r.style.background = "transparent";
        r.innerHTML = apps[a] + " " + a;
        r.onclick = () => {
          openApp(a + ".html");
          spotlightBox.remove();
          spotlightBox = null;
        };
        results.appendChild(r);
      }
    }
  }
}