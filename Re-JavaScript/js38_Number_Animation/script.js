var paenlQuestion = document.querySelectorAll('.panel-question');
var collapseBtn = document.querySelector('#btn-collapse');

/*
    panelQuestion을 클릭하면 
    모든 panelQuestion의 active 제거하고 
    클릭한 그 panelQuestion에만 active 추가한다.
*/

for (var i = 0; i < paenlQuestion.length; i++){
    paenlQuestion[i].addEventListener('click', function(){
        closeAll();
        this.classList.add('active');
    });
}

collapseBtn.addEventListener('click', function(){
        closeAll();
});

function closeAll(){
    for(var x = 0; x < paenlQuestion.length; x++){
        paenlQuestion[x].classList.remove('active');
    }
}