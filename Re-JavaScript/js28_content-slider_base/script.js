//문서가 모두 로드되면 할일 
//대상.addEventListener('이벤트종류', 할일);
//이벤트 종류 : DOMContentLoaded
//할일 = 함수 = function(){실제로 할일 }
//document.addEventListener('DOMContentLoaded', function(){});
document.addEventListener('DOMContentLoaded', function () {
    // 변수 지정
    /*
        클래스명 container 변수명 $slideWrap
        클래스명 slider-container 변수명 %slideContainer
        클래스명 slide 변수명 $slide
        이전 버튼 변수명 navPrev
        다음 버튼 변수명 navNext
    
        $slideWrap = document.getElementsByClassName('.container');
        이렇게 하면 주의할점이 
        $slideWrap[0].style.height = 100; 
        하나의 값이 아닌 배열로 들어오기 때문에 [i]를 작성해줘야 합니다/
    */

    var $slideWrap = document.querySelector('.container'),
        $slideConainer = document.querySelector('.slider-container'),
        $slide = document.querySelectorAll('.slide'),
        $navPrev = document.getElementById('prev'),
        $navNext = document.getElementById('next'),
        $slideHeight = 0,
        $currentIndex = 0,
        $slideCount = $slide.length,
        // 전역변수 선언 
        $timer ,
        // pagenation
        //$pagerBtn = document.querySelectorAll('.pager span'),
        //page HTML을 스크립트로 만드는 변수 
        $pagerHTML = '';
        $pager = document.querySelector('.pager');


    //[1]슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    for (var i = 0; i < $slide.length; i++) {
        if ($slideHeight < $slide[i].offsetHeight) {
            $slideHeight = $slide[i].offsetHeight;
        }
    }

    //높이지정 'px' 놓침주의
    $slideWrap.style.height = $slideHeight + 'px';
    $slideConainer.style.height = $slideHeight + 'px';

    // [2]슬라이드가 있으면 가로로 배열하기
    /*
    $slide[0].style.left = 0 + '%';
    $slide[1].style.left = 100 + '%';
    $slide[2].style.left = 200 + '%';
    */
    for (var a = 0; a < $slide.length; a++) {
        $slide[a].style.left = a * 100 + '%';
        // js28 - 페이지네이션 html로 만들기 
        $pagerHTML += '<span data-idx="' + a + '">' + (a+1) + '</span>'

        $pager.innerHTML = $pagerHTML;
    }
    $pagerBtn = document.querySelectorAll('.pager span');



    // 슬라이드 이동 함수 
    function goToSlide(idx) {
        //$slideConainer.classList.add('animated'); //순서를 바꿔줌 (자동슬라이드 떄문에)
        $slideConainer.style.left = -100 * idx + '%';
        $currentIndex = idx;

          //모든 $pagerBtn에 active 제거, 클릭한 그 요소에만 active 추가 
          for (var y =0; y < $pagerBtn.length; y++){
            $pagerBtn[y].classList.remove('active');
        }
        $pagerBtn[idx].classList.add('active');
    }

    goToSlide(0);

    // 버튼기능 업데이트 함수
    // 버튼을 클릭하면 슬라이드 이동시키기
    // 다음버튼을 클릭하면 할일, 이전 버튼을 클릭하면 할일
    // goToSlide();
    $navPrev.addEventListener('click', function () {

        if( $currentIndex == 0){
            //$navPrev.classList.add('disabled');
            goToSlide($slideCount - 1); //마지막으로 가라 
        }else{
            goToSlide($currentIndex - 1);
        }
    });
    $navNext.addEventListener('click', function () {
        // ci0 - 처음 next btn click -100% 
        // ci1 -두번째 next btn click - 200%
        // 1. 일때 발동조건 : goToSlide($currentIndex + 1);
       
        /*
        마지막이란 $navNext 안보이도록, 아니라면  $navNext 다시 나타나도록
        */
        //1. 끝가지 가면 다음버튼 x
        //2. 끝인데도 불구하고 끝에도 다음버튼을 클릭하면 다시 처음으로
        //css 설계 #prev.disabled, #next.disabled { display:none;}
        if( $currentIndex == $slide.length - 1){
            //$navNext.classList.add('disabled');
            goToSlide(0);
        }else{
            //$navNext.classList.remove('disabled');
            goToSlide($currentIndex + 1);
        }
    });


    // JavaScript 28 자동슬라이드
    //자동슬라이드 
    function startAudoSlide(){
        // 4초마다 goToSlide(숫자); 0 , 1, 2, 3, ...5 
        // setInterval('할일', '시간'); 4000-> 4초 
        // 함수 = 할일 = function(){실제로 할일 }
    
        $timer = setInterval(function(){
            //goToSlide(숫자); 0, 1, 2, 3, ...5 , 0
            //ci 0 4초 ni 1 ci 1 4초 ni 2... ci 5 4초 ni 0
            var nextIdx = ($currentIndex + 1) % $slideCount; // 나눈 나머지 
            goToSlide(nextIdx);
    
        }, 4000);
    }

    startAudoSlide();

    //clearInterval(대상)
    //$slideWrap에 마우스가 들어오면 할일 , 나가면 할일
    $slideWrap.addEventListener('mouseenter', function(){
        clearInterval($timer);
    });

    $slideWrap.addEventListener('mouseleave', function(){
        startAudoSlide();
    });
 
    //pager로 슬라이드 이동하기 2가지 방법
    for(var x = 0; x < $pagerBtn.length; x++){
        $pagerBtn[x].addEventListener('click', function(event){
            console.log(event.target.innerText);
            //var pagerNum = event.target.getAttribute('data-idx');

            //innerText 내용 반환 A.innerText / 내용 교체 A.innerText = 'B';
            //innerHTML 의 태그를 반환 A.innerHTML / 태그 교체 A.innerHTML = 'B' 

            var pagerNum = event.target.innerText - 1;
            goToSlide(pagerNum);

          
        });
    }
});


