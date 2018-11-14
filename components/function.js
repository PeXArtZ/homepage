import Index from '../pages/index.js'

$(window).on('scroll', function() {

    if ($(document).scrollTop() > 50) {
        $('.global-nav').addClass('move-site');
    }

    else {
        $('.global-nav').removeClass('move-site');
    }
});
 
export default Index 