var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
let progress = 0;
let cursorActive = false;
let intervalId;
const cursorRing = document.getElementById('progress-ring');
let cursorX;
let cursorY;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

document.body.onmousemove = updatePosition;

function updatePosition(e) {
  cursorRing.style.setProperty('top', (e.clientY - 52) + 'px');
  cursorRing.style.setProperty('left', (e.clientX - 52) + 'px');
}

function activateCursor() {
  console.log("activate");
  intervalId = window.setInterval(setProgress, 10);
  cursorActive = true;
}

function clearCursor() {
  progress = 0;
  console.log("clear");
  cursorActive = false;
}

function setProgress() {
  cursorRing.style.top = cursorX;
  cursorRing.style.left = cursorY;

  const offset = circumference - progress / 100 * circumference;
  circle.style.strokeDashoffset = offset;
  if (!cursorActive) {
    clearInterval(intervalId);
  }
  if (cursorActive && progress === 100) {
    // alert("click");
    // document.getElementById('music-button').click();
    clearInterval(intervalId);
  }
  progress++;
}

// posx = e.clientX + document.body.scrollLeft
//         + document.documentElement.scrollLeft;
//     posy = e.clientY + document.body.scrollTop
//         + document.documentElement.scrollTop;
