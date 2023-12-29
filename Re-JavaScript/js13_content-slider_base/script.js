// 변수 지정
var sliderWrapper = document.getElementsByClassName('container'), //클래스명 container
    sliderContainer =   document.getElementsByClassName('slider-container'), // 클래스명 slider-container
    slides = document.getElementsByClassName('slide'), //클래스명 slide 
    slideCount = slides.length, //슬라이드의 개수
    currentIndex = 0,
    topHeight = 0, //슬라이더 높이중에 가장 높은걸로 반영을 할 예쩡
    navPrev = document.getElementById('prev'), // 아이디 prev
    navNext = document.getElementById('next'); // 아이디 next

	
//[1] 슬라이드의 높이 확인하여 부모의 높이로 지정하기

//topHeight = slides.offsetHeight;
//console.log(topHeight); //undefined

function calculateTallestSlide(){
   for(var i = 0; i < slideCount; i++) {
    //기존의 값이 새로운 topheigt 보다 큰지
    if(slides[i].offsetHeight > topHeight){
        topHeight = slides[i].offsetHeight;
    } 
   }
    //px 표기 놓치지마세요
    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}

calculateTallestSlide();

// [2]슬라이드가 있으면 가로로 배열하기

for (var i = 0; i < slideCount; i++){
    slides[i].style.left = i * 100 + '%';
}

// [3]슬라이드 이동 함수 
// 반드시 매개변수가 있어야 합니다. idx를 받아와서 몇번이 들어오는지 확인을 해야하니까요
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    //classd에 animated 이름 추가 
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;

    //updateNav();
}

// [4]버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', function(ev){
    ev.preventDefault();
    //goToSlide(currentIndex -1);
    //처음이 아니라면 goToSlide(currentIndex - 1);
    //처음이라면 goToSlide();
    if(currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slideCount - 1);
    }

});

navNext.addEventListener('click', function(ev){
    ev.preventDefault();
    //goToSlide(currentIndex +1);
    if(currentIndex < slideCount-1) {
        goToSlide(currentIndex + 1);
    }else{
        goToSlide(0);
    }
});


// [5]버튼기능 업데이트 함수
// 처음일때 
function updateNav(){
    if(currentIndex == 0) {
        navPrev.classList.add('disabled');
    }else{
        navPrev.classList.remove('disabled');
    }
    // 마지막일때 
    if(currentIndex == slideCount-1) {
        navPrev.classList.add('disabled');
    }else{
        navPrev.classList.remove('disabled');
    }
}

// [6]첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);
