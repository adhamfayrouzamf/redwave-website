$(document).ready(function(){

    var musicB = -300;
    var h = 300;
    var musicbox = $('.music-box');
    var winh = $(window).height();
    $('#mycover').height(winh);
    if($(window).height() < 500){
        h = 200;
        musicB = -h;
    }else{
        h = 300;
        musicB = -h;
    }
    musicbox.css('height',h+"px");
    musicbox.css('bottom',musicB+'px');

    $(window).on('resize',function(){
        $('#mycover').height($(this).height());
        if($(this).height() < 500){
            h = 200;
            musicB = -h
        }else{
            h = 300;
            musicB = -h;
        }
        musicbox.css('height',h+"px");
        if(musicbox.css('bottom')!="0px"){musicbox.css('bottom',musicB+'px');}
    });

    $(window).scroll(function(){
        var ht = $('.cover-head').offset().top;
        var hh = $('.cover-head').outerHeight();
        var wh = $(window).height();
        var ws = $(window).scrollTop();
        if(ws >= ht){

            $('.cover-head .brand').hide();
            $('.main-nav .brand').show();
            $('.main-nav .nav-overlay').css('height','100%');
        }else{
            $('.main-nav .nav-overlay').css('height','0');
            $('.main-nav .brand').hide();
            $('.cover-head .brand').show();
        }
    });

    $('.scroller').click(function(){

        var target = $(this).data('target');
        var targetH = $('' + target);
        $('html, body').stop().animate({
            'scrollTop': targetH.offset().top
        }, 700, 'swing', function () {
            window.location.hash = targetH;
        });
        
    });

    for(var i =0;i<47;i++){
        $('.beats').append('<div class="bar"></div>');
    }

    $('.music-player-toggler').click(function(){

        if(musicbox.css('bottom') != '0px'){
            musicbox.css('bottom','0px');
            $('#headphones').hide();
        }
    });
    $('body').click(function(e) 
    {
        var target = musicbox;
        if (!target.is(e.target) && target.has(e.target).length === 0) 
        {
            if(target.css('bottom') == '0px'){
                target.css('bottom',musicB+'px').children('.music-player-toggler').show();
            }
        }
    });

    $('.music-player iframe').on('load',function(){

        $('.load-overlay .spinner').fadeOut(700,
            function () {
        
                $(this).parent().fadeOut(700,
                function () {
        
                    $(this).remove();
                    
                });
        
            });
    });
    
});