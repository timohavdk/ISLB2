$(document).ready(function(){
    $('.nav__burger').click(function(event){
        $('.nav__burger,.nav__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.studying-programs__item-p').click(function(){
        if($('.studying-programs__column').hasClass('one')){
            $('.studying-programs__item-p').not($(this)).removeClass('active');
            $('.studying-programs__slider-box').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function(){
    $('.contact__item-p').click(function(){
        if($('.contact__body').hasClass('one')){
            $('.contact__item-p').not($(this)).removeClass('active');
            $('.contact__slider-box').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


