$('.page-scroll').on('click', function(e){

    var tujuan = $(this).attr('href');
    var elementTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elementTujuan.offset().top -50
    }, 2000, 'swing');

    e.preventDefault();
});

 
// parallax
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h2').css({
        'transform' : 'translate(0px, '+ wScroll/2.1 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.7 +'%)'
    });


    // Portofolio
    if ( wScroll > $('.portofolio').offset().top -100) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });  
    }
});
