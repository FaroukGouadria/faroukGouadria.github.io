
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
$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
    $("#line-progress").css("width", "50%");
    $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
    $("#line-progress").css("width", "100%");
    $(".creative").addClass("active").siblings().removeClass("active");
});
