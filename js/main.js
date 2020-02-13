$(document).ready(function () {
var s_items = $('.portfolio__item').length;
for (let i = 0; i < s_items; i++) {
    if(i==0){
        $('.slider__dotted').append('<div data-slide = '+i+' class="slider__dot active"></div>');
    }
    else{
        $('.slider__dotted').append('<div data-slide = '+i+' class="slider__dot"></div>');
    }
}
    $(".slider").slick({
        autoplay: false,
        arrows:false
    });

    $('.slider__dot').on('click',function(){
        $('.active').removeClass('active');
        slide = $(this).attr('data-slide');
        $('.slider').slick('slickGoTo', slide);
        $(this).toggleClass('active');
    });

    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $('.active').removeClass('active');
        $('.slider__dot[data-slide='+currentSlide+']').toggleClass('active')
    });
});