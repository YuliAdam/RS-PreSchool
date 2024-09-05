setTimeout(function(){ window.addEventListener('resize',() =>{
    const clientWidth = document.documentElement.clientWidth;;
    carouselByWidth(clientWidth);
});
},1000)

window.addEventListener('load',() =>{
    const clientWidth = document.documentElement.clientWidth;
    carouselByWidth(clientWidth);
});



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
    document.querySelector('.pets-card-container-Katrine').cloneNode(true),
    document.querySelector('.pets-card-container-Jennifer').cloneNode(true),
    document.querySelector('.pets-card-container-Woody').cloneNode(true),
    document.querySelector('.pets-card-container-Sophia').cloneNode(true),
    document.querySelector('.pets-card-container-Timmy').cloneNode(true),
    document.querySelector('.pets-card-container-Charly').cloneNode(true),
    document.querySelector('.pets-card-container-Scarlet').cloneNode(true),
    document.querySelector('.pets-card-container-Freddie').cloneNode(true),
]


function shuffle (arr){
    for(let i = arr.length-1; i > 0 ;i-- ){ 
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]]=[arr[j], arr[i]];
    }
    return arr;
}
let buttonFirst = document.querySelector('.button-first');
let buttonLast = document.querySelector('.button-last');
let buttonNow = document.querySelector('.button-now');
let buttonNext = document.querySelector('.button-next');
let buttonEnd = document.querySelector('.button-end');
let sliderContainer = document.querySelector('.pets-slider-container');
buttonLast.classList.add('pages-end');
buttonFirst.classList.add('pages-end');


let init1Arr = [4,5,6,7,];
let init2Arr = [0,1,2,3,];
let cardArray =[];

for(let i= 0; i<6;i++){
    cardArray.push(shuffle(init1Arr).slice());
    cardArray.push(shuffle(init2Arr).slice());
}
cardArray = cardArray.flat();

function sliceArray(arr,size){
    let result=[];
    for(let i =0; i<arr.length; i+=size){
        result.push(arr.slice(i,i+size));
    }
    return result;
}
let pagesArray768 = sliceArray(cardArray,6);
let pagesArray1280 = sliceArray(cardArray,8);
let pagesArray320 = sliceArray(cardArray,3);

console.log(pagesArray1280);
console.log(pagesArray768);
console.log(pagesArray320);

function carouselByWidth(size){ 
//Width 320
    if( size < 768 && size >= 320){
    setTimeout(function(){
        //First page
            let numClick320 = 1;
            setTimeout(function(){
                while(sliderContainer.firstChild){
                    sliderContainer.removeChild(sliderContainer.firstChild);
                }
            },300)
            setTimeout(function(){ buttonNow.textContent = numClick320; },700); 
            setTimeout(function(){
                for(let i = 0; i< 3; i++){
                    sliderContainer.append(slides[pagesArray320[0][i]]); 
                }   
            },600)
            buttonLast.classList.add('pages-end');
            buttonFirst.classList.add('pages-end');
            buttonNext.classList.remove('pages-end'); 
            buttonEnd.classList.remove('pages-end');
        
        //Click next
            buttonNext.addEventListener('click',function(e){
                //for(let i = 0; i<document.querySelector('.pets-slider-container').childElementCount;i++){
                //    document.querySelector('.pets-slider-container').childNodes[i].classList.add('dont-show-slide');  
                // }
            // Numeration
                numClick320 = numClick320+1;
                buttonLast.classList.remove('pages-end'); 
                buttonFirst.classList.remove('pages-end');
                if(numClick320<=16) { 
                    setTimeout(function(){
                        buttonNow.textContent = numClick320;
                    },700)
                }
    
                if(numClick320 < 16){ 
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },800)
    
                    setTimeout(function(){
                        for(let i = 0; i< 3; i++){
                            sliderContainer.append(slides[pagesArray320[numClick320-1][i]]); 
                        }   
                    },900)
                }else if(numClick320 === 16){
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },800)
    
                    setTimeout(function(){
                        for(let i = 0; i< 3; i++){
                            sliderContainer.append(slides[pagesArray320[15][i]]); 
                        }   
                    },900)
                    buttonNext.classList.add('pages-end');
                    buttonEnd.classList.add('pages-end');
                }else{
                    buttonNext.classList.add('pages-end');
                    buttonEnd.classList.add('pages-end');
                    numClick320 = 16;
                }
                console.log(numClick320);
                });
        //Page end
            buttonEnd.addEventListener('click',function(e){
                buttonLast.classList.remove('pages-end'); 
                buttonFirst.classList.remove('pages-end');
                    if(numClick320 < 16){
                        setTimeout(function(){
                            while(sliderContainer.firstChild){
                                sliderContainer.removeChild(sliderContainer.firstChild);
                            }
                        },800)
    
                        setTimeout(function(){
                            for(let i = 0; i< 3; i++){
                                sliderContainer.append(slides[pagesArray320[15][i]]); 
                            }   
                        },900)
                        buttonNext.classList.add('pages-end');
                        buttonEnd.classList.add('pages-end');
                    }
                    numClick320 = 16;
                    setTimeout(function(){ buttonNow.textContent = 16; },700);
    
            });
        //Page Last
            buttonLast.addEventListener('click',function(e){
                //for(let i = 0; i<document.querySelector('.pets-slider-container').childElementCount;i++){
                //    document.querySelector('.pets-slider-container').childNodes[i].classList.add('dont-show-slide');  
                // }
                buttonNext.classList.remove('pages-end'); 
                buttonEnd.classList.remove('pages-end');
            // Numeration
                numClick320 = numClick320-1;
                if(numClick320 <= 16 && numClick320 >= 1) {
                    setTimeout(function(){
                        buttonNow.textContent = numClick320;
                    },700)
                }
    
                if(numClick320 > 1){ 
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },800)
    
                    setTimeout(function(){
                        for(let i = 0; i< 3; i++){
                            sliderContainer.append(slides[pagesArray320[numClick320-1][i]]); 
                        }   
                    },900)
                }else if(numClick320 === 1){
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },800)
    
                    setTimeout(function(){
                        for(let i = 0; i< 3; i++){
                            sliderContainer.append(slides[pagesArray320[0][i]]); 
                        }   
                    },900)
                    buttonLast.classList.add('pages-end');
                    buttonFirst.classList.add('pages-end');
                }else{
                    buttonLast.classList.add('pages-end');
                    buttonFirst.classList.add('pages-end');
                    numClick320 = 1;
                }
                console.log(numClick320);
                });
        //Page First
            buttonFirst.addEventListener('click',function(e){
                buttonNext.classList.remove('pages-end'); 
                buttonEnd.classList.remove('pages-end');
                    if(numClick320 > 1){
                        setTimeout(function(){
                            while(sliderContainer.firstChild){
                                sliderContainer.removeChild(sliderContainer.firstChild);
                            }
                        },800)
    
                        setTimeout(function(){
                            for(let i = 0; i< 3; i++){
                                sliderContainer.append(slides[pagesArray320[0][i]]); 
                            }   
                        },900)
                        buttonLast.classList.add('pages-end');
                        buttonFirst.classList.add('pages-end');
                    }
                    numClick320 = 1;
                    setTimeout(function(){ buttonNow.textContent = 1; },700);
    
            });
        },1200)     
        }    
//Width>768
    if( size < 1280 && size >= 768){
    setTimeout(function(){
    //First page
        let numClick768 = 1;
        setTimeout(function(){
            while(sliderContainer.firstChild){
                sliderContainer.removeChild(sliderContainer.firstChild);
            }
        },300)
        setTimeout(function(){ buttonNow.textContent = numClick768; },700); 
        setTimeout(function(){
            for(let i = 0; i< 6; i++){
                sliderContainer.append(slides[pagesArray768[0][i]]); 
            }   
        },600)
        buttonLast.classList.add('pages-end');
        buttonFirst.classList.add('pages-end');
        buttonNext.classList.remove('pages-end'); 
        buttonEnd.classList.remove('pages-end');
    
    //Click next
        buttonNext.addEventListener('click',function(e){
            //for(let i = 0; i<document.querySelector('.pets-slider-container').childElementCount;i++){
            //    document.querySelector('.pets-slider-container').childNodes[i].classList.add('dont-show-slide');  
            // }
        // Numeration
            numClick768 = numClick768+1;
            buttonLast.classList.remove('pages-end'); 
            buttonFirst.classList.remove('pages-end');
            if(numClick768<=8) { 
                setTimeout(function(){
                    buttonNow.textContent = numClick768;
                },700)
            }

            if(numClick768 < 8){ 
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },800)

                setTimeout(function(){
                    for(let i = 0; i< 6; i++){
                        sliderContainer.append(slides[pagesArray768[numClick768-1][i]]); 
                    }   
                },900)
            }else if(numClick768 === 8){
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },800)

                setTimeout(function(){
                    for(let i = 0; i< 6; i++){
                        sliderContainer.append(slides[pagesArray768[7][i]]); 
                    }   
                },900)
                buttonNext.classList.add('pages-end');
                buttonEnd.classList.add('pages-end');
            }else{
                buttonNext.classList.add('pages-end');
                buttonEnd.classList.add('pages-end');
                numClick768 = 8;
            }
            console.log(numClick768);
            });
    //Page end
        buttonEnd.addEventListener('click',function(e){
            buttonLast.classList.remove('pages-end'); 
            buttonFirst.classList.remove('pages-end');
                if(numClick768 < 8){
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },800)

                    setTimeout(function(){
                        for(let i = 0; i< 6; i++){
                            sliderContainer.append(slides[pagesArray768[7][i]]); 
                        }   
                    },900)
                    buttonNext.classList.add('pages-end');
                    buttonEnd.classList.add('pages-end');
                }
                numClick768 = 8;
                setTimeout(function(){ buttonNow.textContent = 8; },700);

        });
    //Page Last
        buttonLast.addEventListener('click',function(e){
            //for(let i = 0; i<document.querySelector('.pets-slider-container').childElementCount;i++){
            //    document.querySelector('.pets-slider-container').childNodes[i].classList.add('dont-show-slide');  
            // }
            buttonNext.classList.remove('pages-end'); 
            buttonEnd.classList.remove('pages-end');
        // Numeration
            numClick768 = numClick768-1;
            if(numClick768 <= 8 && numClick768 >= 1) {
                setTimeout(function(){
                    buttonNow.textContent = numClick768;
                },700)
            }

            if(numClick768 > 1){ 
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },800)

                setTimeout(function(){
                    for(let i = 0; i< 6; i++){
                        sliderContainer.append(slides[pagesArray768[numClick768-1][i]]); 
                    }   
                },900)
            }else if(numClick768 === 1){
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },800)

                setTimeout(function(){
                    for(let i = 0; i< 6; i++){
                        sliderContainer.append(slides[pagesArray768[0][i]]); 
                    }   
                },900)
                buttonLast.classList.add('pages-end');
                buttonFirst.classList.add('pages-end');
            }else{
                buttonLast.classList.add('pages-end');
                buttonFirst.classList.add('pages-end');
                numClick768 = 1;
            }
            console.log(numClick768);
            });
    //Page First
        buttonFirst.addEventListener('click',function(e){
            buttonNext.classList.remove('pages-end'); 
            buttonEnd.classList.remove('pages-end');
                if(numClick768 > 1){
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },800)

                    setTimeout(function(){
                        for(let i = 0; i< 6; i++){
                            sliderContainer.append(slides[pagesArray768[0][i]]); 
                        }   
                    },900)
                    buttonLast.classList.add('pages-end');
                    buttonFirst.classList.add('pages-end');
                }
                numClick768 = 1;
                setTimeout(function(){ buttonNow.textContent = 1; },700);

            });
    },1100)     
    }     
//Width>1280
    if(size >= 1280 ){
    setTimeout(function(){
    //First page    
        let numClick1280 = 1; 
        setTimeout(function(){ buttonNow.textContent = numClick1280; },700);
        
        while(sliderContainer.firstChild){
            sliderContainer.removeChild(sliderContainer.firstChild);
        }
        setTimeout(function(){
            for(let i = 0; i< 8; i++){
                sliderContainer.append(slides[pagesArray1280[0][i]]); 
            }   
        },800)
        buttonLast.classList.add('pages-end');
        buttonFirst.classList.add('pages-end');
        buttonNext.classList.remove('pages-end'); 
        buttonEnd.classList.remove('pages-end');
        //Click next
        buttonNext.addEventListener('click',function(e){
            //for(let i = 0; i<document.querySelector('.pets-slider-container').childElementCount;i++){
            //    document.querySelector('.pets-slider-container').childNodes[i].classList.add('dont-show-slide');  
            // }
        // Numeration
            numClick1280 = numClick1280+1;
            buttonLast.classList.remove('pages-end'); 
            buttonFirst.classList.remove('pages-end');
            if(numClick1280<=6) { 
                setTimeout(function(){
                    buttonNow.textContent = numClick1280;
                },700)
            }

            if(numClick1280 < 6){ 
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },600)

                setTimeout(function(){
                    for(let i = 0; i< 8; i++){
                        sliderContainer.append(slides[pagesArray1280[numClick1280-1][i]]); 
                    }   
                },800)
            }else if(numClick1280 === 6){
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },600)

                setTimeout(function(){
                    for(let i = 0; i< 8; i++){
                        sliderContainer.append(slides[pagesArray1280[5][i]]); 
                    }   
                },800)
                buttonNext.classList.add('pages-end');
                buttonEnd.classList.add('pages-end');
            }else{
                buttonNext.classList.add('pages-end');
                buttonEnd.classList.add('pages-end');
                numClick1280 = 6;
            }
            console.log(numClick1280);
            });
        //Page end
        buttonEnd.addEventListener('click',function(e){
            buttonLast.classList.remove('pages-end'); 
            buttonFirst.classList.remove('pages-end');
                if(numClick1280 < 6){
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },600)

                    setTimeout(function(){
                        for(let i = 0; i< 8; i++){
                            sliderContainer.append(slides[pagesArray1280[5][i]]); 
                        }   
                    },800)
                    buttonNext.classList.add('pages-end');
                    buttonEnd.classList.add('pages-end');
                }
                numClick1280 = 6;
                setTimeout(function(){ buttonNow.textContent = 6; },700);

        });
        //Page Last
        buttonLast.addEventListener('click',function(e){
            //for(let i = 0; i<document.querySelector('.pets-slider-container').childElementCount;i++){
            //    document.querySelector('.pets-slider-container').childNodes[i].classList.add('dont-show-slide');  
            // }
            buttonNext.classList.remove('pages-end'); 
            buttonEnd.classList.remove('pages-end');
        // Numeration
            numClick1280 = numClick1280-1;
            if(numClick1280 <= 6 && numClick1280 >= 1) {
                setTimeout(function(){
                    buttonNow.textContent = numClick1280;
                },700)
            }

            if(numClick1280 > 1){ 
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },600)

                setTimeout(function(){
                    for(let i = 0; i< 8; i++){
                        sliderContainer.append(slides[pagesArray1280[numClick1280-1][i]]); 
                    }   
                },800)
            }else if(numClick1280 === 1){
                setTimeout(function(){
                    while(sliderContainer.firstChild){
                        sliderContainer.removeChild(sliderContainer.firstChild);
                    }
                },600)

                setTimeout(function(){
                    for(let i = 0; i< 8; i++){
                        sliderContainer.append(slides[pagesArray1280[0][i]]); 
                    }   
                },800)
                buttonLast.classList.add('pages-end');
                buttonFirst.classList.add('pages-end');
            }else{
                buttonLast.classList.add('pages-end');
                buttonFirst.classList.add('pages-end');
                numClick1280 = 1;
            }
            console.log(numClick1280);
            });
        //Page First
        buttonFirst.addEventListener('click',function(e){
            buttonNext.classList.remove('pages-end'); 
            buttonEnd.classList.remove('pages-end');
                if(numClick1280 > 1){
                    setTimeout(function(){
                        while(sliderContainer.firstChild){
                            sliderContainer.removeChild(sliderContainer.firstChild);
                        }
                    },600)

                    setTimeout(function(){
                        for(let i = 0; i< 8; i++){
                            sliderContainer.append(slides[pagesArray1280[0][i]]); 
                        }   
                    },800)
                    buttonLast.classList.add('pages-end');
                    buttonFirst.classList.add('pages-end');
                }
                numClick1280 = 1;
                setTimeout(function(){ buttonNow.textContent = 1; },700);

        });
    },1000)            
    }
}  
