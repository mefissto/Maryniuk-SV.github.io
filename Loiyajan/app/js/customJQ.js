$(document).ready(function() {

    $('.clients').owlCarousel({
        loop:true,
        dots:false,
        autoWidth:true,
        margin:50,
        responsiveClass: true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.up__btn').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $('.foto__wrap').mouseover(
     function(){ $(this).addClass('team__hover') }
     );
    $('.foto__wrap').mouseout(
     function(){ $(this).removeClass('team__hover') }
     );
    $('.social').mouseover(
     function(){ $(this).prev().addClass('team__hover') }
     );
    $('.social').mouseout(
     function(){ $(this).prev().removeClass('team__hover') }
     );

    // Mobile menu

    $('.show_right_menu').click(function(){
        $('.menu_right').toggleClass('drop-down show')
    });
    $('.show_menu').click(function(){
        $('.menu').toggleClass('drop-down show')
    });

    if(matchMedia) {
        var screenTwo = window.matchMedia("(max-width:576px)");
        screenTwo.addListener(changeTwo);
        changeTwo(screenTwo);
    }
    function changeTwo (screen){
        if (!screen.matches) {
            $('.menu').removeClass('drop-down show')
        }
    }
    if(matchMedia) {
        var screenOne = window.matchMedia("(max-width:992px)");
        screenOne.addListener(changeOne);
        changeOne(screenOne);
    }
    function changeOne (screen){
        if (!screen.matches) {
            $('.menu_right').removeClass('drop-down show')
        }
    }

    //////// Modal

    // Open by click
    $('.js-button').click(function(e) {
        e.preventDefault();
        $('.content-box').css('filter', 'blur(5px)');
        $('.js-overlay').fadeIn();
        // $('.js-overlay').addClass('disabled');
    });

    // Close
    $('.js-close').click(function() {
        $('.js-overlay').fadeOut();
        $('.content-box').css('filter', 'none');
    });

    $(document).mouseup(function(e) {
        var popup = $('.js-popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay').fadeOut();
            $('.content-box').css('filter', 'none');
        }
    });

    // Footer

    $('.map-container').mouseover(function() {
        setTimeout(function() {
            $('.eclipse').stop().fadeOut().css('display', 'none');
        }, 400)
    });
    $('.map-container').mouseout(function() {
        setTimeout(function() {
            $('.eclipse').stop().fadeIn().css('display', 'block');
        }, 400)
    });

});

