$(document).ready(function(){
    $(".p_jarvis").find('h3').addClass('textOff');
    $(".p_govt").find('h3').addClass('textOff');
    $(".p_jarvis, .p_govt").hover(function(){
        $(this).css('cursor', 'pointer');
        $(this).find('h3').removeClass('textOff');
        $(this).find('div').removeClass('imageBig');
        $(this).find('img').removeClass('circleSmall');
        $(this).find('img').addClass('circleBig');
        $(this).find('div').addClass('imageSmall');
        $(this).find('h3').addClass('textOn');
    }, function(){
        $(this).css('cursor', 'default');
        $(this).find('h3').removeClass('textOn');
        $(this).find('img').removeClass('circleBig');
        $(this).find('div').removeClass('imageSmall');
        $(this).find('img').addClass('circleSmall');
        $(this).find('div').addClass('imageBig');
        $(this).find('h3').addClass('textOff');
    });
});