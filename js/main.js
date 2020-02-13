$(document).ready(function () {

    $('.burger').click(function(event){
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock')
    });


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

    $('.footer__up').click(function (){
            $('body,html').scrollTop(0);
    });
    
    
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if(windowTop>800){
            $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.646433257099!2d30.491575885253482!3d59.936203628705904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962de0a5ea55bb%3A0x6a49be2873ffec0a!2z0KXQsNGB0LDQvdGB0LrQsNGPINGD0LsuLCAyMiDQutC-0YDQv9GD0YEgMSwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5NTI5OA!5e0!3m2!1sru!2sru!4v1581614472475!5m2!1sru!2sru"height="374" width="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');

            $(window).unbind('scroll');
        }
    });
});