/*
    tab-content 안의 div들 모두 안보이도록 한다.

    링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTarget에 저장
    저장된 값에서 #을 삭제한다.
    var tabTarget = tabs-1

    document.getElementById(tab-1).style.display = 'block'
*/
var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content > div');


//클릭한 녀석이 그게 누군지 (target)을 알아야 합니다. 
for(var i = 0; i < targetLink.length; i++){
    
    targetLink[i].addEventListener('click',function(e){
        //링크의 속성을 막아줌 
        e.preventDefault();
        //targetLink 속성중에 href의 속성의 값을 가져옴
        var orgTarget = e.target.getAttribute('href');
        var tabTarget = orgTarget.replace('#', '');
        
        //tabContent가 모두 안 보이게 한 다음에 내가 원하는것만 보이게 함
        for(var x = 0; x < tabContent.length; x++){
            tabContent[x].style.display = 'none';
        }

        document.getElementById(tabTarget).style.display = 'block';
        
        for( var j = 0; j < targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
    
}

//시작하자마자 실행
document.getElementById('tabs-1').style.display = 'block';



/*
var orgTarget = '#tabs-1'; //a.replace('b', 'c');
var tabTarget = orgTarget.replace('#','');
document.getElementById('tabs-1').style.display = 'block';
*/