//ecma2016 const, let, `, =>

const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
const colors = ['deepskyblue','orange','black','green','gold','magenta','darkblue'];

//링크 

for(let i = 0; i<links.length; i++){
    //links[i].addEventListener('click', function(e){e.preventDefault();});
    //links[i].addEventListener('click', function(){alert('경고');});
    //links[i].addEventListener('click', => alert('경고'););
    links[i].addEventListener('click', (e) => e.preventDefault());
    links[i].addEventListener('mouseenter', mouseenterFunc);

}

function mouseenterFunc(){
    if(!this.parentNode.classList.contains('active')){
        for(let i = 0; i<links.length;i++){
            if(links[i].parentNode.classList.contains('active')){
                links[i].parentNode.classList.remove('active');
            }
            links[i].style.opacity = '0.25';
        }//마우스가 올라가지 않은 다른메뉴들 마다 할일

        this.parentNode.classList.add('active');
        this.style.opacity = '1';

        //이 크기들을 target에다가 지정을 해줘야 합니다.
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random() * links.length)];    

        //빽틱
        //target.style.width = width + 'px';
        target.style.width =  `${width}px`;
        target.style.height =  `${height}px`;
        target.style.left =  `${left}px`;
        target.style.top =  `${top}px`;
        target.style.borderColor = color;

    }
}//mouseenterFunc : 링크에 마우스를 올렸을때

// 마우스를 올렸을때 active의 있는 값들을 다시 구해요
function resizeFunc(){
    const active = document.querySelector('.mynav li.active');

    if(active){
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left =  `${left}px`;
        target.style.top =  `${top}px`;
    }
}

//윈도우에 사이즈가 바뀌면
window.addEventListener('resize', resizeFunc);