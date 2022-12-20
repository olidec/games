balloon.addEventListener('click',clickedIt);
let score = 0;
let count = 0;

function clickedIt() {
    score++;
    scoreBox.innerHTML = 'your score so far: ' + score;
    balloon.style.height = '1px'
}

function moveIt() {
    balloon.style.height = '80px';
    balloon.style.left = (Math.random()*400 + 400) + 'px';
    balloon.style.top = (Math.random()*300 + 300) + 'px';
    count++
    if (count == 20) {
        alert('Your Time is Up!!!!')
        clearInterval(timer);
    }
}
let timer = setInterval(moveIt,1000);