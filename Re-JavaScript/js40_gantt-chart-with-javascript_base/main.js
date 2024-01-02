window.addEventListener('load', createChart);
window.addEventListener('resize', createChart);

//너비만 바꾸도록 차트안에스 스크립트를 짤꺼임
function createChart(e) {
    const days = document.querySelectorAll('.chart-values li');
    const tasks = document.querySelectorAll('.chart-bars li');
    const daysArray = [...days];
    //nodeList -> 배열 Array로 만드는 방법
    //Array.from(days);
    //[...days]

    //tasks.forEach(function(currentValue, index, array){})
    //el은 li들을 의미 
    tasks.forEach(el => {
        //시작날짜에서 2분의 1이라는게 있으면 해서 변수명 하나 더 만듬 / 시작날짜와 종료날짜를 변수명으로 만듭니다.
        //변수지정 attr('data-duration')
        //시작날짜랑 종료날짜는 하이픈으로 구별 
        const duration = el.dataset.duration.split('-');
        const startDay = duration[0];
        console.log(startDay);
        const endDay = duration[1];
        //let은 scope 안에서 쓸 수 있는변수명 
        let left = 0,
            width = 0;
        //data-duration 의 너비 이만큼을 쓰게해 

        //바의 left 확인하기
        if (startDay.endsWith('½')) {
            // day는 .chart-values li
            // filter를 이용해서 같은지 찾음
            // .chart-values li의 내용 day.textContent
            // thu 와 tue½ 가 똑같다는걸 쓰기 위해 slice 를  해서 맞춰줍니다.
            const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
        } else {
            //2분의 1을 짜를필요가 없다
            const filteredArray = daysArray.filter(day => day.textContent == startDay);
            left = filteredArray[0].offsetLeft;
        }
         //바의 종료일을 계산해서 width 확인하기 
        if(endDay.endsWith('½')){
            const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
            //600-400 
        }else{
            const filteredArray = daysArray.filter(day => day.textContent == endDay);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }

        //left, width li css 지정 (빽틱사용 )
        el.style.left = `${left}px`; // el.style.left = left + `px`
        el.style.width= `${width}px`;
        if(e.type == 'load'){
            el.style.backgroundColor = el.dataset.color;
            el.style.opacity = 1;
        }
    });//forEach
}//createChart