document.addEventListener('DOMContentLoaded', function(){

    var $window  = window,
        $body = document.querySelector('body');
        $header = document.querySelector('.page-header'),
        //A.innerText : 내용(content)만
        //A.innerHTML : 태그형식으로 변환
        $headerclone = $header.innerHTML;
        //화면에서 떨어진 거리 
        //offsetTop : 요소의 윗면 경계가 최상의 요소의 윗면 경계와 얼마만큼 떨어져있나 거리를 반환
        //offsetHeight : border까지의 거리 
        //clientHeight : padding까지의 거리 
        $threshold = $header.offsetTop + $header.offsetHeight;
        //새 요소를 생성 document.createElement('div');
        $headercloneContainer = document.createElement('div');
        $headercloneContainer.classList.add('page-header-clone');

        // var c = A.innerHTML : html형식의 내용을 C에 저장
        // A.innerHTML = B     : A요소의 내용으로 B를 지정(교체)
        $headercloneContainer.innerHTML = $headerclone;
        console.log($headercloneContainer);

        //body 자식요소로 $headerCloneContainer 추가 
        //A.appendChild(B); A요소의 자식요소로 B를 추가한다.
        $body.appendChild($headercloneContainer);

        // document.documentElement.scrollTop
        // window.pageYOffset : 스크롤의 양  

        $window.addEventListener('scroll', function(){
            if(this.pageYOffset > $threshold ){
                $headercloneContainer.classList.add('visible');
            } else {
                $headercloneContainer.classList.remove('visible');
            }
        })

}); //DOMContentLoaded 