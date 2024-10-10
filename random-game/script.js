
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
const audio = document.querySelector('.treck');
const songMoney = document.querySelector('.song-money');
let gameTime = document.querySelector('.game-time');
const gameOver = document.querySelector('.game-over');
let tableRows = document.querySelector('.table-rows');
const playAgain = document.querySelector('.play-again');
const level = document.querySelector('.level').children;
const speedCactus = ['4s', '3s', '2s'];
const speedJump = ['0.9s', '0.7s', '0.5s'];
let timeMax = 10;
const volumeOn = document.querySelector('.volumeOn');
const volumeOff = document.querySelector('.volumeOff');

//Init game

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

function playGame() {
    timeMax = 10;
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

function jampDinoPhone(){
    if(document.querySelector('.play').style.display === "none"){
        dino.classList.add('jump');
        setTimeout(function(){
            dino.classList.remove('jump');
        },700) 
    }
}

if(window.screen.availWidth>768){
    window.addEventListener('keydown',function(e){
        jampDino(e);
    })
}else{
    window.addEventListener('click',function(e){
        jampDinoPhone();
    })
}   


//Change game time

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

    //Show table


function showGameOver(){
    tableRows.innerHTML='';
    if(gamerList.length > 10) gamerList.splice(0,1);
    if(gamerTimeList.length > 10) gamerTimeList.splice(0,1);
    for (let i=gamerList.length; i > 0; i--){
        const tr = document.createElement("tr");
        tr.innerHTML = "<td>"+ gamerList[i-1] +"</td>" + "<td>"+ gamerTimeList[i-1] +"</td>" ;
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

function convertCurrentTime(time){
    let sec = Math.floor(time%60);
    if(sec<10) sec = '0' + sec;
    return Math.floor(time/60) + ':'+ sec;
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
        gamerTimeList.push(convertCurrentTime(audio.currentTime));
        pauseAudio();
        stopGame();
    }
    if(audio.currentTime > timeMax){
        pauseAudio();
        gamerTimeList.push(convertCurrentTime(audio.currentTime));
        audio.currentTime=0;
        stopGame();
        cactus.classList.remove('run');
        money.classList.remove('run-money');
        money1.classList.remove('run-money1');
    }
},10);

//Game again

playAgain.addEventListener('click',function(){
    gameOver.classList.remove('over');
    document.querySelector('.play').style.display = "flex";
    
})

//Change level
level[1].classList.add('level-activ');
for(let i =0; i< level.length;i++){
    level[i].addEventListener('click',function(){
        for(let el of level) el.classList.remove('level-activ');
        cactus.style['animation-duration'] = speedCactus[i];
        dino.style['animation-duration'] = speedJump[i];
        level[i].classList.add('level-activ');
    })
}

//Change volume
volumeOn.classList.add('onOffVolume');

volumeOn.addEventListener('click',function(){
    audio.volume = 0.0;
    volumeOn.classList.remove('onOffVolume');
    volumeOff.classList.add('onOffVolume');
})

volumeOff.addEventListener('click',function(){
    audio.volume = 1.0;
    volumeOff.classList.remove('onOffVolume');
    volumeOn.classList.add('onOffVolume');
})

// Take money

function playAudioMoney() {
    songMoney.currentTime = 0;
    songMoney.play();
}

let takeMoney = setInterval(function(){
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let dinoRight = parseInt(window.getComputedStyle(dino).getPropertyValue('right')) - parseInt(window.getComputedStyle(dino).getPropertyValue('width'))*0.5;
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue('left')) - parseInt(window.getComputedStyle(dino).getPropertyValue('width'))*0.5;
    let moneyRight = parseInt(window.getComputedStyle(money).getPropertyValue('right'));
    let moneyLeft = parseInt(window.getComputedStyle(money).getPropertyValue('left'));
    if(moneyRight > dinoRight && moneyLeft > dinoLeft 
        && dinoBottom >= parseInt(window.getComputedStyle(money).getPropertyValue('bottom'))*0.25){
        playAudioMoney();
        money.classList.add('take-money');
        timeMax = timeMax + 5;
        setTimeout(function(){
            money.classList.remove('take-money');
        },1000)    
    }
    let money1Right = parseInt(window.getComputedStyle(money1).getPropertyValue('right'));
    let money1Left = parseInt(window.getComputedStyle(money1).getPropertyValue('left'));
    if(money1Right > dinoRight && money1Left > dinoLeft 
        && dinoBottom >= parseInt(window.getComputedStyle(money1).getPropertyValue('bottom'))*0.25){
        playAudioMoney();
        money1.classList.add('take-money');
        timeMax = timeMax + 5;
        setTimeout(function(){
            money1.classList.remove('take-money');
        },1000)    
    }
    if(audio.currentTime > timeMax){
        pauseAudio();
        gamerTimeList.push(convertCurrentTime(audio.currentTime));
        audio.currentTime=0;
        stopGame();
        cactus.classList.remove('run');
        money.classList.remove('run-money');
        money1.classList.remove('run-money1');
    }
},10);

// For phone




