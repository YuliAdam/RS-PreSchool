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