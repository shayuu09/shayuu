let playing = false;
let playingi;
let sel;
let file = document.getElementsByClassName("file");
let cds = document.getElementsByClassName("cd");

function playMusic (n) {
  sel = n - 1;
  if (playing) {
    if (sel === playingi) {
      file[sel].pause();
      playing = false;
      playingi = null;
    } else {
      file[playingi].pause();
      file[sel].play();
      updateAnim(playingi + 1);
      playingi = sel;
    }
  } else {
    file[sel].play();
    playing = true;
    playingi = sel;
  }
}

function updateAnim (n) {
  if (sel === playingi) {
    cds[n - 1].classList.add("playing");
  } else {
    cds[n - 1].classList.remove("playing");
  }
}