(function () {
  "use strict";

  var audio = document.createElement("audio");
  audio.id = "background-music";
  audio.src = "/music_background.mp3";
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = 0.35;
  audio.setAttribute("autoplay", "autoplay");
  audio.style.display = "none";
  document.body.appendChild(audio);

  function startMusic() {
    try {
      var result = audio.play();
      if (result && typeof result.catch === "function") {
        result.catch(function () {});
      }
    } catch (error) {}
  }

  // Autoplay works on some PS4 browser builds. Controller/touch/click input
  // provides a fallback for builds that require a user gesture.
  startMusic();
  document.addEventListener("keydown", startMusic, false);
  document.addEventListener("click", startMusic, false);
  document.addEventListener("touchstart", startMusic, false);
})();
