//Burger-menu

document.querySelector('.header-burger-menu')
.addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.header-navigation')
            .classList.toggle('open');
    document.body.classList.toggle('overflow');
    let el = document.querySelectorAll('.blackout')
    for(let e of el){
    e.classList.toggle('on');}
})

//Closing menu if touch out

document
.addEventListener('mouseup',function(e){
    var div = document.querySelector('.header-navigation.open');
    var div1 = document.querySelector('.header-burger-menu.active');
    if (div !== e.target && !div1 .contains(e.target)){
        div.classList.remove('open');
        document.body.classList.toggle('overflow');
        document.querySelector('.header-burger-menu.active')
        .classList.remove('active');
        let el = document.querySelectorAll('.blackout')
        for(let e of el){
            e.classList.remove('on');
        }
    }
})

function getRandomInt (min, max){
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min)
}

let slides = [
    document.querySelector('.pets-card-container').cloneNode(true),
    document.querySelector('.pets-card-container-mind').cloneNode(true),
    document.querySelector('.pets-card-container-last-card').cloneNode(true),
    document.querySelector('.pets-card-container-Sophia').cloneNode(true),
    document.querySelector('.pets-card-container-Timmy').cloneNode(true),
    document.querySelector('.pets-card-container-Charly').cloneNode(true),
    document.querySelector('.pets-card-container-Scarlet').cloneNode(true),
    document.querySelector('.pets-card-container-Freddie').cloneNode(true),
]

window.addEventListener('load',() =>{
    const clientWidth = document.documentElement.clientWidth;
    carouselByWidth(clientWidth);
    console.log ('load');
});

window.addEventListener('resize',() =>{
    const clientWidth = document.documentElement.clientWidth;;
    carouselByWidth(clientWidth);
    console.log ('resize');
});

function carouselByWidth(size){ 
//Width>1280
    if(size >= 1280 ){ 
    //Slide carousel
        console.log('1.'+size);
        let prev = document.querySelectorAll('.button-arrow')[0];
        let next = document.querySelectorAll('.button-arrow')[1];

        let first = [];
        let nexst = [];
        let last = [];

    //First random slides
        while(first.length < 3){
            let n = getRandomInt(0,8);
            if (!first.includes(n)){
                first.push(n);
            }
        }
        while(nexst.length < 3){
            let n = getRandomInt(0,8);
            if (!first.includes(n) && !nexst.includes(n) ){
                nexst.push(n);
            }
        }
        while(last.length < 3){
            let n = getRandomInt(0,8);
            if (!first.includes(n) && !last.includes(n)){
                last.push(n);
            }
        }
        let slidesNowTris =[slides[first[0]].cloneNode(true), slides[first[1]].cloneNode(true),slides[first[2]].cloneNode(true)];
        let slidesNewPrevTris =[slides[last[0]].cloneNode(true), slides[last[1]].cloneNode(true),slides[last[2]].cloneNode(true)];
        let slidesNewNextTris =[slides[nexst[0]].cloneNode(true), slides[nexst[1]].cloneNode(true),slides[nexst[2]].cloneNode(true)];
        
        let carousel =[
            slidesNewPrevTris[0],slidesNewPrevTris[1],slidesNewPrevTris[2],
            slidesNowTris[0],slidesNowTris[1],slidesNowTris[2],
            slidesNewNextTris[0], slidesNewNextTris[1],slidesNewNextTris[2],
        ]

        document.querySelector('.cards').replaceChildren(...carousel);

        document.querySelector('.cards').scrollLeft = 1080;
        
    //Button next
        next.onclick = function(){
            for(let j =0;j<3;j++){
                slidesNewPrevTris[j].classList.add('dont-show-slide');  
            }
            setTimeout(function(){
                for(let j =0;j<3;j++){
                    slidesNewPrevTris[j].remove();   
                }
                },600)

            setTimeout(function(){
                slidesNewPrevTris = slidesNowTris.slice();
                slidesNowTris = slidesNewNextTris.slice();
                slidesNewNextTris.splice(0, slidesNewNextTris.length);
                let num =[];
                while(slidesNewNextTris.length < 3){ 
                    let i=getRandomInt(0,8);
                    if (!slidesNowTris[0].isEqualNode(slides[i])
                    && !slidesNowTris[1].isEqualNode(slides[i])
                && !slidesNowTris[2].isEqualNode(slides[i])
            && !num.includes(i)){        
                        slidesNewNextTris.push(slides[i].cloneNode(true));
                        num.push(i); 
                    }
                }

                for(let j =0;j<3;j++){
                    document.querySelector('.cards').append(slidesNewNextTris[j]);   
                }
            },700)
        } 
    //Button last
        prev.onclick = function(){
            for(let j =0;j<3;j++){
                slidesNewNextTris[j].classList.add('dont-show-slide');  
            }
            setTimeout(function(){
                for(let j =0;j<3;j++){
                    slidesNewNextTris[j].remove();   
                }
            },600)

            setTimeout(function(){
                slidesNewNextTris = slidesNowTris.slice();
                slidesNowTris = slidesNewPrevTris.slice();
                slidesNewPrevTris.splice(0, slidesNewNextTris.length);
                let num = [];
                while(slidesNewPrevTris.length < 3){ 
                    let i=getRandomInt(0,8);
                    if (!slidesNowTris[0].isEqualNode(slides[i])
                        && !slidesNowTris[1].isEqualNode(slides[i])
                    && !slidesNowTris[2].isEqualNode(slides[i])
                && !num.includes(i)){        
                        slidesNewPrevTris.push(slides[i].cloneNode(true));
                        num.push(i);
                    }   
                }
                for(let j =0;j<3;j++){
                    document.querySelector('.cards').prepend(slidesNewPrevTris[j]);   
                }
            },700)
        }
        
    }
//Width>768
    if(size >= 768 && size < 1280){ 
        console.log('2.'+size);
    //Slide carousel
        let prev = document.querySelectorAll('.button-arrow')[0];
        let next = document.querySelectorAll('.button-arrow')[1];

        let first = [];
        let nexst = [];
        let last = [];


    //First random slides
        while(first.length < 2){
            let n = getRandomInt(0,8);
            if (!first.includes(n)){
                first.push(n);
            }
        }
        while(nexst.length < 2){
            let n = getRandomInt(0,8);
            if (!first.includes(n) && !nexst.includes(n) ){
                nexst.push(n);
            }
        }
        while(last.length < 2){
            let n = getRandomInt(0,8);
            if (!first.includes(n) && !last.includes(n)){
                last.push(n);
            }
        }
        let slidesNowTris =[slides[first[0]].cloneNode(true), slides[first[1]].cloneNode(true)];
        let slidesNewPrevTris =[slides[last[0]].cloneNode(true), slides[last[1]].cloneNode(true)];
        let slidesNewNextTris =[slides[nexst[0]].cloneNode(true), slides[nexst[1]].cloneNode(true)];
        
        let carousel =[
            slidesNewPrevTris[0],slidesNewPrevTris[1],
            slidesNowTris[0],slidesNowTris[1],
            slidesNewNextTris[0], slidesNewNextTris[1],
        ]

        document.querySelector('.cards').replaceChildren(...carousel);

        document.querySelector('.cards').scrollLeft = 620;
        
    //Button next
        next.onclick = function(){
            for(let j =0;j<2;j++){
                slidesNewPrevTris[j].classList.add('dont-show-slide');  
            }
            setTimeout(function(){
                for(let j =0;j<2;j++){
                    slidesNewPrevTris[j].remove();   
                }
                },600)

            setTimeout(function(){
                slidesNewPrevTris = slidesNowTris.slice();
                slidesNowTris = slidesNewNextTris.slice();
                slidesNewNextTris.splice(0, slidesNewNextTris.length);
                let num =[];
                while(slidesNewNextTris.length < 2){ 
                    let i=getRandomInt(0,8);
                    if (!slidesNowTris[0].isEqualNode(slides[i])
                    && !slidesNowTris[1].isEqualNode(slides[i])
                    && !num.includes(i)){        
                        slidesNewNextTris.push(slides[i].cloneNode(true));
                        num.push(i); 
                    }
                }

                for(let j =0;j<2;j++){
                    document.querySelector('.cards').append(slidesNewNextTris[j]);   
                }
            },700)
        } 
    //Button last
        prev.onclick = function(){
            for(let j =0;j<2;j++){
                slidesNewNextTris[j].classList.add('dont-show-slide');  
            }
            setTimeout(function(){
                for(let j =0;j<2;j++){
                    slidesNewNextTris[j].remove();   
                }
            },600)

            setTimeout(function(){
                slidesNewNextTris = slidesNowTris.slice();
                slidesNowTris = slidesNewPrevTris.slice();
                slidesNewPrevTris.splice(0, slidesNewNextTris.length);
                let num = [];
                while(slidesNewPrevTris.length < 2){ 
                    let i=getRandomInt(0,8);
                    if (!slidesNowTris[0].isEqualNode(slides[i])
                    && !slidesNowTris[1].isEqualNode(slides[i])
                    && !num.includes(i)){        
                        slidesNewPrevTris.push(slides[i].cloneNode(true));
                        num.push(i);
                    }   
                }
                for(let j =0;j<2;j++){
                    document.querySelector('.cards').prepend(slidesNewPrevTris[j]);   
                }
            },700)
        }
        
    }
//Width>320
    if(size < 768 ){ 
        console.log('3.'+size);
    //Slide carousel
        let prev = document.querySelectorAll('.button-arrow-320')[0];
        let next = document.querySelectorAll('.button-arrow-320')[1];

        let first = [];
        let nexst = [];
        let last = [];
    //First random slides
        first.push(getRandomInt(0,8));
        
        while(nexst.length < 1){
            let n = getRandomInt(0,8);
            if (!first.includes(n)){
                nexst.push(n);
            }
        }
        while(last.length < 1){
            let n = getRandomInt(0,8);
            if (!first.includes(n) && !nexst.includes(n)){
                last.push(n);
            }
        }
        let slidesNowTris =slides[first[0]].cloneNode(true);
        let slidesNewPrevTris =slides[last[0]].cloneNode(true);
        let slidesNewNextTris =slides[nexst[0]].cloneNode(true);
        
        let carousel =[
            slidesNewPrevTris,
            slidesNowTris,
            slidesNewNextTris,
        ]

        document.querySelector('.cards').replaceChildren(...carousel);

        document.querySelector('.cards').scrollLeft = 300;
        
    //Button next
        next.onclick = function(){
            slidesNewPrevTris.classList.add('dont-show-slide');  
            setTimeout(function(){
                    slidesNewPrevTris.remove();   
                },600)

            setTimeout(function(){
                slidesNewPrevTris = slidesNowTris;
                slidesNowTris = slidesNewNextTris;
                slidesNewNextTris = '';
                console.log(slidesNewNextTris);
                console.log(slidesNewPrevTris);
                console.log(slidesNowTris);
                while(slidesNewNextTris === ''){ 
                    let i=getRandomInt(0,8);
                    if (!slidesNowTris.isEqualNode(slides[i])
                    && !slidesNewPrevTris.isEqualNode(slides[i])){        
                        slidesNewNextTris = slides[i].cloneNode(true); 
                    }
                }
                console.log(slidesNewNextTris);
                document.querySelector('.cards').append(slidesNewNextTris); 
            },700)
        } 
    //Button last
        prev.onclick = function(){
            slidesNewNextTris.classList.add('dont-show-slide');  
            setTimeout(function(){
                slidesNewNextTris.remove();   
            },600)

            setTimeout(function(){
                slidesNewNextTris = slidesNowTris;
                slidesNowTris = slidesNewPrevTris;
                slidesNewPrevTris = '';
                while(slidesNewPrevTris === ''){ 
                    let i=getRandomInt(0,8);
                    if (!slidesNowTris.isEqualNode(slides[i])
                    && !slidesNewNextTris.isEqualNode(slides[i])){        
                        slidesNewPrevTris = slides[i].cloneNode(true);
                    }   
                }
                document.querySelector('.cards').prepend(slidesNewPrevTris);   
            },700)
        }
        
    }
}
