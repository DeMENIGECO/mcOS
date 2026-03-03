let launchboard = null;

document.addEventListener("keydown", e => {
  if (e.key === "F4") {
    toggleLaunchboard();
  }
});

function toggleLaunchboard() {

  if (launchboard) {
    closeLaunchboard();
    return;
  }

  launchboard = document.createElement("div");
  launchboard.id = "launchboard";

  launchboard.style.position = "fixed";
  launchboard.style.top = "0";
  launchboard.style.left = "0";
  launchboard.style.width = "100vw";
  launchboard.style.height = "100vh";
  launchboard.style.background = "rgba(0,0,0,0.5)";
  launchboard.style.backdropFilter = "blur(40px)";
  launchboard.style.display = "grid";
  launchboard.style.gridTemplateColumns = "repeat(auto-fill, 120px)";
  launchboard.style.justifyContent = "center";
  launchboard.style.alignContent = "center";
  launchboard.style.gap = "40px";
  launchboard.style.zIndex = "9999";

  // animazione iniziale
  launchboard.style.opacity = "0";
  launchboard.style.transform = "scale(1.1)";
  launchboard.style.transition = "all 0.3s ease";

  for (let a in apps) {
    let icon = document.createElement("div");

    icon.style.textAlign = "center";
    icon.style.cursor = "pointer";
    icon.style.color = "white";
    icon.style.transition = "transform 0.2s";

    icon.innerHTML = `
      <div style="font-size:40px">${apps[a]}</div>
      <div>${a}</div>
    `;

    icon.onmouseover = () => icon.style.transform = "scale(1.1)";
    icon.onmouseleave = () => icon.style.transform = "scale(1)";

    icon.onclick = () => {
      openApp(a + ".html");
      closeLaunchboard(); // 🔥 si chiude da solo
    };

    launchboard.appendChild(icon);
  }

  launchboard.onclick = e => {
    if (e.target.id === "launchboard") {
      closeLaunchboard();
    }
  };

  document.body.appendChild(launchboard);

  // trigger animazione apertura
  setTimeout(() => {
    launchboard.style.opacity = "1";
    launchboard.style.transform = "scale(1)";
  }, 10);
}

function closeLaunchboard() {
  if (!launchboard) return;

  launchboard.style.opacity = "0";
  launchboard.style.transform = "scale(1.1)";

  setTimeout(() => {
    launchboard.remove();
    launchboard = null;
  }, 300);
}