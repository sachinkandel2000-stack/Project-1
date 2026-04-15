let startTime = localStorage.getItem("milkStartTime");

if (!startTime) {
  startTime = Date.now();
  localStorage.setItem("milkStartTime", startTime);
}

function updateTimer() {
  const now = Date.now();
  const diff = now - startTime;

  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("status").textContent = "Time since last milk:";
  document.getElementById("timer").textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

function resetTimer() {
  startTime = Date.now();
  localStorage.setItem("Study Time Tracker", startTime);
}

setInterval(updateTimer, 1000);
updateTimer();