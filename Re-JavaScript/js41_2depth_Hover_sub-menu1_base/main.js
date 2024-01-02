//1번째 방법
/**
var header = document.querySelector('header'),
    nav = document.querySelector('nav');

    //nav에 마우스를 올리면 header 높이가 270으로 
    //나가면 header의 높이를 50으로 바뀌게 설정

    nav.addEventListener('mouseover', function(){
        header.style.height = '270px';
    });

    nav.addEventListener('mouseout', function(){
        header.style.height = '50px';
    });
*/

/* 
//2번째 방법
var header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('.mainmenu > li'),
    subMenu = document.querySelectorAll('.submenu'),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;
    
    //var B = A.offsetHeight; //border까지의 높이 
    //var B = A.clientHeight; //padding까지의 높이 
    
    //변수명 subMenuHeight에 subMenu 중에서 가장 높이가 큰 요소의 높이를 구해서 저장
    
   //subMenu 중 가장 높은 것을 if문에 적어야 함
   //subMenuHeight = subMenu[0].offsetHeight;
   //subMenuHeight = subMenu[1].offsetHeight;
   //subMenuHeight = subMenu[2].offsetHeight;
   //subMenuHeight = subMenu[3].offsetHeight;

   for(var i = 0;  i < subMenu.length; i++){
        if ( subMenu[i].offsetHeight > subMenuHeight){
            subMenuHeight = subMenu[i].offsetHeight;
        }
   }

   //mainMenuList에 마우스를 올리면 header 높이를 headerHeight와 subMenuHeigh를 더한 최종 크기로 변경
   //mainMenuList에 마우스를 나가면 headerHeight로 변경 
   for (var i = 0; i < mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover', function(){
        header.style.height = headerHeight + subMenuHeight + 'px';
    });
    mainMenuList[i].addEventListener('mouseout', function(){
        header.style.height = headerHeight + 'px';
    });
   } 
*/

//3번째 방법 : submenu의 단일 높이 + header 높이 메뉴 
var header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('.mainmenu > li'),
    subMenu = document.querySelectorAll('.submenu'),
    headerHeight = header.offsetHeight;
    
    //var B = A.offsetHeight; //border까지의 높이 
    //var B = A.clientHeight; //padding까지의 높이 
    
    //변수명 subMenuHeight에 subMenu 중에서 가장 높이가 큰 요소의 높이를 구해서 저장
    
   //subMenu 중 가장 높은 것을 if문에 적어야 함
   //subMenuHeight = subMenu[0].offsetHeight;
   //subMenuHeight = subMenu[1].offsetHeight;
   //subMenuHeight = subMenu[2].offsetHeight;
   //subMenuHeight = subMenu[3].offsetHeight;


   //mainMenuList에 마우스를 올리면 header 높이를 headerHeight와 subMenuHeigh를 더한 최종 크기로 변경
   //mainMenuList에 마우스를 나가면 headerHeight로 변경 
        /*
            마우스가 올라가 그 요소의 자식요소의(ul)의 높이를 변수명 subMenuHeight 저장하고
            subMenuHeight wjwkdgkrh 
            header의 높이를 headerHeight + subMenuHeight로 변경
        */  
    for (var i = 0; i < mainMenuList.length; i++){
        mainMenuList[i].addEventListener('mouseover', function(){

            subMenuHeight = this.querySelector('ul').offsetHeight;
            header.style.height = headerHeight + subMenuHeight + 'px';

        });
        mainMenuList[i].addEventListener('mouseout', function(){
            header.style.height = headerHeight + 'px';
        });
    } 