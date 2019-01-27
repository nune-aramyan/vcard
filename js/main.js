$(function() {
    $('.btn--scroll-top').hide();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.btn--scroll-top').show();
        } else {
            $('.btn--scroll-top').hide();
        }
    });

    $('#btnScrollTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 900);
    });

    $('.btn-collapse').on('click', function (e) {
        btn = $(this);
        btn.toggleClass('closed')
        $('.content-collapsable').each(function () {
            if ($(this).attr('data-toggle') === btn.attr('id')) {
                $(this).toggle();
            }
        })
    })

});