const canvas = document.getElementById ('canvas');
const ctx = canvas.getContext('2d');

const circleStyle = {
    radius : 60, // rayon
    color : "blue",
}

function getPosition(el) {
    let xPosition = 0;
    let yPosition = 0;

while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
}
return {
    x : xPosition,
    y : yPosition,
    };
}


const circle = () => {
ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, circleStyle.radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = circleStyle.color;
    ctx.fill()
    requestAnimationFrame(circle);
}

const canvasPos = getPosition(canvas);
let mouseX =0;
let mouseY = 0;

const setMousePosition = (e) => {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
}
canvas.addEventListener('mousemove', setMousePosition, false);




circle();