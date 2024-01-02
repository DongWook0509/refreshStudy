var img = document.querySelectorAll('.gallery img'),
    lightbox = document.querySelector('#lightbox-overlay'),
    lightboxImg = lightbox.querySelector('img');

    console.log(img);

for (var i =0; i < img.length; i++){
    img[i].addEventListener('click', function(){
        var newImgSrc = this.getAttribute('data-lightbox');
        console.log(newImgSrc);

        //lightboxImg의 scr의 값을 큰 이미지의 경로로 지정
        //이미지가 비어있는곳에 곳에 아까 콘솔에 찍었던 경로가 잘 나와있음 
        lightboxImg.setAttribute('src', newImgSrc);
        
        //lightbox 보이도록 
        lightbox.classList.add('visible');
    })
}

//lightbox를 클릭하면 다시 사라지도록 
lightbox.addEventListener('click', function(){
    this.classList.remove('visible');
});