$(function(){
    var count = $(".notice_list li").length; //갯수 체크 (총3개)
    var currentIndex = 0; //현재 데이터
    var slideposition; //위치

    setInterval(function(){ //일정시간마다 반복 실행
        if(currentIndex < count-1) { //다음 실행될 카운터 체크
            currentIndex++; //다음 카운터 실행
        } else {
            currentIndex = 0; //카운터가 없을 경우 
        };
        slideposition = currentIndex * (-2)+"em"; //위치
        $(".notice_list").animate({ top: slideposition }, 1000); //속도
    }, 2000); //시간
    
    
//    var slideCount = $(".notice_list li").length;	//갯수 가져오기 li가 3개 임으로 총 3개를 가져온다.
//    var currentIndex = 0;			
//	var slidePosition;
//
//	setInterval(function(){    //자동
//    if(currentIndex < slideCount-1 ){ //슬라이드 카운터 = 슬라이드 총 갯수
//      currentIndex++;
//    } else {
//      currentIndex = 0;
//    };
//    slidePosition = currentIndex * (-2)+"em";   //위치변경
//    $(".notice_list").animate({ top:slidePosition }, 1000); //속도
//	}, 300); //시간
             $('.bxslider').bxSlider({
                captions: true,
                //slideWidth:600,  //수정
                auto: true,
                autoControls: true,
                stopAutoOnclick: true,

            });

            var mySlider = $("#slide_banner").bxSlider({
                mode: "horizontal", // 가로 수평으로 슬라이드 됩니다.
                speed: 500, // 이동 속도를 설정합니다.
                pager: false, // 현재 위치 페이징 표시 여부 설정.
                moveSlides: 1, // 슬라이드 이동시 갯수 설정.
                slideWidth: 270, // 슬라이드 마다 너비 설정.
                minSlides: 4, // 최소 노출 개수를 설정합니다.
                maxSlides: 4, // 최대 노출 개수를 설정합니다.
                slideMargin: 0, // 슬라이드간의 간격을 설정합니다.
                auto: true, // 자동으로 흐를지 설정합니다.
                autoHover: true, // 마우스 오버시 정시킬지 설정합니다.
                controls: false // 이전 다음 버튼 노출 여부 설정합니다.
            });
            var mySlider1 = $("#slide_banner1").bxSlider({
                mode: "horizontal", // 가로 수평으로 슬라이드 됩니다.
                speed: 500, // 이동 속도를 설정합니다.
                pager: false, // 현재 위치 페이징 표시 여부 설정.
                moveSlides: 1, // 슬라이드 이동시 갯수 설정.
                slideWidth: 300, // 슬라이드 마다 너비 설정.
                minSlides: 3, // 최소 노출 개수를 설정합니다.
                maxSlides: 3, // 최대 노출 개수를 설정합니다.
                slideMargin: 0, // 슬라이드간의 간격을 설정합니다.
                auto: true, // 자동으로 흐를지 설정합니다.
                autoHover: true, // 마우스 오버시 정시킬지 설정합니다.
                controls: false // 이전 다음 버튼 노출 여부 설정합니다.
            });

            //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
            $("#prevBtn").on("click", function() {
                mySlider.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
                return false; //<a>에 링크를 차단합니다.
            });
            //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
            $("#nextBtn").on("click", function() {
                mySlider.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
                return false;
            });

            //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
            $("#prevBtn1").on("click", function() {
                mySlider1.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
                return false; //<a>에 링크를 차단합니다.
            });
            //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
            $("#nextBtn1").on("click", function() {
                mySlider1.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
                return false;
            });
})