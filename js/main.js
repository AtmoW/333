$(document).ready(function () {
var s_items = $('.portfolio__item').length;
for (let i = 0; i < s_items; i++) {
    $('.slider__dotted').append('<div data-slide = '+i+' class="slider__dot"></div>');
}
    $(".slider").slick({
        autoplay: false,
        arrows:false
    });

    $('.slider__dot').on('click',function(){
        slide = $(this).attr('data-slide');
    });
});