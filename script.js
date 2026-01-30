function openWindow() {
  document.getElementById("window").classList.remove("hidden");
}

function closeWindow() {
  document.getElementById("window").classList.add("hidden");
}
const menu = document.getElementById("context-menu");

// Right click
document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // browser menu band
  menu.style.top = e.pageY + "px";
  menu.style.left = e.pageX + "px";
  menu.style.display = "block";
});

// Left click pe menu hide
document.addEventListener("click", () => {
  menu.style.display = "none";
});
function createFolder() {
  alert("New Folder option clicked");
}

function refreshDesktop() {
  location.reload();
}

function searchItem() {
  alert("Search option clicked");
}
const startBtn = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("hidden");
});

// bahar click karo to band ho jaye
document.addEventListener("click", (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn) {
    startMenu.classList.add("hidden");
  }
});
