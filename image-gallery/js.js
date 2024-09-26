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
    console.log(mass);

    showData(mass);
  }
  getData();

  function showData(mass){
    let num = [];
    let i = 0 ;
    for (i; i < 24;){
        let randomEl = getRandomInt (0, 30);
        if(!num.includes(randomEl)){
            console.log(randomEl);
            const img = document.createElement("div");
            console.log(mass[randomEl]);
            img.style.background = 'url(' + mass[randomEl] +')';
            img.style.backgroundPosition = 'center';
            console.log(img);
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
searchForm.addEventListener('submit',function(e){
    foto.innerHTML ='';
    let param = input.value;
    url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
    console.log(url);
    getDataBySearchForm();
  })

  searchButton.addEventListener('click',function(e){
    foto.innerHTML ='';
    let param = input.value;
    url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=" + param + "&tag_mode=all&extras=url_m&format=json&nojsoncallback=1";
    console.log(url);
    getDataBySearchForm();
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
            console.log(randomEl);
            const img = document.createElement("div");
            console.log(mass[randomEl]);
            img.style.background = 'url(' + mass[randomEl] +')';
            img.style.backgroundPosition = 'center';
            console.log(img);
            foto.appendChild(img);
            i = i + 1;
            num.push(randomEl);
        }

    }
  }

