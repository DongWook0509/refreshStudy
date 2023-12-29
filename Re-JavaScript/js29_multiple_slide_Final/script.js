var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0, 
    slideCount = slide.length,
    slideWidth = 300, 
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    //javascript 로 너비 지정하기 
    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px'; 

    function moveSlide(num){
        slides.style.left = -num * 330 + 'px';
        currentIdx = num;
    }

    nextBtn.addEventListener('click',function(){
        if(currentIdx < slideCount - 3){ //슬라이드가 3개씩 나오기 떄문이기도 하고 마지막 인덱스 번호가  slideCount - 3 이기도 하다
            moveSlide(currentIdx + 1);
            console.log(currentIdx);
        }else{
            moveSlide(0);
        }
    });

    prevBtn.addEventListener('click',function(){
        if(currentIdx > 0){ //처음이 아니라 
            moveSlide(currentIdx - 1);
            console.log(currentIdx);
        }else{
            moveSlide(slideCount - 3);
        }
    });