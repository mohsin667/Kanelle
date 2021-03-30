$(document).ready(function(){
    $(".trigger").on("click",function(){
        $(".left__menu").addClass("show");
        $("body").css("overflow-y","hidden")
    })

    $(".close").on("click",function(e){
        e.preventDefault()
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
        e.preventDefault()
        $(".navigation__right_dorp__menu").removeClass("visible")
    })
    $(".right__menu li").on("click",function(e){
        e.stopPropagation();
        e.preventDefault()
        $(".navigation__right_dorp__menu").removeClass("visible")
        $(this).find(".navigation__right_dorp__menu").addClass("visible")
    })
    $(window).on("scroll",function(){
        if($(window).width() > 992) {
            if($(window).scrollTop()  > 100 ) {
                $("header").addClass("sticky");
            }else {
                $("header").removeClass("sticky");
            }
        }
    })
    // if($("header.transparent").length < 1) {
    //     let headerHeight = $("header").height();
    //     $(".main__wrapper").css("margin-top",headerHeight+"px");
    // } 

    let slickSlider = {
        productCarousel: $('.site__banner'),
        productCard: $('.site__product_card.sl .row'),
        sellerProduct: $(".seller__product"),
        featuredProduct: $(".featured__product"),

        slick: function(el, slidesToShow, slidesToScroll, arrows, fade, asNavFor, dots, centerMode, focusOnSelect, infinite){
            
            el.slick({
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                arrows: arrows,
                fade: fade,
                asNavFor: asNavFor,
                dots: dots,
                centerMode: centerMode,
                focusOnSelect: focusOnSelect,
                infinite: infinite
            });

        },
        init: function(){
            if($('.site__banner').length > 0) {
                slickSlider.slick(slickSlider.productCarousel,1,1,false,false,null,true,null,null,true);
            }
            let slideW = 1;
            let slidev = 2;
            if ($(window).width() > 992) {
                slideW = 3
                slidev = 1
            }
            if($(window).width() < 992 && $('.site__product_card.sl .row').length > 0) {

                slickSlider.slick(slickSlider.productCard,1,1,false,false,null,true,null,null,true);
            }
            if($(".featured__product").length > 0) {
                slickSlider.slick(slickSlider.featuredProduct,slideW,1,false,false,null,true,null,null,true);
            }
        }
    }

    // Functions initialization
    slickSlider.init();
    if($(window).width() < 992) {
        slickSlider.slick(slickSlider.sellerProduct,1,1,false,false,null,true,null,null,true);
    }

    // Product page -- List/Grid View Toggle
    $(".modes__list-style-1").on('click', function(){
        $(".items__product-item").removeClass("list-view")
    });
    $(".modes__list-style-2").on('click', function(){
        $(".items__product-item").addClass("list-view")
    });
});
