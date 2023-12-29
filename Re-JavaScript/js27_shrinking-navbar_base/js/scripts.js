/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

/*  
    var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo = 'images/logo-shrink.svg',
    $logo = $('#logo'),
    $threshold = $mainHeader.outerHeight();

    //윈도우 스크롤이 $threshold 보다 많으면 $mainHeader에  shrink클래스 추가, 제거
    $window.scroll(function(){
        if($(this).scrollTop() > $threshold){
           if(!$mainHeader.hasClass('shrink')){ //없을때만
                $mainHeader.addClass('shrink');
                switchImg($smallLogo);
           }
        }else{
            if($mainHeader.hasClass('shrink')){
                $mainHeader.removeClass('shrink');
                switchImg($defaultLogo);
            }
        }
    });

    //switchImg 함수
    
    //현재 이미지 $(logo)는 fadeOut,
    //매개변수의 이미지주소로 $logo의 src 속성을 변경, $logo fadeIn
    
   function switchImg(newImgPath){
        //현재 이미지($logo)는 fadeOut, 0.3
        //매개변수의 이미지 주소로 $logo의 src 속성 (attribute)을 변경 , $logo fadeIn
        $logo.fadeOut(300, function(){
            $logo.attr('src', newImgPath);
            $logo.fadeIn(300);
        });
   }
 */
/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

var $window = window, 
    $mainHeader = document.getElementById('main-header'),
    $defaultLogo = 'images/logo.svg',
    $threshold = $mainHeader.offsetHeight, //높이 
    $Logo = document.getElementById('logo'),
    $smallLogo = 'images/logo-shrink.svg';

console.log($threshold);

$window.addEventListener('scroll', function(){
    if(this.pageYOffset > $threshold){
        if(!$mainHeader.classList.contains('shrink')){
            $mainHeader.classList.add('shrink');
            switchImg($smallLogo);
        }
    }else{
        if($mainHeader.classList.contains('shrink')){
           $mainHeader.classList.remove('shrink');
           switchImg($defaultLogo);
        }
    }
});

function switchImg(newImgPath){
    //현재 이미지 안보이고, 0.3s 지나면 새로운 주소 변경 보이도록
    $Logo.classList.add('hide');
    setTimeout(function(){
        $Logo.setAttribute('src', newImgPath);
        $Logo.classList.remove('hide');
    }, 300)
}