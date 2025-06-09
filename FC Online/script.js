const ball = document.getElementById("ball");
const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

let s1 = 0, s2 = 0;
let speed1 = 5, speed2 = 5;

const step = 10;

document.addEventListener("keydown", (e) => {
  let p1Top = parseInt(p1.style.top);
  let p1Left = parseInt(p1.style.left);
  let p2Top = parseInt(p2.style.top);
  let p2Left = parseInt(p2.style.left);
  let ballTop = parseInt(ball.style.top);
  let ballLeft = parseInt(ball.style.left);

  // --- PLAYER 1 CONTROLS (WASD + S/D/W/E) ---
  if (e.key === "w") p1.style.top = `${p1Top - speed1}px`;
  if (e.key === "s") p1.style.top = `${p1Top + speed1}px`;
  if (e.key === "a") p1.style.left = `${p1Left - speed1}px`;
  if (e.key === "d") p1.style.left = `${p1Left + speed1}px`;

  if (e.key === "e") speed1 = 15;
  else speed1 = 5;

  if (e.key === "S") passBall(p1Left, p1Top, 15);
  if (e.key === "D") shootBall(p1Left, p1Top, 30);
  if (e.key === "W") shootBall(p1Left, p1Top, 10); // chọc khe

  // --- PLAYER 2 CONTROLS (Arrow keys) ---
  if (e.key === "ArrowUp") p2.style.top = `${p2Top - speed2}px`;
  if (e.key === "ArrowDown") p2.style.top = `${p2Top + speed2}px`;
  if (e.key === "ArrowLeft") p2.style.left = `${p2Left - speed2}px`;
  if (e.key === "ArrowRight") p2.style.left = `${p2Left + speed2}px`;

  // collision ball
  if (isNear(p1Left, p1Top, ballLeft, ballTop)) {
    ball.style.left = `${p1Left + 30}px`;
    ball.style.top = `${p1Top}px`;
  }

  if (isNear(p2Left, p2Top, ballLeft, ballTop)) {
    ball.style.left = `${p2Left - 30}px`;
    ball.style.top = `${p2Top}px`;
  }

  checkGoal();
});

function isNear(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) < 40 && Math.abs(y1 - y2) < 40;
}

function passBall(x, y, power) {
  ball.style.left = `${x + power}px`;
  ball.style.top = `${y}px`;
}

function shootBall(x, y, power) {
  ball.style.left = `${x + power}px`;
  ball.style.top = `${y}px`;
}

function checkGoal() {
  let bLeft = parseInt(ball.style.left);
  let bTop = parseInt(ball.style.top);
  if (bLeft <= 0 && bTop >= 200 && bTop <= 300) {
    s2++;
    score2.textContent = s2;
    resetPositions();
  }
  if (bLeft >= 875 && bTop >= 200 && bTop <= 300) {
    s1++;
    score1.textContent = s1;
    resetPositions();
  }
}

function resetPositions() {
  ball.style.left = "440px";
  ball.style.top = "240px";
  p1.style.left = "100px";
  p1.style.top = "220px";
  p2.style.left = "760px";
  p2.style.top = "220px";
}
