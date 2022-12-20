let x = 100, y = 100, speedX = 2, speedY = 2, batX = 0;

function moveBat(event) {
    batX = event.clientX;
    bat.style.left = batX + 'px';
} 

function moveBall() {
    x = x + speedX;
    y = y + speedY;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    if (x > 530) {speedX = -2;}
    if (x < 0) {speedX = 2;}
    if (y < 0) {speedY = 2;}
    if (y > 372 && (Math.abs(batX-x) < 60)) {speedY = -2;}
    if (y > 450) {
        alert('game over!');
        clearInterval(timer);
    }

}

let timer = setInterval(moveBall,10);