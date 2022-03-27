const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
const radiusBall = 15

const paddleHeight = 20;
const paddleWidth = 95;
let paddleX = (canvas.width-paddleWidth)/2;
let paddleY = canvas.height-paddleHeight-10;

let rightMove = false;
let leftMove = false;

let dx = 2;
let dy = -2;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightMove = true;
    }
    else if(e.keyCode == 37) {
        leftMove = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightMove = false;
    }
    else if(e.keyCode == 37) {
        leftMove = false;
    }
}


const ball = () => {
    ctx.beginPath();
    ctx.arc(x, y, radiusBall, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
const paddle = () => {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "salmon";
    ctx.fill();
    ctx.closePath();
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    paddle();
    x += dx;
    y += dy;
    if(x + dx > canvas.width || x + dx < radiusBall) {
        dx = -dx;
    }
    
    if(y + dy > canvas.height || y + dy < radiusBall) {
        dy = -dy;
    }
    if(rightMove && paddleX < canvas.width-paddleWidth) {
        paddleX += 5;
    }
    else if(leftMove && paddleX > 0) {
        paddleX -= 5;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 20);