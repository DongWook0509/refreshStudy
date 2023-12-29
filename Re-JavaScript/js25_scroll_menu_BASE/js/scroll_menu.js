//문서가 로드되면 할일
document.addEventListener('DOMContentLoaded', function(){
  //변수지정
  var $menu = document.querySelectorAll('#top_menu ul li');
  var $contents = document.querySelectorAll('#contents > section');
  var $lastPos = 0; // 현재위치의 스크롤의 양을 저장

  //메뉴를 클릭하면 할일 
  for(var i = 0; i < $menu.length; i++){
    $menu[i].addEventListener('click', function(ev){
      ev.preventDefault();
      var idx = this.getAttribute('data-num');
      var tt = $contents[idx].offsetTop;

      // 윈도우에 스크롤을 만들기
      // window.scroll(0,tt); //해당위치로 '뙇'하고 이동 
      // window.scrollTo(0, tt); //해당위치로 이동 
      // 대상.scrollIntoView(); //대상위치로 이동
      // window.scrollBy(x, -50)  //  현재위치에서 50뺀 위치로 이동, 상대값

      // 일정시간마다 스크롤 변동시켜서 위치로 이동
      var scrollInterval = setInterval(function(){
        // 현재위치스크롤양 < tt , 현재위치스크롤양 >  tt
        if(tt - window.pageYOffset > 50 || window.pageYOffset - tt > 50 ){
          if(tt > $lastPos){
            window.scrollBy(0, 55);
          }else{
            window.scrollBy(0, -55); //순간 그 위치를 지나가버리니까 거의 근접하면
          }
        }else{ // tt == windiw.pageYOffset
          clearInterval(scrollInterval);
          window.scrollTo(0,tt);
          $lastPos = tt; //1200
        }
      }, 15);

    });
  }// for 메뉴 반복

  //스크롤이 생기면 메뉴 활성화 
  window.addEventListener('scroll', function(){
    var $sct = this.pageYOffset + 50;

    for(var i = 0; i < $contents.length; i++){
      if($contents[i].offsetTop <= $sct){
        var idx = $contents[i].getAttribute('data-num');
        //모든 메뉴에 on을 제거하고 , 인덱스 번호 해당하는 메뉴에만 on 추가
        for (var a = 0; a < $menu.length; a++){
          $menu[a].classList.remove('on');
        }
        $menu[idx].classList.add('on');
      }
    } //for 반복문 $content
  }) //window scroll event


}); //DOMContentLoaded