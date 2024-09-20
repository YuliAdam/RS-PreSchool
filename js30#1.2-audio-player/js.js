const playPauseBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const backgroundImg = document.querySelectorAll('.treck-background-img');
const treckImg = document.querySelectorAll('.treck-img');
const audio = document.querySelectorAll('.treck');
console.log(audio);
const singer = document.querySelectorAll('.singer');
const song = document.querySelectorAll('.song');

function playAudio(audio) {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio(audio) {
  audio.pause();
}

backgroundImg[0].classList.add('show-background-img');
treckImg[0].classList.add('show-treck-img');
singer[0].classList.add('show-singer');
song[0].classList.add('show-song');

playPauseBtn.addEventListener('click', function(){
  if(){
    
  }else{

  }
})