$(document).ready(function(){
    $('#pav-slideShow .slider-owl').owlCarousel({
        items:1,
        margin:10,
        pagination: true,
        slideSpeed : 800,
        addClassActive: true,
        scrollPerPage: false,
        touchDrag: true,
        autoplay: true,
        loop: true
        // responsive:{
        //     0:{
        //         items:1								
        //     },
        //     768:{
        //         items:1
        //     },
        //     992:{
        //         items:1
        //     },
        //     1200:{
        //         items:1
        //     }
        // },
    });
});