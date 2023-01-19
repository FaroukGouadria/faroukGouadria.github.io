let menus = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');


menuBtn.addEventListener('click',function(){
    menus.classList.add('active');
})
closeBtn.addEventListener('click', function () {
    menus.classList.remove('active');
})

/* header-bg */
const header = document.querySelector('header');
window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTo>20){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky')
    }
})