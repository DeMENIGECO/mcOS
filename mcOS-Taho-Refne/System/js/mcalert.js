function mcAlert(title, message) {

  let existing = document.getElementById("mcAlert");
  if (existing) existing.remove();

  let box = document.createElement("div");
  box.id = "mcAlert";

  box.style.position = "fixed";
  box.style.top = "60px";
  box.style.right = "20px";
  box.style.width = "300px";
  box.style.padding = "20px";
  box.style.borderRadius = "20px";
  box.style.background = "rgba(255,255,255,0.15)";
  box.style.backdropFilter = "blur(30px)";
  box.style.color = "white";
  box.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
  box.style.zIndex = "20000";
  box.style.opacity = "0";
  box.style.transition = "all 0.3s ease";

  box.innerHTML = `
    <strong style="font-size:16px">${title}</strong>
    <div style="margin-top:8px; font-size:14px">${message}</div>
  `;

  document.body.appendChild(box);

  setTimeout(() => {
    box.style.opacity = "1";
    box.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    box.style.opacity = "0";
    box.style.transform = "translateY(-10px)";
    setTimeout(() => box.remove(), 300);
  }, 4000);
}