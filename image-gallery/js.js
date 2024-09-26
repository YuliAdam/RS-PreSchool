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
    let num = [];
    let i = 0 ;
    let divArr =[];
    for (i; i < 24;){
        let randomEl = getRandomInt (0, 30);
        if(!num.includes(randomEl)){
            const img = document.createElement("div");
            img.style.background = 'url(' + mass[randomEl] +')';
            img.style.backgroundPosition = 'center';
            addEvent(img, mass[randomEl]);
            divArr.push(img);
            foto.appendChild(img);
            i = i + 1;
            num.push(randomEl);
        }
        addEventCloseFoto(divArr)
    }
    console.log(divArr);
  }

//Random foto from array 
function getRandomInt (min, max){
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min)
}

//SearchForm
searchForm.addEventListener('submit',function(e){
    foto.innerHTML ='';
    let param = input.value;
    setTimeout(()=>{  
      console.log(param);
      if(param === '' || param === undefined || param === null){
        url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TxW-6LZiqfRGOumLYD-4032W0-40vkNOV1vpo7Aw5zM";
        getData();
      }else {
        url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
        getDataBySearchForm();
      }
    },300);
  })

  searchButton.addEventListener('click',function(e){
    foto.innerHTML ='';
    let param = input.value;
    setTimeout(()=>{  
      console.log(param);
      if(param === '' || param === undefined || param === null){
        url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TxW-6LZiqfRGOumLYD-4032W0-40vkNOV1vpo7Aw5zM";
        getData();
      }else {
        url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
        getDataBySearchForm();
      }
    },300);
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
      console.log(el);
      containerFoto.src = url;
      containerFoto.classList.add('show');
      document.documentElement.classList.add('overflow');
      document.querySelector('.blackout').classList.add('on');
    })
}
//Close foto by click out photo
function addEventCloseFoto(arr){
  document.body.addEventListener('click', function(e){
    let isClickOut = true;
    for(let el of arr){
      if(e.composedPath().includes(el)){
        isClickOut = false; 
      }
      console.log(isClickOut);
    }
    if (isClickOut){
      containerFoto.src = "";
      containerFoto.classList.remove('show');
      document.documentElement.classList.remove('overflow');
      document.querySelector('.blackout').classList.remove('on');
    }
  })
}

  


