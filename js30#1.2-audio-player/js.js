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

function playAudio(i) {
  audio[i].currentTime = 0;
  audio[i].play();
}

function addTreckProperty(i){
  backgroundImg[i].classList.add('show-background-img');
  treckImg[i].classList.add('show-treck-img');
  singer[i].classList.add('show-singer');
  song[i].classList.add('show-song');
}

function pauseAudio(i) {
  audio[i].pause();
}

function removeTreckProperty(i){
  backgroundImg[i].classList.remove('show-background-img');
  treckImg[i].classList.remove('show-treck-img');
  singer[i].classList.remove('show-singer');
  song[i].classList.remove('show-song');
}
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


let isPlay = false;

//Start song
pauseBtn.classList.add('dont-show');
addTreckProperty(0);

let i = 0;

//Play Pause
playPauseBtn.addEventListener('click', function(){
  console.log(i);

  if(isPlay){
    pauseAudio(i);
    isPlay = false;
    pause();
  }else{
    playAudio(i);
    isPlay = true;
    play();
  }
})

//Prev audio
prevBtn.addEventListener('click', function(){
  console.log(i);

  if(pauseBtn.classList.contains('dont-show')){
    play();
  }

  pauseAudio(i);
  removeTreckProperty(i);

  if (i>0){ 
    i = i-1;
  }else{
    i = song.length-1;
  }
  addTreckProperty(i);
  playAudio(i);
  isPlay = true;
  duration(i);
})

//Next audio
nextBtn.addEventListener('click', function(){
  console.log(i);

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
  isPlay = true;
  duration(i);
})