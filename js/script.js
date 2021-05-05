var btn_prev = document.querySelector('.main__poster_arrow_prev')
var btn_next = document.querySelector('.main__poster_arrow_next')
var images = document.querySelectorAll('.main__poster img')
console.log(images);
var i = 0;

        btn_next.onclick = function(){
         images[i].style.opacity = 0;
         i = i + 1;    
         if ( i >= 4) {
             i = 0;
         }
         images[i].style.opacity = 1;
     }
     btn_prev.onclick = function (){
        images[i].style.opacity = 0;
        i = i - 1
        if ( i < 0) {
            i = 3
        }
        images[i].style.opacity = 1;

        
    }
    $(document).ready(function(){
        $('.header__burger').on('click', function(){
            $('.header__burger_list').toggleClass('header__burger_list_active')
            $('.header__burger').toggleClass('header__burger_active')
            $('body').toggleClass('lock')
        })
    });
    $('input[name=phone]').mask("+7 (999) 999-9999");


    window.onscroll = function showHeader(){
        var header = document.querySelector('.header__inner')
        if(window.pageYOffset > 50){
            header.classList.add('header__inner_fixed');
        } else {
            header.classList.remove('header__inner_fixed');
        }
    }
