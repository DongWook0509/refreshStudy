const links = document.querySelectorAll('.container a'); //배열마다 들어와야 quertAelectAll
const bg = document.querySelector('.bg');
const showClass = 'bg-show';

for (const link of links) {
    //이미지로 생성하여 빠르게 로드 될 수 있게하고 배경으로 불러올 예정
    const img = new Image(); //생성한 image
    img.src = link.dataset.bg;
    //dataset 객체를 통해 data 속성을 가져오기 위해선, data- 뒤의 속성 이름 부분을 사용해 속성을 가져옵니다
    console.log(link.dataset.bg);

    //링크 하나하나에다가 마우스롤 올리면
    link.addEventListener('mouseenter',function(){
        /*빽틱 사용하면 문자열 그대로 지정이 가능*/
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
        document.body.classList.add(showClass);
    });

    //링크 하나하나에다가 마우스가 나가면
    link.addEventListener('mouseleave',function(){
        document.body.classList.remove(showClass);
    });
}
/*
    for (var i = 0; i < links.length; i++){

    }
*/
