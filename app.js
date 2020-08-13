$(document).ready(function () {

    $('.nut-menu').click(function (e) { 
        e.preventDefault();
        
        $('.icon-1').toggleClass('hide');

        $('.icon-2').toggleClass('hide');

        $('.nav-menu').toggleClass('di-vao');
    });

    $('.item-1').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop: 0
        },'fast',function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-2').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop: $('.khoi-2').offset().top
        },'fast',function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-3').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop: $('.khoi-3').offset().top
        },'fast',function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-4').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop: $('.khoi-4').offset().top
        },'fast',function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });
    
});