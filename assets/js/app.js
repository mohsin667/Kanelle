$(document).ready(function(){

    // let slickSlider = {
    //     productCarousel: $('.product-slider'),
    //     productCarouselNav: $('.slider-nav'),
    //     relatedItemsCarousel: $(".related-slider"),

    //     slick: function(el, slidesToShow, slidesToScroll, arrows, fade, asNavFor, dots, centerMode, focusOnSelect, infinite){
            
    //         el.slick({
    //             slidesToShow: slidesToShow,
    //             slidesToScroll: slidesToScroll,
    //             arrows: arrows,
    //             fade: fade,
    //             asNavFor: asNavFor,
    //             dots: dots,
    //             centerMode: centerMode,
    //             focusOnSelect: focusOnSelect,
    //             infinite: infinite
    //         });

    //     },
    //     init: function(){
    //         slickSlider.slick(slickSlider.productCarousel,1,1,false,true,'.slider-nav',false,null,null,true);
    //         slickSlider.slick(slickSlider.productCarouselNav,3,1,false,false,'.product-slider',false,true,true,true);
    //         let slideW = 2.5;
    //         let slidev = 2;
    //         if ($(window).width() > 800) {
    //             slideW = 5
    //             slidev = 1
    //         }
    //         slickSlider.slick(slickSlider.relatedItemsCarousel, slideW, slidev, true, false, null, true, null, null, false);
    //     }
    // }

    //Functions initialization
    // slickSlider.init();
    $(".trigger").on("click",function(){
        $(".left__menu").addClass("show");
        $("body").css("overflow-y","hidden")
    })

    $(".close").on("click",function(){
        $(".left__menu").removeClass("show");
        $("body").css("overflow-y","visible")
    })

    if($(window).width() < 992) {
        $(".left__menu li").on("click",function(){
            $(this).find(".drop__menu").slideToggle()
        })
    }
    $(".navigation__right__close").on("click",function(e){
        e.stopPropagation();
        $(".navigation__right_dorp__menu").removeClass("visible")
    })
    $(".right__menu li").on("click",function(e){
        e.stopPropagation();
        $(".navigation__right_dorp__menu").removeClass("visible")
        $(this).find(".navigation__right_dorp__menu").addClass("visible")
    })
});
