/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highLight = document.querySelector('.highlight');

tabMenu.forEach(function(item, idx){
    item.addEventListener('click', function(e){
        e.preventDefault();
        showContent(idx);
        moveHighLight(idx);
    });
});

function showContent(num){
    tabContent.forEach(function(item){
        //전부안보이게 하고 
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
}

function moveHighLight(num){
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;
    console.log(newLeft);
    console.log(newWidth);
    highLight.style.left = newLeft + 'px';
    highLight.style.width = newWidth + 'px';

}