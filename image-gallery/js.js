let url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TxW-6LZiqfRGOumLYD-4032W0-40vkNOV1vpo7Aw5zM";
const foto = document.querySelector('.foto');
const searchForm = document.getElementById('searchForm');
const input = document.querySelector('.input');

//inizial foto
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    let mass = [];
    for(el of data.results){
        mass.push(el.urls.regular);
    }
    showData(mass);
  }
  getData();

  function showData(mass){
    addEventCloseFoto();
    let num = [];
    let i = 0 ;
    for (i; i < 24;){
        let randomEl = getRandomInt (0, 30);
        if(!num.includes(randomEl)){
            const img = document.createElement("div");
            img.style.background = 'url(' + mass[randomEl] +')';
            img.style.backgroundPosition = 'center';
            addEvent(img, mass[randomEl]);
            foto.appendChild(img);
            i = i + 1;
            num.push(randomEl);
        }
    }
  }

//Random foto from array 
function getRandomInt (min, max){
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min)
}

//SearchForm

function debounce( callback, delay ) {
  let timeout;
  return function() {
      clearTimeout( timeout );
      timeout = setTimeout( callback, delay );
  }
}

function search(e){
  foto.innerHTML ='';
  let param = input.value;
    console.log(param);
    if(param === '' || param === undefined || param === null){
      url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TxW-6LZiqfRGOumLYD-4032W0-40vkNOV1vpo7Aw5zM";
      getData();
    }else {
      url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
      getDataBySearchForm();
    }
}

searchForm.addEventListener('input', debounce( search, 1000 ));

searchButton.addEventListener('click',function(e){
  foto.innerHTML ='';
  let param = input.value;
    console.log(param);
    if(param === '' || param === undefined || param === null){
      url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TxW-6LZiqfRGOumLYD-4032W0-40vkNOV1vpo7Aw5zM";
      getData();
    }else {
      url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
      getDataBySearchForm();
    }
})

input.addEventListener('keyup',function(e){
  if(e.code === 'Enter'){
    foto.innerHTML ='';
    let param = input.value;
    console.log(param);
    if(param === '' || param === undefined || param === null){
      url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TxW-6LZiqfRGOumLYD-4032W0-40vkNOV1vpo7Aw5zM";
      getData();
    }else {
      url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
      getDataBySearchForm();
    }
  }
  
})

async function getDataBySearchForm() {
  const res = await fetch(url);
  const data = await res.json();
  let mass = [];
  for(el of data.photos.photo){
      mass.push(el.url_m);
  }

  showDataBySearchForm(mass);
}
function showDataBySearchForm(mass){
  let num = [];
  let i = 0 ;
  foto.innerHTML ='';
  for (i; i < 24;){
      let randomEl = getRandomInt (0, 30);
      if(!num.includes(randomEl)){
          const img = document.createElement("div");
          console.log(mass[randomEl]);
          img.style.background = 'url(' + mass[randomEl] +')';
          img.style.backgroundPosition = 'center';
          addEvent(img, mass[randomEl]);
          foto.appendChild(img);
          i = i + 1;
          num.push(randomEl);
      }
  }
}

let containerFoto = document.querySelector('.showfoto');

//Open foto by click
function addEvent(el, url){
    el.addEventListener('click', function(e){
      e.stopPropagation();
      console.log('event at url');
      containerFoto.src = url;
      containerFoto.classList.add('show');
      document.documentElement.classList.add('overflow');
      document.querySelector('.blackout').classList.add('on');
      
    })
}
//Close foto by click out photo
function addEventCloseFoto(){
  document.body.addEventListener('click', function(e){
    console.log('click html');
    if(document.querySelector('.blackout').classList.contains('on') &&
  containerFoto.classList.contains('show') 
&& document.documentElement.classList.contains('overflow')){
      console.log('clickOut')
      containerFoto.src = "";
      containerFoto.classList.toggle('show');
      document.documentElement.classList.toggle('overflow');
      document.querySelector('.blackout').classList.toggle('on');
    }
  })
}

  


