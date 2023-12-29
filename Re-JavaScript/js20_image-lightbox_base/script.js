//문서자체에 클릭이 생기면 할일 
document.addEventListener('click', lightbox);

function lightbox(ev){
    // 누굴 클릭했는지 알수있는방법
    var elem = ev.target,
        elemId = elem.getAttribute('id'), //속성중에 아이디가 있다면
        lightBoxImg = document.getElementById('lightbox-image'),
        lightBox = document.getElementById('lightbox-overlay'),
        //[1] 새로운 이미지의 요소를 만들어줌 / 이미지의 src를 생성할 수 있게 도와줌
        newImg = new Image(); 
        /*
            var img = new Image();  // (1) 이요소를 선택을 해야지만
            img.src = "myimage.png" // (2) 예를 들어 "myimage.png" 를 새로 넣어줄 수 있습니다.

            var img = new Imgae();
            img.src = '새로운값';
            A.src = "b" a요소의 src의 속성의 값을 b로 교체한다

            A.getAttribute(a) = A요소의 속성중 b라는 속성의 값을 가져옴
            A.hasAttribute(a) = A요소가 b라는 속성이 있는지, 없는지 확인 있으면 true 없으면 false 

            .onload = 화면에 로드가 되면 할일 
        */
       if(elem.hasAttribute('data-lightbox')){
            //링크의 기본속성을 막지 못하면 새로고침한거랑 똑같음
            ev.preventDefault(); 

            // [1] lightBoxImg의 이미지를 load를 하고  
            //로드 되면 할일 .onload
            newImg.onload = function(){
                //클릭한 그 html 
                lightBoxImg.src = this.src; //새로 생성된 이미지에 src 속성을 빈속성을 넣는다.
            }

            //[2] data-lightbox의 속성의 값을 가져와서 
            newImg.src = elem.getAttribute('data-lightbox');
            console.log(newImg.src);
            lightBox.classList.add('visible');
        }

        if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image'){
            lightBox.classList.remove('visible');
        }

}