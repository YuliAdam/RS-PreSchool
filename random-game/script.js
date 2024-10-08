
const dino = document.querySelector('.dino');
const dinoImg = document.querySelector('.dino-img');
const cactus = document.querySelector('.cactus');
const cactusImg = document.querySelector('.cactus-img');
const money = document.querySelector('.money');
const money1 = document.querySelector('.money1');
const play = document.querySelector('.play-button');
const gamer = document.querySelector('.gamer');
let gamerList = [];
let gamerTimeList = [];
let audio = document.querySelector('.treck');
let gameTime = document.querySelector('.game-time');
let gameOver = document.querySelector('.game-over');
let tableRows = document.querySelector('.table-rows');

//Init game

function playAudio() {
    audio.currentTime = 0;
    audio.play();
  }

function playGame() {
    if(gamer.value === '') gamer.value = 'Anonim gamer';
    console.log(gamer.value);
    gamerList.push(gamer.value);
    document.querySelector('.play').style.display = "none";
    cactus.classList.add('run');
    money.classList.add('run-money');
    money1.classList.add('run-money1');
}

play.addEventListener('click',function(){
    playAudio();
    playGame();
})

//Event jump Dino

function jampDino(e){
    console.log(e.key);
    if(e.key === 'ArrowUp' && document.querySelector('.play').style.display === "none"){
        dino.classList.add('jump');
        setTimeout(function(){
            dino.classList.remove('jump');
        },700)    
    }
}

window.addEventListener('keydown',function(e){
    jampDino(e);
})

//Change game time

let timeMax = 90;

function changeTime(){
    let sec = Math.floor((timeMax - audio.currentTime)%60);
    if(sec<10) sec = '0' + sec;
    let min = Math.floor((timeMax - audio.currentTime)/60);
    gameTime.innerHTML = min + ':'+ sec;
}

// Stop game if cactus

function pauseAudio() {
    audio.pause();
}

function showGameOver(){
    for (let i=0; i<gamerList.length;i++){
        const tr = document.createElement("tr");
        tr.innerHTML = "<td>"+ gamerList[i] +"</td>" + "<td>"+ gamerTimeList[i] +"</td>" ;
        tableRows.appendChild(tr);
    }
    gameOver.classList.add('over');
}

function stopGame() {
    showGameOver();
    cactus.classList.remove('run');
    money.classList.remove('run-money');
    money1.classList.remove('run-money1');

}


let isAlive = setInterval(function(){
    changeTime();
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let dinoRight = parseInt(window.getComputedStyle(dino).getPropertyValue('right')) - parseInt(window.getComputedStyle(dino).getPropertyValue('width'))*0.75;
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue('left')) - parseInt(window.getComputedStyle(dino).getPropertyValue('width'))*0.75;
    let cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if(cactusRight > dinoRight && cactusLeft > dinoLeft 
        && dinoBottom <= parseInt(window.getComputedStyle(cactus).getPropertyValue('height'))*0.25){
        gamerTimeList.push(gameTime.innerHTML);
        pauseAudio();
        stopGame();
    }
},10);







