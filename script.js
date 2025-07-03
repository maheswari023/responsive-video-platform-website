function getPoints() {
  return parseInt(localStorage.getItem("userPoints") || "0");
}

function setPoints(points) {
  localStorage.setItem("userPoints", points);
  document.getElementById("userPoints").innerText = points;
  document.getElementById("userPointsDropdown").innerText = points;
}

function addPoints(videoId) {
  const watchedKey = "watched_" + videoId;
  if (!localStorage.getItem(watchedKey)) {
    let points = getPoints();
    points += 5;
    setPoints(points);
    localStorage.setItem(watchedKey, true);
    alert("You earned 5 points! Total points: " + points);
}
else {
alert("✅ You already earned points for this video!");
  }
}

function toggleProfile() {
  const profile = document.getElementById("userProfile");
  profile.style.display = (profile.style.display === "block") ? "none" : "block";
}

window.onload = () => {
  
  localStorage.setItem("userPoints", "0");


  for (let i = 1; i <= 5; i++) {
    localStorage.removeItem("watched_Video-" + i);
  }

  setPoints(0); // Show zero points always at beginning
};

