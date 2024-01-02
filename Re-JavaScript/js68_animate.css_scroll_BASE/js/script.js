/*
클래스의 추가 유무에 따라 생기니까 한번만 작동하게 let excuted = false;를 안해도 됨

윈도우 스크롤 생기면 할일
    animateTarget 마다 각각 할일
    스크롤양이 각 animateTarget 요소의 화면상단에서의 거리(-400)보다 많다면
        그 요소의 data-effect 속성명 값을 확인 -> 그 요소의 class명으로 추가한다.
*/

// 스크롤 하기전에 안보이게 끔 
let animateTarget = document.querySelectorAll('[data-effect]');

window.addEventListener('scroll', function(){
    let sct =  this.window.pageYOffset;

    animateTarget.forEach(function(item, index){
        let targetOst = item.offsetTop - 600;
        console.log(sct , targetOst);
        if (sct > targetOst) {
            let targetClass = item.getAttribute('data-effect');
            item.classList.add(targetClass);
        }
    });
})