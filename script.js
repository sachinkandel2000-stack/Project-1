<script>
  let player;
  const VIDEO_ID = "CUdGsug9_iW2Wi9t"; // change this

  let studySeconds = 0;
  let studyInterval = null;

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0")
    );
  }

  function updateStudyDisplay() {
    document.getElementById("studyTimer").textContent = formatTime(studySeconds);
  }

  document.getElementById("startStudy").addEventListener("click", () => {
    if (!studyInterval) {
      studyInterval = setInterval(() => {
        studySeconds++;
        updateStudyDisplay();
      }, 1000);
    }
  });

  document.getElementById("pauseStudy").addEventListener("click", () => {
    clearInterval(studyInterval);
    studyInterval = null;
  });

  document.getElementById("resetStudy").addEventListener("click", () => {
    clearInterval(studyInterval);
    studyInterval = null;
    studySeconds = 0;
    updateStudyDisplay();
  });

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "1",
      width: "1",
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0
      },
      events: {
        onReady: onPlayerReady
      }
    });
  }

  function onPlayerReady() {
    player.setVolume(50);
    const data = player.getVideoData();
    document.getElementById("songTitle").textContent = data.title || "Unknown track";
  }

  document.getElementById("playBtn").addEventListener("click", () => {
    if (player) player.playVideo();
  });

  document.getElementById("pauseBtn").addEventListener("click", () => {
    if (player) player.pauseVideo();
  });

  document.getElementById("volumeSlider").addEventListener("input", (e) => {
    const volume = Number(e.target.value);
    document.getElementById("volumeValue").textContent = volume;
    if (player) player.setVolume(volume);
  });

  updateStudyDisplay();
</script>
<script src="https://www.youtube.com/iframe_api"></script>
