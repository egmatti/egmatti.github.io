// GETTING STARTED EXAMPLE
// $(document).ready(function(){
//   // jQuery code
// });


// MEDIA QUERIES

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );


// FEATURED PROJECT SLIDER

$(".featured-project-slider").slick({
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
});

$(".slick-prev").html("");
$(".slick-next").html("");
