const squares = document.querySelectorAll('.squares');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let timeId = null;
let currTime = 60;
let star = 0;

const randomSq = () => {
    squares.forEach((sq) => {
        sq.classList.remove('mole');
    })


    let randomPos = squares[Math.floor(Math.random() * 9)];
    randomPos.classList.add('mole');
    //console.log(randomPos);
    hitPosition = randomPos.id;
}


squares.forEach(sq => {
    sq.addEventListener('click', () => {
        if (sq.id == hitPosition) {
            result++;
            score.textContent = result;
            console.log(result);
        }
    })
})

const moveMole = () => {
    timeId = setInterval(randomSq, 1000);
}


const countDown = () => {
    if (star) {
        currTime--;
        timeLeft.textContent = currTime;

        if (currTime == 0) {
            clearInterval(countDownTimerid);
            clearInterval(timeId);
            alert("Game Over your score is " + result);
        }
    }
}


let countDownTimerid = setInterval(countDown, 1000);

const start = () => {
    result = 0;
    hitPosition = null;
    currTime = 60;
    timeId = null;
    score.textContent = 0;
    timeLeft.textContent = 60;
    moveMole();
    if(star==0){
        star++;
    }
}