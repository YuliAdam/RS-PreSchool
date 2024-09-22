const playPauseBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const backgroundImg = document.querySelectorAll('.treck-background-img');
const treckImg = document.querySelectorAll('.treck-img');
const audio = document.querySelectorAll('.treck');
console.log(audio);
const singer = document.querySelectorAll('.singer');
const song = document.querySelectorAll('.song');
let durationAudio = document.querySelector('.max-time'); 
let nowTime = document.querySelector('.start-time');
const nav = document.querySelectorAll('.song-item');

const songThread = document.querySelector('.song-thread');
const threadPosition = document.querySelector('.thread-position');
let box = songThread.getBoundingClientRect();
let xInit = box.left + window.pageXOffset;
let xFinal = box.right + window.pageXOffset; 
let xDuration = xFinal - xInit;

let isPlay = false;
let currentTime = 0;

  function playAudio(i) {
    audio[i].currentTime = currentTime;
    audio[i].play();
    let intervalId = setInterval(function(){
      if(isPlay && audio[i].currentTime !== audio[i].duration){
        currentTime = currentTime + 1;
        console.log(currentTime);
        changeStartTime(currentTime); 
        threadPosition.style.left = xDuration/audio[i].duration *(currentTime) + 'px';
      }else{
        clearInterval(intervalId);
        currentTime = currentTime - 1;
        threadPosition.style.left = xDuration/audio[i].duration *(currentTime) + 'px';
        }
    }, 1000);
  }


function addTreckProperty(i){
  currentTime = 0;
  backgroundImg[i].classList.add('show-background-img');
  treckImg[i].classList.add('show-treck-img');
  singer[i].classList.add('show-singer');
  song[i].classList.add('show-song');
}

function pauseAudio(i) {
  audio[i].pause();
  let intervalId = setInterval(function(){
    if(isPlay && audio[i].currentTime){
      currentTime = currentTime + 1;
      console.log(currentTime);
      changeStartTime(currentTime); 
      threadPosition.style.left = xDuration/audio[i].duration *(currentTime) + 'px';
    }else{
      clearInterval(intervalId);
      }
  } ,1000);
}

function removeTreckProperty(i){
  backgroundImg[i].classList.remove('show-background-img');
  treckImg[i].classList.remove('show-treck-img');
  singer[i].classList.remove('show-singer');
  song[i].classList.remove('show-song');
}

//Change button if play and pause
function pause(){
  pauseBtn.classList.add('dont-show');
  playBtn.classList.remove('dont-show');
  for (let el of treckImg){
    el.classList.remove('play');
  }
}

function play(){
  pauseBtn.classList.remove('dont-show');
  playBtn.classList.add('dont-show');
  for (let el of treckImg){
    el.classList.add('play');
  }
}

function duration(i){
  let sec = Math.floor(audio[i].duration%60);
  if(sec<10) sec = '0' + sec;
  durationAudio.innerHTML = Math.floor(audio[i].duration/60) + ':'+ sec;
}

// Change current time if moove dot position
function changeCurrentTime(i, x) {
  audio[i].currentTime = audio[i].duration/xDuration *(x-xInit);
  currentTime = audio[i].currentTime;
  console.log( audio[i].currentTime + 'dur ' + audio[i].duration);
  audio[i].play();
  threadPosition.style.left = (x - xInit) + 'px';
  changeStartTime(audio[i].currentTime);
  console.log('left' + threadPosition.left);
} 

function changeStartTime(time){
  let sec = Math.floor(time%60);
  if(sec<10) sec = '0' + sec;
  nowTime.innerHTML = Math.floor(time/60) + ':'+ sec;
} 

//Start song
pauseBtn.classList.add('dont-show');
addTreckProperty(0);

let i = 0;

//Play Pause
playPauseBtn.addEventListener('click', function(){
  console.log(i);
  if(isPlay){
    pauseAudio(i);
    setTimeout(()=>{
      isPlay = false;
    },300);
    pause();
  }else{
    playAudio(i);
    setTimeout(()=>{  
      isPlay = true;
    },300);
    play();
  }
})

//Prev audio
prevBtn.addEventListener('click', function(){
  console.log(i);
  if(pauseBtn.classList.contains('dont-show')){
    play();
  }
  threadPosition.style.left = '0px';
  pauseAudio(i);
  removeTreckProperty(i);

  if (i>0){ 
    i = i-1;
  }else{
    i = song.length-1;
  }
  addTreckProperty(i);
  playAudio(i);
  duration(i);
  setTimeout(()=>{  
    isPlay = true;
  },300);
})

//Next audio
nextBtn.addEventListener('click', function(){
  console.log(i);
  threadPosition.style.left = '0px';
  if(pauseBtn.classList.contains('dont-show')){
    play();
  }

  pauseAudio(i);
  removeTreckProperty(i);

  if (i < audio.length-1){ 
    i = i+1;
  }else{
    i = 0;
  }
  addTreckProperty(i);
  playAudio(i);
  setTimeout(()=>{  
    isPlay = true;
  },300);
  duration(i);
})

//Move dot position

songThread.addEventListener('click', function(event){
  console.log(i);

  if(pauseBtn.classList.contains('dont-show')){
    play();
  }               
  console.log(event.clientX);                    
  changeCurrentTime(i, event.clientX);
  isPlay = true;
})

//Burger-menu
document.querySelector('.burger-menu')
.addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.song-navigation')
            .classList.toggle('open');
    nav[i].firstElementChild.classList.toggle('this');
    nav[i].lastElementChild.classList.toggle('this');
})

for(let j =0; j < nav.length; j+=1){
  nav[j].addEventListener('click', function(){
    console.log(i);
    threadPosition.style.left = '0px';
    if(pauseBtn.classList.contains('dont-show')){
      play();
    }
    for(let e = 0; e<audio.length;e+=1){
      pauseAudio(e);
      removeTreckProperty(e);
    }
    addTreckProperty(j);
    playAudio(j);
    i=j;
    setTimeout(()=>{  
      isPlay = true;
    },300);
    duration(j);
  })
} 

//Closing burger menu if touch out

document
.addEventListener('mouseup',function(e){
    var div = document.querySelector('.song-navigation.open');
    var div1 = document.querySelector('.burger-menu.active');
    if (div !== e.target && !div1.contains(e.target)){
        div.classList.remove('open');
        document.querySelector('.burger-menu.active')
        .classList.remove('active');
        nav[i].firstElementChild.classList.remove('this');
        nav[i].lastElementChild.classList.remove('this');
    }
})

