$(document).ready(function () {
    var scroll = $(document).scrollTop();
    var isVisible = false;
    $(window).on('scroll', function () {
        if (checkVisible($('.skill')) && !isVisible) {
            $("#pro1").delay(500);
            $("#pro2").delay(1000);
            $("#pro3").delay(1500);
            $("#pro4").delay(2500);
            $("#pro5").delay(3000);
            $("#pro6").delay(2000);
            $("#pro1").animate({
                "value": 100
            });
            $("#pro2").animate({
                "value": 90
            });
            $("#pro3").animate({
                "value": 85
            });
            $("#pro4").animate({
                "value": 75
            });
            $("#pro5").animate({
                "value": 70
            });
            $("#pro6").animate({
                "value": 70
            });
            isVisible = true;
        }
    });

    function checkVisible(elm, eval) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    } //progress 

    //로딩화면

    var btnevent = 1;
    $('.plus_btn button').click(function () {
        if (btnevent == 1) {
            $('.portfolio_plus').fadeIn(1000);
            $(this).text("Close -");
            btnevent = 0;
        } else {
            $('.portfolio_plus').fadeOut(500);
            $(this).text("More +");
            btnevent = 1;
        }
    })

    $('.study_btn').click(function () {
        if (btnevent == 1) {
            $('.study_hide').fadeIn(1000);
            $(this).text("접기");
            btnevent = 0;
        } else {
            $('.study_hide').fadeOut(500);
            $(this).text("더보기");
            btnevent = 1;
        }
    })
    //Slide Gallery 이미지 샐랙터
    jQuery(".list_wrap ul li").click(function () {
        jQuery(this).addClass("active").siblings().removeClass();
        jQuery(".photo_img img").attr("src", jQuery(this).children("a").attr("href"));
        return false;
    });

//    //Slide Gallery 슬라이딩 초기화
//    jQuery(".list_wrap").width("260" * parseInt(jQuery(".list_wrap ul").size()) + "px");

    $(window).resize(function () {
        if ($(window).width() > 1280) {

            //Slide Gallery 슬라이딩 초기화
            jQuery(".list_wrap").width("260" * parseInt(jQuery(".list_wrap ul").size()) + "px");
            jQuery(".list_wrap").height("550" * parseInt(jQuery(".list_wrap ul").size()) + "px");
        }
        if ($(window).width() < 1280) {

            //Slide Gallery 슬라이딩 초기화
            jQuery(".list_wrap").width("175" * parseInt(jQuery(".list_wrap ul").size()) + "%");
            jQuery(".list_wrap").height("170" * parseInt(jQuery(".list_wrap ul").size()) + "px");
        }
    })

})
