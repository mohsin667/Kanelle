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
    $(".contact__half_column form").on("submit",function(e){
        e.preventDefault();
        let res = true;
        let userinput = $("#email").val();
        let captcha = $("#captcha-field").val();
         let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        $(".form-field").each((ind,elm)=>{
            $(elm).next("span").remove()
            if($(elm).val() < 1) {
                res = false;
                $(elm).after("<span>All fields are mandatory</span>")
            }else {
                $(elm).next("span").remove()
            }
        })


        if(userinput.length > 1 && !pattern.test(userinput))
        {
            res = false;
            $("#email").next("span").remove()
            $("#email").after("<span>Please provide a valid e-mail address</span>")
        }
        if(captcha.length > 1 && captcha !== $(".cap").val() ) {
            res = false;
            $("#captcha-field").next("span").remove()
            $("#captcha-field").after("<span>Please provide enter a valid captcha code</span>")
        }
        return res
    })
    jQuery("#phoneInput, #Mobile-phone").on("keydown", function (e) {
        if (e.which >= 48 && e.which <= 57) {
            return true
        }
        if (e.which >= 186 && e.which <= 189) {
        return true
        }
        if (e.which >= 8 && e.which <= 8) {
            return true
        }
        if(e.which == 37 || e.which == 39) {
            return true
        }
        else {
            return false
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
    
});
