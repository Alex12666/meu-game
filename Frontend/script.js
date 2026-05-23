const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");
const gameOver = document.getElementById("gameOver");

let playerY = 40;
let velocity = 0;
let gravity = 0.8;
let jumping = false;

let obstacleX = 800;

let score = 0;
let gameRunning = true;

function jump() {

  if (!jumping) {
    velocity = 15;
    jumping = true;
  }

}

document.addEventListener("keydown", (event) => {

  if(event.code === "Space"){
    jump();
  }

});

function updatePlayer() {

  velocity -= gravity;
  playerY += velocity;

  if(playerY <= 40){
    playerY = 40;
    jumping = false;
    velocity = 0;
  }

  player.style.bottom = playerY + "px";
}

function updateObstacle() {

  obstacleX -= 7;

  if(obstacleX < -60){
    obstacleX = 850;

    score++;
    scoreText.innerText = score;
  }

  obstacle.style.left = obstacleX + "px";
}

function collision() {

  const playerLeft = 80;
  const playerRight = playerLeft + 50;

  const obstacleLeft = obstacleX;
  const obstacleRight = obstacleX + 40;

  const playerBottom = playerY;

  if(
    playerRight > obstacleLeft &&
    playerLeft < obstacleRight &&
    playerBottom < 90
  ){
    endGame();
  }

}

function endGame(){

  gameRunning = false;

  gameOver.style.display = "block";
}

function gameLoop(){

  if(!gameRunning) return;

  updatePlayer();
  updateObstacle();
  collision();

  requestAnimationFrame(gameLoop);
}

gameLoop();