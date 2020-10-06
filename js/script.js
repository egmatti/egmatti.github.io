

// MEDIA QUERIES

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );


// FEATURED PROJECT SLIDER

$(".featured-project-slider").slick({
 arrows: true,
 cssEase: 'linear',
 fade: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
});


// MEDIUM WIDTH PROJECT IMAGE SLIDER

$(".project-slider--medium-width").slick({
 arrows: true,
 cssEase: 'linear',
 fade: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
});


// FULL WIDTH PROJECT IMAGE SLIDER

$('#creation-flows-page .project-slider--full-width').slick({
 arrows: true,
 asNavFor: '#creation-flows-page .project-slider--full-width-nav',
 cssEase: 'linear',
 fade: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$('#creation-flows-page .project-slider--full-width-nav').slick({
 arrows: false,
 asNavFor: '#creation-flows-page .project-slider--full-width',
 centerMode: false,
 dots: false,
 focusOnSelect: true,
 infinite: false,
 slidesToScroll: 2,
 slidesToShow: 2,
 vertical: false
});

$('#tasks-and-playbooks-page .project-slider--full-width').slick({
 arrows: true,
 asNavFor: '#tasks-and-playbooks-page .project-slider--full-width-nav',
 cssEase: 'linear',
 fade: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$('#tasks-and-playbooks-page .project-slider--full-width-nav').slick({
 arrows: false,
 asNavFor: '#tasks-and-playbooks-page .project-slider--full-width',
 centerMode: false,
 dots: false,
 focusOnSelect: true,
 infinite: false,
 slidesToScroll: 3,
 slidesToShow: 3,
 vertical: false
});

$(".slick-prev").html("");
$(".slick-next").html("");
